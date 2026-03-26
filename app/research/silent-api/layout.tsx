import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Solving the Silent API | Lanchester R&D',
  description:
    'Case study on building a busyness index and ranking engine when Google Popular Times data is inaccessible to independent products.',
  path: '/research/silent-api',
  keywords: [
    'silent API',
    'ranking engine case study',
    'maps data product',
    'busyness index',
  ],
  type: 'article',
})

export default function SilentApiLayout({ children }: { children: ReactNode }) {
  return children
}
