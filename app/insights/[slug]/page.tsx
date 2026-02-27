import React from 'react'
import { notFound } from 'next/navigation'
import ArticleLayout from '../../../components/ArticleLayout'
import articles from '../../../data/articles'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return notFound()
  return <ArticleLayout article={article} />
}
