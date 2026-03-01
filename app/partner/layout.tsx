import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Partner with Lanchester R&D | Engagement Models',
  description: 'Work with Lanchester R&D through our Lab Sprint, Systems Audit, or Network Build offerings. Tailored research and design services for complex organizational challenges.',
  keywords: ['Lanchester partnership', 'engagement models', 'lab sprint', 'systems audit', 'consulting'],
}

export default function PartnerLayout({ children }: { children: ReactNode }) {
  return children
}
