import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const moduleCache = new Map();

function resolveLocalImport(fromFile, specifier) {
  const base = resolve(dirname(fromFile), specifier);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.mjs`,
    join(base, "index.ts"),
    join(base, "index.js"),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }

  throw new Error(`Unable to resolve local module '${specifier}' from ${fromFile}`);
}

function compileTsModule(filePath) {
  const source = readFileSync(filePath, "utf-8");
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
    },
    fileName: filePath,
  }).outputText;
}

function loadModule(modulePath) {
  const absPath = resolve(modulePath);
  if (moduleCache.has(absPath)) {
    return moduleCache.get(absPath);
  }

  if (![".ts", ".tsx", ".js", ".mjs", ".cjs"].includes(extname(absPath))) {
    return require(absPath);
  }

  if (![".ts", ".tsx"].includes(extname(absPath))) {
    const loaded = require(absPath);
    moduleCache.set(absPath, loaded);
    return loaded;
  }

  const transpiled = compileTsModule(absPath);
  const module = { exports: {} };
  moduleCache.set(absPath, module.exports);

  const localRequire = (specifier) => {
    if (specifier.startsWith(".")) {
      const resolved = resolveLocalImport(absPath, specifier);
      return loadModule(resolved);
    }
    return require(specifier);
  };

  const wrapped = `(function (exports, require, module, __filename, __dirname) {\n${transpiled}\n})`;
  const fn = vm.runInThisContext(wrapped, { filename: absPath });
  fn(module.exports, localRequire, module, absPath, dirname(absPath));

  moduleCache.set(absPath, module.exports);
  return module.exports;
}

const root = process.cwd();
const promptBuilder = loadModule(
  join(root, "lib/battlefield-brief/battlefieldBriefPromptBuilder.ts"),
);
const parser = loadModule(
  join(root, "lib/battlefield-brief/battlefieldBriefOutputParser.ts"),
);
const validator = loadModule(
  join(root, "lib/battlefield-brief/battlefieldBriefOutputValidator.ts"),
);
const fallback = loadModule(
  join(root, "lib/battlefield-brief/battlefieldBriefFallbackGenerator.ts"),
);
const analysisService = loadModule(
  join(root, "lib/battlefield-brief/battlefieldBriefAnalysisService.ts"),
);
const constants = loadModule(
  join(root, "lib/battlefield-brief/battlefieldBriefConstants.ts"),
);

const submissionFixture = {
  id: "sub-1",
  createdAt: "2026-03-23T12:00:00.000Z",
  updatedAt: "2026-03-23T12:00:00.000Z",
  status: "submitted",
  errorMessage: null,
  briefId: null,
  pdfFileUrl: null,
  pdfFilePath: null,
  name: "Taylor Doe",
  email: "taylor@example.com",
  companyName: "Signal Wedge",
  ideaSummary:
    "An operations assistant for field service teams that reduces handoff delays in urgent maintenance workflows.",
  targetUser: "Field service coordinators in utilities",
  problemSolved:
    "Slow and error-prone dispatch handoffs that increase downtime and missed SLA targets.",
  competitors: "Spreadsheet workflows, incumbent field-service suites",
  differentiator:
    "A focused triage layer that prioritizes urgent jobs and shortens time-to-dispatch with auditable reasoning.",
  market: "Benelux utilities field operations",
  stage: "validating",
  resources: "2 engineers, 1 operator advisor, limited paid acquisition budget",
  biggestQuestion: "Which first segment gives the fastest proof of wedge value?",
  consentAccepted: true,
  sourcePage: "/battlefield-brief",
  referral: null,
};

describe("battlefield brief AI generation layer", () => {
  it("prompt builder returns stable versioned payload", () => {
    const result = promptBuilder.buildBattlefieldBriefPromptPayload(submissionFixture);

    assert.equal(
      result.promptVersion,
      constants.BATTLEFIELD_BRIEF_PROMPT_VERSION,
    );
    assert.equal(
      result.modelPurpose,
      constants.BATTLEFIELD_BRIEF_MODEL_PURPOSE,
    );
    assert.match(result.systemPrompt, /strategic concentration engine/i);
    assert.match(result.userPrompt, /Signal Wedge/);
    assert.match(result.userPrompt, /"ruleApplication"/);
  });

  it("parser handles direct valid JSON", () => {
    const parsed = parser.parseBattlefieldBriefOutput('{"projectName":"A"}');
    assert.equal(parsed.ok, true);
    if (parsed.ok) {
      assert.equal(parsed.parserStatus, "direct_json");
      assert.deepEqual(parsed.data, { projectName: "A" });
    }
  });

  it("parser recovers JSON wrapped in extra text", () => {
    const raw = [
      "Here is the output:",
      "```json",
      '{"projectName":"Recovered"}',
      "```",
    ].join("\n");

    const parsed = parser.parseBattlefieldBriefOutput(raw);
    assert.equal(parsed.ok, true);
    if (parsed.ok) {
      assert.equal(parsed.parserStatus, "code_fence_json");
      assert.equal(parsed.data.projectName, "Recovered");
    }
  });

  it("validator rejects malformed output", () => {
    const validated = validator.validateAndNormalizeBattlefieldBriefOutput({
      projectName: "Incomplete",
    });

    assert.equal(validated.ok, false);
    if (!validated.ok) {
      assert.ok(validated.errors.oneLinePitch);
      assert.ok(validated.errors["define.coreFriction"]);
    }
  });

  it("fallback generator returns complete structured brief", () => {
    const generated = fallback.generateBattlefieldBriefFallback(
      submissionFixture,
      "test fallback",
    );

    assert.ok(generated.output.projectName.length > 0);
    assert.ok(generated.output.execute.first306090Plan.length >= 3);
    assert.ok(generated.output.measure.leadingIndicators.length >= 1);
    assert.ok(generated.output.ruleApplication.intellectualRigor.length > 0);
    assert.ok(generated.output.closingRecommendation.length > 0);
  });

  it("analysis service returns valid brief in mock mode", async () => {
    const previous = process.env.BATTLEFIELD_BRIEF_ANALYSIS_MODE;
    process.env.BATTLEFIELD_BRIEF_ANALYSIS_MODE = "mock";

    try {
      const result = await analysisService.generateBattlefieldBriefAnalysis(
        submissionFixture,
      );

      assert.equal(result.isMock, true);
      assert.equal(result.generatorType, "mock-v1");
      assert.equal(result.generationMetadata.isFallback, true);
      assert.equal(result.generationMetadata.promptVersion, constants.BATTLEFIELD_BRIEF_PROMPT_VERSION);
      assert.ok(result.output.projectName.length > 0);
      assert.ok(result.output.validate.assumptions.length > 0);
    } finally {
      if (typeof previous === "string") {
        process.env.BATTLEFIELD_BRIEF_ANALYSIS_MODE = previous;
      } else {
        delete process.env.BATTLEFIELD_BRIEF_ANALYSIS_MODE;
      }
    }
  });
});
