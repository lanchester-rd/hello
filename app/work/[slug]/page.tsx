import CaseStudyLayout from '../../../components/CaseStudyLayout'
import { projects } from '../../../data/projects'

type Props = { params: Promise<{ slug: string }> | { slug: string } }

export default async function WorkPage({ params }: Props) {
  const resolved = await params
  const { slug } = resolved
  const project = projects.find(p => p.slug === slug)

  if (!project) return <div className="max-w-4xl mx-auto px-6 py-32">Project not found</div>

  return <CaseStudyLayout project={project} />
}
