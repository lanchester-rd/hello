"use client";

interface Props {
  current: number;
  total: number;
  /** 0-1 overall scroll progress */
  progress: number;
  eventTitle: string;
  eraLabel?: string;
}

export default function TimelineProgress({
  current,
  total,
  progress,
  eventTitle,
  eraLabel,
}: Props) {
  return (
    <div className="flex items-center gap-4 select-none">
      {/* Counter */}
      <span className="font-mono text-[10px] text-muted/50 tabular-nums tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {/* Progress bar */}
      <div className="w-24 h-px bg-white/10 relative rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-accent/60 transition-all duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Current info */}
      <div className="flex items-center gap-2 min-w-0">
        {eraLabel && (
          <span className="text-[9px] font-mono text-accent/50 uppercase tracking-widest whitespace-nowrap">
            {eraLabel}
          </span>
        )}
        <span className="text-[10px] text-muted/40 truncate max-w-[120px]">
          {eventTitle}
        </span>
      </div>
    </div>
  );
}
