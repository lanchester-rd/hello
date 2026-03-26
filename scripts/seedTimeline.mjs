#!/usr/bin/env node
/**
 * Seed / reseed timeline data from the static TypeScript source into the local
 * JSON store (.data/timeline-events.json).
 *
 * Idempotent: existing events are updated in-place; new events are appended;
 * events removed from the source file are NOT deleted (editors may have
 * created them manually).  Pass --force to replace the entire file from source.
 *
 * Usage:
 *   node hello/scripts/seedTimeline.mjs           # idempotent merge
 *   node hello/scripts/seedTimeline.mjs --force   # full replace from source
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, ".data");
const DATA_FILE = join(DATA_DIR, "timeline-events.json");
const TIMELINE_SRC = join(ROOT, "data", "timeline.ts");
const FORCE = process.argv.includes("--force");

// ── Strip TypeScript syntax so we can evaluate with plain Node ──
const src = readFileSync(TIMELINE_SRC, "utf-8");
const jsCode = src
  .replace(/export /g, "")
  .replace(/interface\s+\w+\s*\{[^}]*?\}/gs, "")
  .replace(/type\s+\w+\s*=\s*[^;]+;/g, "")
  .replace(/\/\*\*[\s\S]*?\*\//g, "")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/:\s*Omit<[^>]+>\s*&\s*\{[^}]*\}/g, "")
  .replace(/:\s*TimelineEvent\[\]/g, "")
  .replace(/:\s*TimelineEra\[\]/g, "")
  .replace(/:\s*TimelineMedia\[\]/g, "")
  .replace(/:\s*TimelineMedia/g, "")
  .replace(/:\s*TimelineImage/g, "")
  .replace(/:\s*TimelineEvent/g, "")
  .replace(/:\s*TimelineLink/g, "")
  .replace(/:\s*string\[\]/g, "")
  .replace(/:\s*string/g, "")
  .replace(/:\s*boolean/g, "")
  .replace(/:\s*number/g, "")
  .replace(/:\s*"draft"\s*\|\s*"published"/g, "")
  .replace(/:\s*"dark"\s*\|\s*"light"\s*\|\s*"accent"/g, "");

const result = new Function(jsCode + "\nreturn { timelineEvents };")();
const { timelineEvents } = result;

// ── Build V3-complete events from source ──
const now = new Date().toISOString();
const sourceMap = new Map(
  timelineEvents.map((e, i) => [
    e.id,
    {
      ...e,
      slug: e.slug || e.id,
      sortOrder: e.sortOrder ?? i * 10,
      status: e.status || "published",
      images: e.media, // keep alias in sync
      createdAt: now,
      updatedAt: now,
    },
  ])
);

// ── Merge with existing store (idempotent) ──
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

let existing = [];
if (!FORCE && existsSync(DATA_FILE)) {
  try {
    existing = JSON.parse(readFileSync(DATA_FILE, "utf-8"));
  } catch {
    existing = [];
  }
}

const existingMap = new Map(existing.map((e) => [e.id, e]));
let added = 0;
let updated = 0;

for (const [id, srcEvent] of sourceMap) {
  if (existingMap.has(id)) {
    // Update: merge source fields over existing, preserve editor-changed fields
    // Source fields always win for structural/content fields; preserve createdAt
    const prev = existingMap.get(id);
    existingMap.set(id, {
      ...srcEvent,
      createdAt: prev.createdAt || now,
      updatedAt: now,
    });
    updated++;
  } else {
    existingMap.set(id, srcEvent);
    added++;
  }
}

// Sort by sortOrder, then by start year
const merged = [...existingMap.values()].sort((a, b) => {
  const so = (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999);
  if (so !== 0) return so;
  return (parseInt(a.start) || 0) - (parseInt(b.start) || 0);
});

writeFileSync(DATA_FILE, JSON.stringify(merged, null, 2));
console.log(
  `✓ Seeded ${merged.length} events to ${DATA_FILE}` +
  ` (${added} added, ${updated} updated)` +
  (FORCE ? " [--force: full replace]" : " [idempotent merge]")
);
