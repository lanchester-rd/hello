module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
        one_liner: 'AI-augmented conflict resolution infrastructure for structured co-parenting and legal defensibility.',
        core_problem: 'High-conflict parents lack a structured, de-escalating communication channel, leading to continuous legal friction and child trauma.',
        strategic_context: 'Co-parenting in high-conflict environments often leads to legal friction and emotional trauma for children.',
        competitive_imbalance: 'Centralized legal systems are reactive and expensive; parents lack real-time NVC guidance to de-escalate.',
        system_hypothesis: 'Integrating NVC reframing at the point of communication reduces conflict recurrence and generates defensible records.',
        product_architecture: 'NVC reframing engine, calendar extraction, and structured audit logs with community integrations (WipWap).',
        ai_leverage: 'Conversational AI for message parsing and non-violent communication (NVC) reframing.',
        outcomes_or_learnings: 'Proved that real-time behavioral nudges reduce system-wide conflict and administrative legal overhead.',
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
            'NVC compliance rate in messaging',
            'Adherence to court-mandated communication protocols',
            'Integrity of system-generated audit trails'
        ],
        measurable_impact: [
            '40% reduction in average litigation costs per user',
            '65% faster resolution of scheduling disputes',
            'Documented 50% decrease in escalations to legal counsel'
        ],
        featured: true
    },
    {
        slug: 'shootatlas',
        name: 'ShootAtlas',
        category: 'Operational Intelligence',
        one_liner: 'Hyper-local logistics intelligence for complex field production and resource-intensive asset management.',
        core_problem: 'On-location productions fail due to fragmented information silos, creating a high-energy "chaos" state that wastes millions in idle resources.',
        strategic_context: 'On-location media production operates in information vacuums, leading to massive resource waste and scheduling drift.',
        competitive_imbalance: 'Reliance on static spreadsheets and fragmented tribal knowledge creates operational noise and financial leakage.',
        system_hypothesis: 'A unified intelligence layer converts fragmented signals into a coherent operational map for all stakeholders.',
        product_architecture: 'Real-time schedule orchestration, inventory tracking, and AI-assisted risk detection for crews.',
        ai_leverage: 'AI assistant that anticipates production risks and automates logistics based on field signals.',
        outcomes_or_learnings: 'Reduced scheduling overhead and secured signal clarity across cross-functional field teams.',
        tags: [
            'Field Production',
            'AI-Augmented',
            'Logistics'
        ],
        hero_image: '/images/portfolio/shootatlas/shootatlas_hero.webp',
        thumbnail_image: '/images/portfolio/shootatlas/shootatlas_thumbnail.webp',
        cover_image: '/images/portfolio/shootatlas/shootatlas_cover.webp',
        measures_of_success: [
            'Logistical resource utilization rate',
            'Real-time schedule variance reduction',
            'Stakeholder information clarity'
        ],
        measurable_impact: [
            '22% reduction in production logistical waste',
            '15+ hours saved per production cycle in manual coordination',
            'Zero critical resource failures across monitored shoots'
        ],
        featured: true
    },
    {
        slug: 'iru-assistant',
        name: 'IRU-Assistant',
        category: 'Operational Intelligence',
        one_liner: 'AI-powered hotel staff companion surfacing guest context and service opportunities in real time.',
        core_problem: 'Modern hospitality fails when personalized guest knowledge is buried in administrative silos, resulting in generic, reactive service.',
        strategic_context: 'Hospitality staff often lack immediate access to guest preferences, leading to generic and reactive service.',
        competitive_imbalance: 'The delta between guest expectations and staff information leads to missed service opportunities and lower loyalty.',
        system_hypothesis: 'Surfacing real-time guest intelligence at the point of interaction enables proactive, personalized hospitality.',
        product_architecture: 'Guest preference modeling, PMS integration, and staff-facing contextual UI for immediate action.',
        ai_leverage: 'Real-time context synthesis to suggest service nudges based on guest history and profile.',
        outcomes_or_learnings: 'Enables consistent, personalized service delivery without the requirement for manual briefing overhead.',
        tags: [
            'Hospitality',
            'AI',
            'Real-Time',
            'UX'
        ],
        hero_image: '/images/portfolio/iru-assisant/iru-assisant_hero.webp',
        thumbnail_image: '/images/portfolio/iru-assisant/iru-assisant_thumbnail.webp',
        cover_image: '/images/portfolio/iru-assisant/iru-assisant_cover.webp',
        measures_of_success: [
            'Proactive service interaction triggers',
            'Staff adoption of contextual briefings',
            'Guest preference fulfillment rate'
        ],
        measurable_impact: [
            '18% documented increase in Guest NPS',
            '30% reduction in reactive service response times',
            '2x increase in staff-reported operational confidence'
        ],
        featured: true
    },
    {
        slug: 'roofdraft',
        name: 'Roofdraft',
        category: 'Operational Intelligence',
        one_liner: 'LiDAR-enabled precision drafting system for automated technical survey and defect detection.',
        core_problem: 'Technical architectural surveys are bottlenecked by manual drafting latency, causing significant project delay and compounding material waste.',
        strategic_context: 'Manual architectural survey for roofing is slow, dangerous, and prone to centimeter-level errors.',
        competitive_imbalance: 'The latency between site visit and technical draft causes project initiation bottlenecks and material waste.',
        system_hypothesis: 'On-device LiDAR processing can convert environmental geometry into technical blueprints in real time.',
        product_architecture: 'LiDAR scanning engine, on-device model generation, defect detection, and structured CRM exports.',
        ai_leverage: 'AI inference for defect detection and automated work order generation from geometry data.',
        outcomes_or_learnings: 'Accelerated the survey-to-draft cycle while significantly increasing estimate accuracy for insurance.',
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
            'Survey-to-draft completion velocity',
            'Material estimate accuracy variance',
            'On-site defect detection precision'
        ],
        measurable_impact: [
            '3x increase in architectural survey throughput',
            '98% accuracy in LiDAR-detected structural defects',
            '12% average reduction in roofing material waste'
        ],
        featured: true
    },
    {
        slug: 'a2x-global',
        name: 'a2x-global',
        category: 'Operational Intelligence',
        one_liner: 'Integrated personnel logistics platform for cross-border onboard courier and customs coordination.',
        core_problem: 'International courier operations are crippled by opaque customs and personnel data silos, slowing down cross-border decision velocity.',
        strategic_context: 'Global onboard courier (OBC) operations require precise synchronization of personnel, packages, and customs docs.',
        competitive_imbalance: 'Disparate data silos in international logistics create opaque zones that increase risk and baggage latency.',
        system_hypothesis: 'Consolidating package tracking and customs compliance into a single visibility layer improves route velocity.',
        product_architecture: 'Customs compliance workflows, package tracking, and crew assignment engine for international routes.',
        ai_leverage: 'Predictive customs risk assessment and route optimization for personnel assignments.',
        outcomes_or_learnings: 'Reduced manual coordination overhead for OBC operations and improved cross-border compliance.',
        tags: [
            'Logistics',
            'Personnel',
            'Aviation',
            'Regulatory'
        ],
        hero_image: '/images/portfolio/a2x-global/a2x-global_hero.webp',
        thumbnail_image: '/images/portfolio/a2x-global/a2x-global_thumbnail.webp',
        cover_image: '/images/portfolio/a2x-global/a2x-global_cover.webp',
        measures_of_success: [
            'Customs clearance lead time',
            'Personnel route optimization efficacy',
            'Data silo integration health'
        ],
        measurable_impact: [
            '20% faster cross-border transit for precision cargo',
            'Zero compliance failures during regulatory audits',
            '40% reduction in manual personnel logistics overhead'
        ],
        featured: true
    },
    {
        slug: 'imediate-whatsapp',
        name: 'iMediate WhatsApp',
        category: 'Coordination Systems',
        one_liner: 'Low-friction coordination layer parsing WhatsApp threads for NVC guidance and court-ready exports.',
        core_problem: 'Parents default to unstructured chat for familiarity, which lacks the legal structure and behavioral de-escalation required for conflict management.',
        strategic_context: 'Parents default to WhatsApp for its familiarity, but lose structure and legal defensibility in the process.',
        competitive_imbalance: 'Standard messaging apps lack structured data, leading to information overload and contentious drift.',
        system_hypothesis: 'Injecting coordination structures into the WhatsApp social graph maximizes adoption and utility.',
        product_architecture: 'WhatsApp bot parsing messages for calendar events, NVC reframing, and structured audit logs.',
        ai_leverage: 'Natural Language Understanding (NLU) tailored for high-conflict relational communication.',
        outcomes_or_learnings: 'Proved that meeting users in their primary communication channel significantly increases coordination adherence.',
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
            'User retention in high-conflict cohorts',
            'Communication structure adherence',
            'Export validity for legal proceedings'
        ],
        measurable_impact: [
            '90% adoption rate among previously non-compliant users',
            '100% recoverability of legally defensible communication records',
            'Documented 30% reduction in messaging volume per dispute'
        ],
        featured: false
    },
    {
        slug: 'leaf',
        name: 'leaf',
        category: 'Coordination Systems',
        one_liner: 'Context-anchored messaging system enabling non-linear, branching conversation threads for complex deliberation.',
        core_problem: 'Linear communication streams are incapable of managing multi-threaded deliberations, leading to information decay and loss of strategic context.',
        strategic_context: 'Linear chat streams decompose quickly under the weight of multiple simultaneous topics.',
        competitive_imbalance: 'Chat derailment in group discussions destroys decision momentum and preserves zero contextual history.',
        system_hypothesis: 'Anchoring branching threads to specific message segments preserves context and increases signal clarity.',
        product_architecture: 'Non-linear conversation graph with segment-level anchoring and contextual highlight states.',
        ai_leverage: 'Automated thread summarization and context matching for branching nodes.',
        outcomes_or_learnings: 'Increased "deep work" messaging efficacy by reducing the cognitive load of context switching.',
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
            'Discussion thread signal-to-noise ratio',
            'Context retention across time-shifted sessions',
            'Deliberation velocity'
        ],
        measurable_impact: [
            '50% reduction in conversational "re-explaining" noise',
            '25% increase in team decision-making velocity',
            '100% context persistence for trailing participants'
        ],
        featured: false
    },
    {
        slug: 'supergramp',
        name: 'supergramp',
        category: 'Coordination Systems',
        one_liner: 'Glanceable babysitting availability widget for seamless family-unit resource synchronization.',
        core_problem: 'Generational child-care nodes are under-utilized because the coordination friction of "asking" is higher than the perceived benefit.',
        strategic_context: 'Extended families waste massive coordination cycles on simple availability checks for childcare.',
        competitive_imbalance: 'The friction of back-and-forth messaging prevents the dynamic use of generational resource nodes.',
        system_hypothesis: 'A single-purpose availability widget eliminates the coordination overhead of informal childcare.',
        product_architecture: 'Calendar synchronization engine with low-friction availability state-sharing for mobile widgets.',
        ai_leverage: 'Likelihood forecasting for future availability based on historical routine patterns.',
        outcomes_or_learnings: 'Eliminated coordination noise and increased family reliance on shared resource visibility.',
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
            'Availability update frequency',
            'Widget interaction-to-booking ratio',
            'Coordination friction reduction'
        ],
        measurable_impact: [
            '5x increase in spontaneous generational childcare utilization',
            'Zero coordination emails/texts required for scheduling',
            'Reduction of synchronization overhead by 80%'
        ],
        featured: false
    },
    {
        slug: 'extra-ticket',
        name: 'Extra Ticket',
        category: 'Market & Asset Optimization',
        one_liner: 'Social discovery mechanic converting spare event assets into high-leverage matching opportunities.',
        core_problem: 'Billions in extra event assets (tickets) sit dormant because there is no low-friction social discovery mechanic to match them with human interest.',
        strategic_context: 'Wasted event capacity (extra tickets) represents a lost social and economic opportunity.',
        competitive_imbalance: 'Primary and secondary markets focus on transaction volume, ignoring the social value of shared experience.',
        system_hypothesis: 'Structuring spare tickets as social entry points increases event utilization and user matching success.',
        product_architecture: 'Ticket posting engine, match-making algorithm, and trust-flow verification for event pairing.',
        ai_leverage: 'Preference-based matching to optimize the quality of pairings for specific event types.',
        outcomes_or_learnings: 'Demonstrated that social utility can be extracted from otherwise dormant cultural assets.',
        tags: [
            'Marketplace',
            'Social',
            'Events',
            'Matching'
        ],
        hero_image: '/images/portfolio/extra-ticket/extra-ticket_hero.webp',
        thumbnail_image: '/images/portfolio/extra-ticket/extra-ticket_thumbnail.webp',
        cover_image: '/images/portfolio/extra-ticket/extra-ticket_cover.webp',
        measures_of_success: [
            'Asset utilization rate',
            'Matching quality NPS',
            'Transaction velocity'
        ],
        measurable_impact: [
            '85% utilization of previously wasted "extra" cultural assets',
            '4.8/5 social matching quality rating',
            '30% increase in secondary event utility'
        ],
        featured: false
    },
    {
        slug: 'photosell',
        name: 'photosell',
        category: 'Market & Asset Optimization',
        one_liner: 'AI-powered home valuation system identifying high-value possessions to streamline asset monetization.',
        core_problem: 'Valuable household assets remain liquid-dead because the cognitive cost of identification and valuation is too high for the average owner.',
        strategic_context: 'Households are cluttered with dormant assets; users lack the knowledge to value or monetize them.',
        competitive_imbalance: 'The high cognitive cost of identifying and valuing items prevents the rotation of assets into capital.',
        system_hypothesis: 'Automating item identification and valuation via computer vision lowers the barrier to resale entrance.',
        product_architecture: 'Computer vision pipeline, market pricing indexer, and resale channel integration engine.',
        ai_leverage: 'Computer vision for bulk item classification and automated market value estimation.',
        outcomes_or_learnings: 'Dramatically lowered the effort barrier for converting household clutter into liquid capital.',
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
            'Item identification precision',
            'Valuation market-sync accuracy',
            'Resale conversion velocity'
        ],
        measurable_impact: [
            '60% faster asset liquidation for household clutter',
            '$1,200 average reclaimed equity per active household',
            'Dramatically lowered cognitive barrier to secondary market entrance'
        ],
        featured: false
    },
    {
        slug: 'gk-mvp',
        name: 'gk-mvp',
        category: 'Market & Asset Optimization',
        one_liner: 'Distributed community food system optimizing supply matching for waste reduction and hospitality.',
        core_problem: 'Local food waste remains high because surplus producers have no real-time coordination layer to reach decentralized community distribution points.',
        strategic_context: 'Localized food systems suffer from supply-demand drift, leading to massive local waste.',
        competitive_imbalance: 'Fragmented surplus producers lack a coordination layer to reach community distribution points.',
        system_hypothesis: 'A structured coordination node for surplus redistribution increases communal resource resilience.',
        product_architecture: 'Supply matching engine, contributor onboarding, and local distribution logistics flows.',
        ai_leverage: 'Local supply/demand signaling and automated route planning for distribution.',
        outcomes_or_learnings: 'Achieved measurable reduction in food waste through structured community-level coordination.',
        tags: [
            'Food Systems',
            'Circular Economy',
            'Logistics'
        ],
        hero_image: '/images/portfolio/gk-mvp/gk-mvp_hero.webp',
        thumbnail_image: '/images/portfolio/gk-mvp/gk-mvp_thumbnail.webp',
        cover_image: '/images/portfolio/gk-mvp/gk-mvp_cover.webp',
        measures_of_success: [
            'Surplus matching efficiency',
            'Waste diversion volume',
            'Distribution node health'
        ],
        measurable_impact: [
            '2 tons of food waste diverted annually from local landfills',
            '500+ community meals facilitated through surplus redist',
            'Active participation from 40+ local food producing nodes'
        ],
        featured: false
    },
    {
        slug: 'five-things',
        name: 'Five Things',
        category: 'Behavioral & Wellbeing',
        one_liner: 'Micro-habit cognitive reset system for rapid grounding and mental clarity in high-stress environments.',
        core_problem: 'High-stress operators lose operational focus because existing mental-health tools are too high-friction for use during actual crisis tempo.',
        strategic_context: 'Modern cognitive environments are saturated, leading to sustained stress and decision fatigue.',
        competitive_imbalance: 'Most wellness tools are too high-friction for use during actual periods of operational stress.',
        system_hypothesis: 'Radically simplifying the grounding ritual increases adherence and long-term mental resilience.',
        product_architecture: 'Native iOS micro-habit interface, on-device processing, and zero-latency completion flows.',
        ai_leverage: 'Longitudinal signal tracking to identify behavioral drift and prompt restorative rituals.',
        outcomes_or_learnings: 'Proved that sub-60-second rituals beat complex apps for sustained behavioral consistency.',
        tags: [
            'Mobile Native',
            'Behavioral Design',
            'Grounding'
        ],
        hero_image: '/images/portfolio/five-things/five-things_hero.webp',
        thumbnail_image: '/images/portfolio/five-things/five-things_thumbnail.webp',
        cover_image: '/images/portfolio/five-things/five-things_cover.webp',
        measures_of_success: [
            'Grounding ritual adherence rate',
            'Operational focus persistence',
            'Subjective fatigue reduction'
        ],
        measurable_impact: [
            '75% daily adherence rate during high-stress operational cycles',
            'Measurable decrease in operator decision fatigue',
            'Sub-60s recovery time to baseline focus states'
        ],
        featured: false
    },
    {
        slug: 'fluffybutt',
        name: 'fluffybutt',
        category: 'Behavioral & Wellbeing',
        one_liner: 'Integrated care system providing real-time visibility for distributed foster networks and animal welfare.',
        core_problem: 'Distributed foster networks operate in a "visibility black hole," preventing shelters from proactively managing animal health and safety.',
        strategic_context: 'Animal shelters lack real-time visibility into distributed foster networks, leading to coordination failures.',
        competitive_imbalance: 'Manual check-ins are slow; lack of real-time data increases risk for vulnerable animals in foster care.',
        system_hypothesis: 'Connecting caregiver logs directly to a central shelter dashboard improves care standards and outcomes.',
        product_architecture: 'Caregiver routine logs, weight/mood/activity metrics, and shelter-facing real-time visibility dashboards.',
        ai_leverage: 'Anomaly detection in health logs to flag potential care issues before they escalate.',
        outcomes_or_learnings: 'Significantly reduced manual overhead for shelters while increasing foster placement safety.',
        tags: [
            'Care Management',
            'IoT',
            'Health Tracking',
            'Sync'
        ],
        hero_image: '/images/portfolio/fluffybutt/fluffybutt_hero.webp',
        thumbnail_image: '/images/portfolio/fluffybutt/fluffybutt_thumbnail.webp',
        cover_image: '/images/portfolio/fluffybutt/fluffybutt_cover.webp',
        measures_of_success: [
            'Caregiver log frequency',
            'Anomaly detection accuracy',
            'Distributed network visibility health'
        ],
        measurable_impact: [
            '100% visibility of vulnerable animal health across networks',
            '40% reduction in emergency shelter returns due to care failure',
            '2x increase in caregiver reporting adherence'
        ],
        featured: false
    }
];
const __TURBOPACK__default__export__ = projects;
}),
"[project]/app/systems/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SystemPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            slug: project.slug
        }));
}
function SystemPage({ params }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === params.slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].findIndex((p)=>p.slug === params.slug);
    const nextProject = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"][(currentIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].length];
    const sections = [
        {
            title: 'Strategic Context',
            content: project.strategic_context
        },
        {
            title: 'Competitive Imbalance',
            content: project.competitive_imbalance,
            isHighlight: true
        },
        {
            title: 'System Hypothesis',
            content: project.system_hypothesis
        },
        {
            title: 'Product Architecture',
            content: project.product_architecture,
            isDiagram: true
        },
        {
            title: 'AI Leverage',
            content: project.ai_leverage
        },
        {
            title: 'Outcomes & Learnings',
            content: project.outcomes_or_learnings
        }
    ].filter((s)=>s.content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-[0.03] pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid"
                    }, void 0, false, {
                        fileName: "[project]/app/systems/[slug]/page.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/app/systems/[slug]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/systems/[slug]/page.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-2 gap-16 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "analytical-label text-accent",
                                                                    children: project.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "h-px w-8 bg-white/10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-[8px] uppercase text-muted/60",
                                                                            children: tag
                                                                        }, tag, false, {
                                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                            lineNumber: 55,
                                                                            columnNumber: 70
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-6xl md:text-8xl font-bold tracking-tightest uppercase leading-[0.85]",
                                                            children: project.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl md:text-3xl text-white/90 leading-relaxed font-bold border-l-4 border-accent pl-8",
                                                    children: project.one_liner
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[4/3] w-full bg-background-layer1 border border-white/10 overflow-hidden relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.hero_image,
                                                    alt: `${project.name} Diagnostic`,
                                                    className: "w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 border border-accent/20 transition-all group-hover:border-accent group-hover:inset-4 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 left-6 font-mono text-[9px] text-accent tracking-widest opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        "IMG_REF // ",
                                                        project.slug.toUpperCase()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-12 md:p-20 bg-background-layer2 border border-white/5 space-y-8 relative overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-8 opacity-5 group-hover:text-accent group-hover:opacity-20 transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "80",
                                                height: "80",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 8v4M12 16h.01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/systems/[slug]/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "analytical-label text-accent",
                                                    children: "Problem Defined"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl italic",
                                                    children: [
                                                        '"',
                                                        project.core_problem,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/systems/[slug]/page.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-12 gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-8 space-y-24",
                                    children: sections.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `space-y-10 group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] text-accent",
                                                            children: [
                                                                "0",
                                                                idx + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold uppercase tracking-tightest",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-10",
                                                    children: section.isDiagram ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl leading-relaxed text-muted font-medium italic",
                                                                children: section.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative aspect-[16/9] w-full bg-background-layer1 overflow-hidden border border-white/5 p-4 group/img",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: project.cover_image,
                                                                        alt: `${project.name} Architecture`,
                                                                        className: "w-full h-full object-contain grayscale opacity-40 group-hover/img:opacity-70 transition-opacity duration-1000"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-grid opacity-10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-4 left-4 analytical-label text-[8px] opacity-40",
                                                                        children: "System Schematic // V-01"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 62
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xl md:text-2xl leading-relaxed ${section.isHighlight ? 'text-white font-bold' : 'text-muted font-medium'}`,
                                                        children: section.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 54
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, section.title, true, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 61
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "lg:col-span-4 space-y-12 h-fit md:sticky md:top-32",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 border border-white/5 space-y-8 bg-background-layer1/50 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "analytical-label text-accent",
                                                    children: "Exploration Metrics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6",
                                                                    children: "Success Criteria"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-4",
                                                                    children: project.measures_of_success.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex gap-4 items-start group/li",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] font-mono text-accent/40 mt-1",
                                                                                    children: [
                                                                                        "[",
                                                                                        i + 1,
                                                                                        "]"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                                    lineNumber: 126,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium text-white/70 group-hover/li:text-white transition-colors",
                                                                                    children: m
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                                    lineNumber: 127,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                            lineNumber: 125,
                                                                            columnNumber: 88
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-8 border-t border-white/5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6",
                                                                    children: "Quantifiable Results"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-6",
                                                                    children: project.measurable_impact.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-2xl font-bold tracking-tightest text-accent",
                                                                                    children: m.split(' ')[0]
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                                    lineNumber: 135,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] font-bold uppercase tracking-widest text-white/80",
                                                                                    children: m.split(' ').slice(1).join(' ')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                                    lineNumber: 136,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                            lineNumber: 134,
                                                                            columnNumber: 86
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/partner",
                                            className: "btn-primary w-full text-center group",
                                            children: "Initiate Collaboration Mission"
                                        }, void 0, false, {
                                            fileName: "[project]/app/systems/[slug]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/systems/[slug]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Intelligence",
                                    title: "Next Mission"
                                }, void 0, false, {
                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 group p-px bg-white/5 hover:bg-accent/20 transition-all duration-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/systems/${nextProject.slug}`,
                                        className: "block relative overflow-hidden bg-background p-12 md:p-20 text-center space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "analytical-label text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0",
                                                        children: "Deploy Sensor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-4xl md:text-7xl font-bold uppercase tracking-tightest",
                                                        children: nextProject.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted uppercase tracking-widest text-[9px] font-mono",
                                                        children: [
                                                            "Mission Ref // ",
                                                            nextProject.slug.toUpperCase()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/systems/[slug]/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 grayscale opacity-0 group-hover:opacity-10 transition-opacity duration-1000 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: nextProject.hero_image,
                                                    className: "w-full h-full object-cover",
                                                    alt: ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/systems/[slug]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/systems/[slug]/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/systems/[slug]/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/systems/[slug]/page.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/systems/[slug]/page.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/systems/[slug]/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/systems/[slug]/page.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/systems/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/systems/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__28f4e4d1._.js.map