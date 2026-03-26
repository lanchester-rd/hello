module.exports = [
"[project]/hello/app/admin/timeline/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/* ─── Local types (mirrors StoredEvent shape without importing server code) ─── */ /* ─── Reference data ─── */ const ERAS = [
    {
        id: "school",
        label: "School Years"
    },
    {
        id: "formation",
        label: "Early Formation"
    },
    {
        id: "university",
        label: "University"
    },
    {
        id: "career",
        label: "Early Career"
    },
    {
        id: "founder",
        label: "Founder Era"
    },
    {
        id: "leadership",
        label: "Product Leadership"
    },
    {
        id: "venture",
        label: "Venture Building"
    }
];
const CATEGORIES = [
    "Education",
    "Freelance",
    "Career",
    "Venture",
    "Leadership"
];
const THEMES = [
    "dark",
    "light",
    "accent"
];
/* ─── Helper: fetch with Firebase Bearer token ─── */ let _cachedToken = null;
function setToken(t) {
    _cachedToken = t;
}
function adminFetch(path, options) {
    return fetch(path, {
        ...options,
        headers: {
            ...options?.headers || {},
            ..._cachedToken ? {
                Authorization: `Bearer ${_cachedToken}`
            } : {}
        }
    });
}
function TimelineAdminPage() {
    /* ─── State ─── */ const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [keyInput, setKeyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("list");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    /* ─── Auth check ─── */ const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await adminFetch("/api/timeline/events?admin=true");
            if (res.ok) {
                setAuthed(true);
                setEvents(await res.json());
                setLoading(false);
                return true;
            }
            return false;
        } catch  {
            return false;
        } finally{
            setAuthChecked(true);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkAuth();
    }, [
        checkAuth
    ]);
    const handleLogin = async (e)=>{
        e.preventDefault();
        sessionStorage.setItem("timeline-admin-key", keyInput);
        const ok = await checkAuth();
        if (!ok) {
            setError("Invalid admin key");
            sessionStorage.removeItem("timeline-admin-key");
        } else {
            setError(null);
        }
    };
    /* ─── CRUD helpers ─── */ const loadEvents = async ()=>{
        setLoading(true);
        try {
            const res = await adminFetch("/api/timeline/events?admin=true");
            if (res.ok) setEvents(await res.json());
        } finally{
            setLoading(false);
        }
    };
    const saveEvent = async ()=>{
        const errors = {};
        if (!formData.title?.trim()) errors.title = "Title is required";
        if (!formData.start?.trim()) errors.start = "Start date is required";
        if (!formData.summary?.trim()) errors.summary = "Summary is required";
        formData.media?.forEach((m, i)=>{
            if (!m.alt?.trim()) errors[`media-${i}-alt`] = `Media ${i + 1} needs alt text`;
        });
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return;
        setSaving(true);
        setError(null);
        try {
            const payload = {
                ...formData
            };
            delete payload.images;
            const res = selectedId ? await adminFetch(`/api/timeline/events/${selectedId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }) : await adminFetch("/api/timeline/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const err = await res.json().catch(()=>null);
                throw new Error(err?.error || "Save failed");
            }
            await loadEvents();
            setView("list");
            setSelectedId(null);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Save failed");
        } finally{
            setSaving(false);
        }
    };
    const deleteEventById = async (id)=>{
        if (!confirm("Delete this event? This cannot be undone.")) return;
        try {
            await adminFetch(`/api/timeline/events/${id}`, {
                method: "DELETE"
            });
            await loadEvents();
            if (selectedId === id) {
                setSelectedId(null);
                setView("list");
            }
        } catch (e) {
            setError(e instanceof Error ? e.message : "Delete failed");
        }
    };
    const toggleStatus = async (id, current)=>{
        const newStatus = current === "published" ? "draft" : "published";
        await adminFetch(`/api/timeline/events/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: newStatus
            })
        });
        await loadEvents();
    };
    const moveEvent = async (id, direction)=>{
        const idx = events.findIndex((e)=>e.id === id);
        if (idx < 0) return;
        const newIdx = direction === "up" ? idx - 1 : idx + 1;
        if (newIdx < 0 || newIdx >= events.length) return;
        const reordered = [
            ...events
        ];
        [reordered[idx], reordered[newIdx]] = [
            reordered[newIdx],
            reordered[idx]
        ];
        await adminFetch("/api/timeline/events/reorder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderedIds: reordered.map((e)=>e.id)
            })
        });
        await loadEvents();
    };
    /* ─── Form helpers ─── */ const startEdit = (id)=>{
        const evt = events.find((e)=>e.id === id);
        if (!evt) return;
        setFormData({
            ...evt
        });
        setSelectedId(id);
        setFormErrors({});
        setView("edit");
    };
    const startCreate = ()=>{
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
            links: []
        });
        setSelectedId(null);
        setFormErrors({});
        setView("create");
    };
    /* ─── Media helpers ─── */ const uploadMedia = async (files)=>{
        for (const file of Array.from(files)){
            const fd = new FormData();
            fd.append("file", file);
            const res = await adminFetch("/api/timeline/media/upload", {
                method: "POST",
                body: fd
            });
            if (res.ok) {
                const { src } = await res.json();
                const newMedia = {
                    id: crypto.randomUUID(),
                    type: "image",
                    src,
                    alt: file.name.replace(/\.[^.]+$/, ""),
                    depth: 0.3
                };
                setFormData((prev)=>({
                        ...prev,
                        media: [
                            ...prev.media || [],
                            newMedia
                        ]
                    }));
            }
        }
    };
    const removeMedia = (mediaId)=>{
        setFormData((prev)=>({
                ...prev,
                media: (prev.media || []).filter((m)=>m.id !== mediaId)
            }));
    };
    const updateMedia = (mediaId, field, value)=>{
        setFormData((prev)=>({
                ...prev,
                media: (prev.media || []).map((m)=>m.id === mediaId ? {
                        ...m,
                        [field]: value
                    } : m)
            }));
    };
    const moveMedia = (mediaId, direction)=>{
        const media = [
            ...formData.media || []
        ];
        const idx = media.findIndex((m)=>m.id === mediaId);
        if (idx < 0) return;
        const newIdx = direction === "up" ? idx - 1 : idx + 1;
        if (newIdx < 0 || newIdx >= media.length) return;
        [media[idx], media[newIdx]] = [
            media[newIdx],
            media[idx]
        ];
        setFormData({
            ...formData,
            media
        });
    };
    /* ─── Export / Import ─── */ const handleExport = async ()=>{
        const res = await adminFetch("/api/timeline/export");
        if (!res.ok) return;
        const data = await res.json();
        const blob = new Blob([
            JSON.stringify(data, null, 2)
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `timeline-export-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const handleImport = ()=>{
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = async ()=>{
            const file = input.files?.[0];
            if (!file) return;
            const text = await file.text();
            try {
                const data = JSON.parse(text);
                if (!confirm(`Import ${Array.isArray(data) ? data.length : 0} events? This replaces all existing data.`)) return;
                const res = await adminFetch("/api/timeline/import", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: text
                });
                if (res.ok) {
                    await loadEvents();
                    setView("list");
                }
            } catch  {
                setError("Invalid JSON file");
            }
        };
        input.click();
    };
    /* ═══════════════  Render: Auth gate  ═══════════════ */ if (!authChecked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-background min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted text-sm animate-pulse",
                children: "Connecting…"
            }, void 0, false, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 341,
            columnNumber: 12
        }, this);
    }
    if (!authed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-background min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleLogin,
                className: "lab-card w-full max-w-sm space-y-6 p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold tracking-tightest uppercase",
                        children: "Timeline Admin"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted text-sm",
                        children: "Enter the admin key to access the timeline editor."
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 354,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: keyInput,
                        onChange: (e)=>setKeyInput(e.target.value),
                        placeholder: "Admin key",
                        className: "admin-input",
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn-primary w-full",
                        children: "Enter"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 346,
            columnNumber: 12
        }, this);
    }
    /* ═══════════════  Render: Event list  ═══════════════ */ if (view === "list") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-background min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold tracking-tightest uppercase",
                                        children: "Timeline Editor"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted text-sm mt-1",
                                        children: [
                                            events.length,
                                            " events"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExport,
                                        className: "btn-ghost text-xs",
                                        children: "Export"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleImport,
                                        className: "btn-ghost text-xs",
                                        children: "Import"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/admin/timeline/preview",
                                        className: "btn-ghost text-xs",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startCreate,
                                        className: "btn-primary text-xs",
                                        children: "+ New Event"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBanner, {
                        error: error,
                        onDismiss: ()=>setError(null)
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted text-sm animate-pulse",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 394,
                        columnNumber: 22
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: events.map((evt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lab-card flex items-center gap-4 p-4 cursor-pointer hover:border-accent/40 transition-colors",
                                onClick: ()=>startEdit(evt.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>moveEvent(evt.id, "up"),
                                                disabled: idx === 0,
                                                className: "text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none",
                                                "aria-label": "Move up",
                                                children: "▲"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>moveEvent(evt.id, "down"),
                                                disabled: idx === events.length - 1,
                                                className: "text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none",
                                                "aria-label": "Move down",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-sm truncate",
                                                        children: evt.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            toggleStatus(evt.id, evt.status);
                                                        },
                                                        className: `px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest cursor-pointer ${evt.status === "published" ? "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20"}`,
                                                        children: evt.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 23
                                                    }, this),
                                                    evt.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-accent/50",
                                                        children: "★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-[10px] text-muted/50 font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            evt.start,
                                                            evt.end ? ` — ${evt.end}` : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: evt.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 23
                                                    }, this),
                                                    evt.era && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: ERAS.find((e)=>e.id === evt.era)?.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 35
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            evt.media?.length || 0,
                                                            " media"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>deleteEventById(evt.id),
                                            className: "text-red-400/50 hover:text-red-400 text-xs px-2 py-1",
                                            "aria-label": "Delete event",
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, evt.id, true, {
                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                lineNumber: 395,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 394,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 367,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 366,
            columnNumber: 12
        }, this);
    }
    /* ═══════════════  Render: Edit / Create form  ═══════════════ */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setView("list");
                                        setSelectedId(null);
                                    },
                                    className: "btn-ghost text-xs",
                                    children: "← Back"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold tracking-tightest uppercase",
                                    children: selectedId ? "Edit Event" : "New Event"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: saveEvent,
                            disabled: saving,
                            className: "btn-primary text-xs",
                            children: saving ? "Saving…" : "Save"
                        }, void 0, false, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBanner, {
                    error: error,
                    onDismiss: ()=>setError(null)
                }, void 0, false, {
                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lab-card p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "analytical-label text-muted/60",
                                    children: "Core Information"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Title",
                                            required: true,
                                            error: formErrors.title,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.title || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        title: e.target.value
                                                    }),
                                                className: "admin-input",
                                                placeholder: "Event title"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Subtitle",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.subtitle || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        subtitle: e.target.value
                                                    }),
                                                className: "admin-input",
                                                placeholder: "Short subtitle"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Start",
                                            required: true,
                                            error: formErrors.start,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.start || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        start: e.target.value
                                                    }),
                                                className: "admin-input",
                                                placeholder: "2016"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "End",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.end || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        end: e.target.value
                                                    }),
                                                className: "admin-input",
                                                placeholder: "2019 or blank"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Status",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.status || "draft",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        status: e.target.value
                                                    }),
                                                className: "admin-input",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "draft",
                                                        children: "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "published",
                                                        children: "Published"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Theme",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.theme || "dark",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        theme: e.target.value
                                                    }),
                                                className: "admin-input",
                                                children: THEMES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t,
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 36
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Category",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.category || "",
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            category: e.target.value
                                                        }),
                                                    className: "admin-input",
                                                    list: "categories",
                                                    placeholder: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                    id: "categories",
                                                    children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c
                                                        }, c, false, {
                                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 40
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Era",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.era || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        era: e.target.value
                                                    }),
                                                className: "admin-input",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "— None —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this),
                                                    ERAS.map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: era.id,
                                                            children: era.label
                                                        }, era.id, false, {
                                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 36
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Location",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.location || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        location: e.target.value
                                                    }),
                                                className: "admin-input",
                                                placeholder: "London, UK"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Milestone Label",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.milestone || "",
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        milestone: e.target.value
                                                    }),
                                                className: "admin-input",
                                                placeholder: "e.g. Founded"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Featured",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 h-full pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: formData.featured || false,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                featured: e.target.checked
                                                            }),
                                                        className: "accent-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted",
                                                        children: "Mark as featured event"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lab-card p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "analytical-label text-muted/60",
                                    children: "Content"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Summary",
                                    required: true,
                                    error: formErrors.summary,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: formData.summary || "",
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                summary: e.target.value
                                            }),
                                        className: "admin-input min-h-[80px]",
                                        placeholder: "Brief summary of this event"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Body",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: formData.body || "",
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                body: e.target.value
                                            }),
                                        className: "admin-input min-h-[120px]",
                                        placeholder: "Extended narrative (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 584,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Quote",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.quote || "",
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                quote: e.target.value
                                            }),
                                        className: "admin-input",
                                        placeholder: "Notable quote or takeaway"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lab-card p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "analytical-label text-muted/60",
                                            children: "Achievements"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFormData({
                                                    ...formData,
                                                    achievements: [
                                                        ...formData.achievements || [],
                                                        ""
                                                    ]
                                                }),
                                            className: "btn-ghost text-xs",
                                            children: "+ Add"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this),
                                (formData.achievements || []).map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: a,
                                                onChange: (e)=>{
                                                    const updated = [
                                                        ...formData.achievements || []
                                                    ];
                                                    updated[i] = e.target.value;
                                                    setFormData({
                                                        ...formData,
                                                        achievements: updated
                                                    });
                                                },
                                                className: "admin-input flex-1",
                                                placeholder: "Achievement"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFormData({
                                                        ...formData,
                                                        achievements: (formData.achievements || []).filter((_, j)=>j !== i)
                                                    }),
                                                className: "text-red-400/50 hover:text-red-400 text-xs px-2",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 608,
                                        columnNumber: 58
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 598,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lab-card p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "analytical-label text-muted/60",
                                    children: "Tags"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Type a tag and press Enter",
                                    className: "admin-input",
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" || e.key === ",") {
                                            e.preventDefault();
                                            const val = e.target.value.trim().replace(/,$/, "");
                                            if (val) {
                                                setFormData({
                                                    ...formData,
                                                    tags: [
                                                        ...formData.tags || [],
                                                        val
                                                    ]
                                                });
                                                e.target.value = "";
                                            }
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: (formData.tags || []).map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-muted/60",
                                            children: [
                                                tag,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFormData({
                                                            ...formData,
                                                            tags: (formData.tags || []).filter((_, j)=>j !== i)
                                                        }),
                                                    className: "text-red-400/50 hover:text-red-400",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 54
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lab-card p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "analytical-label text-muted/60",
                                            children: "Related Links"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFormData({
                                                    ...formData,
                                                    links: [
                                                        ...formData.links || [],
                                                        {
                                                            label: "",
                                                            href: ""
                                                        }
                                                    ]
                                                }),
                                            className: "btn-ghost text-xs",
                                            children: "+ Add"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 657,
                                    columnNumber: 13
                                }, this),
                                (formData.links || []).map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: link.label,
                                                onChange: (e)=>{
                                                    const updated = [
                                                        ...formData.links || []
                                                    ];
                                                    updated[i] = {
                                                        ...updated[i],
                                                        label: e.target.value
                                                    };
                                                    setFormData({
                                                        ...formData,
                                                        links: updated
                                                    });
                                                },
                                                className: "admin-input flex-1",
                                                placeholder: "Label"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 670,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: link.href,
                                                onChange: (e)=>{
                                                    const updated = [
                                                        ...formData.links || []
                                                    ];
                                                    updated[i] = {
                                                        ...updated[i],
                                                        href: e.target.value
                                                    };
                                                    setFormData({
                                                        ...formData,
                                                        links: updated
                                                    });
                                                },
                                                className: "admin-input flex-1",
                                                placeholder: "/path or URL"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFormData({
                                                        ...formData,
                                                        links: (formData.links || []).filter((_, j)=>j !== i)
                                                    }),
                                                className: "text-red-400/50 hover:text-red-400 text-xs px-2",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 692,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 669,
                                        columnNumber: 54
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "lab-card p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "analytical-label text-muted/60",
                                            children: [
                                                "Media (",
                                                formData.media?.length || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "btn-ghost text-xs cursor-pointer",
                                            children: [
                                                "Upload",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    multiple: true,
                                                    className: "hidden",
                                                    onChange: (e)=>e.target.files && uploadMedia(e.target.files)
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this),
                                formData.media?.some((m)=>!m.alt?.trim()) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400 text-[10px] font-mono",
                                    children: "⚠ Some media items are missing alt text"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 59
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: (formData.media || []).map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-background-layer1 border border-white/5 rounded p-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>moveMedia(m.id, "up"),
                                                                disabled: i === 0,
                                                                className: "text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none",
                                                                children: "▲"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 722,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>moveMedia(m.id, "down"),
                                                                disabled: i === (formData.media?.length ?? 1) - 1,
                                                                className: "text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: m.src,
                                                            alt: m.alt,
                                                            className: "w-full h-full object-cover",
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: m.alt,
                                                                onChange: (e)=>updateMedia(m.id, "alt", e.target.value),
                                                                className: "admin-input text-xs",
                                                                placeholder: "Alt text (required)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 23
                                                            }, this),
                                                            formErrors[`media-${i}-alt`] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-400 text-[10px]",
                                                                children: formErrors[`media-${i}-alt`]
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 56
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: m.caption || "",
                                                                onChange: (e)=>updateMedia(m.id, "caption", e.target.value),
                                                                className: "admin-input text-xs",
                                                                placeholder: "Caption (optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[9px] text-muted/40 font-mono",
                                                                        children: "Depth"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                        lineNumber: 744,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "1",
                                                                        step: "0.05",
                                                                        value: m.depth,
                                                                        onChange: (e)=>updateMedia(m.id, "depth", parseFloat(e.target.value)),
                                                                        className: "flex-1 accent-accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                        lineNumber: 747,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] text-muted/40 font-mono w-8",
                                                                        children: m.depth
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 743,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeMedia(m.id),
                                                        className: "text-red-400/50 hover:text-red-400 text-xs p-1",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 719,
                                                columnNumber: 19
                                            }, this)
                                        }, m.id, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 718,
                                            columnNumber: 53
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 702,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 448,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hello/app/admin/timeline/page.tsx",
        lineNumber: 447,
        columnNumber: 10
    }, this);
}
/* ─── Shared sub-components ─── */ function Field({ label, required, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[10px] font-mono uppercase tracking-widest text-muted/50 mb-1",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-accent ml-0.5",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 778,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-400 text-[10px] mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 781,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/admin/timeline/page.tsx",
        lineNumber: 775,
        columnNumber: 10
    }, this);
}
function ErrorBanner({ error, onDismiss }) {
    if (!error) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: error
            }, void 0, false, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 790,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDismiss,
                className: "text-red-300 ml-2",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/admin/timeline/page.tsx",
        lineNumber: 789,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=hello_app_admin_timeline_page_tsx_6bd57d9d._.js.map