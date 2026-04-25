'use client';
import { useState, useEffect, useRef } from 'react';

const PORTALS = [
  {
    key: 'voice',
    icon: '🎙',
    label: 'Voice Portal',
    tag: 'For Participants',
    desc: 'Join a research study, complete a survey, or share your feedback as a participant.',
    href: 'https://www.rikai.tech',
  },
  {
    key: 'customer',
    icon: '◈',
    label: 'Customer Portal',
    tag: 'For Teams',
    desc: 'Access your Rik AI workspace, manage research projects, and view insights.',
    href: 'https://www.rikai.tech',
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
              position: 'absolute', top: 'calc(100% + 10px)', right: 0,
              width: 300,
              background: 'rgba(15,15,30,0.98)',
              border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: 16,
              boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.1)',
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              zIndex: 300,
            }}>
              <div style={{ padding: '10px 10px 10px' }}>
                {PORTALS.map((portal, i) => (
                  <a
                    key={portal.key}
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSignInOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14,
                      padding: '14px 14px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                      background: 'transparent',
                      marginBottom: i < PORTALS.length - 1 ? 2 : 0,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {/* Icon */}
                    <div style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: 'rgba(124,58,237,0.15)',
                      border: '1px solid rgba(124,58,237,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16,
                    }}>{portal.icon}</div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                        <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)' }}>
                          {portal.label}
                        </span>
                        <span style={{
                          fontSize: 9, fontWeight: 700, color: '#a78bfa',
                          background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.3)',
                          borderRadius: 100, padding: '2px 7px', letterSpacing: '0.05em',
                          fontFamily: 'var(--fh)',
                        }}>{portal.tag}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: 12, color: 'var(--text-3)', lineHeight: 1.55, fontFamily: 'var(--fb)' }}>
                        {portal.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 12, opacity: 0.35 }}>
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              <div style={{ padding: '10px 24px 12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--fb)' }}>
                  Not sure which to use?{' '}
                  <a href="mailto:sales@rikai.tech" style={{ color: '#a78bfa', textDecoration: 'none' }}>Contact us</a>
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
