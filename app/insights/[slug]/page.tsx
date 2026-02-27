import React from 'react'
import { notFound } from 'next/navigation'
import ArticleLayout from '../../../components/ArticleLayout'
import articles from '../../../data/articles'

type Props = { params: Promise<{ slug: string }> | { slug: string } }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const resolved = await params
  const { slug } = resolved
  const article = articles.find((a) => a.slug === slug)
  if (!article) return notFound()
  return <ArticleLayout article={article} />
}
