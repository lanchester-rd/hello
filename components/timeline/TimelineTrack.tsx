"use client";

import { useMemo } from "react";
import type { TimelineEvent, TimelineEra } from "../../data/timeline";

interface Props {
  events: TimelineEvent[];
  eras: TimelineEra[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function TimelineTrack({ events, eras, activeIndex, onSelect }: Props) {
  const eraLabel = (eraId?: string) => eras.find((e) => e.id === eraId)?.label;

  // One dot per featured (milestone) event only — one per year, first milestone wins.
  const yearTrack = useMemo(() => {
    const seen = new Map<string, { year: string; eventIndex: number; era?: string; milestone?: string }>();
    events.forEach((evt, i) => {
      if (!evt.milestone) return; // only featured events
      const y = String(evt.start);
      if (!seen.has(y)) {
        seen.set(y, { year: y, eventIndex: i, era: evt.era, milestone: evt.milestone });
      }
    });
    return Array.from(seen.values());
  }, [events]);

  const activeYear = String(events[activeIndex]?.start ?? "");
  const activeYearIdx = yearTrack.findIndex((y) => y.year === activeYear);

  const isNewEra = (j: number) => {
    if (j === 0) return true;
    return yearTrack[j].era !== yearTrack[j - 1].era;
  };

  return (
    <nav
      className="relative flex items-center gap-0 select-none overflow-x-auto scrollbar-none"
      aria-label="Timeline navigation"
    >
      {yearTrack.map((entry, j) => {
        const isActive = entry.year === activeYear;
        const isPast = j < activeYearIdx;
        const showEra = isNewEra(j);

        return (
          <div key={entry.year} className="flex items-center">
            {/* Connector line */}
            {j > 0 && (
              <div
                className={`h-px transition-colors duration-300 ${
                  showEra ? "w-10 md:w-20" : "w-8 md:w-16"
                } ${isPast ? "bg-accent/50" : "bg-white/10"}`}
              />
            )}

            <div className="relative flex flex-col items-center">
              {/* Era label above first entry in each era */}
              {showEra && entry.era && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-mono uppercase tracking-widest text-muted/30">
                  {eraLabel(entry.era)}
                </span>
              )}

              <button
                onClick={() => onSelect(entry.eventIndex)}
                className="relative flex flex-col items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
                aria-label={`${entry.year}${entry.milestone ? ` — ${entry.milestone}` : ""}`}
              >
                <span
                  className={`block rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "w-4 h-4 border-accent bg-accent shadow-[0_0_12px_rgba(163,230,53,0.5)]"
                      : isPast
                      ? "w-2.5 h-2.5 border-accent/50 bg-accent/20"
                      : "w-2.5 h-2.5 border-white/20 bg-transparent group-hover:border-white/40"
                  }`}
                />

                {/* Year label */}
                <span
                  className={`font-mono text-[9px] tracking-widest whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-muted/50 group-hover:text-muted"
                  }`}
                >
                  {entry.year}
                </span>

                {/* Milestone label */}
                {entry.milestone && (
                  <span className="font-mono text-[7px] tracking-widest text-accent/40 uppercase whitespace-nowrap">
                    {entry.milestone}
                  </span>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
