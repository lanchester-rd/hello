import { NextResponse } from "next/server";
import {
  listBattlefieldBriefAdminItems,
  type BattlefieldBriefStage,
  type BattlefieldBriefSubmissionStatus,
} from "../../../../lib/battlefield-brief/server";
import { checkAdmin } from "../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const url = new URL(req.url);

    const status = (url.searchParams.get("status") || "") as BattlefieldBriefSubmissionStatus;
    const stage = (url.searchParams.get("stage") || "") as BattlefieldBriefStage;

    const items = await listBattlefieldBriefAdminItems({
      search: url.searchParams.get("search") || undefined,
      status: status || undefined,
      stage: stage || undefined,
      from: url.searchParams.get("from") || undefined,
      to: url.searchParams.get("to") || undefined,
      limit: Number(url.searchParams.get("limit") || 250),
    });

    return NextResponse.json(items);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
