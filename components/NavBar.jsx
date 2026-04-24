'use client';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
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
        <a href="#" style={{ ...linkStyle, padding: '8px 16px' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
        >Sign in</a>
        <a href="#cta" style={{
          background: 'var(--grad)', color: '#fff',
          fontFamily: 'var(--fh)', fontWeight: 600, fontSize: '14px',
          padding: '10px 22px', borderRadius: '10px',
          boxShadow: '0 0 28px rgba(124,58,237,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          display: 'inline-block',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(124,58,237,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(124,58,237,0.45)'; }}
        >Get Started Free</a>
      </div>
    </nav>
  );
}
