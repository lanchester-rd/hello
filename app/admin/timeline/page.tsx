"use client";

import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onIdTokenChanged,
  type User,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";

/* ─── Local types (mirrors StoredEvent shape without importing server code) ─── */

interface MediaItem {
  id: string;
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  depth: number;
  position?: string;
  sortOrder?: number;
}

interface EventLink {
  label: string;
  href: string;
}

interface EditorEvent {
  id: string;
  slug: string;
  start: string;
  end?: string;
  sortOrder: number;
  era?: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  summary: string;
  body?: string;
  achievements?: string[];
  tags?: string[];
  quote?: string;
  featured?: boolean;
  theme?: "dark" | "light" | "accent";
  milestone?: string;
  status: "draft" | "published";
  media: MediaItem[];
  images: MediaItem[];
  links?: EventLink[];
  createdAt: string;
  updatedAt: string;
}

/* ─── Reference data ─── */

const ERAS = [
  { id: "school", label: "School Years" },
  { id: "formation", label: "Early Formation" },
  { id: "university", label: "University" },
  { id: "career", label: "Early Career" },
  { id: "founder", label: "Founder Era" },
  { id: "leadership", label: "Product Leadership" },
  { id: "venture", label: "Venture Building" },
];

const CATEGORIES = [
  "Education",
  "Freelance",
  "Career",
  "Venture",
  "Leadership",
];

const THEMES: ("dark" | "light" | "accent")[] = ["dark", "light", "accent"];

/* ─── Helper: fetch with Firebase Bearer token ─── */

let _cachedToken: string | null = null;

function setToken(t: string | null) {
  _cachedToken = t;
}

function adminFetch(path: string, options?: RequestInit) {
  return fetch(path, {
    ...options,
    headers: {
      ...(options?.headers || {}),
      ..._cachedToken ? { Authorization: `Bearer ${_cachedToken}` } : {},
    },
  });
}

/* ═══════════════════════════════════════════════════════════════════
   Main admin page
   ═══════════════════════════════════════════════════════════════════ */

