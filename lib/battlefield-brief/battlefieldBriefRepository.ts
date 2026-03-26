import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { getDb, isFirestoreAvailable } from "../firebaseAdmin";
import {
  BATTLEFIELD_BRIEF_COLLECTIONS,
  BATTLEFIELD_BRIEF_DEFAULTS,
} from "./battlefieldBriefConstants";
import type {
  BattlefieldBriefAdminListItem,
  BattlefieldBriefDetail,
  BattlefieldBriefEventRecord,
  BattlefieldBriefEventType,
  BattlefieldBriefOutput,
  BattlefieldBriefRecord,
  BattlefieldBriefRecordStatus,
  BattlefieldBriefStage,
  BattlefieldBriefSubmissionInput,
  BattlefieldBriefSubmissionRecord,
  BattlefieldBriefSubmissionStatus,
} from "./battlefieldBriefTypes";

export type SubmissionListOptions = {
  search?: string;
  status?: BattlefieldBriefSubmissionStatus;
  stage?: BattlefieldBriefStage;
  from?: string;
  to?: string;
  limit?: number;
};

type CreateBriefInput = {
  submissionId: string;
  rawStructuredOutput: BattlefieldBriefOutput;
  renderedSummary: string;
  generatorType: BattlefieldBriefRecord["generatorType"];
  viabilityScore: number | null;
  isMock: boolean;
  generationMetadata?: BattlefieldBriefRecord["generationMetadata"];
  status: BattlefieldBriefRecordStatus;
  version?: number;
};

const DATA_DIR = join(process.cwd(), ".data");
const LOCAL_FILES = {
  submissions: join(DATA_DIR, "battlefield-brief-submissions.json"),
  briefs: join(DATA_DIR, "battlefield-briefs.json"),
  events: join(DATA_DIR, "battlefield-brief-events.json"),
} as const;

const useFirestore = isFirestoreAvailable();

function nowIso(): string {
  return new Date().toISOString();
}

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

function ensureDataFile(path: string) {
  if (!existsSync(path)) {
    writeFileSync(path, "[]", "utf-8");
  }
}

function readLocalArray<T>(path: string): T[] {
  ensureDataDir();
  ensureDataFile(path);
  try {
    const raw = readFileSync(path, "utf-8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as T[];
  } catch {
    return [];
  }
}

function writeLocalArray<T>(path: string, values: T[]) {
  ensureDataDir();
  writeFileSync(path, JSON.stringify(values, null, 2), "utf-8");
}

async function fsList<T>(collection: string): Promise<T[]> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const snap = await db.collection(collection).get();
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as T);
}

async function fsGetById<T>(collection: string, id: string): Promise<T | null> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const doc = await db.collection(collection).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as T;
}

async function fsCreateWithId<T extends { id: string }>(
  collection: string,
  data: T,
): Promise<T> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const { id, ...rest } = data as T & Record<string, unknown>;
  await db.collection(collection).doc(id).set(rest);
  return data;
}

async function fsUpdate<T>(
  collection: string,
  id: string,
  updates: Partial<T>,
): Promise<T | null> {
  const db = getDb();
  if (!db) throw new Error("Firestore unavailable");
  const ref = db.collection(collection).doc(id);
  const current = await ref.get();
  if (!current.exists) return null;
  await ref.update(updates as Record<string, unknown>);
  const updated = await ref.get();
  return { id: updated.id, ...updated.data() } as T;
}

function sortByCreatedDesc<T extends { createdAt: string }>(items: T[]): T[] {
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function applySubmissionFilters(
  items: BattlefieldBriefSubmissionRecord[],
  options?: SubmissionListOptions,
): BattlefieldBriefSubmissionRecord[] {
  if (!options) return items;

  let filtered = items;

  if (options.search) {
    const q = options.search.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter((item) => {
        return [
          item.companyName,
          item.name,
          item.email,
          item.ideaSummary,
          item.market,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q);
      });
    }
  }

  if (options.status) {
    filtered = filtered.filter((item) => item.status === options.status);
  }

  if (options.stage) {
    filtered = filtered.filter((item) => item.stage === options.stage);
  }

  if (options.from) {
    filtered = filtered.filter((item) => item.createdAt >= options.from!);
  }

  if (options.to) {
    filtered = filtered.filter((item) => item.createdAt <= options.to!);
  }

  if (typeof options.limit === "number" && options.limit > 0) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}

