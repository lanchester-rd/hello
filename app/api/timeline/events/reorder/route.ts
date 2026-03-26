import { NextResponse } from "next/server";
import { reorderEvents } from "../../../../../lib/timelineStore";
import { checkAdmin } from "../../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

/** POST /api/timeline/events/reorder — admin only, batch sort-order update */
export async function POST(req: Request) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const { orderedIds } = await req.json();
    if (!Array.isArray(orderedIds)) {
      return NextResponse.json(
        { error: "orderedIds must be an array" },
        { status: 400 },
      );
    }
    const events = await reorderEvents(orderedIds);
    return NextResponse.json(events);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
