/* ─── Timeline data store — Firestore in production, local JSON in dev ─── */

import { isFirestoreAvailable, getDb } from "./firebaseAdmin";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import type { TimelineEvent, TimelineMedia, TimelineLink } from "../data/timeline";
import { timelineEvents as seedData } from "../data/timeline";

/* ─── Stored event (V3 — all fields populated) ─── */

export interface StoredEvent {
  id: string;
  slug: string;
  start: string;
  end?: string;
  sortOrder: number;
  era?: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  summary: string;
  body?: string;
  achievements?: string[];
  tags?: string[];
  quote?: string;
  featured?: boolean;
  theme?: "dark" | "light" | "accent";
  milestone?: string;
  status: "draft" | "published";
  media: TimelineMedia[];
  images: TimelineMedia[];
  links?: TimelineLink[];
  createdAt: string;
  updatedAt: string;
}

export type EventInput = Partial<
  Omit<StoredEvent, "id" | "createdAt" | "updatedAt" | "images">
>;

/* ─── Constants ─── */

const DATA_DIR = join(process.cwd(), ".data");
const DATA_FILE = join(DATA_DIR, "timeline-events.json");
const COLLECTION = "timelineEvents";

/* ─── Normalize a partial event into a full StoredEvent ─── */

function normalize(
  raw: Partial<StoredEvent>,
  index: number,
): StoredEvent {
  const now = new Date().toISOString();
  const media = raw.media || raw.images || [];
  return {
    id: raw.id || crypto.randomUUID(),
    slug:
      raw.slug ||
      raw.id ||
      raw.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") ||
      crypto.randomUUID(),
    start: raw.start || "",
    end: raw.end,
    sortOrder: raw.sortOrder ?? index * 10,
    era: raw.era,
    title: raw.title || "Untitled",
    subtitle: raw.subtitle || "",
    category: raw.category || "Uncategorized",
    location: raw.location,
    summary: raw.summary || "",
    body: raw.body,
    achievements: raw.achievements,
    tags: raw.tags,
    quote: raw.quote,
    featured: raw.featured,
    theme: raw.theme,
    milestone: raw.milestone,
    status: raw.status || "draft",
    media,
    images: media,
    links: raw.links,
    createdAt: raw.createdAt || now,
    updatedAt: raw.updatedAt || now,
  };
}

/* ════════════════════  Local JSON file store  ════════════════════ */

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

function readLocal(): StoredEvent[] {
  ensureDir();
  if (!existsSync(DATA_FILE)) {
    seedLocal();
  }
  try {
    return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
  } catch {
    seedLocal();
    return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
  }
}

function writeLocal(events: StoredEvent[]) {
  ensureDir();
  writeFileSync(DATA_FILE, JSON.stringify(events, null, 2));
}

function seedLocal() {
  const now = new Date().toISOString();
  const seeded: StoredEvent[] = seedData.map((e, i) =>
    normalize(
      { ...e, status: "published" as const, createdAt: now, updatedAt: now },
      i,
    ),
  );
  writeLocal(seeded);
}

/* ════════════════════  Firestore operations  ════════════════════ */

async function fsListAll(): Promise<StoredEvent[]> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const snap = await db.collection(COLLECTION).orderBy("sortOrder").get();
  return snap.docs.map((d: { data: () => Record<string, unknown>; id: string }) => ({ ...d.data(), id: d.id }) as StoredEvent);
}

async function fsGet(id: string): Promise<StoredEvent | null> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const doc = await db.collection(COLLECTION).doc(id).get();
  if (!doc.exists) return null;
  return { ...doc.data(), id: doc.id } as StoredEvent;
}

async function fsCreate(data: StoredEvent): Promise<StoredEvent> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const { id, ...rest } = data;
  await db.collection(COLLECTION).doc(id).set(rest);
  return data;
}

async function fsUpdate(
  id: string,
  data: Partial<StoredEvent>,
): Promise<StoredEvent | null> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const ref = db.collection(COLLECTION).doc(id);
  const existing = await ref.get();
  if (!existing.exists) return null;
  await ref.update(data);
  const updated = await ref.get();
  return { ...updated.data(), id: updated.id } as StoredEvent;
}

async function fsDelete(id: string): Promise<boolean> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const ref = db.collection(COLLECTION).doc(id);
  const existing = await ref.get();
  if (!existing.exists) return false;
  await ref.delete();
  return true;
}

