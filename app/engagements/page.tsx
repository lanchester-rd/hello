import Link from 'next/link'

export default function Engagements() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-semibold">Engagement Models</h1>
      <p className="mt-4 text-lg text-gray-600">Structured partnerships for defining strategy, aligning execution, and maintaining product integrity across complex domains.</p>
      <p className="mt-3 text-sm text-gray-500">Systems-first partnerships that prioritise operational clarity and defensible workflows.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/engagement/venture-builder" className="block p-6 border rounded-md hover:shadow-sm">
          <h4 className="font-semibold">Venture Builder</h4>
          <p className="mt-2 text-gray-600">Early-stage work with founding teams to turn ambiguity into testable product strategy.</p>
        </Link>

        <Link href="/engagement/product-leadership-partner" className="block p-6 border rounded-md hover:shadow-sm">
          <h4 className="font-semibold">Product Leadership Partner</h4>
          <p className="mt-2 text-gray-600">Embedded product leadership for growth-stage organisations, clarifying governance and priorities.</p>
        </Link>

        <Link href="/engagement/design-systems" className="block p-6 border rounded-md hover:shadow-sm">
          <h4 className="font-semibold">Design Systems & Product Coherence</h4>
          <p className="mt-2 text-gray-600">Create systems that keep product experiences consistent as teams and surface area grow.</p>
        </Link>

        <Link href="/engagement/regulated-systems" className="block p-6 border rounded-md hover:shadow-sm">
          <h4 className="font-semibold">Regulated Systems Strategy</h4>
          <p className="mt-2 text-gray-600">Design product infrastructure that operates reliably within legal, compliance and operational constraints.</p>
        </Link>
      </div>
    </div>
  )
}
