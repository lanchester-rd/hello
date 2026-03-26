"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { TimelineEvent, TimelineMedia } from "../../data/timeline";

/** Thumbnail with shimmer skeleton until loaded */
function LazyImage({ img }: { img: TimelineMedia }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white/[0.06] rounded-[2px]" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt || "Timeline event media"}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-60" : "opacity-0"
        }`}
        loading="lazy"
        decoding="async"
        style={img.position ? { objectPosition: img.position } : undefined}
      />
    </div>
  );
}

interface Props {
  event: TimelineEvent;
  isActive: boolean;
  onExpand?: () => void;
}

export default function TimelineEventCard({ event, isActive, onExpand }: Props) {
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? { active: { opacity: 1 }, inactive: { opacity: 0.4 } }
    : {
        active: { opacity: 1, filter: "blur(0px)" },
        inactive: { opacity: 0.3, filter: "blur(2px)" },
      };

  return (
    <motion.article
      className={`flex-shrink-0 px-4 md:px-0 overflow-hidden w-[85vw] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isActive ? "md:w-[min(90vw,1060px)]" : "md:w-[560px]"
      }`}
      animate={isActive ? "active" : "inactive"}
      variants={variants}
      transition={{ duration: 0.9, ease: "easeOut" }}
      aria-current={isActive ? "step" : undefined}
    >
      <div className={isActive ? "md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6" : "space-y-5"}>
        {/* Meta row */}
        <div className={`flex items-center gap-3 ${isActive ? "md:col-span-2" : ""}`}>
          <span className="analytical-label text-accent">{event.category}</span>
          {event.milestone && (
            <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[8px] font-mono text-accent uppercase tracking-widest">
              {event.milestone}
            </span>
          )}
          <span className="h-px flex-1 bg-white/10" />
          <span className="coordinate-label">{event.location ?? ""}</span>
        </div>

        <div className="md:col-span-1 space-y-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest uppercase leading-none">
              {event.title}
            </h2>
            <p className="text-muted text-base md:text-lg mt-2 font-medium">
              {event.subtitle}
            </p>
          </div>

          {event.quote && isActive && (
            <blockquote className="border-l-2 border-accent/30 pl-4 text-muted/60 italic text-sm leading-relaxed mt-4">
              &ldquo;{event.quote}&rdquo;
            </blockquote>
          )}

          <p className="text-muted/90 leading-relaxed text-sm md:text-base mt-4">{event.summary}</p>

          {event.achievements && event.achievements.length > 0 && isActive && (
            <ul className="space-y-2 pt-4">
              {event.achievements.slice(0, 3).map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          )}
        </div>

        {isActive && (
          <div className="md:col-span-1 space-y-4">
            {event.body && (
              <p className="text-muted/70 text-sm leading-relaxed border-l-2 border-accent/20 pl-4">
                {event.body}
              </p>
            )}

            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-4">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/40 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {event.media && event.media.length > 0 && (
              <div className="flex gap-2 pt-4 overflow-x-auto scrollbar-none">
                {event.media.map((img) => (
                  <figure key={img.id} className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden">
                      <LazyImage img={img} />
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
          </div>
        )}

        {/* Non-active tags */}
        {event.tags && event.tags.length > 0 && !isActive && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/40 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Non-active image thumbnails */}
        {event.media && event.media.length > 0 && !isActive && (
          <div className="flex gap-2 pt-3 overflow-x-auto scrollbar-none">
            {event.media.map((img) => (
              <figure key={img.id} className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden">
                  <LazyImage img={img} />
                </div>
                {img.caption && !isActive && (
                  <figcaption className="mt-1 text-[8px] text-muted/30 font-mono max-w-[80px] truncate">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {/* Expand button — visible when active and has deeper content (mobile only) */}
        {isActive && (event.body || (event.achievements && event.achievements.length > 3) || event.links) && onExpand && (
          <button onClick={onExpand} className="md:hidden btn-ghost text-xs flex items-center gap-2 mt-2 group">
            <span>Read more</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </motion.article>
  );
}
