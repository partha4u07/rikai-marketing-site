export const metadata = {
  title: 'Trust Center — Rik.ai',
  description: 'How Rik.ai approaches privacy, security, and responsible AI.',
};

const Section = ({ icon, title, children }) => (
  <div style={{ marginBottom: 56 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
      <div style={{
        width: 36, height: 36, borderRadius: 9, flexShrink: 0,
        background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
      }}>{icon}</div>
      <h2 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, color: 'var(--text-1)', margin: 0 }}>{title}</h2>
    </div>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <div style={{ marginBottom: 24 }}>
    <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--purple-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--fh)', marginBottom: 10 }}>{title}</p>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 10 }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 7, paddingLeft: 4 }}>{children}</li>
);

const PolicyLink = ({ href, label, soon }) => (
  <a
    href={soon ? undefined : href}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '8px 16px', borderRadius: 8,
      background: soon ? 'transparent' : 'rgba(124,58,237,0.08)',
      border: `1px solid ${soon ? 'var(--border)' : 'rgba(124,58,237,0.2)'}`,
      fontSize: 13, fontWeight: 600,
      color: soon ? 'var(--text-3)' : 'var(--purple-light)',
      textDecoration: 'none', cursor: soon ? 'default' : 'pointer',
      marginRight: 10, marginBottom: 10,
    }}
  >
    {label}
    {soon && <span style={{ fontSize: 10, background: 'rgba(255,255,255,0.07)', padding: '2px 7px', borderRadius: 100, color: 'var(--text-3)', letterSpacing: '0.05em' }}>COMING SOON</span>}
  </a>
);

export default function TrustPage() {
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
        background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(79,110,247,0.06))',
        borderBottom: '1px solid var(--border)',
        padding: '64px 0 56px', textAlign: 'center',
      }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 12, fontFamily: 'var(--fh)' }}>Trust Center</p>
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 40, color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 16 }}>Trust, by design</h1>
        <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto 8px', lineHeight: 1.7 }}>
          Rik.ai is built for organisations that rely on data to make decisions. Trust isn&apos;t an afterthought — it&apos;s part of how the platform is designed, operated, and continuously improved.
        </p>
        <p style={{ fontSize: 14, color: 'var(--text-3)', marginTop: 12 }}>Rik Technologies · Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px' }}>

        <P>This page outlines how we approach privacy, security, and responsible AI across our platform and website.</P>

        <div style={{ height: 32 }} />

        {/* Security */}
        <Section icon="🔐" title="Security">
          <P>We take a layered approach to protecting your data and systems.</P>

          <SubSection title="Infrastructure">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>Hosted on secure cloud infrastructure with network-level protections</Li>
              <Li>Encrypted data transmission using TLS (HTTPS)</Li>
              <Li>Access controls with least-privilege principles</Li>
            </ul>
          </SubSection>

          <SubSection title="Application">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>Authentication and session controls to protect user access</Li>
              <Li>Protection against common web vulnerabilities</Li>
              <Li>Regular monitoring and logging of system activity</Li>
            </ul>
          </SubSection>

          <SubSection title="Operational practices">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>Restricted internal access to production systems</Li>
              <Li>Ongoing review of security practices as the platform evolves</Li>
            </ul>
          </SubSection>
        </Section>

        {/* Privacy */}
        <Section icon="🔒" title="Privacy">
          <P>We collect only what is necessary — and we&apos;re transparent about how it&apos;s used.</P>
          <ul style={{ paddingLeft: 18, marginBottom: 20 }}>
            <Li>Clear separation between marketing website data and platform data</Li>
            <Li>No sale, rental, or trading of personal data</Li>
            <Li>Data used only for defined purposes — communication, product functionality, and research insights</Li>
            <Li>User rights for access, correction, and deletion</Li>
          </ul>
          <P>For more details:</P>
          <div style={{ marginTop: 12 }}>
            <PolicyLink href="/privacy" label="Privacy Policy (Website)" />
            <PolicyLink label="Platform Privacy Policy" soon />
          </div>
        </Section>

        {/* Responsible AI */}
        <Section icon="🤖" title="Responsible AI">
          <P>Rik.ai uses AI to conduct and analyse qualitative research. We design our systems with care and transparency.</P>

          <SubSection title="Human-centred design">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>AI interactions are structured to encourage honest, voluntary responses</Li>
              <Li>Participants are informed about data usage before engagement</Li>
            </ul>
          </SubSection>

          <SubSection title="Transparency">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>Clear communication when AI is being used</Li>
              <Li>No hidden data collection during interactions</Li>
            </ul>
          </SubSection>

          <SubSection title="Data usage">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>Research insights are delivered only to the client organisation that commissioned the study</Li>
              <Li>Participant data is not shared with third parties or other organisations</Li>
            </ul>
          </SubSection>

          <SubSection title="Limitations">
            <ul style={{ paddingLeft: 18, marginBottom: 0 }}>
              <Li>AI-generated outputs may not always be fully accurate or complete</Li>
              <Li>Insights should be reviewed alongside human judgment</Li>
            </ul>
          </SubSection>
        </Section>

        {/* Data handling */}
        <Section icon="🌍" title="Data handling">
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Data is stored securely with controlled access</Li>
            <Li>Retention policies ensure data is not kept longer than necessary</Li>
            <Li>Where third-party providers are used, they are required to meet appropriate security and privacy standards</Li>
          </ul>
          <P>Some services may process data outside India. We implement safeguards to ensure data protection across jurisdictions.</P>
        </Section>

        {/* Compliance */}
        <Section icon="🧾" title="Compliance & Governance">
          <P>Rik.ai is operated by Rik Technologies, based in India.</P>
          <P>We align our practices with:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>India&apos;s Digital Personal Data Protection Act (DPDP Act), 2023</Li>
            <Li>Industry-standard security and data protection practices</Li>
          </ul>
          <P>As the platform evolves, we will continue strengthening our compliance posture.</P>
        </Section>

        {/* Policies */}
        <Section icon="📄" title="Policies">
          <div style={{ marginTop: 4 }}>
            <PolicyLink href="/privacy" label="Privacy Policy (Website)" />
            <PolicyLink href="/terms" label="Terms of Service (Website)" />
            <PolicyLink label="Platform Privacy Policy" soon />
            <PolicyLink label="Platform Terms" soon />
          </div>
        </Section>

        {/* Contact */}
        <Section icon="📬" title="Contact">
          <P>For security, privacy, or compliance-related questions:</P>
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
          <a href="/terms" style={{ fontSize: 13, color: 'var(--text-3)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