export default function TimelineAdminPage() {
  /* ─── State ─── */
  const [authed, setAuthed] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [events, setEvents] = useState<EditorEvent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [view, setView] = useState<"list" | "edit" | "create">("list");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<EditorEvent>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  /* ─── Firebase auth listener ─── */
  useEffect(() => {
    const unsub = onIdTokenChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        const token = await user.getIdToken();
        setToken(token);
        // Verify admin access via API
        try {
          const res = await fetch("/api/timeline/events?admin=true", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            setAuthed(true);
            setEvents(await res.json());
            setLoading(false);
          } else {
            setAuthed(false);
            setError("Your account does not have admin access.");
          }
        } catch {
          setAuthed(false);
        }
      } else {
        setToken(null);
        setAuthed(false);
      }
      setAuthChecked(true);
    });
    return () => unsub();
  }, []);

  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      const code =
        typeof err === "object" && err && "code" in err
          ? String((err as { code: string }).code)
          : "";
      if (
        code === "auth/popup-blocked" ||
        code === "auth/popup-closed-by-user"
      ) {
        await signInWithRedirect(auth, provider);
        return;
      }
      setError("Sign-in failed. Please try again.");
    }
  };

  const handleSignOut = async () => {
    await auth.signOut();
    setAuthed(false);
    setEvents([]);
    setView("list");
  };

  /* ─── CRUD helpers ─── */

  const loadEvents = async () => {
    setLoading(true);
    try {
      const res = await adminFetch("/api/timeline/events?admin=true");
      if (res.ok) setEvents(await res.json());
    } finally {
      setLoading(false);
    }
  };

  const saveEvent = async () => {
    const errors: Record<string, string> = {};
    if (!formData.title?.trim()) errors.title = "Title is required";
    if (!formData.start?.trim()) errors.start = "Start date is required";
    if (!formData.summary?.trim()) errors.summary = "Summary is required";
    formData.media?.forEach((m, i) => {
      if (!m.alt?.trim())
        errors[`media-${i}-alt`] = `Media ${i + 1} needs alt text`;
    });
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSaving(true);
    setError(null);
    try {
      const payload = { ...formData };
      delete (payload as Record<string, unknown>).images;

      const res = selectedId
        ? await adminFetch(`/api/timeline/events/${selectedId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await adminFetch("/api/timeline/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || "Save failed");
      }
      await loadEvents();
      setView("list");
      setSelectedId(null);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const deleteEventById = async (id: string) => {
    if (!confirm("Delete this event? This cannot be undone.")) return;
    try {
      await adminFetch(`/api/timeline/events/${id}`, { method: "DELETE" });
      await loadEvents();
      if (selectedId === id) {
        setSelectedId(null);
        setView("list");
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Delete failed");
    }
  };

  const toggleStatus = async (id: string, current: string) => {
    const newStatus = current === "published" ? "draft" : "published";
    await adminFetch(`/api/timeline/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    await loadEvents();
  };

  const moveEvent = async (id: string, direction: "up" | "down") => {
    const idx = events.findIndex((e) => e.id === id);
    if (idx < 0) return;
    const newIdx = direction === "up" ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= events.length) return;
    const reordered = [...events];
    [reordered[idx], reordered[newIdx]] = [reordered[newIdx], reordered[idx]];
    await adminFetch("/api/timeline/events/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderedIds: reordered.map((e) => e.id) }),
    });
    await loadEvents();
  };

  /* ─── Form helpers ─── */

  const startEdit = (id: string) => {
    const evt = events.find((e) => e.id === id);
    if (!evt) return;
    setFormData({ ...evt });
    setSelectedId(id);
    setFormErrors({});
    setView("edit");
  };

  const startCreate = () => {
    setFormData({
      title: "",
      subtitle: "",
      start: "",
      end: "",
      category: CATEGORIES[0],
      era: ERAS[0].id,
      summary: "",
      body: "",
      status: "draft",
      theme: "dark",
      media: [],
      achievements: [],
      tags: [],
      links: [],
    });
    setSelectedId(null);
    setFormErrors({});
    setView("create");
  };

  /* ─── Media helpers ─── */

  const uploadMedia = async (files: FileList) => {
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const res = await adminFetch("/api/timeline/media/upload", {
        method: "POST",
        body: fd,
      });
      if (res.ok) {
        const { src } = await res.json();
        const newMedia: MediaItem = {
          id: crypto.randomUUID(),
          type: "image",
          src,
          alt: file.name.replace(/\.[^.]+$/, ""),
          depth: 0.3,
        };
        setFormData((prev) => ({
          ...prev,
          media: [...(prev.media || []), newMedia],
        }));
      }
    }
  };

  const removeMedia = (mediaId: string) => {
    setFormData((prev) => ({
      ...prev,
      media: (prev.media || []).filter((m) => m.id !== mediaId),
    }));
  };

  const updateMedia = (mediaId: string, field: string, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      media: (prev.media || []).map((m) =>
        m.id === mediaId ? { ...m, [field]: value } : m,
      ),
    }));
  };

  const moveMedia = (mediaId: string, direction: "up" | "down") => {
    const media = [...(formData.media || [])];
    const idx = media.findIndex((m) => m.id === mediaId);
    if (idx < 0) return;
    const newIdx = direction === "up" ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= media.length) return;
    [media[idx], media[newIdx]] = [media[newIdx], media[idx]];
    setFormData({ ...formData, media });
  };

  /* ─── Export / Import ─── */

  const handleExport = async () => {
    const res = await adminFetch("/api/timeline/export");
    if (!res.ok) return;
    const data = await res.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `timeline-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const text = await file.text();
      try {
        const data = JSON.parse(text);
        if (
          !confirm(
            `Import ${Array.isArray(data) ? data.length : 0} events? This replaces all existing data.`,
          )
        )
          return;
        const res = await adminFetch("/api/timeline/import", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: text,
        });
        if (res.ok) {
          await loadEvents();
          setView("list");
        }
      } catch {
        setError("Invalid JSON file");
      }
    };
    input.click();
  };

  /* ═══════════════  Render: Auth gate  ═══════════════ */

  if (!authChecked) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm animate-pulse">Connecting…</p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="lab-card w-full max-w-sm space-y-6 p-8 text-center">
          <h1 className="text-xl font-bold tracking-tightest uppercase">
            Timeline Admin
          </h1>
          <p className="text-muted text-sm">
            Sign in with your authorised Google account to access the editor.
          </p>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {firebaseUser && !authed && authChecked && (
            <p className="text-muted/60 text-xs">
              Signed in as {firebaseUser.email} — not an admin.
            </p>
          )}
          <button onClick={handleGoogleSignIn} className="btn-primary w-full">
            Sign in with Google
          </button>
          {firebaseUser && (
            <button
              onClick={handleSignOut}
              className="btn-ghost text-xs w-full"
            >
              Sign out
            </button>
          )}
        </div>
      </main>
    );
  }

  /* ═══════════════  Render: Event list  ═══════════════ */

  if (view === "list") {
    return (
      <main className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tightest uppercase">
                Timeline Editor
              </h1>
              <p className="text-muted text-sm mt-1">{events.length} events</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleExport} className="btn-ghost text-xs">
                Export
              </button>
              <button onClick={handleImport} className="btn-ghost text-xs">
                Import
              </button>
              <a
                href="/admin/timeline/preview"
                className="btn-ghost text-xs"
              >
                Preview
              </a>
              <button onClick={startCreate} className="btn-primary text-xs">
                + New Event
              </button>
              <button
                onClick={handleSignOut}
                className="btn-ghost text-xs text-muted/40 hover:text-muted"
                title={firebaseUser?.email || "Sign out"}
              >
                Sign out
              </button>
            </div>
          </div>

          <ErrorBanner error={error} onDismiss={() => setError(null)} />

          {loading ? (
            <p className="text-muted text-sm animate-pulse">Loading…</p>
          ) : (
            <div className="space-y-2">
              {events.map((evt, idx) => (
                <div
                  key={evt.id}
                  className="lab-card flex items-center gap-4 p-4 cursor-pointer hover:border-accent/40 transition-colors"
                  onClick={() => startEdit(evt.id)}
                >
                  {/* Reorder arrows */}
                  <div
                    className="flex flex-col gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => moveEvent(evt.id, "up")}
                      disabled={idx === 0}
                      className="text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none"
                      aria-label="Move up"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => moveEvent(evt.id, "down")}
                      disabled={idx === events.length - 1}
                      className="text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none"
                      aria-label="Move down"
                    >
                      ▼
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm truncate">
                        {evt.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStatus(evt.id, evt.status);
                        }}
                        className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest cursor-pointer ${
                          evt.status === "published"
                            ? "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20"
                            : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20"
                        }`}
                      >
                        {evt.status}
                      </button>
                      {evt.featured && (
                        <span className="text-[9px] text-accent/50">★</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-muted/50 font-mono">
                      <span>
                        {evt.start}
                        {evt.end ? ` — ${evt.end}` : ""}
                      </span>
                      <span>{evt.category}</span>
                      {evt.era && (
                        <span>
                          {ERAS.find((e) => e.id === evt.era)?.label}
                        </span>
                      )}
                      <span>{evt.media?.length || 0} media</span>
                    </div>
                  </div>

                  {/* Delete */}
                  <div
                    className="flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => deleteEventById(evt.id)}
                      className="text-red-400/50 hover:text-red-400 text-xs px-2 py-1"
                      aria-label="Delete event"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }

  /* ═══════════════  Render: Edit / Create form  ═══════════════ */

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setView("list");
                setSelectedId(null);
              }}
              className="btn-ghost text-xs"
            >
              ← Back
            </button>
            <h1 className="text-xl font-bold tracking-tightest uppercase">
              {selectedId ? "Edit Event" : "New Event"}
            </h1>
          </div>
          <button
            onClick={saveEvent}
            disabled={saving}
            className="btn-primary text-xs"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>

        <ErrorBanner error={error} onDismiss={() => setError(null)} />

        <div className="space-y-8">
          {/* ── Core fields ── */}
          <section className="lab-card p-6 space-y-4">
            <h2 className="analytical-label text-muted/60">
              Core Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Title" required error={formErrors.title}>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="admin-input"
                  placeholder="Event title"
                />
              </Field>
              <Field label="Subtitle">
                <input
                  type="text"
                  value={formData.subtitle || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, subtitle: e.target.value })
                  }
                  className="admin-input"
                  placeholder="Short subtitle"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Field label="Start" required error={formErrors.start}>
                <input
                  type="text"
                  value={formData.start || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, start: e.target.value })
                  }
                  className="admin-input"
                  placeholder="2016"
                />
              </Field>
              <Field label="End">
                <input
                  type="text"
                  value={formData.end || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, end: e.target.value })
                  }
                  className="admin-input"
                  placeholder="2019 or blank"
                />
              </Field>
              <Field label="Status">
                <select
                  value={formData.status || "draft"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "draft" | "published",
                    })
                  }
                  className="admin-input"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </Field>
              <Field label="Theme">
                <select
                  value={formData.theme || "dark"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      theme: e.target.value as "dark" | "light" | "accent",
                    })
                  }
                  className="admin-input"
                >
                  {THEMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="Category">
                <input
                  type="text"
                  value={formData.category || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="admin-input"
                  list="categories"
                  placeholder="Category"
                />
                <datalist id="categories">
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </Field>
              <Field label="Era">
                <select
                  value={formData.era || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, era: e.target.value })
                  }
                  className="admin-input"
                >
                  <option value="">— None —</option>
                  {ERAS.map((era) => (
                    <option key={era.id} value={era.id}>
                      {era.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Location">
                <input
                  type="text"
                  value={formData.location || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="admin-input"
                  placeholder="London, UK"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Milestone Label">
                <input
                  type="text"
                  value={formData.milestone || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, milestone: e.target.value })
                  }
                  className="admin-input"
                  placeholder="e.g. Founded"
                />
              </Field>
              <Field label="Featured">
                <label className="flex items-center gap-2 h-full pt-1">
                  <input
                    type="checkbox"
                    checked={formData.featured || false}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="accent-accent"
                  />
                  <span className="text-sm text-muted">
                    Mark as featured event
                  </span>
                </label>
              </Field>
            </div>
          </section>

          {/* ── Content ── */}
          <section className="lab-card p-6 space-y-4">
            <h2 className="analytical-label text-muted/60">Content</h2>
            <Field label="Summary" required error={formErrors.summary}>
              <textarea
                value={formData.summary || ""}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                className="admin-input min-h-[80px]"
                placeholder="Brief summary of this event"
              />
            </Field>
            <Field label="Body">
              <textarea
                value={formData.body || ""}
                onChange={(e) =>
                  setFormData({ ...formData, body: e.target.value })
                }
                className="admin-input min-h-[120px]"
                placeholder="Extended narrative (optional)"
              />
            </Field>
            <Field label="Quote">
              <input
                type="text"
                value={formData.quote || ""}
                onChange={(e) =>
                  setFormData({ ...formData, quote: e.target.value })
                }
                className="admin-input"
                placeholder="Notable quote or takeaway"
              />
            </Field>
          </section>

          {/* ── Achievements ── */}
          <section className="lab-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="analytical-label text-muted/60">Achievements</h2>
              <button
                onClick={() =>
                  setFormData({
                    ...formData,
                    achievements: [...(formData.achievements || []), ""],
                  })
                }
                className="btn-ghost text-xs"
              >
                + Add
              </button>
            </div>
            {(formData.achievements || []).map((a, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  value={a}
                  onChange={(e) => {
                    const updated = [...(formData.achievements || [])];
                    updated[i] = e.target.value;
                    setFormData({ ...formData, achievements: updated });
                  }}
                  className="admin-input flex-1"
                  placeholder="Achievement"
                />
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      achievements: (formData.achievements || []).filter(
                        (_, j) => j !== i,
                      ),
                    })
                  }
                  className="text-red-400/50 hover:text-red-400 text-xs px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </section>

          {/* ── Tags ── */}
          <section className="lab-card p-6 space-y-4">
            <h2 className="analytical-label text-muted/60">Tags</h2>
            <input
              type="text"
              placeholder="Type a tag and press Enter"
              className="admin-input"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") {
                  e.preventDefault();
                  const val = (e.target as HTMLInputElement).value
                    .trim()
                    .replace(/,$/, "");
                  if (val) {
                    setFormData({
                      ...formData,
                      tags: [...(formData.tags || []), val],
                    });
                    (e.target as HTMLInputElement).value = "";
                  }
                }
              }}
            />
            <div className="flex flex-wrap gap-1.5">
              {(formData.tags || []).map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-muted/60"
                >
                  {tag}
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        tags: (formData.tags || []).filter((_, j) => j !== i),
                      })
                    }
                    className="text-red-400/50 hover:text-red-400"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </section>

          {/* ── Links ── */}
          <section className="lab-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="analytical-label text-muted/60">Related Links</h2>
              <button
                onClick={() =>
                  setFormData({
                    ...formData,
                    links: [
                      ...(formData.links || []),
                      { label: "", href: "" },
                    ],
                  })
                }
                className="btn-ghost text-xs"
              >
                + Add
              </button>
            </div>
            {(formData.links || []).map((link, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) => {
                    const updated = [...(formData.links || [])];
                    updated[i] = { ...updated[i], label: e.target.value };
                    setFormData({ ...formData, links: updated });
                  }}
                  className="admin-input flex-1"
                  placeholder="Label"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) => {
                    const updated = [...(formData.links || [])];
                    updated[i] = { ...updated[i], href: e.target.value };
                    setFormData({ ...formData, links: updated });
                  }}
                  className="admin-input flex-1"
                  placeholder="/path or URL"
                />
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      links: (formData.links || []).filter((_, j) => j !== i),
                    })
                  }
                  className="text-red-400/50 hover:text-red-400 text-xs px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </section>

          {/* ── Media ── */}
          <section className="lab-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="analytical-label text-muted/60">
                Media ({formData.media?.length || 0})
              </h2>
              <label className="btn-ghost text-xs cursor-pointer">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) =>
                    e.target.files && uploadMedia(e.target.files)
                  }
                />
              </label>
            </div>

            {formData.media?.some((m) => !m.alt?.trim()) && (
              <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400 text-[10px] font-mono">
                ⚠ Some media items are missing alt text
              </div>
            )}

            <div className="space-y-3">
              {(formData.media || []).map((m, i) => (
                <div
                  key={m.id}
                  className="bg-background-layer1 border border-white/5 rounded p-3"
                >
                  <div className="flex items-start gap-3">
                    {/* Reorder */}
                    <div className="flex flex-col gap-1 pt-2">
                      <button
                        onClick={() => moveMedia(m.id, "up")}
                        disabled={i === 0}
                        className="text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => moveMedia(m.id, "down")}
                        disabled={i === (formData.media?.length ?? 1) - 1}
                        className="text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none"
                      >
                        ▼
                      </button>
                    </div>

                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.src}
                        alt={m.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Fields */}
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={m.alt}
                        onChange={(e) =>
                          updateMedia(m.id, "alt", e.target.value)
                        }
                        className="admin-input text-xs"
                        placeholder="Alt text (required)"
                      />
                      {formErrors[`media-${i}-alt`] && (
                        <p className="text-red-400 text-[10px]">
                          {formErrors[`media-${i}-alt`]}
                        </p>
                      )}
                      <input
                        type="text"
                        value={m.caption || ""}
                        onChange={(e) =>
                          updateMedia(m.id, "caption", e.target.value)
                        }
                        className="admin-input text-xs"
                        placeholder="Caption (optional)"
                      />
                      <div className="flex items-center gap-2">
                        <label className="text-[9px] text-muted/40 font-mono">
                          Depth
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={m.depth}
                          onChange={(e) =>
                            updateMedia(
                              m.id,
                              "depth",
                              parseFloat(e.target.value),
                            )
                          }
                          className="flex-1 accent-accent"
                        />
                        <span className="text-[9px] text-muted/40 font-mono w-8">
                          {m.depth}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeMedia(m.id)}
                      className="text-red-400/50 hover:text-red-400 text-xs p-1"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* ─── Shared sub-components ─── */

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
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-muted/50 mb-1">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-[10px] mt-1">{error}</p>}
    </div>
  );
}

function ErrorBanner({
  error,
  onDismiss,
}: {
  error: string | null;
  onDismiss: () => void;
}) {
  if (!error) return null;
  return (
    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm flex items-center justify-between">
      <span>{error}</span>
      <button onClick={onDismiss} className="text-red-300 ml-2">
        ✕
      </button>
    </div>
  );
}
