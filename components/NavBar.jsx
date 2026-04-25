'use client';
import { useState, useEffect, useRef } from 'react';

const PORTALS = [
  {
    key: 'voice',
    label: 'Voice Portal',
    sub: 'For Survey Respondents',
    desc: 'Join a research study, complete a survey, or share your feedback.',
    href: 'https://www.rikai.tech',
    grad: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(79,110,247,0.2))',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
      </svg>
    ),
  },
  {
    key: 'customer',
    label: 'Customer Portal',
    sub: 'For Teams & Organisations',
    desc: 'Access your Rik AI workspace, manage projects, and view insights.',
    href: 'https://www.rikai.tech',
    grad: 'linear-gradient(135deg,rgba(79,110,247,0.3),rgba(124,58,237,0.15))',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
];

export default function NavBar({ onBookDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const fn = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSignInOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const links = [
    { label: 'Platform', href: '#features' },
    { label: 'Ask Rishi', href: '#rishi' },
    { label: 'Solutions', href: '#personas' },
    { label: 'Product', href: '#product' },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    height: '68px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 48px',
    background: scrolled ? 'rgba(8,8,26,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(24px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
    transition: 'all 0.35s ease',
  };

  const linkStyle = {
    color: 'rgba(240,240,255,0.68)', fontSize: '15px',
    fontFamily: 'var(--fb)', fontWeight: 450,
    transition: 'color 0.2s', cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/uploads/logo_upload-1776774656314.png" alt="Rik AI" style={{ height: '38px', width: 'auto' }} />
        <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: '21px', color: 'var(--text-1)', letterSpacing: '-0.5px' }}>
          Rik<span className="gt">.ai</span>
        </span>
      </a>

      <div className="nav-links" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
          >{l.label}</a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* Sign in with dropdown */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setSignInOpen(o => !o)}
            style={{
              ...linkStyle,
              padding: '8px 14px',
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
          >
            Sign in
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{ transition: 'transform 0.2s', transform: signInOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.6 }}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown */}
          {signInOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 12px)', right: 0,
              width: 280,
              background: '#0d0d20',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 18,
              boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              zIndex: 300,
            }}>
              {/* Header hint */}
              <div style={{ padding: '12px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Sign in to
                </p>
              </div>

              {/* Portal cards */}
              <div style={{ padding: '8px' }}>
                {PORTALS.map((portal, i) => (
                  <a
                    key={portal.key}
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSignInOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '12px 12px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                      background: 'transparent',
                      marginBottom: i < PORTALS.length - 1 ? 4 : 0,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {/* Icon box */}
                    <div style={{
                      width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                      background: portal.grad,
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{portal.icon}</div>

                    {/* Text stack */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: '0 0 2px', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', lineHeight: 1 }}>
                        {portal.label}
                      </p>
                      <p style={{ margin: '0 0 4px', fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 500, color: '#a78bfa', lineHeight: 1 }}>
                        {portal.sub}
                      </p>
                      <p style={{ margin: 0, fontFamily: 'var(--fb)', fontSize: 11, color: 'var(--text-3)', lineHeight: 1.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {portal.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
                      <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div style={{ padding: '8px 16px 12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--fb)' }}>
                  Not sure?{' '}
                  <a href="mailto:sales@rikai.tech" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>Contact us</a>
                </p>
              </div>
            </div>
          )}
        </div>

        <button onClick={() => onBookDemo()} style={{
          background: 'var(--grad)', color: '#fff',
          fontFamily: 'var(--fh)', fontWeight: 600, fontSize: '14px',
          padding: '10px 22px', borderRadius: '10px',
          boxShadow: '0 0 28px rgba(124,58,237,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          border: 'none', cursor: 'pointer',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(124,58,237,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(124,58,237,0.45)'; }}
        >Get Started Free</button>
      </div>
    </nav>
  );
}
