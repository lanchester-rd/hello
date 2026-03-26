"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BATTLEFIELD_BRIEF_FORM_LABELS,
  BATTLEFIELD_BRIEF_STAGE_OPTIONS,
  type BattlefieldBriefSubmissionInput,
} from "../../lib/battlefield-brief";

type LocalFormState = Omit<
  BattlefieldBriefSubmissionInput,
  "sourcePage" | "referral"
>;

type SubmitState = "idle" | "submitting" | "ready" | "failed";

const initialState: LocalFormState = {
  name: "",
  email: "",
  companyName: "",
  ideaSummary: "",
  targetUser: "",
  problemSolved: "",
  competitors: "",
  differentiator: "",
  market: "",
  stage: "idea",
  resources: "",
  biggestQuestion: "",
  consentAccepted: false,
};

const requiredFields: Array<keyof LocalFormState> = [
  "name",
  "email",
  "companyName",
  "ideaSummary",
  "targetUser",
  "problemSolved",
  "competitors",
  "differentiator",
  "market",
  "stage",
  "resources",
  "biggestQuestion",
];

export default function BattlefieldBriefForm() {
  const router = useRouter();
  const [form, setForm] = useState<LocalFormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitButtonLabel = useMemo(() => {
    if (submitState === "submitting") return "Creating Brief…";
    if (submitState === "ready") return "Brief Ready";
    return "Generate Battlefield Brief";
  }, [submitState]);

  useEffect(() => {
    if (!submissionId) return;
    if (submitState !== "ready" && submitState !== "failed") return;

    const timeout = window.setTimeout(() => {
      router.push(`/battlefield-brief/${submissionId}`);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [router, submissionId, submitState]);

  function handleChange<K extends keyof LocalFormState>(
    key: K,
    value: LocalFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validateClientSide(): Record<string, string> {
    const errors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      const value = form[field];
      if (typeof value === "string" && !value.trim()) {
        errors[field] = "This field is required.";
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!form.consentAccepted) {
      errors.consentAccepted = "Consent is required.";
    }

    return errors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const errors = validateClientSide();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setSubmitState("submitting");

    try {
      const res = await fetch("/api/battlefield-briefs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourcePage: "/battlefield-brief",
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        id?: string;
        status?: string;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok) {
        setSubmitState("failed");
        setSubmitError(data.error || "Unable to submit right now.");
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        return;
      }

      if (!data.id) {
        setSubmitState("failed");
        setSubmitError("Submission created but no identifier was returned.");
        return;
      }

      setSubmissionId(data.id);

      if (data.status === "failed") {
        setSubmitState("failed");
        setSubmitError(data.error || "Generation failed. You can still open the submission.");
      } else {
        setSubmitState("ready");
      }
    } catch (error) {
      setSubmitState("failed");
      setSubmitError(
        error instanceof Error ? error.message : "Unexpected submission error.",
      );
    }
  }

  return (
    <section id="battlefield-brief-form" className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-accent/40" />
        <span className="analytical-label text-accent">Submission Form</span>
      </div>

      <form onSubmit={handleSubmit} className="lab-card p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.name}
            error={fieldErrors.name}
            required
          >
            <input
              className="admin-input"
              value={form.name}
              onChange={(event) => handleChange("name", event.target.value)}
              placeholder="Jane Smith"
            />
          </Field>

          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.email}
            error={fieldErrors.email}
            required
          >
            <input
              type="email"
              className="admin-input"
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
              placeholder="jane@company.com"
            />
          </Field>
        </div>

        <Field
          label={BATTLEFIELD_BRIEF_FORM_LABELS.companyName}
          error={fieldErrors.companyName}
          required
        >
          <input
            className="admin-input"
            value={form.companyName}
            onChange={(event) => handleChange("companyName", event.target.value)}
            placeholder="Project / startup / business name"
          />
        </Field>

        <Field
          label={BATTLEFIELD_BRIEF_FORM_LABELS.ideaSummary}
          error={fieldErrors.ideaSummary}
          required
        >
          <textarea
            className="admin-input min-h-[110px]"
            value={form.ideaSummary}
            onChange={(event) => handleChange("ideaSummary", event.target.value)}
            placeholder="Describe the idea in plain language."
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.targetUser}
            error={fieldErrors.targetUser}
            required
          >
            <textarea
              className="admin-input min-h-[110px]"
              value={form.targetUser}
              onChange={(event) => handleChange("targetUser", event.target.value)}
              placeholder="Who experiences this problem most directly?"
            />
          </Field>

          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.problemSolved}
            error={fieldErrors.problemSolved}
            required
          >
            <textarea
              className="admin-input min-h-[110px]"
              value={form.problemSolved}
              onChange={(event) => handleChange("problemSolved", event.target.value)}
              placeholder="What operational pain is solved?"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.competitors}
            error={fieldErrors.competitors}
            required
          >
            <textarea
              className="admin-input min-h-[100px]"
              value={form.competitors}
              onChange={(event) => handleChange("competitors", event.target.value)}
              placeholder="Current alternatives, internal or external."
            />
          </Field>

          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.differentiator}
            error={fieldErrors.differentiator}
            required
          >
            <textarea
              className="admin-input min-h-[100px]"
              value={form.differentiator}
              onChange={(event) => handleChange("differentiator", event.target.value)}
              placeholder="What is fundamentally different in your approach?"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.market}
            error={fieldErrors.market}
            required
          >
            <input
              className="admin-input"
              value={form.market}
              onChange={(event) => handleChange("market", event.target.value)}
              placeholder="Market and geography"
            />
          </Field>

          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.stage}
            error={fieldErrors.stage}
            required
          >
            <select
              className="admin-input"
              value={form.stage}
              onChange={(event) =>
                handleChange("stage", event.target.value as LocalFormState["stage"])
              }
            >
              {BATTLEFIELD_BRIEF_STAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label={BATTLEFIELD_BRIEF_FORM_LABELS.resources}
            error={fieldErrors.resources}
            required
          >
            <textarea
              className="admin-input min-h-[100px]"
              value={form.resources}
              onChange={(event) => handleChange("resources", event.target.value)}
              placeholder="Team, budget, runway, constraints"
            />
          </Field>
        </div>

        <Field
          label={BATTLEFIELD_BRIEF_FORM_LABELS.biggestQuestion}
          error={fieldErrors.biggestQuestion}
          required
        >
          <textarea
            className="admin-input min-h-[120px]"
            value={form.biggestQuestion}
            onChange={(event) => handleChange("biggestQuestion", event.target.value)}
            placeholder="What is the most strategic question you need answered now?"
          />
        </Field>

        <label className="flex items-start gap-3 rounded border border-white/10 bg-background-layer1/30 p-4">
          <input
            type="checkbox"
            checked={form.consentAccepted}
            onChange={(event) => handleChange("consentAccepted", event.target.checked)}
            className="mt-1 accent-accent"
          />
          <span className="text-sm text-white/85 leading-relaxed">
            {BATTLEFIELD_BRIEF_FORM_LABELS.consentAccepted}
          </span>
        </label>

        {fieldErrors.consentAccepted ? (
          <p className="text-xs text-red-400">{fieldErrors.consentAccepted}</p>
        ) : null}

        {submitError ? (
          <div className="rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {submitError}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="btn-primary"
            disabled={submitState === "submitting"}
          >
            {submitButtonLabel}
          </button>
          <p className="text-xs text-muted">
            Structured output + PDF artifact are generated after submission.
          </p>
        </div>
      </form>

      {submitState === "submitting" ? (
        <StatusPanel
          title="Creating brief"
          body="Applying the Lanchester framework to your input now."
        />
      ) : null}

      {submitState === "ready" && submissionId ? (
        <StatusPanel
          title="Brief ready"
          body="Your Battlefield Brief has been generated. Opening the result view now."
          href={`/battlefield-brief/${submissionId}`}
        />
      ) : null}

      {submitState === "failed" && submissionId ? (
        <StatusPanel
          title="Generation failed gracefully"
          body="The submission was stored. Open the detail view for status and retry context."
          href={`/battlefield-brief/${submissionId}`}
        />
      ) : null}
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-widest font-mono text-muted/70">
        {label}
        {required ? <span className="text-accent ml-1">*</span> : null}
      </span>
      {children}
      {error ? <span className="text-xs text-red-400">{error}</span> : null}
    </label>
  );
}

function StatusPanel({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href?: string;
}) {
  return (
    <div className="lab-card p-5 border-accent/25">
      <p className="analytical-label text-accent">{title}</p>
      <p className="mt-2 text-sm text-muted">{body}</p>
      {href ? (
        <a href={href} className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-accent hover:text-white">
          Open Submission
        </a>
      ) : null}
    </div>
  );
}
