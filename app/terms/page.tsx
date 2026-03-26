import React from 'react'
import CookieBanner from '../../components/CookieBanner'
import type { Metadata } from 'next'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms and Conditions | Lanchester R&D',
  description:
    'Review the LEARN platform terms and conditions from Lanchester R&D, including eligibility, account usage, and legal terms.',
  path: '/terms',
  keywords: ['terms and conditions', 'Lanchester R&D', 'LEARN terms', 'platform terms'],
})

export default function TermsPage() {
  return (
    <main style={{padding: '2rem', maxWidth: 900, margin: '0 auto'}}>
      <CookieBanner />
      <h1>Terms and Conditions — LEARN (Lanchester Early Access Research Network)</h1>
      <p><strong>Effective date:</strong> March 18, 2026</p>

      <h2>1. Introduction and Acceptance</h2>
      <p>
        These Terms and Conditions (“Terms”) govern your use of LEARN provided by Lanchester R&amp;D (“we”, “us”, “our”). By accessing or using the Service you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Service.
      </p>

      <h2>2. Definitions</h2>
      <p>“Service” means the LEARN platform and related websites, applications, APIs, and services.</p>

      <h2>3. Eligibility</h2>
      <p>You must be at least 16 years old (or the minimum age in your jurisdiction where lower and lawful) to use the Service. By using the Service you represent and warrant that you meet these requirements.</p>

      <h2>4. Account Registration and Authentication</h2>
      <p>
        <strong>Google Sign-In (OAuth):</strong> You may sign in using Google OAuth. You authorize the retrieval of permitted profile information (name, email, id). We do not receive your Google password.
      </p>
      <p>
        <strong>Magic Link Email Authentication:</strong> You may sign in using a magic link sent to your email address. Magic links are time-limited and single-use.
      </p>
      <p>
        <strong>Consent at Registration:</strong> To create an account, you must accept essential terms and provide required consents for non-essential cookies and marketing only where we request them. Non-essential cookies and tracking will be disabled until you grant consent.
      </p>

      <h2>5. Use of the Platform</h2>
      <p>Use the Service lawfully. Admins may create, edit, or delete product entries, send campaign emails, and view engagement and analytics data. Admin actions are logged.</p>

      <h2>6. Product Disclaimer</h2>
      <p>Products listed on LEARN are experimental and may change or be discontinued. Listing does not constitute endorsement and participation is at your own risk.</p>

      <h2>7. Email and Communications</h2>
      <p>Transactional emails are required for account operation. Marketing and product updates are sent with consent; you may opt out at any time. Email tracking may be used with consent.</p>

      <h2>8. Intellectual Property</h2>
      <p>All rights in the Service and content are owned by Lanchester R&amp;D or licensed to us. You retain ownership of User Content but grant us a non-exclusive license to host and use it to operate the Service.</p>

      <h2>9. User Content and Moderation</h2>
      <p>You are responsible for User Content. We may remove or restrict content that violates these Terms.</p>

      <h2>10. Availability and Changes</h2>
      <p>We aim for reliable service but make no guarantee of uninterrupted availability. We may modify or discontinue features at any time.</p>

      <h2>11. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Lanchester R&amp;D will not be liable for indirect, incidental, special, punitive, or consequential damages. Our aggregate liability is limited to the greater of fees paid in the prior 12 months or €100, subject to consumer protections.</p>

      <h2>12. Disclaimer of Warranties</h2>
      <p>The Service is provided “as is” and “as available”. We disclaim all warranties to the extent permitted by law.</p>

      <h2>13. Termination</h2>
      <p>We may suspend or terminate access for breach, suspected fraud, security issues, or legal reasons. You may delete your Account; deletion follows our Privacy Policy retention rules.</p>

      <h2>14. Governing Law and Dispute Resolution</h2>
      <p>These Terms are governed by the laws of the Netherlands. Subject to consumer protections, disputes will be resolved by the competent courts of Amsterdam, Netherlands.</p>

      <h2>15. Changes to Terms</h2>
      <p>We may update these Terms and will post the revised Terms with a new effective date. Continued use indicates acceptance.</p>

      <h2>16. Miscellaneous</h2>
      <p>These Terms and the Privacy Policy are the entire agreement between you and Lanchester R&amp;D regarding the Service.</p>

      <h2>17. Contact Information</h2>
      <p>
        Email: lanchester.rd@gmail.com<br/>
        Postal: 40 Windmill Drive, Audlem, UK
      </p>
    </main>
  )
}
