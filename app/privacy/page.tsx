import React from 'react'
import CookieBanner from '../../components/CookieBanner'
import type { Metadata } from 'next'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy | Lanchester R&D',
  description:
    'Read the LEARN platform privacy policy from Lanchester R&D, including data handling, consent, retention, and GDPR rights.',
  path: '/privacy',
  keywords: ['privacy policy', 'Lanchester R&D', 'LEARN platform privacy', 'GDPR policy'],
})

export default function PrivacyPage() {
  return (
    <main style={{padding: '2rem', maxWidth: 900, margin: '0 auto'}}>
      <CookieBanner />
      <h1>Privacy Policy — LEARN (Lanchester Early Access Research Network)</h1>
      <p><strong>Effective date:</strong> March 18, 2026</p>

      <h2>Introduction</h2>
      <p>
        Welcome to LEARN (Lanchester Early Access Research Network). This Privacy Policy explains how Lanchester R&amp;D (“we”, “us”, “our”) collects, uses, discloses, and protects personal data when you use LEARN — a platform that helps people discover digital products, join waitlists, follow projects, and receive updates. We are committed to protecting your privacy and complying with applicable data protection laws, including the EU General Data Protection Regulation (“GDPR") and applicable UK/EU regulations.
      </p>

      <h2>Data Controller</h2>
      <ul>
        <li>Data Controller: Lanchester R&amp;D</li>
        <li>Registered address: 40 Windmill Drive, Audlem, UK</li>
        <li>Contact email (privacy): lanchester.rd@gmail.com</li>
        <li>Data Protection / Privacy contact: Thomas Richardson (lanchester.rd@gmail.com)</li>
      </ul>

      <h2>What Data We Collect</h2>
      <p>We collect the following categories of personal data when you use LEARN:</p>
      <ul>
        <li><strong>Identity and account data:</strong> full name (if provided), email address, authentication provider identifier (Google OAuth user ID or internal account ID used for magic-link sign-in).</li>
        <li><strong>Profile and preference data:</strong> user preferences and settings, display name and optional profile fields.</li>
        <li><strong>Product and waitlist data:</strong> products you follow or waitlists you join, timestamps and membership metadata.</li>
        <li><strong>Communications and engagement:</strong> email history, email engagement metadata (opens/clicks), replies or messages you send.</li>
        <li><strong>Technical and usage data:</strong> device and browser information, IP addresses, logs, page views, and usage events.</li>
        <li><strong>Support and feedback:</strong> messages you send to support or admins and attachments.</li>
        <li><strong>Administrative logs (admins only):</strong> admin actions and identifiers.</li>
        <li><strong>Aggregated data:</strong> anonymized analytics derived from the above.</li>
      </ul>

      <h2>How We Collect Data</h2>
      <p>We collect data directly from you (registration, interactions), automatically (cookies, logs), and from third parties (Google on OAuth, service providers such as Resend and Firebase).</p>

      <h2>Legal Basis for Processing (GDPR)</h2>
      <p>For users in the EU/EEA/UK we rely on a combination of:</p>
      <ul>
        <li><strong>Performance of a contract:</strong> to provide the Service and operate accounts.</li>
        <li><strong>Consent:</strong> for marketing, non-essential cookies, and optional tracking.</li>
        <li><strong>Legitimate interests:</strong> to operate, secure, and improve the Service (balanced against user rights).</li>
        <li><strong>Legal obligation:</strong> where retention or disclosure is required by law.</li>
      </ul>

      <h2>How We Use Data</h2>
      <p>We use personal data to provide and operate the Service, send transactional and product emails, support Google sign-in, enable admins to manage products and campaigns, improve the Service via analytics (with consent where required), detect and prevent fraud, and comply with legal obligations.</p>

      <h2>Email Communications</h2>
      <p>
        Transactional emails (magic links, confirmations, security alerts) are necessary for account operation. Product updates and campaign emails are sent with consent where required; you may opt out at any time. We may use tracking pixels and link tagging to measure opens and clicks; tracked marketing emails require consent where applicable.
      </p>

      <h2>Third-Party Services and Processors</h2>
      <p>We use processors who act on our behalf, including:</p>
      <ul>
        <li>Firebase (Google) — Authentication, Firestore, Cloud Functions, Hosting. See: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase privacy</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy</a>.</li>
        <li>Google OAuth — sign-in and identity tokens. See: <a href="https://developers.google.com/identity" target="_blank" rel="noopener noreferrer">Google Identity</a>.</li>
        <li>Resend — transactional and campaign email delivery and engagement reporting. See: <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer">Resend privacy</a>.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>We do not sell your personal data. We may share data with processors, to comply with legal requests, to protect rights and safety, as part of a business transfer, or as aggregated anonymized data.</p>

      <h2>Data Retention</h2>
      <p>We retain data only as long as necessary. Examples: account data until deletion (+90 days for backups), product-follow records up to 3 years after last activity, email logs up to 3 years, support messages up to 3 years. Aggregated analytics may be retained in anonymized form indefinitely.</p>

      <h2>Your Rights (EU/EEA/UK)</h2>
      <p>You may exercise rights including access, rectification, erasure, restriction, portability, objection, and withdrawal of consent. To exercise rights contact: lanchester.rd@gmail.com. You may also lodge a complaint with your local supervisory authority.</p>

      <h2>Data Security</h2>
      <p>We implement reasonable organizational and technical measures: TLS, provider-supported encryption at rest, role-based access control, logging, monitoring, and incident response. We will notify affected users and regulators when required by law.</p>

      <h2>International Transfers</h2>
      <p>Data may be transferred outside the EU/EEA/UK (e.g., to the US). We rely on appropriate safeguards such as Standard Contractual Clauses, adequacy decisions, and contractual protections. Contact us for copies of safeguards.</p>

      <h2>Children’s Data</h2>
      <p>LEARN is not directed to children under 16. We do not knowingly collect data from children under 16. If you believe a child under 16 has provided data, contact lanchester.rd@gmail.com for deletion.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy. Material changes will be posted here with a revised effective date and, where appropriate, notified to you.</p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests:
        <br/>Email: lanchester.rd@gmail.com
        <br/>Postal: 40 Windmill Drive, Audlem, UK
        <br/>Data contact / DPO: Thomas Richardson (lanchester.rd@gmail.com)
      </p>
    </main>
  )
}
