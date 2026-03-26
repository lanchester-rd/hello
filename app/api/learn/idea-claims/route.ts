import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ClaimRequestBody = {
  sourceTool?: string;
  sourceSessionId?: string;
  anonymousSessionId?: string;
  idempotencyKey?: string;
  intendedRedirect?: string;
  resultPayload?: Record<string, unknown>;
};

function resolveLearnApiUrl() {
  return (
    process.env.LEARN_API_URL ||
    process.env.NEXT_PUBLIC_LEARN_API_URL ||
    "https://lean-api.lanchesterresearchanddesign.com"
  ).replace(/\/$/, "");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as ClaimRequestBody | null;

    if (!body || typeof body !== "object" || !body.resultPayload) {
      return NextResponse.json(
        { error: "A result payload is required to create a claim." },
        { status: 400 },
      );
    }

    const learnApiUrl = resolveLearnApiUrl();

    const upstream = await fetch(`${learnApiUrl}/api/results/idea-claims`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sourceTool: body.sourceTool || "battlefield_brief",
        sourceSessionId: body.sourceSessionId,
        anonymousSessionId: body.anonymousSessionId,
        idempotencyKey: body.idempotencyKey,
        intendedRedirect: body.intendedRedirect || "/learner/ideas",
        resultPayload: body.resultPayload,
      }),
      cache: "no-store",
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error:
            (typeof data?.error === "string" && data.error) ||
            "Unable to create a claim in LEARN right now.",
        },
        { status: upstream.status },
      );
    }

    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create claim";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
