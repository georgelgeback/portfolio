#!/usr/bin/env bash
# Renders scripts/og.html to public/og.png (1200x630 social preview card).
#
# The card uses the site's Geist fonts, which next/font downloads into the
# build output - so this script needs a build to exist (it makes one if not)
# and pulls the correct font files out of the built CSS.
#
# Usage: scripts/build-og.sh   (CHROME=chromium-browser to override browser)
set -euo pipefail

cd "$(dirname "$0")/.."

CHROME="${CHROME:-chromium-browser}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Make sure a build with font files exists
if ! ls .next/static/chunks/*.css >/dev/null 2>&1; then
  echo "No build found, building ..."
  npm run build >"$TMP/build.log" 2>&1 || {
    echo "Build failed; log follows:" >&2
    cat "$TMP/build.log" >&2
    exit 1
  }
fi

# The built CSS declares one latin ("-s.p.") woff2 per font family
font_file() { # $1 = font-family value to look for
  grep -hoE '@font-face\{[^}]*\}' .next/static/chunks/*.css |
    grep "font-family:$1;" |
    grep -oE 'media/[^)]*-s\.p\.[^)]*\.woff2' |
    head -1
}
SANS="$(font_file 'Geist')"
MONO="$(font_file 'Geist Mono')"
[ -n "$SANS" ] && [ -n "$MONO" ] || {
  echo "Could not locate Geist font files in .next/static/chunks/*.css" >&2
  exit 1
}

sed -e "s|__SANS__|file://$PWD/.next/static/$SANS|" \
    -e "s|__MONO__|file://$PWD/.next/static/$MONO|" \
    scripts/og.html >"$TMP/og.html"

"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --allow-file-access-from-files --window-size=1200,630 \
  --screenshot=public/og.png "file://$TMP/og.html" 2>/dev/null

echo "public/og.png updated"
