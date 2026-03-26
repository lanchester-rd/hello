"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { PublicBattlefieldBriefDetail } from "../../lib/battlefield-brief";
import BattlefieldBriefResultCard from "./BattlefieldBriefResultCard";
import BattlefieldBriefStatusBadge from "./BattlefieldBriefStatusBadge";
import { formatDateTime } from "./utils";

type LoadState = "loading" | "ready" | "error";

interface DetailViewProps {
  id: string;
}

const CLAIM_SESSION_STORAGE_KEY = "learn.pending-claim-session";

function getOrCreateClaimSessionId() {
  const fallback = `claim_${Math.random().toString(36).slice(2, 10)}`;

  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const existing = window.localStorage.getItem(CLAIM_SESSION_STORAGE_KEY);
    if (existing) return existing;

    const created = `claim_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36).slice(-6)}`;
    window.localStorage.setItem(CLAIM_SESSION_STORAGE_KEY, created);
    return created;
  } catch {
    return fallback;
  }
}

export default function BattlefieldBriefDetailView({ id }: DetailViewProps) {
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [error, setError] = useState<string | null>(null);
  const [detail, setDetail] = useState<PublicBattlefieldBriefDetail | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);
  const [claimStatus, setClaimStatus] = useState<string | null>(null);
  const [viewEventSent, setViewEventSent] = useState(false);

  const status = detail?.submission.status;
  const isPending = status === "submitted" || status === "processing";

  const statusMessage = useMemo(() => {
    if (status === "submitted") return "Submission captured. Queueing analysis.";
    if (status === "processing") return "Generating structured brief and PDF artifact.";
    if (status === "failed") return detail?.submission.errorMessage || "Generation failed.";
    return null;
  }, [detail?.submission.errorMessage, status]);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch(`/api/battlefield-briefs/${id}`, { cache: "no-store" });
        const data = (await res.json().catch(() => ({}))) as PublicBattlefieldBriefDetail & {
          error?: string;
        };

        if (!res.ok) {
          throw new Error(data.error || "Unable to load brief.");
        }

        if (!active) return;
        setDetail(data);
        setLoadState("ready");
        setError(null);
      } catch (err) {
        if (!active) return;
        setLoadState("error");
        setError(err instanceof Error ? err.message : "Unable to load brief.");
      }
    }

    load();

    const interval = window.setInterval(() => {
      if (isPending) {
        load();
      }
    }, 4000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [id, isPending]);

  useEffect(() => {
    if (
      !detail ||
      detail.submission.status !== "completed" ||
      viewEventSent
    ) {
      return;
    }

    const payload = {
      eventType: "battlefield_result_viewed" as const,
      sourceTool: "battlefield_brief",
      sourceSessionId: detail.submission.id,
      anonymousSessionId: getOrCreateClaimSessionId(),
      resultId: detail.submission.id,
    };

    void fetch("/api/learn/project-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch(() => null);

    setViewEventSent(true);
  }, [detail, viewEventSent]);

  async function handleClaim() {
    if (!detail?.brief || isClaiming) return;

    setClaimError(null);
    setClaimStatus("Preparing your LEARNer project workspace…");
    setIsClaiming(true);

    try {
      const response = await fetch("/api/learn/project-seeds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceTool: "battlefield_brief",
          sourceSessionId: detail.submission.id,
          anonymousSessionId: getOrCreateClaimSessionId(),
          idempotencyKey: `battlefield-project:${detail.submission.id}`,
          intendedRedirect: "/learner/projects",
          resultPayload: {
            sourceApp: "hello",
            sourcePage: `/battlefield-brief/${detail.submission.id}`,
            submission: {
              id: detail.submission.id,
              createdAt: detail.submission.createdAt,
              updatedAt: detail.submission.updatedAt,
              companyName: detail.submission.companyName,
              stage: detail.submission.stage,
              status: detail.submission.status,
              ideaSummary: detail.submission.ideaSummary,
              targetUser: detail.submission.targetUser,
              problemSolved: detail.submission.problemSolved,
              differentiator: detail.submission.differentiator,
              market: detail.submission.market,
              resources: detail.submission.resources,
              biggestQuestion: detail.submission.biggestQuestion,
            },
            brief: detail.brief,
          },
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { joinUrl?: string; error?: string }
        | null;

      if (!response.ok || !data?.joinUrl) {
        throw new Error(
          (typeof data?.error === "string" && data.error) ||
            "Unable to create this LEARNer project right now.",
        );
      }

      setClaimStatus("Your project workspace is ready. Opening LEARNer…");
      window.location.assign(data.joinUrl);
    } catch (claimRequestError) {
      setClaimError(
        claimRequestError instanceof Error
          ? claimRequestError.message
          : "Unable to create this LEARNer project right now.",
      );
      setClaimStatus(null);
      setIsClaiming(false);
    }
  }

  if (loadState === "loading") {
    return (
      <div className="lab-card p-8 text-center">
        <p className="text-muted animate-pulse">Loading Battlefield Brief…</p>
      </div>
    );
  }

  if (loadState === "error") {
    return (
      <div className="lab-card p-8 space-y-4 border-red-500/30">
        <p className="text-red-300">{error || "Unable to load this brief."}</p>
        <Link href="/battlefield-brief" className="btn-ghost text-xs inline-flex">
          Back To Submission
        </Link>
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div className="space-y-6">
      <section className="lab-card p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="analytical-label text-accent">Submission Status</p>
          <BattlefieldBriefStatusBadge status={detail.submission.status} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tightest">
          {detail.submission.companyName}
        </h1>
        <div className="grid md:grid-cols-3 gap-3 text-xs text-muted">
          <p>ID: {detail.submission.id}</p>
          <p>Submitted: {formatDateTime(detail.submission.createdAt)}</p>
          <p>Stage: {detail.submission.stage}</p>
        </div>
        {statusMessage ? <p className="text-sm text-muted">{statusMessage}</p> : null}
      </section>

      {isPending ? (
        <section className="lab-card p-8 space-y-3 border-accent/30">
          <p className="analytical-label text-accent">Processing</p>
          <p className="text-sm text-muted">
            Keep this page open. We refresh automatically while your brief is generated.
          </p>
        </section>
      ) : null}

      {detail.brief && detail.submission.status === "completed" ? (
        <section className="lab-card p-8 md:p-10 space-y-5 border-accent/35 bg-accent/5">
          <div className="space-y-2">
            <p className="analytical-label text-accent">Next Step</p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tightest leading-tight">
              Turn this result into a real project.
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              This workspace turns your brief into a focused execution path. Stay narrow, prove
              the wedge, and move stage by stage with measurable discipline.
            </p>
            <p className="text-xs text-white/70">
              Your project will be waiting inside after LEARNid sign-in.
            </p>
          </div>

          {claimStatus ? (
            <p className="text-sm text-accent">{claimStatus}</p>
          ) : null}
          {claimError ? <p className="text-sm text-red-300">{claimError}</p> : null}

          <div className="flex flex-wrap gap-3">
            <button
              className="btn-primary text-xs"
              disabled={isClaiming}
              onClick={() => void handleClaim()}
              type="button"
            >
              {isClaiming ? "Preparing…" : "Save to LEARNer"}
            </button>
            <button
              className="btn-ghost text-xs"
              disabled={isClaiming}
              onClick={() => void handleClaim()}
              type="button"
            >
              Create project workspace
            </button>
            <button
              className="btn-ghost text-xs"
              disabled={isClaiming}
              onClick={() => void handleClaim()}
              type="button"
            >
              Continue with LEARNid
            </button>
          </div>
        </section>
      ) : null}

      {detail.brief && detail.submission.status === "completed" ? (
        <BattlefieldBriefResultCard
          brief={detail.brief}
          pdfFileUrl={detail.pdfFileUrl}
          submissionId={detail.submission.id}
        />
      ) : null}

      {detail.submission.status === "failed" ? (
        <section className="lab-card p-8 space-y-3 border-red-500/30">
          <p className="analytical-label text-red-300">Failed</p>
          <p className="text-sm text-red-100/90">
            {detail.submission.errorMessage ||
              "Generation did not complete. Please submit again or contact support."}
          </p>
          <Link href="/battlefield-brief" className="btn-ghost text-xs inline-flex">
            Start New Submission
          </Link>
        </section>
      ) : null}

      {!detail.brief && detail.submission.status === "completed" ? (
        <section className="lab-card p-8">
          <p className="text-sm text-muted">
            Brief metadata exists, but structured output is missing. An admin can inspect this in
            the management interface.
          </p>
        </section>
      ) : null}
    </div>
  );
}
