module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/hello/lib/firebaseAdmin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getDb",
    ()=>getDb,
    "getFirebaseAuth",
    ()=>getFirebaseAuth,
    "getStorageBucket",
    ()=>getStorageBucket,
    "isFirestoreAvailable",
    ()=>isFirestoreAvailable
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import, [project]/hello/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import, [project]/hello/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import, [project]/hello/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import, [project]/hello/node_modules/firebase-admin)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
let _app;
function getAdminApp() {
    if (_app) return _app;
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__["getApps"])().length > 0) {
        _app = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__["getApps"])()[0];
        return _app;
    }
    try {
        const projectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.FIREBASE_PROJECT_ID || "lanchester-rd";
        _app = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__["initializeApp"])({
            projectId
        });
        return _app;
    } catch  {
        return null;
    }
}
function isFirestoreAvailable() {
    return !!(process.env.GOOGLE_CLOUD_PROJECT || process.env.FIREBASE_SERVICE_ACCOUNT || process.env.USE_FIRESTORE === "true");
}
function getDb() {
    const app = getAdminApp();
    if (!app) return null;
    try {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__["getFirestore"])(app);
    } catch  {
        return null;
    }
}
function getStorageBucket() {
    const app = getAdminApp();
    if (!app) return null;
    try {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__["getStorage"])(app).bucket();
    } catch  {
        return null;
    }
}
function getFirebaseAuth() {
    const app = getAdminApp();
    if (!app) return null;
    try {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$hello$2f$node_modules$2f$firebase$2d$admin$29$__["getAuth"])(app);
    } catch  {
        return null;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/hello/data/timeline.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ─── Timeline data model & seed data  (V3) ─── */ /* ── Media ── */ /** @deprecated Use TimelineMedia — kept for V1 compat */ /* ── Links ── */ /* ── Eras ── */ /* ── Events ── */ /* ─── Eras ─── */ __turbopack_context__.s([
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
}),
"[project]/hello/lib/timelineStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "createEvent",
    ()=>createEvent,
    "deleteEvent",
    ()=>deleteEvent,
    "exportEvents",
    ()=>exportEvents,
    "getEvent",
    ()=>getEvent,
    "importEvents",
    ()=>importEvents,
    "listEvents",
    ()=>listEvents,
    "reorderEvents",
    ()=>reorderEvents,
    "updateEvent",
    ()=>updateEvent
]);
/* ─── Timeline data store — Firestore in production, local JSON in dev ─── */ var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/lib/firebaseAdmin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$data$2f$timeline$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/data/timeline.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
/* ─── Stored event (V3 — all fields populated) ─── */ /* ─── Constants ─── */ const DATA_DIR = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), ".data");
const DATA_FILE = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(DATA_DIR, "timeline-events.json");
const COLLECTION = "timelineEvents";
/* ─── Normalize a partial event into a full StoredEvent ─── */ function normalize(raw, index) {
    const now = new Date().toISOString();
    const media = raw.media || raw.images || [];
    return {
        id: raw.id || crypto.randomUUID(),
        slug: raw.slug || raw.id || raw.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || crypto.randomUUID(),
        start: raw.start || "",
        end: raw.end,
        sortOrder: raw.sortOrder ?? index * 10,
        era: raw.era,
        title: raw.title || "Untitled",
        subtitle: raw.subtitle || "",
        category: raw.category || "Uncategorized",
        location: raw.location,
        summary: raw.summary || "",
        body: raw.body,
        achievements: raw.achievements,
        tags: raw.tags,
        quote: raw.quote,
        featured: raw.featured,
        theme: raw.theme,
        milestone: raw.milestone,
        status: raw.status || "draft",
        media,
        images: media,
        links: raw.links,
        createdAt: raw.createdAt || now,
        updatedAt: raw.updatedAt || now
    };
}
/* ════════════════════  Local JSON file store  ════════════════════ */ function ensureDir() {
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(DATA_DIR)) (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["mkdirSync"])(DATA_DIR, {
        recursive: true
    });
}
function readLocal() {
    ensureDir();
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(DATA_FILE)) {
        seedLocal();
    }
    try {
        return JSON.parse((0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(DATA_FILE, "utf-8"));
    } catch  {
        seedLocal();
        return JSON.parse((0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(DATA_FILE, "utf-8"));
    }
}
function writeLocal(events) {
    ensureDir();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(DATA_FILE, JSON.stringify(events, null, 2));
}
function seedLocal() {
    const now = new Date().toISOString();
    const seeded = __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$data$2f$timeline$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timelineEvents"].map((e, i)=>normalize({
            ...e,
            status: "published",
            createdAt: now,
            updatedAt: now
        }, i));
    writeLocal(seeded);
}
/* ════════════════════  Firestore operations  ════════════════════ */ async function fsListAll() {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    if (!db) throw new Error("Firestore unavailable");
    const snap = await db.collection(COLLECTION).orderBy("sortOrder").get();
    return snap.docs.map((d)=>({
            ...d.data(),
            id: d.id
        }));
}
async function fsGet(id) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    if (!db) throw new Error("Firestore unavailable");
    const doc = await db.collection(COLLECTION).doc(id).get();
    if (!doc.exists) return null;
    return {
        ...doc.data(),
        id: doc.id
    };
}
async function fsCreate(data) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    if (!db) throw new Error("Firestore unavailable");
    const { id, ...rest } = data;
    await db.collection(COLLECTION).doc(id).set(rest);
    return data;
}
async function fsUpdate(id, data) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    if (!db) throw new Error("Firestore unavailable");
    const ref = db.collection(COLLECTION).doc(id);
    const existing = await ref.get();
    if (!existing.exists) return null;
    await ref.update(data);
    const updated = await ref.get();
    return {
        ...updated.data(),
        id: updated.id
    };
}
async function fsDelete(id) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    if (!db) throw new Error("Firestore unavailable");
    const ref = db.collection(COLLECTION).doc(id);
    const existing = await ref.get();
    if (!existing.exists) return false;
    await ref.delete();
    return true;
}
/* ════════════════════  Public API  ════════════════════ */ const useFirestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFirestoreAvailable"])();
async function listEvents(options) {
    let events;
    if (useFirestore) {
        events = await fsListAll();
    } else {
        events = readLocal();
    }
    events.sort((a, b)=>(a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    if (options?.status) {
        events = events.filter((e)=>e.status === options.status);
    }
    return events;
}
async function getEvent(id) {
    if (useFirestore) return fsGet(id);
    const events = readLocal();
    return events.find((e)=>e.id === id) || null;
}
async function createEvent(input) {
    const now = new Date().toISOString();
    const events = useFirestore ? await fsListAll() : readLocal();
    const maxSort = events.reduce((max, e)=>Math.max(max, e.sortOrder ?? 0), 0);
    const media = input.media || [];
    const event = {
        id: crypto.randomUUID(),
        slug: input.slug || input.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || crypto.randomUUID(),
        start: input.start || "",
        end: input.end,
        sortOrder: input.sortOrder ?? maxSort + 10,
        era: input.era,
        title: input.title || "Untitled",
        subtitle: input.subtitle || "",
        category: input.category || "Uncategorized",
        location: input.location,
        summary: input.summary || "",
        body: input.body,
        achievements: input.achievements,
        tags: input.tags,
        quote: input.quote,
        featured: input.featured,
        theme: input.theme,
        milestone: input.milestone,
        status: input.status || "draft",
        media,
        images: media,
        links: input.links,
        createdAt: now,
        updatedAt: now
    };
    if (useFirestore) return fsCreate(event);
    events.push(event);
    writeLocal(events);
    return event;
}
async function updateEvent(id, input) {
    const now = new Date().toISOString();
    const updates = {
        ...input,
        updatedAt: now
    };
    if (input.media) updates.images = input.media;
    if (useFirestore) return fsUpdate(id, updates);
    const events = readLocal();
    const idx = events.findIndex((e)=>e.id === id);
    if (idx < 0) return null;
    events[idx] = {
        ...events[idx],
        ...updates
    };
    writeLocal(events);
    return events[idx];
}
async function deleteEvent(id) {
    if (useFirestore) return fsDelete(id);
    const events = readLocal();
    const idx = events.findIndex((e)=>e.id === id);
    if (idx < 0) return false;
    events.splice(idx, 1);
    writeLocal(events);
    return true;
}
async function reorderEvents(orderedIds) {
    const now = new Date().toISOString();
    if (useFirestore) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        if (!db) throw new Error("Firestore unavailable");
        const batch = db.batch();
        orderedIds.forEach((id, i)=>{
            batch.update(db.collection(COLLECTION).doc(id), {
                sortOrder: i * 10,
                updatedAt: now
            });
        });
        await batch.commit();
        return fsListAll();
    }
    const events = readLocal();
    orderedIds.forEach((id, i)=>{
        const evt = events.find((e)=>e.id === id);
        if (evt) {
            evt.sortOrder = i * 10;
            evt.updatedAt = now;
        }
    });
    writeLocal(events);
    return events.sort((a, b)=>a.sortOrder - b.sortOrder);
}
async function importEvents(incoming) {
    const now = new Date().toISOString();
    const normalized = incoming.map((e, i)=>normalize({
            ...e,
            createdAt: now,
            updatedAt: now
        }, i));
    if (useFirestore) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        if (!db) throw new Error("Firestore unavailable");
        const batch = db.batch();
        for (const evt of normalized){
            const { id, ...rest } = evt;
            batch.set(db.collection(COLLECTION).doc(id), rest);
        }
        await batch.commit();
        return normalized.length;
    }
    writeLocal(normalized);
    return normalized.length;
}
async function exportEvents() {
    return listEvents();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/hello/lib/adminAuth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "checkAdmin",
    ()=>checkAdmin,
    "getAdminEmail",
    ()=>getAdminEmail
]);
/**
 * Admin auth — verifies Firebase ID tokens and checks superadmin email.
 * Mirrors the lean-launchpad pattern: hardcoded superadmin + env var list.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/lib/firebaseAdmin.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const SUPERADMIN_EMAIL = "lanchester.rd@gmail.com";
function isAdminEmail(email) {
    const e = (email || "").toLowerCase();
    if (e === SUPERADMIN_EMAIL) return true;
    const extras = (process.env.ADMIN_EMAILS || "").split(",").map((s)=>s.trim().toLowerCase()).filter(Boolean);
    if (extras.includes(e)) return true;
    return false;
}
async function checkAdmin(req) {
    const header = req.headers.get("authorization") || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";
    if (!token) return false;
    const fbAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirebaseAuth"])();
    if (!fbAuth) return false;
    try {
        const decoded = await fbAuth.verifyIdToken(token);
        return isAdminEmail(decoded.email || "");
    } catch  {
        return false;
    }
}
async function getAdminEmail(req) {
    const header = req.headers.get("authorization") || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";
    if (!token) return null;
    const fbAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$firebaseAdmin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFirebaseAuth"])();
    if (!fbAuth) return null;
    try {
        const decoded = await fbAuth.verifyIdToken(token);
        return isAdminEmail(decoded.email || "") ? decoded.email : null;
    } catch  {
        return null;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/hello/app/api/timeline/events/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$timelineStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/lib/timelineStore.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$adminAuth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hello/lib/adminAuth.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$timelineStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$adminAuth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$timelineStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$adminAuth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const dynamic = "force-dynamic";
async function GET(_req, { params }) {
    try {
        const { id } = await params;
        const event = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$timelineStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEvent"])(id);
        if (!event) return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not found"
        }, {
            status: 404
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(event);
    } catch (e) {
        const msg = e instanceof Error ? e.message : "Internal error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
async function PUT(req, { params }) {
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$adminAuth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAdmin"])(req)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 403
        });
    }
    try {
        const { id } = await params;
        const body = await req.json();
        const event = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$timelineStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateEvent"])(id, body);
        if (!event) return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not found"
        }, {
            status: 404
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(event);
    } catch (e) {
        const msg = e instanceof Error ? e.message : "Internal error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
async function DELETE(req, { params }) {
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$adminAuth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAdmin"])(req)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 403
        });
    }
    try {
        const { id } = await params;
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$lib$2f$timelineStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteEvent"])(id);
        if (!ok) return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not found"
        }, {
            status: 404
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : "Internal error";
        return __TURBOPACK__imported__module__$5b$project$5d2f$hello$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__71b325d0._.js.map