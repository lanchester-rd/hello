import React from 'react'
import { Article } from '../data/articles'
import PageHero from './PageHero'

type Props = { article: Article }

export default function ArticleLayout({ article }: Props) {
  return (
    <div className="prose prose-slate max-w-3xl mx-auto py-12 px-6">
      <PageHero title={article.title} description={article.summary} />
      <article dangerouslySetInnerHTML={{ __html: article.body }} />
    </div>
  )
}
