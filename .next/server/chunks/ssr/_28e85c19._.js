module.exports=[70864,a=>{a.n(a.i(33290))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},64240,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},790,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},84707,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"))},97647,a=>{"use strict";a.i(790);var b=a.i(84707);a.n(b)},95936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64240),g=a.r(7997),h=f._(a.r(97647));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},96575,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/PageHero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/PageHero.tsx <module evaluation>","default")},25268,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/PageHero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/PageHero.tsx","default")},88901,a=>{"use strict";a.i(96575);var b=a.i(25268);a.n(b)},41524,a=>{"use strict";let b=[{slug:"compliance-is-a-design-constraint",title:"Compliance Is a Design Constraint, Not a Blocker",category:"Regulation",summary:"Positioning compliance as a structural constraint that shapes product boundaries, data models, and operational choices.",body:`
<p>Regulation is commonly treated as a box to avoid or a checklist to satisfy late in a product lifecycle. That approach creates friction, produces brittle systems and increases operating cost. When compliance is framed as a design constraint, product choices become legible: data models, instrumented decision points and governance rules are defined with traceability in mind.</p>

<h4>Constraint as architecture</h4>
<p>Viewing regulation as a constraint changes the conversation from features to invariants. An invariant is a property of the system that must hold for the product to operate within a regulated context. Designing to invariants yields clearer boundaries between what is configurable and what is controlled; it reduces ambiguity for engineering and legal teams alike.</p>

<h4>Operational implications</h4>
<p>Products that embed regulatory constraints in the data model and workflows avoid ad-hoc adaptions that later become technical debt. The work becomes: identify required artefacts, determine retention and provenance rules, and expose governance surfaces where decisions are documented.</p>

<h4>Governance mechanisms</h4>
<p>Governance is not a one-time review. It requires mapped responsibilities, audit trails and decision gates. Practical mechanisms include immutable export formats for audits, clear escalation paths, and a compact set of APIs that surface only the permissible actions for a role.</p>

<h4>Recommendations</h4>
<p>Start with a regulatory data contract, instrument the system to emit the contract’s artefacts, and design a small set of decision gates. This reduces regulatory surprise and converts compliance from a liability into a structural leverage point.</p>
`},{slug:"why-most-product-roadmaps-fail-at-scale",title:"Why Most Product Roadmaps Fail at Scale",category:"Scale",summary:"Roadmaps often fail because they treat products as feature lists rather than evolving systems with governance and operational constraints.",body:`
<p>Product roadmaps that prioritise feature delivery without explicit governance collapse under scale. Scale introduces complexity: multiple teams, divergent local requirements and operational constraints. Without rules for decision-making and escalation, the roadmap becomes a coordination burden rather than a guiding instrument.</p>

<h4>The structural failure</h4>
<p>At scale, the core issue is not prioritisation but alignment. Alignment requires explicit decision rights, a shared narrative for trade-offs and clarity about which metrics matter at which level. Roadmaps that lack these elements reduce clarity and amplify conflict.</p>

<h4>Architecting for scale</h4>
<p>Define a small set of governance rituals: regular prioritisation reviews with cross-functional representation, decision logs for trade-offs, and guardrails that constrain growth impulses. Use these mechanisms to keep the roadmap actionable and defensible.</p>

<h4>Practical steps</h4>
<p>Translate strategic bets into experiments with clear success criteria. Map teams to outcome areas and define escalation boundaries. This approach preserves the roadmap’s purpose while enabling local adaptation.</p>
`},{slug:"messaging-platforms-are-infrastructure",title:"Messaging Platforms Are Infrastructure, Not Features",category:"Systems",summary:"Argues for treating messaging and conversational channels as traceable infrastructure with topology, provenance and governance.",body:`
<p>Messaging is often implemented as a surface layer — a feature that connects people. In regulated or complex domains, messaging must be treated as infrastructure: a source of truth that interacts with downstream systems, produces artefacts and requires governance.</p>

<h4>Why infrastructure matters</h4>
<p>When communication is infrastructure the design focus shifts to metadata, provenance, and exportability. These concerns matter where decisions depend on a record of communication or where actions are triggered by conversational cues.</p>

<h4>Implementation principles</h4>
<p>Instrument messages with deterministic metadata, define canonical export formats, and separate ephemeral UI concerns from the record layer. This separation prevents UI changes from corrupting the product’s ability to produce evidence.</p>

<h4>Concluding note</h4>
<p>Treating messaging as infrastructure reduces systemic friction and makes operationalisation of conversational products tractable.</p>
`},{slug:"marketplace-dynamics-begin-with-trust-architecture",title:"Marketplace Dynamics Begin With Trust Architecture",category:"Infrastructure",summary:"Trust is not a surface problem; it is encoded in systems through verification, dispute flows and incentives.",body:`
<p>Marketplaces fail when trust is an afterthought. Trust architecture is the set of system-level choices that enable reliable matching, dispute resolution and predictable incentives. It is technical, operational and social.</p>

<h4>System elements</h4>
<p>Key elements include identity and verification, frictioned onboarding, dispute workflows and clear economic incentives. Each element must be instrumented and observable.</p>

<h4>Designing for resilience</h4>
<p>Design decisions should anticipate adversarial behaviour and operational outages. Resilience comes from simple, observable rules rather than complex heuristics that are hard to audit.</p>

<h4>Recommendation</h4>
<p>Prioritise auditable verification and dispute resolution before scaling liquidity. This sequencing reduces systemic failure modes and preserves product integrity.</p>
`},{slug:"design-systems-are-governance-systems",title:"Design Systems Are Governance Systems",category:"Systems",summary:"Design systems structure more than visuals; they encode contribution rules, ownership and operational expectations that determine product coherence.",body:`
<p>Design systems are frequently presented as a collection of components. That view misses their governance role: decisions about how components evolve, who can change them and how they are validated are governance problems with technical consequences.</p>

<h4>Governance primitives</h4>
<p>Define contribution rules, review gates and usage metrics. Treat the design system as a product with stakeholders, SLAs and backward compatibility considerations.</p>

<h4>Operational clarity</h4>
<p>Clear governance reduces inconsistency and allows faster delivery. When a design system embeds decision rights and validation, teams can move independently without fragmenting the user experience.</p>

<h4>Final thought</h4>
<p>Treat the design system as a governance system to scale product coherence responsibly.</p>
`}];a.s(["articles",0,b,"default",0,b])},50164,a=>{"use strict";var b=a.i(7997),c=a.i(95936),d=a.i(41524),e=a.i(88901);function f(){return(0,b.jsxs)("div",{className:"max-w-4xl mx-auto py-12 px-6",children:[(0,b.jsx)(e.default,{title:"Insights",description:"Short essays on systems, governance and product architecture."}),(0,b.jsx)("div",{className:"mt-8 space-y-6",children:d.articles.map(a=>(0,b.jsxs)("article",{className:"border-b pb-4",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold",children:(0,b.jsx)(c.default,{href:`/insights/${a.slug}`,children:a.title})}),(0,b.jsx)("p",{className:"text-sm text-slate-600",children:a.summary}),(0,b.jsx)("div",{className:"mt-2 text-xs text-slate-500",children:a.category})]},a.slug))})]})}a.s(["default",()=>f])}];

//# sourceMappingURL=_28e85c19._.js.map