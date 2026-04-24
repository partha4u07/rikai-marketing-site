'use client';

export default function TweaksPanel({ tweaks, updateTweak, onClose }) {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, background: '#12121f', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '24px', width: 300, boxShadow: '0 20px 60px rgba(0,0,0,0.6)', backdropFilter: 'blur(24px)', maxHeight: '90vh', overflowY: 'auto' }}>
      <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: '#f0f0ff', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#a78bfa' }}>✦</span> Tweaks
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(240,240,255,0.4)', cursor: 'pointer', fontSize: 16, padding: '0 4px' }}>✕</button>
      </div>

      {/* Hero variant */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, color: 'rgba(240,240,255,0.45)', marginBottom: 9, fontFamily: 'var(--fb)' }}>Hero Headline</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[['A', 'Your customers are always talking…'], ['B', 'Turn customer signals into decisions…'], ['C', 'Stop analyzing data…']].map(([v, l]) => (
            <button key={v} onClick={() => updateTweak('heroVariant', v)} style={{ padding: '7px 12px', borderRadius: 8, border: '1px solid', cursor: 'pointer', fontFamily: 'var(--fb)', fontSize: 11, textAlign: 'left', transition: 'all 0.2s', borderColor: tweaks.heroVariant === v ? '#a78bfa' : 'rgba(255,255,255,0.1)', background: tweaks.heroVariant === v ? 'rgba(167,139,250,0.15)' : 'transparent', color: tweaks.heroVariant === v ? '#c4b5fd' : 'rgba(240,240,255,0.5)' }}>
              <strong style={{ marginRight: 6 }}>{v}:</strong>{l}
            </button>
          ))}
        </div>
      </div>

      {/* CTA label */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, color: 'rgba(240,240,255,0.45)', marginBottom: 9, fontFamily: 'var(--fb)' }}>Primary CTA</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {[['demo', 'Book a Demo'], ['trial', 'Free Trial'], ['waitlist', 'Join Waitlist']].map(([v, l]) => (
            <button key={v} onClick={() => updateTweak('cta', v)} style={{ padding: '5px 11px', borderRadius: 7, border: '1px solid', cursor: 'pointer', fontFamily: 'var(--fb)', fontSize: 11, transition: 'all 0.2s', borderColor: tweaks.cta === v ? '#a78bfa' : 'rgba(255,255,255,0.1)', background: tweaks.cta === v ? 'rgba(167,139,250,0.15)' : 'transparent', color: tweaks.cta === v ? '#c4b5fd' : 'rgba(240,240,255,0.5)' }}>{l}</button>
          ))}
        </div>
      </div>

      {/* Hero size */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, color: 'rgba(240,240,255,0.45)', marginBottom: 9, fontFamily: 'var(--fb)', display: 'flex', justifyContent: 'space-between' }}>
          <span>Hero Size</span><span style={{ color: '#c4b5fd' }}>{tweaks.heroSize}px</span>
        </div>
        <input type="range" min={36} max={68} step={2} value={tweaks.heroSize} onChange={e => updateTweak('heroSize', Number(e.target.value))} style={{ width: '100%', accentColor: '#7c3aed' }} />
      </div>

      {/* Section toggles */}
      <div>
        <div style={{ fontSize: 12, color: 'rgba(240,240,255,0.45)', marginBottom: 10, fontFamily: 'var(--fb)' }}>Sections</div>
        {[
          ['showShift', 'The Shift'],
          ['showUnderstanding', 'Understanding Without Limits'],
          ['showPersonasIntel', 'AI Personas'],
          ['showTrust', 'Built for Reality'],
        ].map(([key, label]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: 'rgba(240,240,255,0.5)', fontFamily: 'var(--fb)' }}>{label}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {[['true', 'On'], ['false', 'Off']].map(([v, l]) => (
                <button key={v} onClick={() => updateTweak(key, v === 'true')} style={{ padding: '3px 10px', borderRadius: 6, border: '1px solid', cursor: 'pointer', fontFamily: 'var(--fb)', fontSize: 10, transition: 'all 0.2s', borderColor: String(tweaks[key]) === v ? '#a78bfa' : 'rgba(255,255,255,0.1)', background: String(tweaks[key]) === v ? 'rgba(167,139,250,0.15)' : 'transparent', color: String(tweaks[key]) === v ? '#c4b5fd' : 'rgba(240,240,255,0.45)' }}>{l}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
