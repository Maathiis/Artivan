import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import LifestyleImage from '@/components/imagery/LifestyleImage'

export default function EditorialStrip() {
  return (
    <section className="site-shell" style={{ padding: '0 48px 100px' }}>
      <div className="feature-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: theme.cream2 }}>
        <div className="feature-card-body" style={{ padding: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
            NOTRE HISTOIRE
          </div>
          <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 44, lineHeight: 1.1, fontWeight: 400, margin: 0, fontStyle: 'italic' }}>
            Une logistique pensée pour la beauté de l&apos;objet.
          </h2>
          <p style={{ fontSize: 15, color: theme.ink2, lineHeight: 1.7, marginTop: 24, maxWidth: 460 }}>
            Nous sommes une équipe de transporteurs et d&apos;amateurs d&apos;artisanat. On a fondé L&apos;Atelier Mobile pour rapprocher les ateliers de leurs clients sans les détours d&apos;Amazon, sans le pollueurs des cargos, sans les rayures du chemin.
          </p>
          <button style={{
            background: 'transparent', color: theme.accent, border: 'none',
            padding: 0, marginTop: 20, fontFamily: theme.sans, fontSize: 14, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 10,
            borderBottom: `1px solid ${theme.accent}`, alignSelf: 'flex-start', paddingBottom: 4,
          }}>
            Lire l&apos;histoire <Icon name="arrow" size={14} stroke={theme.accent} />
          </button>
        </div>
        <div className="feature-image" style={{ minHeight: 480 }}>
          <LifestyleImage palette="earth" label="ATELIER · LILLE" />
        </div>
      </div>
    </section>
  )
}
