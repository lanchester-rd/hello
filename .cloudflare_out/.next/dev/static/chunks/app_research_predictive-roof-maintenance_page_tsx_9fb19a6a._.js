(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/research/predictive-roof-maintenance/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PredictiveRoofMaintenancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PredictiveRoofMaintenancePage() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('01-define');
    const sectionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll spy logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PredictiveRoofMaintenancePage.useEffect": ()=>{
            const handleScroll = {
                "PredictiveRoofMaintenancePage.useEffect.handleScroll": ()=>{
                    if (!sectionsRef.current) return;
                    const sections = sectionsRef.current.querySelectorAll('[data-section]');
                    let current = '01-define';
                    sections.forEach({
                        "PredictiveRoofMaintenancePage.useEffect.handleScroll": (section)=>{
                            const rect = section.getBoundingClientRect();
                            if (rect.top <= 350) {
                                current = section.getAttribute('data-section') || current;
                            }
                        }
                    }["PredictiveRoofMaintenancePage.useEffect.handleScroll"]);
                    setActiveSection(current);
                }
            }["PredictiveRoofMaintenancePage.useEffect.handleScroll"];
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) {
                scrollContainer.addEventListener('scroll', handleScroll);
                handleScroll(); // Init check
                return ({
                    "PredictiveRoofMaintenancePage.useEffect": ()=>scrollContainer.removeEventListener('scroll', handleScroll)
                })["PredictiveRoofMaintenancePage.useEffect"];
            }
        }
    }["PredictiveRoofMaintenancePage.useEffect"], []);
    const steps = [
        {
            id: '01-define',
            title: 'Define the Prediction'
        },
        {
            id: '02-data-model',
            title: 'Canonical Data Model'
        },
        {
            id: '03-labeled-events',
            title: 'Expand Labeled Structure'
        },
        {
            id: '04-baseline',
            title: 'The Stronger Baseline'
        },
        {
            id: '05-multimodal',
            title: 'Advanced Multimodal'
        },
        {
            id: '06-evaluate',
            title: 'Evaluate Properly'
        },
        {
            id: '07-deploy',
            title: 'Deployment UX Strategy'
        },
        {
            id: '08-automate',
            title: 'Industrial Ingestion'
        },
        {
            id: '09-scale',
            title: 'Portfolio Strategy'
        },
        {
            id: '10-finance',
            title: 'Finance & Capital Modeling'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col lg:flex-row h-screen bg-[#020508] text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 h-auto lg:h-screen p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-cyan-900/30 flex flex-col justify-between relative bg-[#020508] z-20 shadow-[10px_0_30px_rgba(0,0,0,0.5)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-3 px-3 py-1 bg-cyan-950/30 border border-cyan-900/50 font-mono text-[9px] text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        "Instruction Manual // 0X-ROOF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-white pt-2",
                                    children: [
                                        "Predictive",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-500",
                                            children: "Maintenance."
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex flex-col gap-5 relative z-10 mt-auto mb-auto py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[9px] uppercase tracking-widest text-cyan-600 mb-2",
                                children: "Build Sequence"
                            }, void 0, false, {
                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                lineNumber: 83,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-16 bottom-0 w-px bg-cyan-900/30"
                            }, void 0, false, {
                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                lineNumber: 84,
                                columnNumber: 22
                            }, this),
                            steps.map((step, idx)=>{
                                const isActive = activeSection === step.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${step.id}`,
                                    className: `group relative pl-6 flex flex-col font-mono text-[11px] transition-all duration-300 py-1 ${isActive ? 'text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        const element = document.getElementById(step.id);
                                        const container = document.getElementById('scroll-container');
                                        if (element && container) {
                                            const top = element.offsetTop;
                                            container.scrollTo({
                                                top: top - 50,
                                                behavior: 'smooth'
                                            });
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute left-[-2px] inset-y-0 w-1 h-1 rounded-full transition-all duration-300 mt-2 ${isActive ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] scale-150' : 'bg-cyan-900/50'}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold tracking-widest uppercase mb-0.5",
                                            children: [
                                                (idx + 1).toString().padStart(2, '0'),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `tracking-wider ${isActive ? 'opacity-100 block' : 'opacity-0 hidden'} transition-all duration-300 leading-tight`,
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, step.id, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 18
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block relative z-10 pt-8 border-t border-cyan-900/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-[9px] font-mono uppercase tracking-widest text-cyan-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Systems Engine"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-cyan-400 animate-pulse font-bold",
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "scroll-container",
                className: "flex-1 lg:h-screen overflow-y-auto bg-[#04080D] relative scroll-smooth selection:bg-cyan-900 pb-96",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: sectionsRef,
                    className: "max-w-5xl mx-auto p-6 md:p-12 lg:p-24 space-y-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "01-define",
                            id: "01-define",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "1",
                                    title: "Define the prediction",
                                    quote: "“If you predict everything, you predict nothing.”"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-16 text-slate-400 text-lg leading-relaxed mt-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-cyan-400 uppercase tracking-widest text-sm font-bold font-mono",
                                                    children: "Start With: Time until next reactive job."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-2xl font-bold",
                                                    children: "But now clarify: What is a “reactive job”?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Define it precisely:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-4 font-mono text-sm uppercase tracking-wide bg-[#060B12] p-8 border-l border-cyan-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-500",
                                                                    children: "->"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 64
                                                                }, this),
                                                                " Emergency leak callout"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-500",
                                                                    children: "->"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 64
                                                                }, this),
                                                                " Water ingress complaint"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-500",
                                                                    children: "->"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 64
                                                                }, this),
                                                                " Internal damage escalation"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-500",
                                                                    children: "->"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 64
                                                                }, this),
                                                                " Insurance-triggered event"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-500",
                                                                    children: "->"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 64
                                                                }, this),
                                                                " Safety hazard (loose slate, falling debris)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-center border-l border-red-900/30 pl-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-400 font-mono text-xs uppercase tracking-widest mb-6",
                                                    children: "If you don't define this clearly?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 text-xl text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Your labels will be ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-bold",
                                                                    children: "inconsistent."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 60
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Your model will be ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-bold",
                                                                    children: "confused."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 59
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "02-data-model",
                            id: "02-data-model",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "2",
                                    title: "Build a canonical data model",
                                    subtitle: "Now we expand it properly."
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-32 mt-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-sm p-12 bg-[#020406] border border-cyan-900/50 shadow-[inset_0_4px_24px_rgba(0,0,0,0.6)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-600 block mb-12 border-b border-cyan-900/30 pb-4 uppercase tracking-widest w-max",
                                                    children: "Core Hierarchy (Locked)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 max-w-xl mx-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white/40",
                                                            children: "ManagingCompany"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-6 text-white/50",
                                                            children: "↳ Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-12 text-white/70",
                                                            children: "↳ Building"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-16 text-cyan-300 font-bold bg-cyan-950/30 py-4 px-6 border-l-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] flex justify-between",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "↳ RoofElement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-20 text-cyan-500/80 my-2",
                                                            children: [
                                                                "↳ Sub-Element",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[#020406] bg-cyan-900 text-[9px] px-2 py-1 ml-4 relative -top-1",
                                                                    children: "(optional/powerful)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 100
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-24 text-white/80",
                                                            children: "↳ Project"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-28 text-white/60 flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 bg-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 98
                                                                }, this),
                                                                "Observation"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-28 text-white/60 flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 bg-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 98
                                                                }, this),
                                                                "Intervention"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pl-28 text-white/60 flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 bg-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 98
                                                                }, this),
                                                                "Outcome"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-16 border-t border-cyan-900/20 pt-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest mb-8 border border-orange-900/30 px-3 py-1 bg-orange-950/10",
                                                            children: "🔥 Critical Data Engine"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-bold text-white mb-8",
                                                            children: "Building-Level Decay Signals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-400 font-mono bg-[#060B12] p-8 border border-white/5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Construction year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Major refurb year"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Structural material"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Roof pitch angle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Building height"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Surrounding height"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Exposure (Urban vs Coastal)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Pollution index"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Heritage constraints"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-xs text-cyan-500 uppercase tracking-widest",
                                                            children: "Why?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl text-slate-300 leading-relaxed",
                                                            children: [
                                                                "Buildings decay differently based on environment and structure. ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-400 font-bold block mt-4",
                                                                    children: "This is slow-moving but powerful signal."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 155
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-16 border-t border-cyan-900/20 pt-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-bold text-white mb-8",
                                                            children: "Roof Element-Level Signals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-4 text-sm text-slate-400 font-mono bg-[#060B12] p-8 border-l-2 border-indigo-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Material type (natural slate, EPDM, lead)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Install date & known lifespan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Warranty length"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Repair frequency per element"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Last repair method (patch vs renewal)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Flashing type & thickness"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Joint type (welded, bonded, mechanical)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-xs text-indigo-400 uppercase tracking-widest",
                                                            children: "Why?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl text-slate-300 leading-relaxed",
                                                            children: [
                                                                "Decay is material-specific. Lead behaves differently than membrane. ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-indigo-400 font-bold block mt-4",
                                                                    children: "Patches behave differently than replacements."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 159
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "03-labeled-events",
                            id: "03-labeled-events",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "3",
                                    title: "Expand the Labeled Event",
                                    subtitle: "High-Value Signal Extraction"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-24 mt-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center font-mono text-[11px] md:text-sm text-cyan-400 uppercase tracking-widest bg-cyan-950/10 p-8 border border-cyan-900/50 leading-loose",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500",
                                                    children: "Your event row becomes:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 39
                                                }, this),
                                                "( Date | RoofElement | ConditionSeverityScore | MoistureExposureIndex | WhatWasSeen | WhatWasDone | MaterialUsed | Cost | AccessType | WeatherAtTime | Outcome | DaysUntilNextEvent )"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid lg:grid-cols-2 gap-x-16 gap-y-24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalBlock, {
                                                    title: "A) Weather History",
                                                    tag: "Massive Signal",
                                                    color: "cyan",
                                                    metrics: [
                                                        'Rainfall in last 30/90/365D',
                                                        'Freeze-thaw cycles',
                                                        'Wind gust exposure',
                                                        'Storm proximity',
                                                        'Temp volatility'
                                                    ],
                                                    reason: "Roofs fail under stress. Stress = weather × material age. Without weather? You’re predicting blind."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalBlock, {
                                                    title: "B) Water Flow & Drainage",
                                                    tag: "LiDAR / Physics",
                                                    color: "blue",
                                                    metrics: [
                                                        'Roof slope gradient',
                                                        'Drainage path length',
                                                        'Low-point accumulation',
                                                        'Gutter fall angle',
                                                        'Downpipe count',
                                                        'Overflow history'
                                                    ],
                                                    reason: "Water pooling predicts membrane failure. Blocked drainage predicts leak frequency. Physics > guesswork."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalBlock, {
                                                    title: "C) Access Complexity",
                                                    tag: "Operational Friction",
                                                    color: "orange",
                                                    metrics: [
                                                        'Scaffold required?',
                                                        'Council notice required?',
                                                        'Neighbor access?',
                                                        'Traffic management?',
                                                        'Rope access only?'
                                                    ],
                                                    reason: "Access delays repairs. Delayed repairs increase failure risk. Operational friction drives decay escalation."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalBlock, {
                                                    title: "D) Maintenance Behavior",
                                                    tag: "Culture Tracking",
                                                    color: "purple",
                                                    metrics: [
                                                        'Avg inspection frequency',
                                                        'Planned vs reactive ratio',
                                                        'Scope expansion freq',
                                                        '% of jobs reworked',
                                                        'Contractor consistency'
                                                    ],
                                                    reason: "Maintenance culture affects failure rate. Some portfolios fail because of physics. Some fail because of neglect."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignalBlock, {
                                                    title: "E) Defect Severity",
                                                    tag: "Gradient Scoring",
                                                    color: "red",
                                                    metrics: [
                                                        '1 = cosmetic',
                                                        '3 = early failure',
                                                        '5 = active leak risk',
                                                        '7 = temporary fix',
                                                        '10 = structural compromise'
                                                    ],
                                                    reason: "Models predict better when they understand gradient of decay. Binary leak/no-leak is crude."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 218,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "04-baseline",
                            id: "04-baseline",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "4",
                                    title: "The Stronger Baseline",
                                    subtitle: "Hazard Function Modeling"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-16 mt-16 text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl",
                                            children: "Your baseline now includes complex multi-variable interactions:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#060B12] p-8 border-t-2 border-cyan-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-xs uppercase tracking-widest text-white mb-6",
                                                            children: "Static Arrays"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-3 font-mono text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Roof material age"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Environmental exposure"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Building geometry"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Known lifespan vs age ratio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#060B12] p-8 border-t-2 border-cyan-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-xs uppercase tracking-widest text-white mb-6",
                                                            children: "Dynamic Loads"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-3 font-mono text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Weather load index"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Maintenance frequency"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Defect severity trend"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Repair type history"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#060B12] p-8 border-t-2 border-cyan-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-xs uppercase tracking-widest text-white mb-6",
                                                            children: "Operational Friction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-3 font-mono text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Access complexity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Contractor patterns"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "+ Delay between inspect and intervention"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-12 border border-cyan-500/50 bg-cyan-950/20 text-center mt-12 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[10px] text-cyan-400 uppercase tracking-widest",
                                                    children: "This becomes a hazard function model."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white md:text-xl font-mono",
                                                    children: [
                                                        "Risk = f",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500",
                                                            children: "("
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 88
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-300",
                                                            children: [
                                                                "material_age ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 px-2 font-sans",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 174
                                                                }, this),
                                                                " weather_stress ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 px-2 font-sans",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 246
                                                                }, this),
                                                                " repair_history ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 px-2 font-sans",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 318
                                                                }, this),
                                                                " drainage_physics ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 px-2 font-sans",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 392
                                                                }, this),
                                                                " maintenance_behavior"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 129
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500",
                                                            children: ")"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 476
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-cyan-400 font-bold uppercase tracking-wide mt-8 border-t border-cyan-900/50 pt-8 inline-block",
                                                    children: "Now you’re modeling decay, not just job frequency."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 247,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "05-multimodal",
                            id: "05-multimodal",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "5",
                                    title: "Advanced Multimodal Signals"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-32 mt-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid lg:grid-cols-5 gap-16 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:col-span-2 flex flex-col items-center justify-center p-12 bg-[#060B12] border border-cyan-900/30 text-cyan-400 font-mono space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: '"Holding for now"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: '"Couldn\'t access"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: '"Customer declined"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: '"Temporary patch"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:col-span-3 space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-3xl font-bold text-white uppercase tracking-tight",
                                                            children: "Transcript Decay Indicators"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl text-slate-400 leading-relaxed",
                                                            children: "These phrases are gold. They predict future failure better than images."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid lg:grid-cols-5 gap-16 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:col-span-3 space-y-6 order-2 lg:order-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-3xl font-bold text-white uppercase tracking-tight",
                                                            children: "Photo-Derived Time Decay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl text-slate-400 leading-relaxed",
                                                            children: "Decay has direction. You can model acceleration."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:col-span-2 flex flex-col p-12 bg-[#060B12] border-l-4 border-indigo-500 font-mono text-sm space-y-4 text-indigo-200 order-1 lg:order-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-end border-b border-indigo-900/30 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Crack length over time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 120
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-indigo-500",
                                                                    children: "Δt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 156
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-end border-b border-indigo-900/30 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Growth progression"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 120
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-indigo-500",
                                                                    children: "Δt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 152
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-end border-b border-indigo-900/30 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Rust bloom expansion"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 120
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-indigo-500",
                                                                    children: "Δt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 154
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-end pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Membrane discoloration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 90
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-indigo-500",
                                                                    children: "Δt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 126
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid lg:grid-cols-5 gap-16 items-center pt-8 border-t border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:col-span-2 flex flex-col p-12 bg-[#060B12] border-r-4 border-purple-500 font-mono text-sm space-y-4 text-purple-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                ">",
                                                                " Sagging progression"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                ">",
                                                                " Deflection change"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                ">",
                                                                " Drainage pooling growth"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                ">",
                                                                " Flashing lift displacement"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:col-span-3 space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-3xl font-bold text-white uppercase tracking-tight",
                                                            children: "3D Temporal Geometry Tracking"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl text-slate-400 leading-relaxed",
                                                            children: "If geometry shifts year over year? You’re detecting structural fatigue."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple-400 font-mono text-xs uppercase tracking-widest pt-4",
                                                            children: [
                                                                "//",
                                                                " That’s enterprise-level predictive intelligence."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 291,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "06-evaluate",
                            id: "06-evaluate",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "6",
                                    title: "Evaluate Properly",
                                    quote: "“Accuracy is a vanity metric.”"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-16 mt-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl text-slate-500 font-bold max-w-2xl line-through decoration-red-500/50 decoration-4",
                                            children: '"How accurate is the model AUC / F1 loss curve?"'
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-3xl text-white font-bold tracking-tight pb-8",
                                            children: "Start asking:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl font-light text-cyan-800 font-mono",
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl text-slate-300",
                                                            children: "Did we reduce emergency callouts per building per year?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl font-light text-cyan-800 font-mono",
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl text-slate-300",
                                                            children: "Did we increase the planned-to-reactive ratio?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl font-light text-cyan-800 font-mono",
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl text-slate-300",
                                                            children: "Did average repair cost per building drop?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 border border-cyan-900 bg-[#060B12] flex items-center gap-8 group hover:border-cyan-500 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl font-light text-cyan-800 font-mono",
                                                            children: "04"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl text-slate-300",
                                                            children: "Did variance in annual maintenance stabilize?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-12 flex items-center gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px w-24 bg-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl text-cyan-400 font-mono uppercase tracking-widest text-center",
                                                    children: [
                                                        "Reduced volatility. Predictability. Budget smoothing.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 90
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white mt-4 block",
                                                            children: "That’s executive-level value."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-px w-24 bg-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 343,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "07-deploy",
                            id: "07-deploy",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "7",
                                    title: "Deployment UX Strategy"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-16 mt-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-slate-400",
                                            children: "Now your UI should visualize actionable prescriptions."
                                        }, void 0, false, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-10 border border-white/5 bg-[#060B12] space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-900/50 px-2 py-1 inline-block",
                                                            children: "App View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-2xl text-white font-bold tracking-tight",
                                                            children: "Building Risk Index"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-5xl font-mono text-cyan-500 font-bold mb-4",
                                                                    children: [
                                                                        "84",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-lg text-slate-600",
                                                                            children: "/100"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                            lineNumber: 395,
                                                                            columnNumber: 108
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-sm text-slate-500 font-mono uppercase tracking-wider mt-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex justify-between border-b border-white/5 pb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Age Stress"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 397,
                                                                                    columnNumber: 111
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-400",
                                                                                    children: "+12%"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 397,
                                                                                    columnNumber: 135
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                            lineNumber: 397,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex justify-between border-b border-white/5 pb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Weather Tmp"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 398,
                                                                                    columnNumber: 111
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-400",
                                                                                    children: "+8%"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 398,
                                                                                    columnNumber: 136
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex justify-between border-b border-white/5 pb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Defect Accel"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 399,
                                                                                    columnNumber: 111
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-cyan-600",
                                                                                    children: "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 399,
                                                                                    columnNumber: 137
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                            lineNumber: 399,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Maint Lag"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 400,
                                                                                    columnNumber: 82
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-cyan-600",
                                                                                    children: "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                                    lineNumber: 400,
                                                                                    columnNumber: 105
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                            lineNumber: 400,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-10 border border-white/5 bg-[#060B12] space-y-6 flex flex-col justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-900/50 px-2 py-1 inline-block",
                                                                    children: "Graph View"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-2xl text-white font-bold tracking-tight mt-6",
                                                                    children: "Decay Curve Projection"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-500 mt-2",
                                                                    children: "Predicted risk growth over the next 24 months."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-8 pt-8 border-t border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-cyan-400 font-mono text-[10px] uppercase tracking-widest border border-cyan-900/50 px-2 py-1 inline-block",
                                                                    children: "Simulator Tool"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-lg text-white font-bold tracking-tight mt-6",
                                                                    children: "Intervention Impact"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-500 mt-2 italic",
                                                                    children: '"If we replace the flashing now, what does the risk curve look like?"'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center font-bold text-2xl text-cyan-400 tracking-wide mt-12 bg-cyan-950/20 p-8 border border-cyan-900/50",
                                            children: [
                                                "Now it’s not just predictive.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 62
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "It’s prescriptive."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 68
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 384,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "08-automate",
                            id: "08-automate",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "8",
                                    title: "Industrial Ingestion",
                                    quote: "“Future-proof the machine.”"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-16 mt-16 text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono",
                                                    children: "+ Weather API Integration"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono",
                                                    children: "+ GIS Environmental Layer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono",
                                                    children: "+ Auto Material Lifespan"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-6 py-4 border border-cyan-900 bg-[#060B12] uppercase tracking-widest text-[10px] font-mono",
                                                    children: "+ Warranty Alerts"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-12 border border-cyan-500/50 bg-cyan-950/20 text-center font-mono uppercase tracking-widest space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-sm",
                                                    children: "Every inspection becomes:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row items-center justify-center gap-6 text-cyan-400 font-bold text-lg md:text-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Structured Event"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-700 hidden md:inline",
                                                            children: ">"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-700 md:hidden",
                                                            children: "v"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Labeled Data"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-700 hidden md:inline",
                                                            children: ">"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-700 md:hidden",
                                                            children: "v"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: "Model Retrained."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-cyan-500 mt-8 pt-8 border-t border-cyan-900/50 inline-block text-xl",
                                                    children: [
                                                        "Pipeline ",
                                                        ">",
                                                        " Model."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 427,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "09-scale",
                            id: "09-scale",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "9",
                                    title: "Portfolio Strategy",
                                    subtitle: "Now We're Playing Big."
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-16 mt-16 bg-[#060B12] p-12 border-l border-cyan-500 text-lg text-slate-300 relative shadow-[20px_20px_40px_rgba(0,0,0,0.5)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-cyan-500 mt-1",
                                                            children: "[]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Cluster buildings by ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-white",
                                                                    children: "decay pattern"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 64
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-cyan-500 mt-1",
                                                            children: "[]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Detect ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-white",
                                                                    children: "abnormal deterioration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 50
                                                                }, this),
                                                                " outliers."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-cyan-500 mt-1",
                                                            children: "[]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Predict ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-white",
                                                                    children: "capital replacement cycles"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 51
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-cyan-500 mt-1",
                                                            children: "[]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Rank contractors by ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-white",
                                                                    children: "long-term failure recurrence"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 63
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-cyan-500 mt-1",
                                                            children: "[]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Detect ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-white",
                                                                    children: "material batch failures"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 50
                                                                }, this),
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-16 pt-12 border-t border-white/5 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[10px] text-cyan-500 uppercase tracking-widest",
                                                    children: "You move from"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-white tracking-tight flex flex-col gap-3 opacity-90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500 line-through",
                                                            children: "Maintenance Prediction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "pl-4 text-cyan-700",
                                                            children: "↳ Asset Lifecycle Optimization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "pl-8 text-cyan-400",
                                                            children: "↳ Portfolio-level Risk Arbitrage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 455,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-section": "10-finance",
                            id: "10-finance",
                            className: "relative font-medium pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManualHeader, {
                                    num: "10",
                                    title: "Finance & Capital Modeling",
                                    quote: "“Make the CFO love you.”"
                                }, void 0, false, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-16 mt-16 text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid lg:grid-cols-2 gap-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 border border-red-900/30 bg-red-950/10 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-[10px] text-red-400 uppercase tracking-widest border-b border-red-900/30 pb-2",
                                                            children: "The Baseline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-red-200",
                                                            children: "Expected Reactive Loss Curve"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-8 border border-cyan-900/50 bg-cyan-950/20 space-y-4 flex flex-col justify-center relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 -left-8 w-4 h-px bg-white/20 hidden lg:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute top-1/2 -left-12 -translate-y-1/2 font-mono text-[10px] text-white/40 hidden lg:block",
                                                            children: "VS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-mono text-[10px] text-cyan-400 uppercase tracking-widest border-b border-cyan-900/30 pb-2",
                                                            children: "The Model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-cyan-300",
                                                            children: "Predicted Preventative Curve"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-12 border border-indigo-900 bg-[#060B12] text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-6",
                                                    children: "Then Calculate:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-4xl text-white font-bold tracking-tight",
                                                    children: [
                                                        "Net Present Value ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 111
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-indigo-400",
                                                            children: "of early interventions."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 117
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center pt-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-slate-400 mb-8",
                                                    children: "Now the CFO listens. Because you’re not talking about leaks."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-cyan-400 text-sm uppercase tracking-widest leading-loose",
                                                    children: [
                                                        "You're talking about:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 58
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-white text-lg",
                                                            children: "Risk-Adjusted Capital Planning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 37
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 116
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-white text-lg",
                                                            children: "Volatility Reduction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 37
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 106
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-white text-lg",
                                                            children: "Asset Lifespan Extension"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 494,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-48 pt-32 border-t border-cyan-900/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto text-center space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-none",
                                        children: [
                                            "Because Roofs Fail ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 533,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-500",
                                                children: "In Patterns."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 533,
                                                columnNumber: 152
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                        lineNumber: 533,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-6 font-mono uppercase text-sm tracking-widest text-slate-400 pt-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors",
                                                children: "Water follows slope."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors",
                                                children: "Flashings fatigue."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors",
                                                children: "Membranes age."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 538,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors",
                                                children: "Constraints repeat."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 border border-white/5 hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-colors md:col-span-2",
                                                children: "Building typologies behave similarly."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-16 pb-32",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl text-slate-500 font-bold tracking-widest uppercase mb-4",
                                                children: "You’re not predicting chaos."
                                            }, void 0, false, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl md:text-4xl text-cyan-400 uppercase tracking-[0.2em] font-mono bg-cyan-950/30 py-6 border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)]",
                                                children: [
                                                    "You’re modeling ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "md:hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 222
                                                    }, this),
                                                    "decay curves."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                                lineNumber: 532,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                            lineNumber: 531,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                    lineNumber: 118,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(PredictiveRoofMaintenancePage, "aIAb16BsSrfJq5cdk7Pe98L/DDw=");
_c = PredictiveRoofMaintenancePage;
function ManualHeader({ num, title, subtitle, quote }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 border-b border-cyan-900/40 pb-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 font-mono text-[80px] leading-none font-bold text-cyan-950/20 select-none z-0",
                children: num.padStart(2, '0')
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 561,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end gap-x-6 gap-y-2 relative z-10 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-light text-cyan-600 leading-none font-mono tracking-widest",
                        children: [
                            "[",
                            num.padStart(2, '0'),
                            "]"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 566,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold uppercase tracking-tight text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 567,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 565,
                columnNumber: 13
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-sm uppercase tracking-widest text-cyan-400 absolute md:relative bottom-1 left-0 z-10 mt-2",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 570,
                columnNumber: 26
            }, this),
            quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-sm uppercase tracking-widest text-slate-500 relative z-10 italic mt-2",
                children: quote
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 571,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
        lineNumber: 560,
        columnNumber: 10
    }, this);
}
_c1 = ManualHeader;
function SignalBlock({ title, tag, metrics, reason, color }) {
    const borders = {
        'cyan': 'border-cyan-500',
        'blue': 'border-blue-500',
        'orange': 'border-orange-500',
        'purple': 'border-purple-500',
        'red': 'border-red-500'
    };
    const texts = {
        'cyan': 'text-cyan-400',
        'blue': 'text-blue-400',
        'orange': 'text-orange-400',
        'purple': 'text-purple-400',
        'red': 'text-red-400'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-6 border-l-2 ${borders[color]} pl-8 relative`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute -top-3 left-8 font-mono text-[9px] uppercase tracking-widest ${texts[color]} bg-[#020508] px-2 py-1 border border-white/10`,
                children: tag
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 596,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-2xl font-bold text-white pt-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 599,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3 font-mono text-xs text-slate-300 bg-[#060B12] p-6 border border-white/5",
                children: metrics.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            "+ ",
                            m
                        ]
                    }, m, true, {
                        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                        lineNumber: 601,
                        columnNumber: 35
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 600,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400 italic text-sm",
                children: reason
            }, void 0, false, {
                fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
                lineNumber: 603,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/research/predictive-roof-maintenance/page.tsx",
        lineNumber: 595,
        columnNumber: 10
    }, this);
}
_c2 = SignalBlock;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PredictiveRoofMaintenancePage");
__turbopack_context__.k.register(_c1, "ManualHeader");
__turbopack_context__.k.register(_c2, "SignalBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_research_predictive-roof-maintenance_page_tsx_9fb19a6a._.js.map