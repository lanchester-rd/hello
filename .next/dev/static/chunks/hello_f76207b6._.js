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
                const y = reducedMotion ? 0 : (progress - 0.5) * img.depth * 160;
                const scale = reducedMotion ? 1 : 1 + img.depth * 0.12;
                const baseOpacity = img.opacityHint ?? 0.15 + img.depth * 0.15;
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
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-cover bg-no-repeat",
                            style: {
                                backgroundImage: `url(${img.src})`,
                                backgroundPosition: img.position ?? "center center",
                                opacity: baseOpacity,
                                filter: `blur(${Math.max(0, 3 - img.depth * 4)}px) saturate(0.5)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        img.overlayGradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 bg-gradient-to-r ${img.overlayGradient}`
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                            lineNumber: 34,
                            columnNumber: 37
                        }, this)
                    ]
                }, img.id, true, {
                    fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                    lineNumber: 17,
                    columnNumber: 14
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 z-10"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-10"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 41,
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
function TimelineEventCard({ event, isActive, onExpand }) {
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
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "analytical-label text-accent",
                            children: event.category
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        event.milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[8px] font-mono text-accent uppercase tracking-widest",
                            children: event.milestone
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 37,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-px flex-1 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "coordinate-label",
                            children: event.location ?? ""
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 35,
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
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest uppercase leading-none",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted text-base md:text-lg mt-2 font-medium",
                            children: event.subtitle
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                event.quote && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].blockquote, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.2,
                        duration: 0.4
                    },
                    className: "border-l-2 border-accent/30 pl-4 text-muted/60 italic text-sm leading-relaxed",
                    children: [
                        "“",
                        event.quote,
                        "”"
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 63,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted/90 leading-relaxed text-sm md:text-base max-w-lg",
                    children: event.summary
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                event.body && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.15,
                        duration: 0.35
                    },
                    className: "text-muted/70 text-sm leading-relaxed max-w-lg border-l-2 border-accent/20 pl-4",
                    children: event.body
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 80,
                    columnNumber: 36
                }, this),
                event.achievements && event.achievements.length > 0 && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 pt-1",
                    children: event.achievements.slice(0, 3).map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                            initial: {
                                opacity: 0,
                                x: -8
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: 0.1 + i * 0.06,
                                duration: 0.3
                            },
                            className: "flex items-start gap-3 text-sm text-muted/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this),
                                a
                            ]
                        }, i, true, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 95,
                            columnNumber: 59
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 94,
                    columnNumber: 77
                }, this),
                event.tags && event.tags.length > 0 && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1.5 pt-1",
                    children: event.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/40 uppercase tracking-widest",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 112,
                            columnNumber: 36
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 111,
                    columnNumber: 61
                }, this),
                event.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 pt-3 overflow-x-auto",
                    children: event.media.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 md:w-20 md:h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img.src,
                                        alt: img.alt,
                                        className: "w-full h-full object-cover opacity-60",
                                        loading: "lazy",
                                        style: img.position ? {
                                            objectPosition: img.position
                                        } : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this),
                                img.caption && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "mt-1 text-[8px] text-muted/30 font-mono max-w-[80px] truncate",
                                    children: img.caption
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 126,
                                    columnNumber: 45
                                }, this)
                            ]
                        }, img.id, true, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 119,
                            columnNumber: 37
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 118,
                    columnNumber: 36
                }, this),
                isActive && (event.body || event.achievements && event.achievements.length > 3 || event.links) && onExpand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onExpand,
                    className: "btn-ghost text-xs flex items-center gap-2 mt-2 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Read more"
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "group-hover:translate-x-0.5 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5 12h14M12 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 133,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hello/components/timeline/TimelineEventCard.tsx",
        lineNumber: 29,
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
function TimelineTrack({ events, eras, activeIndex, onSelect }) {
    /** Check whether this event starts a new era compared to the previous one */ const isEraStart = (i)=>{
        if (i === 0) return true;
        return events[i].era !== events[i - 1].era;
    };
    const eraLabel = (eraId)=>eras.find((e)=>e.id === eraId)?.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "relative flex items-center gap-0 select-none overflow-x-auto scrollbar-none",
        "aria-label": "Timeline navigation",
        children: events.map((event, i)=>{
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            const showEra = isEraStart(i);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-px transition-colors duration-300 ${showEra ? "w-10 md:w-20" : "w-8 md:w-16"} ${isPast ? "bg-accent/50" : "bg-white/10"}`
                    }, void 0, false, {
                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                        lineNumber: 22,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center",
                        children: [
                            showEra && event.era && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-mono uppercase tracking-widest text-muted/30",
                                children: eraLabel(event.era)
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                lineNumber: 26,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect(i),
                                className: "relative flex flex-col items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1",
                                "aria-label": `${event.title} (${event.start}${event.end ? `–${event.end}` : "–Present"})`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block rounded-full border-2 transition-all duration-300 ${isActive ? "w-4 h-4 border-accent bg-accent shadow-[0_0_12px_rgba(163,230,53,0.5)]" : isPast ? "w-2.5 h-2.5 border-accent/50 bg-accent/20" : "w-2.5 h-2.5 border-white/20 bg-transparent group-hover:border-white/40"}`
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono text-[9px] tracking-widest whitespace-nowrap transition-colors duration-300 ${isActive ? "text-accent" : "text-muted/50 group-hover:text-muted"}`,
                                        children: event.start
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this),
                                    event.milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7px] tracking-widest text-accent/40 uppercase whitespace-nowrap",
                                        children: event.milestone
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                        lineNumber: 40,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                ]
            }, event.id, true, {
                fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
                lineNumber: 20,
                columnNumber: 14
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/hello/components/timeline/TimelineTrack.tsx",
        lineNumber: 15,
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
    const stripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [stripOverflow, setStripOverflow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pinned, setPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    /* ── Measure how far the card strip overflows the viewport ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineScroller.useEffect": ()=>{
            const measure = {
                "TimelineScroller.useEffect.measure": ()=>{
                    const strip = stripRef.current;
                    if (!strip) return;
                    setStripOverflow(Math.max(0, strip.scrollWidth - window.innerWidth + 80));
                }
            }["TimelineScroller.useEffect.measure"];
            // Delay first measure to let cards render
            const id = requestAnimationFrame(measure);
            window.addEventListener("resize", measure);
            return ({
                "TimelineScroller.useEffect": ()=>{
                    cancelAnimationFrame(id);
                    window.removeEventListener("resize", measure);
                }
            })["TimelineScroller.useEffect"];
        }
    }["TimelineScroller.useEffect"], [
        events.length
    ]);
    /* ── Desktop: map vertical scroll → horizontal position ── */ const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimelineScroller.useCallback[handleScroll]": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrollRange = el.offsetHeight - window.innerHeight;
            if (scrollRange <= 0) return;
            // Is the container in-range for pinning?
            const entering = rect.top <= 0;
            const exiting = rect.bottom <= window.innerHeight;
            setPinned(entering && !exiting);
            // 0 → 1 progress through the tall container
            const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollRange));
            setScrollProgress(rawProgress);
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
            handleScroll();
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
        const scrollRange = el.offsetHeight - window.innerHeight;
        const target = el.offsetTop + idx / events.length * scrollRange;
        window.scrollTo({
            top: target,
            behavior: reducedMotion ? "auto" : "smooth"
        });
    };
    const activeEvent = events[activeIndex];
    /* ── Local progress within the active event window (parallax) ── */ const eventWindow = 1 / events.length;
    const eventStart = activeIndex * eventWindow;
    const localProgress = eventWindow > 0 ? Math.max(0, Math.min(1, (scrollProgress - eventStart) / eventWindow)) : 0;
    /* ── Pixel-based horizontal translation ── */ const translateX = -(scrollProgress * stripOverflow);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "hidden md:block relative",
                style: {
                    height: `${(events.length + 1) * 100}vh`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden md:block fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-background transition-opacity duration-300 ${pinned ? "opacity-100" : "opacity-0 pointer-events-none"}`,
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
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        }, activeEvent.id, false, {
                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                        lineNumber: 90,
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
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: stripRef,
                                    className: "flex gap-12 will-change-transform",
                                    style: {
                                        transform: `translateX(${translateX}px)`,
                                        transition: reducedMotion ? "none" : "transform 0.15s ease-out"
                                    },
                                    children: events.map((evt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineEventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            event: evt,
                                            isActive: i === activeIndex
                                        }, evt.id, false, {
                                            fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 117,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 112,
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
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 123,
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
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "coordinate-label",
                                                children: events[events.length - 1].end ?? "Present"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                lineNumber: 88,
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
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px flex-1 bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 144,
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
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-tightest uppercase",
                                children: evt.title
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted text-sm",
                                children: evt.subtitle
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted/80 text-sm leading-relaxed",
                                children: evt.summary
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 154,
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
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this),
                                            a
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 157,
                                        columnNumber: 49
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 156,
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
                                            lineNumber: 167,
                                            columnNumber: 21
                                        }, this)
                                    }, img.id, false, {
                                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 165,
                                        columnNumber: 40
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                                lineNumber: 164,
                                columnNumber: 39
                            }, this)
                        ]
                    }, evt.id, true, {
                        fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                        lineNumber: 140,
                        columnNumber: 28
                    }, this))
            }, void 0, false, {
                fileName: "[project]/hello/components/timeline/TimelineScroller.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TimelineScroller, "iCjoHvUksBt3ZccTfpud6twdCWI=", false, function() {
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

/* ─── Timeline data model & seed data  (V2) ─── */ /* ── Media ── */ /** @deprecated Use TimelineMedia — kept for V1 compat */ /* ── Links ── */ /* ── Eras ── */ /* ── Events ── */ /* ─── Eras ─── */ __turbopack_context__.s([
    "getEventsByEra",
    ()=>getEventsByEra,
    "timelineCategories",
    ()=>timelineCategories,
    "timelineEras",
    ()=>timelineEras,
    "timelineEvents",
    ()=>timelineEvents
]);
const timelineEras = [
    {
        id: "school",
        label: "School Years",
        startEventId: "high-school",
        endEventId: "high-school"
    },
    {
        id: "formation",
        label: "Early Formation",
        startEventId: "early-freelance",
        endEventId: "early-freelance"
    },
    {
        id: "university",
        label: "University",
        startEventId: "university",
        endEventId: "university"
    },
    {
        id: "career",
        label: "Early Career",
        startEventId: "early-design",
        endEventId: "early-design"
    },
    {
        id: "founder",
        label: "Founder Era",
        startEventId: "lanchester-founder",
        endEventId: "lanchester-founder"
    },
    {
        id: "leadership",
        label: "Product Leadership",
        startEventId: "product-leadership",
        endEventId: "product-leadership"
    },
    {
        id: "venture",
        label: "Venture Building",
        startEventId: "venture-building",
        endEventId: "current-chapter"
    }
];
/* ─── Helper: build an event with `images` alias ─── */ function evt(e) {
    return {
        ...e,
        images: e.media
    };
}
const timelineEvents = [
    evt({
        id: "high-school",
        start: "2003",
        end: "2008",
        title: "Foundations",
        subtitle: "High School",
        category: "Education",
        location: "United Kingdom",
        era: "school",
        theme: "dark",
        summary: "Early curiosity in technology, design, and strategy. Built first websites and discovered a passion for problem-solving at the intersection of systems and people.",
        body: "A formative period of obsessive tinkering — from hand-coded HTML pages to competitive maths — that planted the seeds of a generalist, systems-oriented mindset.",
        achievements: [
            "First freelance web project at 16",
            "Regional maths competition finalist"
        ],
        tags: [
            "web",
            "design",
            "maths"
        ],
        quote: "The best preparation for tomorrow is doing your best today.",
        media: [
            {
                id: "hs-1",
                type: "image",
                src: "/images/timeline/placeholder-1.jpg",
                alt: "Early workspace",
                depth: 0.2
            },
            {
                id: "hs-2",
                type: "image",
                src: "/images/timeline/placeholder-2.jpg",
                alt: "School projects",
                depth: 0.5,
                caption: "Early experiments in HTML & CSS"
            }
        ]
    }),
    evt({
        id: "early-freelance",
        start: "2008",
        end: "2010",
        title: "Early Freelance",
        subtitle: "Lanchester Formation",
        category: "Freelance",
        location: "United Kingdom",
        era: "formation",
        theme: "dark",
        featured: true,
        milestone: "Lanchester Born",
        summary: "Began building client projects across branding, web, and product design. Established early Lanchester identity and the philosophy of exploration before execution.",
        body: "Working directly with local businesses and start-ups taught the discipline of shipping under constraints. The Lanchester name was first used during this period — an homage to Frederick Lanchester's systems thinking.",
        achievements: [
            "First paying product design client",
            "Built brand system from scratch",
            "Named the practice 'Lanchester'"
        ],
        tags: [
            "branding",
            "freelance",
            "product-design"
        ],
        links: [
            {
                label: "About Lanchester R&D",
                href: "/about"
            }
        ],
        media: [
            {
                id: "ef-1",
                type: "image",
                src: "/images/timeline/placeholder-3.jpg",
                alt: "Freelance studio setup",
                depth: 0.3
            },
            {
                id: "ef-2",
                type: "image",
                src: "/images/timeline/placeholder-4.jpg",
                alt: "Early branding work",
                depth: 0.6,
                caption: "First brand identity system"
            }
        ]
    }),
    evt({
        id: "university",
        start: "2010",
        end: "2013",
        title: "University",
        subtitle: "Academic Research",
        category: "Education",
        location: "United Kingdom",
        era: "university",
        theme: "dark",
        summary: "Formal study bridging design thinking and engineering principles. Developed the intellectual frameworks that now underpin Lanchester's methodology.",
        body: "Three years of rigorous academic study, blending human-computer interaction research with industrial design practice. The dissertation explored how people negotiate with complex systems — a question that still drives the work today.",
        achievements: [
            "First-class dissertation on human-system interaction",
            "Founded student design collective",
            "Published paper on cognitive load in UI"
        ],
        tags: [
            "research",
            "HCI",
            "design-thinking"
        ],
        quote: "Theory without practice is empty; practice without theory is blind.",
        media: [
            {
                id: "uni-1",
                type: "image",
                src: "/images/timeline/placeholder-5.jpg",
                alt: "University campus",
                depth: 0.15
            },
            {
                id: "uni-2",
                type: "image",
                src: "/images/timeline/placeholder-6.jpg",
                alt: "Research notebooks",
                depth: 0.45,
                caption: "Dissertation research notes"
            },
            {
                id: "uni-3",
                type: "image",
                src: "/images/timeline/placeholder-7.jpg",
                alt: "Design studio",
                depth: 0.7
            }
        ]
    }),
    evt({
        id: "early-design",
        start: "2013",
        end: "2016",
        title: "Design Roles",
        subtitle: "Agency & In-House",
        category: "Career",
        location: "London, UK",
        era: "career",
        theme: "dark",
        summary: "Worked across agencies and product teams, sharpening skills in UX architecture, system design, and rapid prototyping within high-pressure environments.",
        body: "Agency life taught speed and client empathy; in-house roles taught depth and ownership. Both sharpened the conviction that great products arise from disciplined frameworks, not ad-hoc creativity.",
        achievements: [
            "Led redesign of enterprise SaaS platform",
            "Shipped 12+ products across verticals",
            "Promoted to Lead Designer in under 18 months"
        ],
        tags: [
            "UX",
            "product",
            "SaaS",
            "agency"
        ],
        media: [
            {
                id: "dr-1",
                type: "image",
                src: "/images/timeline/placeholder-8.jpg",
                alt: "Agency workspace",
                depth: 0.25
            },
            {
                id: "dr-2",
                type: "image",
                src: "/images/timeline/placeholder-9.jpg",
                alt: "Product whiteboard session",
                depth: 0.55,
                caption: "Design sprint outcome"
            }
        ]
    }),
    evt({
        id: "lanchester-founder",
        start: "2016",
        end: "2019",
        title: "Lanchester R&D",
        subtitle: "Founder Phase",
        category: "Venture",
        location: "London / Remote",
        era: "founder",
        theme: "accent",
        featured: true,
        milestone: "Founded",
        summary: "Established Lanchester R&D as a dedicated research and design laboratory. Built the doctrine of intellectual rigor, tactical execution, human calibration, and machine leverage.",
        body: "The decision to formalise Lanchester was driven by a gap in the market: clients wanted strategic depth, not just deliverables. The Four Pillars framework emerged during this period — a synthesis of everything learned to date.",
        achievements: [
            "Launched Lanchester R&D brand and methodology",
            "First consulting engagement with Fortune 500 client",
            "Developed the Four Pillars framework",
            "Built bespoke research tools for client engagements"
        ],
        tags: [
            "strategy",
            "methodology",
            "consulting"
        ],
        quote: "The purpose of Lanchester is to make complex things feel inevitable.",
        links: [
            {
                label: "Lanchester Foundation",
                href: "/foundation"
            },
            {
                label: "Research",
                href: "/research"
            }
        ],
        media: [
            {
                id: "lf-1",
                type: "image",
                src: "/images/timeline/placeholder-10.jpg",
                alt: "Lanchester lab setup",
                depth: 0.2
            },
            {
                id: "lf-2",
                type: "image",
                src: "/images/timeline/placeholder-11.jpg",
                alt: "Strategy mapping session",
                depth: 0.5,
                position: "center top",
                caption: "Four Pillars strategy session"
            }
        ]
    }),
    evt({
        id: "product-leadership",
        start: "2019",
        end: "2022",
        title: "Product Leadership",
        subtitle: "Scale & Systems",
        category: "Leadership",
        location: "Global / Remote",
        era: "leadership",
        theme: "dark",
        summary: "Led product strategy across multiple ventures, applying Lanchester methodology at scale. Focused on resilient system architecture and measurable impact.",
        body: "This period tested whether Lanchester's principles could survive contact with large, distributed teams and enterprise-scale complexity. They did — and the methodology was refined under pressure into something more robust.",
        achievements: [
            "Directed product teams across 3 continents",
            "40% reduction in system friction for enterprise clients",
            "Published research on tactical product intelligence",
            "Mentored 15+ junior designers and engineers"
        ],
        tags: [
            "leadership",
            "systems",
            "enterprise",
            "mentorship"
        ],
        media: [
            {
                id: "pl-1",
                type: "image",
                src: "/images/timeline/placeholder-12.jpg",
                alt: "Product war room",
                depth: 0.35
            },
            {
                id: "pl-2",
                type: "image",
                src: "/images/timeline/placeholder-13.jpg",
                alt: "Global team summit",
                depth: 0.6,
                caption: "Cross-continental product summit"
            },
            {
                id: "pl-3",
                type: "image",
                src: "/images/timeline/placeholder-14.jpg",
                alt: "System architecture diagram",
                depth: 0.15
            }
        ]
    }),
    evt({
        id: "venture-building",
        start: "2022",
        end: "2024",
        title: "Venture Building",
        subtitle: "Multiple Bets",
        category: "Venture",
        location: "Netherlands / Global",
        era: "venture",
        theme: "accent",
        featured: true,
        milestone: "Ventures Launched",
        summary: "Launched multiple ventures in parallel, applying lean methodology and AI-augmented workflows to move from concept to product at unprecedented speed.",
        body: "A deliberate season of high-velocity experimentation — launching products, testing markets, and iterating on business models. Each venture became a live laboratory for the Lanchester method.",
        achievements: [
            "Launched multiple live products from zero",
            "Established Lanchester Foundation",
            "Pioneered AI-augmented design workflow",
            "Active exploration across 4+ ventures"
        ],
        tags: [
            "ventures",
            "AI",
            "lean",
            "product"
        ],
        links: [
            {
                label: "Lanchester Foundation",
                href: "/foundation"
            }
        ],
        media: [
            {
                id: "vb-1",
                type: "image",
                src: "/images/timeline/placeholder-15.jpg",
                alt: "Modern workspace",
                depth: 0.2,
                caption: "Amsterdam studio"
            },
            {
                id: "vb-2",
                type: "image",
                src: "/images/timeline/placeholder-16.jpg",
                alt: "Product launch event",
                depth: 0.5
            }
        ]
    }),
    evt({
        id: "current-chapter",
        start: "2024",
        title: "Current Chapter",
        subtitle: "The Frontier",
        category: "Venture",
        location: "Global",
        era: "venture",
        theme: "accent",
        featured: true,
        summary: "Building at the frontier — integrating AI-native systems, scaling research into production, and shaping the next generation of Lanchester's methodology.",
        body: "The current phase integrates everything learned: intellectual rigour shapes strategy, tactical execution ships product, human calibration ensures adoption, and machine leverage multiplies throughput. The mission is clearer than ever.",
        achievements: [
            "AI-native product development pipeline",
            "Lanchester R&D open research programme",
            "Cross-venture knowledge synthesis"
        ],
        tags: [
            "AI",
            "research",
            "systems",
            "frontier"
        ],
        quote: "We are still early.",
        media: [
            {
                id: "cc-1",
                type: "image",
                src: "/images/timeline/placeholder-1.jpg",
                alt: "Current workspace",
                depth: 0.25
            },
            {
                id: "cc-2",
                type: "image",
                src: "/images/timeline/placeholder-3.jpg",
                alt: "Research in progress",
                depth: 0.5
            }
        ]
    })
];
const timelineCategories = [
    ...new Set(timelineEvents.map((e)=>e.category))
];
function getEventsByEra(eraId) {
    return timelineEvents.filter((e)=>e.era === eraId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hello/app/founder/timeline/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const scrollToTimeline = ()=>{
        const el = document.getElementById("timeline-start");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-32 md:py-40 px-6 md:px-12 border-b border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Autobiography",
                            title: "The Timeline.",
                            description: "A chronological map of the journey — from early exploration through design, research, and venture building."
                        }, void 0, false, {
                            fileName: "[project]/hello/app/founder/timeline/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToTimeline,
                            className: "btn-primary flex items-center gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Begin"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/founder/timeline/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "group-hover:translate-x-1 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 12h14M12 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/founder/timeline/page.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/founder/timeline/page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/founder/timeline/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/founder/timeline/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hello/app/founder/timeline/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "timeline-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$components$2f$timeline$2f$TimelineScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    events: __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineEvents"]
                }, void 0, false, {
                    fileName: "[project]/hello/app/founder/timeline/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hello/app/founder/timeline/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/founder/timeline/page.tsx",
        lineNumber: 13,
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

//# sourceMappingURL=hello_f76207b6._.js.map