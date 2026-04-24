export default function SLabel({ children, color }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '5px 14px',
      background: color ? `${color}15` : 'rgba(124,58,237,0.12)',
      border: `1px solid ${color ? color + '30' : 'rgba(124,58,237,0.25)'}`,
      borderRadius: 100, marginBottom: 20,
    }}>
      <span style={{
        fontSize: 11, fontWeight: 700,
        color: color || '#c4b5fd',
        fontFamily: 'var(--fh)', letterSpacing: '0.06em', textTransform: 'uppercase',
      }}>{children}</span>
    </div>
  );
}
