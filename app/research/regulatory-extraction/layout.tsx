import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Regulatory Extraction | Zero-Shot Law Parsing - Lanchester R&D',
  description: 'Lanchester R&D whitepaper on regulatory extraction: automated zero-shot parsing of maritime, transport, and complex regulatory frameworks using AI-driven intelligence.',
  keywords: ['regulatory extraction', 'law parsing', 'maritime regulation', 'AI automation', 'lanchester research'],
}

export default function RegulatoryExtractionLayout({ children }: { children: ReactNode }) {
  return children
}
