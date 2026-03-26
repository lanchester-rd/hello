import { NextResponse } from "next/server";
import { exportEvents } from "../../../../lib/timelineStore";

export const dynamic = "force-dynamic";

/** GET /api/timeline/export — returns all events as JSON (no auth required) */
export async function GET() {
  try {
    const events = await exportEvents();
    return NextResponse.json(events);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
