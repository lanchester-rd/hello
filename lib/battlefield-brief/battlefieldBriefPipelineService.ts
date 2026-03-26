import {
  BATTLEFIELD_BRIEF_EVENT_TYPES,
} from "./battlefieldBriefConstants";
import { generateBattlefieldBriefAnalysis } from "./battlefieldBriefAnalysisService";
import { generateBattlefieldBriefPdf } from "./battlefieldBriefPdfService";
import {
  addBattlefieldBriefEvent,
  createBattlefieldBrief,
  getBattlefieldBriefSubmission,
  updateBattlefieldBriefSubmission,
  updateBattlefieldBriefSubmissionStatus,
} from "./battlefieldBriefRepository";
import type { BattlefieldBriefPipelineResult } from "./battlefieldBriefTypes";

function safeErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "Battlefield Brief generation failed.";
}

export async function processBattlefieldBriefSubmission(
  submissionId: string,
): Promise<BattlefieldBriefPipelineResult> {
  const submission = await getBattlefieldBriefSubmission(submissionId);
  if (!submission) {
    throw new Error("Submission not found.");
  }

  await updateBattlefieldBriefSubmissionStatus(submissionId, "processing", null);
  await addBattlefieldBriefEvent(
    submissionId,
    BATTLEFIELD_BRIEF_EVENT_TYPES.processing,
    "Submission moved to processing.",
  );

  try {
    const analysis = await generateBattlefieldBriefAnalysis(submission);

    const brief = await createBattlefieldBrief({
      submissionId,
      rawStructuredOutput: analysis.output,
      renderedSummary: analysis.renderedSummary,
      generatorType: analysis.generatorType,
      viabilityScore: analysis.viabilityScore,
      isMock: analysis.isMock,
      generationMetadata: analysis.generationMetadata,
      status: "completed",
    });

    await addBattlefieldBriefEvent(
      submissionId,
      BATTLEFIELD_BRIEF_EVENT_TYPES.briefGenerated,
      `Structured brief generated using ${analysis.generatorType}.`,
    );

    const submissionWithBrief = await updateBattlefieldBriefSubmission(
      submissionId,
      {
        briefId: brief.id,
      },
    );

    if (!submissionWithBrief) {
      throw new Error("Unable to attach generated brief to submission.");
    }

    const pdf = await generateBattlefieldBriefPdf({
      submission: submissionWithBrief,
      brief,
    });

    await addBattlefieldBriefEvent(
      submissionId,
      BATTLEFIELD_BRIEF_EVENT_TYPES.pdfGenerated,
      "PDF artifact generated and attached.",
    );

    const completedSubmission = await updateBattlefieldBriefSubmission(
      submissionId,
      {
        pdfFileUrl: pdf.pdfFileUrl,
        pdfFilePath: pdf.pdfFilePath,
        status: "completed",
        errorMessage: null,
      },
    );

    if (!completedSubmission) {
      throw new Error("Unable to mark submission as completed.");
    }

    await addBattlefieldBriefEvent(
      submissionId,
      BATTLEFIELD_BRIEF_EVENT_TYPES.completed,
      "Battlefield Brief completed successfully.",
    );

    return {
      submission: completedSubmission,
      brief,
      pdf,
    };
  } catch (error) {
    const message = safeErrorMessage(error);
    await updateBattlefieldBriefSubmissionStatus(submissionId, "failed", message);
    await addBattlefieldBriefEvent(
      submissionId,
      BATTLEFIELD_BRIEF_EVENT_TYPES.failed,
      message,
    );
    throw new Error(message);
  }
}

export async function retryBattlefieldBriefSubmission(
  submissionId: string,
): Promise<BattlefieldBriefPipelineResult> {
  await addBattlefieldBriefEvent(
    submissionId,
    BATTLEFIELD_BRIEF_EVENT_TYPES.retryRequested,
    "Retry requested by admin.",
  );
  return processBattlefieldBriefSubmission(submissionId);
}
