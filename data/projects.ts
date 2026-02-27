export type ProjectMetric = {
  label: string
  value: string
}

export type Project = {
  slug: string
  title: string
  category: string
  shortDescription: string
  engagementModes: string[]
  image?: string
  thumbnail?: string
  cover?: string
  hero?: string
  metrics?: ProjectMetric[]
  complexityTags?: string[]
  industry?: string
  scaleStage?: 'Early' | 'Growth' | 'Regulated' | 'Scale-Up'
}

export const projects: Project[] = [
  {
    slug: 'imediate',
    title: 'iMediate',
    category: 'Regulated Mediation',
    shortDescription: 'iMediate is a co-parenting infrastructure layer built on WhatsApp that integrates behavioral guidance (NVC), automatic calendar extraction, court-ready documentation, and child activity ecosystem coordination into a structured, defensible system.',
    engagementModes: ['venture-builder', 'product-leadership-partner', 'design-systems', 'regulated-systems'],
    image: '/images/portfolio/imediate/iMediate_cover.webp',
    thumbnail: '/images/portfolio/imediate/iMediate_thumbnail.webp',
    cover: '/images/portfolio/imediate/iMediate_cover.webp',
    hero: '/images/portfolio/imediate/iMediate_hero.webp',
    complexityTags: ['Regulatory', 'Traceability', 'Behavioral Design'],
    industry: 'Legal / Dispute Resolution',
    scaleStage: 'Regulated',
    metrics: [
      { label: 'Market Scope', value: 'Court and out-of-court mediation workflows scoped for jurisdictional variation' },
      { label: 'System Complexity', value: 'Court-ready documentation and evidence traceability' },
      { label: 'Operational Impact', value: 'Defined case-handling workflows that reduce manual reconciliation' }
    ]
  },

  {
    slug: 'shootatlas',
    title: 'ShootAtlas',
    category: 'Field Production / Media Production',
    shortDescription: 'ShootAtlas is a production coordination platform for on-location photoshoots. It centralizes shot planning, crew coordination, equipment tracking, and live schedule management — enhanced by an AI assistant that anticipates risks, automates logistics, and reduces production delays.',
    engagementModes: ['product-leadership-partner', 'design-systems'],
    image: '/images/portfolio/placeholder.svg',
    complexityTags: ['Field Production', 'AI-Augmented', 'Mobile-First'],
    industry: 'Media / Production',
    scaleStage: 'Early',
    metrics: [
      { label: 'Product Scope', value: 'Production coordination for on-location shoots: planning → execution → client updates' },
      { label: 'System Complexity', value: 'Realtime schedule orchestration, inventory tracking and AI-assisted risk detection' },
      { label: 'Operational Impact', value: 'Reduced delays and clearer crew responsibilities for field productions' }
    ]
  },

  {
    slug: 'power-proof-portal',
    title: 'Power Proof Portal',
    category: 'Energy Compliance Platform',
    shortDescription: 'An infrastructure layer for proving and certifying renewable generation provenance to market and regulators.',
    engagementModes: ['product-leadership-partner', 'regulated-systems'],
    image: '/images/portfolio/power-proof-portal/power-proof-portal_cover.webp',
    thumbnail: '/images/portfolio/power-proof-portal/power-proof-portal_thumbnail.webp',
    cover: '/images/portfolio/power-proof-portal/power-proof-portal_cover.webp',
    hero: '/images/portfolio/power-proof-portal/power-proof-portal_hero.webp',
    complexityTags: ['Multi-Market', 'Regulatory', 'Enterprise Workflow'],
    industry: 'Energy / Utilities',
    scaleStage: 'Growth',
    metrics: [
      { label: 'Market Scope', value: 'Framework for multi-market certificate exchange and audit' },
      { label: 'System Complexity', value: 'Compliance-aware architecture with immutable evidence stores' },
      { label: 'Operational Impact', value: 'Reduced manual verification steps for settlement teams' }
    ]
  },

  {
    slug: 'a2x-global',
    title: 'A2X Global',
    category: 'Cross-border Platform',
    shortDescription: 'Platform work to coordinate cross-border data flows and product adaptations for varied regulatory constraints.',
    engagementModes: ['product-leadership-partner', 'regulated-systems'],
    image: '/images/portfolio/a2x-global/a2x-global_cover.webp',
    thumbnail: '/images/portfolio/a2x-global/a2x-global_thumbnail.webp',
    cover: '/images/portfolio/a2x-global/a2x-global_cover.webp',
    hero: '/images/portfolio/a2x-global/a2x-global_hero.webp',
    complexityTags: ['Multi-Market', 'Cross-Market Adaptability', 'Enterprise Workflow'],
    industry: 'Logistics / Cross-border Services',
    scaleStage: 'Growth',
    metrics: [
      { label: 'Market Scope', value: 'Adaptation patterns defined for jurisdictional differences' },
      { label: 'System Complexity', value: 'Data-mapping and transformation strategy for multi-market flows' },
      { label: 'Operational Impact', value: 'Clear handoffs between local ops and central product teams' }
    ]
  },

  {
    slug: 'extra-ticket',
    title: 'Extra Ticket',
    category: 'Event Marketplace',
    shortDescription: 'A ticketing marketplace optimised for secondary transactions and user trust across informal networks.',
    engagementModes: ['venture-builder', 'design-systems'],
    image: '/images/portfolio/extra-ticket/extra-ticket_cover.webp',
    thumbnail: '/images/portfolio/extra-ticket/extra-ticket_thumbnail.webp',
    cover: '/images/portfolio/extra-ticket/extra-ticket_cover.webp',
    hero: '/images/portfolio/extra-ticket/extra-ticket_hero.webp',
    complexityTags: ['Marketplace Dynamics', 'Behavioral Design', 'Consumer Social'],
    industry: 'Events / Marketplace',
    scaleStage: 'Early',
    metrics: [
      { label: 'Market Scope', value: 'Two-sided marketplace dynamics scoped with trust mechanisms' },
      { label: 'System Complexity', value: 'Listing, matching and dispute workflows with lightweight verification' },
      { label: 'Operational Impact', value: 'Reduced dispute resolution overhead through clearer flows' }
    ]
  },

  {
    slug: 'leaf',
    title: 'Leaf',
    category: 'Consumer Energy App',
    shortDescription: 'A consumer-facing energy app focused on behavioural nudges to reduce consumption and coordinate community programs.',
    engagementModes: ['venture-builder', 'design-systems'],
    image: '/images/portfolio/leaf/leaf_cover.webp',
    thumbnail: '/images/portfolio/leaf/leaf_thumbnail.webp',
    cover: '/images/portfolio/leaf/leaf_cover.webp',
    hero: '/images/portfolio/leaf/leaf_hero.webp',
    complexityTags: ['Behavioral Design', 'Community Infrastructure', 'AI-Enabled'],
    industry: 'Energy / Consumer',
    scaleStage: 'Early',
    metrics: [
      { label: 'Market Scope', value: 'Pilot programs defined for community cohorts' },
      { label: 'System Complexity', value: 'Interaction architecture for persuasive incentives' },
      { label: 'Operational Impact', value: 'Operational patterns for program rollouts' }
    ]
  },

  {
    slug: 'fluffybutt',
    title: 'FluffyButt',
    category: 'Design System',
    shortDescription: 'Design system work to unify visual and interaction patterns across consumer products and reduce fragmentation.',
    engagementModes: ['design-systems'],
    image: '/images/portfolio/fluffybutt/fluffybutt_cover.webp',
    thumbnail: '/images/portfolio/fluffybutt/fluffybutt_thumbnail.webp',
    cover: '/images/portfolio/fluffybutt/fluffybutt_cover.webp',
    hero: '/images/portfolio/fluffybutt/fluffybutt_hero.webp',
    complexityTags: ['Design Governance', 'Consumer Social'],
    industry: 'Consumer Apps',
    scaleStage: 'Growth',
    metrics: [
      { label: 'Market Scope', value: 'Component library and usage patterns documented across products' },
      { label: 'System Complexity', value: 'Design governance and contribution model defined' },
      { label: 'Operational Impact', value: 'Reduced visual inconsistency and faster feature delivery' }
    ]
  },

  {
    slug: 'gk-mvp',
    title: 'GK-MVP',
    category: 'Food Logistics MVP',
    shortDescription: 'A lightweight logistics and ordering MVP for community kitchens to coordinate supply and deliveries efficiently.',
    engagementModes: ['venture-builder', 'design-systems'],
    image: '/images/portfolio/gk-mvp/gk-mvp_cover.webp',
    thumbnail: '/images/portfolio/gk-mvp/gk-mvp_thumbnail.webp',
    cover: '/images/portfolio/gk-mvp/gk-mvp_cover.webp',
    hero: '/images/portfolio/gk-mvp/gk-mvp_hero.webp',
    complexityTags: ['Community Infrastructure', 'Enterprise Workflow'],
    industry: 'Logistics / Food Services',
    scaleStage: 'Early',
    metrics: [
      { label: 'Market Scope', value: 'Local market pilots and operational constraints scoped' },
      { label: 'System Complexity', value: 'Order-to-delivery workflow defined for low-friction ops' },
      { label: 'Operational Impact', value: 'Clear coordination rules for kitchen operators' }
    ]
  },

  {
    slug: 'photosell',
    title: 'PhotoSell',
    category: 'Insurance-integrated Commerce',
    shortDescription: 'Commerce platform for selling photographic assets with embedded insurance and licensing workflows.',
    engagementModes: ['product-leadership-partner', 'regulated-systems'],
    image: '/images/portfolio/photosell/photosell_cover.webp',
    thumbnail: '/images/portfolio/photosell/photosell_thumbnail.webp',
    cover: '/images/portfolio/photosell/photosell_cover.webp',
    hero: '/images/portfolio/photosell/photosell_hero.webp',
    complexityTags: ['Marketplace Dynamics', 'Regulatory', 'AI-Enabled'],
    industry: 'Commerce / Media',
    scaleStage: 'Growth',
    metrics: [
      { label: 'Market Scope', value: 'Insurance integration patterns and partner models documented' },
      { label: 'System Complexity', value: 'Licensing, claims and settlement workflows articulated' },
      { label: 'Operational Impact', value: 'Defined operations for content verification and claims handling' }
    ]
  },

  {
    slug: 'supergramp',
    title: 'SuperGramp',
    category: 'Community Care Platform',
    shortDescription: 'A platform connecting elder-care volunteers to local services with robust scheduling and verification.',
    engagementModes: ['venture-builder'],
    image: '/images/portfolio/supergramp/supergramp_cover.webp',
    thumbnail: '/images/portfolio/supergramp/supergramp_thumbnail.webp',
    cover: '/images/portfolio/supergramp/supergramp_cover.webp',
    hero: '/images/portfolio/supergramp/supergramp_hero.webp',
    complexityTags: ['Community Infrastructure', 'Enterprise Workflow'],
    industry: 'Community / Social Services',
    scaleStage: 'Early',
    metrics: [
      { label: 'Market Scope', value: 'Local service networks defined with onboarding patterns' },
      { label: 'System Complexity', value: 'Scheduling and verification architecture' },
      { label: 'Operational Impact', value: 'Clear volunteer coordination flows' }
    ]
  }

  ,
  {
    slug: 'five-things',
    title: 'Five Things',
    category: 'Mindfulness / Mental Clarity',
    shortDescription: 'A mindful reset in under 60 seconds — designed as a native iOS experience that surfaces brief, repeatable cognitive grounding.',
    engagementModes: ['product-leadership-partner', 'design-systems'],
    image: '/images/portfolio/five-things/five-things_cover.webp',
    thumbnail: '/images/portfolio/five-things/five-things_thumbnail.webp',
    cover: '/images/portfolio/five-things/five-things_cover.webp',
    hero: '/images/portfolio/five-things/five-things_hero.webp',
    complexityTags: ['Behavioral Design', 'Mobile Native', 'Privacy-First'],
    industry: 'Wellness / Consumer',
    scaleStage: 'Early',
    metrics: [
      { label: 'Product Scope', value: 'One-screen micro-habit for daily cognitive resets' },
      { label: 'System Complexity', value: 'On-device processing and minimal backend for analytics' },
      { label: 'User Impact', value: 'Low-friction completion flows suited for busy users' }
    ]
  },

  {
    slug: 'roofdraft',
    title: 'RoofDraft',
    category: 'Construction Tech / Field Operations',
    shortDescription: 'An iOS LiDAR-enabled workflow that scans roofs, detects defects, and auto-generates AI-assisted work orders for field teams.',
    engagementModes: ['venture-builder', 'product-leadership-partner', 'regulated-systems'],
    image: '/images/portfolio/roofdraft/roofdraft_cover.webp',
    thumbnail: '/images/portfolio/roofdraft/roofdraft_thumbnail.webp',
    cover: '/images/portfolio/roofdraft/roofdraft_cover.webp',
    hero: '/images/portfolio/roofdraft/roofdraft_hero.webp',
    complexityTags: ['LiDAR', 'AI-Enabled', 'Field Operations'],
    industry: 'Construction / Insurance',
    scaleStage: 'Early',
    metrics: [
      { label: 'Operational Scope', value: 'On-device model generation, defect detection and structured exports' },
      { label: 'System Complexity', value: 'Hardware integration with AI inference and CRM pipelines' },
      { label: 'Business Impact', value: 'Faster inspections and higher estimate accuracy' }
    ]
  }
]

export default projects
