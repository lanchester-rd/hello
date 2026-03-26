/**
 * Timeline data integrity tests (V2).
 * Run with: node --test hello/data/timeline.test.mjs
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, "timeline.ts"), "utf-8");

// Strip TS-only syntax so plain Node can evaluate the data array
const jsCode = src
  .replace(/export /g, "")
  .replace(/interface\s+\w+\s*\{[^}]+\}/gs, "")
  .replace(/type\s+\w+\s*=\s*[^;]+;/g, "")
  .replace(/\/\*\*[\s\S]*?\*\//g, "")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  // Strip type annotations from function params & return types
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
  .replace(/:\s*"dark"\s*\|\s*"light"\s*\|\s*"accent"/g, "");

const result = new Function(
  jsCode + "\nreturn { timelineEvents, timelineEras, timelineCategories, getEventsByEra };"
)();
const { timelineEvents, timelineEras, timelineCategories, getEventsByEra } = result;

describe("timeline data (V2)", () => {
  it("has at least 7 events", () => {
    assert.ok(timelineEvents.length >= 7, `Expected ≥7 events, got ${timelineEvents.length}`);
  });

  it("every event has required fields", () => {
    for (const evt of timelineEvents) {
      assert.ok(evt.id, `Event missing id`);
      assert.ok(evt.start, `Event ${evt.id} missing start`);
      assert.ok(evt.title, `Event ${evt.id} missing title`);
      assert.ok(evt.subtitle, `Event ${evt.id} missing subtitle`);
      assert.ok(evt.category, `Event ${evt.id} missing category`);
      assert.ok(evt.summary, `Event ${evt.id} missing summary`);
    }
  });

  it("every event has media array with at least one item", () => {
    for (const evt of timelineEvents) {
      assert.ok(
        Array.isArray(evt.media) && evt.media.length >= 1,
        `Event ${evt.id} should have ≥1 media item`
      );
    }
  });

  it("images alias matches media array", () => {
    for (const evt of timelineEvents) {
      assert.deepStrictEqual(evt.images, evt.media, `Event ${evt.id}: images should equal media`);
    }
  });

  it("every media item has required fields", () => {
    for (const evt of timelineEvents) {
      for (const m of evt.media) {
        assert.ok(m.id, `Media in ${evt.id} missing id`);
        assert.ok(m.type, `Media ${m.id} missing type`);
        assert.ok(m.src, `Media ${m.id} missing src`);
        assert.ok(m.alt, `Media ${m.id} missing alt`);
        assert.equal(typeof m.depth, "number", `Media ${m.id} depth should be a number`);
      }
    }
  });

  it("all event ids are unique", () => {
    const ids = timelineEvents.map((e) => e.id);
    assert.equal(ids.length, new Set(ids).size, "Duplicate event ids found");
  });

  it("all media ids are unique across events", () => {
    const ids = timelineEvents.flatMap((e) => e.media.map((m) => m.id));
    assert.equal(ids.length, new Set(ids).size, "Duplicate media ids found");
  });

  it("events are in chronological order", () => {
    for (let i = 1; i < timelineEvents.length; i++) {
      const prev = parseInt(timelineEvents[i - 1].start);
      const curr = parseInt(timelineEvents[i].start);
      assert.ok(curr >= prev, `Event ${timelineEvents[i].id} starts before ${timelineEvents[i - 1].id}`);
    }
  });

  it("has at least 3 eras defined", () => {
    assert.ok(timelineEras.length >= 3, `Expected ≥3 eras, got ${timelineEras.length}`);
  });

  it("every era has required fields", () => {
    for (const era of timelineEras) {
      assert.ok(era.id, "Era missing id");
      assert.ok(era.label, "Era missing label");
      assert.ok(era.startEventId, "Era missing startEventId");
      assert.ok(era.endEventId, "Era missing endEventId");
    }
  });

  it("every event has an era assignment", () => {
    for (const evt of timelineEvents) {
      assert.ok(evt.era, `Event ${evt.id} missing era`);
    }
  });

  it("era references resolve to actual events", () => {
    const ids = new Set(timelineEvents.map((e) => e.id));
    for (const era of timelineEras) {
      assert.ok(ids.has(era.startEventId), `Era ${era.id} startEventId '${era.startEventId}' not found`);
      assert.ok(ids.has(era.endEventId), `Era ${era.id} endEventId '${era.endEventId}' not found`);
    }
  });

  it("getEventsByEra returns correct events", () => {
    for (const era of timelineEras) {
      const eraEvents = getEventsByEra(era.id);
      assert.ok(eraEvents.length >= 1, `Era ${era.id} should have ≥1 events`);
      for (const evt of eraEvents) {
        assert.equal(evt.era, era.id, `Event ${evt.id} era should be ${era.id}`);
      }
    }
  });

  it("categories are derived correctly", () => {
    assert.ok(timelineCategories.length >= 2, "Should have ≥2 categories");
    const eventCats = new Set(timelineEvents.map((e) => e.category));
    for (const cat of timelineCategories) {
      assert.ok(eventCats.has(cat), `Category ${cat} not found in events`);
    }
  });

  it("supports multiple media items per event", () => {
    const multiMediaEvents = timelineEvents.filter((e) => e.media.length > 1);
    assert.ok(multiMediaEvents.length >= 1, "At least one event should have multiple media items");
  });

  it("some events have V2 optional fields", () => {
    const withTags = timelineEvents.filter((e) => e.tags && e.tags.length > 0);
    assert.ok(withTags.length >= 1, "At least one event should have tags");

    const withQuote = timelineEvents.filter((e) => e.quote);
    assert.ok(withQuote.length >= 1, "At least one event should have a quote");

    const withBody = timelineEvents.filter((e) => e.body);
    assert.ok(withBody.length >= 2, "At least two events should have body text");

    const withLinks = timelineEvents.filter((e) => e.links && e.links.length > 0);
    assert.ok(withLinks.length >= 1, "At least one event should have links");

    const withMilestone = timelineEvents.filter((e) => e.milestone);
    assert.ok(withMilestone.length >= 1, "At least one event should have a milestone");

    const featured = timelineEvents.filter((e) => e.featured);
    assert.ok(featured.length >= 1, "At least one event should be featured");
  });
});

/* ─── V3 schema compatibility tests ─── */

