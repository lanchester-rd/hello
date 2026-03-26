(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ label, title, description, align = 'left' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-4 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-6 bg-accent/40"
                    }, void 0, false, {
                        fileName: "[project]/components/SectionHeader.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "analytical-label text-accent",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/SectionHeader.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SectionHeader.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest uppercase leading-none",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/SectionHeader.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted text-lg leading-relaxed max-w-2xl font-medium",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/SectionHeader.tsx",
                lineNumber: 15,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SectionHeader.tsx",
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
"[project]/components/timeline/TimelineBackgroundMedia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineBackgroundMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimelineBackgroundMedia({ images, progress }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-background"
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            images.map((img, i)=>{
                const y = reducedMotion ? 0 : (progress - 0.5) * img.depth * 160;
                const scale = reducedMotion ? 1 : 1 + img.depth * 0.12;
                const baseOpacity = img.opacityHint ?? 0.15 + img.depth * 0.15;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-cover bg-no-repeat",
                            style: {
                                backgroundImage: `url(${img.src})`,
                                backgroundPosition: img.position ?? "center center",
                                opacity: baseOpacity,
                                filter: `blur(${Math.max(0, 3 - img.depth * 4)}px) saturate(0.5)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        img.overlayGradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 bg-gradient-to-r ${img.overlayGradient}`
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                            lineNumber: 34,
                            columnNumber: 37
                        }, this)
                    ]
                }, img.id, true, {
                    fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                    lineNumber: 17,
                    columnNumber: 14
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 z-10"
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-10"
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10"
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/timeline/TimelineBackgroundMedia.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_s(TimelineBackgroundMedia, "C3SzXdDjOTeVfafZ73W5HtZXaiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = TimelineBackgroundMedia;
var _c;
__turbopack_context__.k.register(_c, "TimelineBackgroundMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/timeline/TimelineEventCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineEventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/** Thumbnail with shimmer skeleton until loaded */ function LazyImage({ img }) {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 animate-pulse bg-white/[0.06] rounded-[2px]"
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                lineNumber: 11,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: img.src,
                alt: img.alt || "Timeline event media",
                onLoad: ()=>setLoaded(true),
                className: `w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-60" : "opacity-0"}`,
                loading: "lazy",
                decoding: "async",
                style: img.position ? {
                    objectPosition: img.position
                } : undefined
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/timeline/TimelineEventCard.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_s(LazyImage, "5HkI/FtSFoHY/ZszUPbNWJy51d0=");
_c = LazyImage;
function TimelineEventCard({ event, isActive, onExpand }) {
    _s1();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
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
            filter: "blur(0px)"
        },
        inactive: {
            opacity: 0.3,
            filter: "blur(2px)"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        className: `flex-shrink-0 px-4 md:px-0 overflow-hidden w-[85vw] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? "md:w-[min(90vw,1060px)]" : "md:w-[560px]"}`,
        animate: isActive ? "active" : "inactive",
        variants: variants,
        transition: {
            duration: 0.9,
            ease: "easeOut"
        },
        "aria-current": isActive ? "step" : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: isActive ? "md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6" : "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center gap-3 ${isActive ? "md:col-span-2" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "analytical-label text-accent",
                            children: event.category
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        event.milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[8px] font-mono text-accent uppercase tracking-widest",
                            children: event.milestone
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 49,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-px flex-1 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "coordinate-label",
                            children: event.location ?? ""
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-1 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest uppercase leading-none",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted text-base md:text-lg mt-2 font-medium",
                                    children: event.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        event.quote && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                            className: "border-l-2 border-accent/30 pl-4 text-muted/60 italic text-sm leading-relaxed mt-4",
                            children: [
                                "“",
                                event.quote,
                                "”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 66,
                            columnNumber: 39
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted/90 leading-relaxed text-sm md:text-base mt-4",
                            children: event.summary
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        event.achievements && event.achievements.length > 0 && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 pt-4",
                            children: event.achievements.slice(0, 3).map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-3 text-sm text-muted/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        a
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 61
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 72,
                            columnNumber: 79
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-1 space-y-4",
                    children: [
                        event.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted/70 text-sm leading-relaxed border-l-2 border-accent/20 pl-4",
                            children: event.body
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 81,
                            columnNumber: 28
                        }, this),
                        event.tags && event.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5 pt-4",
                            children: event.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/40 uppercase tracking-widest",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 86,
                                    columnNumber: 40
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 85,
                            columnNumber: 53
                        }, this),
                        event.media && event.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-4 overflow-x-auto scrollbar-none",
                            children: event.media.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 md:w-20 md:h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyImage, {
                                                img: img
                                            }, void 0, false, {
                                                fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                                lineNumber: 94,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                            lineNumber: 93,
                                            columnNumber: 21
                                        }, this),
                                        img.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            className: "mt-1 text-[8px] text-muted/30 font-mono max-w-[80px] truncate",
                                            children: img.caption
                                        }, void 0, false, {
                                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                            lineNumber: 96,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, img.id, true, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 92,
                                    columnNumber: 41
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 91,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 80,
                    columnNumber: 22
                }, this),
                event.tags && event.tags.length > 0 && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1.5 pt-1",
                    children: event.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/40 uppercase tracking-widest",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 105,
                            columnNumber: 36
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 104,
                    columnNumber: 62
                }, this),
                event.media && event.media.length > 0 && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 pt-3 overflow-x-auto scrollbar-none",
                    children: event.media.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 md:w-20 md:h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyImage, {
                                        img: img
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                img.caption && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "mt-1 text-[8px] text-muted/30 font-mono max-w-[80px] truncate",
                                    children: img.caption
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                    lineNumber: 116,
                                    columnNumber: 46
                                }, this)
                            ]
                        }, img.id, true, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 112,
                            columnNumber: 37
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 111,
                    columnNumber: 64
                }, this),
                isActive && (event.body || event.achievements && event.achievements.length > 3 || event.links) && onExpand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onExpand,
                    className: "md:hidden btn-ghost text-xs flex items-center gap-2 mt-2 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Read more"
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "group-hover:translate-x-0.5 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5 12h14M12 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/timeline/TimelineEventCard.tsx",
                    lineNumber: 123,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/timeline/TimelineEventCard.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/timeline/TimelineEventCard.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_s1(TimelineEventCard, "C3SzXdDjOTeVfafZ73W5HtZXaiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = TimelineEventCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "LazyImage");
__turbopack_context__.k.register(_c1, "TimelineEventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/timeline/TimelineEventDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineEventDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimelineEventDetail({ event, isOpen, onClose }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const variants = reducedMotion ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    } : {
        hidden: {
            opacity: 0,
            x: 40
        },
        visible: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: 40
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
            variants: variants,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            transition: {
                duration: 0.35,
                ease: "easeOut"
            },
            className: "absolute right-0 top-0 bottom-0 w-full max-w-lg z-50 flex flex-col overflow-y-auto scrollbar-none bg-background/95 backdrop-blur-xl border-l border-white/5",
            role: "complementary",
            "aria-label": `Details for ${event.title}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 z-10 flex justify-end p-4 bg-gradient-to-b from-background/90 to-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        "aria-label": "Close detail panel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M18 6L6 18M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-8 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "analytical-label text-accent",
                                    children: event.category
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                event.era && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "analytical-label text-muted/40",
                                    children: event.era
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 52,
                                    columnNumber: 29
                                }, this),
                                event.milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[9px] font-mono text-accent uppercase tracking-widest",
                                    children: event.milestone
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 53,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-sm text-accent/70 tracking-widest",
                                    children: [
                                        event.start,
                                        event.end ? ` — ${event.end}` : " — Present"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                event.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted/50 text-xs mt-1",
                                    children: event.location
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 63,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold tracking-tightest uppercase leading-none",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted text-sm mt-1",
                                    children: event.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        event.quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                            className: "border-l-2 border-accent/30 pl-4 text-muted/70 italic text-sm leading-relaxed",
                            children: [
                                "“",
                                event.quote,
                                "”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 75,
                            columnNumber: 29
                        }, this),
                        event.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-invert prose-sm max-w-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted/80 leading-relaxed",
                                children: event.body
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 80,
                            columnNumber: 28
                        }, this),
                        event.achievements && event.achievements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "analytical-label text-muted/50 mb-3",
                                    children: "Achievements"
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: event.achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-sm text-muted/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this),
                                                a
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                            lineNumber: 88,
                                            columnNumber: 53
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 85,
                            columnNumber: 69
                        }, this),
                        event.tags && event.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: event.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-muted/50 uppercase tracking-widest",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 97,
                                    columnNumber: 40
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 96,
                            columnNumber: 53
                        }, this),
                        event.links && event.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2 border-t border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "analytical-label text-muted/50",
                                    children: "Related"
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                event.links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "flex items-center gap-2 text-sm text-accent/80 hover:text-accent transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "group-hover:translate-x-0.5 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this),
                                            link.label
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                        lineNumber: 105,
                                        columnNumber: 47
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 103,
                            columnNumber: 55
                        }, this),
                        event.media && event.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2 border-t border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "analytical-label text-muted/50",
                                    children: "Media"
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: event.media.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aspect-[4/3] rounded-sm bg-background-layer2 border border-white/5 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: m.src,
                                                        alt: m.alt || "Timeline event media",
                                                        className: "w-full h-full object-cover opacity-70",
                                                        loading: "lazy",
                                                        decoding: "async"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this),
                                                m.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    className: "text-[9px] text-muted/40 font-mono",
                                                    children: m.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                            lineNumber: 117,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                            lineNumber: 114,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, "detail", true, {
            fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
            lineNumber: 35,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/timeline/TimelineEventDetail.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_s(TimelineEventDetail, "C3SzXdDjOTeVfafZ73W5HtZXaiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = TimelineEventDetail;
var _c;
__turbopack_context__.k.register(_c, "TimelineEventDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/timeline/TimelineTrack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimelineTrack({ events, eras, activeIndex, onSelect }) {
    _s();
    const eraLabel = (eraId)=>eras.find((e)=>e.id === eraId)?.label;
    // One dot per featured (milestone) event only — one per year, first milestone wins.
    const yearTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineTrack.useMemo[yearTrack]": ()=>{
            const seen = new Map();
            events.forEach({
                "TimelineTrack.useMemo[yearTrack]": (evt, i)=>{
                    if (!evt.milestone) return; // only featured events
                    const y = String(evt.start);
                    if (!seen.has(y)) {
                        seen.set(y, {
                            year: y,
                            eventIndex: i,
                            era: evt.era,
                            milestone: evt.milestone
                        });
                    }
                }
            }["TimelineTrack.useMemo[yearTrack]"]);
            return Array.from(seen.values());
        }
    }["TimelineTrack.useMemo[yearTrack]"], [
        events
    ]);
    const activeYear = String(events[activeIndex]?.start ?? "");
    const activeYearIdx = yearTrack.findIndex((y)=>y.year === activeYear);
    const isNewEra = (j)=>{
        if (j === 0) return true;
        return yearTrack[j].era !== yearTrack[j - 1].era;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "relative flex items-center gap-0 select-none overflow-x-auto scrollbar-none",
        "aria-label": "Timeline navigation",
        children: yearTrack.map((entry, j)=>{
            const isActive = entry.year === activeYear;
            const isPast = j < activeYearIdx;
            const showEra = isNewEra(j);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    j > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-px transition-colors duration-300 ${showEra ? "w-10 md:w-20" : "w-8 md:w-16"} ${isPast ? "bg-accent/50" : "bg-white/10"}`
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineTrack.tsx",
                        lineNumber: 42,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center",
                        children: [
                            showEra && entry.era && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-mono uppercase tracking-widest text-muted/30",
                                children: eraLabel(entry.era)
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineTrack.tsx",
                                lineNumber: 46,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect(entry.eventIndex),
                                className: "relative flex flex-col items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1",
                                "aria-label": `${entry.year}${entry.milestone ? ` — ${entry.milestone}` : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block rounded-full border-2 transition-all duration-300 ${isActive ? "w-4 h-4 border-accent bg-accent shadow-[0_0_12px_rgba(163,230,53,0.5)]" : isPast ? "w-2.5 h-2.5 border-accent/50 bg-accent/20" : "w-2.5 h-2.5 border-white/20 bg-transparent group-hover:border-white/40"}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineTrack.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono text-[9px] tracking-widest whitespace-nowrap transition-colors duration-300 ${isActive ? "text-accent" : "text-muted/50 group-hover:text-muted"}`,
                                        children: entry.year
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineTrack.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    entry.milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7px] tracking-widest text-accent/40 uppercase whitespace-nowrap",
                                        children: entry.milestone
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineTrack.tsx",
                                        lineNumber: 59,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/timeline/TimelineTrack.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/timeline/TimelineTrack.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                ]
            }, entry.year, true, {
                fileName: "[project]/components/timeline/TimelineTrack.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/timeline/TimelineTrack.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
_s(TimelineTrack, "GE23vqZzwpls+z3uzFjMyxsmpx8=");
_c = TimelineTrack;
var _c;
__turbopack_context__.k.register(_c, "TimelineTrack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/timeline/TimelineEraNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineEraNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function TimelineEraNav({ eras, events, activeIndex, onSelectEra, categories, activeCategory, onFilterCategory, horizontal }) {
    const activeEvent = events[activeIndex];
    const activeEraId = activeEvent?.era;
    const firstIndexForEra = (eraId)=>events.findIndex((e)=>e.era === eraId);
    const rootClass = horizontal ? "flex flex-col gap-2" : "flex flex-col gap-4";
    const eraNavClass = horizontal ? "flex gap-2 items-center flex-wrap px-2" : "flex flex-wrap items-center gap-2";
    // When horizontal, make the category row occupy the full width and distribute
    // chips across available space so they don't bunch up at the left.
    const categoryNavClass = horizontal ? "flex gap-2 items-center flex-wrap w-full justify-between px-2 scrollbar-none" : "flex flex-wrap items-center gap-1.5";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: rootClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: eraNavClass,
                "aria-label": "Era navigation",
                children: eras.map((era)=>{
                    const isActive = era.id === activeEraId;
                    const idx = firstIndexForEra(era.id);
                    if (idx < 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectEra(idx),
                        className: `relative px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isActive ? "text-background bg-accent" : "text-muted/60 hover:text-muted bg-white/5 hover:bg-white/10"}`,
                        "aria-current": isActive ? "true" : undefined,
                        children: [
                            era.label,
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                layoutId: "era-indicator",
                                className: "absolute inset-0 rounded-full bg-accent -z-10",
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineEraNav.tsx",
                                lineNumber: 31,
                                columnNumber: 28
                            }, this)
                        ]
                    }, era.id, true, {
                        fileName: "[project]/components/timeline/TimelineEraNav.tsx",
                        lineNumber: 29,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineEraNav.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            categories.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: categoryNavClass,
                role: "group",
                "aria-label": "Category filter",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onFilterCategory(null),
                        className: `px-2 py-1 rounded text-[9px] font-mono uppercase tracking-widest transition-colors ${activeCategory === null ? "text-accent border border-accent/40 bg-accent/10" : "text-muted/40 border border-white/5 hover:text-muted/70 hover:border-white/10"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineEraNav.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onFilterCategory(activeCategory === cat ? null : cat),
                            className: `px-2 py-1 rounded text-[9px] font-mono uppercase tracking-widest transition-colors ${activeCategory === cat ? "text-accent border border-accent/40 bg-accent/10" : "text-muted/40 border border-white/5 hover:text-muted/70 hover:border-white/10"}`,
                            children: cat
                        }, cat, false, {
                            fileName: "[project]/components/timeline/TimelineEraNav.tsx",
                            lineNumber: 45,
                            columnNumber: 34
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineEraNav.tsx",
                lineNumber: 41,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/timeline/TimelineEraNav.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = TimelineEraNav;
var _c;
__turbopack_context__.k.register(_c, "TimelineEraNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/timeline/TimelineScroller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineScroller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineBackgroundMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/timeline/TimelineBackgroundMedia.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/timeline/TimelineEventCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEventDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/timeline/TimelineEventDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineTrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/timeline/TimelineTrack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEraNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/timeline/TimelineEraNav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function TimelineScroller({ events, eras, categories, initialEventId }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Derive initial active index directly from initialEventId so the visual is
    // correct on first render regardless of scroll position timing.
    const initialIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineScroller.useMemo[initialIdx]": ()=>{
            if (!initialEventId) return 0;
            const i = events.findIndex({
                "TimelineScroller.useMemo[initialIdx].i": (e)=>e.id === initialEventId
            }["TimelineScroller.useMemo[initialIdx].i"]);
            return i >= 0 ? i : 0;
        }
    }["TimelineScroller.useMemo[initialIdx]"], [
        events,
        initialEventId
    ]);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const CARD_SLOT = 560 + 48; // inactive card width + gap
    const lastIdx = events.length - 1;
    // Always start visual state from the last event — the intro animation
    // will spring to the target. With reduced motion the layout effect jumps
    // directly (no animation, no hydration mismatch since both SSR and
    // client start at lastIdx).
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(lastIdx);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(lastIdx / Math.max(1, events.length));
    const [pinned, setPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!initialEventId);
    const [detailOpen, setDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filtersOpen, setFiltersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(200);
    // While settling, handleScroll is suppressed. Cleared once intro finishes.
    const isSettling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!!initialEventId);
    const computeStartOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimelineScroller.useCallback[computeStartOffset]": ()=>{
            const vw = window.innerWidth;
            const activeW = Math.min(vw * 0.9, 1060);
            startOffsetRef.current = Math.max(0, Math.round((vw - activeW) / 2) - 48);
        }
    }["TimelineScroller.useCallback[computeStartOffset]"], []);
    const targetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(startOffsetRef.current - lastIdx * CARD_SLOT);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(targetX, {
        stiffness: 45,
        damping: 22,
        restDelta: 0.5
    });
    // Synchronously before paint:
    // 1. Compute startOffset
    // 2. Disable browser scroll restoration so it can't override our position
    // 3. Jump scroll to the initial event position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TimelineScroller.useLayoutEffect": ()=>{
            computeStartOffset();
            history.scrollRestoration = "manual";
            const doInitialScroll = {
                "TimelineScroller.useLayoutEffect.doInitialScroll": ()=>{
                    const el = containerRef.current;
                    if (!el || !initialEventId) return;
                    const scrollRange = el.offsetHeight - window.innerHeight;
                    if (scrollRange <= 0) return;
                    // Scroll to the CENTER of the event zone — not the exact boundary —
                    // so any sub-pixel rounding or layout shift can't push us into the
                    // neighbouring event.
                    const target = el.offsetTop + (initialIdx + 0.5) / events.length * scrollRange;
                    window.scrollTo({
                        top: target,
                        behavior: "instant"
                    });
                }
            }["TimelineScroller.useLayoutEffect.doInitialScroll"];
            doInitialScroll();
            // Retry after one frame in case Next.js router resets scroll.
            // Then kick off the intro animation: spring from the last event to the target.
            let innerRaf = 0;
            // Check reduced motion directly since the hook value isn't stable yet
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const raf = requestAnimationFrame({
                "TimelineScroller.useLayoutEffect.raf": ()=>{
                    doInitialScroll();
                    innerRaf = requestAnimationFrame({
                        "TimelineScroller.useLayoutEffect.raf": ()=>{
                            if (prefersReduced || !initialEventId) {
                                // No intro animation — jump directly to the target
                                targetX.jump(startOffsetRef.current - initialIdx * CARD_SLOT);
                                setActiveIndex(initialIdx);
                                isSettling.current = false;
                                return;
                            }
                            // Start the intro animation — spring from last event to the target.
                            targetX.set(startOffsetRef.current - initialIdx * CARD_SLOT);
                            // Track the spring position during intro to update activeIndex
                            // as cards fly past. Once the spring settles near the target,
                            // lock in the final index and unsuppress handleScroll.
                            const unsub = springX.on("change", {
                                "TimelineScroller.useLayoutEffect.raf.unsub": (v)=>{
                                    const offset = startOffsetRef.current - v;
                                    const idx = Math.round(offset / CARD_SLOT);
                                    const clamped = Math.max(0, Math.min(events.length - 1, idx));
                                    setActiveIndex(clamped);
                                    // Check if we've arrived at the target
                                    const targetPos = startOffsetRef.current - initialIdx * CARD_SLOT;
                                    if (Math.abs(v - targetPos) < 2) {
                                        setActiveIndex(initialIdx);
                                        isSettling.current = false;
                                        unsub();
                                    }
                                }
                            }["TimelineScroller.useLayoutEffect.raf.unsub"]);
                        }
                    }["TimelineScroller.useLayoutEffect.raf"]);
                }
            }["TimelineScroller.useLayoutEffect.raf"]);
            window.addEventListener("resize", computeStartOffset);
            return ({
                "TimelineScroller.useLayoutEffect": ()=>{
                    cancelAnimationFrame(raf);
                    cancelAnimationFrame(innerRaf);
                    window.removeEventListener("resize", computeStartOffset);
                }
            })["TimelineScroller.useLayoutEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TimelineScroller.useLayoutEffect"], []);
    // Jump the spring to the last-event position (with correct startOffset)
    // before paint. The intro animation will then spring to the target event.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TimelineScroller.useLayoutEffect": ()=>{
            const pos = startOffsetRef.current - lastIdx * CARD_SLOT;
            targetX.jump(pos);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TimelineScroller.useLayoutEffect"], []);
    /* ── Filter events by category ── */ const filteredEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineScroller.useMemo[filteredEvents]": ()=>activeCategory ? events.filter({
                "TimelineScroller.useMemo[filteredEvents]": (e)=>e.category === activeCategory
            }["TimelineScroller.useMemo[filteredEvents]"]) : events
    }["TimelineScroller.useMemo[filteredEvents]"], [
        events,
        activeCategory
    ]);
    /* ── Desktop: map vertical scroll → horizontal position ── */ const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimelineScroller.useCallback[handleScroll]": ()=>{
            if (isSettling.current) return;
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrollRange = el.offsetHeight - window.innerHeight;
            if (scrollRange <= 0) return;
            const entering = rect.top <= 0;
            const exiting = rect.bottom <= window.innerHeight;
            setPinned(entering && !exiting);
            const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollRange));
            setScrollProgress(rawProgress);
            const n = filteredEvents.length;
            // Add 0.5 / n offset so the midpoint of each zone maps to its index.
            // Without this, the exact boundary (idx/n) is ambiguous and sub-pixel
            // rounding can push into the previous event.
            const idx = Math.min(n - 1, Math.floor(rawProgress * n + 0.001));
            setActiveIndex(idx);
            targetX.set(startOffsetRef.current - idx * CARD_SLOT);
        }
    }["TimelineScroller.useCallback[handleScroll]"], [
        filteredEvents.length,
        CARD_SLOT,
        targetX
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineScroller.useEffect": ()=>{
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            // Don't call handleScroll here — initial state is pre-seeded and
            // the settling guard handles the transition. The scroll listener
            // will pick up from the first real scroll event.
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
        // Scroll to the CENTER of the event zone so handleScroll maps back
        // to the same index reliably (no boundary ambiguity).
        const target = el.offsetTop + (idx + 0.5) / filteredEvents.length * scrollRange;
        window.scrollTo({
            top: target,
            behavior: reducedMotion ? "auto" : "smooth"
        });
    };
    /** Jump to event by index in the full events array — used by era nav */ const goToEventIndex = (fullIndex)=>{
        const targetEvent = events[fullIndex];
        if (!targetEvent) return;
        // Find this event in filtered list
        const filtIdx = filteredEvents.findIndex((e)=>e.id === targetEvent.id);
        if (filtIdx >= 0) goTo(filtIdx);
        else {
            // Event not visible — clear filter and jump
            setActiveCategory(null);
            // goTo after filter clears — defer one tick
            setTimeout(()=>{
                goTo(fullIndex);
            }, 0);
        }
    };
    // Clamp active index to the filtered list so we never render empty when
    // a filter reduces the number of events beneath the current index.
    const safeIndex = Math.max(0, Math.min(activeIndex, Math.max(0, filteredEvents.length - 1)));
    const activeEvent = filteredEvents[safeIndex];
    // Clamp active index whenever the filtered list shrinks.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineScroller.useEffect": ()=>{
            setActiveIndex({
                "TimelineScroller.useEffect": (prev)=>Math.min(prev, Math.max(0, filteredEvents.length - 1))
            }["TimelineScroller.useEffect"]);
        }
    }["TimelineScroller.useEffect"], [
        filteredEvents.length
    ]);
    // When the user changes the category filter, scroll so the timeline
    // viewport is visible. We track the *previous* category to distinguish
    // user-initiated filter changes from unrelated re-renders.
    const prevCategoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeCategory);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineScroller.useEffect": ()=>{
            if (prevCategoryRef.current === activeCategory) return; // same category — skip
            prevCategoryRef.current = activeCategory;
            const el = containerRef.current;
            if (!el) return;
            window.scrollTo({
                top: el.offsetTop,
                behavior: reducedMotion ? "auto" : "smooth"
            });
        }
    }["TimelineScroller.useEffect"], [
        activeCategory,
        reducedMotion
    ]);
    // If there are no events for the current filter, render nothing.
    if (filteredEvents.length === 0) return null;
    /* ── Local progress within the active event window (parallax) ── */ const eventWindow = 1 / filteredEvents.length;
    const eventStart = activeIndex * eventWindow;
    const localProgress = eventWindow > 0 ? Math.max(0, Math.min(1, (scrollProgress - eventStart) / eventWindow)) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "hidden md:block relative",
                style: {
                    height: `${(filteredEvents.length + 1) * 100}vh`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden md:block fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-background transition-opacity duration-300 ${pinned ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                duration: 0.7
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineBackgroundMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                images: activeEvent.media,
                                progress: localProgress
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        }, activeEvent.id, false, {
                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 h-full flex flex-col justify-between py-16 px-6 md:px-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineTrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        events: filteredEvents,
                                        eras: eras,
                                        activeIndex: activeIndex,
                                        onSelect: goTo
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-start overflow-visible relative py-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    ref: stripRef,
                                    className: "relative flex gap-12 will-change-transform",
                                    style: {
                                        x: springX
                                    },
                                    children: filteredEvents.map((evt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEventCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            event: evt,
                                            isActive: i === activeIndex,
                                            onExpand: ()=>setDetailOpen(true)
                                        }, evt.id, false, {
                                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 263,
                                            columnNumber: 47
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-6 md:right-12 bottom-1/2 translate-y-1/2 z-20 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goTo(Math.max(0, activeIndex - 1)),
                                        disabled: activeIndex === 0,
                                        "aria-label": "Previous event",
                                        className: "w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-lg disabled:opacity-20 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-transform duration-150",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 5l-7 7 7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (activeIndex === filteredEvents.length - 1) {
                                                document.getElementById("whats-next")?.scrollIntoView({
                                                    behavior: "smooth"
                                                });
                                            } else {
                                                goTo(activeIndex + 1);
                                            }
                                        },
                                        "aria-label": activeIndex === filteredEvents.length - 1 ? "See what's next" : "Next event",
                                        className: "w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 19l7-7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEventDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        event: activeEvent,
                        isOpen: detailOpen,
                        onClose: ()=>setDetailOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-0 right-0 z-30 flex justify-center px-6 md:px-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-haspopup": "true",
                                    "aria-expanded": filtersOpen,
                                    "aria-label": filtersOpen ? "Hide filters" : "Show filters",
                                    onClick: ()=>setFiltersOpen((o)=>!o),
                                    className: `px-4 py-2 rounded-full font-mono uppercase tracking-widest shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-150 ${filtersOpen ? "bg-background/60 backdrop-blur-md border border-white/10 text-foreground/60" : "bg-accent text-background"}`,
                                    children: filtersOpen ? "Hide filters" : "Show filters"
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transform transition-all duration-[400ms] ease-out absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 ${filtersOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-background/60 backdrop-blur-md border border-white/5 px-5 py-3 w-[min(90vw,1060px)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEraNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            eras: eras,
                                            events: events,
                                            activeIndex: events.findIndex((e)=>e.id === activeEvent.id),
                                            onSelectEra: goToEventIndex,
                                            categories: categories,
                                            activeCategory: activeCategory,
                                            onFilterCategory: setActiveCategory,
                                            horizontal: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-30 bg-background/90 backdrop-blur-lg border-b border-white/5 px-6 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineEraNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            eras: eras,
                            events: events,
                            activeIndex: events.findIndex((e)=>e.id === activeEvent.id),
                            onSelectEra: (idx)=>{
                                const targetId = events[idx]?.id;
                                if (targetId) {
                                    const el = document.getElementById(`mobile-event-${targetId}`);
                                    el?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                }
                            },
                            categories: categories,
                            activeCategory: activeCategory,
                            onFilterCategory: setActiveCategory
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-8 space-y-20",
                        children: eras.map((era)=>{
                            const eraEvents = filteredEvents.filter((e)=>e.era === era.id);
                            if (eraEvents.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                "aria-label": era.label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono uppercase tracking-widest text-accent/60",
                                                children: era.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-px flex-1 bg-accent/10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-12",
                                        children: eraEvents.map((evt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileEventCard, {
                                                event: evt
                                            }, evt.id, false, {
                                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                                lineNumber: 341,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, era.id, true, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 331,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TimelineScroller, "8C9mqYTkoygM6DN4Igg4PFq3kRY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = TimelineScroller;
/* ─── Mobile event card — richer than V1 ─── */ function MobileEventCard({ event }) {
    _s1();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `mobile-event-${event.id}`,
        className: "lab-card space-y-5 scroll-mt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "analytical-label text-accent",
                        children: event.category
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    event.milestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 bg-accent/10 border border-accent/30 rounded text-[8px] font-mono text-accent uppercase tracking-widest",
                        children: event.milestone
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 360,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px flex-1 bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[9px] text-muted/50",
                        children: [
                            event.start,
                            event.end ? ` — ${event.end}` : " — Present"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold tracking-tightest uppercase",
                children: event.title
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted text-sm",
                children: event.subtitle
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            event.quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: "border-l-2 border-accent/20 pl-3 text-muted/50 italic text-sm",
                children: [
                    "“",
                    event.quote,
                    "”"
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 375,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted/80 text-sm leading-relaxed",
                children: event.summary
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            (event.body || event.achievements && event.achievements.length > 0 || event.links) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                className: "btn-ghost text-xs flex items-center gap-2",
                "aria-expanded": expanded,
                children: [
                    expanded ? "Show less" : "Read more",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: `transition-transform ${expanded ? "rotate-90" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 18l6-6-6-6"
                        }, void 0, false, {
                            fileName: "[project]/components/timeline/TimelineScroller.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 382,
                columnNumber: 94
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 pt-2 border-t border-white/5",
                children: [
                    event.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted/70 text-sm leading-relaxed",
                        children: event.body
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 391,
                        columnNumber: 26
                    }, this),
                    event.achievements && event.achievements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1.5",
                        children: event.achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2 text-xs text-muted/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 w-1 h-1 rounded-full bg-accent/40 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                        lineNumber: 395,
                                        columnNumber: 19
                                    }, this),
                                    a
                                ]
                            }, i, true, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 394,
                                columnNumber: 49
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 393,
                        columnNumber: 67
                    }, this),
                    event.tags && event.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: event.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-mono text-muted/40 uppercase tracking-widest",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 401,
                                columnNumber: 38
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 400,
                        columnNumber: 51
                    }, this),
                    event.links && event.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: event.links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "block text-xs text-accent/70 hover:text-accent",
                                children: [
                                    "→ ",
                                    link.label
                                ]
                            }, i, true, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 407,
                                columnNumber: 45
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 406,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 390,
                columnNumber: 20
            }, this),
            event.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pt-2 scrollbar-none",
                children: event.media.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-sm bg-background-layer2 border border-white/5 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img.src,
                                    alt: img.alt || "Timeline event media",
                                    className: "w-full h-full object-cover opacity-50",
                                    loading: "lazy",
                                    decoding: "async",
                                    style: img.position ? {
                                        objectPosition: img.position
                                    } : undefined
                                }, void 0, false, {
                                    fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 416,
                                columnNumber: 15
                            }, this),
                            img.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "mt-1 text-[8px] text-muted/30 font-mono max-w-[80px] truncate",
                                children: img.caption
                            }, void 0, false, {
                                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                                lineNumber: 422,
                                columnNumber: 31
                            }, this)
                        ]
                    }, img.id, true, {
                        fileName: "[project]/components/timeline/TimelineScroller.tsx",
                        lineNumber: 415,
                        columnNumber: 35
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/timeline/TimelineScroller.tsx",
                lineNumber: 414,
                columnNumber: 34
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/timeline/TimelineScroller.tsx",
        lineNumber: 356,
        columnNumber: 10
    }, this);
}
_s1(MobileEventCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c1 = MobileEventCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimelineScroller");
__turbopack_context__.k.register(_c1, "MobileEventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ─── Timeline data model & seed data  (V3) ─── */ /* ── Google Drive media helper ──────────────────────────────────────────────
 *  Usage: src: gdrive("1AbC...xyz")
 *
 *  How to get a file ID:
 *    1. Open Google Drive and navigate to your public folder.
 *    2. Right-click a file → "Get link" → set to "Anyone with the link".
 *    3. Copy the URL, e.g.:
 *         https://drive.google.com/file/d/1AbC...xyz/view?usp=sharing
 *    4. The segment between /d/ and /view is the file ID → "1AbC...xyz"
 *
 *  The thumbnail endpoint supports a width hint (default 1920px) and is the
 *  most reliable option for CSS background-image use in production.
 *  For a whole public folder, individual files within it are accessible by ID
 *  even if you only shared the folder (not each file individually).
 * ───────────────────────────────────────────────────────────────────────── */ __turbopack_context__.s([
    "gdrive",
    ()=>gdrive,
    "getEventsByEra",
    ()=>getEventsByEra,
    "timelineCategories",
    ()=>timelineCategories,
    "timelineEras",
    ()=>timelineEras,
    "timelineEvents",
    ()=>timelineEvents
]);
function gdrive(fileId, width = 1920) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}
const timelineEras = [
    {
        id: "school",
        label: "School Years",
        startEventId: "sandbach-school",
        endEventId: "bentley-work-experience"
    },
    {
        id: "formation",
        label: "Early Formation",
        startEventId: "swimming-instructor",
        endEventId: "lanchester-early-freelance"
    },
    {
        id: "university",
        label: "University & Early Professional",
        startEventId: "one-percent-studio",
        endEventId: "sandbach-designer-in-residence"
    },
    {
        id: "early-career",
        label: "Product & Industrial Design",
        startEventId: "elektron-technology",
        endEventId: "bigbrother-international"
    },
    {
        id: "lanchester-foundation",
        label: "Lanchester R&D Foundation",
        startEventId: "lanchester-founder",
        endEventId: "lanchester-founder"
    },
    {
        id: "leadership",
        label: "Product Leadership & Scale",
        startEventId: "bunq",
        endEventId: "lanchester-sentistic"
    },
    {
        id: "founder",
        label: "Founder Era",
        startEventId: "imediate-foundation",
        endEventId: "fluffybutt"
    }
];
/* ─── Helper: build an event with `images` alias ─── */ function evt(e) {
    return {
        ...e,
        images: e.media
    };
}
const timelineEvents = [
    /* ════════════════  SCHOOL YEARS  ════════════════ */ evt({
        id: "sandbach-school",
        slug: "sandbach-school",
        start: "2003",
        end: "2010",
        sortOrder: 10,
        title: "Sandbach School",
        subtitle: "Secondary Education",
        category: "Education",
        location: "Sandbach, Cheshire, UK",
        era: "school",
        theme: "dark",
        featured: true,
        milestone: "Foundations",
        summary: "Seven years at Sandbach School, Cheshire — where a passion for design, making, and systems thinking started early. Design Technology and Art were the spark that lit everything that followed.",
        body: "This is where it all began. Design Technology wasn't just a subject — it was the first place where creativity and problem-solving felt like the same thing. Every project was a chance to ask: how does this work, why does it look like this, and how could it be better? That question never went away. These school years built a foundation of curiosity-led thinking that would shape every product, every design system, and every team built since. The ability to see across disciplines — not just design, not just engineering, not just strategy — started here.",
        achievements: [
            "Developed strong design-thinking and problem-solving skills through Design Technology coursework",
            "Built early foundations in visual communication, product ideation, and iterative making",
            "Established a cross-disciplinary mindset combining aesthetics, function, and systems thinking"
        ],
        tags: [
            "education",
            "design-technology",
            "design-thinking",
            "foundations",
            "cheshire"
        ],
        quote: "Every great product starts with someone asking: how could this be better?",
        status: "published",
        media: [
            {
                id: "ss-1",
                type: "image",
                src: "/timeline/sandbach-school/hero.jpg",
                alt: "Sandbach School building",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "ss-2",
                type: "image",
                src: "/timeline/sandbach-school/workshop.jpg",
                alt: "Design Technology workshop",
                depth: 0.5,
                caption: "Design Technology — where making first made sense",
                sortOrder: 2
            }
        ]
    }),
    evt({
        id: "bentley-work-experience",
        slug: "bentley-work-experience",
        start: "2008",
        end: "2008",
        sortOrder: 15,
        title: "Bentley Motors",
        subtitle: "Work Experience — Manufacturing & Design",
        category: "Work Experience",
        location: "Crewe, Cheshire, UK",
        era: "school",
        theme: "dark",
        summary: "A week inside Bentley Motors' Crewe factory at sixteen — watching world-class precision engineering and luxury manufacturing in real life. The moment design intent meets manufacturing reality, and nothing is ever the same again.",
        body: "Most design students learn production processes from a textbook. This was different. Standing inside Bentley's Crewe factory — one of the most precise manufacturing environments on the planet — made one thing instantly clear: design decisions have consequences at every stage of production. A curve that looks perfect on screen can become a nightmare on the factory floor. Quality isn't an opinion; it's a system. This early exposure to end-to-end product lifecycle thinking, manufacturing constraints, and quality management principles became a permanent reference point for every product and design role that followed.",
        achievements: [
            "Gained first-hand exposure to world-class manufacturing processes and quality management systems",
            "Built foundational understanding of design-for-manufacture and product lifecycle constraints",
            "Developed early appreciation for how design decisions drive production outcomes"
        ],
        tags: [
            "work-experience",
            "automotive",
            "manufacturing",
            "product-lifecycle",
            "quality-management",
            "bentley"
        ],
        status: "published",
        media: [
            {
                id: "bwx-1",
                type: "image",
                src: "/timeline/bentley-work-experience/factory-floor.jpg",
                alt: "Bentley Motors factory, Crewe",
                depth: 0.25,
                sortOrder: 1
            },
            {
                id: "bwx-2",
                type: "image",
                src: "/timeline/bentley-work-experience/detail.jpg",
                alt: "Bentley precision manufacturing detail",
                depth: 0.5,
                caption: "Precision at every level — design meets manufacture",
                sortOrder: 2
            }
        ]
    }),
    /* ════════════════  EARLY FORMATION (parallel threads: coaching & freelance)  ════════════════ */ evt({
        id: "swimming-instructor",
        slug: "swimming-instructor",
        start: "2009",
        end: "2016",
        sortOrder: 20,
        title: "Swimming Instructor",
        subtitle: "Coaching & Communication",
        category: "Coaching",
        location: "Cheshire, UK",
        era: "formation",
        theme: "dark",
        summary: "Seven years coaching swimming across all ages and abilities — running in parallel with school, university, and early career. Teaching people to do something hard, clearly and confidently, turned out to be excellent training for product design and team leadership.",
        body: "Coaching is a design challenge. You take something complex, break it into steps, communicate it clearly, and adjust the approach based on how the person in front of you is responding. That's also exactly how great products are built and great teams are led. Seven years of qualified swimming instruction — while studying, while freelancing, while building skills — developed communication, stakeholder empathy, structured coaching, and adaptive facilitation skills that no classroom delivers. It also funded the journey through design education without compromise.",
        achievements: [
            "Qualified swimming instructor delivering structured coaching across age groups and ability levels",
            "Developed adaptive communication and instructional design skills across diverse learner needs",
            "Built financial independence throughout university through consistent professional practice",
            "Applied coaching frameworks that directly inform product onboarding and team facilitation approaches"
        ],
        tags: [
            "coaching",
            "communication",
            "instructional-design",
            "stakeholder-empathy",
            "facilitation"
        ],
        status: "published",
        media: [
            {
                id: "swim-1",
                type: "image",
                src: "/timeline/swimming-instructor/pool.jpg",
                alt: "Swimming pool coaching environment",
                depth: 0.2,
                sortOrder: 1
            }
        ]
    }),
    evt({
        id: "lanchester-early-freelance",
        slug: "lanchester-early-freelance",
        start: "2009",
        end: "2013",
        sortOrder: 25,
        title: "Lanchester — Early Freelance",
        subtitle: "Design, Branding & Web",
        category: "Freelance",
        location: "Cheshire / Remote, UK",
        era: "formation",
        theme: "dark",
        featured: false,
        milestone: "Lanchester thread begins",
        summary: "The very first Lanchester projects: real client work, real money, real deadlines — taken on while still at school. Brand identities, websites, and promotional materials for businesses that needed results, not academic exercises.",
        body: "Lanchester started as a name for doing serious work seriously. While still at school — and through the early years of university — real clients hired this practice to design brand identities, build websites, and create promotional content. These weren't portfolio projects. They had budgets, deadlines, and stakeholders with opinions. That gap between university briefs and real-world client requirements is where commercial product intuition gets built. Every discipline learned here — user needs analysis, visual communication, iterative design, client stakeholder management — became a foundation for every product role that followed. The Lanchester identity was born here, long before it became a research and design studio.",
        achievements: [
            "Won first paying design and web projects while still in secondary school",
            "Delivered brand identity systems, website builds, and promotional content for small businesses",
            "Developed client-facing stakeholder management and commercial product delivery skills",
            "Established Lanchester as a professional design identity with real market presence"
        ],
        tags: [
            "freelance",
            "brand-identity",
            "web-design",
            "stakeholder-management",
            "visual-communication",
            "lanchester"
        ],
        links: [
            {
                label: "About Lanchester R&D",
                href: "/about"
            }
        ],
        status: "published",
        media: [
            {
                id: "lef-1",
                type: "image",
                src: "/timeline/lanchester-early-freelance/desk.jpg",
                alt: "Early freelance studio setup",
                depth: 0.3,
                sortOrder: 1
            },
            {
                id: "lef-2",
                type: "image",
                src: "/timeline/lanchester-early-freelance/brand-work.jpg",
                alt: "Early branding and visual identity work",
                depth: 0.55,
                caption: "Brand identity work for early clients",
                sortOrder: 2
            }
        ]
    }),
    /* ════════════════  UNIVERSITY & EARLY PROFESSIONAL  ════════════════ */ evt({
        id: "one-percent-studio",
        slug: "one-percent-studio",
        start: "2013",
        end: "2013",
        sortOrder: 30,
        title: "One Percent Studio",
        subtitle: "Design Studio Collaboration",
        category: "Freelance",
        location: "UK",
        era: "university",
        theme: "dark",
        summary: "A collaborative studio experience in 2013, bridging the gap between undergraduate study and the Coventry Masters. Real briefs, real critique, real deadlines — sharpening the move from solo freelancer to professional design collaborator.",
        body: "Independent freelance work builds execution skills. Collaborative studio work builds something different: the ability to design with others, defend a point of view under critique, and align a team around a shared creative direction. One Percent Studio was the transition from solo practice to collaborative design — working alongside other designers on live client briefs, presenting work, and learning how to navigate the gap between what a designer thinks is right and what a client needs to hear. These professional collaboration and stakeholder communication skills became essential in every team role that followed.",
        achievements: [
            "Collaborated on live client briefs in a professional studio environment",
            "Developed design critique, peer review, and collaborative ideation skills",
            "Built professional presentation and stakeholder communication capabilities"
        ],
        tags: [
            "design-studio",
            "collaboration",
            "design-critique",
            "stakeholder-communication",
            "professional-development"
        ],
        status: "draft",
        media: [
            {
                id: "ops-1",
                type: "image",
                src: "/timeline/one-percent-studio/studio.jpg",
                alt: "Design studio environment",
                depth: 0.3,
                sortOrder: 1
            }
        ]
    }),
    evt({
        id: "coventry-university",
        slug: "coventry-university",
        start: "2013",
        end: "2014",
        sortOrder: 40,
        title: "Coventry University",
        subtitle: "Masters — Industrial & Product Design",
        category: "Education",
        location: "Coventry, UK",
        era: "university",
        theme: "dark",
        featured: true,
        milestone: "Masters",
        summary: "Masters in Industrial and Product Design at Coventry University — an intensive year of design research, rapid prototyping, user-centred design methodology, and manufacturing strategy. This is where instinct became a system.",
        body: "The Coventry Masters didn't teach drawing — it taught thinking. Specifically: how to build an evidence-based design position from user research, material science, manufacturing constraints, and functional requirements — and then execute it with craft and conviction. Every project demanded rigorous research before a single design decision was made. Human-centred design methods, rapid prototyping cycles, and design-for-manufacture principles were the daily tools. The result was a systematic design methodology that has been applied in every product role, startup, and leadership position since. Great design isn't subjective — it's defensible, measurable, and grounded in user and systems insight.",
        achievements: [
            "Masters in Industrial and Product Design, Coventry University — completed 2014",
            "Built advanced skills in human-centred design, design research, and iterative prototyping",
            "Developed design-for-manufacture and production viability assessment capabilities",
            "Established an evidence-based design methodology underpinning all subsequent product work"
        ],
        tags: [
            "education",
            "masters",
            "human-centred-design",
            "industrial-design",
            "product-design",
            "design-research",
            "rapid-prototyping",
            "coventry"
        ],
        quote: "Great design isn't subjective — it's defensible, measurable, and grounded in real insight.",
        links: [
            {
                label: "Coventry University",
                href: "https://www.coventry.ac.uk"
            }
        ],
        status: "published",
        media: [
            {
                id: "cov-1",
                type: "image",
                src: "/timeline/coventry-university/campus.jpg",
                alt: "Coventry University campus",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "cov-2",
                type: "image",
                src: "/timeline/coventry-university/studio.jpg",
                alt: "Design studio with prototypes and models",
                depth: 0.45,
                caption: "Prototyping in the industrial design studio",
                sortOrder: 2
            },
            {
                id: "cov-3",
                type: "image",
                src: "/timeline/coventry-university/research.jpg",
                alt: "Research and material samples",
                depth: 0.65,
                caption: "Material and manufacturing research",
                sortOrder: 3
            }
        ]
    }),
    evt({
        id: "sandbach-designer-in-residence",
        slug: "sandbach-designer-in-residence",
        start: "2014",
        end: "2014",
        sortOrder: 50,
        title: "Sandbach School",
        subtitle: "Designer in Residence",
        category: "Education",
        location: "Sandbach, Cheshire, UK",
        era: "university",
        theme: "light",
        summary: "Invited back to Sandbach School as Designer in Residence directly after the Coventry Masters — mentoring students on design projects and bringing real-world product thinking into the classroom.",
        body: "Coming back to the school that started everything — this time as the professional in the room — was a powerful experience. As Designer in Residence, the role was to bring the gap between academic design education and professional product practice into the open. Mentoring students through live design projects, introducing user research principles, manufacturing realities, and iterative design thinking into their process. It reinforced one of the most important leadership skills: making complex, expert knowledge accessible to someone encountering it for the first time. The ability to mentor, coach, and transfer design thinking across experience levels has been central to every team leadership role since.",
        achievements: [
            "Appointed Designer in Residence at Sandbach School immediately post-Masters graduation",
            "Mentored students through product design projects applying professional methodology",
            "Introduced user research, iterative design, and design-for-manufacture principles to curriculum",
            "Developed team mentoring and design knowledge-transfer capabilities"
        ],
        tags: [
            "mentorship",
            "design-education",
            "design-thinking",
            "knowledge-transfer",
            "team-development",
            "residency"
        ],
        status: "published",
        media: [
            {
                id: "sdr-1",
                type: "image",
                src: "/timeline/sandbach-designer-in-residence/classroom.jpg",
                alt: "Design classroom with student projects",
                depth: 0.25,
                sortOrder: 1
            },
            {
                id: "sdr-2",
                type: "image",
                src: "/timeline/sandbach-designer-in-residence/workshop.jpg",
                alt: "Student design workshop",
                depth: 0.5,
                caption: "Guiding students through product development briefs",
                sortOrder: 2
            }
        ]
    }),
    /* ════════════════  PRODUCT & INDUSTRIAL DESIGN ROLES  ════════════════ */ evt({
        id: "elektron-technology",
        slug: "elektron-technology",
        start: "2015",
        end: "2015",
        sortOrder: 60,
        title: "Elektron Technology",
        subtitle: "Product & Industrial Designer",
        category: "Product Design",
        location: "Cambridge, UK",
        era: "early-career",
        theme: "dark",
        summary: "First professional industrial design role at Elektron Technology, Cambridge — designing medical devices, packaging systems, and optimising manufacturing processes in a highly regulated, precision-critical environment.",
        body: "Medical devices are where product design gets serious. At Elektron Technology, every design decision had regulatory weight, production cost implications, and real safety consequences. The role covered packaging design, componentry, flow-rate analysis, and a focused project re-engineering an assembly process to cut build time without compromising quality or compliance. This was industrial design practice at its most rigorous: evidence-led, manufacture-aware, and outcome-accountable. Working in a Cambridge-based technology environment also introduced the standards of cross-functional collaboration between design, engineering, and production teams that characterise high-performing product organisations.",
        achievements: [
            "Designed packaging and product components for a regulated medical device range",
            "Conducted flow-rate analysis to identify and eliminate manufacturing inefficiencies",
            "Reduced component assembly time through targeted process re-engineering",
            "Delivered industrial design outputs to regulatory and production quality standards",
            "Built cross-functional collaboration skills across design, engineering, and manufacturing teams"
        ],
        tags: [
            "product-design",
            "industrial-design",
            "medical-devices",
            "packaging-design",
            "manufacturing-process",
            "cross-functional-collaboration",
            "regulated-environment",
            "cambridge"
        ],
        status: "published",
        media: [
            {
                id: "et-1",
                type: "image",
                src: "/timeline/elektron-technology/product-lab.jpg",
                alt: "Product design and testing laboratory",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "et-2",
                type: "image",
                src: "/timeline/elektron-technology/assembly.jpg",
                alt: "Component assembly workstation",
                depth: 0.45,
                caption: "Medical device assembly process optimisation",
                sortOrder: 2
            },
            {
                id: "et-3",
                type: "image",
                src: "/timeline/elektron-technology/packaging.jpg",
                alt: "Medical packaging design iterations",
                depth: 0.65,
                caption: "Packaging design for regulated medical products",
                sortOrder: 3
            }
        ]
    }),
    /* ════════════════  LANCHESTER R&D FOUNDATION (Phase 2)  ════════════════ */ evt({
        id: "lanchester-founder",
        slug: "lanchester-founder",
        start: "2015",
        end: "2016",
        sortOrder: 70,
        title: "Lanchester Research",
        subtitle: "Founder — Product Startup Phase",
        category: "Venture",
        location: "UK",
        era: "lanchester-foundation",
        theme: "accent",
        featured: true,
        milestone: "Founded",
        summary: "The first formal Lanchester product venture: a full concept-to-prototype cycle covering user research, supplier sourcing, rapid prototyping, go-to-market planning, and business proposal development — running the complete product lifecycle as a solo founder.",
        body: "This was the first time the question became: can I build a product company from scratch? The answer required a full product lifecycle run-through in compressed time. Problem identification. Market validation through field research. Supplier sourcing and evaluation. Rapid prototyping. Web presence. Business proposals. Go-to-market thinking. Every stage of the product development lifecycle was owned end-to-end — no team, no safety net, no existing playbook. The prototype and field research generated real, actionable product insights. The experience established a repeatable methodology for moving from concept to validated evidence quickly — a discipline that has driven every subsequent venture to market faster and smarter.",
        achievements: [
            "Led end-to-end product development from concept validation to working prototype",
            "Conducted field research and user interviews to validate core product assumptions",
            "Sourced, evaluated, and negotiated with component suppliers",
            "Built product web presence and developed structured investor and partner business proposals",
            "Established a repeatable concept-to-prototype product development methodology"
        ],
        tags: [
            "lanchester",
            "founder",
            "product-strategy",
            "rapid-prototyping",
            "user-research",
            "go-to-market",
            "product-lifecycle",
            "venture-building"
        ],
        quote: "Move from concept to validated evidence fast — planning without proof is just storytelling.",
        links: [
            {
                label: "About Lanchester R&D",
                href: "/about"
            },
            {
                label: "Foundation",
                href: "/foundation"
            }
        ],
        status: "published",
        media: [
            {
                id: "lf-1",
                type: "image",
                src: "/timeline/lanchester-founder/prototype.jpg",
                alt: "Early Lanchester product prototype",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "lf-2",
                type: "image",
                src: "/timeline/lanchester-founder/field-research.jpg",
                alt: "Field research notes and observations",
                depth: 0.45,
                caption: "Field research informing early product decisions",
                sortOrder: 2
            },
            {
                id: "lf-3",
                type: "image",
                src: "/timeline/lanchester-founder/workspace.jpg",
                alt: "Founder workspace and planning materials",
                depth: 0.65,
                sortOrder: 3
            }
        ]
    }),
    /* ════════════════  PRODUCT & INDUSTRIAL DESIGN (continued)  ════════════════ */ evt({
        id: "ratstands",
        slug: "ratstands",
        start: "2016",
        end: "2017",
        sortOrder: 80,
        title: "RATstands",
        subtitle: "Product & Graphic Designer",
        category: "Product Design",
        location: "UK",
        era: "early-career",
        theme: "dark",
        summary: "Product and graphic designer at RATstands — a specialist music accessories brand whose products perform on concert stages at the world's top venues and touring productions. Designing objects where quality, reliability, and precision are non-negotiable.",
        body: "When your products appear on concert stages at elite international venues, the stakes are real. At RATstands, product design meant working to the exacting standards of professional musicians, ensemble coordinators, and touring production managers — people who rely on every product to perform without failure, night after night. The role covered physical product design, packaging, and graphic and brand collateral — a full-stack design responsibility requiring deep user empathy, structural product thinking, and brand consistency. This role reinforced a core product leadership principle: understand exactly how the end user experiences the product in context, not just how it looks on a specification sheet.",
        achievements: [
            "Designed specialist music accessories deployed at elite concert venues and international touring productions",
            "Delivered end-to-end product and graphic design across hardware, packaging, and brand collateral",
            "Applied human-centred design methods to highly specialised professional user requirements",
            "Maintained quality and brand consistency across a performance-critical product range"
        ],
        tags: [
            "product-design",
            "graphic-design",
            "human-centred-design",
            "brand-identity",
            "music-industry",
            "product-quality",
            "manufacturing"
        ],
        status: "published",
        media: [
            {
                id: "rat-1",
                type: "image",
                src: "/timeline/ratstands/product-range.jpg",
                alt: "RATstands product range on stage",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "rat-2",
                type: "image",
                src: "/timeline/ratstands/concert-venue.jpg",
                alt: "RATstands products in a concert hall",
                depth: 0.5,
                caption: "Products deployed in professional performance venues",
                sortOrder: 2
            },
            {
                id: "rat-3",
                type: "image",
                src: "/timeline/ratstands/design-detail.jpg",
                alt: "Product design detail and finish quality",
                depth: 0.7,
                sortOrder: 3
            }
        ]
    }),
    evt({
        id: "bigbrother-international",
        slug: "bigbrother-international",
        start: "2018",
        end: "2020",
        sortOrder: 90,
        title: "BigBrother International",
        subtitle: "Product & UX Designer",
        category: "UX Design",
        location: "Netherlands",
        era: "early-career",
        theme: "dark",
        summary: "Product and UX designer at BigBrother International — driving UX optimisation through systematic user research, iterative A/B and usability testing, and structured innovation pipeline work. First role where data, not opinion, led every design decision.",
        body: "BigBrother International was the first role where user research was a discipline, not an afterthought. UX optimisation here meant deep-diving into how users actually moved through complex workflows — identifying friction points, understanding mental models, and building evidence before designing solutions. A structured innovation funnel gave design a formal channel into business strategy: ideas were generated, filtered, scored, and developed with cross-functional teams that included product managers, engineers, and customer success leads. Iterative usability testing was built into the design process as a standard quality gate, not a final sign-off. This role established the data-driven UX methodology and cross-functional collaboration practices that became central to all subsequent design leadership work.",
        achievements: [
            "Drove UX optimisation across complex user workflows using iterative usability testing and user research",
            "Contributed to and helped run a structured innovation funnel feeding design insights into product strategy",
            "Established cross-functional collaboration processes with product management, engineering, and customer teams",
            "Built and applied data-driven UX frameworks for multi-step workflow design",
            "Introduced systematic A/B testing and usability evaluation as standard design process gates"
        ],
        tags: [
            "UX-design",
            "user-research",
            "usability-testing",
            "A/B-testing",
            "data-driven-design",
            "innovation-management",
            "cross-functional-collaboration",
            "product-strategy",
            "netherlands"
        ],
        status: "published",
        media: [
            {
                id: "bb-1",
                type: "image",
                src: "/timeline/bigbrother-international/ux-workshop.jpg",
                alt: "UX workshop and user research session",
                depth: 0.25,
                sortOrder: 1
            },
            {
                id: "bb-2",
                type: "image",
                src: "/timeline/bigbrother-international/product-screens.jpg",
                alt: "Product interface designs and wireframes",
                depth: 0.5,
                caption: "Iterative UX work across the core product",
                sortOrder: 2
            },
            {
                id: "bb-3",
                type: "image",
                src: "/timeline/bigbrother-international/team.jpg",
                alt: "Cross-functional team collaboration",
                depth: 0.7,
                sortOrder: 3
            }
        ]
    }),
    /* ════════════════  PRODUCT LEADERSHIP & SCALE  ════════════════ */ evt({
        id: "bunq",
        slug: "bunq",
        start: "2021",
        end: "2021",
        sortOrder: 100,
        title: "bunq",
        subtitle: "Senior Product Designer",
        category: "Product Leadership",
        location: "Amsterdam, Netherlands",
        era: "leadership",
        theme: "dark",
        featured: true,
        milestone: "8× output",
        summary: "Senior Product Designer at bunq — Europe's leading independent challenger bank. Built the design documentation infrastructure, design principles, and component standards that delivered an 8× increase in documented design output and transformed how the team worked.",
        body: "bunq ships fast, expects ownership, and has zero tolerance for process waste. As Senior Product Designer, the challenge was clear: build design systems and documentation infrastructure that could actually keep up with the pace of product delivery — and make the team's collective knowledge transferable, reusable, and scalable. That meant writing and publishing design principles, building shared component standards, establishing documentation workflows, and turning a team of strong individual designers into a cohesive unit with shared vocabulary and replicable decision-making frameworks. The result: an 8× increase in documented design output. More importantly, the team's capacity to move fast without losing quality improved permanently. bunq's culture of radical ownership, high autonomy, and deep accountability was exactly the environment where these skills were sharpened to their current edge.",
        achievements: [
            "Achieved 8× increase in documented design output through design systems and process optimisation",
            "Built and embedded product documentation infrastructure across the design organisation",
            "Developed and published core design principles aligned to product strategy and brand values",
            "Created shared component standards improving design-to-engineering handoff efficiency",
            "Drove team capability building, increasing design team throughput and quality consistency"
        ],
        tags: [
            "product-design",
            "design-systems",
            "component-library",
            "design-documentation",
            "team-capability-building",
            "fintech",
            "challenger-bank",
            "design-leadership",
            "amsterdam"
        ],
        links: [
            {
                label: "bunq",
                href: "https://www.bunq.com"
            }
        ],
        status: "published",
        media: [
            {
                id: "bunq-1",
                type: "image",
                src: "/timeline/bunq/hero.jpg",
                alt: "bunq Amsterdam office",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "bunq-2",
                type: "image",
                src: "/timeline/bunq/design-system.jpg",
                alt: "bunq design system and component library",
                depth: 0.45,
                caption: "Component standards and design principles",
                sortOrder: 2
            },
            {
                id: "bunq-3",
                type: "image",
                src: "/timeline/bunq/team.jpg",
                alt: "bunq product design team",
                depth: 0.6,
                caption: "Design team culture and collaboration",
                sortOrder: 3
            }
        ]
    }),
    evt({
        id: "ireckonu",
        slug: "ireckonu",
        start: "2021",
        end: "2022",
        sortOrder: 110,
        title: "IRECKONU",
        subtitle: "Lead Product Designer",
        category: "Product Leadership",
        location: "Amsterdam, Netherlands",
        era: "leadership",
        theme: "dark",
        summary: "Lead Product Designer at IRECKONU, a hospitality technology platform — owning the full design function: product stack optimisation, brand identity system, component-led UI architecture, and team leadership in a fast-moving B2B SaaS environment.",
        body: "IRECKONU connects hotels, guests, and operational systems in one platform. As Lead Product Designer, the role was to fix what existed, build what was missing, and lead the function that would deliver both. Product stack optimisation meant auditing every existing UI pattern, eliminating redundancy, and building consolidation strategy with engineering and product leadership. A new brand identity was developed and deployed across product and marketing surfaces — bringing IRECKONU's enterprise positioning into line with its actual product quality. The introduction of an atomic, component-led UI architecture transformed the design-to-development handoff: predictable, scalable, and quality-consistent. Leading the design team meant setting hiring standards, running design critiques, and representing design strategy at senior stakeholder and leadership level.",
        achievements: [
            "Optimised the product stack, eliminating UI inconsistency and improving system coherence",
            "Developed and deployed a new brand identity system across product and marketing",
            "Introduced atomic component-led UI architecture, improving design-to-development handoff quality",
            "Led, mentored, and grew the design team with clear quality standards and design process",
            "Represented design strategy at senior leadership and cross-functional stakeholder forums"
        ],
        tags: [
            "design-leadership",
            "product-design",
            "design-systems",
            "atomic-design",
            "component-library",
            "brand-identity",
            "B2B-SaaS",
            "hospitality-tech",
            "team-leadership",
            "stakeholder-management",
            "amsterdam"
        ],
        links: [
            {
                label: "IRECKONU",
                href: "https://www.ireckonu.com"
            }
        ],
        status: "published",
        media: [
            {
                id: "irec-1",
                type: "image",
                src: "/timeline/ireckonu/hero.jpg",
                alt: "IRECKONU product interface",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "irec-2",
                type: "image",
                src: "/timeline/ireckonu/brand-identity.jpg",
                alt: "IRECKONU brand identity system",
                depth: 0.45,
                caption: "Brand identity and product visual language",
                sortOrder: 2
            },
            {
                id: "irec-3",
                type: "image",
                src: "/timeline/ireckonu/component-system.jpg",
                alt: "Component-led UI system",
                depth: 0.6,
                caption: "Component architecture reducing interface inconsistency",
                sortOrder: 3
            }
        ]
    }),
    evt({
        id: "xpate",
        slug: "xpate",
        start: "2022",
        end: "2023",
        sortOrder: 120,
        title: "xpate",
        subtitle: "Head of Product Design",
        category: "Product Leadership",
        location: "Amsterdam, Netherlands",
        era: "leadership",
        theme: "dark",
        featured: true,
        milestone: "205 days to launch",
        summary: "Joined xpate as employee #8 and Head of Product Design — and built the entire product design function from zero. Style guide, design processes, product workflows, and a live product in the hands of 100 real users. In 205 days.",
        body: "Joining a seed-stage startup as employee #8 means one thing: everything needs to be built. At xpate, a fintech payments platform, the design function didn't exist before day one. The job was to create it — fast, properly, and in parallel with a team that was simultaneously building the engineering stack, the sales pipeline, and the compliance framework. A comprehensive product style guide was created from scratch. Design-to-development workflows were established. Sprint planning and design review processes were introduced. Product decisions were made, owned, and shipped. The launch milestone — 100 active users — was hit in 205 days. The xpate experience is the clearest proof point that speed and quality are not opposites: with the right design systems, process discipline, and stakeholder alignment, both are achievable together.",
        achievements: [
            "Built xpate's entire product design function as employee #8 and Head of Product Design",
            "Created comprehensive product style guide and design system from the ground up",
            "Established design-to-development workflows, sprint planning, and design review processes",
            "Launched product to 100 active users in 205 days from a standing start",
            "Maintained design quality and product consistency across all product surfaces simultaneously"
        ],
        tags: [
            "head-of-product-design",
            "design-leadership",
            "fintech",
            "payments",
            "startup",
            "design-systems",
            "style-guide",
            "product-strategy",
            "sprint-planning",
            "go-to-market",
            "amsterdam"
        ],
        links: [
            {
                label: "xpate",
                href: "https://www.xpate.com"
            }
        ],
        status: "published",
        media: [
            {
                id: "xp-1",
                type: "image",
                src: "/timeline/xpate/hero.jpg",
                alt: "xpate product dashboard",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "xp-2",
                type: "image",
                src: "/timeline/xpate/style-guide.jpg",
                alt: "xpate product style guide",
                depth: 0.45,
                caption: "Style guide built from scratch at a seed-stage startup",
                sortOrder: 2
            },
            {
                id: "xp-3",
                type: "image",
                src: "/timeline/xpate/launch.jpg",
                alt: "xpate product launch milestone",
                depth: 0.6,
                caption: "Product live to 100 active users in 205 days",
                sortOrder: 3
            },
            {
                id: "xp-4",
                type: "image",
                src: "/timeline/xpate/team-early.jpg",
                alt: "Early xpate team of eight",
                depth: 0.75,
                sortOrder: 4
            }
        ]
    }),
    evt({
        id: "lanchester-sentistic",
        slug: "lanchester-sentistic",
        start: "2023",
        end: "2023",
        sortOrder: 130,
        title: "Lanchester R&D — Freelance & Sentistic",
        subtitle: "Freelance Product Design & Startup Advisory",
        category: "Freelance",
        location: "Remote / Netherlands",
        era: "leadership",
        theme: "accent",
        milestone: "Lanchester re-activated",
        summary: "Lanchester R&D re-activated as an independent design and advisory practice — delivering startup builds, Agile/Scrum coaching, and a deep end-to-end product engagement with Sentistic, an energy and power optimisation startup.",
        body: "After xpate, the deliberate move was back to independent practice — and to the Lanchester identity that had been running as a thread since the beginning. Freelance client work covered startup website design and builds, promotional content strategy, and Agile and Scrum coaching for early-stage founders who needed process as much as product. The standout engagement was with Sentistic: an energy and power optimisation startup where the scope ran from prototype support and packaging design through to branding, a demo application, and full product roadmap alignment. Sentistic was a reminder of what makes advisory work powerful when done properly — it's not consulting at a distance, it's building alongside the team with the same commitment as a co-founder. The energy sector engagement also reinforced a long-held belief: systems that manage power efficiently will matter enormously in the decade ahead.",
        achievements: [
            "Delivered product design, website builds, and promotional content for multiple startup clients",
            "Provided Agile methodology coaching and Scrum facilitation to early-stage product teams",
            "Led end-to-end brand identity, packaging design, and prototype development for Sentistic",
            "Built and shipped a demo application supporting Sentistic's investor and partner pipeline",
            "Delivered product roadmap alignment and go-to-market strategy advisory for Sentistic"
        ],
        tags: [
            "lanchester",
            "freelance",
            "product-strategy",
            "agile-methodology",
            "scrum-facilitation",
            "brand-identity",
            "prototyping",
            "go-to-market",
            "startup-advisory",
            "energy-tech",
            "sentistic"
        ],
        links: [
            {
                label: "About Lanchester R&D",
                href: "/about"
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/timdraper"
            }
        ],
        status: "published",
        media: [
            {
                id: "sent-1",
                type: "image",
                src: "/timeline/lanchester-sentistic/desk.jpg",
                alt: "Lanchester freelance workspace",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "sent-2",
                type: "image",
                src: "/timeline/lanchester-sentistic/sentistic-brand.jpg",
                alt: "Sentistic branding and packaging work",
                depth: 0.45,
                caption: "Brand and packaging design for Sentistic",
                sortOrder: 2
            },
            {
                id: "sent-3",
                type: "image",
                src: "/timeline/lanchester-sentistic/sentistic-demo.jpg",
                alt: "Sentistic demo application interface",
                depth: 0.65,
                caption: "Demo app built to support Sentistic's investor pipeline",
                sortOrder: 3
            }
        ]
    }),
    /* ════════════════  FOUNDER ERA  ════════════════ */ evt({
        id: "imediate-foundation",
        slug: "imediate-foundation",
        start: "2024",
        end: "2025",
        sortOrder: 140,
        title: "The iMediate Foundation",
        subtitle: "Co-Founder — Co-Parenting Platform",
        category: "Founder",
        location: "Remote / Netherlands",
        era: "founder",
        theme: "accent",
        featured: true,
        milestone: "Co-founded",
        summary: "Co-founded The iMediate Foundation — a co-parenting platform built to reduce conflict and improve communication for separated families. Scheduling tools, WhatsApp automation, ICS calendar export, Firebase backend, and a real go-to-market strategy. Built to matter.",
        body: "Co-parenting after separation is one of the most emotionally complex, practically difficult challenges millions of families face every day. iMediate was built to solve it properly — not with another generic calendar app, but with a product designed specifically around the communication, scheduling, and legal-readiness needs of co-parents who need tools that work under stress. The product scope included structured shared scheduling, WhatsApp automation to reduce the burden of manual coordination, ICS calendar export for legal and court-ready documentation, and a Firebase backend architected for realtime reliability. Beyond the product, iMediate required a complete go-to-market strategy: partnership outreach with family law practitioners and mediation organisations, investor pitch decks, user acquisition strategy, and competitive positioning. The Foundation naming was intentional — this is mission-first, with commercial sustainability built on top.",
        achievements: [
            "Co-founded The iMediate Foundation and led product strategy, design, and go-to-market execution",
            "Built scheduling, automated communication, and legal-readiness features including ICS calendar export",
            "Implemented WhatsApp automation reducing manual coordination burden for co-parents",
            "Architected Firebase backend with realtime coordination, authentication, and data reliability",
            "Developed investor pitch decks, partnership outreach strategy, and GTM documentation"
        ],
        tags: [
            "founder",
            "product-strategy",
            "firebase",
            "whatsapp-automation",
            "go-to-market",
            "mobile-app",
            "family-tech",
            "legal-tech",
            "mission-driven",
            "co-parenting"
        ],
        links: [
            {
                label: "iMediate",
                href: "https://download.imediate.im"
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/timdraper"
            }
        ],
        status: "published",
        media: [
            {
                id: "im-1",
                type: "image",
                src: "/timeline/imediate/hero.jpg",
                alt: "iMediate app interface — scheduling and co-parenting tools",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "im-2",
                type: "image",
                src: "/timeline/imediate/scheduling.jpg",
                alt: "iMediate scheduling feature",
                depth: 0.45,
                caption: "Structured scheduling to reduce coordination conflict",
                sortOrder: 2
            },
            {
                id: "im-3",
                type: "image",
                src: "/timeline/imediate/whatsapp-flow.jpg",
                alt: "WhatsApp automation flow diagrams",
                depth: 0.6,
                caption: "WhatsApp automation reducing manual coordination",
                sortOrder: 3
            },
            {
                id: "im-4",
                type: "image",
                src: "/timeline/imediate/gtm-deck.jpg",
                alt: "iMediate GTM strategy deck",
                depth: 0.75,
                caption: "Go-to-market strategy and partnership development",
                sortOrder: 4
            }
        ]
    }),
    evt({
        id: "shootatlas",
        slug: "shootatlas",
        start: "2025",
        end: "2025",
        sortOrder: 150,
        title: "ShootAtlas",
        subtitle: "Founder — AI Creative Production Management",
        category: "Founder",
        location: "Remote",
        era: "founder",
        theme: "accent",
        featured: true,
        milestone: "MVP in 4 weeks",
        summary: "Founded ShootAtlas — an AI-powered creative production management platform. MVP shipped in under four weeks, covering a full 16-step production lifecycle, marketplace, multi-currency payments, and Stripe billing. This is what product velocity looks like when the methodology is proven.",
        body: "Creative production runs on chaos: scattered briefs, email chains, manually tracked timelines, and invoices that arrive weeks late. ShootAtlas was built to end that. The platform maps the entire creative production lifecycle — all 16 steps, from brief intake through talent booking, shoot day management, asset review, delivery, and invoicing — into one coherent, intelligent system. AI is embedded at key workflow decision points, not bolted on as a feature flag. A marketplace layer connects clients directly with vetted production professionals, with multi-currency support and Stripe billing making the platform globally ready from day one. The MVP was built in under four weeks — not because corners were cut, but because the product development methodology was already validated across multiple previous ventures. Workflow first. Features second. Ship when it works.",
        achievements: [
            "Founded ShootAtlas and shipped AI-powered creative production management MVP in under four weeks",
            "Designed and implemented a complete 16-step creative production lifecycle in the core platform",
            "Built two-sided marketplace enabling client-to-professional discovery and booking",
            "Integrated multi-currency support and end-to-end Stripe billing from initial launch",
            "Applied proven product development methodology to achieve rapid time-to-market without quality compromise"
        ],
        tags: [
            "founder",
            "AI",
            "product-strategy",
            "marketplace",
            "creative-production",
            "stripe-payments",
            "multi-currency",
            "MVP",
            "go-to-market",
            "rapid-product-development",
            "photography"
        ],
        links: [
            {
                label: "ShootAtlas",
                href: "https://www.shootatlas.com"
            }
        ],
        status: "published",
        media: [
            {
                id: "sa-1",
                type: "image",
                src: "/timeline/shootatlas/hero.jpg",
                alt: "ShootAtlas platform dashboard",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "sa-2",
                type: "image",
                src: "/timeline/shootatlas/production-flow.jpg",
                alt: "ShootAtlas 16-step production lifecycle",
                depth: 0.45,
                caption: "16-step creative production lifecycle — built in the product",
                sortOrder: 2
            },
            {
                id: "sa-3",
                type: "image",
                src: "/timeline/shootatlas/marketplace.jpg",
                alt: "ShootAtlas marketplace — creative professionals",
                depth: 0.6,
                caption: "Marketplace connecting clients with production professionals",
                sortOrder: 3
            },
            {
                id: "sa-4",
                type: "image",
                src: "/timeline/shootatlas/billing.jpg",
                alt: "ShootAtlas multi-currency Stripe billing",
                depth: 0.75,
                sortOrder: 4
            }
        ]
    }),
    evt({
        id: "guerilla-kitchen",
        slug: "guerilla-kitchen",
        start: "2025",
        end: "2025",
        sortOrder: 160,
        title: "Guerilla Kitchen",
        subtitle: "Founder — Community Food Operations Platform",
        category: "Founder",
        location: "Remote / UK",
        era: "founder",
        theme: "accent",
        featured: true,
        milestone: "No-shows from 7→1",
        summary: "Founded Guerilla Kitchen — a community food operations platform that replaced manual allocation chaos with a fairness-based algorithm. No-shows dropped from ~7 to 1 per session. Volunteer admin time cut dramatically. Multi-client architecture built for scale from day one.",
        body: "Good intentions don't run efficient operations — systems do. Guerilla Kitchen was built around a simple thesis: community kitchens are doing vital work with no operational infrastructure, and that's fixable with product thinking. The platform replaced manual food distribution decisions with a transparent, fairness-based allocation algorithm — removing discretion, removing conflict, and removing the inconsistency that eroded trust between volunteers and beneficiaries. The results were immediate and measurable: no-shows dropped from approximately seven per session to one. Volunteer coordination and administration time was cut significantly. And because the platform was architected from day one for multi-tenant deployment, a single product instance now serves multiple community kitchen clients simultaneously — no per-client rebuilds, no implementation overhead. Impact at scale, built with the same product rigour applied to commercial products.",
        achievements: [
            "Founded Guerilla Kitchen and designed the core fairness-based food allocation algorithm",
            "Reduced session no-shows from approximately 7 to 1 through automated allocation logic",
            "Significantly cut volunteer coordination and administration time per session",
            "Built multi-tenant platform architecture supporting multiple community kitchen clients from launch",
            "Demonstrated measurable social impact outcomes through data-driven product design"
        ],
        tags: [
            "founder",
            "social-impact",
            "product-strategy",
            "algorithm-design",
            "multi-tenant-architecture",
            "community",
            "operational-efficiency",
            "data-driven-design",
            "volunteer-coordination"
        ],
        links: [
            {
                label: "Guerilla Kitchen",
                href: "https://www.guerillakitchen.org"
            }
        ],
        status: "published",
        media: [
            {
                id: "gk-1",
                type: "image",
                src: "/timeline/guerilla-kitchen/hero.jpg",
                alt: "Guerilla Kitchen operations platform",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "gk-2",
                type: "image",
                src: "/timeline/guerilla-kitchen/allocation-flow.jpg",
                alt: "Fairness-based allocation system diagram",
                depth: 0.45,
                caption: "Fairness-based allocation replacing manual distribution",
                sortOrder: 2
            },
            {
                id: "gk-3",
                type: "image",
                src: "/timeline/guerilla-kitchen/kitchen-ops.jpg",
                alt: "Community kitchen operations and volunteer coordination",
                depth: 0.6,
                caption: "Platform reducing volunteer workload across multiple kitchens",
                sortOrder: 3
            }
        ]
    }),
    evt({
        id: "fluffybutt",
        slug: "fluffybutt",
        start: "2026",
        sortOrder: 170,
        title: "fluffybutt",
        subtitle: "Founder — Apple Ecosystem Pet Fostering Platform",
        category: "Founder",
        location: "Remote",
        era: "founder",
        theme: "accent",
        featured: true,
        milestone: "Apple ecosystem MVP",
        summary: "Founded fluffybutt — a native Apple ecosystem platform connecting animal shelters, foster carers, and adopters. Live foster updates, shelter management portal, structured care logging, and analytics-ready event architecture. Built for the people who give animals a second chance.",
        body: "The animal rescue sector is driven by passion and held back by fragmented communication. Shelters have no visibility of what's happening in foster placements. Foster carers feel unsupported between check-ins. Adopters make decisions with incomplete information. fluffybutt was built to fix all three — with a native, multi-platform Apple ecosystem experience: iOS, iPadOS, and macOS. The product gives shelters a real-time management portal, gives foster carers a structured update and logging flow, and gives adopters meaningful visibility into the animals they're considering. The event architecture is analytics-ready from day one — built to support data-driven insights into placement success rates, care patterns, and adoption outcomes at scale. Native was a deliberate product decision: the emotional nature of fostering and adoption interactions demands experiences that feel polished, personal, and reliable — exactly what native Apple development delivers.",
        achievements: [
            "Founded fluffybutt and shipped a multi-platform Apple ecosystem MVP (iOS, iPadOS, macOS)",
            "Built real-time shelter management portal and live foster update flows",
            "Implemented structured care event logging with analytics-ready architecture",
            "Designed event data model supporting future placement pattern analysis at scale",
            "Delivered a polished, native Apple experience optimised for emotionally-engaged user interactions"
        ],
        tags: [
            "founder",
            "iOS",
            "iPadOS",
            "macOS",
            "apple-ecosystem",
            "native-app-development",
            "product-strategy",
            "analytics-architecture",
            "structured-logging",
            "animal-welfare",
            "social-impact",
            "pet-fostering"
        ],
        status: "published",
        media: [
            {
                id: "fb-1",
                type: "image",
                src: "/timeline/fluffybutt/hero.jpg",
                alt: "fluffybutt app on iPhone",
                depth: 0.2,
                sortOrder: 1
            },
            {
                id: "fb-2",
                type: "image",
                src: "/timeline/fluffybutt/shelter-portal.jpg",
                alt: "fluffybutt shelter management portal",
                depth: 0.45,
                caption: "Shelter portal giving real-time visibility of foster placements",
                sortOrder: 2
            },
            {
                id: "fb-3",
                type: "image",
                src: "/timeline/fluffybutt/foster-feed.jpg",
                alt: "Live foster updates feed",
                depth: 0.6,
                caption: "Live foster updates — connecting carers with shelters in realtime",
                sortOrder: 3
            },
            {
                id: "fb-4",
                type: "image",
                src: "/timeline/fluffybutt/analytics-events.jpg",
                alt: "Analytics-ready event architecture diagram",
                depth: 0.75,
                caption: "Event architecture built for long-term placement pattern analysis",
                sortOrder: 4
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
"[project]/app/founder/timeline/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelinePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/timeline/TimelineScroller.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/timeline.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TimelinePage() {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineEvents"]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineCategories"]);
    const [apiLoading, setApiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelinePage.useEffect": ()=>{
            fetch("/api/timeline/events").then({
                "TimelinePage.useEffect": (r)=>{
                    if (!r.ok) throw new Error("API unavailable");
                    return r.json();
                }
            }["TimelinePage.useEffect"]).then({
                "TimelinePage.useEffect": (data)=>{
                    if (data.length > 0) {
                        setEvents(data);
                        setCategories([
                            ...new Set(data.map({
                                "TimelinePage.useEffect": (e)=>e.category
                            }["TimelinePage.useEffect"]))
                        ]);
                    }
                    setApiLoading(false);
                }
            }["TimelinePage.useEffect"]).catch({
                "TimelinePage.useEffect": ()=>{
                    // Fallback to static data (already set as defaults)
                    setApiLoading(false);
                }
            }["TimelinePage.useEffect"]);
        }
    }["TimelinePage.useEffect"], []);
    /* Hide page scrollbar while timeline is mounted */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelinePage.useEffect": ()=>{
            document.documentElement.classList.add("scrollbar-none");
            return ({
                "TimelinePage.useEffect": ()=>document.documentElement.classList.remove("scrollbar-none")
            })["TimelinePage.useEffect"];
        }
    }["TimelinePage.useEffect"], []);
    const scrollToTimeline = ()=>{
        const el = document.getElementById("timeline-start");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background min-h-screen",
        children: [
            apiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 z-[9999] h-[2px] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-accent animate-[loading-bar_1.4s_ease-in-out_infinite]"
                }, void 0, false, {
                    fileName: "[project]/app/founder/timeline/page.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/founder/timeline/page.tsx",
                lineNumber: 41,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-32 md:py-40 px-6 md:px-12 border-b border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Autobiography",
                            title: "The Timeline.",
                            description: "A chronological map of the journey — from early exploration through design, research, and venture building."
                        }, void 0, false, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToTimeline,
                            className: "btn-primary flex items-center gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Begin"
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "group-hover:translate-x-1 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 12h14M12 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/founder/timeline/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors",
                                    children: "Open Admin"
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin/timeline",
                                    className: "px-4 py-3 border border-white/20 text-white/70 hover:text-accent hover:border-accent/30 transition-colors",
                                    children: "Timeline Editor"
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/founder/timeline/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/founder/timeline/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "timeline-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$timeline$2f$TimelineScroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    events: events,
                    eras: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineEras"],
                    categories: categories,
                    initialEventId: "xpate"
                }, void 0, false, {
                    fileName: "[project]/app/founder/timeline/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/founder/timeline/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LearnCTA, {}, void 0, false, {
                fileName: "[project]/app/founder/timeline/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/founder/timeline/page.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_s(TimelinePage, "GrUnSfEIc9zN6syQMiHKwmg7bG8=");
_c = TimelinePage;
/* ─── Pinned LEARN CTA ─── */ function LearnCTA() {
    _s1();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pinned, setPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LearnCTA.useEffect": ()=>{
            const onScroll = {
                "LearnCTA.useEffect.onScroll": ()=>{
                    const el = wrapRef.current;
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const entering = rect.top <= 0;
                    const exiting = rect.bottom <= window.innerHeight;
                    setPinned(entering && !exiting);
                }
            }["LearnCTA.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            onScroll();
            return ({
                "LearnCTA.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["LearnCTA.useEffect"];
        }
    }["LearnCTA.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        id: "whats-next",
        className: "hidden md:block relative",
        style: {
            height: "200vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-40 h-screen w-screen transition-opacity duration-500 ${pinned ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative h-full flex items-center justify-center px-6 md:px-12 bg-background-layer1 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0 opacity-[0.04]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[linear-gradient(to_right,#a3e635_1px,transparent_1px),linear-gradient(to_bottom,#a3e635_1px,transparent_1px)] bg-[size:80px_80px]"
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/20 rounded-full animate-drift"
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto text-center space-y-10 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analytical-label text-accent",
                                            children: "What’s Next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-5xl font-bold tracking-tightest uppercase",
                                            children: "See What We’re Building Now."
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-muted leading-relaxed font-medium max-w-2xl mx-auto",
                                    children: "The timeline captures the past. LEARN — the Lanchester Early Access Research Network — is where live projects, future systems, and active experiments unfold in real time. Follow what’s next."
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center justify-center gap-6 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://learn.lanchesterresearchanddesign.com/products",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "btn-primary flex items-center gap-3 group w-full sm:w-auto px-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Explore LEARN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "group-hover:translate-x-1 transition-transform",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/founder/timeline/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/research/learn-launchpad",
                                            className: "btn-ghost w-full sm:w-auto px-12",
                                            children: "Read the Case Study"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-10 flex justify-center gap-12 items-center opacity-30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-24 bg-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[9px] uppercase tracking-[0.4em]",
                                            children: "LEARN // Active"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-24 bg-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/founder/timeline/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/founder/timeline/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative py-32 px-6 md:px-12 border-t border-white/5 bg-background-layer1 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0 opacity-[0.04]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(to_right,#a3e635_1px,transparent_1px),linear-gradient(to_bottom,#a3e635_1px,transparent_1px)] bg-[size:80px_80px]"
                            }, void 0, false, {
                                fileName: "[project]/app/founder/timeline/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto text-center space-y-10 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analytical-label text-accent",
                                            children: "What’s Next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-5xl font-bold tracking-tightest uppercase",
                                            children: "See What We’re Building Now."
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-muted leading-relaxed font-medium max-w-2xl mx-auto",
                                    children: "The timeline captures the past. LEARN is where live projects and active experiments unfold in real time."
                                }, void 0, false, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-6 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://learn.lanchesterresearchanddesign.com/products",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "btn-primary flex items-center gap-3 group w-full px-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Explore LEARN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "group-hover:translate-x-1 transition-transform",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/founder/timeline/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/research/learn-launchpad",
                                            className: "btn-ghost w-full px-12",
                                            children: "Read the Case Study"
                                        }, void 0, false, {
                                            fileName: "[project]/app/founder/timeline/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/founder/timeline/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/founder/timeline/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/founder/timeline/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/founder/timeline/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/founder/timeline/page.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
_s1(LearnCTA, "/MH61/77/l0Xj1Ta8XhkEJkFqKU=");
_c1 = LearnCTA;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimelinePage");
__turbopack_context__.k.register(_c1, "LearnCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3f3f2527._.js.map