import { theme } from '@/lib/theme'
import Icon, { type IconName } from '@/components/ui/Icon'

const VALUES: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'truck', title: 'Rapide & efficace', desc: 'Livraison mutualisée avec des transporteurs locaux. 2 à 5 jours en moyenne, créneaux 2h.' },
  { icon: 'sparkle', title: 'Simplicité absolue', desc: "Une plateforme, des dizaines d'artisans. Une seule commande, un seul suivi." },
  { icon: 'leaf', title: 'Engagement écolo', desc: 'Tournées optimisées, emballages réemployés, compensation carbone certifiée.' },
]

export default function ValuesSection() {
  return (
    <section className="site-shell" style={{ padding: '100px 48px' }}>
      <div className="values-intro" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
            NOS VALEURS
          </div>
          <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 48, lineHeight: 1.05, fontWeight: 400, margin: 0 }}>
            Pourquoi nous choisir
          </h2>
        </div>
      </div>
      <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: theme.line }}>
        {VALUES.map((v) => (
          <div key={v.title} style={{ background: theme.cream, padding: '40px 32px' }}>
            <Icon name={v.icon} size={28} stroke={theme.accent2} strokeWidth={1.4} />
            <h3 style={{ fontFamily: theme.serif, fontSize: 26, fontWeight: 500, marginTop: 20, marginBottom: 12 }}>{v.title}</h3>
            <p style={{ fontSize: 14, color: theme.ink2, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
