import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ProjectEventBody = {
  eventType?: "battlefield_result_viewed";
  sourceTool?: string;
  sourceSessionId?: string;
  anonymousSessionId?: string;
  resultId?: string;
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
    const body = (await req.json().catch(() => null)) as ProjectEventBody | null;
    const eventType = body?.eventType;

    if (eventType !== "battlefield_result_viewed") {
      return NextResponse.json({ error: "Unsupported event type." }, { status: 400 });
    }

    const learnApiUrl = resolveLearnApiUrl();

    const upstream = await fetch(`${learnApiUrl}/api/results/project-events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventType,
        sourceTool: body?.sourceTool || "battlefield_brief",
        sourceSessionId: body?.sourceSessionId,
        anonymousSessionId: body?.anonymousSessionId,
        resultId: body?.resultId,
      }),
      cache: "no-store",
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error:
            (typeof data?.error === "string" && data.error) ||
            "Unable to track event right now.",
        },
        { status: upstream.status },
      );
    }

    return NextResponse.json({ ok: true }, { status: 202 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to track event";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
