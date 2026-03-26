"use client";

import { useRef, useState, useEffect, useLayoutEffect, useCallback, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import type { TimelineEvent, TimelineEra } from "../../data/timeline";
import TimelineBackgroundMedia from "./TimelineBackgroundMedia";
import TimelineEventCard from "./TimelineEventCard";
import TimelineEventDetail from "./TimelineEventDetail";
import TimelineTrack from "./TimelineTrack";
import TimelineEraNav from "./TimelineEraNav";

interface Props {
  events: TimelineEvent[];
  eras: TimelineEra[];
  categories: string[];
  initialEventId?: string;
}

export default function TimelineScroller({ events, eras, categories, initialEventId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  // Derive initial active index directly from initialEventId so the visual is
  // correct on first render regardless of scroll position timing.
  const initialIdx = useMemo(() => {
    if (!initialEventId) return 0;
    const i = events.findIndex((e) => e.id === initialEventId);
    return i >= 0 ? i : 0;
  }, [events, initialEventId]);

  const reducedMotion = useReducedMotion();
  const CARD_SLOT = 560 + 48; // inactive card width + gap
  const lastIdx = events.length - 1;

  // Always start visual state from the last event — the intro animation
  // will spring to the target. With reduced motion the layout effect jumps
  // directly (no animation, no hydration mismatch since both SSR and
  // client start at lastIdx).
  const [activeIndex, setActiveIndex] = useState(lastIdx);
  const [scrollProgress, setScrollProgress] = useState(lastIdx / Math.max(1, events.length));
  const [pinned, setPinned] = useState(!!initialEventId);
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const startOffsetRef = useRef(200);

  // While settling, handleScroll is suppressed. Cleared once intro finishes.
  const isSettling = useRef(!!initialEventId);

  const computeStartOffset = useCallback(() => {
    const vw = window.innerWidth;
    const activeW = Math.min(vw * 0.9, 1060);
    startOffsetRef.current = Math.max(0, Math.round((vw - activeW) / 2) - 48);
  }, []);

  const targetX = useMotionValue(startOffsetRef.current - lastIdx * CARD_SLOT);
  const springX = useSpring(targetX, { stiffness: 45, damping: 22, restDelta: 0.5 });

  // Synchronously before paint:
  // 1. Compute startOffset
  // 2. Disable browser scroll restoration so it can't override our position
  // 3. Jump scroll to the initial event position
  useLayoutEffect(() => {
    computeStartOffset();
    history.scrollRestoration = "manual";

    const doInitialScroll = () => {
      const el = containerRef.current;
      if (!el || !initialEventId) return;
      const scrollRange = el.offsetHeight - window.innerHeight;
      if (scrollRange <= 0) return;
      // Scroll to the CENTER of the event zone — not the exact boundary —
      // so any sub-pixel rounding or layout shift can't push us into the
      // neighbouring event.
      const target = el.offsetTop + ((initialIdx + 0.5) / events.length) * scrollRange;
      window.scrollTo({ top: target, behavior: "instant" });
    };

    doInitialScroll();
    // Retry after one frame in case Next.js router resets scroll.
    // Then kick off the intro animation: spring from the last event to the target.
    let innerRaf = 0;
    // Check reduced motion directly since the hook value isn't stable yet
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const raf = requestAnimationFrame(() => {
      doInitialScroll();
      innerRaf = requestAnimationFrame(() => {
        if (prefersReduced || !initialEventId) {
          // No intro animation — jump directly to the target
          targetX.jump(startOffsetRef.current - initialIdx * CARD_SLOT);
          setActiveIndex(initialIdx);
          isSettling.current = false;
          return;
        }
        // Start the intro animation — spring from last event to the target.
        targetX.set(startOffsetRef.current - initialIdx * CARD_SLOT);

        // Track the spring position during intro to update activeIndex
        // as cards fly past. Once the spring settles near the target,
        // lock in the final index and unsuppress handleScroll.
        const unsub = springX.on("change", (v: number) => {
          const offset = startOffsetRef.current - v;
          const idx = Math.round(offset / CARD_SLOT);
          const clamped = Math.max(0, Math.min(events.length - 1, idx));
          setActiveIndex(clamped);

          // Check if we've arrived at the target
          const targetPos = startOffsetRef.current - initialIdx * CARD_SLOT;
          if (Math.abs(v - targetPos) < 2) {
            setActiveIndex(initialIdx);
            isSettling.current = false;
            unsub();
          }
        });
      });
    });

    window.addEventListener("resize", computeStartOffset);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(innerRaf);
      window.removeEventListener("resize", computeStartOffset);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Jump the spring to the last-event position (with correct startOffset)
  // before paint. The intro animation will then spring to the target event.
  useLayoutEffect(() => {
    const pos = startOffsetRef.current - lastIdx * CARD_SLOT;
    targetX.jump(pos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Filter events by category ── */
  const filteredEvents = useMemo(
    () =>
      activeCategory
        ? events.filter((e) => e.category === activeCategory)
        : events,
    [events, activeCategory]
  );

  /* ── Desktop: map vertical scroll → horizontal position ── */
  const handleScroll = useCallback(() => {
    if (isSettling.current) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollRange = el.offsetHeight - window.innerHeight;
    if (scrollRange <= 0) return;

    const entering = rect.top <= 0;
    const exiting = rect.bottom <= window.innerHeight;
    setPinned(entering && !exiting);

    const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollRange));
    setScrollProgress(rawProgress);

    const n = filteredEvents.length;
    // Add 0.5 / n offset so the midpoint of each zone maps to its index.
    // Without this, the exact boundary (idx/n) is ambiguous and sub-pixel
    // rounding can push into the previous event.
    const idx = Math.min(n - 1, Math.floor(rawProgress * n + 0.001));
    setActiveIndex(idx);

    targetX.set(startOffsetRef.current - (idx * CARD_SLOT));
  }, [filteredEvents.length, CARD_SLOT, targetX]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Don't call handleScroll here — initial state is pre-seeded and
    // the settling guard handles the transition. The scroll listener
    // will pick up from the first real scroll event.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const goTo = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const scrollRange = el.offsetHeight - window.innerHeight;
    // Scroll to the CENTER of the event zone so handleScroll maps back
    // to the same index reliably (no boundary ambiguity).
    const target = el.offsetTop + ((idx + 0.5) / filteredEvents.length) * scrollRange;
    window.scrollTo({ top: target, behavior: reducedMotion ? "auto" : "smooth" });
  };

  /** Jump to event by index in the full events array — used by era nav */
  const goToEventIndex = (fullIndex: number) => {
    const targetEvent = events[fullIndex];
    if (!targetEvent) return;
    // Find this event in filtered list
    const filtIdx = filteredEvents.findIndex((e) => e.id === targetEvent.id);
    if (filtIdx >= 0) goTo(filtIdx);
    else {
      // Event not visible — clear filter and jump
      setActiveCategory(null);
      // goTo after filter clears — defer one tick
      setTimeout(() => {
        goTo(fullIndex);
      }, 0);
    }
  };

  // Clamp active index to the filtered list so we never render empty when
  // a filter reduces the number of events beneath the current index.
  const safeIndex = Math.max(
    0,
    Math.min(activeIndex, Math.max(0, filteredEvents.length - 1))
  );
  const activeEvent = filteredEvents[safeIndex];

  // Clamp active index whenever the filtered list shrinks.
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, filteredEvents.length - 1)));
  }, [filteredEvents.length]);

  // When the user changes the category filter, scroll so the timeline
  // viewport is visible. We track the *previous* category to distinguish
  // user-initiated filter changes from unrelated re-renders.
  const prevCategoryRef = useRef(activeCategory);
  useEffect(() => {
    if (prevCategoryRef.current === activeCategory) return;   // same category — skip
    prevCategoryRef.current = activeCategory;

    const el = containerRef.current;
    if (!el) return;
    window.scrollTo({ top: el.offsetTop, behavior: reducedMotion ? "auto" : "smooth" });
  }, [activeCategory, reducedMotion]);

  // If there are no events for the current filter, render nothing.
  if (filteredEvents.length === 0) return null;

  /* ── Local progress within the active event window (parallax) ── */
  const eventWindow = 1 / filteredEvents.length;
  const eventStart = activeIndex * eventWindow;
  const localProgress =
    eventWindow > 0
      ? Math.max(0, Math.min(1, (scrollProgress - eventStart) / eventWindow))
      : 0;

  return (
    <>
      {/* ═══════════ Desktop: pinned horizontal experience ═══════════ */}
      <div
        ref={containerRef}
        className="hidden md:block relative"
        style={{ height: `${(filteredEvents.length + 1) * 100}vh` }}
        aria-hidden="true"
      />

      {/* Fixed viewport overlay */}
      <div
        className={`hidden md:block fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-background transition-opacity duration-300 ${
          pinned ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background media */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <TimelineBackgroundMedia
              images={activeEvent.media}
              progress={localProgress}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content layer */}
        <div className="relative z-20 h-full flex flex-col justify-between py-16 px-6 md:px-12">
          {/* Top: track */}
          <div className="space-y-4">
            <div className="flex justify-center pt-2">
              <TimelineTrack
                events={filteredEvents}
                eras={eras}
                activeIndex={activeIndex}
                onSelect={goTo}
              />
            </div>
          </div>

          {/* Middle: Horizontally-scrolling card strip */}
          <div className="flex-1 flex items-start overflow-visible relative py-8">
            <motion.div
              ref={stripRef}
              className="relative flex gap-12 will-change-transform"
              style={{ x: springX }}
            >
              {filteredEvents.map((evt, i) => (
                <TimelineEventCard
                  key={evt.id}
                  event={evt}
                  isActive={i === activeIndex}
                  onExpand={() => setDetailOpen(true)}
                />
              ))}
            </motion.div>
          </div>

          {/* Next / Prev navigation arrows */}
          <div className="absolute right-6 md:right-12 bottom-1/2 translate-y-1/2 z-20 flex flex-col gap-3">
            <button
              onClick={() => goTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous event"
              className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-lg disabled:opacity-20 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-transform duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (activeIndex === filteredEvents.length - 1) {
                  document.getElementById("whats-next")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  goTo(activeIndex + 1);
                }
              }}
              aria-label={activeIndex === filteredEvents.length - 1 ? "See what's next" : "Next event"}
              className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Detail drawer — outside overflow-hidden, overlays everything */}
        <TimelineEventDetail
          event={activeEvent}
          isOpen={detailOpen}
          onClose={() => setDetailOpen(false)}
        />

        {/* Floating era nav — show on hover/focus via bright toggle button (desktop) */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center px-6 md:px-12">
          <div className="relative">
            <button
              aria-haspopup="true"
              aria-expanded={filtersOpen}
              aria-label={filtersOpen ? "Hide filters" : "Show filters"}
              onClick={() => setFiltersOpen((o) => !o)}
              className={`px-4 py-2 rounded-full font-mono uppercase tracking-widest shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-150 ${
                filtersOpen
                  ? "bg-background/60 backdrop-blur-md border border-white/10 text-foreground/60"
                  : "bg-accent text-background"
              }`}
            >
              {filtersOpen ? "Hide filters" : "Show filters"}
            </button>

            {/* Panel visible when filtersOpen */}
            <div className={`transform transition-all duration-[400ms] ease-out absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 ${
              filtersOpen
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-y-4 scale-95 pointer-events-none"
            }`}>
              <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-white/5 px-5 py-3 w-[min(90vw,1060px)]">
                <TimelineEraNav
                  eras={eras}
                  events={events}
                  activeIndex={events.findIndex((e) => e.id === activeEvent.id)}
                  onSelectEra={goToEventIndex}
                  categories={categories}
                  activeCategory={activeCategory}
                  onFilterCategory={setActiveCategory}
                  horizontal
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ Mobile: intentional vertical experience ═══════════ */}
      <div className="md:hidden">
        {/* Mobile era navigation */}
        <div className="sticky top-0 z-30 bg-background/90 backdrop-blur-lg border-b border-white/5 px-6 py-4">
          <TimelineEraNav
            eras={eras}
            events={events}
            activeIndex={events.findIndex((e) => e.id === activeEvent.id)}
            onSelectEra={(idx) => {
              const targetId = events[idx]?.id;
              if (targetId) {
                const el = document.getElementById(`mobile-event-${targetId}`);
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            categories={categories}
            activeCategory={activeCategory}
            onFilterCategory={setActiveCategory}
          />
        </div>

        {/* Era-grouped vertical cards */}
        <div className="px-6 py-8 space-y-20">
          {eras.map((era) => {
            const eraEvents = filteredEvents.filter((e) => e.era === era.id);
            if (eraEvents.length === 0) return null;
            return (
              <section key={era.id} aria-label={era.label}>
                {/* Era header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent/60">
                    {era.label}
                  </span>
                  <span className="h-px flex-1 bg-accent/10" />
                </div>

                <div className="space-y-12">
                  {eraEvents.map((evt) => (
                    <MobileEventCard key={evt.id} event={evt} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* ─── Mobile event card — richer than V1 ─── */

function MobileEventCard({ event }: { event: TimelineEvent }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={`mobile-event-${event.id}`}
      className="lab-card space-y-5 scroll-mt-24"
    >
      {/* Meta */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="analytical-label text-accent">{event.category}</span>
        {event.milestone && (
          <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[8px] font-mono text-accent uppercase tracking-widest">
            {event.milestone}
          </span>
        )}
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-[9px] text-muted/50">
          {event.start}{event.end ? ` — ${event.end}` : " — Present"}
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tightest uppercase">
        {event.title}
      </h2>
      <p className="text-muted text-sm">{event.subtitle}</p>

      {/* Quote */}
      {event.quote && (
        <blockquote className="border-l-2 border-accent/20 pl-3 text-muted/50 italic text-sm">
          &ldquo;{event.quote}&rdquo;
        </blockquote>
      )}

      <p className="text-muted/80 text-sm leading-relaxed">{event.summary}</p>

      {/* Expand toggle */}
      {(event.body || (event.achievements && event.achievements.length > 0) || event.links) && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-ghost text-xs flex items-center gap-2"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
          <svg
            width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform ${expanded ? "rotate-90" : ""}`}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Expanded content */}
      {expanded && (
        <div className="space-y-4 pt-2 border-t border-white/5">
          {event.body && (
            <p className="text-muted/70 text-sm leading-relaxed">{event.body}</p>
          )}

          {event.achievements && event.achievements.length > 0 && (
            <ul className="space-y-1.5">
              {event.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted/70">
                  <span className="mt-1 w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          )}

          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-mono text-muted/40 uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {event.links && event.links.length > 0 && (
            <div className="space-y-1.5">
              {event.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block text-xs text-accent/70 hover:text-accent"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Image strip */}
      {event.media.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pt-2 scrollbar-none">
          {event.media.map((img) => (
            <figure key={img.id} className="flex-shrink-0">
              <div className="w-20 h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt || "Timeline event media"}
                  className="w-full h-full object-cover opacity-50"
                  loading="lazy"
                  decoding="async"
                  style={img.position ? { objectPosition: img.position } : undefined}
                />
              </div>
              {img.caption && (
                <figcaption className="mt-1 text-[8px] text-muted/30 font-mono max-w-[80px] truncate">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