export async function createBattlefieldBriefSubmission(
  input: BattlefieldBriefSubmissionInput,
): Promise<BattlefieldBriefSubmissionRecord> {
  const timestamp = nowIso();
  const submission: BattlefieldBriefSubmissionRecord = {
    id: crypto.randomUUID(),
    createdAt: timestamp,
    updatedAt: timestamp,
    status: "submitted",
    errorMessage: null,
    briefId: null,
    pdfFileUrl: null,
    pdfFilePath: null,
    ...input,
    sourcePage: input.sourcePage || BATTLEFIELD_BRIEF_DEFAULTS.sourcePage,
    referral: input.referral || null,
  };

  if (useFirestore) {
    return fsCreateWithId(
      BATTLEFIELD_BRIEF_COLLECTIONS.submissions,
      submission,
    );
  }

  const submissions = readLocalArray<BattlefieldBriefSubmissionRecord>(
    LOCAL_FILES.submissions,
  );
  submissions.push(submission);
  writeLocalArray(LOCAL_FILES.submissions, submissions);
  return submission;
}

export async function updateBattlefieldBriefSubmission(
  id: string,
  updates: Partial<BattlefieldBriefSubmissionRecord>,
): Promise<BattlefieldBriefSubmissionRecord | null> {
  const patch: Partial<BattlefieldBriefSubmissionRecord> = {
    ...updates,
    updatedAt: nowIso(),
  };

  if (useFirestore) {
    return fsUpdate<BattlefieldBriefSubmissionRecord>(
      BATTLEFIELD_BRIEF_COLLECTIONS.submissions,
      id,
      patch,
    );
  }

  const submissions = readLocalArray<BattlefieldBriefSubmissionRecord>(
    LOCAL_FILES.submissions,
  );
  const index = submissions.findIndex((item) => item.id === id);
  if (index < 0) return null;

  submissions[index] = {
    ...submissions[index],
    ...patch,
  };
  writeLocalArray(LOCAL_FILES.submissions, submissions);
  return submissions[index];
}

export async function updateBattlefieldBriefSubmissionStatus(
  id: string,
  status: BattlefieldBriefSubmissionStatus,
  errorMessage: string | null = null,
): Promise<BattlefieldBriefSubmissionRecord | null> {
  return updateBattlefieldBriefSubmission(id, {
    status,
    errorMessage,
  });
}

export async function getBattlefieldBriefSubmission(
  id: string,
): Promise<BattlefieldBriefSubmissionRecord | null> {
  if (useFirestore) {
    return fsGetById<BattlefieldBriefSubmissionRecord>(
      BATTLEFIELD_BRIEF_COLLECTIONS.submissions,
      id,
    );
  }

  const submissions = readLocalArray<BattlefieldBriefSubmissionRecord>(
    LOCAL_FILES.submissions,
  );
  return submissions.find((item) => item.id === id) || null;
}

export async function listBattlefieldBriefSubmissions(
  options?: SubmissionListOptions,
): Promise<BattlefieldBriefSubmissionRecord[]> {
  const items = useFirestore
    ? await fsList<BattlefieldBriefSubmissionRecord>(
        BATTLEFIELD_BRIEF_COLLECTIONS.submissions,
      )
    : readLocalArray<BattlefieldBriefSubmissionRecord>(LOCAL_FILES.submissions);

  const sorted = sortByCreatedDesc(items);
  return applySubmissionFilters(sorted, options);
}

export async function createBattlefieldBrief(
  input: CreateBriefInput,
): Promise<BattlefieldBriefRecord> {
  const timestamp = nowIso();
  const brief: BattlefieldBriefRecord = {
    id: crypto.randomUUID(),
    submissionId: input.submissionId,
    createdAt: timestamp,
    updatedAt: timestamp,
    version: input.version ?? BATTLEFIELD_BRIEF_DEFAULTS.briefVersion,
    generatorType: input.generatorType,
    rawStructuredOutput: input.rawStructuredOutput,
    renderedSummary: input.renderedSummary,
    viabilityScore: input.viabilityScore,
    isMock: input.isMock,
    generationMetadata: input.generationMetadata ?? null,
    status: input.status,
  };

  if (useFirestore) {
    return fsCreateWithId(BATTLEFIELD_BRIEF_COLLECTIONS.briefs, brief);
  }

  const briefs = readLocalArray<BattlefieldBriefRecord>(LOCAL_FILES.briefs);
  briefs.push(brief);
  writeLocalArray(LOCAL_FILES.briefs, briefs);
  return brief;
}

