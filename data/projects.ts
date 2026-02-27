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
}

export const projects: Project[] = [
  {
    slug: 'imediate',
    title: 'iMediate',
    category: 'Regulated Systems',
    shortDescription: 'Placeholder for iMediate project overview.',
    engagementModes: ['venture-builder', 'regulated-systems'],
    image: '/images/portfolio/placeholder-1.png',
    metrics: [
      { label: '+X% Efficiency', value: '+12%' },
      { label: 'Reduced Cost', value: '−8%' }
    ]
  },
  {
    slug: 'power-proof-portal',
    title: 'Power Proof Portal',
    category: 'Product Leadership',
    shortDescription: 'Placeholder for Power Proof Portal.',
    engagementModes: ['product-leadership-partner'],
    image: '/images/portfolio/placeholder-2.png',
    metrics: [{ label: 'Launched in Markets', value: '3' }]
  },
  {
    slug: 'a2x-global',
    title: 'A2X Global',
    category: 'Design Systems',
    shortDescription: 'Placeholder for A2X Global.',
    engagementModes: ['design-systems'],
    image: '/images/portfolio/placeholder-3.png'
  },
  {
    slug: 'extra-ticket',
    title: 'Extra Ticket',
    category: 'Venture',
    shortDescription: 'Placeholder for Extra Ticket.',
    engagementModes: ['venture-builder'],
    image: '/images/portfolio/placeholder-4.png'
  },
  {
    slug: 'leaf',
    title: 'Leaf',
    category: 'Product Leadership',
    shortDescription: 'Placeholder for Leaf.',
    engagementModes: ['product-leadership-partner']
  },
  {
    slug: 'flufflybutt',
    title: 'FluffyButt',
    category: 'Design Systems',
    shortDescription: 'Placeholder for FluffyButt.',
    engagementModes: ['design-systems']
  },
  {
    slug: 'gk-mvp',
    title: 'GK-MVP',
    category: 'Regulated Systems',
    shortDescription: 'Placeholder for GK-MVP.',
    engagementModes: ['regulated-systems']
  },
  {
    slug: 'photosell',
    title: 'PhotoSell',
    category: 'Venture',
    shortDescription: 'Placeholder for PhotoSell.',
    engagementModes: ['venture-builder']
  },
  {
    slug: 'supergramp',
    title: 'SuperGramp',
    category: 'Product Leadership',
    shortDescription: 'Placeholder for SuperGramp.',
    engagementModes: ['product-leadership-partner']
  }
]

export default projects
