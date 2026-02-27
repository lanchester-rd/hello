import Link from 'next/link'

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-semibold">Case Studies</h1>
      <p className="mt-4 text-lg text-gray-600">Placeholder index for case studies.</p>
      <div className="mt-8 space-y-4">
        <Link href="/case-studies/example-case" className="text-accent">Example Case Study</Link>
      </div>
    </div>
  )
}
