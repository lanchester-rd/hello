module.exports = [
"[project]/hello/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hello/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hello/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: "AIzaSyAfm0KB_V9ojUmwyspJ6eSwkjNztDzdOeI",
    authDomain: "lanchester-rd.firebaseapp.com",
    projectId: "lanchester-rd",
    storageBucket: "lanchester-rd.firebasestorage.app",
    messagingSenderId: "99050204591",
    appId: "1:99050204591:web:bc68d1f7812351eed7535a"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
}),
"[project]/hello/app/admin/timeline/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hello/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/lib/firebase.ts [app-ssr] (ecmascript)");
"use client";
;
;
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
    const [firebaseUser, setFirebaseUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("list");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    /* ─── Firebase auth listener ─── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onIdTokenChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], async (user)=>{
            setFirebaseUser(user);
            if (user) {
                const token = await user.getIdToken();
                setToken(token);
                // Verify admin access via API
                try {
                    const res = await fetch("/api/timeline/events?admin=true", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (res.ok) {
                        setAuthed(true);
                        setEvents(await res.json());
                        setLoading(false);
                    } else {
                        setAuthed(false);
                        setError("Your account does not have admin access.");
                    }
                } catch  {
                    setAuthed(false);
                }
            } else {
                setToken(null);
                setAuthed(false);
            }
            setAuthChecked(true);
        });
        return ()=>unsub();
    }, []);
    const handleGoogleSignIn = async ()=>{
        setError(null);
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], provider);
        } catch (err) {
            const code = typeof err === "object" && err && "code" in err ? String(err.code) : "";
            if (code === "auth/popup-blocked" || code === "auth/popup-closed-by-user") {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithRedirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], provider);
                return;
            }
            setError("Sign-in failed. Please try again.");
        }
    };
    const handleSignOut = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].signOut();
        setAuthed(false);
        setEvents([]);
        setView("list");
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
                lineNumber: 366,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 365,
            columnNumber: 12
        }, this);
    }
    if (!authed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-background min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lab-card w-full max-w-sm space-y-6 p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold tracking-tightest uppercase",
                        children: "Timeline Admin"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted text-sm",
                        children: "Sign in with your authorised Google account to access the editor."
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 378,
                        columnNumber: 21
                    }, this),
                    firebaseUser && !authed && authChecked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted/60 text-xs",
                        children: [
                            "Signed in as ",
                            firebaseUser.email,
                            " — not an admin."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 379,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGoogleSignIn,
                        className: "btn-primary w-full",
                        children: "Sign in with Google"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this),
                    firebaseUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSignOut,
                        className: "btn-ghost text-xs w-full",
                        children: "Sign out"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 385,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 371,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 370,
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
                                        lineNumber: 400,
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
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                lineNumber: 399,
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
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleImport,
                                        className: "btn-ghost text-xs",
                                        children: "Import"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/admin/timeline/preview",
                                        className: "btn-ghost text-xs",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startCreate,
                                        className: "btn-primary text-xs",
                                        children: "+ New Event"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSignOut,
                                        className: "btn-ghost text-xs text-muted/40 hover:text-muted",
                                        title: firebaseUser?.email || "Sign out",
                                        children: "Sign out"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBanner, {
                        error: error,
                        onDismiss: ()=>setError(null)
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted text-sm animate-pulse",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 426,
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
                                                lineNumber: 430,
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
                                                lineNumber: 433,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 429,
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
                                                        lineNumber: 441,
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
                                                        lineNumber: 444,
                                                        columnNumber: 23
                                                    }, this),
                                                    evt.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] text-accent/50",
                                                        children: "★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 440,
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
                                                        lineNumber: 453,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: evt.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 23
                                                    }, this),
                                                    evt.era && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: ERAS.find((e)=>e.id === evt.era)?.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 35
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            evt.media?.length || 0,
                                                            " media"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 439,
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
                                            lineNumber: 467,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, evt.id, true, {
                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                lineNumber: 427,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                        lineNumber: 426,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 396,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 395,
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
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold tracking-tightest uppercase",
                                    children: selectedId ? "Edit Event" : "New Event"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: saveEvent,
                            disabled: saving,
                            className: "btn-primary text-xs",
                            children: saving ? "Saving…" : "Save"
                        }, void 0, false, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBanner, {
                    error: error,
                    onDismiss: ()=>setError(null)
                }, void 0, false, {
                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                    lineNumber: 499,
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
                                    lineNumber: 504,
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
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 508,
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
                                                lineNumber: 515,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 507,
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
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 523,
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
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 529,
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
                                                        lineNumber: 540,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "published",
                                                        children: "Published"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 535,
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
                                                        lineNumber: 549,
                                                        columnNumber: 36
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 522,
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
                                                    lineNumber: 558,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                    id: "categories",
                                                    children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c
                                                        }, c, false, {
                                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 40
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 557,
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
                                                        lineNumber: 571,
                                                        columnNumber: 19
                                                    }, this),
                                                    ERAS.map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: era.id,
                                                            children: era.label
                                                        }, era.id, false, {
                                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 36
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 566,
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
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 556,
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
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 586,
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
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted",
                                                        children: "Mark as featured event"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 503,
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
                                    lineNumber: 608,
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
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 609,
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
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 615,
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
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 607,
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
                                            lineNumber: 632,
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
                                            lineNumber: 633,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 631,
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
                                                lineNumber: 641,
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
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 58
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 630,
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
                                    lineNumber: 660,
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
                                    lineNumber: 661,
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
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 675,
                                            columnNumber: 54
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 659,
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
                                            lineNumber: 690,
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
                                            lineNumber: 691,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 689,
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
                                                lineNumber: 702,
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
                                                lineNumber: 713,
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
                                                lineNumber: 724,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                        lineNumber: 701,
                                        columnNumber: 54
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 688,
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
                                            lineNumber: 736,
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
                                                    lineNumber: 741,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 739,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this),
                                formData.media?.some((m)=>!m.alt?.trim()) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400 text-[10px] font-mono",
                                    children: "⚠ Some media items are missing alt text"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 745,
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
                                                                lineNumber: 754,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>moveMedia(m.id, "down"),
                                                                disabled: i === (formData.media?.length ?? 1) - 1,
                                                                className: "text-muted/40 hover:text-muted disabled:opacity-20 text-xs leading-none",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 757,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 753,
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
                                                            lineNumber: 765,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 763,
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
                                                                lineNumber: 770,
                                                                columnNumber: 23
                                                            }, this),
                                                            formErrors[`media-${i}-alt`] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-400 text-[10px]",
                                                                children: formErrors[`media-${i}-alt`]
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 771,
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
                                                                lineNumber: 774,
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
                                                                        lineNumber: 776,
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
                                                                        lineNumber: 779,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] text-muted/40 font-mono w-8",
                                                                        children: m.depth
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                        lineNumber: 780,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 769,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeMedia(m.id),
                                                        className: "text-red-400/50 hover:text-red-400 text-xs p-1",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                                lineNumber: 751,
                                                columnNumber: 19
                                            }, this)
                                        }, m.id, false, {
                                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                            lineNumber: 750,
                                            columnNumber: 53
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                                    lineNumber: 749,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/admin/timeline/page.tsx",
                            lineNumber: 734,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/admin/timeline/page.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hello/app/admin/timeline/page.tsx",
            lineNumber: 480,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hello/app/admin/timeline/page.tsx",
        lineNumber: 479,
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
                        lineNumber: 810,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 808,
                columnNumber: 7
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-400 text-[10px] mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 813,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/admin/timeline/page.tsx",
        lineNumber: 807,
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
                lineNumber: 822,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDismiss,
                className: "text-red-300 ml-2",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/hello/app/admin/timeline/page.tsx",
                lineNumber: 823,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/admin/timeline/page.tsx",
        lineNumber: 821,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=hello_dc10b85b._.js.map