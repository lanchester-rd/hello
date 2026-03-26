import {
  BATTLEFIELD_BRIEF_AI_PROVIDER_OPTIONS,
  BATTLEFIELD_BRIEF_DEFAULTS,
} from "./battlefieldBriefConstants";
import type { BattlefieldBriefAiProvider } from "./battlefieldBriefTypes";

export interface BattlefieldBriefGenerationProviderRequest {
  systemPrompt: string;
  userPrompt: string;
}

export interface BattlefieldBriefGenerationProviderResult {
  providerName: BattlefieldBriefAiProvider;
  modelName: string;
  rawResponseText: string;
  requestId: string | null;
}

export interface BattlefieldBriefGenerationRuntimeConfig {
  mode: "auto" | "mock" | "live";
  provider: BattlefieldBriefAiProvider;
  model: string;
  temperature: number;
  maxTokens: number;
  timeoutMs: number;
  openAiBaseUrl: string;
  openAiApiKey: string;
}

export class BattlefieldBriefProviderError extends Error {
  statusCode?: number;
  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = "BattlefieldBriefProviderError";
    this.statusCode = statusCode;
  }
}

const providerValues = new Set<string>(BATTLEFIELD_BRIEF_AI_PROVIDER_OPTIONS);

function readNumber(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function coerceProvider(value: string | undefined): BattlefieldBriefAiProvider {
  const normalized = (value || BATTLEFIELD_BRIEF_DEFAULTS.aiProvider).toLowerCase();
  if (providerValues.has(normalized)) {
    return normalized as BattlefieldBriefAiProvider;
  }
  return BATTLEFIELD_BRIEF_DEFAULTS.aiProvider;
}

function coerceMode(value: string | undefined): BattlefieldBriefGenerationRuntimeConfig["mode"] {
  const normalized = (value || BATTLEFIELD_BRIEF_DEFAULTS.analysisMode).toLowerCase();
  if (normalized === "mock" || normalized === "live" || normalized === "auto") {
    return normalized;
  }
  return "auto";
}

export function getBattlefieldBriefGenerationRuntimeConfig(): BattlefieldBriefGenerationRuntimeConfig {
  return {
    mode: coerceMode(process.env.BATTLEFIELD_BRIEF_ANALYSIS_MODE),
    provider: coerceProvider(process.env.BATTLEFIELD_BRIEF_AI_PROVIDER),
    model: process.env.BATTLEFIELD_BRIEF_AI_MODEL || BATTLEFIELD_BRIEF_DEFAULTS.aiModel,
    temperature: readNumber(
      process.env.BATTLEFIELD_BRIEF_AI_TEMPERATURE,
      BATTLEFIELD_BRIEF_DEFAULTS.aiTemperature,
    ),
    maxTokens: Math.max(
      400,
      Math.round(
        readNumber(
          process.env.BATTLEFIELD_BRIEF_AI_MAX_TOKENS,
          BATTLEFIELD_BRIEF_DEFAULTS.aiMaxTokens,
        ),
      ),
    ),
    timeoutMs: Math.max(
      10000,
      Math.round(
        readNumber(
          process.env.BATTLEFIELD_BRIEF_AI_TIMEOUT_MS,
          BATTLEFIELD_BRIEF_DEFAULTS.aiTimeoutMs,
        ),
      ),
    ),
    openAiBaseUrl:
      process.env.BATTLEFIELD_BRIEF_OPENAI_BASE_URL || "https://api.openai.com/v1",
    openAiApiKey: process.env.OPENAI_API_KEY || "",
  };
}

export function shouldUseBattlefieldBriefMockMode(
  config: BattlefieldBriefGenerationRuntimeConfig,
): { enabled: boolean; reason?: string } {
  if (config.mode === "mock") {
    return { enabled: true, reason: "BATTLEFIELD_BRIEF_ANALYSIS_MODE=mock" };
  }

  if (!config.openAiApiKey) {
    return { enabled: true, reason: "OPENAI_API_KEY is not configured" };
  }

  if (config.provider !== "openai") {
    return {
      enabled: true,
      reason: `Unsupported provider '${config.provider}'. Falling back to mock mode.`,
    };
  }

  return { enabled: false };
}

type OpenAiChatCompletionResponse = {
  id?: string;
  model?: string;
  error?: { message?: string };
  choices?: Array<{
    message?: {
      content?: string | Array<{ type?: string; text?: string }>;
    };
  }>;
};

type OpenAiMessageContent =
  | string
  | Array<{ type?: string; text?: string }>
  | undefined;

function extractContent(content: OpenAiMessageContent): string {
  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => (item && typeof item.text === "string" ? item.text : ""))
      .join("\n")
      .trim();
  }

  return "";
}

export async function generateBattlefieldBriefFromProvider(
  request: BattlefieldBriefGenerationProviderRequest,
  config = getBattlefieldBriefGenerationRuntimeConfig(),
): Promise<BattlefieldBriefGenerationProviderResult> {
  if (config.provider !== "openai") {
    throw new BattlefieldBriefProviderError(
      `Unsupported AI provider: ${config.provider}`,
    );
  }

  if (!config.openAiApiKey) {
    throw new BattlefieldBriefProviderError("Missing OPENAI_API_KEY.");
  }

  const body = {
    model: config.model,
    temperature: config.temperature,
    max_tokens: config.maxTokens,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: request.systemPrompt,
      },
      {
        role: "user",
        content: request.userPrompt,
      },
    ],
  };

  const response = await fetch(`${config.openAiBaseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.openAiApiKey}`,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(config.timeoutMs),
  });

  const payload = (await response.json().catch(() => null)) as
    | OpenAiChatCompletionResponse
    | null;

  if (!response.ok) {
    const message = payload?.error?.message || `Provider request failed with ${response.status}.`;
    throw new BattlefieldBriefProviderError(message, response.status);
  }

  const content = extractContent(payload?.choices?.[0]?.message?.content);
  if (!content) {
    throw new BattlefieldBriefProviderError("Provider response was empty.");
  }

  return {
    providerName: config.provider,
    modelName: payload?.model || config.model,
    rawResponseText: content,
    requestId: payload?.id || null,
  };
}
