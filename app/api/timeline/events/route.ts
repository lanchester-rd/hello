import { NextResponse } from "next/server";
import { listEvents, createEvent } from "../../../../lib/timelineStore";
import { checkAdmin } from "../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

/** GET /api/timeline/events — public: published only; ?admin=true + key: all */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const admin = url.searchParams.get("admin") === "true";

    if (admin && !(await checkAdmin(req))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const events = await listEvents(
      admin ? undefined : { status: "published" },
    );
    return NextResponse.json(events);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** POST /api/timeline/events — admin only, create new event */
export async function POST(req: Request) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const body = await req.json();
    const event = await createEvent(body);
    return NextResponse.json(event, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
