"use client";

import { usePathname } from "next/navigation";

export default function CoordinateMarker() {
  const pathname = usePathname();
  if (pathname === "/founder/timeline") return null;

  return (
    <div className="fixed bottom-6 right-8 z-[100] hidden md:block">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent/30" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          L-RD // 52.37°N 4.89°E
        </span>
      </div>
    </div>
  );
}
