#!/usr/bin/env bash
# Recursively screenshots /projects/portfolio into public/portfolio.png.
#
# Each pass screenshots the page (which displays public/portfolio.png) and
# then replaces public/portfolio.png with that screenshot, so after N passes
# the image contains itself N levels deep.
#
# Usage: scripts/recursive-screenshot.sh
#   PORT=3999 ITERATIONS=8 CHROME=chromium-browser (defaults, override via env)
set -euo pipefail

cd "$(dirname "$0")/.."

PORT="${PORT:-3999}"
ITERATIONS="${ITERATIONS:-8}"
CHROME="${CHROME:-chromium-browser}"
URL="http://localhost:$PORT/projects/portfolio"
TMP="$(mktemp -d)"

cleanup() {
  [ -n "${SERVER_PID:-}" ] && kill "$SERVER_PID" 2>/dev/null
  rm -rf "$TMP"
}
trap cleanup EXIT

# Serve a production build.
echo "Building ..."
npm run build >"$TMP/build.log" 2>&1 || {
  echo "Build failed; log follows:" >&2
  cat "$TMP/build.log" >&2
  exit 1
}
echo "Starting production server on port $PORT ..."
npx next start -p "$PORT" >"$TMP/server.log" 2>&1 &
SERVER_PID=$!
timeout 60 bash -c "until curl -sf $URL >/dev/null 2>&1; do sleep 1; done" || {
  echo "Server never came up; log follows:" >&2
  cat "$TMP/server.log" >&2
  exit 1
}

for i in $(seq "$ITERATIONS"); do
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --virtual-time-budget=15000 --blink-settings=preferredColorScheme=1 \
    --window-size=1920,1080 --screenshot="$TMP/shot.png" "$URL" 2>/dev/null
  cp "$TMP/shot.png" public/portfolio.png
  echo "pass $i/$ITERATIONS done"
done

echo "public/portfolio.png updated with $ITERATIONS recursive passes"
