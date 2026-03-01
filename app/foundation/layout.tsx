import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Abbey Fields Foundation | NGO App Development & Nonprofit Technology',
  description: 'Abbey Fields Foundation by Lanchester R&D provides software development, app creation, and digital transformation for charities, NGOs, and nonprofits. Custom technology for mission-driven organizations.',
  keywords: [
    'NGO app development',
    'nonprofit technology',
    'charity software development',
    'nonprofit app',
    'NGO software',
    'charity digital transformation',
    'nonprofit tech solutions',
    'NGO digital tools',
    'mission-driven app development',
    'charitable technology',
    'Abbey Fields Foundation'
  ],
  openGraph: {
    title: 'Abbey Fields Foundation | NGO & Nonprofit App Development',
    description: 'Technology development and digital transformation for charities and NGOs.',
    type: 'website',
  },
}

export default function FoundationLayout({ children }: { children: ReactNode }) {
  return children
}
