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
    shortDescription: 'A mediation platform that brings structured pathways to dispute resolution while producing defensible records for legal contexts.',
    engagementModes: ['venture-builder', 'product-leadership-partner', 'design-systems', 'regulated-systems'],
    image: '/images/portfolio/imediate.png',
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
    slug: 'power-proof-portal',
    title: 'Power Proof Portal',
    category: 'Energy Compliance Platform',
    shortDescription: 'An infrastructure layer for proving and certifying renewable generation provenance to market and regulators.',
    engagementModes: ['product-leadership-partner', 'regulated-systems'],
    image: '/images/portfolio/power-proof.png',
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
    image: '/images/portfolio/a2x-global.png',
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
    image: '/images/portfolio/extra-ticket.png',
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
    image: '/images/portfolio/leaf.png',
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
    image: '/images/portfolio/fluffybutt.png',
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
    image: '/images/portfolio/gk-mvp.png',
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
    image: '/images/portfolio/photosell.png',
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
    image: '/images/portfolio/supergramp.png',
    complexityTags: ['Community Infrastructure', 'Enterprise Workflow'],
    industry: 'Community / Social Services',
    scaleStage: 'Early',
    metrics: [
      { label: 'Market Scope', value: 'Local service networks defined with onboarding patterns' },
      { label: 'System Complexity', value: 'Scheduling and verification architecture' },
      { label: 'Operational Impact', value: 'Clear volunteer coordination flows' }
    ]
  }
]

export default projects
