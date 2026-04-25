'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ShiftSection from '@/components/ShiftSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AskRishiSection from '@/components/AskRishiSection';
import UnderstandingSection from '@/components/UnderstandingSection';
import PersonasSection from '@/components/PersonasSection';
import ProductPreviewSection from '@/components/ProductPreviewSection';
import TrustSection from '@/components/TrustSection';
import UseCasesSection from '@/components/UseCasesSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import TweaksPanel from '@/components/TweaksPanel';
import BookDemoModal from '@/components/BookDemoModal';

const TWEAK_DEFAULTS = {
  cta: 'demo',
  heroSize: 52,
  heroVariant: 'A',
  showPersonasIntel: true,
  showShift: true,
  showUnderstanding: true,
  showTrust: true,
};

export default function HomePage() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweakOpen, setTweakOpen] = useState(false);
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

  const openBookDemo = (email = '') => {
    setDemoEmail(email);
    setShowBookDemo(true);
  };

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('rik_tweaks3') || '{}');
      setTweaks(prev => ({ ...prev, ...saved }));
    } catch {}
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    const attach = () => document.querySelectorAll('.fu:not(.vis)').forEach(el => obs.observe(el));
    attach();
    const t = setInterval(attach, 600);
    setTimeout(() => clearInterval(t), 8000);
    return () => { obs.disconnect(); clearInterval(t); };
  }, [tweaks]);

  const updateTweak = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    localStorage.setItem('rik_tweaks3', JSON.stringify(next));
  };

  return (
    <>
      <NavBar onBookDemo={openBookDemo} />
      <main>
        <HeroSection tweaks={tweaks} onBookDemo={openBookDemo} />
        <ProblemSection />
        {tweaks.showShift && <ShiftSection />}
        <CapabilitiesSection />
        <AskRishiSection />
        {tweaks.showUnderstanding && <UnderstandingSection />}
        {tweaks.showPersonasIntel && <PersonasSection />}
        <ProductPreviewSection />
        {tweaks.showTrust && <TrustSection />}
        <UseCasesSection />
        <CTASection tweaks={tweaks} onBookDemo={openBookDemo} />
      </main>
      <FooterSection />

      {showBookDemo && (
        <BookDemoModal
          initialEmail={demoEmail}
          onClose={() => setShowBookDemo(false)}
        />
      )}

      {/* Tweaks toggle button */}
      <button
        onClick={() => setTweakOpen(o => !o)}
        style={{ position: 'fixed', bottom: 24, right: tweakOpen ? 340 : 24, zIndex: 10000, width: 44, height: 44, borderRadius: 12, background: 'rgba(124,58,237,0.9)', border: '1px solid rgba(167,139,250,0.4)', color: '#fff', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(124,58,237,0.5)', transition: 'right 0.3s' }}
        title="Tweaks"
      >✦</button>

      {tweakOpen && <TweaksPanel tweaks={tweaks} updateTweak={updateTweak} onClose={() => setTweakOpen(false)} />}
    </>
  );
}
