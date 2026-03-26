"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TimelineMedia } from "../../data/timeline";

interface Props {
  images: TimelineMedia[];
  /** 0-1 scroll progress within the active event window */
  progress: number;
}

export default function TimelineBackgroundMedia({ images, progress }: Props) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Atmospheric base */}
      <div className="absolute inset-0 bg-background" />

      {images.map((img, i) => {
        const y = reducedMotion ? 0 : (progress - 0.5) * img.depth * 160;
        const scale = reducedMotion ? 1 : 1 + img.depth * 0.12;
        const baseOpacity = img.opacityHint ?? 0.15 + img.depth * 0.15;

        return (
          <motion.div
            key={img.id}
            className="absolute inset-0"
            style={{ zIndex: i }}
            animate={{ y, scale }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundPosition: img.position ?? "center center",
                opacity: baseOpacity,
                filter: `blur(${Math.max(0, 3 - img.depth * 4)}px) saturate(0.5)`,
              }}
            />
            {/* Per-image overlay gradient if specified */}
            {img.overlayGradient && (
              <div
                className={`absolute inset-0 bg-gradient-to-r ${img.overlayGradient}`}
              />
            )}
          </motion.div>
        );
      })}

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
    </div>
  );
}
