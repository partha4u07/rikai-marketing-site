export const metadata = {
  title: 'Privacy Policy — Rik AI',
  description: 'How Rik AI collects, uses, and protects your personal information.',
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{
      fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20,
      color: 'var(--text-1)', marginBottom: 16,
      paddingBottom: 12, borderBottom: '1px solid var(--border)',
    }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children, style }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 14, ...style }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 8, paddingLeft: 8 }}>{children}</li>
);

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--fb)' }}>

      {/* Nav bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,8,26,0.9)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 48px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/uploads/logo_upload-1776774656314.png" alt="Rik AI" style={{ height: 34, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, color: 'var(--text-1)', letterSpacing: '-0.5px' }}>
            Rik<span className="gt">.ai</span>
          </span>
        </a>
        <a href="/" style={{
          fontSize: 14, color: 'var(--text-3)', fontFamily: 'var(--fh)',
          display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
        >
          ← Back to home
        </a>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(79,110,247,0.06))',
        borderBottom: '1px solid var(--border)',
        padding: '64px 0 56px', textAlign: 'center',
      }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 14, fontFamily: 'var(--fh)' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 40, color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 16 }}>Privacy Policy</h1>
        <p style={{ fontSize: 15, color: 'var(--text-3)' }}>Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px' }}>

        <P>Rik AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.</P>

        <Section title="1. Information We Collect">
          <P>We collect information you provide directly to us, including when you:</P>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <Li>Submit a demo booking request (name, company, email address, phone number)</Li>
            <Li>Add guests to a meeting invite (guest email addresses)</Li>
            <Li>Send us an enquiry via email or contact form</Li>
            <Li>Communicate with us by phone, email, or other means</Li>
          </ul>
          <P>We also collect limited technical data automatically when you visit our site, such as your IP address, browser type, referring URLs, and pages visited, via standard server logs and analytics tools.</P>
        </Section>

        <Section title="2. How We Use Your Information">
          <P>We use the information we collect to:</P>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <Li>Schedule and confirm product demonstrations</Li>
            <Li>Send transactional emails related to your booking (via Resend)</Li>
            <Li>Follow up on sales and partnership enquiries</Li>
            <Li>Maintain records of prospect and customer interactions in our CRM (HubSpot)</Li>
            <Li>Improve our website and services based on aggregated usage data</Li>
            <Li>Comply with legal obligations</Li>
          </ul>
          <P>We will never sell your personal information to third parties. We do not use your data for automated decision-making or profiling.</P>
        </Section>

        <Section title="3. Third-Party Services">
          <P>We use the following trusted third-party services to operate our business. Each service processes data only to the extent necessary to perform its function:</P>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <Li><strong style={{ color: 'var(--text-1)' }}>Resend</strong> — transactional email delivery. Your email address is passed to Resend solely to deliver booking confirmation and team notification emails.</Li>
            <Li><strong style={{ color: 'var(--text-1)' }}>HubSpot</strong> — customer relationship management. Contact details, booked slot preferences, and notes are stored in HubSpot to allow our sales team to follow up effectively.</Li>
          </ul>
          <P>Both services maintain their own privacy policies and are compliant with applicable data protection regulations.</P>
        </Section>

        <Section title="4. Data Retention">
          <P>We retain personal data for as long as is necessary to fulfil the purposes described in this policy, or as required by law. Demo booking records are retained in our CRM for a period of up to 3 years from the date of submission. You may request deletion at any time (see Section 6).</P>
        </Section>

        <Section title="5. Cookies">
          <P>Our website uses only essential session cookies required for the site to function. We do not use advertising or tracking cookies. You can configure your browser to refuse cookies without any loss of functionality on this site.</P>
        </Section>

        <Section title="6. Your Rights">
          <P>Depending on your location, you may have the following rights regarding your personal data:</P>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <Li><strong style={{ color: 'var(--text-1)' }}>Access</strong> — request a copy of the personal data we hold about you</Li>
            <Li><strong style={{ color: 'var(--text-1)' }}>Correction</strong> — request that inaccurate data be corrected</Li>
            <Li><strong style={{ color: 'var(--text-1)' }}>Deletion</strong> — request erasure of your personal data</Li>
            <Li><strong style={{ color: 'var(--text-1)' }}>Objection</strong> — object to processing of your data for marketing purposes</Li>
            <Li><strong style={{ color: 'var(--text-1)' }}>Portability</strong> — request a machine-readable export of your data</Li>
          </ul>
          <P>To exercise any of these rights, please contact us at <a href="mailto:privacy@rikai.tech" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>privacy@rikai.tech</a>. We will respond within 30 days.</P>
        </Section>

        <Section title="7. Data Security">
          <P>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All data transmitted to our services is encrypted in transit using TLS. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</P>
        </Section>

        <Section title="8. Children's Privacy">
          <P>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately and we will delete it.</P>
        </Section>

        <Section title="9. Changes to This Policy">
          <P>We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page reflects when changes were last made. Continued use of our services after any changes constitutes acceptance of the revised policy.</P>
        </Section>

        <Section title="10. Contact Us">
          <P>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '20px 24px', marginTop: 8,
          }}>
            <p style={{ fontSize: 15, color: 'var(--text-1)', fontWeight: 600, marginBottom: 4, fontFamily: 'var(--fh)' }}>Rik AI</p>
            <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.8, margin: 0 }}>
              Email: <a href="mailto:privacy@rikai.tech" style={{ color: 'var(--purple-light)' }}>privacy@rikai.tech</a><br />
              General enquiries: <a href="mailto:sales@rikai.tech" style={{ color: 'var(--purple-light)' }}>sales@rikai.tech</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik AI. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--text-3)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
