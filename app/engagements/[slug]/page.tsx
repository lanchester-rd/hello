import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export default function EngagementPage({ params }: Props) {
  const { slug } = params
  if (!slug) notFound()

  return (
    <div className="max-w-4xl mx-auto px-6 py-40">
      <h1 className="text-3xl font-semibold">{slug.replace('-', ' ')}</h1>
      <p className="mt-4 text-gray-600">Placeholder page for engagement model.</p>
    </div>
  )
}