/* ════════════════════  Public API  ════════════════════ */

const useFirestore = isFirestoreAvailable();

export async function listEvents(options?: {
  status?: "published" | "draft";
}): Promise<StoredEvent[]> {
  let events: StoredEvent[];
  if (useFirestore) {
    events = await fsListAll();
  } else {
    events = readLocal();
  }
  events.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  if (options?.status) {
    events = events.filter((e) => e.status === options.status);
  }
  return events;
}

export async function getEvent(id: string): Promise<StoredEvent | null> {
  if (useFirestore) return fsGet(id);
  const events = readLocal();
  return events.find((e) => e.id === id) || null;
}

export async function createEvent(input: EventInput): Promise<StoredEvent> {
  const now = new Date().toISOString();
  const events = useFirestore ? await fsListAll() : readLocal();
  const maxSort = events.reduce(
    (max, e) => Math.max(max, e.sortOrder ?? 0),
    0,
  );
  const media = input.media || [];
  const event: StoredEvent = {
    id: crypto.randomUUID(),
    slug:
      input.slug ||
      input.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") ||
      crypto.randomUUID(),
    start: input.start || "",
    end: input.end,
    sortOrder: input.sortOrder ?? maxSort + 10,
    era: input.era,
    title: input.title || "Untitled",
    subtitle: input.subtitle || "",
    category: input.category || "Uncategorized",
    location: input.location,
    summary: input.summary || "",
    body: input.body,
    achievements: input.achievements,
    tags: input.tags,
    quote: input.quote,
    featured: input.featured,
    theme: input.theme,
    milestone: input.milestone,
    status: input.status || "draft",
    media,
    images: media,
    links: input.links,
    createdAt: now,
    updatedAt: now,
  };

  if (useFirestore) return fsCreate(event);
  events.push(event);
  writeLocal(events);
  return event;
}

export async function updateEvent(
  id: string,
  input: EventInput,
): Promise<StoredEvent | null> {
  const now = new Date().toISOString();
  const updates: Partial<StoredEvent> = { ...input, updatedAt: now };
  if (input.media) updates.images = input.media;

  if (useFirestore) return fsUpdate(id, updates);

  const events = readLocal();
  const idx = events.findIndex((e) => e.id === id);
  if (idx < 0) return null;
  events[idx] = { ...events[idx], ...updates } as StoredEvent;
  writeLocal(events);
  return events[idx];
}

export async function deleteEvent(id: string): Promise<boolean> {
  if (useFirestore) return fsDelete(id);
  const events = readLocal();
  const idx = events.findIndex((e) => e.id === id);
  if (idx < 0) return false;
  events.splice(idx, 1);
  writeLocal(events);
  return true;
}

export async function reorderEvents(
  orderedIds: string[],
): Promise<StoredEvent[]> {
  const now = new Date().toISOString();

  if (useFirestore) {
    const db = getDb();
    if (!db) throw new Error("Firestore unavailable");
    const batch = db.batch();
    orderedIds.forEach((id, i) => {
      batch.update(db.collection(COLLECTION).doc(id), {
        sortOrder: i * 10,
        updatedAt: now,
      });
    });
    await batch.commit();
    return fsListAll();
  }

  const events = readLocal();
  orderedIds.forEach((id, i) => {
    const evt = events.find((e) => e.id === id);
    if (evt) {
      evt.sortOrder = i * 10;
      evt.updatedAt = now;
    }
  });
  writeLocal(events);
  return events.sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function importEvents(
  incoming: Partial<StoredEvent>[],
): Promise<number> {
  const now = new Date().toISOString();
  const normalized = incoming.map((e, i) =>
    normalize({ ...e, createdAt: now, updatedAt: now }, i),
  );

  if (useFirestore) {
    const db = getDb();
    if (!db) throw new Error("Firestore unavailable");
    const batch = db.batch();
    for (const evt of normalized) {
      const { id, ...rest } = evt;
      batch.set(db.collection(COLLECTION).doc(id), rest);
    }
    await batch.commit();
    return normalized.length;
  }

  writeLocal(normalized);
  return normalized.length;
}

export async function exportEvents(): Promise<StoredEvent[]> {
  return listEvents();
}
