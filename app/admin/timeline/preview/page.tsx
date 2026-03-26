"use client";

import { useState, useEffect } from "react";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../../../../lib/firebase";
import TimelineScroller from "../../../../components/timeline/TimelineScroller";
import { timelineEras } from "../../../../data/timeline";
import type { TimelineEvent } from "../../../../data/timeline";

export default function TimelinePreviewPage() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [includeDrafts, setIncludeDrafts] = useState(true);

  useEffect(() => {
    const unsub = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        try {
          const res = await fetch("/api/timeline/events?admin=true", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) setEvents(await res.json());
        } catch {
          // ignore
        }
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const filtered = includeDrafts
    ? events
    : events.filter((e: TimelineEvent & { status?: string }) => e.status === "published");

  const categories = [...new Set(filtered.map((e) => e.category))];

  if (loading) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm animate-pulse">Loading preview…</p>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Preview controls */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-accent/20 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/admin/timeline" className="btn-ghost text-xs">
            ← Editor
          </a>
          <span className="analytical-label text-accent">PREVIEW MODE</span>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted cursor-pointer">
          <input
            type="checkbox"
            checked={includeDrafts}
            onChange={(e) => setIncludeDrafts(e.target.checked)}
            className="accent-accent"
          />
          Include drafts
        </label>
      </div>

      <div className="pt-16">
        {filtered.length > 0 ? (
          <TimelineScroller
            events={filtered}
            eras={timelineEras}
            categories={categories}
          />
        ) : (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-muted text-sm">No events to preview</p>
          </div>
        )}
      </div>
    </main>
  );
}
