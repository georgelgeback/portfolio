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

    const points = (timeline.points ?? [])
      .map((p) => ({ ...p, _ts: toTs(p.date) }))
      .sort((a, b) => a._ts - b._ts)
      .map((p) => ({ ...p, _pct: pct(p._ts) }));

    for (let i = 1; i < points.length; i++) {
      if (points[i]._pct - points[i - 1]._pct < 10) {
        points[i]._pct = points[i - 1]._pct + 10;
      }
    }

    return {
      s,
      e,
      startPct: pct(s),
      endPct: pct(e),
      points,
    } as const;
  }, [timeline]);

  if (!timeline || !timelineComputed) return null;

  return (
    <div className={cn("relative mt-2", className)}>
      {/* Only show when there is enough space */}
      <div className="relative hidden md:block">
        <div className="relative h-20">
          {/* Base line (shows overflow area) */}
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full rounded-full bg-muted" />
          </div>

          {/* Project span highlight */}
          <div
            className="absolute inset-y-0"
            style={{
              left: `${timelineComputed.startPct}%`,
              right: `${100 - timelineComputed.endPct}%`,
            }}
          >
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary/40"
              style={{ left: 0, right: 0 }}
            />
          </div>

          {/* Start tick */}
          <div
            className="absolute"
            style={{
              left: `${timelineComputed.startPct}%`,
              top: 0,
              bottom: 0,
              transform: "translateX(-50%)",
            }}
          >
            <div className="relative flex h-full flex-col items-center justify-center">
              <div className="absolute bottom-1/2 mb-2 flex flex-col items-center">
                {timeline.startNote ? (
                  <div className="max-w-[14rem] text-center text-xs leading-tight text-foreground line-clamp-3">
                    {timeline.startNote}
                  </div>
                ) : null}
                <div className="mt-1 text-[10px] leading-none text-muted-foreground">
                  {formatDate(timeline.start)}
                </div>
              </div>
              <div
                className="h-3 w-3 rounded-full bg-primary ring-2 ring-background shadow"
                aria-hidden
              />
            </div>
          </div>

          {/* Milestone points */}
          {timelineComputed.points.map((p, idx) => (
            <div
              key={`${p._ts}-${idx}`}
              className="absolute"
              style={{
                left: `${p._pct}%`,
                top: 0,
                bottom: 0,
                transform: "translateX(-50%)",
              }}
            >
              <div className="relative flex h-full flex-col items-center justify-center">
                <div className="absolute bottom-1/2 mb-2 flex flex-col items-center">
                  {p.note ? (
                    <div className="max-w-[14rem] text-center text-xs leading-tight text-foreground line-clamp-3">
                      {p.note}
                    </div>
                  ) : null}
                  <div className="mt-1 text-[10px] leading-none text-muted-foreground">
                    {formatDate(p.date)}
                  </div>
                </div>
                <div
                  className="h-3 w-3 rounded-full bg-primary/90 ring-2 ring-background shadow"
                  aria-hidden
                />
              </div>
            </div>
          ))}

          {/* End tick */}
          <div
            className="absolute"
            style={{
              left: `${timelineComputed.endPct}%`,
              top: 0,
              bottom: 0,
              transform: "translateX(-50%)",
            }}
          >
            <div className="relative flex h-full flex-col items-center justify-center">
              <div className="absolute bottom-1/2 mb-2 flex flex-col items-center">
                {timeline.endNote ? (
                  <div className="max-w-[14rem] text-center text-xs leading-tight text-foreground line-clamp-3">
                    {timeline.endNote}
                  </div>
                ) : null}
                <div className="mt-1 text-[10px] leading-none text-muted-foreground">
                  {formatDate(timeline.end)}
                </div>
              </div>
              <div
                className="h-3 w-3 rounded-full bg-primary ring-2 ring-background shadow"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
