export const metadata = {
  title: 'Terms of Service — Rik AI',
  description: 'Terms governing your use of Rik AI products and services.',
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

export default function TermsPage() {
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
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 40, color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 16 }}>Terms of Service</h1>
        <p style={{ fontSize: 15, color: 'var(--text-3)' }}>Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px' }}>

        <P>Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Rik AI website or any associated services operated by Rik AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.</P>

        <Section title="1. Description of Services">
          <P>Rik AI provides a continuous customer intelligence platform that enables businesses to capture, analyse, and act on customer feedback, research signals, and behavioural data. Our services include the Rik AI web platform, the Rishi AI assistant, API access (where granted), and any associated tooling provided under a commercial agreement.</P>
          <P>Access to the full platform requires a commercial subscription. The marketing website and demo booking system are available to all visitors without charge.</P>
        </Section>

        <Section title="2. Acceptance of Terms">
          <P>By using any part of our services — including submitting a demo request, contacting our team, or accessing the platform — you confirm that:</P>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <Li>You are at least 16 years of age</Li>
            <Li>You have the authority to agree to these Terms on behalf of yourself or your organisation</Li>
            <Li>Your use of our services is lawful in your jurisdiction</Li>
          </ul>
        </Section>

        <Section title="3. Use of the Services">
          <P>You agree to use our services only for lawful purposes and in a manner consistent with all applicable laws and regulations. You must not:</P>
          <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
            <Li>Attempt to gain unauthorised access to any part of our platform or infrastructure</Li>
            <Li>Use our services to collect or process data about individuals without appropriate legal basis</Li>
            <Li>Reverse engineer, decompile, or disassemble any part of our software or AI models</Li>
            <Li>Transmit malicious code, spam, or any content that is unlawful, defamatory, or infringing</Li>
            <Li>Resell, sublicense, or redistribute access to our platform without express written consent</Li>
            <Li>Use automated scripts or bots to access or scrape our website or platform</Li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          <P>All content on the Rik AI website and platform — including text, graphics, logos, software, AI models, and product design — is the exclusive intellectual property of Rik AI and is protected by applicable copyright, trademark, and patent laws.</P>
          <P>You are granted a limited, non-exclusive, non-transferable licence to access and use our services for your internal business purposes under the terms of your subscription agreement. This licence does not transfer any ownership rights to you.</P>
          <P>Any feedback, suggestions, or ideas you provide to us may be used by Rik AI without obligation or compensation to you.</P>
        </Section>

        <Section title="5. Customer Data">
          <P>When you use our platform, you may upload or process data belonging to you or your customers (&quot;Customer Data&quot;). You retain all rights to your Customer Data. You grant Rik AI a limited licence to process your Customer Data solely to provide the services you have subscribed to.</P>
          <P>We will not access, use, or share your Customer Data except as necessary to deliver our services, as required by law, or with your explicit consent. Please refer to our <a href="/privacy" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>Privacy Policy</a> for full details.</P>
        </Section>

        <Section title="6. Disclaimers">
          <P>Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</P>
          <P>AI-generated insights and outputs from Rishi or any Rik AI model are provided for informational purposes only. We do not guarantee the accuracy, completeness, or suitability of any AI-generated content for your specific use case. You are responsible for independently verifying any decisions made based on our outputs.</P>
        </Section>

        <Section title="7. Limitation of Liability">
          <P>To the maximum extent permitted by applicable law, Rik AI and its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of revenue, data, or business opportunities — arising from your use of, or inability to use, our services.</P>
          <P>Our total aggregate liability to you for any claims arising from these Terms or your use of our services shall not exceed the greater of (a) the fees you paid to us in the 3 months preceding the claim, or (b) £100.</P>
        </Section>

        <Section title="8. Indemnification">
          <P>You agree to indemnify and hold harmless Rik AI and its officers, directors, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from your use of our services, your violation of these Terms, or your infringement of any third-party rights.</P>
        </Section>

        <Section title="9. Termination">
          <P>We reserve the right to suspend or terminate your access to our services at any time, with or without notice, if you breach these Terms or if we reasonably believe your use poses a risk to other users or our infrastructure. Upon termination, all licences granted to you will cease immediately.</P>
        </Section>

        <Section title="10. Governing Law">
          <P>These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, unless otherwise agreed in a separate commercial contract.</P>
        </Section>

        <Section title="11. Changes to These Terms">
          <P>We may revise these Terms at any time by updating this page. The &quot;Last updated&quot; date at the top reflects the most recent revision. Your continued use of our services after any changes constitutes your acceptance of the revised Terms. We will endeavour to notify active subscribers of material changes via email.</P>
        </Section>

        <Section title="12. Contact Us">
          <P>If you have any questions about these Terms of Service, please contact us:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '20px 24px', marginTop: 8,
          }}>
            <p style={{ fontSize: 15, color: 'var(--text-1)', fontWeight: 600, marginBottom: 4, fontFamily: 'var(--fh)' }}>Rik AI</p>
            <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.8, margin: 0 }}>
              Email: <a href="mailto:legal@rikai.tech" style={{ color: 'var(--purple-light)' }}>legal@rikai.tech</a><br />
              General enquiries: <a href="mailto:sales@rikai.tech" style={{ color: 'var(--purple-light)' }}>sales@rikai.tech</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik AI. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--text-3)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
