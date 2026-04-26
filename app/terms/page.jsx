export const metadata = {
  title: 'Terms of Service — Rik.ai',
  description: 'Terms governing your use of the Rik.ai marketing website.',
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

export default function TermsPage() {
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
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 38, color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 12 }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Rik Technologies · Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 96px' }}>

        <P>
          These Terms govern your use of the Rik.ai marketing website at{' '}
          <a href="https://rikai.tech" style={{ color: 'var(--purple-light)' }}>rikai.tech</a>, operated by Rik Technologies. By browsing or using this site, you agree to these Terms.
        </P>

        {/* Platform terms callout */}
        <div style={{
          background: 'rgba(124,58,237,0.07)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: 10, padding: '16px 20px', marginBottom: 40,
        }}>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--purple-light)' }}>These Terms apply to this website only.</strong>{' '}
            Use of the Rik.ai product platform is governed by a separate set of Platform Terms. If you&apos;re a platform user, please refer to those instead.
          </p>
        </div>

        <Section title="What this website is">
          <P>
            rikai.tech is the public marketing website for Rik.ai — a product built by Rik Technologies. Here you can learn about the product, book a demo, and get in touch with our team. This site is not the product platform itself.
          </P>
        </Section>

        <Section title="Acceptance of terms">
          <P>
            By accessing rikai.tech, you confirm that you&apos;ve read and agreed to these Terms. If you don&apos;t agree, please don&apos;t use the site. We may update these Terms from time to time — continued use of the site means you accept any changes.
          </P>
        </Section>

        <Section title="Permitted use">
          <P>You&apos;re welcome to browse this site, read our content, and reach out to us. In return, we ask that you:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Use the website for lawful purposes only</Li>
            <Li>Be honest and accurate when submitting forms or contacting us</Li>
            <Li>Respect the integrity of our systems and infrastructure</Li>
          </ul>
        </Section>

        <Section title="Prohibited use">
          <P>You may not:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Scrape, crawl, or extract content from this website using automated tools</Li>
            <Li>Submit fake, fraudulent, or misleading enquiries</Li>
            <Li>Attempt to gain unauthorised access to any part of our systems</Li>
            <Li>Reproduce or redistribute our content commercially without written permission</Li>
            <Li>Use this website for any unlawful, abusive, or harmful purpose</Li>
          </ul>
        </Section>

        <Section title="Intellectual property">
          <P>
            Everything on this website — including text, design, product names, logos, and visual assets — is owned by Rik Technologies and protected under applicable intellectual property law.
          </P>
          <P>
            You may share or reference our content for personal, editorial, or journalistic use. Reproduction for commercial purposes requires our prior written permission.
          </P>
        </Section>

        <Section title="No warranties">
          <P>
            This website is provided as-is and as-available. We aim to keep it accurate and up to date, but we make no guarantees about the completeness, accuracy, or uninterrupted availability of anything on it.
          </P>
          <P>
            Content on this site is for informational purposes and should not be taken as professional, legal, or financial advice.
          </P>
        </Section>

        <Section title="Limitation of liability">
          <P>
            To the extent permitted by law, Rik Technologies is not liable for any direct or indirect loss arising from your use of — or inability to use — this website, or from reliance on any content published here.
          </P>
        </Section>

        <Section title="Links to third-party sites">
          <P>
            This website may contain links to external sites we don&apos;t own or control. We&apos;re not responsible for their content, privacy practices, or availability. We recommend reviewing their policies before sharing any personal information.
          </P>
        </Section>

        <Section title="Governing law">
          <P>
            These Terms are governed by the laws of India. Any disputes arising from your use of this website will be subject to the jurisdiction of competent courts in India.
          </P>
        </Section>

        <Section title="Changes to these terms">
          <P>
            We may update these Terms from time to time. The &quot;Last updated&quot; date at the top will always reflect the most recent version. Continued use of the site after any update constitutes your acceptance of the revised Terms.
          </P>
        </Section>

        <Section title="Contact">
          <P>Questions about these Terms? We&apos;re happy to help.</P>
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
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--text-3)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
