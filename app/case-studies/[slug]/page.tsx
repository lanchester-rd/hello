import { notFound } from 'next/navigation'
import CaseStudyLayout from '../../../components/CaseStudyLayout'
import projects from '../../../data/projects'

interface Props {
  params: Promise<{ slug: string }> | { slug: string }
}

export default async function CaseStudyPage({ params }: Props) {
  const resolved = await params
  const { slug } = resolved
  if (!slug) notFound()

  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return <CaseStudyLayout project={project} />
}
