(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SectionContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionContainer({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-7xl mx-auto px-6 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/SectionContainer.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = SectionContainer;
var _c;
__turbopack_context__.k.register(_c, "SectionContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ComplexityTag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplexityTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ComplexityTag({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "badge",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ComplexityTag.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = ComplexityTag;
var _c;
__turbopack_context__.k.register(_c, "ComplexityTag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Tilt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tilt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Tilt({ children, active = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function onMove(e) {
        if (!active || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = (y - rect.height / 2) / rect.height * -6;
        const ry = (x - rect.width / 2) / rect.width * 8;
        ref.current.style.setProperty('--rx', rx + 'deg');
        ref.current.style.setProperty('--ry', ry + 'deg');
    }
    function onLeave() {
        if (!ref.current) return;
        ref.current.style.setProperty('--rx', '0deg');
        ref.current.style.setProperty('--ry', '0deg');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseMove: onMove,
        onMouseLeave: onLeave,
        className: "tilt",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Tilt.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_s(Tilt, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c = Tilt;
var _c;
__turbopack_context__.k.register(_c, "Tilt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComplexityTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComplexityTag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tilt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Tilt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
;
;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tilt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: {
                y: -6
            },
            className: "project-card card hover:shadow-lg transition-transform transform",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/work/${project.slug}`,
                className: "block relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-card-image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.thumbnail || project.image || '/images/portfolio/placeholder.svg',
                            alt: project.title,
                            className: "w-full h-40 object-cover rounded-t-md"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overlay-cta",
                            children: "View case study"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-card-title",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 project-card-desc",
                                children: project.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            project.complexityTags && project.complexityTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: project.complexityTags.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComplexityTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 62
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 23,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProjectCard.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProjectCard.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: 'imediate',
        title: 'iMediate',
        category: 'Regulated Mediation',
        shortDescription: 'iMediate is a co-parenting infrastructure layer built on WhatsApp that integrates behavioral guidance (NVC), automatic calendar extraction, court-ready documentation, and child activity ecosystem coordination into a structured, defensible system.',
        engagementModes: [
            'venture-builder',
            'product-leadership-partner',
            'design-systems',
            'regulated-systems'
        ],
        image: '/images/portfolio/imediate/iMediate_cover.webp',
        thumbnail: '/images/portfolio/imediate/iMediate_thumbnail.webp',
        cover: '/images/portfolio/imediate/iMediate_cover.webp',
        hero: '/images/portfolio/imediate/iMediate_hero.webp',
        complexityTags: [
            'Regulatory',
            'Traceability',
            'Behavioral Design'
        ],
        industry: 'Legal / Dispute Resolution',
        scaleStage: 'Regulated',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Court and out-of-court mediation workflows scoped for jurisdictional variation'
            },
            {
                label: 'System Complexity',
                value: 'Court-ready documentation and evidence traceability'
            },
            {
                label: 'Operational Impact',
                value: 'Defined case-handling workflows that reduce manual reconciliation'
            }
        ]
    },
    {
        slug: 'shootatlas',
        title: 'ShootAtlas',
        category: 'Field Production / Media Production',
        shortDescription: 'ShootAtlas is a production coordination platform for on-location photoshoots. It centralizes shot planning, crew coordination, equipment tracking, and live schedule management — enhanced by an AI assistant that anticipates risks, automates logistics, and reduces production delays.',
        engagementModes: [
            'product-leadership-partner',
            'design-systems'
        ],
        image: '/images/portfolio/placeholder.svg',
        complexityTags: [
            'Field Production',
            'AI-Augmented',
            'Mobile-First'
        ],
        industry: 'Media / Production',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Product Scope',
                value: 'Production coordination for on-location shoots: planning → execution → client updates'
            },
            {
                label: 'System Complexity',
                value: 'Realtime schedule orchestration, inventory tracking and AI-assisted risk detection'
            },
            {
                label: 'Operational Impact',
                value: 'Reduced delays and clearer crew responsibilities for field productions'
            }
        ]
    },
    {
        slug: 'power-proof-portal',
        title: 'Power Proof Portal',
        category: 'Energy Compliance Platform',
        shortDescription: 'An infrastructure layer for proving and certifying renewable generation provenance to market and regulators.',
        engagementModes: [
            'product-leadership-partner',
            'regulated-systems'
        ],
        image: '/images/portfolio/power-proof-portal/power-proof-portal_cover.webp',
        thumbnail: '/images/portfolio/power-proof-portal/power-proof-portal_thumbnail.webp',
        cover: '/images/portfolio/power-proof-portal/power-proof-portal_cover.webp',
        hero: '/images/portfolio/power-proof-portal/power-proof-portal_hero.webp',
        complexityTags: [
            'Multi-Market',
            'Regulatory',
            'Enterprise Workflow'
        ],
        industry: 'Energy / Utilities',
        scaleStage: 'Growth',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Framework for multi-market certificate exchange and audit'
            },
            {
                label: 'System Complexity',
                value: 'Compliance-aware architecture with immutable evidence stores'
            },
            {
                label: 'Operational Impact',
                value: 'Reduced manual verification steps for settlement teams'
            }
        ]
    },
    {
        slug: 'a2x-global',
        title: 'A2X Global',
        category: 'Cross-border Platform',
        shortDescription: 'Platform work to coordinate cross-border data flows and product adaptations for varied regulatory constraints.',
        engagementModes: [
            'product-leadership-partner',
            'regulated-systems'
        ],
        image: '/images/portfolio/a2x-global/a2x-global_cover.webp',
        thumbnail: '/images/portfolio/a2x-global/a2x-global_thumbnail.webp',
        cover: '/images/portfolio/a2x-global/a2x-global_cover.webp',
        hero: '/images/portfolio/a2x-global/a2x-global_hero.webp',
        complexityTags: [
            'Multi-Market',
            'Cross-Market Adaptability',
            'Enterprise Workflow'
        ],
        industry: 'Logistics / Cross-border Services',
        scaleStage: 'Growth',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Adaptation patterns defined for jurisdictional differences'
            },
            {
                label: 'System Complexity',
                value: 'Data-mapping and transformation strategy for multi-market flows'
            },
            {
                label: 'Operational Impact',
                value: 'Clear handoffs between local ops and central product teams'
            }
        ]
    },
    {
        slug: 'extra-ticket',
        title: 'Extra Ticket',
        category: 'Event Marketplace',
        shortDescription: 'A ticketing marketplace optimised for secondary transactions and user trust across informal networks.',
        engagementModes: [
            'venture-builder',
            'design-systems'
        ],
        image: '/images/portfolio/extra-ticket/extra-ticket_cover.webp',
        thumbnail: '/images/portfolio/extra-ticket/extra-ticket_thumbnail.webp',
        cover: '/images/portfolio/extra-ticket/extra-ticket_cover.webp',
        hero: '/images/portfolio/extra-ticket/extra-ticket_hero.webp',
        complexityTags: [
            'Marketplace Dynamics',
            'Behavioral Design',
            'Consumer Social'
        ],
        industry: 'Events / Marketplace',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Two-sided marketplace dynamics scoped with trust mechanisms'
            },
            {
                label: 'System Complexity',
                value: 'Listing, matching and dispute workflows with lightweight verification'
            },
            {
                label: 'Operational Impact',
                value: 'Reduced dispute resolution overhead through clearer flows'
            }
        ]
    },
    {
        slug: 'leaf',
        title: 'Leaf',
        category: 'Consumer Energy App',
        shortDescription: 'A consumer-facing energy app focused on behavioural nudges to reduce consumption and coordinate community programs.',
        engagementModes: [
            'venture-builder',
            'design-systems'
        ],
        image: '/images/portfolio/leaf/leaf_cover.webp',
        thumbnail: '/images/portfolio/leaf/leaf_thumbnail.webp',
        cover: '/images/portfolio/leaf/leaf_cover.webp',
        hero: '/images/portfolio/leaf/leaf_hero.webp',
        complexityTags: [
            'Behavioral Design',
            'Community Infrastructure',
            'AI-Enabled'
        ],
        industry: 'Energy / Consumer',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Pilot programs defined for community cohorts'
            },
            {
                label: 'System Complexity',
                value: 'Interaction architecture for persuasive incentives'
            },
            {
                label: 'Operational Impact',
                value: 'Operational patterns for program rollouts'
            }
        ]
    },
    {
        slug: 'fluffybutt',
        title: 'FluffyButt',
        category: 'Design System',
        shortDescription: 'Design system work to unify visual and interaction patterns across consumer products and reduce fragmentation.',
        engagementModes: [
            'design-systems'
        ],
        image: '/images/portfolio/fluffybutt/fluffybutt_cover.webp',
        thumbnail: '/images/portfolio/fluffybutt/fluffybutt_thumbnail.webp',
        cover: '/images/portfolio/fluffybutt/fluffybutt_cover.webp',
        hero: '/images/portfolio/fluffybutt/fluffybutt_hero.webp',
        complexityTags: [
            'Design Governance',
            'Consumer Social'
        ],
        industry: 'Consumer Apps',
        scaleStage: 'Growth',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Component library and usage patterns documented across products'
            },
            {
                label: 'System Complexity',
                value: 'Design governance and contribution model defined'
            },
            {
                label: 'Operational Impact',
                value: 'Reduced visual inconsistency and faster feature delivery'
            }
        ]
    },
    {
        slug: 'gk-mvp',
        title: 'GK-MVP',
        category: 'Food Logistics MVP',
        shortDescription: 'A lightweight logistics and ordering MVP for community kitchens to coordinate supply and deliveries efficiently.',
        engagementModes: [
            'venture-builder',
            'design-systems'
        ],
        image: '/images/portfolio/gk-mvp/gk-mvp_cover.webp',
        thumbnail: '/images/portfolio/gk-mvp/gk-mvp_thumbnail.webp',
        cover: '/images/portfolio/gk-mvp/gk-mvp_cover.webp',
        hero: '/images/portfolio/gk-mvp/gk-mvp_hero.webp',
        complexityTags: [
            'Community Infrastructure',
            'Enterprise Workflow'
        ],
        industry: 'Logistics / Food Services',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Local market pilots and operational constraints scoped'
            },
            {
                label: 'System Complexity',
                value: 'Order-to-delivery workflow defined for low-friction ops'
            },
            {
                label: 'Operational Impact',
                value: 'Clear coordination rules for kitchen operators'
            }
        ]
    },
    {
        slug: 'photosell',
        title: 'PhotoSell',
        category: 'Insurance-integrated Commerce',
        shortDescription: 'Commerce platform for selling photographic assets with embedded insurance and licensing workflows.',
        engagementModes: [
            'product-leadership-partner',
            'regulated-systems'
        ],
        image: '/images/portfolio/photosell/photosell_cover.webp',
        thumbnail: '/images/portfolio/photosell/photosell_thumbnail.webp',
        cover: '/images/portfolio/photosell/photosell_cover.webp',
        hero: '/images/portfolio/photosell/photosell_hero.webp',
        complexityTags: [
            'Marketplace Dynamics',
            'Regulatory',
            'AI-Enabled'
        ],
        industry: 'Commerce / Media',
        scaleStage: 'Growth',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Insurance integration patterns and partner models documented'
            },
            {
                label: 'System Complexity',
                value: 'Licensing, claims and settlement workflows articulated'
            },
            {
                label: 'Operational Impact',
                value: 'Defined operations for content verification and claims handling'
            }
        ]
    },
    {
        slug: 'supergramp',
        title: 'SuperGramp',
        category: 'Community Care Platform',
        shortDescription: 'A platform connecting elder-care volunteers to local services with robust scheduling and verification.',
        engagementModes: [
            'venture-builder'
        ],
        image: '/images/portfolio/supergramp/supergramp_cover.webp',
        thumbnail: '/images/portfolio/supergramp/supergramp_thumbnail.webp',
        cover: '/images/portfolio/supergramp/supergramp_cover.webp',
        hero: '/images/portfolio/supergramp/supergramp_hero.webp',
        complexityTags: [
            'Community Infrastructure',
            'Enterprise Workflow'
        ],
        industry: 'Community / Social Services',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Market Scope',
                value: 'Local service networks defined with onboarding patterns'
            },
            {
                label: 'System Complexity',
                value: 'Scheduling and verification architecture'
            },
            {
                label: 'Operational Impact',
                value: 'Clear volunteer coordination flows'
            }
        ]
    },
    {
        slug: 'five-things',
        title: 'Five Things',
        category: 'Mindfulness / Mental Clarity',
        shortDescription: 'A mindful reset in under 60 seconds — designed as a native iOS experience that surfaces brief, repeatable cognitive grounding.',
        engagementModes: [
            'product-leadership-partner',
            'design-systems'
        ],
        image: '/images/portfolio/five-things/five-things_cover.webp',
        thumbnail: '/images/portfolio/five-things/five-things_thumbnail.webp',
        cover: '/images/portfolio/five-things/five-things_cover.webp',
        hero: '/images/portfolio/five-things/five-things_hero.webp',
        complexityTags: [
            'Behavioral Design',
            'Mobile Native',
            'Privacy-First'
        ],
        industry: 'Wellness / Consumer',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Product Scope',
                value: 'One-screen micro-habit for daily cognitive resets'
            },
            {
                label: 'System Complexity',
                value: 'On-device processing and minimal backend for analytics'
            },
            {
                label: 'User Impact',
                value: 'Low-friction completion flows suited for busy users'
            }
        ]
    },
    {
        slug: 'roofdraft',
        title: 'RoofDraft',
        category: 'Construction Tech / Field Operations',
        shortDescription: 'An iOS LiDAR-enabled workflow that scans roofs, detects defects, and auto-generates AI-assisted work orders for field teams.',
        engagementModes: [
            'venture-builder',
            'product-leadership-partner',
            'regulated-systems'
        ],
        image: '/images/portfolio/roofdraft/roofdraft_cover.webp',
        thumbnail: '/images/portfolio/roofdraft/roofdraft_thumbnail.webp',
        cover: '/images/portfolio/roofdraft/roofdraft_cover.webp',
        hero: '/images/portfolio/roofdraft/roofdraft_hero.webp',
        complexityTags: [
            'LiDAR',
            'AI-Enabled',
            'Field Operations'
        ],
        industry: 'Construction / Insurance',
        scaleStage: 'Early',
        metrics: [
            {
                label: 'Operational Scope',
                value: 'On-device model generation, defect detection and structured exports'
            },
            {
                label: 'System Complexity',
                value: 'Hardware integration with AI inference and CRM pipelines'
            },
            {
                label: 'Business Impact',
                value: 'Faster inspections and higher estimate accuracy'
            }
        ]
    }
];
const __TURBOPACK__default__export__ = projects;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContactCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function ContactCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        className: "border border-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-semibold",
                        children: "Work with Lanchester R&D"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactCTA.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-600",
                        children: "We help organizations design product strategy and systems thinking for complex domains."
                    }, void 0, false, {
                        fileName: "[project]/components/ContactCTA.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactCTA.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "px-5 py-3 bg-accent text-white rounded-md",
                        children: "Start a conversation"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactCTA.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/engagement/venture-builder",
                        className: "px-5 py-3 border border-gray-100 rounded-md",
                        children: "Explore engagement models"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactCTA.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactCTA.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactCTA.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = ContactCTA;
var _c;
__turbopack_context__.k.register(_c, "ContactCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/work/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContactCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ContactCTA.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const modes = [
    {
        key: 'all',
        label: 'All'
    },
    {
        key: 'venture-builder',
        label: 'Venture Builder'
    },
    {
        key: 'product-leadership-partner',
        label: 'Product Leadership Partner'
    },
    {
        key: 'design-systems',
        label: 'Design Systems'
    },
    {
        key: 'regulated-systems',
        label: 'Regulated Systems'
    }
];
function WorkIndex() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const list = filter === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.engagementModes.includes(filter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-semibold",
                children: "Case Studies"
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-gray-600",
                children: "Selected case studies demonstrate how Lanchester R&D applies structured thinking across consumer platforms, regulated systems, logistics, energy, and community infrastructure. Each project represents a different leverage point inside a product ecosystem."
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex gap-3 items-center flex-wrap",
                children: modes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(m.key),
                        className: `px-3 py-1 rounded-full text-sm ${filter === m.key ? 'bg-accent text-white' : 'border border-gray-100 text-gray-800'}`,
                        children: m.label
                    }, m.key, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 32,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: p
                    }, p.slug, false, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 38,
                        columnNumber: 24
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContactCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/work/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/work/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/work/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(WorkIndex, "W/UjwQokI5qYZ80z+yO8skpbfNg=");
_c = WorkIndex;
var _c;
__turbopack_context__.k.register(_c, "WorkIndex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a98446d0._.js.map