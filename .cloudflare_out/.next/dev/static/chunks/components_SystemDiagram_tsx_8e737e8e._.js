(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SystemDiagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SystemDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SystemDiagram({ type = 'linear', complexity = 'medium', className = '' }) {
    const stroke = '#CBD5E1'; // neutral gray-400
    const accent = '#94A3B8'; // muted slate
    const speed = complexity === 'high' ? '12s' : complexity === 'medium' ? '16s' : '20s';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full rounded-md ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 800 200",
            className: "w-full h-48",
            preserveAspectRatio: "xMidYMid meet",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
            .sd-fade { animation: fade ${speed} ease-in-out infinite alternate; }
            @keyframes fade { from { opacity: 0.85; transform: translateY(0); } to { opacity: 1; transform: translateY(-2px); } }
            .sd-slow { animation: drift ${speed} linear infinite; }
            @keyframes drift { from { transform: translateX(0); } to { transform: translateX(2px); } }
          `
                    }, void 0, false, {
                        fileName: "[project]/components/SystemDiagram.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/SystemDiagram.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                type === 'linear' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "sd-fade",
                    transform: "translate(40,40)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "700",
                            y2: "40",
                            stroke: stroke,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        [
                            0,
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `translate(${i * 180},40)`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "80",
                                        cy: "0",
                                        r: "18",
                                        fill: "white",
                                        stroke: accent,
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SystemDiagram.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "80",
                                        y: "5",
                                        fill: "#475569",
                                        fontSize: "10",
                                        textAnchor: "middle",
                                        children: i === 0 ? 'Source' : i === 1 ? 'Parse' : i === 2 ? 'Metadata' : 'Archive'
                                    }, void 0, false, {
                                        fileName: "[project]/components/SystemDiagram.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/SystemDiagram.tsx",
                                lineNumber: 26,
                                columnNumber: 36
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SystemDiagram.tsx",
                    lineNumber: 24,
                    columnNumber: 31
                }, this),
                type === 'branching' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "sd-fade",
                    transform: "translate(40,40)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "80",
                            y1: "40",
                            x2: "160",
                            y2: "40",
                            stroke: stroke,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "80",
                            cy: "40",
                            r: "18",
                            fill: "white",
                            stroke: accent,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "80",
                            y: "45",
                            fill: "#475569",
                            fontSize: "10",
                            textAnchor: "middle",
                            children: "Source"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "160",
                            y1: "40",
                            x2: "320",
                            y2: "0",
                            stroke: stroke,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "160",
                            y1: "40",
                            x2: "320",
                            y2: "80",
                            stroke: stroke,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "320",
                            cy: "0",
                            r: "14",
                            fill: "white",
                            stroke: accent,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "320",
                            cy: "80",
                            r: "14",
                            fill: "white",
                            stroke: accent,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SystemDiagram.tsx",
                    lineNumber: 33,
                    columnNumber: 34
                }, this),
                type === 'network' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "sd-slow",
                    transform: "translate(40,20)",
                    children: [
                        [
                            0,
                            1,
                            2,
                            3,
                            4
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `translate(${i * 140},${i % 2 * 30})`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "60",
                                    cy: "40",
                                    r: complexity === 'high' ? 16 : 12,
                                    fill: "white",
                                    stroke: accent,
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/components/SystemDiagram.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/SystemDiagram.tsx",
                                lineNumber: 45,
                                columnNumber: 39
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "340",
                            y2: "40",
                            stroke: stroke,
                            strokeWidth: "1.5",
                            opacity: "0.9"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SystemDiagram.tsx",
                    lineNumber: 44,
                    columnNumber: 32
                }, this),
                type === 'layered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "sd-fade",
                    transform: "translate(40,20)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "8",
                            width: "720",
                            height: "36",
                            fill: "#F8FAFC",
                            stroke: stroke
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "40",
                            y: "56",
                            width: "640",
                            height: "36",
                            fill: "#F8FAFC",
                            stroke: stroke
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "80",
                            y: "104",
                            width: "560",
                            height: "36",
                            fill: "#F8FAFC",
                            stroke: stroke
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "40",
                            y: "30",
                            fill: "#475569",
                            fontSize: "11",
                            children: "Presentation"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "40",
                            y: "78",
                            fill: "#475569",
                            fontSize: "11",
                            children: "Application"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "40",
                            y: "126",
                            fill: "#475569",
                            fontSize: "11",
                            children: "Data & Integration"
                        }, void 0, false, {
                            fileName: "[project]/components/SystemDiagram.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SystemDiagram.tsx",
                    lineNumber: 52,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SystemDiagram.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SystemDiagram.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = SystemDiagram;
var _c;
__turbopack_context__.k.register(_c, "SystemDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_SystemDiagram_tsx_8e737e8e._.js.map