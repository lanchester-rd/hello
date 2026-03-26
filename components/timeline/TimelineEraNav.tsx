"use client";

import { motion } from "framer-motion";
import type { TimelineEra, TimelineEvent } from "../../data/timeline";

interface Props {
  eras: TimelineEra[];
  events: TimelineEvent[];
  activeIndex: number;
  onSelectEra: (eventIndex: number) => void;
  categories: string[];
  activeCategory: string | null;
  onFilterCategory: (cat: string | null) => void;
  horizontal?: boolean;
}

export default function TimelineEraNav({
  eras,
  events,
  activeIndex,
  onSelectEra,
  categories,
  activeCategory,
  onFilterCategory,
  horizontal,
}: Props) {
  const activeEvent = events[activeIndex];
  const activeEraId = activeEvent?.era;

  const firstIndexForEra = (eraId: string) =>
    events.findIndex((e) => e.era === eraId);

  const rootClass = horizontal ? "flex flex-col gap-2" : "flex flex-col gap-4";
  const eraNavClass = horizontal
    ? "flex gap-2 items-center flex-wrap px-2"
    : "flex flex-wrap items-center gap-2";
  // When horizontal, make the category row occupy the full width and distribute
  // chips across available space so they don't bunch up at the left.
  const categoryNavClass = horizontal
    ? "flex gap-2 items-center flex-wrap w-full justify-between px-2 scrollbar-none"
    : "flex flex-wrap items-center gap-1.5";

  return (
    <div className={rootClass}>
      {/* Era jump nav */}
      <nav className={eraNavClass} aria-label="Era navigation">
        {eras.map((era) => {
          const isActive = era.id === activeEraId;
          const idx = firstIndexForEra(era.id);
          if (idx < 0) return null;

          return (
            <button
              key={era.id}
              onClick={() => onSelectEra(idx)}
              className={`relative px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive
                  ? "text-background bg-accent"
                  : "text-muted/60 hover:text-muted bg-white/5 hover:bg-white/10"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {era.label}
              {isActive && (
                <motion.span
                  layoutId="era-indicator"
                  className="absolute inset-0 rounded-full bg-accent -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Category filter chips */}
      {categories.length > 1 && (
        <nav className={categoryNavClass} role="group" aria-label="Category filter">
          <button
            onClick={() => onFilterCategory(null)}
            className={`px-2 py-1 rounded text-[9px] font-mono uppercase tracking-widest transition-colors ${
              activeCategory === null
                ? "text-accent border border-accent/40 bg-accent/10"
                : "text-muted/40 border border-white/5 hover:text-muted/70 hover:border-white/10"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterCategory(activeCategory === cat ? null : cat)}
              className={`px-2 py-1 rounded text-[9px] font-mono uppercase tracking-widest transition-colors ${
                activeCategory === cat
                  ? "text-accent border border-accent/40 bg-accent/10"
                  : "text-muted/40 border border-white/5 hover:text-muted/70 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
