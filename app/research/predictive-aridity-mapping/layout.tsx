import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Predictive Aridity Mapping | Lanchester R&D',
  description:
    'Satellite and computer vision research for forecasting agricultural resource scarcity and supply-chain shifts before market pricing moves.',
  path: '/research/predictive-aridity-mapping',
  keywords: [
    'predictive aridity mapping',
    'satellite computer vision',
    'environmental intelligence',
    'resource scarcity forecasting',
  ],
  type: 'article',
  images: ['/images/research/aridity_mapping_hero.png'],
})

export default function PredictiveAridityLayout({ children }: { children: ReactNode }) {
  return children
}
