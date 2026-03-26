"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SectionHeader from "../../../components/SectionHeader";
import TimelineScroller from "../../../components/timeline/TimelineScroller";
import {
  timelineEvents as staticEvents,
  timelineEras,
  timelineCategories as staticCategories,
} from "../../../data/timeline";
import type { TimelineEvent } from "../../../data/timeline";

export default function TimelinePage() {
  const [events, setEvents] = useState<TimelineEvent[]>(staticEvents);
  const [categories, setCategories] = useState<string[]>(staticCategories);
  const [apiLoading, setApiLoading] = useState(true);

  useEffect(() => {
    fetch("/api/timeline/events")
      .then((r) => {
        if (!r.ok) throw new Error("API unavailable");
        return r.json();
      })
      .then((data: TimelineEvent[]) => {
        if (data.length > 0) {
          setEvents(data);
          setCategories([...new Set(data.map((e) => e.category))]);
        }
        setApiLoading(false);
      })
      .catch(() => {
        // Fallback to static data (already set as defaults)
        setApiLoading(false);
      });
  }, []);

  /* Hide page scrollbar while timeline is mounted */
  useEffect(() => {
    document.documentElement.classList.add("scrollbar-none");
    return () => document.documentElement.classList.remove("scrollbar-none");
  }, []);

  const scrollToTimeline = () => {
    const el = document.getElementById("timeline-start");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-background min-h-screen">
      {/* API loading indicator — slim accent bar */}
      {apiLoading && (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] overflow-hidden">
          <div className="h-full bg-accent animate-[loading-bar_1.4s_ease-in-out_infinite]" />
        </div>
      )}
      {/* Hero header */}
      <section className="relative py-32 md:py-40 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeader
            label="Autobiography"
            title="The Timeline."
            description="A chronological map of the journey — from early exploration through design, research, and venture building."
          />
          <button
            onClick={scrollToTimeline}
            className="btn-primary flex items-center gap-3 group"
          >
            <span>Begin</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
            <Link
              href="/admin"
              className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors"
            >
              Open Admin
            </Link>
            <Link
              href="/admin/timeline"
              className="px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors"
            >
              Timeline Editor
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline experience */}
      <div id="timeline-start">
        <TimelineScroller
          events={events}
          eras={timelineEras}
          categories={categories}
          initialEventId="xpate"
        />
      </div>

      {/* LEARN platform CTA — pinned scroll section */}
      <LearnCTA />
    </main>
  );
}

/* ─── Pinned LEARN CTA ─── */
function LearnCTA() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const entering = rect.top <= 0;
      const exiting = rect.bottom <= window.innerHeight;
      setPinned(entering && !exiting);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} id="whats-next" className="hidden md:block relative" style={{ height: "200vh" }}>
      {/* Fixed viewport overlay — visible only while pinned */}
      <div
        className={`fixed inset-0 z-40 h-screen w-screen transition-opacity duration-500 ${
          pinned ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <section className="relative h-full flex items-center justify-center px-6 md:px-12 bg-background-layer1 overflow-hidden">
          {/* Background visuals */}
          <div className="absolute inset-0 z-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e635_1px,transparent_1px),linear-gradient(to_bottom,#a3e635_1px,transparent_1px)] bg-[size:80px_80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/20 rounded-full animate-drift" />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
            <div className="space-y-4">
              <span className="analytical-label text-accent">What&rsquo;s Next</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tightest uppercase">
                See What We&rsquo;re Building Now.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted leading-relaxed font-medium max-w-2xl mx-auto">
              The timeline captures the past. LEARN — the Lanchester Early Access Research Network — is where live projects,
              future systems, and active experiments unfold in real time. Follow what&rsquo;s next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                href="https://learn.lanchesterresearchanddesign.com/products"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 group w-full sm:w-auto px-12"
              >
                <span>Explore LEARN</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/research/learn-launchpad"
                className="btn-ghost w-full sm:w-auto px-12"
              >
                Read the Case Study
              </Link>
            </div>

            <div className="pt-10 flex justify-center gap-12 items-center opacity-30">
              <div className="h-px w-24 bg-white/20" />
              <span className="font-mono text-[9px] uppercase tracking-[0.4em]">LEARN // Active</span>
              <div className="h-px w-24 bg-white/20" />
            </div>
          </div>
        </section>
      </div>

      {/* Mobile fallback — static version */}
      <div className="md:hidden">
        <section className="relative py-32 px-6 md:px-12 border-t border-white/5 bg-background-layer1 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e635_1px,transparent_1px),linear-gradient(to_bottom,#a3e635_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
            <div className="space-y-4">
              <span className="analytical-label text-accent">What&rsquo;s Next</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tightest uppercase">
                See What We&rsquo;re Building Now.
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted leading-relaxed font-medium max-w-2xl mx-auto">
              The timeline captures the past. LEARN is where live projects
              and active experiments unfold in real time.
            </p>
            <div className="flex flex-col items-center gap-6 pt-4">
              <Link
                href="https://learn.lanchesterresearchanddesign.com/products"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 group w-full px-12"
              >
                <span>Explore LEARN</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/research/learn-launchpad" className="btn-ghost w-full px-12">
                Read the Case Study
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