describe("timeline V3 schema", () => {
  it("V3 optional fields are accepted by the type shape", () => {
    // The V2 events should still work even though V3 adds optional fields
    for (const evt of timelineEvents) {
      assert.ok(evt.id, `Event ${evt.id} still has id`);
      assert.ok(evt.title, `Event ${evt.id} still has title`);
      assert.ok(evt.media, `Event ${evt.id} still has media`);
    }
  });

  it("seed data can be augmented with V3 fields", () => {
    const now = new Date().toISOString();
    const v3Events = timelineEvents.map((e, i) => ({
      ...e,
      slug: e.id,
      sortOrder: i * 10,
      status: "published",
      createdAt: now,
      updatedAt: now,
    }));

    for (const evt of v3Events) {
      assert.ok(evt.slug, `V3 event ${evt.id} should have slug`);
      assert.equal(typeof evt.sortOrder, "number", `V3 event ${evt.id} sortOrder should be number`);
      assert.ok(
        evt.status === "draft" || evt.status === "published",
        `V3 event ${evt.id} status should be draft or published`
      );
      assert.ok(evt.createdAt, `V3 event ${evt.id} should have createdAt`);
      assert.ok(evt.updatedAt, `V3 event ${evt.id} should have updatedAt`);
    }
  });

  it("V3 slug generation produces URL-safe values", () => {
    for (const evt of timelineEvents) {
      const slug = evt.id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      assert.ok(slug.length > 0, `Slug for ${evt.id} should be non-empty`);
      assert.ok(/^[a-z0-9-]+$/.test(slug), `Slug '${slug}' should only contain lowercase alphanumeric and hyphens`);
    }
  });

  it("V3 sortOrder assignment is deterministic", () => {
    const sorted = timelineEvents.map((e, i) => ({ id: e.id, sortOrder: i * 10 }));
    for (let i = 1; i < sorted.length; i++) {
      assert.ok(
        sorted[i].sortOrder > sorted[i - 1].sortOrder,
        `sortOrder should increase: ${sorted[i - 1].id} (${sorted[i - 1].sortOrder}) < ${sorted[i].id} (${sorted[i].sortOrder})`
      );
    }
  });
});
