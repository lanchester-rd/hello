(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hello/components/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ label, title, description, align = 'left' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-4 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-6 bg-accent/40"
                    }, void 0, false, {
                        fileName: "[project]/hello/components/SectionHeader.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "analytical-label text-accent",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/hello/components/SectionHeader.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/components/SectionHeader.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest uppercase leading-none",
                children: title
            }, void 0, false, {
                fileName: "[project]/hello/components/SectionHeader.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted text-lg leading-relaxed max-w-2xl font-medium",
                children: description
            }, void 0, false, {
                fileName: "[project]/hello/components/SectionHeader.tsx",
                lineNumber: 15,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/components/SectionHeader.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/components/timeline/TimelineBackgroundMedia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineBackgroundMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimelineBackgroundMedia({ images, progress }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-background"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            images.map((img, i)=>{
                const y = reducedMotion ? 0 : (progress - 0.5) * img.depth * 120;
                const scale = reducedMotion ? 1 : 1 + img.depth * 0.08;
                const opacity = 0.15 + img.depth * 0.15;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0",
                    style: {
                        zIndex: i
                    },
                    animate: {
                        y,
                        scale
                    },
                    transition: {
                        type: "tween",
                        ease: "linear",
                        duration: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-no-repeat",
                        style: {
                            backgroundImage: `url(${img.src})`,
                            backgroundPosition: img.position ?? "center center",
                            opacity,
                            filter: "blur(2px) saturate(0.6)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                }, img.id, false, {
                    fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                    lineNumber: 17,
                    columnNumber: 14
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-10"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-10"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_s(TimelineBackgroundMedia, "C3SzXdDjOTeVfafZ73W5HtZXaiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = TimelineBackgroundMedia;
var _c;
__turbopack_context__.k.register(_c, "TimelineBackgroundMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/components/timeline/TimelineEventCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineEventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimelineEventCard({ event, isActive }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const variants = reducedMotion ? {
        active: {
            opacity: 1
        },
        inactive: {
            opacity: 0.4
        }
    } : {
        active: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
        },
        inactive: {
            opacity: 0.3,
            y: 12,
            filter: "blur(2px)"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        className: "flex-shrink-0 w-[85vw] md:w-[520px] lg:w-[560px] px-4 md:px-0",
        animate: isActive ? "active" : "inactive",
        variants: variants,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
        "aria-current": isActive ? "step" : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "analytical-label text-accent",
                            children: event.category
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-px flex-1 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "coordinate-label",
                            children: event.location ?? ""
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-sm text-accent/70 tracking-widest",
                    children: [
                        event.start,
                        event.end ? ` — ${event.end}` : " — Present"
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest uppercase leading-none",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted text-base md:text-lg mt-2 font-medium",
                            children: event.subtitle
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted/90 leading-relaxed text-sm md:text-base max-w-lg",
                    children: event.summary
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                event.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted/70 text-sm leading-relaxed max-w-lg border-l-2 border-accent/20 pl-4",
                    children: event.body
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 64,
                    columnNumber: 24
                }, this),
                event.achievements && event.achievements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 pt-2",
                    children: event.achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-3 text-sm text-muted/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this),
                                a
                            ]
                        }, i, true, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 70,
                            columnNumber: 47
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 69,
                    columnNumber: 65
                }, this),
                event.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 pt-4 overflow-x-auto",
                    children: event.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 md:w-20 md:h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img.src,
                                alt: img.alt,
                                className: "w-full h-full object-cover opacity-60",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this)
                        }, img.id, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 78,
                            columnNumber: 38
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 77,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_s(TimelineEventCard, "C3SzXdDjOTeVfafZ73W5HtZXaiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = TimelineEventCard;
var _c;
__turbopack_context__.k.register(_c, "TimelineEventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/components/timeline/TimelineTrack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TimelineTrack({ events, activeIndex, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "relative flex items-center gap-0 select-none",
        "aria-label": "Timeline navigation",
        children: events.map((event, i)=>{
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-px w-8 md:w-16 transition-colors duration-300 ${isPast ? "bg-accent/50" : "bg-white/10"}`
                    }, void 0, false, {
                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                        lineNumber: 14,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelect(i),
                        className: `relative flex flex-col items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1`,
                        "aria-label": `${event.title} (${event.start}${event.end ? `–${event.end}` : "–Present"})`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `block rounded-full border-2 transition-all duration-300 ${isActive ? "w-4 h-4 border-accent bg-accent shadow-[0_0_12px_rgba(163,230,53,0.5)]" : isPast ? "w-2.5 h-2.5 border-accent/50 bg-accent/20" : "w-2.5 h-2.5 border-white/20 bg-transparent group-hover:border-white/40"}`
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-mono text-[9px] tracking-widest whitespace-nowrap transition-colors duration-300 ${isActive ? "text-accent" : "text-muted/50 group-hover:text-muted"}`,
                                children: event.start
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this)
                ]
            }, event.id, true, {
                fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                lineNumber: 12,
                columnNumber: 14
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = TimelineTrack;
var _c;
__turbopack_context__.k.register(_c, "TimelineTrack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/components/timeline/TimelineScroller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineScroller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineBackgroundMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/components/timeline/TimelineBackgroundMedia.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineEventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/components/timeline/TimelineEventCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineTrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/components/timeline/TimelineTrack.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TimelineScroller({ events }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    /* ── Desktop: map vertical scroll to horizontal position ── */ const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimelineScroller.useCallback[handleScroll]": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrollable = el.scrollHeight - window.innerHeight;
            if (scrollable <= 0) return;
            // How far through the pinned section we've scrolled (0 → 1)
            const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollable));
            setScrollProgress(rawProgress);
            // Derive active event
            const idx = Math.min(events.length - 1, Math.floor(rawProgress * events.length));
            setActiveIndex(idx);
        }
    }["TimelineScroller.useCallback[handleScroll]"], [
        events.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineScroller.useEffect": ()=>{
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll(); // init
            return ({
                "TimelineScroller.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["TimelineScroller.useEffect"];
        }
    }["TimelineScroller.useEffect"], [
        handleScroll
    ]);
    const goTo = (idx)=>{
        const el = containerRef.current;
        if (!el) return;
        const scrollable = el.scrollHeight - window.innerHeight;
        const target = el.offsetTop + idx / events.length * scrollable;
        window.scrollTo({
            top: target,
            behavior: reducedMotion ? "auto" : "smooth"
        });
    };
    const activeEvent = events[activeIndex];
    /* ── Local progress within the active event's window (for parallax) ── */ const eventWindow = 1 / events.length;
    const eventStart = activeIndex * eventWindow;
    const localProgress = eventWindow > 0 ? Math.max(0, Math.min(1, (scrollProgress - eventStart) / eventWindow)) : 0;
    /* ── Horizontal translate for the card strip on desktop ── */ const translateX = reducedMotion ? -(activeIndex / events.length) * 100 : -(scrollProgress * (events.length - 1) * 100) / events.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "hidden md:block relative",
                style: {
                    height: `${events.length * 100}vh`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 h-screen overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineBackgroundMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    images: activeEvent.images,
                                    progress: localProgress
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, activeEvent.id, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 h-full flex flex-col justify-between py-24 px-6 md:px-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineTrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        events: events,
                                        activeIndex: activeIndex,
                                        onSelect: goTo
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-12 transition-transform duration-700 ease-out will-change-transform",
                                        style: {
                                            transform: `translateX(calc(${translateX}vw + 10vw))`
                                        },
                                        children: events.map((evt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineEventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                event: evt,
                                                isActive: i === activeIndex
                                            }, evt.id, false, {
                                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 91,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-md mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px bg-white/10 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 h-full bg-accent/50 transition-all duration-300",
                                                style: {
                                                    width: `${scrollProgress * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "coordinate-label",
                                                    children: events[0].start
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "coordinate-label",
                                                    children: events[events.length - 1].end ?? "Present"
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden px-6 py-20 space-y-16",
                children: events.map((evt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "lab-card space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "analytical-label text-accent",
                                        children: evt.category
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px flex-1 bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[9px] text-muted/50",
                                        children: [
                                            evt.start,
                                            evt.end ? ` — ${evt.end}` : " — Present"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-tightest uppercase",
                                children: evt.title
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted text-sm",
                                children: evt.subtitle
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted/80 text-sm leading-relaxed",
                                children: evt.summary
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            evt.achievements && evt.achievements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1.5",
                                children: evt.achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-xs text-muted/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 w-1 h-1 rounded-full bg-accent/40 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this),
                                            a
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 132,
                                        columnNumber: 49
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 131,
                                columnNumber: 65
                            }, this),
                            evt.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 overflow-x-auto pt-2",
                                children: evt.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img.src,
                                            alt: img.alt,
                                            className: "w-full h-full object-cover opacity-50",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 142,
                                            columnNumber: 21
                                        }, this)
                                    }, img.id, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 140,
                                        columnNumber: 40
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 139,
                                columnNumber: 39
                            }, this)
                        ]
                    }, evt.id, true, {
                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                        lineNumber: 115,
                        columnNumber: 28
                    }, this))
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TimelineScroller, "lQOsW6YwZlaqzRXMfJO19v5aqUc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = TimelineScroller;
var _c;
__turbopack_context__.k.register(_c, "TimelineScroller");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/data/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ─── Timeline data model & seed data ─── */ /* ─── Seed data (placeholder images) ─── */ __turbopack_context__.s([
    "timelineEvents",
    ()=>timelineEvents
]);
const timelineEvents = [
    {
        id: "high-school",
        start: "2003",
        end: "2008",
        title: "Foundations",
        subtitle: "High School",
        category: "Education",
        location: "United Kingdom",
        summary: "Early curiosity in technology, design, and strategy. Built first websites and discovered a passion for problem-solving at the intersection of systems and people.",
        achievements: [
            "First freelance web project at 16",
            "Regional maths competition finalist"
        ],
        images: [
            {
                id: "hs-1",
                src: "/images/timeline/placeholder-1.jpg",
                alt: "Early workspace",
                depth: 0.2
            },
            {
                id: "hs-2",
                src: "/images/timeline/placeholder-2.jpg",
                alt: "School projects",
                depth: 0.5
            }
        ]
    },
    {
        id: "early-freelance",
        start: "2008",
        end: "2010",
        title: "Early Freelance",
        subtitle: "Lanchester Formation",
        category: "Freelance",
        location: "United Kingdom",
        summary: "Began building client projects across branding, web, and product design. Established early Lanchester identity and the philosophy of exploration before execution.",
        achievements: [
            "First paying product design client",
            "Built brand system from scratch"
        ],
        images: [
            {
                id: "ef-1",
                src: "/images/timeline/placeholder-3.jpg",
                alt: "Freelance studio setup",
                depth: 0.3
            },
            {
                id: "ef-2",
                src: "/images/timeline/placeholder-4.jpg",
                alt: "Early branding work",
                depth: 0.6
            }
        ]
    },
    {
        id: "university",
        start: "2010",
        end: "2013",
        title: "University",
        subtitle: "Academic Research",
        category: "Education",
        location: "United Kingdom",
        summary: "Formal study bridging design thinking and engineering principles. Developed the intellectual frameworks that now underpin Lanchester's methodology.",
        achievements: [
            "First-class dissertation on human-system interaction",
            "Founded student design collective"
        ],
        images: [
            {
                id: "uni-1",
                src: "/images/timeline/placeholder-5.jpg",
                alt: "University campus",
                depth: 0.15
            },
            {
                id: "uni-2",
                src: "/images/timeline/placeholder-6.jpg",
                alt: "Research notebooks",
                depth: 0.45
            },
            {
                id: "uni-3",
                src: "/images/timeline/placeholder-7.jpg",
                alt: "Design studio",
                depth: 0.7
            }
        ]
    },
    {
        id: "early-design",
        start: "2013",
        end: "2016",
        title: "Design Roles",
        subtitle: "Agency & In-House",
        category: "Career",
        location: "London, UK",
        summary: "Worked across agencies and product teams, sharpening skills in UX architecture, system design, and rapid prototyping within high-pressure environments.",
        achievements: [
            "Led redesign of enterprise SaaS platform",
            "Shipped 12+ products across verticals"
        ],
        images: [
            {
                id: "dr-1",
                src: "/images/timeline/placeholder-8.jpg",
                alt: "Agency workspace",
                depth: 0.25
            },
            {
                id: "dr-2",
                src: "/images/timeline/placeholder-9.jpg",
                alt: "Product whiteboard session",
                depth: 0.55
            }
        ]
    },
    {
        id: "lanchester-founder",
        start: "2016",
        end: "2019",
        title: "Lanchester R&D",
        subtitle: "Founder Phase",
        category: "Venture",
        location: "London / Remote",
        summary: "Established Lanchester R&D as a dedicated research and design laboratory. Built the doctrine of intellectual rigor, tactical execution, human calibration, and machine leverage.",
        achievements: [
            "Launched Lanchester R&D brand and methodology",
            "First consulting engagement with Fortune 500 client",
            "Developed the Four Pillars framework"
        ],
        images: [
            {
                id: "lf-1",
                src: "/images/timeline/placeholder-10.jpg",
                alt: "Lanchester lab setup",
                depth: 0.2
            },
            {
                id: "lf-2",
                src: "/images/timeline/placeholder-11.jpg",
                alt: "Strategy mapping session",
                depth: 0.5,
                position: "center top"
            }
        ]
    },
    {
        id: "product-leadership",
        start: "2019",
        end: "2022",
        title: "Product Leadership",
        subtitle: "Scale & Systems",
        category: "Leadership",
        location: "Global / Remote",
        summary: "Led product strategy across multiple ventures, applying Lanchester methodology at scale. Focused on resilient system architecture and measurable impact.",
        achievements: [
            "Directed product teams across 3 continents",
            "40% reduction in system friction for enterprise clients",
            "Published research on tactical product intelligence"
        ],
        images: [
            {
                id: "pl-1",
                src: "/images/timeline/placeholder-12.jpg",
                alt: "Product war room",
                depth: 0.35
            },
            {
                id: "pl-2",
                src: "/images/timeline/placeholder-13.jpg",
                alt: "Global team summit",
                depth: 0.6
            },
            {
                id: "pl-3",
                src: "/images/timeline/placeholder-14.jpg",
                alt: "System architecture diagram",
                depth: 0.15
            }
        ]
    },
    {
        id: "venture-building",
        start: "2022",
        title: "Venture Building",
        subtitle: "Current Chapter",
        category: "Venture",
        location: "Netherlands / Global",
        summary: "Building at the frontier — launching ventures, scaling Lanchester's research into live products, and operationalising AI-driven systems design.",
        body: "The current phase integrates everything learned: intellectual rigour shapes strategy, tactical execution ships product, human calibration ensures adoption, and machine leverage multiplies throughput.",
        achievements: [
            "Launched multiple live products from zero",
            "Established Lanchester Foundation",
            "Pioneered AI-augmented design workflow",
            "Active exploration across 4+ ventures"
        ],
        images: [
            {
                id: "vb-1",
                src: "/images/timeline/placeholder-15.jpg",
                alt: "Modern workspace",
                depth: 0.2
            },
            {
                id: "vb-2",
                src: "/images/timeline/placeholder-16.jpg",
                alt: "Product launch event",
                depth: 0.5
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/app/timeline/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelinePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/components/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/components/timeline/TimelineScroller.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/data/timeline.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function TimelinePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-32 md:py-40 px-6 md:px-12 border-b border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Autobiography",
                        title: "The Timeline.",
                        description: "A chronological map of the journey — from early exploration through design, research, and venture building."
                    }, void 0, false, {
                        fileName: "[project]/hello/app/timeline/page.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hello/app/timeline/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hello/app/timeline/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                events: __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineEvents"]
            }, void 0, false, {
                fileName: "[project]/hello/app/timeline/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/timeline/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = TimelinePage;
var _c;
__turbopack_context__.k.register(_c, "TimelinePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hello_391111cb._.js.map