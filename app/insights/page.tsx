import React from 'react'
import Link from 'next/link'
import { articles } from '../../data/articles'
import PageHero from '../../components/PageHero'

export default function InsightsIndex() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <PageHero title="Insights" description="Short essays on systems, governance and product architecture." />
      <div className="mt-8 space-y-6">
        {articles.map((a) => (
          <article key={a.slug} className="border-b pb-4">
            <h3 className="text-lg font-semibold">
              <Link href={`/insights/${a.slug}`}>{a.title}</Link>
            </h3>
            <p className="text-sm text-slate-600">{a.summary}</p>
            <div className="mt-2 text-xs text-slate-500">{a.category}</div>
          </article>
        ))}
      </div>
    </div>
  )
}
