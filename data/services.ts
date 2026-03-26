export type ServiceSlug =
  | 'product-strategy'
  | 'systems-audit'
  | 'ai-workflow-design'
  | 'app-development'
  | 'nonprofit-app-development'

export interface ServiceLink {
  label: string
  href: string
  note: string
}

export interface ServicePage {
  slug: ServiceSlug
  title: string
  shortTitle: string
  metaDescription: string
  keywords: string[]
  heroLabel: string
  heroSummary: string
  problem: string
  approach: string
  whoFor: string[]
  deliverables: string[]
  proofPoints: string[]
  relatedCaseStudies: ServiceLink[]
  relatedResearch: ServiceLink[]
}

export const services: ServicePage[] = [
  {
    slug: 'product-strategy',
    title: 'Product Strategy Consultancy',
    shortTitle: 'Product Strategy',
    metaDescription:
      'Lanchester R&D provides product strategy consulting for teams navigating unclear priorities, complex stakeholders, and high-stakes operational decisions.',
    keywords: [
      'product strategy consultancy',
      'product strategy consultant',
      'product discovery and execution',
      'operational design',
      'Lanchester R&D',
    ],
    heroLabel: 'Strategy Service',
    heroSummary:
      'We turn complex product problems into execution-ready strategy. Clear priorities, measurable outcomes, and a roadmap your team can actually ship.',
    problem:
      'Most teams do not fail because they cannot build. They fail because they build the wrong thing, in the wrong sequence, under the wrong assumptions. Product strategy is where that drift is corrected.',
    approach:
      'Our approach combines stakeholder interrogation, systems mapping, and tactical sequencing. We identify the operational bottleneck, define success metrics, and design a practical path from discovery to delivery.',
    whoFor: [
      'Founders moving from product intuition to product discipline',
      'Product leaders managing cross-functional complexity',
      'Operations teams with recurring coordination failures',
      'Organizations modernizing legacy tools and decision flows',
    ],
    deliverables: [
      'Problem framing and strategic hypothesis',
      'Prioritized roadmap with risk logic',
      'Decision architecture for product and operations',
      'Execution model aligned to 30-60-90 day outcomes',
    ],
    proofPoints: [
      '40% litigation cost reduction in a high-conflict communication system',
      'Operational map and execution protocol delivered before build-phase spend',
      'Faster stakeholder alignment through explicit decision criteria',
    ],
    relatedCaseStudies: [
      {
        label: 'iMediate App Case Study',
        href: '/systems/imediate-app',
        note: 'From conflict-heavy communication to structured behavioral workflows.',
      },
      {
        label: 'A2X Global Case Study',
        href: '/systems/a2x-global',
        note: 'Strategic redesign of customs intelligence and compliance flow.',
      },
    ],
    relatedResearch: [
      {
        label: 'Autonomous Dispatch Research',
        href: '/research/autonomous-dispatch',
        note: 'How contextual weighting improves high-pressure decisions.',
      },
      {
        label: 'Methodology Overview',
        href: '/strategy',
        note: 'The doctrine behind every strategic engagement.',
      },
    ],
  },
  {
    slug: 'systems-audit',
    title: 'Systems Audit',
    shortTitle: 'Systems Audit',
    metaDescription:
      'Lanchester R&D conducts systems audits to diagnose workflow friction, data bottlenecks, and operational latency across product and service teams.',
    keywords: [
      'systems audit',
      'workflow audit',
      'operational design',
      'coordination systems',
      'process bottleneck analysis',
    ],
    heroLabel: 'Audit Service',
    heroSummary:
      'A systems audit reveals where your operation is leaking time, quality, and decision confidence, then provides an implementation plan to close the gap.',
    problem:
      'Symptoms like missed handoffs, delayed delivery, and rework are often treated as staffing issues. In reality, they are usually architecture issues: unclear ownership, disconnected tools, and weak signal flow.',
    approach:
      'We map actors, dependencies, and data flow end-to-end. Then we quantify friction, identify leverage points, and design interventions that improve throughput without forcing cosmetic process change.',
    whoFor: [
      'Scale-ups with delivery quality slipping under growth pressure',
      'Ops teams struggling with fragmented tooling',
      'Leadership teams needing a clear modernization path',
      'Product organizations facing coordination debt',
    ],
    deliverables: [
      'System map of workflows, dependencies, and decision points',
      'Bottleneck analysis with quantified risk and impact',
      'Recommended intervention stack (people, process, tooling)',
      'Execution priorities with short and medium-term milestones',
    ],
    proofPoints: [
      'Reduced resource waste by 22% in field operations architecture',
      'Converted undocumented operations into measurable process layers',
      'Created repeatable baseline metrics for leadership reporting',
    ],
    relatedCaseStudies: [
      {
        label: 'Roofdraft Case Study',
        href: '/systems/roofdraft',
        note: 'Audit-informed redesign of survey and maintenance workflows.',
      },
      {
        label: 'ShootAtlas Case Study',
        href: '/systems/shootatlas',
        note: 'Coordination architecture for high-variance field teams.',
      },
    ],
    relatedResearch: [
      {
        label: 'Low-Bandwidth Sync Research',
        href: '/research/low-bandwidth-sync',
        note: 'Reliability engineering for fragile operational environments.',
      },
      {
        label: 'Partner With Lanchester',
        href: '/partner',
        note: 'Engage us for a scoped systems audit engagement.',
      },
    ],
  },
  {
    slug: 'ai-workflow-design',
    title: 'AI Workflow Design',
    shortTitle: 'AI Workflow Design',
    metaDescription:
      'Design AI-assisted workflows that reduce friction and improve operational performance without introducing automation theater.',
    keywords: [
      'AI workflow design',
      'AI operations consulting',
      'AI process design',
      'human in the loop workflow',
      'AI product design',
    ],
    heroLabel: 'AI Service',
    heroSummary:
      'We design AI workflows where intelligence improves decisions, not noise. Human judgment stays intact while repetitive and low-signal tasks are compressed.',
    problem:
      'Many AI initiatives fail because they start with tools, not workflow architecture. The result is high demo value, low operational value, and fragile adoption.',
    approach:
      'We identify high-leverage decision points, design human-in-the-loop control paths, and build prompt and data logic around real operational constraints. AI is introduced where it compounds, not where it looks impressive.',
    whoFor: [
      'Product and operations teams adopting AI under delivery pressure',
      'Leaders needing measurable ROI from AI investments',
      'Teams replacing manual triage and repetitive analysis work',
      'Organizations requiring governance-ready AI workflows',
    ],
    deliverables: [
      'AI leverage map tied to operational outcomes',
      'Workflow design with human override controls',
      'Prompt architecture and evaluation criteria',
      'Rollout plan with measurable adoption checkpoints',
    ],
    proofPoints: [
      '40% reduction in manual overhead in compliance-heavy workflows',
      'Structured AI nudges reduced escalation in conflict communication',
      'Faster decision cycles in logistics and dispatch simulations',
    ],
    relatedCaseStudies: [
      {
        label: 'IRU-Assistant Case Study',
        href: '/systems/iru-assistant',
        note: 'AI context delivery for front-line hospitality operations.',
      },
      {
        label: 'iMediate App Case Study',
        href: '/systems/imediate-app',
        note: 'AI-assisted communication reframing in high-emotion contexts.',
      },
    ],
    relatedResearch: [
      {
        label: 'Autonomous Dispatch Research',
        href: '/research/autonomous-dispatch',
        note: 'LLM-based reasoning in high-pressure resource allocation.',
      },
      {
        label: 'Regulatory Extraction Research',
        href: '/research/regulatory-extraction',
        note: 'Zero-shot parsing for regulatory intelligence workflows.',
      },
    ],
  },
  {
    slug: 'app-development',
    title: 'Custom Application Development',
    shortTitle: 'App Development',
    metaDescription:
      'Custom application development for organizations with complex operational workflows, specialized users, and high reliability requirements.',
    keywords: [
      'custom application development',
      'app development consultancy',
      'workflow software development',
      'operational app development',
      'product build partner',
    ],
    heroLabel: 'Build Service',
    heroSummary:
      'We build custom applications that solve real operational friction: clearer coordination, stronger data integrity, and software that supports how teams actually work.',
    problem:
      'Generic platforms often fail in specialized environments. Teams then run mission-critical work through spreadsheets, fragmented tools, and manual workarounds.',
    approach:
      'We move from validated problem framing to architecture and build. Every application is designed around real user behavior, adoption constraints, and measurable performance outcomes.',
    whoFor: [
      'Organizations replacing brittle internal tools',
      'Teams building products in regulation-heavy environments',
      'Founders requiring speed without sacrificing architecture',
      'Operators needing reliable workflow software under field conditions',
    ],
    deliverables: [
      'Product architecture and scope definition',
      'Core workflow implementation and integration',
      'Quality and performance baseline instrumentation',
      'Launch plan and post-release optimization priorities',
    ],
    proofPoints: [
      'Multiple production systems delivered across logistics, legal, and hospitality',
      'Faster case handling and stronger auditability in communication workflows',
      'Stable delivery under high-variance field environments',
    ],
    relatedCaseStudies: [
      {
        label: 'ShootAtlas Case Study',
        href: '/systems/shootatlas',
        note: 'Coordination software for distributed production operations.',
      },
      {
        label: 'Quiet Place Case Study',
        href: '/systems/quiet-place',
        note: 'Signal-rich discovery product built around contextual ranking.',
      },
    ],
    relatedResearch: [
      {
        label: 'The LEARN Launchpad',
        href: '/research/learn-launchpad',
        note: 'What production hardening looks like in real platform builds.',
      },
      {
        label: 'Systems Archive',
        href: '/systems',
        note: 'See broader application and operational build work.',
      },
    ],
  },
  {
    slug: 'nonprofit-app-development',
    title: 'Nonprofit App Development',
    shortTitle: 'Nonprofit App Development',
    metaDescription:
      'Nonprofit app development and NGO technology consulting through Abbey Fields Foundation, focused on mission-driven operational systems.',
    keywords: [
      'nonprofit app development',
      'NGO app development',
      'charity software development',
      'nonprofit technology consulting',
      'mission-driven app development',
    ],
    heroLabel: 'Foundation Service',
    heroSummary:
      'Through Abbey Fields Foundation, we design and build nonprofit technology that helps mission-driven teams coordinate faster, measure impact clearly, and scale responsibly.',
    problem:
      'Many nonprofits are carrying high-impact missions on top of low-capability infrastructure. Staff time is absorbed by admin friction instead of direct service delivery.',
    approach:
      'We pair operational mapping with practical product design to build nonprofit tools that are secure, adoption-friendly, and grounded in real-world constraints around funding, governance, and team capacity.',
    whoFor: [
      'Charities and NGOs needing custom digital tools',
      'Organizations modernizing donor, volunteer, or case workflows',
      'Mission teams needing compliance-aware operational software',
      'Foundations investing in long-term digital capability',
    ],
    deliverables: [
      'Nonprofit technology strategy and implementation plan',
      'Custom application architecture for mission workflows',
      'Operational reporting and impact measurement scaffolding',
      'Capacity transfer so teams can maintain and evolve systems',
    ],
    proofPoints: [
      'Delivered mission-specific workflow systems for welfare and support use-cases',
      'Reduced manual coordination overhead in resource-constrained settings',
      'Built scalable digital foundations for long-term impact programs',
    ],
    relatedCaseStudies: [
      {
        label: 'Abbey Fields Foundation',
        href: '/foundation',
        note: 'Our nonprofit technology initiative and delivery model.',
      },
      {
        label: 'FluffyButt Case Study',
        href: '/systems/fluffybutt',
        note: 'Operational and product systems in mission-focused contexts.',
      },
    ],
    relatedResearch: [
      {
        label: 'Concept Note',
        href: '/foundation/concept-note',
        note: 'Strategic blueprint for nonprofit technology partnerships.',
      },
      {
        label: 'Partner Page',
        href: '/partner',
        note: 'Start a scoped nonprofit technology conversation.',
      },
    ],
  },
]

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServicePage>
