"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { BattlefieldBriefDetail } from "../../../lib/battlefield-brief";
import BattlefieldBriefResultCard from "../BattlefieldBriefResultCard";
import BattlefieldBriefStatusBadge from "../BattlefieldBriefStatusBadge";
import { formatDateTime, toLabel } from "../utils";
import BattlefieldBriefAdminAuthGate from "./BattlefieldBriefAdminAuthGate";
import { withAdminAuthHeaders } from "./useBattlefieldBriefAdminAuth";

interface AdminDetailProps {
  id: string;
}

export default function BattlefieldBriefAdminDetailPage({ id }: AdminDetailProps) {
  return (
    <BattlefieldBriefAdminAuthGate>
      {({ token, signOut, userEmail }) => (
        <AdminDetailContent
          id={id}
          token={token}
          signOut={signOut}
          userEmail={userEmail}
        />
      )}
    </BattlefieldBriefAdminAuthGate>
  );
}

function AdminDetailContent({
  id,
  token,
  signOut,
  userEmail,
}: {
  id: string;
  token: string;
  signOut: () => Promise<void>;
  userEmail: string | null;
}) {
  const [detail, setDetail] = useState<BattlefieldBriefDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawOpen, setRawOpen] = useState(false);
  const [actionBusy, setActionBusy] = useState<"retry" | "mark_failed" | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/battlefield-briefs/${id}`,
        withAdminAuthHeaders(token, { cache: "no-store" }),
      );
      const data = (await res.json().catch(() => ({}))) as
        | BattlefieldBriefDetail
        | { error?: string };

      if (!res.ok || !("submission" in data)) {
        throw new Error((data as { error?: string }).error || "Unable to load detail.");
      }

      setDetail(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load detail.");
      setDetail(null);
    } finally {
      setLoading(false);
    }
  }, [id, token]);

  useEffect(() => {
    load();
  }, [load]);

  async function runAction(action: "retry" | "mark_failed") {
    setActionBusy(action);
    setError(null);

    try {
      const payload =
        action === "mark_failed"
          ? { action: "mark_failed", message: "Marked failed from admin panel." }
          : { action: "retry" };

      const res = await fetch(
        `/api/admin/battlefield-briefs/${id}`,
        withAdminAuthHeaders(token, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      );

      const data = (await res.json().catch(() => ({}))) as
        | BattlefieldBriefDetail
        | { error?: string };

      if (!res.ok || !("submission" in data)) {
        throw new Error((data as { error?: string }).error || "Action failed.");
      }

      setDetail(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setActionBusy(null);
    }
  }

  const submissionRows = useMemo(() => {
    if (!detail) return [];

    const submission = detail.submission;

    return [
      ["Name", submission.name],
      ["Email", submission.email],
      ["Company / Project", submission.companyName],
      ["Idea Summary", submission.ideaSummary],
      ["Target User", submission.targetUser],
      ["Problem Solved", submission.problemSolved],
      ["Competitors", submission.competitors],
      ["Differentiator", submission.differentiator],
      ["Market", submission.market],
      ["Stage", submission.stage],
      ["Resources", submission.resources],
      ["Biggest Question", submission.biggestQuestion],
      ["Consent Accepted", submission.consentAccepted ? "Yes" : "No"],
      ["Source Page", submission.sourcePage || "n/a"],
      ["Referral", submission.referral || "n/a"],
      ["Error Message", submission.errorMessage || "n/a"],
      ["PDF URL", submission.pdfFileUrl || "n/a"],
      ["PDF Path", submission.pdfFilePath || "n/a"],
      ["Brief ID", submission.briefId || "n/a"],
    ] as Array<[string, string]>;
  }, [detail]);

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <Link href="/admin/battlefield-briefs" className="btn-ghost text-xs inline-flex">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold uppercase tracking-tightest">
              Battlefield Brief Detail
            </h1>
            <p className="text-xs text-muted">{userEmail || "admin"}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => runAction("retry")}
              disabled={actionBusy !== null}
              className="btn-primary text-xs"
            >
              {actionBusy === "retry" ? "Retrying…" : "Retry"}
            </button>
            <button
              onClick={() => runAction("mark_failed")}
              disabled={actionBusy !== null}
              className="btn-ghost text-xs border-red-500/30 text-red-200 hover:text-red-100"
            >
              {actionBusy === "mark_failed" ? "Marking…" : "Mark Failed"}
            </button>
            <button onClick={load} className="btn-ghost text-xs">
              Refresh
            </button>
            <button onClick={signOut} className="btn-ghost text-xs">
              Sign out
            </button>
          </div>
        </div>

        {error ? (
          <div className="rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="lab-card p-8 text-muted text-sm animate-pulse">Loading detail…</div>
        ) : null}

        {!loading && detail ? (
          <>
            <section className="lab-card p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="analytical-label text-accent">Submission</p>
                <BattlefieldBriefStatusBadge status={detail.submission.status} />
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-xs text-muted">
                <p>ID: {detail.submission.id}</p>
                <p>Created: {formatDateTime(detail.submission.createdAt)}</p>
                <p>Updated: {formatDateTime(detail.submission.updatedAt)}</p>
                <p>Stage: {toLabel(detail.submission.stage)}</p>
              </div>
            </section>

            <section className="lab-card p-6 space-y-4">
              <p className="analytical-label text-accent">Raw Input</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {submissionRows.map(([label, value]) => (
                  <div key={label} className="space-y-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
                      {label}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed whitespace-pre-wrap">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="lab-card p-6 space-y-3">
              <p className="analytical-label text-accent">Status History</p>
              {detail.events.length === 0 ? (
                <p className="text-sm text-muted">No events logged.</p>
              ) : (
                <ul className="space-y-2">
                  {detail.events.map((event) => (
                    <li
                      key={event.id}
                      className="flex flex-wrap items-center justify-between gap-2 border border-white/10 bg-background-layer1/30 px-3 py-2"
                    >
                      <span className="text-xs font-mono uppercase tracking-widest text-accent/70">
                        {event.type}
                      </span>
                      <span className="text-sm text-white/85 flex-1">{event.message}</span>
                      <span className="text-xs text-muted">{formatDateTime(event.createdAt)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {detail.brief ? (
              <BattlefieldBriefResultCard
                brief={detail.brief}
                pdfFileUrl={detail.submission.pdfFileUrl}
                submissionId={detail.submission.id}
                showMeta
              />
            ) : (
              <section className="lab-card p-6 text-sm text-muted">
                No structured brief is attached yet.
              </section>
            )}

            <section className="lab-card p-6 space-y-3">
              <button
                onClick={() => setRawOpen((prev) => !prev)}
                className="btn-ghost text-xs"
              >
                {rawOpen ? "Hide Raw JSON" : "Show Raw JSON"}
              </button>
              {rawOpen ? (
                <pre className="overflow-x-auto rounded border border-white/10 bg-black/40 p-4 text-xs text-white/80">
                  {JSON.stringify(detail, null, 2)}
                </pre>
              ) : null}
            </section>
          </>
        ) : null}
      </div>
    </main>
  );
}
