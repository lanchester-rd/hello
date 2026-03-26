"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BATTLEFIELD_BRIEF_STAGE_OPTIONS,
  BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS,
  type BattlefieldBriefAdminListItem,
} from "../../../lib/battlefield-brief";
import BattlefieldBriefAdminAuthGate from "../../../components/battlefield-brief/admin/BattlefieldBriefAdminAuthGate";
import BattlefieldBriefAdminTable from "../../../components/battlefield-brief/admin/BattlefieldBriefAdminTable";
import { withAdminAuthHeaders } from "../../../components/battlefield-brief/admin/useBattlefieldBriefAdminAuth";

export default function BattlefieldBriefAdminListPage() {
  return (
    <BattlefieldBriefAdminAuthGate>
      {({ token, signOut, userEmail }) => (
        <AdminListContent token={token} signOut={signOut} userEmail={userEmail} />
      )}
    </BattlefieldBriefAdminAuthGate>
  );
}

function AdminListContent({
  token,
  signOut,
  userEmail,
}: {
  token: string;
  signOut: () => Promise<void>;
  userEmail: string | null;
}) {
  const [rows, setRows] = useState<BattlefieldBriefAdminListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [stage, setStage] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const query = useMemo(() => {
    const params = new URLSearchParams();
    params.set("limit", "500");
    if (search.trim()) params.set("search", search.trim());
    if (status) params.set("status", status);
    if (stage) params.set("stage", stage);
    if (from) params.set("from", new Date(from).toISOString());
    if (to) params.set("to", new Date(`${to}T23:59:59.999Z`).toISOString());
    return params.toString();
  }, [from, search, stage, status, to]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/battlefield-briefs?${query}`,
        withAdminAuthHeaders(token, { cache: "no-store" }),
      );
      const data = (await res.json().catch(() => ({}))) as
        | BattlefieldBriefAdminListItem[]
        | { error?: string };

      if (!res.ok || !Array.isArray(data)) {
        throw new Error((data as { error?: string }).error || "Unable to load submissions.");
      }

      setRows(data);
      setError(null);
    } catch (err) {
      setRows([]);
      setError(err instanceof Error ? err.message : "Unable to load submissions.");
    } finally {
      setLoading(false);
    }
  }, [query, token]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold uppercase tracking-tightest">
              Battlefield Brief Admin
            </h1>
            <p className="text-xs text-muted">{userEmail || "admin"}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={load} className="btn-ghost text-xs">
              Refresh
            </button>
            <button onClick={signOut} className="btn-ghost text-xs">
              Sign out
            </button>
          </div>
        </header>

        <section className="lab-card p-5 space-y-4">
          <p className="analytical-label text-accent">Filters</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <input
              className="admin-input"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search company, submitter, email"
            />

            <select
              className="admin-input"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="">All statuses</option>
              {BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              className="admin-input"
              value={stage}
              onChange={(event) => setStage(event.target.value)}
            >
              <option value="">All stages</option>
              {BATTLEFIELD_BRIEF_STAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <input
              type="date"
              className="admin-input"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
            />

            <input
              type="date"
              className="admin-input"
              value={to}
              onChange={(event) => setTo(event.target.value)}
            />
          </div>
        </section>

        {error ? (
          <div className="rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="lab-card p-8 text-muted text-sm animate-pulse">Loading submissions…</div>
        ) : (
          <BattlefieldBriefAdminTable rows={rows} />
        )}
      </div>
    </main>
  );
}
