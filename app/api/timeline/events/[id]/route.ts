import { NextResponse } from "next/server";
import { getEvent, updateEvent, deleteEvent } from "../../../../../lib/timelineStore";
import { checkAdmin } from "../../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

/** GET /api/timeline/events/[id] */
export async function GET(_req: Request, { params }: Ctx) {
  try {
    const { id } = await params;
    const event = await getEvent(id);
    if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(event);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** PUT /api/timeline/events/[id] — admin only */
export async function PUT(req: Request, { params }: Ctx) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const { id } = await params;
    const body = await req.json();
    const event = await updateEvent(id, body);
    if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(event);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** DELETE /api/timeline/events/[id] — admin only */
export async function DELETE(req: Request, { params }: Ctx) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const { id } = await params;
    const ok = await deleteEvent(id);
    if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
