import { NextResponse } from "next/server";
import { getBattlefieldBriefDetail } from "../../../../lib/battlefield-brief/server";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  try {
    const { id } = await params;
    const detail = await getBattlefieldBriefDetail(id);

    if (!detail) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      submission: {
        id: detail.submission.id,
        createdAt: detail.submission.createdAt,
        updatedAt: detail.submission.updatedAt,
        companyName: detail.submission.companyName,
        stage: detail.submission.stage,
        status: detail.submission.status,
        errorMessage: detail.submission.errorMessage,
        ideaSummary: detail.submission.ideaSummary,
        targetUser: detail.submission.targetUser,
        problemSolved: detail.submission.problemSolved,
        differentiator: detail.submission.differentiator,
        market: detail.submission.market,
        resources: detail.submission.resources,
        biggestQuestion: detail.submission.biggestQuestion,
      },
      brief: detail.brief,
      pdfFileUrl: detail.submission.pdfFileUrl,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
