import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { getStorageBucket, isFirestoreAvailable } from "../firebaseAdmin";
import { BATTLEFIELD_BRIEF_DEFAULTS } from "./battlefieldBriefConstants";
import type {
  BattlefieldBriefPdfPayload,
  BattlefieldBriefPdfResult,
} from "./battlefieldBriefTypes";

const PAGE_CHAR_LIMIT = 95;
const LINES_PER_PAGE = 44;

function compact(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function escapePdfText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapLine(line: string, width = PAGE_CHAR_LIMIT): string[] {
  const clean = compact(line);
  if (!clean) return [""];
  if (clean.length <= width) return [clean];

  const words = clean.split(" ");
  const result: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= width) {
      current = candidate;
    } else {
      if (current) result.push(current);
      current = word;
    }
  }

  if (current) result.push(current);
  return result;
}

function asBulletLines(title: string, items: string[]): string[] {
  return [
    `${title}:`,
    ...items.flatMap((item) => wrapLine(`- ${item}`)),
    "",
  ];
}

function buildPdfLines(payload: BattlefieldBriefPdfPayload): string[] {
  const generatedAt = new Date(payload.brief.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const output = payload.brief.rawStructuredOutput;

  return [
    "Lanchester R&D // Battlefield Brief",
    "Generated strategic brief",
    "",
    `Project: ${output.projectName}`,
    `Date: ${generatedAt}`,
    `Prepared for: ${payload.submission.companyName}`,
    "",
    "Elevator Pitch",
    ...wrapLine(output.elevatorPitch30),
    "",
    "Battlefield Analysis",
    ...wrapLine(`Definition: ${output.battlefieldDefinition}`),
    ...wrapLine(`Incumbent Stronghold: ${output.incumbentStronghold}`),
    ...wrapLine(`Exposed Flank: ${output.exposedFlank}`),
    ...wrapLine(`Recommended Wedge: ${output.recommendedWedge}`),
    ...wrapLine(`Strategic Entry: ${output.strategicEntryRecommendation}`),
    ...wrapLine(`Expansion Path: ${output.expansionPath}`),
    "",
    "01 Define",
    ...wrapLine(`Core Friction: ${output.define.coreFriction}`),
    ...wrapLine(`User Pain: ${output.define.userPain}`),
    ...wrapLine(`Operational Failure: ${output.define.operationalFailure}`),
    ...wrapLine(`Emotional Tension: ${output.define.emotionalTension}`),
    ...wrapLine(`Success Condition: ${output.define.measurableSuccessCondition}`),
    "",
    "02 Map",
    ...asBulletLines("Key Actors", output.map.keyActors),
    ...asBulletLines("Workflow", output.map.workflow),
    ...asBulletLines("Bottlenecks", output.map.bottlenecks),
    ...wrapLine(`Market Structure: ${output.map.marketStructure}`),
    ...asBulletLines("Pressure Points", output.map.pressurePoints),
    "03 Validate",
    ...asBulletLines("Assumptions", output.validate.assumptions),
    ...asBulletLines("Risks", output.validate.risks),
    ...asBulletLines("Evidence Needed", output.validate.evidenceNeeded),
    ...asBulletLines("Fastest Validation Tests", output.validate.fastestValidationTests),
    "04 Execute",
    ...asBulletLines("MVP Scope", output.execute.mvpScope),
    ...asBulletLines("Not Now", output.execute.notNow),
    ...wrapLine(`Best First Segment: ${output.execute.bestFirstSegment}`),
    ...wrapLine(`Best Launch Channel: ${output.execute.bestLaunchChannel}`),
    ...asBulletLines("First 30/60/90 Plan", output.execute.first306090Plan),
    "05 Measure",
    ...asBulletLines("Leading Indicators", output.measure.leadingIndicators),
    ...asBulletLines("Wedge Success Metrics", output.measure.wedgeSuccessMetrics),
    ...asBulletLines("Expansion Triggers", output.measure.expansionTriggers),
    "Operational Rules",
    ...wrapLine(`01_INT Intellectual Rigor: ${output.ruleApplication.intellectualRigor}`),
    ...wrapLine(`02_TAC Tactical Execution: ${output.ruleApplication.tacticalExecution}`),
    ...wrapLine(`03_HUM Human Calibration: ${output.ruleApplication.humanCalibration}`),
    ...wrapLine(`04_AI Machine Leverage: ${output.ruleApplication.machineLeverage}`),
    "",
    "Closing Recommendation",
    ...wrapLine(output.closingRecommendation),
    "",
    "Lanchester R&D | https://www.lanchesterresearchanddesign.com",
    "Generated strategic brief",
  ];
}

function paginate(lines: string[]): string[][] {
  const pages: string[][] = [];
  let cursor: string[] = [];

  for (const line of lines) {
    if (cursor.length >= LINES_PER_PAGE) {
      pages.push(cursor);
      cursor = [];
    }
    cursor.push(line);
  }

  if (cursor.length > 0) pages.push(cursor);
  return pages;
}

function buildContentStream(lines: string[]): string {
  const commands: string[] = [];
  commands.push("BT");
  commands.push("/F1 11 Tf");
  commands.push("14 TL");
  commands.push("54 748 Td");

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      commands.push("T*");
      continue;
    }

    if (/^\d{2}\s[A-Z]/.test(line) || line === "Battlefield Analysis" || line === "Elevator Pitch" || line === "Operational Rules" || line === "Closing Recommendation" || line === "Lanchester R&D // Battlefield Brief") {
      commands.push("/F1 13 Tf");
      commands.push(`(${escapePdfText(line)}) Tj`);
      commands.push("/F1 11 Tf");
      commands.push("T*");
      continue;
    }

    commands.push(`(${escapePdfText(line)}) Tj`);
    commands.push("T*");
  }

  commands.push("ET");
  return commands.join("\n");
}

