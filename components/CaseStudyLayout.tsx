import { Project } from '../data/projects'
import AnimatedDivider from './AnimatedDivider'
import ContactCTA from './ContactCTA'
import ComplexityTag from './ComplexityTag'
import SystemDiagram from './SystemDiagram'

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

          <div className="mt-8">
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src={project.hero || project.cover || project.image || '/images/portfolio/placeholder.svg'}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
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
                <li>High-conflict co-parenting communication is a persistent source of family-law caseloads and enforcement actions.</li>
                <li>Courts and legal bodies increasingly require documented, time-stamped evidence of exchanges where child welfare or custody is in dispute.</li>
                <li>WhatsApp and similar messaging services are the de facto layer for day-to-day co-parent communication, but they are unstructured.</li>
                <li>Child activity coordination is fragmented across schools, local clubs and parent-focused platforms, creating duplicate workflows.</li>
                <li>Calendar misunderstandings — conflicting drop-off/pick-up times and ad-hoc changes — are a primary driver of recurring disputes.</li>
                <li>Local parenting ecosystems (community apps and projects) are rising as coordination hubs but lack integration with mediation and legal workflows.</li>
              </ul>

              <p className="mt-4 text-gray-600">Systemic tension: parents operate within unstructured conversational threads while institutions (courts, schools, activity organisers) require structured records suitable for audit and operational handoffs.</p>
            </div>
          </section>

          <section className="py-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap gap-3 text-xs uppercase text-gray-500 tracking-wider">
                <div>Legal / Dispute Resolution</div>
                <div>Communication Infrastructure</div>
                <div>Child Logistics</div>
                <div>Regulated Scale</div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Messaging platforms amplify emotional escalation because they lack embedded behavioural guardrails.</li>
                <li>There are no consistent, machine-readable formats for extracting event data from conversational threads; calendar misunderstandings persist.</li>
                <li>Child activity coordination is dispersed across disconnected systems, producing duplicate messages and unclear responsibilities.</li>
                <li>Documentation for legal or administrative use requires manual extraction and curation, which increases cost and latency.</li>
              </ul>

              <p className="mt-4 text-gray-600">Clarification: the problem is not the existence of messaging itself. The failure is that relational infrastructure — the set of practices and technical scaffolding that organise interpersonal coordination — is unstructured and not fit for legal, school, or operational workflows.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
              <p className="mt-4 text-gray-600">If communication within an existing messaging channel can be made behaviourally guided (NVC embedded), automatically structured, calendar-aware, documentation-ready, and integrated with child activity ecosystems, then:</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Co-parenting conflict incidence will decrease through guided interaction and fewer ambiguous calendar changes.</li>
                <li>Administrative burden for parents, mediators and courts will reduce via automated extraction and structured exports.</li>
                <li>Legal defensibility improves because records are produced in exportable, auditable formats.</li>
                <li>Child-centric coordination improves as activity data and responsibilities are synchronised across systems.</li>
              </ul>

              <p className="mt-4 text-gray-600">Positioning: iMediate is a co-parenting operating system built on top of WhatsApp — an infrastructure layer that organises communication rather than replacing it.</p>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Behavioral Infrastructure — NVC Layer</h3>
              <p className="mt-4 text-gray-600">Behavioral Constraint Layer integrates Non-Violent Communication principles into the interaction path while preserving the native messaging experience. Key capabilities:</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Structured prompts that reframe requests into clear, observation‑need‑request patterns.</li>
                <li>De‑escalation nudges when language signals escalation; reframing suggestions surfaced inline prior to send.</li>
                <li>AI-assisted message analysis for intent classification and safe default responses.</li>
                <li>Intent clarification flows that require the sender to acknowledge responsibilities (who, when, what) before a critical message is committed to the record.</li>
              </ul>
              <p className="mt-4 text-gray-600">Design goal: provide guardrails that reduce reactive escalation while maintaining minimal friction for routine coordination.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Calendar Intelligence Layer</h3>
              <p className="mt-4 text-gray-600">Automatic parsing of conversational content to extract structured event data and convert it into reliable calendar entries.</p>
              <p className="mt-4 text-gray-600">Extraction model produces nine canonical fields: Description, Responsible Adult, Emergency Contact, Drop Off, Pick Up, Costs, Equipment, Reminders, Agenda.</p>
              <p className="mt-4 text-gray-600">Extracted records are converted to structured calendar entries and synchronized to a designated co‑parent calendar. Exports use an ICS naming convention: <em>EventTitle_YYYY-MM-DD_HH-MM.ics</em>.</p>
              <p className="mt-4 text-gray-600">Conflict detection logic flags overlapping commitments, inconsistent responsibilities, and high-risk changes for mediator review. The leverage is explicit: calendar disputes are a common repeat trigger for conflict; reducing ambiguity reduces recidivist disputes.</p>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Activity Ecosystem Integration</h3>
              <p className="mt-4 text-gray-600">Activity Ecosystem Integration describes the system-level bridges that pull event data from local parenting platforms and school tools into the mediation-aware calendar.</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Bi-directional sync adapters for platforms such as WipWap, Local Parenting Community Apps and regional projects (e.g., Amsterdam Parent Project).</li>
                <li>Normalized activity records that map platform-specific fields to the nine-field calendar model.</li>
                <li>Responsibility synchronization to ensure drop-off/pick-up duties are assigned and visible to both parties.</li>
                <li>Reduction of duplicate messages by surfacing canonical activity entries rather than freeform chat.</li>
              </ul>
              <p className="mt-4 text-gray-600">Positioning: bridge mediation workflows and daily-life logistics so that dispute-resolution artefacts are grounded in the actual operations of child care and activities.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
              <h4 className="font-semibold">System Architecture (Sublayers)</h4>
              <p className="mt-3 text-gray-600">Architecture is organised into discrete sublayers to preserve auditability and allow incremental rollout.</p>
              <ol className="mt-4 list-decimal list-inside text-gray-600 space-y-2">
                <li><strong>WhatsApp API Gateway</strong>: mediated webhook/ingest that captures turns and preserves original payloads and metadata.</li>
                <li><strong>NVC Processing Layer</strong>: behavioral constraint engine that applies NVC transforms, nudges and intent validation.</li>
                <li><strong>Structured Metadata Extraction Engine</strong>: deterministic parsers and ML-assisted extractors producing the nine-field event model and evidentiary labels.</li>
                <li><strong>Calendar Sync & Conflict Detection</strong>: authoritative calendar store, ICS export, and conflict-detection heuristics.</li>
                <li><strong>Documentation Generation System</strong>: composable PDF/structured exports, signing/anchoring, and chain-of-custody metadata for legal use.</li>
                <li><strong>Community Integration Layer</strong>: adapters for WipWap, local parenting apps, school tools and other activity platforms.</li>
                <li><strong>Firebase Low-Cost Scalable Backend</strong>: serverless storage, tiered archival, and retrieval APIs designed for predictable costs and compliance retention policies.</li>
              </ol>

              <div className="mt-6">
                <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="w-full px-6">
                    <div className="space-y-4">
                      <SystemDiagram type="linear" complexity="high" />
                      <SystemDiagram type="layered" complexity="high" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Measurable Outcomes (Structural)</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Designed calendar-aware communication parsing engine (nine-field extraction model).</li>
                <li>Integrated behavioral constraint layer embedding NVC principles into interaction flows.</li>
                <li>Defined structured, exportable documentation workflow suitable for evidentiary review.</li>
                <li>Established a multi-platform integration strategy for local parenting ecosystems.</li>
                <li>Architected a low-cost, scalable backend with tiered archival and audit retrieval paths.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Go‑To‑Market & Adoption</h3>
              <p className="mt-4 text-gray-600">Adoption is dual-channel: legal partnerships that surface court-ready documentation and community partnerships that seed local uptake.</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Legal firm partnership model: integrate with mediators and family law practitioners to validate evidence workstreams and accelerate institutional adoption.</li>
                <li>Court-ready documentation as an adoption lever: focus initial regulatory acceptance and case studies on jurisdictional pilots (Amsterdam) leveraging local counsel.</li>
                <li>Community integration strategy: deploy through WipWap, Amsterdam Parent Project and local parenting apps to seed real-world coordination use.</li>
                <li>Expansion roadmap: NL → EU → UK → US, with each stage adapting exports and retention to local evidentiary rules.</li>
              </ul>
              <p className="mt-4 text-gray-600">Commercial motion: combine a referral/partnership channel into practice groups with a community-led rollout to ensure practical utility and adoption in daily parenting logistics.</p>
            </div>
          </section>
        </>
      ) : slug === 'extra-ticket' ? (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Market Context</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Dating and social apps produce high-volume, low-context interactions that weaken conversion to real-world connection.</li>
                <li>Event attendance already acts as a strong, observable interest filter that signals intent and context.</li>
                <li>Unused tickets are a source of social and economic inefficiency — they represent missed meet‑ups and wasted spend.</li>
              </ul>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Cold-start marketplace tension: buyers and sellers lack interaction history to make trade-offs.</li>
                <li>Trust between strangers is fragile in casual secondary markets, creating friction and disputes.</li>
                <li>Context-free matching fatigue: matches without shared activity or intent lead to low conversion.</li>
                <li>High drop-off between digital match and real-world meeting, reducing lifetime value of interactions.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
              <p className="mt-4 text-gray-600">If event tickets become the anchor for introductions, shared context precedes conversation, intent is clearer, and conversion to real-world meetings increases — positioning the product as a context-first social marketplace rather than a generic matching layer.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">System Architecture</h4>
                <p className="mt-3 text-gray-600">Designed as a lightweight marketplace with composable trust layers and event-aware discovery. Primary subsystems below define listing, identity, matching, and safety.</p>

                <div className="mt-4 space-y-3">
                  <div>
                    <h5 className="font-semibold">Ticket listing model</h5>
                    <p className="mt-1 text-gray-600">Listings are event-anchored assets with provenance metadata (seat, time, issuer). Listings support intent tags (attending, selling, gifting) and allow venue-specific constraints.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">User verification logic</h5>
                    <p className="mt-1 text-gray-600">Multi-step verification: email/phone, optional government ID or social proof, and event check-in linkage. Verification is tiered — higher signal unlocks trust affordances.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Matching mechanics</h5>
                    <p className="mt-1 text-gray-600">Context-driven matching surfaces people around shared events, common intent and reciprocity. Matches prioritise temporal proximity to the event and complementary attendance behaviours.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Trust & safety layer</h5>
                    <p className="mt-1 text-gray-600">Safety signals include verified check-ins, endorsement badges, and lightweight reputation. Escrow and dispute resolution are pluggable modules to limit counterparty risk.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Event-based filtering system</h5>
                    <p className="mt-1 text-gray-600">Filters bind discovery to event attributes (venue, time, format). This reduces context ambiguity and surfaces relevant social cues before conversation starts.</p>
                  </div>
                </div>
              </div>
              <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="w-full px-6">
                  <div className="space-y-4">
                    <SystemDiagram type="network" complexity="medium" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Execution Pillars</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Marketplace design</h5>
                  <p className="mt-2 text-gray-600">Design for liquidity and low-friction discovery: clear listing states, ephemeral inventory, and time-bound visibility to accelerate matches.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Behavioral friction reduction</h5>
                  <p className="mt-2 text-gray-600">Nudge flows that convert interest into check-ins: structured prompts, micro-commitments and defaults that make meeting in real life the easier path.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Safety signaling</h5>
                  <p className="mt-2 text-gray-600">Visible trust indicators (verified check-ins, endorsements and venue-backed confirmations) reduce perceived risk when meeting strangers.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Monetization pathways</h5>
                  <p className="mt-2 text-gray-600">Ticket partnerships, premium featured listings, and venue promotions that align incentives across buyers, sellers and event organisers.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Measurement & growth</h5>
                  <p className="mt-2 text-gray-600">Early metrics focus on conversion from match → meetup, listing fill-rate, and dispute incidence to tune trust mechanisms.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Measurable Outcomes (Structural)</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Defined cold-start mitigation strategy via seeded inventory and verified organisers.</li>
                <li>Built context-driven matching framework prioritising event signals over generic profile signals.</li>
                <li>Reduced interaction ambiguity through venue and ticket-linked metadata.</li>
                <li>Structured trust architecture combining verification tiers, escrow and venue endorsements.</li>
              </ul>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">What’s Next</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Venue integrations to enable official check-ins and ticket provenance alignment.</li>
                <li>In-app escrow for secure ticket exchange and dispute reduction.</li>
                <li>Social graph layering to preserve privacy while enabling trust signals across mutual connections.</li>
              </ul>
            </div>
          </section>
        </>
      ) : slug === 'fluffybutt' ? (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Market Context</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Foster dogs and rescue networks lack a centralised system for tracking health and care across distributed caregivers.</li>
                <li>Rescue organisations coordinate across volunteers, fosters and clinics which creates operational friction.</li>
                <li>Emotional engagement with animals is a powerful lever for adoption when paired with clear medical and behavioural storytelling.</li>
              </ul>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Fragmented medical records across foster homes and clinics make continuity of care difficult.</li>
                <li>Volunteer coordination gaps lead to missed medications, appointments and follow-ups.</li>
                <li>Adoption storytelling is often disconnected from verifiable care data, reducing buyer confidence.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
              <p className="mt-4 text-gray-600">If foster care data is structured, shareable and socially visible, then care quality improves, coordination friction falls, and the probability of adoption increases. Position the product as care infrastructure with social reinforcement.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">System Architecture</h4>
                <p className="mt-3 text-gray-600">A care-first platform combining a persistent health log, multi-user access controls, organisation dashboards and a social layer that surfaces care milestones and narratives.</p>

                <div className="mt-4 space-y-3">
                  <div>
                    <h5 className="font-semibold">Health log system</h5>
                    <p className="mt-1 text-gray-600">Structured entries for vaccinations, medications, behaviour notes and vet reports. Each entry is timestamped and attributed to a caregiver.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Multi-user access model</h5>
                    <p className="mt-1 text-gray-600">Role-based access for fosters, volunteers, vets and admin — enabling collaborative updates while protecting sensitive data.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Rescue organisation dashboards</h5>
                    <p className="mt-1 text-gray-600">Operational views for case load, medication schedules, appointment tracking and volunteer assignments to reduce manual coordination.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Social sharing layer</h5>
                    <p className="mt-1 text-gray-600">Compose adoption narratives from verified care data: milestone highlights, before/after timelines and vet endorsements that build trust with adopters.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Gamified care milestones</h5>
                    <p className="mt-1 text-gray-600">Reward and surface progress (e.g., vaccine complete, behaviour milestone) to increase volunteer engagement and show clear adoption readiness.</p>
                  </div>
                </div>
              </div>
              <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="w-full px-6">
                  <div className="space-y-4">
                    <SystemDiagram type="layered" complexity="medium" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Execution Pillars</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Habit-forming logging</h5>
                  <p className="mt-2 text-gray-600">Design lightweight daily prompts and templated entries to make logging part of routine care rather than an extra task.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Rescue admin workflow design</h5>
                  <p className="mt-2 text-gray-600">Build admin tools for load balancing, appointment orchestration and volunteer coordination to reduce operational overhead.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Emotional design clarity</h5>
                  <p className="mt-2 text-gray-600">Create interfaces that translate care actions into human stories — clear, empathetic summaries that drive adoption decisions.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Adoption narrative visibility</h5>
                  <p className="mt-2 text-gray-600">Allow curated public profiles for adoptable dogs that combine timeline, vet notes and milestone badges to increase confidence and emotional connection.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-semibold">Measurement & impact</h5>
                  <p className="mt-2 text-gray-600">Track coordination load, time-to-adoption, missed-care incidents and volunteer retention to iterate on product priorities.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Outcomes</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Centralised, distributed care data accessible to fosters and organisations.</li>
                <li>Reduced coordination friction through clear owner and schedule semantics.</li>
                <li>Improved care transparency for adopters and vets.</li>
                <li>Structured adoption storytelling built on verified care records.</li>
              </ul>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">What’s Next</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Vet API integration to import clinical records and standardise health data.</li>
                <li>Predictive health flags to surface risk and prompt early intervention.</li>
                <li>Shelter network scaling to synchronise records across a federation of rescues.</li>
              </ul>
            </div>
          </section>
        </>
        ) : slug === 'photosell' ? (
          <>
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Market Context</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Households hold many under-documented high-value assets that sit idle in attics and storage.</li>
                  <li>Insurance products frequently undervalue household inventory due to sparse documentation.</li>
                  <li>Secondary resale markets for household goods are fragmented, reducing liquidity for consumers.</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">The Problem</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>No structured home inventory leads to valuation uncertainty at claim time.</li>
                  <li>Insurance undervaluation risk creates gaps in household protection.</li>
                  <li>Claim friction and slow payouts reduce household liquidity when it matters.</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
                <p className="mt-4 text-gray-600">If household assets are digitally catalogued, valuation-assisted and insurance-linked, then households gain both improved liquidity and stronger risk protection. The product operates at the intersection of household risk engineering and resale marketplace infrastructure.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold">System Architecture</h4>
                  <p className="mt-3 text-gray-600">A photo-first inventory system with an AI-assisted valuation layer and exportable insurance documentation, plus optional marketplace integration for resale liquidity.</p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h5 className="font-semibold">Photo-based inventory system</h5>
                      <p className="mt-1 text-gray-600">Capture items via guided photo flows that attach metadata (brand, model, condition) and link to household rooms for context.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">AI-assisted valuation layer</h5>
                      <p className="mt-1 text-gray-600">Conceptual valuation models provide price bands and provenance flags to reduce underinsurance and inform resale pricing.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Insurance export documentation</h5>
                      <p className="mt-1 text-gray-600">Generate insurer-ready inventories and evidence bundles that simplify claims and reduce disputes over value.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Marketplace integration logic</h5>
                      <p className="mt-1 text-gray-600">Optional resale pathways that map catalogued assets to local and national marketplaces to create defined liquidity channels.</p>
                    </div>
                  </div>
                </div>
                <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="w-full px-6">
                    <div className="space-y-4">
                      <SystemDiagram type="layered" complexity="medium" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Execution Pillars</h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Structured categorization</h5>
                    <p className="mt-2 text-gray-600">Guided taxonomies and templated capture flows to reduce ambiguity in item descriptions.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Trust signaling</h5>
                    <p className="mt-2 text-gray-600">Provenance tags, timestamped evidence and valuation confidence scores to increase insurer and buyer trust.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Pricing transparency</h5>
                    <p className="mt-2 text-gray-600">Clear value bands and historical references to make claim and resale expectations explicit.</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Cross-system integration planning</h5>
                    <p className="mt-2 text-gray-600">APIs and export formats designed for insurer ingestion, appraisal partners and marketplace partners.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Measurement & governance</h5>
                    <p className="mt-2 text-gray-600">Track documentation completeness, valuation variance and claim resolution times to prove value to insurers and users.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Outcomes</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Reduced documentation ambiguity for household assets.</li>
                  <li>Structured visibility into household risk and valuations.</li>
                  <li>Defined monetization dual-path: insurance protection and resale liquidity.</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">What’s Next</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Insurance API integration to enable automated inventory ingestion and claims handling.</li>
                  <li>Automated appraisal partnerships to tighten valuation confidence and reduce disputes.</li>
                  <li>Marketplace pilot integrations to create immediate resale liquidity channels.</li>
                </ul>
              </div>
            </section>
          </>
        ) : slug === 'shootatlas' ? (
          <>
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Overview</h3>
                <p className="mt-4 text-gray-600">ShootAtlas is designed for photographers, production managers, and creative teams running on-location shoots. The platform replaces fragmented tools like PDFs, WhatsApp chats, and spreadsheets with a centralized, AI-augmented production system.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Problem</h3>
                <p className="mt-4 text-gray-600">On-location shoots are chaotic because:</p>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Shot lists are stored in PDFs or notes</li>
                  <li>Crew communication happens across multiple channels</li>
                  <li>Equipment tracking is manual</li>
                  <li>Schedules are static and don’t adapt to delays</li>
                  <li>Weather and lighting changes aren’t proactively managed</li>
                  <li>Clients request real-time updates without centralized visibility</li>
                  <li>There is no intelligent coordination layer designed specifically for field production.</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Solution</h3>
                <p className="mt-4 text-gray-600">ShootAtlas provides:</p>
                <h4 className="mt-4 font-semibold">Production Planning</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>Shot list builder</li>
                  <li>Call sheet generator</li>
                  <li>Crew role assignment</li>
                  <li>Location mapping</li>
                  <li>Equipment inventory management</li>
                </ul>

                <h4 className="mt-4 font-semibold">On-Location Execution</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>Live schedule tracking</li>
                  <li>Real-time crew notifications</li>
                  <li>Delay adjustments</li>
                  <li>Client view mode</li>
                </ul>

                <h4 className="mt-4 font-semibold">AI Project Assistant</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>Suggests optimized shoot order based on lighting and time</li>
                  <li>Flags scheduling or equipment conflicts</li>
                  <li>Predicts weather disruption impact</li>
                  <li>Converts voice notes into structured tasks</li>
                  <li>Generates call sheets automatically</li>
                  <li>Summarizes production notes</li>
                  <li>Tracks budget drift in real time</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">My Role</h3>
                <p className="mt-4 text-gray-600"><strong>Product Design Leader / Product Manager</strong></p>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Defined product vision and positioning</li>
                  <li>Conducted workflow mapping for on-location production</li>
                  <li>Designed AI integration strategy</li>
                  <li>Scoped MVP feature set</li>
                  <li>Designed UX for mobile-first field use</li>
                  <li>Created product roadmap and scaling strategy</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Product Strategy</h3>
                <p className="mt-4 text-gray-600">Primary users: freelance photographers, production managers, creative agencies, and brand marketing teams.</p>
                <p className="mt-4 text-gray-600"><strong>Positioning:</strong> A professional-grade production coordination tool augmented by practical AI — not a chatbot, but a workflow intelligence layer.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Outcome & Impact (Conceptual)</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Operational systems thinking applied to field production</li>
                  <li>AI workflow integration that augments planning and execution</li>
                  <li>Real-time coordination design for reducing on-site delays</li>
                  <li>B2B product strategy for agencies and enterprise teams</li>
                  <li>Field-based mobile UX design prioritising low-effort interactions</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Design Direction</h3>
                <p className="mt-4 text-gray-600">Use a clean, professional layout consistent with the portfolio style. Tone: strategic, operational, intelligent. Emphasize AI as workflow augmentation, not gimmick.</p>
              </div>
            </section>
          </>
        ) : slug === 'iru-assistant' ? (
          <>
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Overview</h3>
                <p className="mt-4 text-gray-600">IRU-Assistant is an AI-supported shoot cost and production planning tool — a client-facing dynamic calculator paired with a backend-configurable pricing engine for production teams.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Core Product Architecture</h3>
                <p className="mt-4 text-gray-600">IRU-Assistant is organised into two principal surfaces: the Calculator (user-facing) and the Admin Panel (configuration engine).</p>

                <h4 className="mt-6 font-semibold">1. Calculator Page (/)</h4>
                <p className="mt-2 text-gray-600">A dynamic cost builder that renders services from structured definitions. Key capabilities:</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>Toggle between Model Shoot and Product Shoot</li>
                  <li>Select photo and video deliverables</li>
                  <li>Add services by category: deliverables, team roles (per day / per person), post-production, distribution, add-ons</li>
                  <li>Auto total calculation with usage multipliers and model-specific adjustments</li>
                  <li>Dynamic rendering driven entirely by structured service definitions — no hardcoded pricing logic</li>
                </ul>

                <h4 className="mt-6 font-semibold">2. Admin Panel (/admin)</h4>
                <p className="mt-2 text-gray-600">Internal configuration interface for non-developers to CRUD service definitions and pricing rules without redeploys.</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>Add / edit / soft-delete services</li>
                  <li>Configure billing type (flat, per day, per person), base price, flags and visibility rules</li>
                  <li>Define multipliers and usage rights logic to be applied at calculation time</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Product Capabilities</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Client-facing calculator with instant quote preview</li>
                  <li>Admin-configurable pricing engine with zero-deploy updates</li>
                  <li>Support for flat fees, per-day and per-person billing, and usage multipliers</li>
                  <li>Role-based deliverable configuration and model-specific pricing adjustments</li>
                  <li>Clear separation between calculation engine and presentation layer</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">My Role</h3>
                <p className="mt-4 text-gray-600"><strong>Product Design Leader / Product Manager</strong></p>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Defined the data-driven UI architecture and service model</li>
                  <li>Designed the admin UX for non-technical pricing management</li>
                  <li>Scoped calculation engine and multiplier semantics</li>
                  <li>Led product decisions to separate presentation, config and calculation concerns</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Tech Stack</h3>
                <p className="mt-4 text-gray-600">React, React Router, Vite, TypeScript with an optional Supabase backend for persistence. The app is fully componentized and driven by structured service definitions.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Product Thinking Highlights</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Data-driven UI architecture: UI renders from service configuration rather than static form logic</li>
                  <li>Scalable pricing logic: handles flat, per-day, per-person, and usage multipliers via metadata</li>
                  <li>Separation of concerns: admin config layer, calculation engine, presentation layer</li>
                  <li>Real business utility: replaces fragile spreadsheets with a transparent, auditable calculator</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Outcome / Portfolio Value</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Demonstrates end-to-end product thinking and systems design</li>
                  <li>Showcases admin architecture that removes the need for redeploys to change pricing</li>
                  <li>Positions the product owner as a PM and design leader capable of translating operational workflows into scalable software</li>
                </ul>
              </div>
            </section>
          </>
        ) : slug === 'leaf' ? (
          <>
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Market Context</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Messaging platforms historically present conversations in linear threads despite natural branching.</li>
                  <li>Long threads increase cognitive load and obscure sub-conversations.</li>
                  <li>Users frequently lose track of topic forks and decision trails across extended chats.</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">The Problem</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Topic drift across long conversations leads to lost sub-conversations.</li>
                  <li>Context collapse makes it hard to resume or reference prior branches.</li>
                  <li>Cognitive overload increases as users scan linear threads to find relevant forks.</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
                <p className="mt-4 text-gray-600">If users can highlight text to spawn branch threads, conversations can evolve into navigable knowledge trees. Position the product as a conversation graph architecture that turns linear chat into structured, explorable trees.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold">System Architecture</h4>
                  <p className="mt-3 text-gray-600">Core components include highlight detection, branching thread logic, and a tree navigation UI that collapses and expands sub-conversations.</p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h5 className="font-semibold">Text highlight detection</h5>
                      <p className="mt-1 text-gray-600">Capture user-selected spans and map them to branch metadata including author, timestamp and intent tags.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Thread branching logic</h5>
                      <p className="mt-1 text-gray-600">Create linked child threads that inherit context while remaining addressable as independent discussion nodes.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Tree navigation interface</h5>
                      <p className="mt-1 text-gray-600">Visualize conversations as collapsible trees with deep-linking to branches and search across nodes.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Collapse / expand structure</h5>
                      <p className="mt-1 text-gray-600">Interaction patterns to reduce surface complexity while preserving the ability to drill into any sub-thread.</p>
                    </div>
                  </div>
                </div>
                <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="w-full px-6">
                    <div className="space-y-4">
                      <SystemDiagram type="network" complexity="medium" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Execution Pillars</h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Cognitive load reduction</h5>
                    <p className="mt-2 text-gray-600">Interaction patterns and defaults that reduce scanning and help users focus on active branches.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Information architecture redesign</h5>
                    <p className="mt-2 text-gray-600">Reframe conversational data as nodes and edges with metadata-driven discovery and summarization.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Interaction pattern innovation</h5>
                    <p className="mt-2 text-gray-600">Design micro-interactions for branching, summarisation, and low-effort context capture to make branching natural.</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Experimental UI validation</h5>
                    <p className="mt-2 text-gray-600">Rapid prototypes and A/B experiments to measure navigability and reductions in conversational entropy.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Measurement & iteration</h5>
                    <p className="mt-2 text-gray-600">Track branch re-open rates, cross-references and retrieval latency to iterate on UX and information models.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Outcomes</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Defined a non-linear messaging framework that maps conversations to a graph.</li>
                  <li>Reduced conversational entropy through branch-aware summarization and navigation.</li>
                  <li>Built a branching interaction prototype that demonstrates navigable knowledge trees.</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">What’s Next</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Knowledge tagging to connect branches and entities across conversations.</li>
                  <li>Searchable thread mapping to make branches discoverable and linkable.</li>
                </ul>
              </div>
            </section>
          </>
        ) : slug === 'gk-mvp' ? (
          <>
            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Market Context</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Food waste is widely distributed across households, retailers and community kitchens.</li>
                  <li>Community coordination for redistribution is fragmented and informal.</li>
                  <li>Logistics and pickup coordination are unclear, reducing the volume of usable surplus.</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">The Problem</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Surplus visibility gaps mean edible food is unused.</li>
                  <li>Trust friction creates hesitation among donors and receivers.</li>
                  <li>Pickup coordination complexity leads to missed handoffs and waste.</li>
                </ul>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
                <p className="mt-4 text-gray-600">If surplus becomes visible, structured and coordinated, community redistribution will increase. The product frames redistribution as community infrastructure rather than ad-hoc charity.</p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold">System Architecture</h4>
                  <p className="mt-3 text-gray-600">Local posting and pickup coordination with reputation and community impact tracking form the core. The system balances lightweight UX with verifiable trust signals.</p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h5 className="font-semibold">Local surplus posting</h5>
                      <p className="mt-1 text-gray-600">Simple flows for posting available surplus with timestamps, quantity and pickup window information.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Pickup coordination workflow</h5>
                      <p className="mt-1 text-gray-600">Scheduling and routing logic that matches volunteers or micro-transport to pickups and drop-offs.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Trust / reputation model</h5>
                      <p className="mt-1 text-gray-600">Lightweight reputation and confirmation signals (photo check-ins, volunteer endorsements) to reduce friction.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold">Community impact tracking</h5>
                      <p className="mt-1 text-gray-600">Dashboards and simple metrics that show redistributed volume, meals enabled and community reach.</p>
                    </div>
                  </div>
                </div>
                <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="w-full px-6">
                    <div className="space-y-4">
                      <SystemDiagram type="network" complexity="medium" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Execution Pillars</h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Incentive design</h5>
                    <p className="mt-2 text-gray-600">Design donor and volunteer incentives that align with behavioural participation loops.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Community UX clarity</h5>
                    <p className="mt-2 text-gray-600">Clear, low-friction posting and pickup confirmations that reduce uncertainty and cognitive load.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Behavioral participation loops</h5>
                    <p className="mt-2 text-gray-600">Feedback loops and micro-recognition to sustain volunteer engagement and repeat donations.</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">NGO alignment planning</h5>
                    <p className="mt-2 text-gray-600">Co-design with local NGOs to ensure handoff workflows match organisational capacity and legal constraints.</p>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-md">
                    <h5 className="font-semibold">Measurement & governance</h5>
                    <p className="mt-2 text-gray-600">Track pickups, confirmation rates and diversion-to-donation metrics to demonstrate impact to partners.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">Outcomes</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Structured redistribution workflow that reduces coordination ambiguity.</li>
                  <li>Increased visibility of surplus and clearer pickup handoffs.</li>
                  <li>Defined trust architecture that lowers friction for donors and receivers.</li>
                </ul>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold">What’s Next</h3>
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  <li>Municipality integrations to formalise pickup routes and reporting.</li>
                  <li>Donation tracking dashboards for NGOs and local coordinators.</li>
                </ul>
              </div>
            </section>
          </>
          ) : slug === 'a2x-global' ? (
            <>
              <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Market Context</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Onboarding courier logistics require tight coordination across personnel and routes.</li>
                    <li>Time-critical shipments amplify the cost of coordination errors.</li>
                    <li>Cross-border shipments introduce documentation and compliance complexity that slows operations.</li>
                  </ul>
                </div>
              </section>

              <section className="py-20">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">The Problem</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Personnel coordination is dispersed across chat, email and spreadsheets.</li>
                    <li>Shipment tracking is fragmented between carriers and internal teams.</li>
                    <li>Documentation gaps increase regulatory risk and delay clearances.</li>
                  </ul>
                </div>
              </section>

              <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
                  <p className="mt-4 text-gray-600">If shipment data, personnel coordination and compliance documentation live in a single system, operational friction will drop and time-critical routing becomes reliable.</p>
                </div>
              </section>

              <section className="py-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold">System Architecture</h4>
                    <p className="mt-3 text-gray-600">Core elements unify tracking, access controls and a compliance layer to support cross-border operations and time-sensitive routing.</p>

                    <div className="mt-4 space-y-3">
                      <div>
                        <h5 className="font-semibold">Shipment tracking dashboard</h5>
                        <p className="mt-1 text-gray-600">Unified view for active shipments with ETA, handoff status and exception flags for time-critical visibility.</p>
                      </div>

                      <div>
                        <h5 className="font-semibold">Role-based access</h5>
                        <p className="mt-1 text-gray-600">Granular roles for operations, customs, drivers and partners to reduce information overload while preserving accountability.</p>
                      </div>

                      <div>
                        <h5 className="font-semibold">Compliance documentation layer</h5>
                        <p className="mt-1 text-gray-600">Structured document templates, audit trails and export formats that satisfy cross-border regulatory checks.</p>
                      </div>

                      <div>
                        <h5 className="font-semibold">Time-critical routing model</h5>
                        <p className="mt-1 text-gray-600">Routing logic that prioritises critical shipments and surfaces contingency plans when delays occur.</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                    <div className="w-full px-6">
                      <div className="space-y-4">
                        <SystemDiagram type="linear" complexity="high" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Execution Pillars</h3>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Enterprise UX simplification</h5>
                      <p className="mt-2 text-gray-600">Clear interfaces that reduce cognitive load for operations teams and speed decision making.</p>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Workflow orchestration</h5>
                      <p className="mt-2 text-gray-600">Automated handoffs and escalation rules to keep time-critical flows moving.</p>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Risk visibility</h5>
                      <p className="mt-2 text-gray-600">Realtime exceptions and risk scoring to prioritise mitigations and communications.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Governance design</h5>
                      <p className="mt-2 text-gray-600">Operational policies, audit trails and compliance gates that integrate with enterprise processes.</p>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Measurement & reporting</h5>
                      <p className="mt-2 text-gray-600">KPIs focused on on-time handoffs, exception resolution time and compliance throughput.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Outcomes</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Reduced coordination complexity across personnel and partners.</li>
                    <li>Improved operational transparency for time-critical shipments.</li>
                    <li>Defined enterprise workflow system that aligns operations and compliance.</li>
                  </ul>
                </div>
              </section>

              <section className="py-20">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">What’s Next</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Predictive routing logic to preempt delays and optimise ETAs.</li>
                    <li>Airline API integrations for tighter cross-border handoffs and tracking.</li>
                  </ul>
                </div>
              </section>
            </>
          ) : slug === 'supergramp' ? (
            <>
              <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Market Context</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Family coordination often suffers from availability uncertainty and message overload.</li>
                    <li>Repeated availability questions create friction and redundant messaging.</li>
                    <li>There is demand for a lightweight, glanceable coordination utility for families.</li>
                  </ul>
                </div>
              </section>

              <section className="py-20">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">The Problem</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Repetitive availability questions create noise and slow decisions.</li>
                    <li>There is no glanceable widget that surfaces who is available now.</li>
                    <li>Messaging overload buries short utility signals in long threads.</li>
                  </ul>
                </div>
              </section>

              <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Strategic Hypothesis</h3>
                  <p className="mt-4 text-gray-600">If availability is a one-tap, visible widget, then coordination friction will fall and family decisions become faster with less messaging overhead.</p>
                </div>
              </section>

              <section className="py-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold">System Architecture</h4>
                    <p className="mt-3 text-gray-600">A minimal utility focused on availability toggles, a home-screen glanceable widget and lightweight notification syncing across devices.</p>

                    <div className="mt-4 space-y-3">
                      <div>
                        <h5 className="font-semibold">Toggle availability logic</h5>
                        <p className="mt-1 text-gray-600">Simple one-tap states (Available / Busy / Ask Later) with optional context tags for quick clarity.</p>
                      </div>

                      <div>
                        <h5 className="font-semibold">Home screen widget</h5>
                        <p className="mt-1 text-gray-600">Glanceable component that surfaces family availability and recent changes without opening the app.</p>
                      </div>

                      <div>
                        <h5 className="font-semibold">Notification sync</h5>
                        <p className="mt-1 text-gray-600">Lightweight push sync that updates availability across devices and reduces redundant reminders.</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                    <div className="w-full px-6">
                      <div className="space-y-4">
                        <SystemDiagram type="network" complexity="medium" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Execution Pillars</h3>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Micro-interaction design</h5>
                      <p className="mt-2 text-gray-600">Design minimal, expressive controls that make availability updates effortless and unambiguous.</p>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Glanceable UX</h5>
                      <p className="mt-2 text-gray-600">Optimise information density for quick readability on widgets and compact surfaces.</p>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-md">
                      <h5 className="font-semibold">Low-friction onboarding</h5>
                      <p className="mt-2 text-gray-600">Onboard with minimal permissions and defaults to encourage immediate utility and retention.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">Outcomes</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Reduced coordination overhead through instant availability signals.</li>
                    <li>Defined micro-utility adoption model for family groups.</li>
                  </ul>
                </div>
              </section>

              <section className="py-20">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-semibold">What’s Next</h3>
                  <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                    <li>Shared calendar integration to surface availability across existing family calendars.</li>
                    <li>Family group scaling to support larger households and multi-family coordination.</li>
                  </ul>
                </div>
              </section>
            </>
          ) : slug === 'five-things' ? (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-sm text-gray-600">Mindfulness / Mental Clarity</div>
              <h1 className="text-3xl md:text-4xl font-semibold mt-2">Five Things</h1>
              <p className="mt-4 text-gray-600 max-w-3xl">A mindful reset in under 60 seconds.</p>
              <p className="mt-6 text-gray-600"><strong>My Role:</strong> Product Lead — Strategy, UX, System Design</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Problem</h3>
              <p className="mt-4 text-gray-600">Modern work and life impose sustained cognitive load that fragments attention. Traditional meditation apps ask users for extended commitment and context switching; busy users deprioritise these sessions and experience emotional friction when they try to fit long-form practice into short windows.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Insight</h3>
              <p className="mt-4 text-gray-600">Naming five concrete things — sights, sensations, or facts — provides rapid cognitive grounding. The behavioral insight is that micro-habits with immediate, repeatable structure lower activation cost and increase habit formation. Short, scaffolded interventions outperform longer practices for users with constrained attention.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Product Vision</h3>
              <p className="mt-4 text-gray-600">Deliver clarity in under one minute with a native, privacy-first iOS experience that fits into existing user routines. The app is intentionally minimal: one primary screen, native controls, and subtle animations that respect Apple design conventions.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">UX & Interaction Design</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>One-screen interaction: start, name five things, complete — no navigation overhead.</li>
                <li>Subtle animations that provide affordance without distraction.</li>
                <li>Haptic feedback to acknowledge completion and reinforce the micro-habit.</li>
                <li>Native typography and UI components to align with platform expectations.</li>
                <li>Offline-first architecture: entries are local by default and sync when appropriate.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">AI Integration</h3>
              <p className="mt-4 text-gray-600">On-device intelligence gently surfaces patterns in user entries to help users reflect over time. Models run locally to preserve privacy; insights are presented as optional summaries that respect user control and do not share raw content off-device.</p>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Leadership & Strategy</h3>
              <p className="mt-4 text-gray-600">As Product Lead I defined a minimal viable scope that prioritised completion rate over feature breadth. Roadmap decisions emphasised platform fidelity, low-latency feedback and privacy guarantees. MVP engineering focused on robust local storage, simple animations, and accessibility-first interactions to align with Apple Human Interface Guidelines.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Outcome & Impact</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Daily completion rate (designed metric): primary lift target for habit formation.</li>
                <li>User retention measured across short windows to validate micro-habit persistence.</li>
                <li>Qualitative emotional clarity feedback captured via brief in-app prompts.</li>
                <li>Reduced friction compared with traditional meditation flows through simplified interaction pathways.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Key Takeaways</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Product simplicity is a competitive advantage when time is the user's scarce resource.</li>
                <li>Micro-interventions can scale adoption where longer practices do not.</li>
                <li>Designing for emotional states requires measured, respectful interfaces and clear opt-in intelligence.</li>
              </ul>
            </div>
          </section>
        </>
      ) : slug === 'roofdraft' ? (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-sm text-gray-600">Construction Tech / Field Operations</div>
              <h1 className="text-3xl md:text-4xl font-semibold mt-2">RoofDraft</h1>
              <p className="mt-4 text-gray-600 max-w-3xl">Scan. Analyze. Dispatch.</p>
              <p className="mt-6 text-gray-600"><strong>My Role:</strong> Product Lead — AI, LiDAR, Workflow Systems</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Industry Problem</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Roof inspections rely on manual measurements and paper-based notes that introduce error.</li>
                <li>Estimates are frequently inaccurate, delaying work orders and increasing rework.</li>
                <li>Generation of structured work orders is slow and often disconnected from CRM and dispatch systems.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">The Innovation</h3>
              <p className="mt-4 text-gray-600">RoofDraft uses device LiDAR to produce accurate 3D roof models, applies AI to detect structural anomalies, and auto-generates maintenance work orders with structured fields suitable for downstream dispatch and insurance workflows.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">Technical Integration</h4>
                <div className="mt-4 space-y-3">
                  <div>
                    <h5 className="font-semibold">Apple LiDAR framework</h5>
                    <p className="mt-1 text-gray-600">On-device capture using native frameworks to produce meshes and depth maps.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">On-device processing</h5>
                    <p className="mt-1 text-gray-600">Edge-first processing reduces upload cost and preserves inspection privacy while producing usable 3D geometry.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">AI defect detection</h5>
                    <p className="mt-1 text-gray-600">Models identify common damage patterns and prioritise anomalies for human review.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">Structured work order export</h5>
                    <p className="mt-1 text-gray-600">Auto-generated work orders include measurements, photos, defect tags and estimated effort for rapid dispatch.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold">CRM compatibility</h5>
                    <p className="mt-1 text-gray-600">Export adapters map work orders into common contractor CRMs and ERP systems to reduce handoff friction.</p>
                  </div>
                </div>
              </div>
              <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="w-full px-6">
                  <div className="space-y-4">
                    <SystemDiagram type="network" complexity="high" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">User Experience Design</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>One-tap scanning workflow minimises operator effort and standardises capture.</li>
                <li>Real-time mesh visualisation provides immediate validation of coverage.</li>
                <li>Damage tagging interface and smart auto-fill fields speed report completion.</li>
                <li>Designed for offline capture with background sync when connectivity returns.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">AI Layer</h3>
              <p className="mt-4 text-gray-600">Pattern recognition models identify common roof damage and suggest prioritized maintenance tasks. Predictive maintenance recommendations and automated task categorization streamline scheduling and supply estimates.</p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Product Leadership</h3>
              <p className="mt-4 text-gray-600">I scoped an MVP that reduced capture surface area to core inspection flows, prioritised on-device processing to meet privacy and latency targets, and coordinated engineering with field teams to ensure hardware constraints informed UX decisions. Complexity was reduced by deferring non-critical analytics to a later phase and focusing initial value on accurate measurements and structured exports.</p>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Business Impact</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>70% faster inspections (projected compared to manual methods).</li>
                <li>40% reduction in estimation errors (projected through accurate measurements).</li>
                <li>Improved contractor throughput and reduced rework.</li>
                <li>Better documentation for insurance claims and faster claim processing.</li>
              </ul>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold">Strategic Takeaways</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>AI plus hardware (LiDAR) create measurable operational advantage in field workflows.</li>
                <li>Design for non-technical operators by minimising steps and providing clear validation feedback.</li>
                <li>Turning physical environments into structured data unlocks automation across dispatch, estimates and claims.</li>
              </ul>
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

          {/* Structural depth metadata */}
          <section className="py-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap gap-3 text-xs uppercase text-gray-500 tracking-wider">
                <div>Energy / Utilities</div>
                <div>Multi-Market Compliance</div>
                <div>High Complexity</div>
                <div>Enterprise Scale</div>
              </div>
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
              <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center">
                <div className="w-full px-6">
                  <div className="space-y-4">
                    <SystemDiagram type="linear" complexity="high" />
                    <SystemDiagram type="network" complexity="high" />
                  </div>
                </div>
              </div>
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
