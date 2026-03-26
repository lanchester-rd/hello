import { NextResponse } from "next/server";
import {
  BATTLEFIELD_BRIEF_EVENT_TYPES,
  addBattlefieldBriefEvent,
  getBattlefieldBriefDetail,
  retryBattlefieldBriefSubmission,
  updateBattlefieldBriefSubmission,
} from "../../../../../lib/battlefield-brief/server";
import { checkAdmin } from "../../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Ctx) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const detail = await getBattlefieldBriefDetail(id);
    if (!detail) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(detail);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request, { params }: Ctx) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const action = typeof body.action === "string" ? body.action : "retry";

    if (action === "retry") {
      await retryBattlefieldBriefSubmission(id);
      const refreshed = await getBattlefieldBriefDetail(id);
      return NextResponse.json(refreshed);
    }

    if (action === "mark_failed") {
      const message =
        typeof body.message === "string" && body.message.trim()
          ? body.message.trim()
          : "Marked failed by admin.";

      const updated = await updateBattlefieldBriefSubmission(id, {
        status: "failed",
        errorMessage: message,
      });

      if (!updated) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }

      await addBattlefieldBriefEvent(
        id,
        BATTLEFIELD_BRIEF_EVENT_TYPES.failed,
        message,
      );

      const refreshed = await getBattlefieldBriefDetail(id);
      return NextResponse.json(refreshed);
    }

    return NextResponse.json(
      { error: `Unsupported action: ${action}` },
      { status: 400 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
