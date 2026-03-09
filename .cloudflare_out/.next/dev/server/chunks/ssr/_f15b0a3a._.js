module.exports = [
"[project]/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Hero() {
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            setCoords({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-[0.07]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full animate-drift"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-drift",
                        style: {
                            animationDirection: 'reverse',
                            animationDuration: '40s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-12 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8 space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "analytical-label text-accent",
                                                    children: "Status: Active Exploration"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-12 bg-white/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[9px] uppercase text-muted",
                                                    children: "Node // 0X14F2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-6xl md:text-8xl lg:text-9xl font-bold tracking-tightest leading-[0.85] uppercase",
                                            children: [
                                                "Define the Terrain.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 36
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-accent underline decoration-white/10 underline-offset-[12px]",
                                                    children: "Solve the Right Problem."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-muted leading-relaxed max-w-2xl font-medium border-l-2 border-accent/20 pl-8 py-2",
                                    children: "Lanchester R&D is a Tactical Exploration & Problem-Solving Lab. We deploy Intelligence and Method to build resilient Systems. Exploration before execution."
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/systems",
                                            className: "btn-primary flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "View Impact"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 14 14",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 7h12M13 7L7 1M13 7L7 13",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/strategy",
                                            className: "btn-ghost",
                                            children: "Explore the Method"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 hidden lg:flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border border-white/5 bg-background-layer1 rounded-sm space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center border-b border-white/5 pb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "analytical-label",
                                                    children: "Live Signal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-accent rounded-full pulse-node"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[10px] space-y-2 text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "COORD_SYS:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: "52.3676° N, 4.9041° E"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "CURSOR_X:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-accent",
                                                            children: coords.x
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "CURSOR_Y:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-accent",
                                                            children: coords.y
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "STATUS:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400",
                                                            children: "NOMINAL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Hero.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border border-white/10 bg-accent/5 rounded-sm relative overflow-hidden group hover:border-accent/30 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-2 opacity-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 12 12",
                                                fill: "none",
                                                className: "group-hover:rotate-90 transition-transform duration-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 0v12M0 6h12",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "analytical-label text-accent mb-2",
                                            children: "Our Core Thesis"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/70 leading-relaxed font-medium",
                                            children: '"Any problem can be solved. But only if it is properly defined."'
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/ProjectCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/systems/${project.slug}`,
        className: "group block bg-background border border-white/5 transition-all duration-500 hover:border-accent/40 relative overflow-hidden h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video w-full overflow-hidden bg-background-layer2 p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.thumbnail_image,
                            alt: project.name,
                            className: "w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-70 transition-all duration-700"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-[1.5s] ease-in-out pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectCard.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "analytical-label group-hover:text-accent transition-colors",
                                children: project.category
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: project.tags.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[8px] px-1.5 py-0.5 border border-white/10 text-muted/60 uppercase tracking-tighter group-hover:text-white transition-colors",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 20,
                                        columnNumber: 50
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold uppercase tracking-tightest group-hover:translate-x-1 transition-transform",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-px bg-accent/40"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 32,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "analytical-label text-[8px] text-accent/60",
                                                children: "Problem Defined"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 33,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted leading-relaxed line-clamp-2 font-medium italic group-hover:text-white transition-colors",
                                        children: [
                                            '"',
                                            project.core_problem,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 flex items-center justify-between border-t border-white/5 group-hover:border-accent/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[9px] uppercase tracking-widest text-muted/30 group-hover:text-accent transition-colors",
                                children: "Analyze Mission Details"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                className: "transition-transform group-hover:translate-x-1 group-hover:text-accent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 7h12M13 7L7 1M13 7L7 13",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCard.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCard.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/SectionHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SectionHeader({ label, title, description, align = 'left' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-4 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px w-6 bg-accent/40"
                    }, void 0, false, {
                        fileName: "[project]/components/SectionHeader.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest uppercase leading-none",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/SectionHeader.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/PartnerCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartnerCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.tsx [app-ssr] (ecmascript)");
;
;
;
function PartnerCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 px-6 md:px-12 border-t border-white/5 relative bg-background-layer1 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-[0.05]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid"
                    }, void 0, false, {
                        fileName: "[project]/components/PartnerCTA.tsx",
                        lineNumber: 7,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full animate-drift"
                    }, void 0, false, {
                        fileName: "[project]/components/PartnerCTA.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartnerCTA.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center space-y-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Activation",
                        title: "Initiate Exploration.",
                        align: "center"
                    }, void 0, false, {
                        fileName: "[project]/components/PartnerCTA.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl md:text-2xl text-muted leading-relaxed font-medium",
                        children: [
                            "Ready to define the terrain and solve the right problem? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "hidden md:block"
                            }, void 0, false, {
                                fileName: "[project]/components/PartnerCTA.tsx",
                                lineNumber: 15,
                                columnNumber: 78
                            }, this),
                            "We are currently selecting strategic partners for the next cycle."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PartnerCTA.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-6 pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/partner",
                                className: "btn-primary flex items-center gap-4 group w-full sm:w-auto px-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Initiate Mission"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PartnerCTA.tsx",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        className: "group-hover:translate-x-1 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 8h14M15 8l-6-6M15 8l-6 6",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PartnerCTA.tsx",
                                            lineNumber: 23,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PartnerCTA.tsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PartnerCTA.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/systems",
                                className: "btn-ghost w-full sm:w-auto px-12",
                                children: "View System Impact"
                            }, void 0, false, {
                                fileName: "[project]/components/PartnerCTA.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PartnerCTA.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 flex justify-center gap-12 items-center opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-24 bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/components/PartnerCTA.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[9px] uppercase tracking-[0.4em]",
                                children: "Ready // Standby"
                            }, void 0, false, {
                                fileName: "[project]/components/PartnerCTA.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-24 bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/components/PartnerCTA.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PartnerCTA.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartnerCTA.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartnerCTA.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: 'imediate-app',
        name: 'iMediate App',
        category: 'Coordination Systems',
        one_liner: 'AI conflict resolution infrastructure for structured co-parenting.',
        core_problem: 'High-conflict parents lack structured communication, driving continuous legal friction.',
        strategic_context: 'Co-parenting conflict drives legal costs and emotional trauma.',
        competitive_imbalance: 'Legal systems are reactive. Parents lack real-time tools to de-escalate.',
        system_hypothesis: 'NVC reframing at the point of communication reduces conflict recurrence.',
        product_architecture: 'NVC engine, calendar extraction, structured audit logs.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify core system friction in high-conflict co-parenting.',
                    what_we_did: [
                        'Interviewed legal stakeholders',
                        'Reviewed court communication logs',
                        'Identified escalation triggers'
                    ],
                    what_failed: [
                        'Initial framing ignored emotional volatility',
                        'Over-indexed on legal compliance vs relational health'
                    ],
                    what_learned: [
                        'Conflict is often driven by lack of structured delay in communication'
                    ],
                    what_adjusted: [
                        'Integrated NVC-based friction points to slow down reactive messaging'
                    ]
                },
                map: {
                    objective: 'Visualize the communication circuit between parents and legal systems.',
                    what_we_did: [
                        'Mapped message flow to court-ready exports',
                        'Identified decision nodes for NVC intervention'
                    ],
                    what_failed: [
                        'Early models were too rigid for emergency coordination',
                        'Excluded third-party legal oversight'
                    ],
                    what_learned: [
                        'System must allow for both ritual and emergency modes'
                    ],
                    what_adjusted: [
                        'Added bypass protocols for critical medical/logistical updates'
                    ]
                },
                validate: {
                    objective: 'Test NVC reframing efficacy on de-escalation.',
                    what_we_did: [
                        'Ran low-fidelity pilot with 10 high-conflict pairs',
                        'Measured sentiment shift after NVC prompts'
                    ],
                    what_failed: [
                        'Users bypassed complex reframing during active disputes'
                    ],
                    what_learned: [
                        'Reframing must be invisible or near-instant to be accepted'
                    ],
                    what_adjusted: [
                        'Tuned AI to provide subtle nudges rather than full rewrites'
                    ]
                },
                execute: {
                    objective: 'Build the core conflict resolution engine.',
                    what_we_did: [
                        'NVC processing layer',
                        'Structured audit logs',
                        'Direct legal export'
                    ],
                    what_failed: [
                        'Over-engineered the initial calendar sync'
                    ],
                    what_learned: [
                        'Communication integrity is more valuable than feature depth'
                    ],
                    what_adjusted: [
                        'Prioritized tamper-proof logging over complex scheduling features'
                    ]
                },
                measure: {
                    objective: 'Calculate reduction in legal friction and cost.',
                    what_we_did: [
                        'Litigation cost reduction',
                        'Dispute resolution velocity',
                        'Escalation rate'
                    ],
                    what_failed: [
                        'Early metrics didn\'t capture long-term behavioral change'
                    ],
                    what_learned: [
                        'Structural adherence is the only leading indicator of success'
                    ],
                    what_adjusted: [
                        'Introduced ongoing behavior calibration loops'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Defining measurable friction points',
                        'Mapping legal logic before code'
                    ],
                    evidence: 'No feature shipped without hypothetical conflict reduction metric'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping core intervention first',
                        'Prioritizing audit integrity'
                    ],
                    evidence: 'Audit trail parity achieved before UI polish'
                },
                human_calibration: {
                    applied_by: [
                        'Preserving user agency in messaging',
                        'Reducing cognitive load during stress'
                    ],
                    evidence: 'Manual bypass included for high-urgency logistics'
                },
                machine_leverage: {
                    applied_by: [
                        'AI-driven synthesis of relational patterns',
                        'Automated nudge logic'
                    ],
                    evidence: 'AI handles message sentiment without removing human intent'
                }
            }
        },
        ai_leverage: 'Real-time NVC message reframing.',
        outcomes_or_learnings: 'Behavioral nudges reduce system-wide conflict and legal overhead.',
        tags: [
            'Regulatory',
            'NVC',
            'Legal Tech',
            'AI'
        ],
        hero_image: '/images/portfolio/imediate/iMediate_hero.webp',
        thumbnail_image: '/images/portfolio/imediate/iMediate_thumbnail.webp',
        cover_image: '/images/portfolio/imediate/iMediate_cover.webp',
        measures_of_success: [
            'NVC compliance rate',
            'Court protocol adherence',
            'Audit trail integrity'
        ],
        measurable_impact: [
            '40% reduction in litigation costs',
            '65% faster dispute resolution',
            '50% decrease in legal escalations'
        ],
        featured: true
    },
    {
        slug: 'shootatlas',
        name: 'ShootAtlas',
        category: 'Operational Intelligence',
        one_liner: 'Logistics intelligence for complex field production.',
        core_problem: 'Information silos in field productions cause resource waste and schedule drift.',
        strategic_context: 'On-location media operates in vacuums, creating logistical chaos.',
        competitive_imbalance: 'Spreadsheets fail to capture real-time field data.',
        system_hypothesis: 'A unified intelligence layer converts fragmented signals into actionable maps.',
        product_architecture: 'Schedule orchestration, inventory tracking, AI risk detection.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify information silos in complex field productions.',
                    what_we_did: [
                        'On-site production audits',
                        'Workflow mapping of location crews',
                        'Analyzed schedule drift data'
                    ],
                    what_failed: [
                        'Underestimated the speed of on-set pivots',
                        'Assumed stable connectivity in remote zones'
                    ],
                    what_learned: [
                        'Central intelligence must be asynchronous by default'
                    ],
                    what_adjusted: [
                        'Designed for offline-first data persistence'
                    ]
                },
                map: {
                    objective: 'Visualize the resource and schedule dependencies.',
                    what_we_did: [
                        'Created dependency graphs for assets and talent',
                        'Mapped signal flow from field to HQ'
                    ],
                    what_failed: [
                        'Initial maps were too linear for chaotic media workflows'
                    ],
                    what_learned: [
                        'Production is recursive; maps must reflect circular feedback'
                    ],
                    what_adjusted: [
                        'Updated system map to include multi-path escalation triggers'
                    ]
                },
                validate: {
                    objective: 'Test unified intelligence layer with active production teams.',
                    what_we_did: [
                        'Deployed mobile prototypes to location crews',
                        'Simulated resource failures to test response'
                    ],
                    what_failed: [
                        'Crews rejected high-friction data entry requirements'
                    ],
                    what_learned: [
                        'Data capture must be incidental to the workflow'
                    ],
                    what_adjusted: [
                        'Integrated automated signal detection to reduce manual input'
                    ]
                },
                execute: {
                    objective: 'Build the production orchestration layer.',
                    what_we_did: [
                        'Resource tracking system',
                        'Risk detection engine',
                        'Asynchronous sync layer'
                    ],
                    what_failed: [
                        'Over-built the feature set for talent management initially'
                    ],
                    what_learned: [
                        'Precision in logistics beats breadth in HR tools'
                    ],
                    what_adjusted: [
                        'Focused on critical resource pathing and schedule stability'
                    ]
                },
                measure: {
                    objective: 'Assess reduction in logistical waste and drift.',
                    what_we_did: [
                        'Schedule variance',
                        'Resource utilization',
                        'Information clarity'
                    ],
                    what_failed: [
                        'Vanity metrics obscured actual operational efficiency early on'
                    ],
                    what_learned: [
                        'Hours shaved per cycle is the only metric that matters to heads of production'
                    ],
                    what_adjusted: [
                        'Refined KPIs to focus on time-to-resolution for field signals'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping every logistical node before development',
                        'Defining measurable friction'
                    ],
                    evidence: 'Zero critical resource failures recorded after deployment'
                },
                tactical_execution: {
                    applied_by: [
                        'Iterative field testing in remote conditions',
                        'Focusing on core logistical engine'
                    ],
                    evidence: 'Core tracking live 2 weeks before UI completion'
                },
                human_calibration: {
                    applied_by: [
                        'Designing for low-attention environments',
                        'Prioritizing glanceable data'
                    ],
                    evidence: 'Signal-based UI reduced field-to-HQ communication volume by 40%'
                },
                machine_leverage: {
                    applied_by: [
                        'AI risk detection for schedule drift',
                        'Pattern recognition in field signals'
                    ],
                    evidence: 'AI predicts bottle-necks before they hit the daily call sheet'
                }
            }
        },
        ai_leverage: 'Anticipates production risks from field signals.',
        outcomes_or_learnings: 'Eliminated scheduling drift and secured signal clarity.',
        tags: [
            'Field Production',
            'AI-Augmented',
            'Logistics'
        ],
        hero_image: '/images/portfolio/shootatlas/shootatlas_hero.webp',
        thumbnail_image: '/images/portfolio/shootatlas/shootatlas_thumbnail.webp',
        cover_image: '/images/portfolio/shootatlas/shootatlas_cover.webp',
        measures_of_success: [
            'Resource utilization',
            'Schedule variance',
            'Information clarity'
        ],
        measurable_impact: [
            '22% reduction in logistical waste',
            '15+ hours shaved per cycle',
            'Zero critical resource failures'
        ],
        featured: true
    },
    {
        slug: 'iru-assistant',
        name: 'IRU-Assistant',
        category: 'Operational Intelligence',
        one_liner: 'AI companion surfacing guest context for hospitality staff.',
        core_problem: 'Guest preferences are buried in silos, causing reactive service.',
        strategic_context: 'Staff lack access to immediate intelligence.',
        competitive_imbalance: 'The data gap between expectation and reality degrades loyalty.',
        system_hypothesis: 'Real-time intelligence at the interaction point enables proactive service.',
        product_architecture: 'Preference modeling, PMS integration, contextual UI.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Surface guest context for hospitality staff without manual search.',
                    what_we_did: [
                        'Shadowed hotel staff',
                        'Audited PMS data silos',
                        'Identified preference gaps'
                    ],
                    what_failed: [
                        'Initial focus was on data collection rather than staff utility'
                    ],
                    what_learned: [
                        'Intelligence is useless if not delivered at the point of interaction'
                    ],
                    what_adjusted: [
                        'Shifted focus to real-time service nudges and context delivery'
                    ]
                },
                map: {
                    objective: 'Map guest preference data to interaction touchpoints.',
                    what_we_did: [
                        'Mapped PMS data flow to staff mobile devices',
                        'Identified decision points during guest arrival'
                    ],
                    what_failed: [
                        'Maps didn\'t account for high-tempo breakfast/check-out peaks'
                    ],
                    what_learned: [
                        'Context delivery must be tiered by urgency'
                    ],
                    what_adjusted: [
                        'Created priority-based intelligence delivery logic'
                    ]
                },
                validate: {
                    objective: 'Test preference-based service interventions.',
                    what_we_did: [
                        'Tested prototype with service teams',
                        'Measured staff confidence after briefings'
                    ],
                    what_failed: [
                        'Staff found long-form bios distracting during service'
                    ],
                    what_learned: [
                        'Information must be converted into actions, not just data'
                    ],
                    what_adjusted: [
                        'Switched from "Guest Bios" to "Suggested Nudges"'
                    ]
                },
                execute: {
                    objective: 'Build the contextual intelligence interface.',
                    what_we_did: [
                        'Preference modeling engine',
                        'PMS integration layer',
                        'Nudge UI'
                    ],
                    what_failed: [
                        'Over-engineered the historical data parsing early on'
                    ],
                    what_learned: [
                        'Current context > Deep history for immediate service quality'
                    ],
                    what_adjusted: [
                        'Prioritized immediate visit data and active preferences'
                    ]
                },
                measure: {
                    objective: 'Measure guest NPS and staff operational confidence.',
                    what_we_did: [
                        'Guest NPS increase',
                        'Staff response time',
                        'Preference fulfillment rate'
                    ],
                    what_failed: [
                        'Early data was too anecdotal to confirm system shift'
                    ],
                    what_learned: [
                        'Briefing adoption is the best proxy for system trust'
                    ],
                    what_adjusted: [
                        'Introduced automated adoption tracking for briefings'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping PMS hierarchy before integration',
                        'Defining clear success metrics'
                    ],
                    evidence: '18% increase in NPS achieved through structured briefings'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping lean briefing interface first',
                        'Integrating with existing hardware'
                    ],
                    evidence: 'System operational on existing staff tablets in 3 weeks'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing cognitive load for front-line staff',
                        'Ensuring glanceable data delivery'
                    ],
                    evidence: 'Briefings reduced to <5 seconds of staff attention'
                },
                machine_leverage: {
                    applied_by: [
                        'AI synthesis of disparate guest data',
                        'Automated nudge generation'
                    ],
                    evidence: 'AI identifies high-value preference patterns without manual filter'
                }
            }
        },
        ai_leverage: 'Real-time synthesis for service nudges.',
        outcomes_or_learnings: 'Delivered personalized service without manual briefing.',
        tags: [
            'Hospitality',
            'AI',
            'Real-Time',
            'UX'
        ],
        hero_image: '/images/portfolio/iru-assisant/iru-assisant_hero.webp',
        thumbnail_image: '/images/portfolio/iru-assisant/iru-assisant_thumbnail.webp',
        cover_image: '/images/portfolio/iru-assisant/product_architecture_schematic_1772219093180.png',
        measures_of_success: [
            'Proactive interactions',
            'Briefing adoption',
            'Preference fulfillment'
        ],
        measurable_impact: [
            '18% increase in Guest NPS',
            '30% faster response times',
            '2x operational confidence'
        ],
        featured: true
    },
    {
        slug: 'roofdraft',
        name: 'Roofdraft',
        category: 'Operational Intelligence',
        one_liner: 'LiDAR drafting system for automated technical surveys.',
        core_problem: 'Manual drafting latency delays projects and compounds material waste.',
        strategic_context: 'Architectural surveys are slow, dangerous, and error-prone.',
        competitive_imbalance: 'Survey-to-draft latency creates bottlenecks and waste.',
        system_hypothesis: 'On-device LiDAR processing converts geometry into blueprints instantly.',
        product_architecture: 'LiDAR engine, on-device generation, defect detection.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify drafting bottlenecks and material waste in surveying.',
                    what_we_did: [
                        'Conducted time-motion studies on survey crews',
                        'Audited manual drafting errors',
                        'Mapped project delays'
                    ],
                    what_failed: [
                        'Focused solely on drafting speed, ignored on-site safety risks'
                    ],
                    what_learned: [
                        'The true friction is the delay between site visit and blueprint availability'
                    ],
                    what_adjusted: [
                        'Pivoted to a real-time on-device generation model'
                    ]
                },
                map: {
                    objective: 'Visualize the LiDAR to CAD data pipeline.',
                    what_we_did: [
                        'Mapped geometry extraction logic',
                        'Identified structural defect detection nodes'
                    ],
                    what_failed: [
                        'Initial maps assumed perfect lighting and clean scans'
                    ],
                    what_learned: [
                        'Real-world surveys are noisy; system must be resilient to occlusion'
                    ],
                    what_adjusted: [
                        'Added probabilistic filling for occluded structural nodes'
                    ]
                },
                validate: {
                    objective: 'Test on-site blueprint generation accuracy.',
                    what_we_did: [
                        'Ran side-by-side tests with traditional tools',
                        'Measured survey velocity vs manual drafting'
                    ],
                    what_failed: [
                        'Early prototypes lacked the precision for complex roofing angles'
                    ],
                    what_learned: [
                        'Automation must be verifiable by the operator on-site'
                    ],
                    what_adjusted: [
                        'Integrated immediate visual feedback for captured geometry'
                    ]
                },
                execute: {
                    objective: 'Engineer the LiDAR processing engine.',
                    what_we_did: [
                        'On-device LiDAR pipeline',
                        'Blueprinting engine',
                        'Defect detection model'
                    ],
                    what_failed: [
                        'Over-engineered the materials estimation early on'
                    ],
                    what_learned: [
                        'Geometry precision is the foundation; the rest is downstream'
                    ],
                    what_adjusted: [
                        'Focused on sub-mm accuracy for point-cloud-to-mesh conversion'
                    ]
                },
                measure: {
                    objective: 'Calculate throughput and material waste reduction.',
                    what_we_did: [
                        'Survey velocity',
                        'Estimate accuracy',
                        'Defect precision'
                    ],
                    what_failed: [
                        'Calculated waste solely as material, ignored labor time loss'
                    ],
                    what_learned: [
                        '3x throughput is the primary driver of project profitability'
                    ],
                    what_adjusted: [
                        'Introduced project lifecycle tracking for holistic ROI'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Stressing assumptions on LiDAR precision',
                        'Mapping structural logic before building'
                    ],
                    evidence: '98% defect detection accuracy achieved in blind trials'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping on-device viewer before full automation',
                        'Prioritizing core geometry engine'
                    ],
                    evidence: 'Core survey tool deployed before cloud sync features'
                },
                human_calibration: {
                    applied_by: [
                        'Designing for one-handed on-site operation',
                        'Reducing cognitive load for surveyors'
                    ],
                    evidence: 'Interface optimized for high-glare environments and glove usage'
                },
                machine_leverage: {
                    applied_by: [
                        'Using AI for structural defect detection',
                        'Automated geometry synthesis'
                    ],
                    evidence: 'AI eliminates manual drafting bottlenecks by auto-filling mesh data'
                }
            }
        },
        ai_leverage: 'Model inference for structural defect detection.',
        outcomes_or_learnings: 'Accelerated survey cycles and increased estimate accuracy.',
        tags: [
            'LiDAR',
            'CV',
            'Engineering',
            'Automation'
        ],
        hero_image: '/images/portfolio/roofdraft/roofdraft_hero.webp',
        thumbnail_image: '/images/portfolio/roofdraft/roofdraft_thumbnail.webp',
        cover_image: '/images/portfolio/roofdraft/roofdraft_cover.webp',
        measures_of_success: [
            'Survey velocity',
            'Estimate accuracy',
            'Defect precision'
        ],
        measurable_impact: [
            '3x survey throughput',
            '98% defect detection accuracy',
            '12% reduction in material waste'
        ],
        featured: true
    },
    {
        slug: 'a2x-global',
        name: 'a2x-global',
        category: 'Operational Intelligence',
        one_liner: 'Logistics platform for cross-border courier coordination.',
        core_problem: 'Customs and data silos slow down cross-border decision velocity.',
        strategic_context: 'Global couriers require precise personnel and package synchronization.',
        competitive_imbalance: 'Opaque data zones increase risk and latency.',
        system_hypothesis: 'Consolidated tracking improves route velocity and compliance.',
        product_architecture: 'Customs workflows, package tracking, crew assignment.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify customs and coordination silos in cross-border logistics.',
                    what_we_did: [
                        'Audited courier coordination workflows',
                        'Analyzed customs clearance delays',
                        'Identified data silos'
                    ],
                    what_failed: [
                        'Assumed the bottleneck was transit speed when it was actually data velocity'
                    ],
                    what_learned: [
                        'Cross-border friction is structural, not just logistical'
                    ],
                    what_adjusted: [
                        'Reframed the project as a data synchronization mission'
                    ]
                },
                map: {
                    objective: 'Map package and personnel synchronization across borders.',
                    what_we_did: [
                        'Mapped decision nodes for customs clearance',
                        'Created synchronization diagrams for crew transfers'
                    ],
                    what_failed: [
                        'Early maps were too regional and ignored global routing interplay'
                    ],
                    what_learned: [
                        'Global systems are recursive; local changes ripple globally'
                    ],
                    what_adjusted: [
                        'Updated system map to reflect real-time global availability'
                    ]
                },
                validate: {
                    objective: 'Test consolidated tracking and compliance workflows.',
                    what_we_did: [
                        'Ran controlled experiments with high-value packages',
                        'Measured response times to customs queries'
                    ],
                    what_failed: [
                        'Couriers rejected complex data entry during transit'
                    ],
                    what_learned: [
                        'Compliance must be automated or invisible to be adhered to'
                    ],
                    what_adjusted: [
                        'Integrated automated data extraction from transport documents'
                    ]
                },
                execute: {
                    objective: 'Build the logistics intelligence platform.',
                    what_we_did: [
                        'Customs automation layer',
                        'Route optimization engine',
                        'Personnel sync system'
                    ],
                    what_failed: [
                        'Over-engineered the crew management UI early on'
                    ],
                    what_learned: [
                        'Clearance velocity beat UI flexibility for actual impact'
                    ],
                    what_adjusted: [
                        'Prioritized high-impact compliance components over aesthetic depth'
                    ]
                },
                measure: {
                    objective: 'Calculate impact on transit velocity and compliance.',
                    what_we_did: [
                        'Transit time reduction',
                        'Compliance failure rate',
                        'Manual overhead'
                    ],
                    what_failed: [
                        'Initial data ignored the cost of secondary inspections'
                    ],
                    what_learned: [
                        'Zero failure rate is more valuable than 10% speed gain'
                    ],
                    what_adjusted: [
                        'Refined KPI focusing on "clean-to-clearance" percentage'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping international regulatory requirements',
                        'Stress-testing data integrity'
                    ],
                    evidence: 'Zero compliance failures recorded after system implementation'
                },
                tactical_execution: {
                    applied_by: [
                        'Short sprint cycles for regulatory updates',
                        'Controlled MVP deployment'
                    ],
                    evidence: 'Core customs engine operational before full route optimization'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing cognitive load for air-side personnel',
                        'Preserving user agency in route selection'
                    ],
                    evidence: 'Automated flags reduced crew decision volume by 30%'
                },
                machine_leverage: {
                    applied_by: [
                        'Using AI for predictive risk assessment',
                        'Accelerating pattern detection in manifests'
                    ],
                    evidence: 'AI predicts clearance risks 24 hours before borders'
                }
            }
        },
        ai_leverage: 'Predictive risk assessment and route optimization.',
        outcomes_or_learnings: 'Reduced manual coordination and improved compliance.',
        tags: [
            'Logistics',
            'Personnel',
            'Aviation',
            'Regulatory'
        ],
        hero_image: '/images/portfolio/a2x-global/a2x-global_hero.webp',
        thumbnail_image: '/images/portfolio/a2x-global/a2x-global_thumbnail.webp',
        cover_image: '/images/portfolio/a2x-global/a2x_architecture_schematic_1772218737056.png',
        measures_of_success: [
            'Clearance lead time',
            'Route efficacy',
            'Integration health'
        ],
        measurable_impact: [
            '20% faster transit',
            'Zero compliance failures',
            '40% less manual overhead'
        ],
        featured: true
    },
    {
        slug: 'imediate-whatsapp',
        name: 'iMediate WhatsApp',
        category: 'Coordination Systems',
        one_liner: 'WhatsApp bot parsing threads for NVC guidance and court-ready exports.',
        core_problem: 'Unstructured chat lacks the legal foundation required for conflict management.',
        strategic_context: 'Parents default to WhatsApp but lose legal defensibility.',
        competitive_imbalance: 'Standard messaging leads to information overload and drift.',
        system_hypothesis: 'Injecting structure into existing social graphs maximizes adoption.',
        product_architecture: 'WhatsApp bot, calendar parsing, NVC reframing, audit logs.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Inject legal structure into existing WhatsApp social graphs.',
                    what_we_did: [
                        'Audited parental chat behaviors on social apps',
                        'Identified legal export gaps',
                        'Mapped coordination drift'
                    ],
                    what_failed: [
                        'Focused on standalone app adoption, ignored existing habit pull'
                    ],
                    what_learned: [
                        'High-stress users won\'t switch apps; the tool must go to them'
                    ],
                    what_adjusted: [
                        'Pivoted to a WhatsApp-native bot interface'
                    ]
                },
                map: {
                    objective: 'Map chat parsing logic to court-ready documentation.',
                    what_we_did: [
                        'Mapped NLU intent to NVC protocols',
                        'Created calendar parsing diagrams',
                        'Identified audit log nodes'
                    ],
                    what_failed: [
                        'Initial parsing was too broad, capturing irrelevant domestic noise'
                    ],
                    what_learned: [
                        'Structure must be surgical to preserve privacy and relevance'
                    ],
                    what_adjusted: [
                        'Created intent-based filtering for legal vs personal chat'
                    ]
                },
                validate: {
                    objective: 'Test adoption and export validity in chat workflows.',
                    what_we_did: [
                        'Ran pilot with 20 WhatsApp users',
                        'Measured bot response adherence',
                        'Validating exports with legal counsel'
                    ],
                    what_failed: [
                        'Users found bot interruptions intrusive in group chats'
                    ],
                    what_learned: [
                        'Bot presence must be requested, not forced'
                    ],
                    what_adjusted: [
                        'Switched to reactive command structure'
                    ]
                },
                execute: {
                    objective: 'Build the WhatsApp parsing and export engine.',
                    what_we_did: [
                        'WhatsApp bot layer',
                        'NLU intent engine',
                        'Legal export system'
                    ],
                    what_failed: [
                        'Over-engineered the parsing for complex image data'
                    ],
                    what_learned: [
                        'Textual integrity and intent are the primary legal requirements'
                    ],
                    what_adjusted: [
                        'Focused on message intent and timestamp integrity'
                    ]
                },
                measure: {
                    objective: 'Calculate adoption rate and record recoverability.',
                    what_we_did: [
                        'Cohort retention',
                        'Protocol adherence',
                        'Export validity'
                    ],
                    what_failed: [
                        'Vanity metrics on message volume obscured actual de-escalation'
                    ],
                    what_learned: [
                        'Volume reduction per dispute is the true success indicator'
                    ],
                    what_adjusted: [
                        'Refined KPIs to focus on dispute cycle duration'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping social graph before bot deployment',
                        'Defining legal audit requirements'
                    ],
                    evidence: '100% record recoverability achieved in legal trials'
                },
                tactical_execution: {
                    applied_by: [
                        'Deploying on users\' primary channel',
                        'Short iteration on NLU intents'
                    ],
                    evidence: 'Bot live and parsing in 2 weeks'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing barrier to entry for legal logging',
                        'Preserving natural chat flow'
                    ],
                    evidence: '90% adoption rate in resistant user cohorts'
                },
                machine_leverage: {
                    applied_by: [
                        'Using NLU for relational conflict detection',
                        'Automated export synthesis'
                    ],
                    evidence: 'AI handles semantic parsing without human oversight'
                }
            }
        },
        ai_leverage: 'Natural Language Understanding for relational conflict.',
        outcomes_or_learnings: 'Meeting users in their primary channel increased adherence.',
        tags: [
            'WhatsApp',
            'NLU',
            'Legal',
            'Coordination'
        ],
        hero_image: '/images/portfolio/imediate/iMediate_hero.webp',
        thumbnail_image: '/images/portfolio/imediate/iMediate_thumbnail.webp',
        cover_image: '/images/portfolio/imediate/iMediate_cover.webp',
        measures_of_success: [
            'Cohort retention',
            'Protocol adherence',
            'Export validity'
        ],
        measurable_impact: [
            '90% adoption in resistant users',
            '100% record recoverability',
            '30% volume reduction per dispute'
        ],
        featured: false
    },
    {
        slug: 'leaf',
        name: 'leaf',
        category: 'Coordination Systems',
        one_liner: 'Branching conversation threads for complex deliberation.',
        core_problem: 'Linear chat decomposes under multi-threaded topics, destroying context.',
        strategic_context: 'Linear streams fail to manage simultaneous deliberations.',
        competitive_imbalance: 'Chat derailment destroys decision momentum.',
        system_hypothesis: 'Anchoring threads to specific segments preserves context and signal.',
        product_architecture: 'Non-linear conversation graph with segment anchors.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify context destruction in linear conversation streams.',
                    what_we_did: [
                        'Analyzed team deliberation logs',
                        'Mapped decision patterns',
                        'Identified derailment points'
                    ],
                    what_failed: [
                        'Focused on threading UI rather than structural context persistence'
                    ],
                    what_learned: [
                        'Linearity is the enemy of multi-threaded deliberation'
                    ],
                    what_adjusted: [
                        'Reframed as a non-linear graph deliberation system'
                    ]
                },
                map: {
                    objective: 'Visualize non-linear conversation anchors.',
                    what_we_did: [
                        'Mapped segment-based anchoring logic',
                        'Identified context persistence nodes'
                    ],
                    what_failed: [
                        'Initial maps were too complex for mobile-first behavior'
                    ],
                    what_learned: [
                        'Navigation must feel linear even if the data structure isn\'t'
                    ],
                    what_adjusted: [
                        'Created a "thread-folding" UI logic'
                    ]
                },
                validate: {
                    objective: 'Test deliberation velocity in branching threads.',
                    what_we_did: [
                        'Ran side-by-side deliberation tests',
                        'Measured time-to-decision'
                    ],
                    what_failed: [
                        'Users lost track of "main" thread intent'
                    ],
                    what_learned: [
                        'Anchors must be explicitly visual and persistent'
                    ],
                    what_adjusted: [
                        'Integrated persistent segment headers for every branch'
                    ]
                },
                execute: {
                    objective: 'Build the branching graph engine.',
                    what_we_did: [
                        'Non-linear data store',
                        'Segment anchoring system',
                        'Graph navigation UI'
                    ],
                    what_failed: [
                        'Over-built the summarization features early on'
                    ],
                    what_learned: [
                        'Context persistence is more important than automated summary'
                    ],
                    what_adjusted: [
                        'Prioritized structural anchoring over AI synthesis'
                    ]
                },
                measure: {
                    objective: 'Calculate noise reduction and decision velocity.',
                    what_we_did: [
                        'Signal-to-noise ratio',
                        'Context retention time',
                        'Decisional speed'
                    ],
                    what_failed: [
                        'Metrics focused on message count, not signal quality'
                    ],
                    what_learned: [
                        'Signal-to-noise is a qualitative shift that requires behavioral tracking'
                    ],
                    what_adjusted: [
                        'Introduced focus-persistence tracking for deliberators'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Defining the mechanics of derailment before building',
                        'Mapping context anchors'
                    ],
                    evidence: '50% reduction in conversational noise recorded in dev cycles'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping core segment anchoring first',
                        'Focusing on mobile-first navigation'
                    ],
                    evidence: 'Working prototype achieved context persistence in 10 days'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing context-switching load',
                        'Designing around deliberation patterns'
                    ],
                    evidence: 'Zero user rejection of branching logic after UI folding'
                },
                machine_leverage: {
                    applied_by: [
                        'Automated thread summarization for newcomers',
                        'Pattern detection in deliberation'
                    ],
                    evidence: 'AI reduces the burden of catching up on complex branches'
                }
            }
        },
        ai_leverage: 'Automated thread summarization.',
        outcomes_or_learnings: 'Increased deep work efficacy by reducing context switching.',
        tags: [
            'Conversation Design',
            'UX',
            'Mobile',
            'Social'
        ],
        hero_image: '/images/portfolio/leaf/leaf_hero.webp',
        thumbnail_image: '/images/portfolio/leaf/leaf_thumbnail.webp',
        cover_image: '/images/portfolio/leaf/leaf_cover.webp',
        measures_of_success: [
            'Signal-to-noise ratio',
            'Context retention',
            'Deliberation velocity'
        ],
        measurable_impact: [
            '50% reduction in conversational noise',
            '25% faster decision-making',
            '100% context persistence'
        ],
        featured: false
    },
    {
        slug: 'supergramp',
        name: 'supergramp',
        category: 'Coordination Systems',
        one_liner: 'Glanceable availability widget for family resource synchronization.',
        core_problem: 'Generational care nodes are under-utilized due to coordination friction.',
        strategic_context: 'Families waste cycles on simple availability checks.',
        competitive_imbalance: 'Messaging friction prevents dynamic resource use.',
        system_hypothesis: 'A single-purpose widget eliminates informal childcare overhead.',
        product_architecture: 'Calendar synchronization and low-friction mobile widgets.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify coordination friction in family resource synchronization.',
                    what_we_did: [
                        'Audited family caregiver schedules',
                        'Interviewed generational nodes',
                        'Mapped availability gaps'
                    ],
                    what_failed: [
                        'Assumed the friction was technical, it was actually psychological'
                    ],
                    what_learned: [
                        'The barrier is the "ask"; system must make availability passive'
                    ],
                    what_adjusted: [
                        'Pivoted to a glanceable widget model for passive visibility'
                    ]
                },
                map: {
                    objective: 'Map calendar signals to glanceable status indicators.',
                    what_we_did: [
                        'Mapped calendar availability triggers',
                        'Designed widget status states'
                    ],
                    what_failed: [
                        'Initial status codes were too professional/clinical for family use'
                    ],
                    what_learned: [
                        'Tone matters in domestic coordination'
                    ],
                    what_adjusted: [
                        'Simplified status to "Available", "Focus", "Away" with custom icons'
                    ]
                },
                validate: {
                    objective: 'Test spontaneous resource utilization.',
                    what_we_did: [
                        'Tested widget with 10 extended family networks',
                        'Measured spontaneous bookings'
                    ],
                    what_failed: [
                        'Users forgot to update status manually'
                    ],
                    what_learned: [
                        'Visibility MUST be automated or synced to existing behaviors'
                    ],
                    what_adjusted: [
                        'Integrated bi-directional calendar sync as the primary driver'
                    ]
                },
                execute: {
                    objective: 'Build the glanceable widget and sync layer.',
                    what_we_did: [
                        'iOS widget layer',
                        'Calendar sync engine',
                        'Push signal system'
                    ],
                    what_failed: [
                        'Over-engineered the detail views'
                    ],
                    what_learned: [
                        'The widget is the product; the app is just config'
                    ],
                    what_adjusted: [
                        'Focused 90% of development effort on widget glanceability'
                    ]
                },
                measure: {
                    objective: 'Calculate reduction in synchronization overhead.',
                    what_we_did: [
                        'Update frequency',
                        'Booking ratio',
                        'Message volume reduction'
                    ],
                    what_failed: [
                        'Early data was skewed by the novelty effect'
                    ],
                    what_learned: [
                        'Sustained use requires zero-touch maintenance'
                    ],
                    what_adjusted: [
                        'Introduced historical likelihood forecasting to auto-populate status'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Defining familial friction points',
                        'Mapping generational nodes'
                    ],
                    evidence: '80% reduction in sync overhead achieved in pilot groups'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping single-purpose widget first',
                        'Short sync cycles'
                    ],
                    evidence: 'Widget live on testflight in 7 days'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing the "burden of asking"',
                        'Designing for glanceable awareness'
                    ],
                    evidence: 'Zero manual scheduling messages required for 5x increase in resource use'
                },
                machine_leverage: {
                    applied_by: [
                        'Likelihood forecasting based on historical routines',
                        'Anomaly detection in schedules'
                    ],
                    evidence: 'AI predicts availability shifts before they are manually logged'
                }
            }
        },
        ai_leverage: 'Likelihood forecasting based on historical routines.',
        outcomes_or_learnings: 'Eliminated noise and increased shared resource visibility.',
        tags: [
            'Family Tech',
            'Widget',
            'Utility',
            'Resource Sync'
        ],
        hero_image: '/images/portfolio/supergramp/supergramp_hero.webp',
        thumbnail_image: '/images/portfolio/supergramp/supergramp_thumbnail.webp',
        cover_image: '/images/portfolio/supergramp/supergramp_cover.webp',
        measures_of_success: [
            'Update frequency',
            'Booking ratio',
            'Friction reduction'
        ],
        measurable_impact: [
            '5x increase in spontaneous childcare',
            'Zero manual scheduling messages',
            '80% synchronization overhead reduction'
        ],
        featured: false
    },
    {
        slug: 'extra-ticket',
        name: 'Extra Ticket',
        category: 'Market & Asset Optimization',
        one_liner: 'Converting spare event assets into high-leverage matching opportunities.',
        core_problem: 'Dormant event capacity lacks a low-friction discovery mechanic.',
        strategic_context: 'Wasted event capacity represents lost economic opportunity.',
        competitive_imbalance: 'Markets ignore the social value of shared experience.',
        system_hypothesis: 'Structuring spare tickets as entry points increases utilization.',
        product_architecture: 'Ticket engine, match-making algorithm, trust verification.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify dormant asset capacity in cultural events.',
                    what_we_did: [
                        'Audited ticket wastage data',
                        'Interviewed event organizers',
                        'Mapped secondary utility'
                    ],
                    what_failed: [
                        'Focused on resale profit, ignored social proximity value'
                    ],
                    what_learned: [
                        'The real value is matching the asset to the right peer, not just the highest bidder'
                    ],
                    what_adjusted: [
                        'Reframed as a social matching marketplace'
                    ]
                },
                map: {
                    objective: 'Map asset availability to social proximity graphs.',
                    what_we_did: [
                        'Created matching algorithm diagrams',
                        'Mapped trust verification flows'
                    ],
                    what_failed: [
                        'Initial models ignored the logistical friction of on-site handovers'
                    ],
                    what_learned: [
                        'Markets fail without low-friction physical coordination'
                    ],
                    what_adjusted: [
                        'Added proximity-based matching alerts'
                    ]
                },
                validate: {
                    objective: 'Test utilization of spare capacity via peer matching.',
                    what_we_did: [
                        'Ran pilot at 5 major cultural events',
                        'Measured asset liquidity'
                    ],
                    what_failed: [
                        'Users were hesitant to match with strangers without trust anchors'
                    ],
                    what_learned: [
                        'Trust is the currency of peer asset exchange'
                    ],
                    what_adjusted: [
                        'Integrated social verification and trust scoring'
                    ]
                },
                execute: {
                    objective: 'Build the matching and verification engine.',
                    what_we_did: [
                        'Asset matching engine',
                        'Trust verification layer',
                        'Proximity alert system'
                    ],
                    what_failed: [
                        'Over-built the payment infrastructure initially'
                    ],
                    what_learned: [
                        'Discovery and trust are more important than transaction speed early on'
                    ],
                    what_adjusted: [
                        'Prioritized social proximity over financial clearing'
                    ]
                },
                measure: {
                    objective: 'Calculate utilization rate and social utility.',
                    what_we_did: [
                        'Utilization rate',
                        'Matching NPS',
                        'Velocity of exchange'
                    ],
                    what_failed: [
                        'Metrics ignored the long-term community value'
                    ],
                    what_learned: [
                        'Repeat matching is the leading indicator of ecosystem health'
                    ],
                    what_adjusted: [
                        'Introduced network effect tracking for asset nodes'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping secondary utility cycles',
                        'Defining measurable matching friction'
                    ],
                    evidence: '85% utilization of dormant tickets achieved in pilot phase'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping MVP matching engine first',
                        'Focusing on high-density events'
                    ],
                    evidence: 'First match achieved within 4 hours of deployment'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing social friction in peer exchange',
                        'Designing around event-day behaviors'
                    ],
                    evidence: '4.8/5 matching quality via trust-first architecture'
                },
                machine_leverage: {
                    applied_by: [
                        'Preference-based matching optimization',
                        'Predictive demand signaling'
                    ],
                    evidence: 'AI identifies ideal peer matches based on latent preferences'
                }
            }
        },
        ai_leverage: 'Preference-based matching for event optimization.',
        outcomes_or_learnings: 'Extracted social utility from dormant assets.',
        tags: [
            'Marketplace',
            'Social',
            'Events',
            'Matching'
        ],
        hero_image: '/images/portfolio/extra-ticket/extra-ticket_hero.webp',
        thumbnail_image: '/images/portfolio/extra-ticket/extra-ticket_thumbnail.webp',
        cover_image: '/images/portfolio/extra-ticket/extra_ticket_architecture_schematic_1772219134064.png',
        measures_of_success: [
            'Utilization rate',
            'Matching NPS',
            'Transaction velocity'
        ],
        measurable_impact: [
            '85% utilization of dormant cultural assets',
            '4.8/5 matching quality',
            '30% increase in secondary utility'
        ],
        featured: false
    },
    {
        slug: 'photosell',
        name: 'photosell',
        category: 'Market & Asset Optimization',
        one_liner: 'AI valuation system identifying high-value possessions.',
        core_problem: 'Household assets remain dead because valuation is too high-friction.',
        strategic_context: 'Households lack the knowledge to monetize dormant assets.',
        competitive_imbalance: 'High cognitive cost prevents resale market entry.',
        system_hypothesis: 'Automating identification via CV lowers the barrier to entry.',
        product_architecture: 'Computer vision pipeline, pricing indexer, channel integration.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify cognitive barriers to household asset liquefaction.',
                    what_we_did: [
                        'Audited resale market entry friction',
                        'Observed household inventory patterns',
                        'Mapped valuation latency'
                    ],
                    what_failed: [
                        'Assumed the barrier was shipping, it was actually valuation effort'
                    ],
                    what_learned: [
                        'If valuation takes >30 seconds, the asset remains dormant'
                    ],
                    what_adjusted: [
                        'Pivoted to a Computer Vision-first identification model'
                    ]
                },
                map: {
                    objective: 'Map CV pipeline to real-time market pricing indices.',
                    what_we_did: [
                        'Created image classification flows',
                        'Mapped pricing API integrations'
                    ],
                    what_failed: [
                        'Initial maps were too optimistic about object condition detection'
                    ],
                    what_learned: [
                        'Condition is subjective; system must allow for tiered valuation'
                    ],
                    what_adjusted: [
                        'Added multi-state condition assessment to the CV loop'
                    ]
                },
                validate: {
                    objective: 'Test identification precision and conversion speed.',
                    what_we_did: [
                        'Ran tests with 500 household items',
                        'Measured "snap-to-price" velocity'
                    ],
                    what_failed: [
                        'Users found the categorization too generic'
                    ],
                    what_learned: [
                        'Users value market-specific metadata over generic labels'
                    ],
                    what_adjusted: [
                        'Tuned AI to pull channel-specific attributes (e.g. eBay/Reverb)'
                    ]
                },
                execute: {
                    objective: 'Build the CV pipeline and pricing indexer.',
                    what_we_did: [
                        'CV classification engine',
                        'Pricing aggregation layer',
                        'Snap-to-sell UI'
                    ],
                    what_failed: [
                        'Over-engineered the listing automation features early on'
                    ],
                    what_learned: [
                        'Accuracy in valuation is the hook; ease of listing is the closer'
                    ],
                    what_adjusted: [
                        'Focused on sub-second classification and price confidence'
                    ]
                },
                measure: {
                    objective: 'Calculate liquidation velocity and reclaimed equity.',
                    what_we_did: [
                        'Identification precision',
                        'Valuation accuracy',
                        'Time-to-list'
                    ],
                    what_failed: [
                        'Metrics didn\'t account for items that were identified but not sold'
                    ],
                    what_learned: [
                        'Confidence in price is the primary driver of sell-intent'
                    ],
                    what_adjusted: [
                        'Introduced a "price confidence score" for every asset'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping resale market graphs',
                        'Defining measurable friction in valuation'
                    ],
                    evidence: '$1,200 average reclaimed equity per active trial user'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping the CV scanner first',
                        'Short iteration on classification accuracy'
                    ],
                    evidence: 'Scanning engine achieved 90% precision in 3 weeks'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing the cognitive load of inventories',
                        'Designing for rapid "snap" sessions'
                    ],
                    evidence: 'Liquidation velocity increased by 60% vs traditional listing'
                },
                machine_leverage: {
                    applied_by: [
                        'Using CV for classification and condition detection',
                        'Automated market estimation'
                    ],
                    evidence: 'AI eliminates the need for manual research on asset value'
                }
            }
        },
        ai_leverage: 'CV classification and automated market estimation.',
        outcomes_or_learnings: 'Lowered the barrier for converting clutter into capital.',
        tags: [
            'CV',
            'Resale',
            'Valuation',
            'Fintech'
        ],
        hero_image: '/images/portfolio/photosell/photosell_hero.webp',
        thumbnail_image: '/images/portfolio/photosell/photosell_thumbnail.webp',
        cover_image: '/images/portfolio/photosell/photosell_cover.webp',
        measures_of_success: [
            'Identification precision',
            'Valuation accuracy',
            'Conversion velocity'
        ],
        measurable_impact: [
            '60% faster asset liquidation',
            '$1,200 average reclaimed equity',
            'Lowered barrier to secondary markets'
        ],
        featured: false
    },
    {
        slug: 'gk-mvp',
        name: 'gk-mvp',
        category: 'Market & Asset Optimization',
        one_liner: 'Distributed food system optimizing local supply matching.',
        core_problem: 'Food waste is high because producers lack coordination to reach distributors.',
        strategic_context: 'Localized systems suffer from supply-demand drift.',
        competitive_imbalance: 'Producers lack a coordination layer for effective redistribution.',
        system_hypothesis: 'A structured coordination node increases resource resilience.',
        product_architecture: 'Supply matching engine, contributor onboarding, logistics flows.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify coordination failures in localized food systems.',
                    what_we_did: [
                        'Audited local producer waste',
                        'Mapped supply-demand drift in community kitchens',
                        'Identified logistics silos'
                    ],
                    what_failed: [
                        'Focused on supply volume, ignored the timing of perishables'
                    ],
                    what_learned: [
                        'Food systems are timing-critical; coordination must be near-real-time'
                    ],
                    what_adjusted: [
                        'Reframed as a dynamic logistics coordination system'
                    ]
                },
                map: {
                    objective: 'Map local supply nodes to distribution touchpoints.',
                    what_we_did: [
                        'Created supply matching diagrams',
                        'Mapped route optimization paths'
                    ],
                    what_failed: [
                        'Initial maps were too centralized; ignored node-to-node exchange'
                    ],
                    what_learned: [
                        'Resilience requires distributed, not just centralized, matching'
                    ],
                    what_adjusted: [
                        'Updated system map to support peer-to-peer node transfers'
                    ]
                },
                validate: {
                    objective: 'Test matching efficiency and waste diversion.',
                    what_we_did: [
                        'Ran pilot with 40 community food nodes',
                        'Measured matching velocity'
                    ],
                    what_failed: [
                        'Producers were overwhelmed by high-frequency updates'
                    ],
                    what_learned: [
                        'Input friction must be minimal for busy small-scale producers'
                    ],
                    what_adjusted: [
                        'Integrated simple "one-tap" supply flagging'
                    ]
                },
                execute: {
                    objective: 'Build the supply matching and logistics engine.',
                    what_we_did: [
                        'Supply matching engine',
                        'Logistics coordination layer',
                        'Node dashboard'
                    ],
                    what_failed: [
                        'Over-built the inventory management features early on'
                    ],
                    what_learned: [
                        'The matching node is more valuable than a deep database'
                    ],
                    what_adjusted: [
                        'Prioritized immediate matching alerts over long-term inventory history'
                    ]
                },
                measure: {
                    objective: 'Calculate waste diversion and community node health.',
                    what_we_did: [
                        'Matching efficiency',
                        'Waste diversion tonnage',
                        'Node activity'
                    ],
                    what_failed: [
                        'Metrics focused on calories, not nutritional density or timing'
                    ],
                    what_learned: [
                        'Network health is defined by node response time, not just volume'
                    ],
                    what_adjusted: [
                        'Introduced response-time calibration for matches'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping food circularity loops',
                        'Defining systemic friction points'
                    ],
                    evidence: '2 tons of waste diverted via structured coordination in first year'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping basic matching first',
                        'Iterating on logistics routes'
                    ],
                    evidence: 'System operational with first 10 nodes in 14 days'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing administrative burden for volunteers',
                        'Designing for mobile-first coordination'
                    ],
                    evidence: 'Over 500 meals facilitated via zero-admin volunteer flows'
                },
                machine_leverage: {
                    applied_by: [
                        'AI-driven supply/demand signaling',
                        'Automated route planning'
                    ],
                    evidence: 'AI predicts supply surges before they become waste'
                }
            }
        },
        ai_leverage: 'Supply/demand signaling and automated route planning.',
        outcomes_or_learnings: 'Reduced waste through structured community coordination.',
        tags: [
            'Food Systems',
            'Circular Economy',
            'Logistics'
        ],
        hero_image: '/images/portfolio/gk-mvp/gk-mvp_hero.webp',
        thumbnail_image: '/images/portfolio/gk-mvp/gk-mvp_thumbnail.webp',
        cover_image: '/images/portfolio/gk-mvp/guerilla_kitchen_architecture_schematic_1772219507053.png',
        measures_of_success: [
            'Matching efficiency',
            'Waste diversion',
            'Node health'
        ],
        measurable_impact: [
            '2 tons of food waste diverted annually',
            '500+ community meals facilitated',
            '40+ participating food nodes'
        ],
        featured: false
    },
    {
        slug: 'five-things',
        name: 'Five Things',
        category: 'Behavioral & Wellbeing',
        one_liner: 'Micro-habit cognitive reset for high-stress environments.',
        core_problem: 'Existing mental-health tools are too high-friction for active crisis tempo.',
        strategic_context: 'Saturated cognitive environments lead to sustained decision fatigue.',
        competitive_imbalance: 'Wellness tools are too heavy for operational stress.',
        system_hypothesis: 'Simplifying the ritual increases adherence and resilience.',
        product_architecture: 'Native iOS interface, on-device processing, zero-latency flows.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify friction in high-stress mental resilience tools.',
                    what_we_did: [
                        'Audited existing wellness app friction',
                        'Observed high-tempo operator behaviors',
                        'Mapped cognitive fatigue triggers'
                    ],
                    what_failed: [
                        'Initially designed a complex habit tracker which increased cognitive load'
                    ],
                    what_learned: [
                        'The tool MUST be sub-60 seconds to be used in active crisis modes'
                    ],
                    what_adjusted: [
                        'Pivoted to a micro-ritual model with zero navigation'
                    ]
                },
                map: {
                    objective: 'Visualize the ritual-to-baseline recovery flow.',
                    what_we_did: [
                        'Mapped sensory grounding steps',
                        'Designed sequence for rapid state-shift'
                    ],
                    what_failed: [
                        'Initial sequences were too verbal; users in stress lose semantic processing'
                    ],
                    what_learned: [
                        'Stress recovery requires tactile and visual anchors over text'
                    ],
                    what_adjusted: [
                        'Rebuilt sequence to focus on high-contrast visual and haptic prompts'
                    ]
                },
                validate: {
                    objective: 'Test ritual adherence in high-stress operational cycles.',
                    what_we_did: [
                        'Tested prototype with operators under load',
                        'Measured recovery to baseline state'
                    ],
                    what_failed: [
                        'Users skipped "guided" portions to get to the "end"'
                    ],
                    what_learned: [
                        'Rituals must be interactive, not just passive observers'
                    ],
                    what_adjusted: [
                        'Integrated haptic-confirmed ritual steps for active participation'
                    ]
                },
                execute: {
                    objective: 'Build the zero-latency ritual interface.',
                    what_we_did: [
                        'Native iOS ritual engine',
                        'On-device processing layer',
                        'Haptic feedback system'
                    ],
                    what_failed: [
                        'Over-engineered the analytics dashboard early on'
                    ],
                    what_learned: [
                        'The value is the state-shift, not the data about the shift'
                    ],
                    what_adjusted: [
                        'Removed all navigation; app opens directly into the ritual'
                    ]
                },
                measure: {
                    objective: 'Calculate adherence and recovery efficacy.',
                    what_we_did: [
                        'Ritual adherence rate',
                        'Time-to-baseline recovery',
                        'Operator fatigue'
                    ],
                    what_failed: [
                        'Measured "engagement" instead of "utility"'
                    ],
                    what_learned: [
                        'High adherence in high-stress is the only metric that matters'
                    ],
                    what_adjusted: [
                        'Introduced drift detection to prompt rituals before crisis hits'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Mapping cognitive load thresholds',
                        'Defining measurable state-shifts'
                    ],
                    evidence: '75% daily adherence achieved in peak stress cycles'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping single-ritual MVP first',
                        'Prioritizing zero-latency response'
                    ],
                    evidence: 'Sub-60s recovery to baseline achieved in trials'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing cognitive friction to zero',
                        'Designing for non-verbal states'
                    ],
                    evidence: 'Zero user rejection after removal of navigation burden'
                },
                machine_leverage: {
                    applied_by: [
                        'Signal tracking to identify behavioral drift',
                        'Predictive ritual prompting'
                    ],
                    evidence: 'AI detects impending fatigue before the operator expresses it'
                }
            }
        },
        ai_leverage: 'Signal tracking to identify behavioral drift.',
        outcomes_or_learnings: 'Sub-60-second rituals beat complex apps for consistency.',
        tags: [
            'Mobile Native',
            'Behavioral Design',
            'Grounding'
        ],
        hero_image: '/images/portfolio/five-things/five-things_hero.webp',
        thumbnail_image: '/images/portfolio/five-things/five-things_thumbnail.webp',
        cover_image: '/images/portfolio/five-things/five_things_architecture_schematic_1772219263786.png',
        measures_of_success: [
            'Ritual adherence',
            'Focus persistence',
            'Fatigue reduction'
        ],
        measurable_impact: [
            '75% daily adherence in high-stress cycles',
            'Decreased operator fatigue',
            'Sub-60s recovery to baseline states'
        ],
        featured: false
    },
    {
        slug: 'fluffybutt',
        name: 'fluffybutt',
        category: 'Behavioral & Wellbeing',
        one_liner: 'Care system providing visibility for distributed foster networks.',
        core_problem: 'Distributed fosters operate in a black hole, preventing proactive care.',
        strategic_context: 'Shelters lack real-time visibility into distributed networks.',
        competitive_imbalance: 'Manual check-ins are slow and increase risk for vulnerable animals.',
        system_hypothesis: 'Connecting caregiver logs to a central dashboard improves outcomes.',
        product_architecture: 'Caregiver logs, health metrics, and shelter visibility dashboards.',
        process_architecture: {
            design_sequence: {
                define: {
                    objective: 'Identify visibility gaps in distributed foster networks.',
                    what_we_did: [
                        'Audited shelter-to-foster communication',
                        'Mapped health reporting silos',
                        'Identified risk nodes'
                    ],
                    what_failed: [
                        'Assumed the problem was log volume, it was actually anomaly detection'
                    ],
                    what_learned: [
                        'Data is useless if it doesn\'t trigger a proactive intervention'
                    ],
                    what_adjusted: [
                        'Shifted focus to automated risk flagging and visibility dashboards'
                    ]
                },
                map: {
                    objective: 'Map caregiver logs to central risk-alert nodes.',
                    what_we_did: [
                        'Created health metric diagrams',
                        'Mapped escalation triggers for medical care'
                    ],
                    what_failed: [
                        'Initial maps were too complex for volunteer caregivers'
                    ],
                    what_learned: [
                        'Logs must be as easy as sending a text message'
                    ],
                    what_adjusted: [
                        'Simplified data entry to a single-screen daily status pulse'
                    ]
                },
                validate: {
                    objective: 'Test log frequency and anomaly detection accuracy.',
                    what_we_did: [
                        'Ran pilot with 20 fosters for vulnerable animals',
                        'Measured alert precision'
                    ],
                    what_failed: [
                        'Alerts were too sensitive, triggering "false alarm" fatigue'
                    ],
                    what_learned: [
                        'Tresholds must be calibrated to individual animal health baselines'
                    ],
                    what_adjusted: [
                        'Introduced animal-specific health baseline modeling'
                    ]
                },
                execute: {
                    objective: 'Build the visibility and health tracking system.',
                    what_we_did: [
                        'Caregiver log interface',
                        'Shelter dashboard',
                        'Risk detection engine'
                    ],
                    what_failed: [
                        'Over-built the social community features early on'
                    ],
                    what_learned: [
                        'Clinical visibility beats social engagement for foster safety'
                    ],
                    what_adjusted: [
                        'Prioritized medical logs over social activity feeds'
                    ]
                },
                measure: {
                    objective: 'Calculate visibility health and placement safety.',
                    what_we_did: [
                        'Log frequency',
                        'Detection accuracy',
                        'Return rate reduction'
                    ],
                    what_failed: [
                        'Metrics ignored the morale of the foster caregivers'
                    ],
                    what_learned: [
                        'Confidence in visibility increases foster retention'
                    ],
                    what_adjusted: [
                        'Introduced visibility-confidence tracking for shelters'
                    ]
                }
            },
            rule_application: {
                intellectual_rigor: {
                    applied_by: [
                        'Defining clinical risk markers',
                        'Mapping coordination loops'
                    ],
                    evidence: '100% visibility of vulnerable animal health achieved in pilot'
                },
                tactical_execution: {
                    applied_by: [
                        'Shipping basic logs first',
                        'Iterating on risk thresholds'
                    ],
                    evidence: '40% reduction in emergency returns after first implementation'
                },
                human_calibration: {
                    applied_by: [
                        'Reducing friction for volunteer caregivers',
                        'Designing for emotional clarity'
                    ],
                    evidence: '2x increase in reporting adherence achieved through UX simplification'
                },
                machine_leverage: {
                    applied_by: [
                        'Using AI for anomaly detection in health logs',
                        'Automated escalation flagging'
                    ],
                    evidence: 'AI flags respiratory drift 12 hours before physical symptoms appear'
                }
            }
        },
        ai_leverage: 'Anomaly detection flags care issues before escalation.',
        outcomes_or_learnings: 'Reduced manual overhead and increased placement safety.',
        tags: [
            'Care Management',
            'IoT',
            'Health Tracking',
            'Sync'
        ],
        hero_image: '/images/portfolio/fluffybutt/fluffybutt_hero.webp',
        thumbnail_image: '/images/portfolio/fluffybutt/fluffybutt_thumbnail.webp',
        cover_image: '/images/portfolio/fluffybutt/fluffybutt_architecture_schematic_1772219110230.png',
        measures_of_success: [
            'Log frequency',
            'Detection accuracy',
            'Visibility health'
        ],
        measurable_impact: [
            '100% visibility of vulnerable animal health',
            '40% reduction in emergency returns',
            '2x increase in reporting adherence'
        ],
        featured: false
    }
];
const __TURBOPACK__default__export__ = projects;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartnerCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PartnerCTA.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    const [randomSystems, setRandomSystems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Shuffle and pick 3 projects
        const shuffled = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"]
        ].sort(()=>0.5 - Math.random());
        setRandomSystems(shuffled.slice(0, 3));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 md:px-12 border-t border-white/5 relative bg-background-layer1/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Methodology",
                            title: "Exploration Before Execution.",
                            description: "We map before we move. Truth before capital."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5",
                            children: [
                                {
                                    step: '01',
                                    title: 'Define',
                                    desc: 'Identify friction.'
                                },
                                {
                                    step: '02',
                                    title: 'Map',
                                    desc: 'Visualize the system.'
                                },
                                {
                                    step: '03',
                                    title: 'Validate',
                                    desc: 'Data Driven Design.'
                                },
                                {
                                    step: '04',
                                    title: 'Execute',
                                    desc: 'Build tactical solutions.'
                                },
                                {
                                    step: '05',
                                    title: 'Measure',
                                    desc: 'Calculate impact.'
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-background p-8 space-y-4 group hover:bg-accent/5 transition-colors relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-4xl",
                                                children: item.step
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px] text-accent/60",
                                            children: item.step
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold uppercase tracking-tighter",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted leading-relaxed",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 h-1 bg-accent/20 w-0 group-hover:w-full transition-all duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 31
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 md:px-12 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Mission Focus",
                            title: "Structural Capabilities"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                {
                                    id: 'INT',
                                    title: 'Intellectual',
                                    label: 'Tactical Clarity',
                                    body: 'Reduce complexity. Map decision nodes.'
                                },
                                {
                                    id: 'TAC',
                                    title: 'Tactical',
                                    label: 'Focused Execution',
                                    body: 'Build high-utility systems. Fast.'
                                },
                                {
                                    id: 'HUM',
                                    title: 'Human',
                                    label: 'Customer Empathy',
                                    body: 'Solve for the human node.'
                                },
                                {
                                    id: 'AI',
                                    title: 'AI-Forward',
                                    label: 'Intelligent Systems',
                                    body: 'Multiply operational intelligence.'
                                }
                            ].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lab-card group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] text-accent/40 group-hover:text-accent transition-colors",
                                                    children: [
                                                        "[",
                                                        pillar.id,
                                                        "]"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent pulse-node"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold uppercase tracking-tightest mb-2",
                                            children: pillar.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analytical-label text-[9px] mb-4 block",
                                            children: pillar.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted leading-relaxed",
                                            children: pillar.body
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, pillar.id, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 28
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 md:px-12 border-t border-white/5 bg-background-layer2/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-end gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: "Selected Work",
                                    title: "The Record.",
                                    description: "Empirical results from 13+ systems."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/systems",
                                    className: "btn-ghost flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "View Archive"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 6h10M11 6L7 2M11 6L7 10",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-px",
                            children: randomSystems.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-background",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        project: project
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, project.slug, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 43
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5",
                            children: [
                                {
                                    label: 'Litigation Reduction',
                                    value: '40%',
                                    sub: 'iMediate App'
                                },
                                {
                                    label: 'Resource Efficiency',
                                    value: '22%',
                                    sub: 'ShootAtlas'
                                },
                                {
                                    label: 'Survey Throughput',
                                    value: '3x',
                                    sub: 'Roofdraft'
                                },
                                {
                                    label: 'Service Velocity',
                                    value: '30%',
                                    sub: 'IRU-Assistant'
                                }
                            ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analytical-label text-[8px]",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold tracking-tightest text-accent",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[8px] uppercase text-muted/40",
                                            children: stat.sub
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 31
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-20 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Process",
                                        title: "Continuous Calibration.",
                                        description: "Focused sprints. Data-informed moves."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-6",
                                        children: [
                                            'Rapid validation.',
                                            'Stakeholder alignment.',
                                            'Human feedback loops.',
                                            'Measured baselines.'
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-4 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 bg-accent mt-2 pulse-node"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/80 font-medium leading-relaxed",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 131
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/partner",
                                            className: "inline-flex items-center gap-4 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "analytical-label group-hover:text-accent transition-colors",
                                                    children: "Initiate Mission"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-px bg-white/20 group-hover:w-12 transition-all transition-colors group-hover:bg-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square w-full max-w-md mx-auto relative border border-white/10 rounded-full flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-accent/5 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-[10%] border border-white/10 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-[30%] border border-accent/20 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 origin-center animate-[spin_10s_linear_infinite] pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1/2 h-px bg-gradient-to-r from-transparent to-accent absolute top-1/2 left-1/2 shadow-[0_0_15px_rgba(163,230,53,0.5)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "z-10 text-center space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[9px] text-accent/50 uppercase",
                                                    children: "Loop Position"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold tracking-tightest uppercase",
                                                    children: [
                                                        "Sprint 0",
                                                        randomSystems.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[8px] text-muted",
                                                    children: "Awaiting Verification..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[10%] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full pulse-node"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-[20%] right-[15%] w-2 h-2 bg-accent rounded-full pulse-node",
                                            style: {
                                                animationDelay: '1s'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-[40%] left-[5%] w-1 h-1 bg-white/40 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartnerCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_f15b0a3a._.js.map