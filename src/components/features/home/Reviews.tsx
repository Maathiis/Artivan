import { REVIEWS } from '@/lib/data'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'

export default function Reviews() {
  return (
    <section style={{ padding: '0 48px 120px' }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
          TÉMOIGNAGES
        </div>
        <h2 style={{ fontFamily: theme.serif, fontSize: 48, lineHeight: 1.05, fontWeight: 400, margin: 0 }}>
          Ce qu&apos;ils en disent
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {REVIEWS.slice(0, 3).map((r) => (
          <div key={r.name} style={{ padding: 32, border: `1px solid ${theme.line}`, background: theme.cream }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
              {Array.from({ length: r.rating }).map((_, j) => (
                <Icon key={j} name="star" size={14} stroke={theme.accent} fill={theme.accent} strokeWidth={0} />
              ))}
            </div>
            <p style={{ fontFamily: theme.serif, fontSize: 18, lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <div style={{ marginTop: 24, fontSize: 13, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.05em' }}>
              — {r.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
