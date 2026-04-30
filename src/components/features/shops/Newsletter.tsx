import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'

export default function Newsletter() {
  return (
    <section style={{ padding: '80px 48px' }}>
      <div style={{
        background: theme.ink, color: theme.cream, padding: '80px 60px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
      }}>
        <div>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.cream3, marginBottom: 16 }}>
            NEWSLETTER
          </div>
          <h2 style={{ fontFamily: theme.serif, fontSize: 44, lineHeight: 1.05, fontWeight: 400, margin: 0, fontStyle: 'italic' }}>
            Découvrez les nouveaux ateliers en avant-première.
          </h2>
        </div>
        <div>
          <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${theme.cream}50` }}>
            <input
              placeholder="votre@email.com"
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: theme.cream, fontSize: 16, padding: '12px 0', fontFamily: theme.sans,
              }}
            />
            <button style={{
              background: 'transparent', color: theme.cream, border: 'none',
              padding: '12px 0', cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              Rejoindre <Icon name="arrow" size={14} stroke={theme.cream} />
            </button>
          </div>
          <p style={{ fontSize: 12, color: theme.cream3, marginTop: 16 }}>
            Une lettre par mois, des ateliers, des coulisses. Désinscription en un clic.
          </p>
        </div>
      </div>
    </section>
  )
}
