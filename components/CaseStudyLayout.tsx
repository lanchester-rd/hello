import { Project } from '../data/projects'
import AnimatedDivider from './AnimatedDivider'
import ContactCTA from './ContactCTA'
import ComplexityTag from './ComplexityTag'

export default function CaseStudyLayout({ project, children }: { project: Project; children?: React.ReactNode }) {
  const slug = project.slug
  return (
    <div>
      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600">{project.category}</div>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">{project.title}</h1>
          <p className="mt-4 text-gray-600 max-w-3xl">{project.shortDescription}</p>

          {project.complexityTags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.complexityTags.map((t) => (
                <ComplexityTag key={t}>{t}</ComplexityTag>
              ))}
            </div>
          )}

          <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">Large visual placeholder</div>
        </div>
        <div className="mt-8"><AnimatedDivider /></div>
      </section>
      
      {/* Market Context / Problem / Hypothesis / Architecture: slug-specific executive content */}

      {slug === 'imediate' ? (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Market Context</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Rising legal complexity in co-parenting and family law processes.</li>
                <li>Emotional volatility in communication that undermines clear records.</li>
                <li>Lack of structured documentation systems suitable for evidentiary use.</li>
                <li>Court backlog coinciding with broader digital transformation of legal services.</li>
              </ul>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <p className="mt-4 text-gray-600">Messaging platforms create a stream of unstructured communication. Courts and legal processes require records that are structured, auditable, and interpretable. The failure exists at the system level: information produced by everyday interaction is not organised for legal defensibility, and emotional escalation often obscures the factual record.</p>
              <p className="mt-4 text-gray-600">No platform currently treats communication as infrastructure: machine-readable metadata, behaviourally guided interaction, and court-ready documentation are absent. This is a systems failure, not merely a design gap.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
              <p className="mt-4 text-gray-600">If everyday communication is made structured, interpretable, documentation-ready and behaviourally guided, then co-parenting friction can be reduced and legal defensibility increased. The product is a communication infrastructure — not a chat app — that produces audit-ready artefacts and guides behaviour to reduce escalation.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">System Architecture</h4>
                <p className="mt-3 text-gray-600">Primary components include an integration layer with messaging APIs, structured metadata extraction, a court-ready documentation generator, and a cost-optimised backend. Each component is designed to preserve traceability and support audit workflows.</p>
                <p className="mt-3 text-gray-600">Key architectural considerations: data provenance, non-repudiation, and minimal trust assumptions between parties and institutions.</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <h5 className="font-semibold">WhatsApp API integration model</h5>
                    <p className="mt-1 text-gray-600">A mediated ingestion pipeline that maps conversational turns to structured event records and metadata.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Structured metadata extraction</h5>
                    <p className="mt-1 text-gray-600">Parsing rules and deterministically applied labels that capture intent, participants, timestamps and evidentiary markers.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Court-ready documentation generation</h5>
                    <p className="mt-1 text-gray-600">Composable export formats and a signing/anchoring mechanism to produce defensible records for legal review.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Firebase cost-optimised backend</h5>
                    <p className="mt-1 text-gray-600">A serverless topology focused on predictable cost profiles with tiered storage and archival for audit retention.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Multi-market expansion design</h5>
                    <p className="mt-1 text-gray-600">Launch path: Amsterdam → Netherlands → EU → UK → US. Each stage tightens integration with local counsel and evidence rules.</p>
                  </div>
                </div>
              </div>
              <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">Diagram placeholder</div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Organizational & Go‑To‑Market</h3>
              <p className="mt-4 text-gray-600">A staged GTM pairs an Amsterdam pilot with partnerships across legal practices. Recommended commercial motion: legal firm equity partnership and a feature-led expansion where court-ready documentation becomes a channel to firms and mediators.</p>
              <p className="mt-4 text-gray-600">Infrastructure constraints: target baseline infrastructure cost of $50–$200 monthly for entry-level deployments; scale plans include tiered archival and enterprise-hosted options.</p>
            </div>
          </section>
        </>
      ) : slug === 'power-proof-portal' ? (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Market Context</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Guarantees of Origin systems across Europe create fragmentation in renewable traceability.</li>
                <li>Enterprises require audit-ready proof of procurement and certificate allocation.</li>
                <li>Cross-jurisdiction reporting and certificate matching introduce operational friction.</li>
              </ul>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <p className="mt-4 text-gray-600">Energy purchase patterns and renewable traceability are frequently disconnected. Manual allocation, fragmented reporting and inconsistent certificate matching create regulatory risk and obscure claims. This is a systems-level gap in compliance infrastructure.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
              <p className="mt-4 text-gray-600">If certificate allocation, subscription logic and reporting are unified under a compliance infrastructure layer, enterprises can maintain audit-ready sustainability claims, reduce regulatory risk and simplify operations.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">System Architecture</h4>
                <p className="mt-3 text-gray-600">Core elements: subscription management, certificate allocation engine, cross-border compliance mapping and a reporting dashboard. Role-based interfaces allow enterprise governance and audit.</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <h5 className="font-semibold">Subscription management logic</h5>
                    <p className="mt-1 text-gray-600">Rules for subscriptions, renewals and entitlement mapping to certificates.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Certificate allocation engine</h5>
                    <p className="mt-1 text-gray-600">Deterministic allocation rules with provenance tracking for audit and reconciliation.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Cross-border compliance mapping</h5>
                    <p className="mt-1 text-gray-600">A ruleset that maps certificate semantics between jurisdictions and produces harmonised reports.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Reporting dashboard & interfaces</h5>
                    <p className="mt-1 text-gray-600">Role-based views for procurement, compliance and executive reporting with exportable audit trails.</p>
                  </div>
                </div>
              </div>
              <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">Diagram placeholder</div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Organizational Impact</h3>
              <p className="mt-4 text-gray-600">A structured governance model reduces internal coordination burden and increases transparency across procurement, compliance and settlement teams. Operational rules and audit trails improve regulatory defensibility.</p>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <p className="mt-4 text-gray-600">{`Work with us to articulate the systemic tension this project addresses: operational constraints, user incentives, and regulatory boundaries that shape product choices.`}</p>
              <p className="mt-4 text-gray-600">{`We frame the problem in terms of the system: data flows, decision points, and where institutional friction accumulates.`}</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
              <p className="mt-4 text-gray-600">{`A concise leverage hypothesis that identifies where a small change in product or process yields sustained learning or reduced risk.`}</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">System Architecture</h4>
                <p className="mt-3 text-gray-600">{`Describe the primary workflows, the actors involved, and where data is persisted or transformed. Note audit and traceability touchpoints where relevant.`}</p>
                <p className="mt-3 text-gray-600">{`Outline service boundaries, key integration points, and the operational rules that make the system defensible.`}</p>
              </div>
              <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">Diagram placeholder</div>
            </div>
          </section>
        </>
      )}

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Product Execution</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-100 rounded-md">
              <h5 className="font-semibold">Prioritised Learning</h5>
              <p className="mt-2 text-gray-600">Define experiments that separate assumptions from facts and focus on the riskiest hypotheses.</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-md">
              <h5 className="font-semibold">Incremental Delivery</h5>
              <p className="mt-2 text-gray-600">Ship narrow slices that produce usable outcomes and instrument them for learning.</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-md">
              <h5 className="font-semibold">Governed Rollout</h5>
              <p className="mt-2 text-gray-600">Use guarded releases, monitoring and clear decision gates to expand reach safely.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">Measurable Outcomes</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics?.map((m, i) => (
              <div key={i} className="p-4 border rounded-md">
                <div className="text-sm text-gray-600">{m.label}</div>
                <div className="mt-2 text-gray-800">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold">What We'd Do Next</h3>
          <p className="mt-4 text-gray-600">{`Refine the scope into a concise workplan with decision gates, instrumentation requirements, and an initial rollout guardrail.`}</p>
          <p className="mt-4 text-gray-600">{`Recommend immediate next steps that reduce the largest sources of uncertainty and preserve auditability where required.`}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto">
          <ContactCTA />
        </div>
      </section>

          {children}
    </div>
  )
}
