import { NextResponse } from "next/server";
import {
  BATTLEFIELD_BRIEF_EVENT_TYPES,
  createBattlefieldBriefSubmission,
  addBattlefieldBriefEvent,
  getBattlefieldBriefSubmission,
  processBattlefieldBriefSubmission,
  validateBattlefieldBriefSubmissionInput,
} from "../../../lib/battlefield-brief/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const referer = req.headers.get("referer");

    const validation = validateBattlefieldBriefSubmissionInput({
      ...(typeof body === "object" && body ? body : {}),
      sourcePage:
        typeof body?.sourcePage === "string" && body.sourcePage.trim()
          ? body.sourcePage
          : referer || "/battlefield-brief",
      referral:
        typeof body?.referral === "string" && body.referral.trim()
          ? body.referral
          : referer || null,
    });

    if (!validation.ok) {
      return NextResponse.json(
        {
          error: "Validation failed",
          fieldErrors: validation.errors,
        },
        { status: 400 },
      );
    }

    const submission = await createBattlefieldBriefSubmission(validation.data);

    await addBattlefieldBriefEvent(
      submission.id,
      BATTLEFIELD_BRIEF_EVENT_TYPES.submitted,
      "Submission received.",
    );

    try {
      const result = await processBattlefieldBriefSubmission(submission.id);

      return NextResponse.json(
        {
          id: result.submission.id,
          status: result.submission.status,
          briefId: result.submission.briefId,
          pdfFileUrl: result.submission.pdfFileUrl,
        },
        { status: 201 },
      );
    } catch (error) {
      const failed = await getBattlefieldBriefSubmission(submission.id);
      const message =
        error instanceof Error ? error.message : "Brief generation failed.";

      return NextResponse.json(
        {
          id: submission.id,
          status: failed?.status || "failed",
          error: message,
        },
        { status: 201 },
      );
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
