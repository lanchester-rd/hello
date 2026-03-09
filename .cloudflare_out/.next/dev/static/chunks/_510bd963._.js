(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: 'imediate-app',
        name: 'iMediate App',
        category: 'Coordination Systems',
        one_liner: 'Decentralized crisis coordination platform for rapid response resource allocation in complex urban environments.',
        strategic_context: 'Emergency response often fails not due to lack of resources, but due to information asymmetry and coordination latency.',
        competitive_imbalance: 'Centralized dispatch systems create a bottleneck, causing fatal delays during high-density crisis events.',
        system_hypothesis: 'By decentralizing node coordination, we can compress response times by 40% using autonomous resource mapping.',
        product_architecture: 'Real-time peer-to-peer relay, geolocation mesh, and dynamic weighting for resource priority.',
        ai_leverage: 'Predictive demand modeling to pre-position resources based on live signal density.',
        outcomes_or_learnings: 'Proved that decentralized coordination reduces system-wide stress and prevents total bottleneck failure.',
        tags: [
            'Coordination',
            'iOS',
            'Real-time',
            'System Design'
        ],
        image_placeholder: '/images/systems/imediate-hero.jpg',
        featured: true
    },
    {
        slug: 'shootatlas',
        name: 'ShootAtlas',
        category: 'Operational Intelligence',
        one_liner: 'Hyper-local logistics intelligence for complex production environments and resource-intensive asset management.',
        strategic_context: 'Global production crews operate in information vacuums, leading to massive resource waste and scheduling drift.',
        competitive_imbalance: 'Reliance on static spreadsheets and fragmented tribal knowledge creates operational noise and financial leakage.',
        system_hypothesis: 'A unified intelligence layer converts fragmented signals into a coherent operational map for all stakeholders.',
        product_architecture: 'Modular geospatial database integrated with live weather, permit, and talent resource APIs.',
        ai_leverage: 'Computer vision for automated site scouting analysis and risk assessment scoring.',
        outcomes_or_learnings: 'Reduced scheduling overhead by 60% and secured signal clarity across cross-functional teams.',
        tags: [
            'Logistics',
            'Operational Intelligence',
            'Web',
            'API'
        ],
        image_placeholder: '/images/systems/shootatlas-hero.jpg',
        featured: true
    },
    {
        slug: 'iru-assistant',
        name: 'IRU-Assistant',
        category: 'Operational Intelligence',
        one_liner: 'AI-augmented regulatory intelligence system for navigating complex international transport frameworks.',
        strategic_context: 'Transport operators face a constantly shifting landscape of international compliance and cross-border protocols.',
        competitive_imbalance: 'Compliance lag creates legal liability and slows down cross-border movement velocity.',
        system_hypothesis: 'Augmenting operators with real-time regulatory synthesis allows for zero-latency decision making.',
        product_architecture: 'Neural search engine keyed to international law databases with a low-latency query interface.',
        ai_leverage: 'Large Language Model (LLM) fine-tuned on transport law for extremely precise regulatory extraction.',
        outcomes_or_learnings: 'Drastic reduction in compliance errors and improved operational confidence in unknown jurisdictions.',
        tags: [
            'AI',
            'Compliance',
            'Intelligence',
            'NLP'
        ],
        image_placeholder: '/images/systems/iru-hero.jpg',
        featured: true
    },
    {
        slug: 'roofdraft',
        name: 'Roofdraft',
        category: 'Operational Intelligence',
        one_liner: 'Automated measurement and precision drafting system for high-scale architectural intelligence.',
        strategic_context: 'Manual architectural survey is slow, prone to error, and creates a massive bottleneck for project initiation.',
        competitive_imbalance: 'The delta between manual measurement and digital drafting leads to costly reconstruction and material waste.',
        system_hypothesis: 'Algorithmic computer vision can convert low-fidelity imagery into high-precision technical blueprints.',
        product_architecture: 'Proprietary CV engine processing aerial photography into vector-based CAD data.',
        ai_leverage: 'Neural nets for edge detection and material identification to automate drafting workflows.',
        outcomes_or_learnings: 'Accelerated the survey-to-draft cycle from days to minutes with sub-centimeter accuracy.',
        tags: [
            'Computer Vision',
            'Automation',
            'Engineering',
            'Web'
        ],
        image_placeholder: '/images/systems/roofdraft-hero.jpg',
        featured: true
    },
    {
        slug: 'a2x-global',
        name: 'a2x-global',
        category: 'Operational Intelligence',
        one_liner: 'Integrated asset tracking and market intelligence platform for global logistics arbitrage.',
        strategic_context: 'Global supply chains are opaque, hiding inefficiencies that can be exploited for strategic advantage.',
        competitive_imbalance: 'Disparate data silos prevent a unified view of asset velocity and market demand signaling.',
        system_hypothesis: 'Consolidating global logistics data into a single intelligence layer reveals massive arbitrage opportunities.',
        product_architecture: 'High-throughput data ingestion pipelines feeding a central analytics and forecasting engine.',
        ai_leverage: 'Time-series forecasting models to predict market volatility and optimize asset positioning.',
        outcomes_or_learnings: 'Successfully identified and exploited supply chain asymmetries that were previously invisible.',
        tags: [
            'Logistics',
            'Arbitrage',
            'Data Science',
            'SaaS'
        ],
        image_placeholder: '/images/systems/a2x-hero.jpg',
        featured: true
    },
    {
        slug: 'imediate-whatsapp',
        name: 'iMediate WhatsApp',
        category: 'Coordination Systems',
        one_liner: 'Low-bandwidth coordination layer for high-utility crisis communication within existing social graphs.',
        strategic_context: 'In high-stress crises, users default to familiar tools. New apps create friction when time is the primary constraint.',
        competitive_imbalance: 'Standard messaging apps lack structured data for resource coordination, leading to information overload.',
        system_hypothesis: 'Injecting coordination structures into existing social tunnels (WhatsApp) maximizes adoption and utility.',
        product_architecture: 'Bot-led structured data collection mapped to a central crisis coordination dashboard.',
        ai_leverage: 'Natural Language Understanding (NLU) to classify and prioritize incoming distress signals.',
        outcomes_or_learnings: 'High adoption rates in low-connectivity areas; proved that familiar interfaces reduce cognitive load.',
        tags: [
            'Coordination',
            'WhatsApp',
            'NLU',
            'Low-MB'
        ],
        image_placeholder: '/images/systems/imediate-wa-hero.jpg',
        featured: false
    },
    {
        slug: 'leaf',
        name: 'leaf',
        category: 'Coordination Systems',
        one_liner: 'Micro-coordination system for high-density team task management and resource synchronization.',
        strategic_context: 'Traditional project management tools are too heavy for high-velocity, short-burst operational tasks.',
        competitive_imbalance: 'Standard tools create overhead "work about work," which destroys execution momentum in small teams.',
        system_hypothesis: 'A frictionless, single-purpose coordination tool increases execution velocity in small, elite teams.',
        product_architecture: 'Ultra-lightweight state-sharing engine with aggressive optimistic UI patterns.',
        ai_leverage: 'Automated task sequencing based on team capacity and priority weighting.',
        outcomes_or_learnings: 'Significantly reduced meeting overhead and increased "flow state" duration for technical performers.',
        tags: [
            'Productivity',
            'Coordination',
            'Mobile',
            'UI/UX'
        ],
        image_placeholder: '/images/systems/leaf-hero.jpg',
        featured: false
    },
    {
        slug: 'supergramp',
        name: 'supergramp',
        category: 'Coordination Systems',
        one_liner: 'Generational knowledge transfer system and family coordination node.',
        strategic_context: 'Fragmented family structures lead to the loss of critical heritage and practical tribal knowledge.',
        competitive_imbalance: 'Digital social platforms focus on breadth over depth, ignoring the strategic value of deep generational nodes.',
        system_hypothesis: 'Structuring generational knowledge as an accessible repository increases family unit resilience.',
        product_architecture: 'Hierarchical data vault for media and structured narrative data.',
        ai_leverage: 'Automated transcription and semantic indexing of oral history recordings.',
        outcomes_or_learnings: 'Enhanced family coordination and secured a persistent "signal" across generational shifts.',
        tags: [
            'Heritage',
            'Knowledge Management',
            'Social'
        ],
        image_placeholder: '/images/systems/supergramp-hero.jpg',
        featured: false
    },
    {
        slug: 'extra-ticket',
        name: 'Extra Ticket',
        category: 'Market & Asset Optimization',
        one_liner: 'Algorithmic secondary market yield optimization and resource reallocation system.',
        strategic_context: 'Secondary asset markets (tickets/access) are rife with inefficiencies and speculative noise.',
        competitive_imbalance: 'Manual arbitrage is slow; static pricing leads to massive value leakage for original asset owners.',
        system_hypothesis: 'Dynamic, signal-driven pricing models maximize yield while ensuring fair-market allocation.',
        product_architecture: 'Real-time scraper and indexer for global secondary market pricing data.',
        ai_leverage: 'Sentiment analysis on social volume to predict demand spikes before they hit the market.',
        outcomes_or_learnings: 'Achieved 30% higher yield for inventory managed by the system vs. manual benchmarks.',
        tags: [
            'Fintech',
            'Marketplace',
            'Optimization',
            'Python'
        ],
        image_placeholder: '/images/systems/extraticket-hero.jpg',
        featured: false
    },
    {
        slug: 'photosell',
        name: 'photosell',
        category: 'Market & Asset Optimization',
        one_liner: 'Automated asset monetization and distribution engine for high-volume creative practitioners.',
        strategic_context: 'Individual creators build massive asset libraries but lack the operational systems to monetize them at scale.',
        competitive_imbalance: 'The "long tail" of creative assets remains unmonetized due to the high manual cost of distribution.',
        system_hypothesis: 'Automating the indexing and licensing pipeline converts dormant assets into passive revenue streams.',
        product_architecture: 'Bulk ingestion and auto-tagging system integrated with global stock and licensing APIs.',
        ai_leverage: 'Automated metadata generation and SEO-optimized descriptive data for asset indexing.',
        outcomes_or_learnings: 'Transformed static archives into active revenue-generating portfolios with zero ongoing labor.',
        tags: [
            'E-commerce',
            'Automation',
            'Media',
            'SaaS'
        ],
        image_placeholder: '/images/systems/photosell-hero.jpg',
        featured: false
    },
    {
        slug: 'gk-mvp',
        name: 'gk-mvp (GurillaKitchen.org)',
        category: 'Market & Asset Optimization',
        one_liner: 'Distributed food systems and asset-light hospitality coordination platform.',
        strategic_context: 'The traditional restaurant model is rigid and capital-intensive, making it vulnerable to market shifts.',
        competitive_imbalance: 'High fixed costs and operational overhead prevent the rapid testing of hospitality concepts.',
        system_hypothesis: 'An asset-light, coordinate-first hospitality model allows for hyper-fast concept iteration and pivoting.',
        product_architecture: 'Lightweight order and logistics engine for temporary and mobile food nodes.',
        ai_leverage: 'Localized demand forecasting to optimize inventory for pop-up locations.',
        outcomes_or_learnings: 'Demonstrated that operational flexibility is a massive competitive advantage in high-volatility markets.',
        tags: [
            'Hospitality',
            'Logistics',
            'MVP',
            'Web'
        ],
        image_placeholder: '/images/systems/gk-hero.jpg',
        featured: false
    },
    {
        slug: 'five-things',
        name: 'Five Things',
        category: 'Behavioral & Wellbeing',
        one_liner: 'Low-friction behavioral signaling and gratitude-based cognitive ritualization system.',
        strategic_context: 'Digital wellbeing tools often fail because they create more cognitive load than they resolve.',
        competitive_imbalance: 'Complexity is the enemy of consistency in behavioral change systems.',
        system_hypothesis: 'A radically simple, single-purpose system increases ritualization adherence by reducing friction points.',
        product_architecture: 'Minimalist atomic-design mobile interface with focused entry points.',
        ai_leverage: 'Semantic analysis of entries to track persistent wellbeing signals over long durations.',
        outcomes_or_learnings: 'Retention rates significantly outperformed complex "habit tracking" apps by focusing on singular utility.',
        tags: [
            'Mental Health',
            'Ritual',
            'Mobile',
            'UI'
        ],
        image_placeholder: '/images/systems/fivethings-hero.jpg',
        featured: false
    },
    {
        slug: 'fluffybutt',
        name: 'fluffybutt',
        category: 'Behavioral & Wellbeing',
        one_liner: 'Nudge-based behavioral system for maintaining consistency in health and care routines.',
        strategic_context: 'Care routines are often interrupted by the "noise" of modern life, leading to downstream health failures.',
        competitive_imbalance: 'Generic notification systems are ignored; they lack the emotional resonance to break habit-loop failures.',
        system_hypothesis: 'Personalized, context-aware nudging increases care consistency and long-term health outcomes.',
        product_architecture: 'Context-sensitive notification engine based on user activity and daily rhythms.',
        ai_leverage: 'Reinforcement learning to optimize notification timing for maximum "compliance" probability.',
        outcomes_or_learnings: 'Achieved sustained behavioral alignment in routine-heavy care tasks over an 18-month period.',
        tags: [
            'Care',
            'Behavioral Science',
            'Mobile',
            'UX'
        ],
        image_placeholder: '/images/systems/fluffybutt-hero.jpg',
        featured: false
    }
];
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
        role: "listitem",
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
"[project]/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComplexityTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComplexityTag.tsx [app-client] (ecmascript)");
;
;
;
/**
 * Derives a 3-line POI summary from project metrics (or falls back to shortDescription).
 * Metrics[0] = Problem context, [1] = Intervention, [2] = Outcome.
 */ function getPoi(project) {
    if (project.metrics && project.metrics.length >= 3) {
        return [
            {
                key: 'Problem',
                value: project.metrics[0].value
            },
            {
                key: 'Intervention',
                value: project.metrics[1].value
            },
            {
                key: 'Outcome',
                value: project.metrics[2].value
            }
        ];
    }
    return [];
}
function ProjectCard({ project }) {
    const poi = getPoi(project);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/work/${project.slug}`,
        className: "project-card block relative group",
        "aria-label": `View case study: ${project.title}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-card-image relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: project.thumbnail || project.image || '/images/portfolio/placeholder.svg',
                        alt: "",
                        "aria-hidden": "true",
                        className: "w-full h-44 object-cover",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-overlay",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "overlay-cta",
                            children: "View case study"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-card-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-card-category",
                        children: project.category
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "project-card-title",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "project-card-desc line-clamp-2",
                        children: project.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    project.complexityTags && project.complexityTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-1.5",
                        role: "list",
                        "aria-label": "Complexity tags",
                        children: project.complexityTags.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComplexityTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 44,
                                columnNumber: 58
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 43,
                        columnNumber: 73
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            poi.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-card-poi",
                "aria-label": "Problem / Intervention / Outcome",
                children: poi.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "poi-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "poi-label",
                                children: row.key
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "poi-value line-clamp-2",
                                children: row.value
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, row.key, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 50,
                        columnNumber: 27
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 49,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCard.tsx",
        lineNumber: 26,
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
"[project]/components/SelectedWork.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectedWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function SelectedWork({ filter }) {
    const minShow = 4;
    const maxShow = 6;
    let list = filter ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.engagementModes.includes(filter)) : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].slice(0, 4);
    if (filter) {
        if (list.length < minShow) {
            const extras = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>!list.some((lp)=>lp.slug === p.slug));
            for (const e of extras){
                list.push(e);
                if (list.length >= minShow) break;
            }
        }
        list = list.slice(0, maxShow);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5",
            role: "list",
            children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "listitem",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: p
                    }, void 0, false, {
                        fileName: "[project]/components/SelectedWork.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, p.slug, false, {
                    fileName: "[project]/components/SelectedWork.tsx",
                    lineNumber: 23,
                    columnNumber: 24
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/SelectedWork.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SelectedWork.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_c = SelectedWork;
var _c;
__turbopack_context__.k.register(_c, "SelectedWork");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MeasurementRail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeasurementRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MeasurementRail() {
    _s();
    const fillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeasurementRail.useEffect": ()=>{
            const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (mq.matches) return;
            const update = {
                "MeasurementRail.useEffect.update": ()=>{
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
                    if (fillRef.current) {
                        fillRef.current.style.height = `${ratio * 100}%`;
                    }
                }
            }["MeasurementRail.useEffect.update"];
            window.addEventListener('scroll', update, {
                passive: true
            });
            update();
            return ({
                "MeasurementRail.useEffect": ()=>window.removeEventListener('scroll', update)
            })["MeasurementRail.useEffect"];
        }
    }["MeasurementRail.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "measurement-rail",
        "aria-hidden": "true",
        role: "presentation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: fillRef,
            className: "measurement-rail-fill"
        }, void 0, false, {
            fileName: "[project]/components/MeasurementRail.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MeasurementRail.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
_s(MeasurementRail, "/bCvsHLZppcYn+l67o1widLIpC4=");
_c = MeasurementRail;
var _c;
__turbopack_context__.k.register(_c, "MeasurementRail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_510bd963._.js.map