import Link from 'next/link'

export default function Engagements() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-semibold">Engagement Models</h1>
      <p className="mt-4 text-lg text-gray-600">Placeholder list of engagement models.</p>
      <div className="mt-8 space-y-4">
        <Link href="/engagements/venture-builder" className="text-accent">Venture Builder</Link>
      </div>
    </div>
  )
}
