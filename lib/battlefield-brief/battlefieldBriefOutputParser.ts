import type { BattlefieldBriefParserStatus } from "./battlefieldBriefTypes";

export type BattlefieldBriefParseResult =
  | {
      ok: true;
      data: unknown;
      parserStatus: Exclude<BattlefieldBriefParserStatus, "failed" | "not_run">;
      warnings: string[];
    }
  | {
      ok: false;
      parserStatus: "failed";
      warnings: string[];
      errorMessage: string;
    };

function extractJsonFromCodeFence(raw: string): string | null {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (!fenced) return null;
  return fenced[1]?.trim() || null;
}

function extractEmbeddedJson(raw: string): string | null {
  let depth = 0;
  let start = -1;
  let inString = false;
  let escaped = false;

  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "{") {
      if (depth === 0) start = i;
      depth += 1;
      continue;
    }

    if (ch === "}") {
      if (depth > 0) depth -= 1;
      if (depth === 0 && start >= 0) {
        return raw.slice(start, i + 1);
      }
    }
  }

  return null;
}

function tryParse(
  candidate: string,
): { ok: true; parsed: unknown } | { ok: false } {
  try {
    return { ok: true, parsed: JSON.parse(candidate) };
  } catch {
    return { ok: false };
  }
}

export function parseBattlefieldBriefOutput(
  rawResponseText: string,
): BattlefieldBriefParseResult {
  const raw = rawResponseText.trim();
  if (!raw) {
    return {
      ok: false,
      parserStatus: "failed",
      warnings: ["Provider returned empty output."],
      errorMessage: "Empty response from generation provider.",
    };
  }

  const direct = tryParse(raw);
  if (direct.ok) {
    return {
      ok: true,
      data: direct.parsed,
      parserStatus: "direct_json",
      warnings: [],
    };
  }

  const fenced = extractJsonFromCodeFence(raw);
  if (fenced) {
    const parsed = tryParse(fenced);
    if (parsed.ok) {
      return {
        ok: true,
        data: parsed.parsed,
        parserStatus: "code_fence_json",
        warnings: ["Recovered JSON from markdown code fence."],
      };
    }
  }

  const embedded = extractEmbeddedJson(raw);
  if (embedded) {
    const parsed = tryParse(embedded);
    if (parsed.ok) {
      return {
        ok: true,
        data: parsed.parsed,
        parserStatus: "embedded_json",
        warnings: ["Recovered JSON from mixed-content model response."],
      };
    }
  }

  return {
    ok: false,
    parserStatus: "failed",
    warnings: ["Unable to parse model output as JSON."],
    errorMessage: "Malformed model response: valid JSON object not found.",
  };
}
