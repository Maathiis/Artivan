import { SHOPS } from '@/lib/data'
import { theme } from '@/lib/theme'

export default function ArtisanMarquee() {
  const doubled = [...SHOPS, ...SHOPS]
  return (
    <section style={{ background: theme.ink, color: theme.cream, padding: '20px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 48, animation: 'marquee 40s linear infinite', whiteSpace: 'nowrap' }}>
        {doubled.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <span style={{ fontFamily: theme.serif, fontSize: 22, fontStyle: 'italic' }}>{s.name}</span>
            <span style={{ fontSize: 11, opacity: 0.5, fontFamily: theme.mono }}>· {s.city.toUpperCase()} ·</span>
          </div>
        ))}
      </div>
    </section>
  )
}
