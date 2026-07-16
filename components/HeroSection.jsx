'use client';

const heroVariants = {
  A: { h1a: 'Turn customer signals', h1b: 'into decision-ready', h1c: 'intelligence.' },
  B: { h1a: 'Turn customer signals', h1b: 'into confident decisions.', h1c: 'Every time.' },
  C: { h1a: 'Go beyond collecting data.', h1b: 'Understand what customers', h1c: 'are really telling you.' },
};

export function CredibilityStrip() {
  const items = [
    { icon: '◈', text: 'From customer signals to confident decisions — in minutes, not weeks' },
    { icon: '✦', text: 'Understand feedback across every language and format' },
    { icon: '◉', text: 'AI-powered insights your whole team can act on' },
    { icon: '◇', text: 'Works with real-world customer data, exactly as it comes' },
    { icon: '▣', text: 'From question to insight — without the wait' },
    { icon: '◐', text: 'Text, video, voice — understood together, instantly' },
    { icon: '▣', text: 'Enterprise-grade security and privacy, built in from day one' },
    { icon: '◈', text: 'From customer signals to confident decisions — in minutes, not weeks' },
    { icon: '✦', text: 'Understand feedback across every language and format' },
    { icon: '◉', text: 'AI-powered insights your whole team can act on' },
    { icon: '◇', text: 'Works with real-world customer data, exactly as it comes' },
  ];
  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '22px 0', overflow: 'hidden', background: 'rgba(255,255,255,0.012)' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 56, animation: 'marquee 28s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--purple-light)', fontSize: 11 }}>{item.icon}</span>
              <span style={{ fontFamily: 'var(--fb)', fontSize: 13, color: 'rgba(240,240,255,0.32)', fontWeight: 450 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ onBookDemo }) {
  const variant = heroVariants['A'];
  const heroSize = 52;

  return (
    <>
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 68 }}>
        <div className="orb" style={{ width: 720, height: 720, background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', top: -140, right: -120, animation: 'float 10s ease-in-out infinite' }} />
        <div className="orb" style={{ width: 480, height: 480, background: 'radial-gradient(circle, rgba(79,110,247,0.15) 0%, transparent 70%)', bottom: -60, left: '28%', animation: 'floatB 8s ease-in-out infinite' }} />
        <div className="orb" style={{ width: 180, height: 180, background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)', top: 140, left: '8%', animation: 'float 7s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)' }} />

        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 2, padding: '80px 48px' }}>
          <div>
            {/* Brand lockup */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0, fontWeight: 500, background: 'linear-gradient(90deg, #818cf8, #c084fc, #60a5fa, #c084fc, #818cf8)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 7s linear infinite' }}>
                The new verse of market intelligence
              </p>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(124,58,237,0.14)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 100, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.05em' }}>Now in Early Access</span>
            </div>

            <h1 className="hero-h1" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, marginBottom: 22, color: 'var(--text-1)' }}>
              {variant.h1a}<br />{variant.h1b}<br />
              <span className="gt">{variant.h1c}</span>
            </h1>

            <p style={{ fontSize: 17.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 40, maxWidth: 500 }}>
              Run AI-powered research studies and transform feedback, behaviour, and market data into actionable intelligence — across every format, language, and channel.
            </p>

            <div className="hero-ctas" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={() => onBookDemo()} style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 12, boxShadow: '0 0 40px rgba(124,58,237,0.5)', transition: 'transform 0.2s, box-shadow 0.2s', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 48px rgba(124,58,237,0.65)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.5)'; }}
              >Book a Demo →</button>
              <a href="#howitworks" style={{ color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 15, padding: '14px 26px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.04)', transition: 'background 0.2s, border-color 0.2s', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'var(--border-md)'; }}
              >See how it works</a>
            </div>
          </div>
          <div className="hero-mockup" style={{ display: 'flex', justifyContent: 'center', animation: 'float 8s ease-in-out infinite' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/rikai-hero-mockup.png" alt="Rik.ai customer portal" style={{ width: '100%', maxWidth: 520, height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>
      <CredibilityStrip />
    </>
  );
}