function buildMinimalPdf(pages: string[][]): Buffer {
  const objectBodies: string[] = [];
  const pageObjects: number[] = [];
  const contentObjects: number[] = [];

  const pagesRootObject = 2;

  pages.forEach((_page, index) => {
    const pageObjectId = 3 + index * 2;
    const contentObjectId = pageObjectId + 1;
    pageObjects.push(pageObjectId);
    contentObjects.push(contentObjectId);
  });

  const fontObjectId = 3 + pages.length * 2;

  objectBodies[0] = `<< /Type /Catalog /Pages ${pagesRootObject} 0 R >>`;
  objectBodies[1] = `<< /Type /Pages /Kids [${pageObjects.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>`;

  pages.forEach((page, index) => {
    const pageObjectId = pageObjects[index];
    const contentObjectId = contentObjects[index];
    const stream = buildContentStream(page);

    objectBodies[pageObjectId - 1] = `<< /Type /Page /Parent ${pagesRootObject} 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontObjectId} 0 R >> >> /Contents ${contentObjectId} 0 R >>`;
    objectBodies[contentObjectId - 1] = `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`;
  });

  objectBodies[fontObjectId - 1] =
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];

  objectBodies.forEach((body, idx) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${idx + 1} 0 obj\n${body}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objectBodies.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let i = 1; i <= objectBodies.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objectBodies.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "utf8");
}

export async function generateBattlefieldBriefPdf(
  payload: BattlefieldBriefPdfPayload,
): Promise<BattlefieldBriefPdfResult> {
  const lines = buildPdfLines(payload);
  const pages = paginate(lines);
  const buffer = buildMinimalPdf(pages);

  const filename = `${payload.submission.id}-${Date.now()}.pdf`;

  if (isFirestoreAvailable()) {
    const bucket = getStorageBucket();
    if (bucket) {
      const objectPath = `battlefield-briefs/${filename}`;
      const file = bucket.file(objectPath);
      await file.save(buffer, { contentType: "application/pdf" });
      await file.makePublic();

      return {
        filename,
        pdfFileUrl: `https://storage.googleapis.com/${bucket.name}/${objectPath}`,
        pdfFilePath: objectPath,
      };
    }
  }

  const publicDir = join(process.cwd(), "public", BATTLEFIELD_BRIEF_DEFAULTS.pdfDir);
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  const absolutePath = join(publicDir, filename);
  writeFileSync(absolutePath, buffer);

  return {
    filename,
    pdfFileUrl: `/${BATTLEFIELD_BRIEF_DEFAULTS.pdfDir}/${filename}`,
    pdfFilePath: absolutePath,
  };
}
