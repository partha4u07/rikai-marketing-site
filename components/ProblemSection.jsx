import SLabel from './SLabel';

const problems = [
  { icon: '⏱', color: '#60a5fa', title: 'By the time your dashboard updates, the moment has passed', body: 'Traditional tools collect data and surface it days or weeks later. The decision your team needed to make? It was made without you.' },
  { icon: '◈', color: '#a78bfa', title: "You have data. You still don't have answers.", body: "Dashboards show metrics. They don't explain what's driving them. Without interpretation, even the richest dataset leaves your team guessing." },
  { icon: '⚡', color: '#f59e0b', title: 'Your research stack is held together with duct tape', body: 'One tool for surveys. Another for video. A third for analysis. A spreadsheet for synthesis. Every handoff loses signal. Nothing talks to anything.' },
  { icon: '🔒', color: '#f87171', title: 'Insights get written. Decisions never change.', body: 'Research reports get filed, read once, and quietly expire. The people who needed them either never saw them or received them far too late.' },
];

export default function ProblemSection() {
  return (
    <section className="section-pad" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.055) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SLabel>The Problem</SLabel>
          <h2 className="fu" style={{ fontFamily: 'var(--fh)', fontSize: 46, fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15 }}>
            Most teams collect feedback.<br /><span className="gt">Almost none act on it.</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 520, margin: '20px auto 0', lineHeight: 1.7 }}>
            The tools haven't kept up with the speed at which decisions need to be made. That's the gap Rik AI was built to close.
          </p>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {problems.map((p, i) => (
            <div key={i} className={`fu d${i + 1}`} style={{ padding: '28px 24px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)', transition: 'border-color 0.3s, transform 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: 26, marginBottom: 16, color: p.color }}>{p.icon}</div>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, marginBottom: 12, color: p.color, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.75 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
