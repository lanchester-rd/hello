import { NextResponse } from "next/server";
import { importEvents } from "../../../../lib/timelineStore";
import { checkAdmin } from "../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

/** POST /api/timeline/import — admin only, replaces all events from JSON array */
export async function POST(req: Request) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const events = await req.json();
    if (!Array.isArray(events)) {
      return NextResponse.json(
        { error: "Body must be an array of events" },
        { status: 400 },
      );
    }
    const count = await importEvents(events);
    return NextResponse.json({ imported: count });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
