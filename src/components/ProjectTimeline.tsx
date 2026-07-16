"use client";

import * as React from "react";

// Small utility to merge classNames without relying on external utils
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type TimelinePoint = {
  date: string | Date;
  note?: string;
};

export type Timeline = {
  start: string | Date;
  end: string | Date;
  startNote?: string;
  endNote?: string;
  points?: TimelinePoint[];
};

type ProjectTimelineProps = {
  timeline: Timeline;
  className?: string;
};

export function ProjectTimeline({ timeline, className }: ProjectTimelineProps) {
  // Helpers
  const toTs = (d: string | Date) =>
    d instanceof Date ? d.getTime() : new Date(d).getTime();
  const formatDate = (d: string | Date) =>
    new Intl.DateTimeFormat(undefined, {
      month: "short",
      year: "numeric",
    }).format(d instanceof Date ? d : new Date(d));

  const timelineComputed = React.useMemo(() => {
    if (!timeline) return null;
    const rawStart = toTs(timeline.start);
    const rawEnd = toTs(timeline.end);
    const s = Math.min(rawStart, rawEnd);
    const e = Math.max(rawStart, rawEnd);
    const duration = Math.max(e - s, 1);
    const overflow = duration * 0.05; // 5% overflow on each side
    const minTs = s - overflow;
    const maxTs = e + overflow;

    const pct = (t: number) =>
      Math.min(100, Math.max(0, ((t - minTs) / (maxTs - minTs)) * 100));

    const markers = [
      { _ts: s, note: timeline.startNote, date: timeline.start },
      ...(timeline.points ?? []).map((p) => ({ ...p, _ts: toTs(p.date) })),
      { _ts: e, note: timeline.endNote, date: timeline.end },
    ]
      .sort((a, b) => a._ts - b._ts)
      .map((m) => ({ ...m, _pct: pct(m._ts) }));

    // Keep dots from overlapping; labels alternate sides, so this can stay small
    for (let i = 1; i < markers.length; i++) {
      if (markers[i]._pct - markers[i - 1]._pct < 4) {
        markers[i]._pct = markers[i - 1]._pct + 4;
      }
    }

    return {
      startPct: markers[0]._pct,
      endPct: markers[markers.length - 1]._pct,
      markers,
    } as const;
  }, [timeline]);

  if (!timeline || !timelineComputed) return null;

  return (
    <div className={cn("relative mt-2", className)}>
      {/* Only show when there is enough space */}
      <div className="relative hidden md:block">
        <div className="relative h-36">
          {/* Base line (shows overflow area) */}
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-border" />
          </div>

          {/* Project span highlight */}
          <div
            className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-primary/50"
            style={{
              left: `${timelineComputed.startPct}%`,
              right: `${100 - timelineComputed.endPct}%`,
            }}
          />

          {/* Markers, labels alternating above/below the line */}
          {timelineComputed.markers.map((m, idx) => {
            const above = idx % 2 === 0;
            return (
              <div
                key={`${m._ts}-${idx}`}
                className="absolute inset-y-0"
                style={{
                  left: `${m._pct}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="relative flex h-full flex-col items-center justify-center">
                  <div
                    className={cn(
                      "absolute left-1/2 flex w-25 -translate-x-1/2 flex-col items-center",
                      above ? "bottom-1/2 mb-3" : "top-1/2 mt-3",
                    )}
                  >
                    {/* Date sits closest to the line on either side */}
                    {above ? (
                      <>
                        {m.note ? (
                          <div className="text-center text-xs leading-tight text-foreground line-clamp-3">
                            {m.note}
                          </div>
                        ) : null}
                        <div className="mt-1.5 font-mono text-[10px] leading-none whitespace-nowrap text-muted-foreground">
                          {formatDate(m.date)}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-1.5 font-mono text-[10px] leading-none whitespace-nowrap text-muted-foreground">
                          {formatDate(m.date)}
                        </div>
                        {m.note ? (
                          <div className="text-center text-xs leading-tight text-foreground line-clamp-3">
                            {m.note}
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-background"
                    aria-hidden
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
