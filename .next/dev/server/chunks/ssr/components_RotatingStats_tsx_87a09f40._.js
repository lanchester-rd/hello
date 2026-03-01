module.exports = [
"[project]/components/RotatingStats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RotatingStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const allStats = [
    {
        label: 'First-time design approval',
        value: '75%',
        initial: 'From 11% baseline',
        context: 'Design Skill Lead',
        company: 'bunq',
        ref: 'UX Operations'
    },
    {
        label: 'Product delivery time',
        value: '–25%',
        context: 'Product / Design Lead',
        company: 'xpate',
        ref: 'Process Overhaul'
    },
    {
        label: 'Product team productivity',
        value: '+20%',
        context: 'Head of Product',
        company: 'iMediate',
        ref: 'Agile Infrastructure'
    },
    {
        label: 'On-time delivery increase',
        value: '+25%',
        initial: '(–40% roadblocks)',
        context: 'Product / Design Lead',
        company: 'IRECKONU',
        ref: 'Cross-Functional Alignment'
    },
    {
        label: 'Weekly project throughput',
        value: '5×',
        initial: '(1 → 5+ per week)',
        context: 'Product Vision Lead',
        company: 'xpate',
        ref: 'Operational Clarity'
    },
    {
        label: 'Design output quality',
        value: '+85%',
        context: 'Design Skill Lead',
        company: 'bunq',
        ref: 'Systems Installed'
    },
    {
        label: 'Design team scaled',
        value: '1 → 8',
        context: 'Design Skill Lead',
        company: 'bunq',
        ref: 'Team Architecture'
    },
    {
        label: 'Design inconsistency',
        value: '–30%',
        context: 'Design Skill Lead',
        company: 'bunq',
        ref: 'Platform Standardisation'
    },
    {
        label: 'Front-End productivity',
        value: '+15%',
        context: 'Product / Design Lead',
        company: 'xpate',
        ref: 'Dev Integration'
    },
    {
        label: 'Valuation environment',
        value: '€1.65B',
        initial: '(€193M 10% stake sale)',
        context: 'Design Skill Lead',
        company: 'bunq',
        ref: 'Fintech Scale'
    },
    {
        label: 'UK SME Bank',
        value: 'MVP',
        initial: '0 → Launched',
        context: 'Product / Design Lead',
        company: 'xpate',
        ref: 'Fintech Architecture'
    },
    {
        label: 'UX impact visibility',
        value: '+50%',
        context: 'Product / Design Lead',
        company: 'IRECKONU',
        ref: 'Measurement Framework'
    }
];
function RotatingStats() {
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setIsVisible(false);
            // Wait for exit animation to complete before switching data
            setTimeout(()=>{
                setStartIndex((prev)=>(prev + 4) % allStats.length);
                setIsVisible(true);
            }, 1200);
        }, 12000);
        return ()=>clearInterval(interval);
    }, []);
    const visibleStats = [];
    for(let i = 0; i < 4; i++){
        visibleStats.push(allStats[(startIndex + i) % allStats.length]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5",
        children: visibleStats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-background p-10 space-y-6 group hover:bg-accent/[0.02] transition-all duration-[1200ms] ease-in-out relative min-h-[280px] flex flex-col justify-between ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                style: {
                    transitionDelay: isVisible ? `${i * 300}ms` : `${(3 - i) * 100}ms`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "analytical-label text-[8px] text-muted group-hover:text-accent transition-colors",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/RotatingStats.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl font-bold tracking-tightest group-hover:scale-105 transition-transform origin-left",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/components/RotatingStats.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/RotatingStats.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                stat.initial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-white/30 font-mono tracking-tight",
                                    children: stat.initial
                                }, void 0, false, {
                                    fileName: "[project]/components/RotatingStats.tsx",
                                    lineNumber: 112,
                                    columnNumber: 46
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RotatingStats.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RotatingStats.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-white/80",
                                        children: stat.company
                                    }, void 0, false, {
                                        fileName: "[project]/components/RotatingStats.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-muted font-medium",
                                        children: stat.context
                                    }, void 0, false, {
                                        fileName: "[project]/components/RotatingStats.tsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RotatingStats.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-mono text-[8px] text-muted/40 uppercase tracking-widest",
                                    children: [
                                        "Ref // ",
                                        stat.ref
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RotatingStats.tsx",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/RotatingStats.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RotatingStats.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-1 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    }, void 0, false, {
                        fileName: "[project]/components/RotatingStats.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this)
                ]
            }, `${stat.label}-${startIndex}`, true, {
                fileName: "[project]/components/RotatingStats.tsx",
                lineNumber: 101,
                columnNumber: 44
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/RotatingStats.tsx",
        lineNumber: 100,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=components_RotatingStats_tsx_87a09f40._.js.map