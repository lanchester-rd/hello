import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Profile | LEARN',
  description: 'Private account profile for LEARN users.',
  path: '/profile',
  noIndex: true,
})

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return children
}
