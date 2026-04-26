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
          <a href="https://rikai.tech" style={{ color: 'var(--purple-light)' }}>rikai.tech</a>,
          operated by Rik Technologies (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
        </P>
        <P>By accessing or using this website, you agree to these Terms.</P>

        <Section title="Scope of these Terms">
          <P>These Terms apply only to your use of this marketing website.</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>They do not govern use of the Rik.ai product platform.</Li>
            <Li>If you access or use the Rik.ai platform, separate Platform Terms will apply.</Li>
          </ul>
        </Section>

        <Section title="What this website is">
          <P>rikai.tech is the public-facing website for Rik.ai. It is intended to:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Provide information about our product</Li>
            <Li>Allow you to request demos or contact our team</Li>
          </ul>
          <P>This website does not provide access to the Rik.ai platform or its services.</P>
        </Section>

        <Section title="Acceptance of Terms">
          <P>By using this website, you confirm that you have read and agree to these Terms.</P>
          <P>If you do not agree, please do not use the site.</P>
          <P>We may update these Terms from time to time. Continued use of the website after updates constitutes acceptance of the revised Terms.</P>
        </Section>

        <Section title="Permitted Use">
          <P>You may use this website to:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
            <Li>Browse content</Li>
            <Li>Learn about Rik.ai</Li>
            <Li>Submit legitimate enquiries or demo requests</Li>
          </ul>
          <P>You agree to:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Use the website only for lawful purposes</Li>
            <Li>Provide accurate and truthful information</Li>
            <Li>Not interfere with the normal functioning of the site</Li>
          </ul>
        </Section>

        <Section title="Prohibited Use">
          <P>You may not:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Scrape, crawl, or extract content using automated tools</Li>
            <Li>Submit false, misleading, or fraudulent information</Li>
            <Li>Attempt unauthorised access to systems or infrastructure</Li>
            <Li>Reproduce or commercially exploit website content without permission</Li>
            <Li>Use the website for unlawful, abusive, or harmful purposes</Li>
          </ul>
        </Section>

        <Section title="Intellectual Property">
          <P>All content on this website — including text, branding, design, and visuals — is owned by Rik Technologies and protected by applicable intellectual property laws.</P>
          <P>You may:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
            <Li>Reference or share content for personal or editorial use</Li>
          </ul>
          <P>You may not:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Reproduce or distribute content for commercial purposes without written permission</Li>
          </ul>
        </Section>

        <Section title="Website Availability & Changes">
          <P>We may modify, suspend, or discontinue any part of this website at any time without notice.</P>
          <P>We do not guarantee that the website will always be available, secure, or error-free.</P>
        </Section>

        <Section title="No Warranties">
          <P>This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis.</P>
          <P>We make no warranties regarding:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Accuracy or completeness of content</Li>
            <Li>Availability or reliability of the website</Li>
          </ul>
          <P>Content is for general informational purposes only and should not be relied upon as professional advice.</P>
        </Section>

        <Section title="Limitation of Liability">
          <P>To the extent permitted by law, Rik Technologies will not be liable for any indirect, incidental, or consequential damages arising from:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Your use of (or inability to use) this website</Li>
            <Li>Reliance on any content provided on the site</Li>
          </ul>
        </Section>

        <Section title="Third-Party Links">
          <P>This website may contain links to external websites.</P>
          <P>We do not control or endorse these sites and are not responsible for their content, policies, or availability.</P>
        </Section>

        <Section title="Privacy">
          <P>
            Your use of this website is also governed by our{' '}
            <a href="/privacy" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>Privacy Policy</a>.
          </P>
          <P>If you interact with the Rik.ai platform, a separate Platform Privacy Policy will apply.</P>
        </Section>

        <Section title="Governing Law">
          <P>These Terms are governed by the laws of India.</P>
          <P>Any disputes will be subject to the jurisdiction of courts in India.</P>
        </Section>

        <Section title="Contact">
          <P>For any questions about these Terms:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '18px 22px',
          }}>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: 'var(--text-1)', fontWeight: 700, fontFamily: 'var(--fh)' }}>Rik Technologies</p>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-3)', lineHeight: 1.9 }}>
              Email: <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a><br />
              <a href="https://rikai.tech" style={{ color: 'var(--text-3)' }}>https://rikai.tech</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik Technologies. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/trust" style={{ fontSize: 13, color: 'var(--text-3)' }}>Trust Center</a>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--text-3)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
