import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Services | Product Strategy, Systems Audit and AI Workflow Design',
  description:
    'Explore Lanchester R&D services in product strategy, systems audits, AI workflow design, custom app development, and nonprofit app development.',
  path: '/services',
  keywords: [
    'product strategy consultancy',
    'systems audit',
    'AI workflow design',
    'custom application development',
    'nonprofit app development',
  ],
})

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children
}