export async function updateBattlefieldBrief(
  id: string,
  updates: Partial<BattlefieldBriefRecord>,
): Promise<BattlefieldBriefRecord | null> {
  const patch: Partial<BattlefieldBriefRecord> = {
    ...updates,
    updatedAt: nowIso(),
  };

  if (useFirestore) {
    return fsUpdate<BattlefieldBriefRecord>(
      BATTLEFIELD_BRIEF_COLLECTIONS.briefs,
      id,
      patch,
    );
  }

  const briefs = readLocalArray<BattlefieldBriefRecord>(LOCAL_FILES.briefs);
  const index = briefs.findIndex((item) => item.id === id);
  if (index < 0) return null;
  briefs[index] = { ...briefs[index], ...patch };
  writeLocalArray(LOCAL_FILES.briefs, briefs);
  return briefs[index];
}

export async function getBattlefieldBrief(
  id: string,
): Promise<BattlefieldBriefRecord | null> {
  if (useFirestore) {
    return fsGetById<BattlefieldBriefRecord>(
      BATTLEFIELD_BRIEF_COLLECTIONS.briefs,
      id,
    );
  }

  const briefs = readLocalArray<BattlefieldBriefRecord>(LOCAL_FILES.briefs);
  return briefs.find((item) => item.id === id) || null;
}

export async function getBattlefieldBriefBySubmissionId(
  submissionId: string,
): Promise<BattlefieldBriefRecord | null> {
  const briefs = useFirestore
    ? await fsList<BattlefieldBriefRecord>(BATTLEFIELD_BRIEF_COLLECTIONS.briefs)
    : readLocalArray<BattlefieldBriefRecord>(LOCAL_FILES.briefs);

  return briefs.find((item) => item.submissionId === submissionId) || null;
}

export async function addBattlefieldBriefEvent(
  submissionId: string,
  type: BattlefieldBriefEventType,
  message: string,
): Promise<BattlefieldBriefEventRecord> {
  const event: BattlefieldBriefEventRecord = {
    id: crypto.randomUUID(),
    submissionId,
    type,
    message,
    createdAt: nowIso(),
  };

  if (useFirestore) {
    return fsCreateWithId(BATTLEFIELD_BRIEF_COLLECTIONS.events, event);
  }

  const events = readLocalArray<BattlefieldBriefEventRecord>(LOCAL_FILES.events);
  events.push(event);
  writeLocalArray(LOCAL_FILES.events, events);
  return event;
}

export async function listBattlefieldBriefEvents(
  submissionId: string,
): Promise<BattlefieldBriefEventRecord[]> {
  const events = useFirestore
    ? await fsList<BattlefieldBriefEventRecord>(BATTLEFIELD_BRIEF_COLLECTIONS.events)
    : readLocalArray<BattlefieldBriefEventRecord>(LOCAL_FILES.events);

  return events
    .filter((item) => item.submissionId === submissionId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export async function listBattlefieldBriefAdminItems(
  options?: SubmissionListOptions,
): Promise<BattlefieldBriefAdminListItem[]> {
  const submissions = await listBattlefieldBriefSubmissions(options);
  return submissions.map((item) => ({
    id: item.id,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    companyName: item.companyName,
    submitterName: item.name,
    email: item.email,
    stage: item.stage,
    status: item.status,
    briefAvailable: !!item.briefId,
    pdfAvailable: !!item.pdfFileUrl,
  }));
}

export async function getBattlefieldBriefDetail(
  submissionId: string,
): Promise<BattlefieldBriefDetail | null> {
  const submission = await getBattlefieldBriefSubmission(submissionId);
  if (!submission) return null;

  const brief = submission.briefId
    ? await getBattlefieldBrief(submission.briefId)
    : await getBattlefieldBriefBySubmissionId(submission.id);

  const events = await listBattlefieldBriefEvents(submission.id);

  return {
    submission,
    brief,
    events,
  };
}
