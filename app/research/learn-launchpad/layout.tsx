import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'The LEARN Launchpad | Product Engineering Case Study',
  description:
    'How Lanchester built LEARN: a unified identity and onboarding gateway for early-access products, with lessons from ten system-level failures.',
  path: '/research/learn-launchpad',
  keywords: [
    'LEARN launchpad',
    'product engineering case study',
    'identity architecture',
    'early access platform',
  ],
  type: 'article',
})

export default function LearnLaunchpadLayout({ children }: { children: ReactNode }) {
  return children
}
