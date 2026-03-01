import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Low-Bandwidth Synchronization | Lanchester R&D',
  description: 'Lanchester R&D investigation into low-bandwidth data synchronization protocols for remote operations, enabling reliable communication in resource-constrained environments.',
  keywords: ['low-bandwidth', 'synchronization', 'remote operations', 'networking protocol', 'lanchester'],
}

export default function LowBandwidthSyncLayout({ children }: { children: ReactNode }) {
  return children
}
