"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { TimelineEvent } from "../../data/timeline";

interface Props {
  event: TimelineEvent;
  isOpen: boolean;
  onClose: () => void;
}

export default function TimelineEventDetail({ event, isOpen, onClose }: Props) {
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 40 },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          key="detail"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute right-0 top-0 bottom-0 w-full max-w-lg z-50 flex flex-col overflow-y-auto scrollbar-none bg-background/95 backdrop-blur-xl border-l border-white/5"
          role="complementary"
          aria-label={`Details for ${event.title}`}
        >
          {/* Close button */}
          <div className="sticky top-0 z-10 flex justify-end p-4 bg-gradient-to-b from-background/90 to-transparent">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close detail panel"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 pb-8 space-y-6">
            {/* Era & category */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="analytical-label text-accent">{event.category}</span>
              {event.era && (
                <span className="analytical-label text-muted/40">{event.era}</span>
              )}
              {event.milestone && (
                <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[9px] font-mono text-accent uppercase tracking-widest">
                  {event.milestone}
                </span>
              )}
            </div>

            {/* Date & location */}
            <div>
              <p className="font-mono text-sm text-accent/70 tracking-widest">
                {event.start}{event.end ? ` — ${event.end}` : " — Present"}
              </p>
              {event.location && (
                <p className="text-muted/50 text-xs mt-1">{event.location}</p>
              )}
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold tracking-tightest uppercase leading-none">
                {event.title}
              </h3>
              <p className="text-muted text-sm mt-1">{event.subtitle}</p>
            </div>

            {/* Quote */}
            {event.quote && (
              <blockquote className="border-l-2 border-accent/30 pl-4 text-muted/70 italic text-sm leading-relaxed">
                &ldquo;{event.quote}&rdquo;
              </blockquote>
            )}

            {/* Body narrative */}
            {event.body && (
              <div className="prose prose-invert prose-sm max-w-none">
                <p className="text-muted/80 leading-relaxed">{event.body}</p>
              </div>
            )}

            {/* Achievements */}
            {event.achievements && event.achievements.length > 0 && (
              <div>
                <h4 className="analytical-label text-muted/50 mb-3">Achievements</h4>
                <ul className="space-y-2">
                  {event.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/50 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            {event.links && event.links.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-white/5">
                <h4 className="analytical-label text-muted/50">Related</h4>
                {event.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-accent/80 hover:text-accent transition-colors group"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Media thumbnails */}
            {event.media && event.media.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-white/5">
                <h4 className="analytical-label text-muted/50">Media</h4>
                <div className="grid grid-cols-2 gap-2">
                  {event.media.map((m) => (
                    <figure key={m.id} className="space-y-1">
                      <div className="aspect-[4/3] rounded-sm bg-background-layer2 border border-white/5 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={m.src}
                          alt={m.alt || "Timeline event media"}
                          className="w-full h-full object-cover opacity-70"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {m.caption && (
                        <figcaption className="text-[9px] text-muted/40 font-mono">
                          {m.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
