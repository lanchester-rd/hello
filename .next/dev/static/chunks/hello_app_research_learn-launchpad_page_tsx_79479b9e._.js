(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hello/app/research/learn-launchpad/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnLaunchpadPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function LearnLaunchpadPage() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const heroOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.15
    ], [
        1,
        0
    ]);
    const heroScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.15
    ], [
        1,
        0.92
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "min-h-screen bg-[#080807] text-[#d8d4c8] font-sans selection:bg-yellow-400/20 selection:text-yellow-200 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0 opacity-[0.06]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[linear-gradient(to_right,#c8a84b_1px,transparent_1px),linear-gradient(to_bottom,#c8a84b_1px,transparent_1px)] bg-[size:80px_80px]"
                }, void 0, false, {
                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: heroOpacity,
                            scale: heroScale
                        },
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(202,163,50,0.07)_0%,transparent_65%)]"
                            }, void 0, false, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KnowledgeGraph, {}, void 0, false, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto w-full relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/research",
                                    className: "inline-flex items-center gap-3 text-white/20 hover:text-yellow-400 transition-all group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-yellow-400 transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px] uppercase tracking-[0.4em] font-bold",
                                            children: "LT // BUILD-LOG"
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-12 gap-12 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-8 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    className: "font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 block",
                                                    children: "Product Engineering // Post-Mortem"
                                                }, void 0, false, {
                                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        delay: 0.1
                                                    },
                                                    className: "text-6xl md:text-[9rem] font-bold tracking-tightest uppercase leading-[0.85] text-white",
                                                    children: [
                                                        "The LEARN",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 46
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-400/90",
                                                            children: "Launchpad."
                                                        }, void 0, false, {
                                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-4 pb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg md:text-xl text-white/40 font-medium leading-relaxed border-l-2 border-yellow-400/30 pl-8 italic",
                                                children: '"One identity. One trust layer. Every product, one front door. Getting there took three rewrites."'
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-12 bottom-12 hidden md:flex flex-col gap-6 border-r border-white/10 pr-8",
                        children: [
                            {
                                label: 'Critical Failures',
                                val: '10'
                            },
                            {
                                label: 'Architecture Rewrites',
                                val: '03'
                            },
                            {
                                label: 'System Stable',
                                val: '01'
                            }
                        ].map(({ label, val })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right space-y-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[8px] uppercase tracking-widest text-white/20",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-yellow-400/70 font-mono",
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid lg:grid-cols-12 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 self-start sticky top-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 mb-4",
                                        children: "01 // Origin"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold uppercase tracking-tightest text-white leading-tight",
                                        children: [
                                            "Why We",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 119
                                            }, this),
                                            "Built It."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 space-y-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-white/60 leading-relaxed font-light",
                                        children: "LEARN — the Lanchester Early Access Research Network — is a centralised platform that lets users discover, follow, and access early-stage apps and experiments from a single identity: their LEARNid. It acts as a controlled gateway where access to products is tied to user intent, enabling structured onboarding, feedback collection, and usage tracking across Lanchester's entire product ecosystem."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/40 leading-relaxed",
                                        children: "For builders, LEARN provides tools to manage waitlists, referrals, access permissions, and direct communication with early users. The goal: turn fragmented product launches into a unified, data-driven ecosystem for testing, iteration, and growth. A single identity. A single trust layer. Every product, one front door."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 bg-yellow-400/5 border border-yellow-400/20 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-mono text-[9px] uppercase tracking-widest text-yellow-400",
                                                children: "The Core Hypothesis"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-white leading-tight italic",
                                                children: '"A unified identity layer across all early-access products eliminates fragmented onboarding, creates a single trust boundary, and gives builders meaningful signal on user intent from day one."'
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/40 leading-relaxed",
                                        children: "The hypothesis was right. The execution, the first few times, was not."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-px bg-white/5 border border-white/5",
                                        children: [
                                            {
                                                val: '10',
                                                label: 'Failures Documented'
                                            },
                                            {
                                                val: '3',
                                                label: 'Architecture Rewrites'
                                            },
                                            {
                                                val: '1',
                                                label: 'Stable System'
                                            }
                                        ].map(({ val, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#0a0908] p-8 text-center space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-4xl font-bold text-yellow-400",
                                                        children: val
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-[9px] uppercase tracking-widest text-white/30",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 103,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid lg:grid-cols-12 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 self-start sticky top-32 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60",
                                        children: "02 // What Broke"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold uppercase tracking-tightest text-white leading-tight",
                                        children: [
                                            "Ten",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 116
                                            }, this),
                                            "Failures,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 131
                                            }, this),
                                            "Three",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 142
                                            }, this),
                                            "Themes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/30 leading-relaxed font-mono",
                                        children: "Most of these weren't bugs. They were system-level concerns treated as UI problems."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 space-y-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeDivider, {
                                                label: "Theme A // Identity & Trust"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "01",
                                                title: "We split auth and legal across two apps.",
                                                body: "We initially built critical user journeys — auth in one Vite app, legal acceptance in a separate Next.js app — treating them as independent concerns. This technically worked. But users were asked to agree in one place and authenticate in another. There was no way to enforce compliance or maintain a coherent mental model. It felt stitched together because it was.",
                                                lesson: "Anything tied to identity or compliance must live inside a single system boundary."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "02",
                                                title: "Our auth flow was visually correct but logically wrong.",
                                                body: "We placed a legal acceptance checkbox on the sign-in page. Clean, simple, obvious. Except OAuth and magic-link flows completely bypassed that UI layer. Users could authenticate without ever seeing — let alone interacting with — the checkbox. The system looked compliant. It wasn't.",
                                                lesson: "Auth enforcement must happen post-auth at the backend. UI state is not a contract."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "03",
                                                title: "We had no concept of versioned truth.",
                                                body: "Terms and Privacy were static pages. Not system data. So we couldn't answer basic compliance questions: Did this user accept the current version? When did they accept it? What happens when terms change? Nothing re-triggered consent. Nothing was auditable. Nothing was legally defensible.",
                                                lesson: "Policy documents must be versioned, queryable, and enforced like data — not content."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "04",
                                                title: "The backend had no schema for legal acceptance.",
                                                body: "There was no data model for legal state at all. The backend couldn't distinguish between a user who had never accepted, accepted an old version, or accepted the current one. You can't enforce state you can't represent. The feature didn't exist — it only appeared to.",
                                                lesson: "If the data model doesn't exist, neither does the feature."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeDivider, {
                                                label: "Theme B // Infrastructure"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "05",
                                                title: "Simple routing was a system-level security risk.",
                                                body: "We added vanity routes like /iru-assistant alongside /products/:slug, treating routing as a UI decision. Routing order and catch-all patterns caused valid pages to silently misresolve. Reserved paths like /admin and /api were at risk. Debugging pointed in the wrong direction because the failure mode was non-obvious.",
                                                lesson: "Routing is core infrastructure with security implications — not a UI configuration."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "06",
                                                title: "Implicit behavior drove critical product outcomes.",
                                                body: "We allowed fallback redirect logic (beta_cta_url) to determine launch behavior when a product wasn't explicitly configured. Products could silently redirect users to external sites without anyone making an intentional decision. We optimised for convenience and created a trust and security liability.",
                                                lesson: "Critical behavior — especially redirects — must be explicit, not inferred from defaults."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "07",
                                                title: "Deployment inconsistencies created ghost bugs.",
                                                body: "Different domains were serving different frontend bundles. One URL worked perfectly. Another showed bugs we'd already fixed. Same codebase, same deploy. It looked like mysterious regressions, slowed debugging massively, and eroded confidence in every fix we shipped.",
                                                lesson: "Multi-domain setups require strict deployment consistency and post-deploy verification."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeDivider, {
                                                label: "Theme C // Integration"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "08",
                                                title: "A single failed request collapsed the entire page.",
                                                body: "The /products/:slug page used Promise.all to fetch data. One failed sub-request — from a completely healthy API — caused the whole page to throw 'not found'. We spent time debugging routing when the issue was fault tolerance in our aggregation layer.",
                                                lesson: "UI aggregation should use Promise.allSettled — partial failure should degrade gracefully, not collapse."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "09",
                                                title: "Email delivery was a completely separate system problem.",
                                                body: "After fixing all the app logic, emails still failed. The system was generating links, dispatching requests, logging success — and still not delivering to users. The failures were upstream: provider reputation, SPF/DKIM/DMARC configuration, recipient-side filtering. You can't reproduce this locally. The feedback loop only exists in production.",
                                                lesson: "Email is not a feature — it's an external system with its own failure modes and reputation lifecycle."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FailureCard, {
                                                n: "10",
                                                title: "Verification required real-world conditions, not just code.",
                                                body: "Final validation depended on OAuth providers, real inboxes, and real user acceptance states (stale vs. current terms). We couldn't fully test this in isolation — not from lack of discipline, but because some systems are inherently integration-heavy and only surface their failure modes under live conditions.",
                                                lesson: "Some systems require production-like thinking. Code correctness is necessary but not sufficient."
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 142,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid lg:grid-cols-12 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 self-start sticky top-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 mb-4",
                                        children: "03 // The Reframe"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold uppercase tracking-tightest text-white leading-tight",
                                        children: [
                                            "The Gold",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 121
                                            }, this),
                                            "Insight."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 181,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-10 bg-yellow-400/5 border border-yellow-400/30 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-mono text-[9px] uppercase tracking-widest text-yellow-400",
                                                children: "Pattern Recognition"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-white leading-tight",
                                                children: '"Most of the failures weren\'t bugs — they were cases where we treated system-level concerns as UI or configuration problems."'
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/50 leading-relaxed",
                                        children: "Auth isn't a form. Legal acceptance isn't a checkbox. Routing isn't a component. Email delivery isn't a function call. Each of these is a system with state, enforcement surfaces, failure modes, and external dependencies. We had to fail at each one to see it clearly."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/50 leading-relaxed",
                                        children: "The moment we reframed them — as stateful, enforceable, backend-driven systems that the UI merely surfaces — the architecture became stable. The failures stopped stacking. Problems that had felt random became predictable because we understood their actual nature."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-3 gap-px bg-white/5 border border-white/5",
                                        children: [
                                            {
                                                before: 'Checkbox on sign-in page',
                                                after: 'Post-auth gate on every backend request',
                                                label: 'Legal'
                                            },
                                            {
                                                before: 'Static /terms page',
                                                after: 'Versioned Firestore document with timestamps',
                                                label: 'Terms'
                                            },
                                            {
                                                before: 'UI component routing',
                                                after: 'Server-enforced paths + reserved-path allow-list',
                                                label: 'Routing'
                                            }
                                        ].map(({ before, after, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#0a0908] p-8 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-[9px] uppercase tracking-widest text-yellow-400/60",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-white/20 line-through",
                                                                children: before
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white/80 font-medium",
                                                                children: after
                                                            }, void 0, false, {
                                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid lg:grid-cols-12 gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 self-start sticky top-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.5em] text-yellow-400/60 mb-4",
                                        children: "04 // What Shipped"
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold uppercase tracking-tightest text-white leading-tight",
                                        children: [
                                            "The",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 116
                                            }, this),
                                            "System",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 128
                                            }, this),
                                            "Today."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/50 leading-relaxed",
                                        children: "LEARN is live. Users sign in once with their LEARNid — via magic link or OAuth — and gain access to the products they've been granted permission for. Legal acceptance is enforced at the backend, version-tracked in Firestore, and re-triggered when terms change. Products are canonical data records with configurable access rules, not hardcoded routes."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/50 leading-relaxed",
                                        children: "Builders can manage waitlists, control access per product, track usage and cohort behaviour, and communicate directly with early users — all from a single admin layer. Routing is server-enforced with a reserved-path allow-list. Email delivery runs over a warmed domain with SPF/DKIM/DMARC in place. Each system layer is independently enforceable — not wired through the UI."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-mono text-[9px] uppercase tracking-widest text-white/30",
                                                children: "Tech Stack"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    'Vite + React',
                                                    'TypeScript',
                                                    'Node.js + Express',
                                                    'Firebase Auth',
                                                    'Firestore',
                                                    'Google Cloud Run',
                                                    'Firebase Hosting',
                                                    'Resend (Email)',
                                                    'Framer Motion'
                                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 border border-yellow-400/20 text-yellow-400/60 font-mono text-[10px] uppercase tracking-wider",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 200
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-8 border-t border-white/5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://lean-launchpad-rd.web.app",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-4 group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-10 py-5 bg-yellow-400 text-black font-bold uppercase tracking-widest text-[11px] group-hover:bg-white transition-colors",
                                                children: "View LEARN Launchpad →"
                                            }, void 0, false, {
                                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pt-24 border-t border-white/5 text-center space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-bold uppercase tracking-tightest text-white leading-none",
                                children: [
                                    "Join the",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400",
                                        children: "network."
                                    }, void 0, false, {
                                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 259,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/30 max-w-xl mx-auto text-base leading-relaxed",
                                children: "LEARN gives builders a structured way to launch early, gather real signal, and grow a user base that's invested from day one. If that sounds useful, let's talk."
                            }, void 0, false, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 262,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/partner",
                                    className: "inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-colors",
                                    children: "Work With Us"
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_s(LearnLaunchpadPage, "G945N1daSS3tU6pZs6+l8WIv6XU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = LearnLaunchpadPage;
// ─── Sub-components ───────────────────────────────────────────────────────────
function ThemeDivider({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px flex-1 bg-yellow-400/15"
            }, void 0, false, {
                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                lineNumber: 282,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-[10px] uppercase tracking-[0.4em] text-yellow-400/50 shrink-0",
                children: label
            }, void 0, false, {
                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                lineNumber: 283,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px flex-1 bg-yellow-400/15"
            }, void 0, false, {
                fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
        lineNumber: 281,
        columnNumber: 10
    }, this);
}
_c1 = ThemeDivider;
function FailureCard({ n, title, body, lesson }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 border border-white/5 bg-white/[0.01] space-y-4 hover:border-yellow-400/20 hover:bg-yellow-400/[0.02] transition-all duration-500 group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[10px] text-yellow-400/30 pt-1 shrink-0 w-8",
                    children: [
                        n,
                        " //"
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                    lineNumber: 295,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "text-base font-bold text-white/80 uppercase tracking-wide group-hover:text-white transition-colors",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                            lineNumber: 297,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/40 leading-relaxed",
                            children: body
                        }, void 0, false, {
                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l-2 border-yellow-400/40 pl-4 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[9px] uppercase tracking-widest text-yellow-400/50",
                                    children: "▸ Lesson: "
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[11px] text-yellow-400/80",
                                    children: lesson
                                }, void 0, false, {
                                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                            lineNumber: 301,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
                    lineNumber: 296,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
            lineNumber: 294,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
        lineNumber: 293,
        columnNumber: 10
    }, this);
}
_c2 = FailureCard;
function KnowledgeGraph() {
    _s1();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KnowledgeGraph.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;
            let animId;
            // Nodes: mix of orbiters and drifters
            const nodes = [];
            for(let i = 0; i < 55; i++){
                const useOrbit = Math.random() > 0.4;
                const cx = width * 0.5 + (Math.random() - 0.5) * width * 0.35;
                const cy = height * 0.5 + (Math.random() - 0.5) * height * 0.35;
                const orbitR = 30 + Math.random() * 180;
                const orbitAngle = Math.random() * Math.PI * 2;
                nodes.push({
                    x: useOrbit ? cx + Math.cos(orbitAngle) * orbitR : Math.random() * width,
                    y: useOrbit ? cy + Math.sin(orbitAngle) * orbitR : Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() > 0.85 ? 2.5 : 1,
                    orbitR,
                    orbitSpeed: (0.0003 + Math.random() * 0.0004) * (Math.random() > 0.5 ? 1 : -1),
                    orbitAngle,
                    cx,
                    cy,
                    useOrbit
                });
            }
            const CONNECTION_DIST = 180;
            function draw() {
                ctx.clearRect(0, 0, width, height);
                // Update positions
                nodes.forEach({
                    "KnowledgeGraph.useEffect.draw": (node)=>{
                        if (node.useOrbit) {
                            node.orbitAngle += node.orbitSpeed;
                            node.x = node.cx + Math.cos(node.orbitAngle) * node.orbitR;
                            node.y = node.cy + Math.sin(node.orbitAngle) * node.orbitR;
                        } else {
                            node.x += node.vx;
                            node.y += node.vy;
                            if (node.x < 0 || node.x > width) node.vx *= -1;
                            if (node.y < 0 || node.y > height) node.vy *= -1;
                        }
                    }
                }["KnowledgeGraph.useEffect.draw"]);
                // Draw connections
                for(let i = 0; i < nodes.length; i++){
                    for(let j = i + 1; j < nodes.length; j++){
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < CONNECTION_DIST) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(202,163,50,${(1 - dist / CONNECTION_DIST) * 0.18})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(nodes[i].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                            ctx.stroke();
                        }
                    }
                }
                // Draw nodes
                nodes.forEach({
                    "KnowledgeGraph.useEffect.draw": (node)=>{
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(202,163,50,0.45)';
                        ctx.fill();
                    }
                }["KnowledgeGraph.useEffect.draw"]);
                animId = requestAnimationFrame(draw);
            }
            draw();
            const onResize = {
                "KnowledgeGraph.useEffect.onResize": ()=>{
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                }
            }["KnowledgeGraph.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            return ({
                "KnowledgeGraph.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener('resize', onResize);
                }
            })["KnowledgeGraph.useEffect"];
        }
    }["KnowledgeGraph.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 pointer-events-none opacity-60"
    }, void 0, false, {
        fileName: "[project]/hello/app/research/learn-launchpad/page.tsx",
        lineNumber: 397,
        columnNumber: 10
    }, this);
}
_s1(KnowledgeGraph, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c3 = KnowledgeGraph;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LearnLaunchpadPage");
__turbopack_context__.k.register(_c1, "ThemeDivider");
__turbopack_context__.k.register(_c2, "FailureCard");
__turbopack_context__.k.register(_c3, "KnowledgeGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hello_app_research_learn-launchpad_page_tsx_79479b9e._.js.map