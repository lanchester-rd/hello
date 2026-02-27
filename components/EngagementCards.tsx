"use client"
import Card from './Card'
import Link from 'next/link'

const items = [
  { slug: 'venture-builder', title: 'Venture Builder' },
  { slug: 'product-leadership-partner', title: 'Product Leadership Partner' },
  { slug: 'design-systems', title: 'Design Systems & Coherence' },
  { slug: 'regulated-systems', title: 'Regulated Systems Strategy' }
]

export default function EngagementCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(item => (
        <Link key={item.slug} href={`/engagement/${item.slug}`}>
          <Card>
            <div className="flex flex-col h-full">
              <div className="text-sm font-medium">{item.title}</div>
              <p className="mt-3 text-sm text-gray-600 line-clamp-2">Placeholder description for {item.title}. Two-line summary about approach and value.</p>
              <div className="mt-auto flex items-center justify-end text-accent">→</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
