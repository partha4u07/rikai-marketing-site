export const metadata = {
  title: 'Privacy Policy — Rik.ai',
  description: 'How Rik Technologies handles data collected through the Rik.ai marketing website.',
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 44 }}>
    <h2 style={{
      fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18,
      color: 'var(--text-1)', marginBottom: 14,
      paddingBottom: 10, borderBottom: '1px solid var(--border)',
    }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 12 }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 7, paddingLeft: 4 }}>{children}</li>
);

const Bold = ({ children }) => (
  <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>{children}</strong>
);

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--fb)' }}>

      {/* Nav */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,8,26,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 48px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/uploads/logo_upload-1776774656314.png" alt="Rik.ai" style={{ height: 34, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, color: 'var(--text-1)', letterSpacing: '-0.5px' }}>
            Rik<span className="gt">.ai</span>
          </span>
        </a>
        <a href="/" style={{ fontSize: 14, color: 'var(--text-3)', fontFamily: 'var(--fh)' }}>← Back to home</a>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,110,247,0.05))',
        borderBottom: '1px solid var(--border)',
        padding: '60px 0 52px', textAlign: 'center',
      }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 12, fontFamily: 'var(--fh)' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 38, color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Rik Technologies · Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 96px' }}>

        <P>
          We&apos;re Rik Technologies, the company behind Rik.ai. This page explains how we handle data collected through our marketing website at{' '}
          <a href="https://rikai.tech" style={{ color: 'var(--purple-light)' }}>rikai.tech</a> — where you can learn about the product, book a demo, or get in touch.
        </P>

        {/* Platform policy callout */}
        <div style={{
          background: 'rgba(124,58,237,0.07)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: 10, padding: '16px 20px', marginBottom: 40,
        }}>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--purple-light)' }}>This policy covers this website only.</strong>{' '}
            If you use the Rik.ai product platform, a separate Platform Privacy Policy governs how that data is handled. Please refer to it for details on platform usage.
          </p>
        </div>

        <Section title="What we collect">
          <P>When you browse or reach out through this website, we may collect:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li><Bold>Contact details</Bold> — your name, email address, company name, phone number, and any message you submit through our demo booking or contact forms</Li>
            <Li><Bold>Technical data</Bold> — IP address, browser type, device type, and pages visited, collected automatically through standard server logs</Li>
          </ul>
          <P>We don&apos;t collect payment data, sensitive personal information, or anything beyond what&apos;s needed to respond to you.</P>
        </Section>

        <Section title="How we use it">
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>To respond to your enquiries and schedule product demos</Li>
            <Li>To send you relevant information about Rik.ai, if you&apos;ve opted in</Li>
            <Li>To understand how people use our website so we can improve it</Li>
          </ul>
          <P>We don&apos;t use your data to make automated decisions about you, and we don&apos;t use it for any purpose beyond what&apos;s described here.</P>
        </Section>

        <Section title="Cookies">
          <P>We use only essential cookies — the kind required for the website to function. No ad networks. No tracking pixels. No third-party cookies for profiling or retargeting.</P>
          <P>You can configure your browser to block cookies without losing access to anything on this site.</P>
        </Section>

        <Section title="Third-party services">
          <P>We use a small set of trusted services to operate this website, including website hosting and email delivery. These services receive only the data necessary to perform their function and maintain their own security standards.</P>
          <P>We don&apos;t share your data with advertising networks, data brokers, or any third party for commercial purposes.</P>
        </Section>

        <Section title="We don't sell your data">
          <P>We don&apos;t sell, rent, or trade your personal data. Ever. That&apos;s not part of our business model, and it never will be.</P>
        </Section>

        <Section title="Data retention">
          <P>We keep contact and enquiry data for up to 2 years, or until you ask us to delete it — whichever comes first. You can request deletion at any time by emailing us.</P>
        </Section>

        <Section title="Your rights">
          <P>You can ask us to:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li><Bold>Access</Bold> — share what personal data we hold about you</Li>
            <Li><Bold>Correct</Bold> — fix anything that&apos;s inaccurate</Li>
            <Li><Bold>Delete</Bold> — remove your data from our records</Li>
          </ul>
          <P>
            Email us at{' '}
            <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>contact@rikai.tech</a>
            {' '}and we&apos;ll respond within 30 days.
          </P>
        </Section>

        <Section title="Security">
          <P>We take reasonable technical measures to protect your data — including encrypted data transmission (TLS) and access controls. No system is perfectly secure, but we treat this seriously.</P>
        </Section>

        <Section title="Updates to this policy">
          <P>We may update this policy from time to time. The date at the top of this page will always reflect the latest version. Continued use of the website after changes means you accept the updated policy.</P>
        </Section>

        <Section title="Contact">
          <P>Questions about this policy or your data? Reach us at:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '18px 22px',
          }}>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: 'var(--text-1)', fontWeight: 700, fontFamily: 'var(--fh)' }}>Rik Technologies</p>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-3)', lineHeight: 1.9 }}>
              <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a><br />
              <a href="https://rikai.tech" style={{ color: 'var(--text-3)' }}>https://rikai.tech</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik Technologies. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--text-3)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
