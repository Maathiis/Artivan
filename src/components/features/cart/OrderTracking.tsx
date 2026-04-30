import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'

const STEPS = [
  { label: 'Commande passée', date: 'Jeu. 30 avr.', done: true },
  { label: 'Préparation atelier', date: 'Ven. 1 mai', done: true },
  { label: 'Collecte transporteur', date: 'Lun. 4 mai', done: true, current: true },
  { label: 'En tournée locale', date: 'Mar. 5 mai', done: false },
  { label: 'Livré chez vous', date: 'Mer. 6 mai · 14h-16h', done: false },
]

export default function OrderTracking() {
  return (
    <div style={{ background: theme.cream2, padding: 28, marginBottom: 28, border: `1px solid ${theme.line}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.2em', color: theme.muted }}>
            COMMANDE #LAM-2614
          </div>
          <h3 style={{ fontFamily: theme.serif, fontSize: 24, fontWeight: 500, margin: '6px 0 0' }}>
            En cours de livraison
          </h3>
        </div>
        <button style={{
          background: theme.accent2, color: '#fff', border: 'none',
          padding: '8px 14px', fontSize: 12, fontFamily: theme.mono,
          letterSpacing: '0.1em', cursor: 'pointer',
        }}>
          SUIVRE EN DIRECT
        </button>
      </div>

      <div style={{ position: 'relative', marginBottom: 20 }}>
        <div style={{ position: 'absolute', top: 14, left: 14, right: 14, height: 2, background: theme.line }} />
        <div style={{ position: 'absolute', top: 14, left: 14, height: 2, background: theme.accent2, width: '50%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 999,
                background: s.done ? theme.accent2 : theme.cream,
                border: `2px solid ${s.current ? theme.accent : (s.done ? theme.accent2 : theme.line)}`,
                display: 'grid', placeItems: 'center', color: '#fff',
                boxShadow: s.current ? `0 0 0 6px ${theme.accent}25` : 'none',
              }}>
                {s.done && <Icon name="check" size={14} stroke="#fff" strokeWidth={2.5} />}
              </div>
              <div style={{
                fontSize: 11, marginTop: 8, textAlign: 'center', maxWidth: 110,
                fontWeight: s.current ? 600 : 400, color: s.current ? theme.ink : theme.ink2,
              }}>
                {s.label}
              </div>
              <div style={{ fontSize: 10, color: theme.muted, fontFamily: theme.mono, marginTop: 2, textAlign: 'center' }}>
                {s.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        paddingTop: 16, borderTop: `1px solid ${theme.line}`,
        display: 'flex', justifyContent: 'space-between', fontSize: 13,
      }}>
        <span style={{ color: theme.muted }}>
          Transporteur · <strong style={{ color: theme.ink }}>Mathéo · Tournée Lille-Centre</strong>
        </span>
        <span style={{ color: theme.accent, fontWeight: 500 }}>Estimation : Mer. 6 mai, 14h-16h</span>
      </div>
    </div>
  )
}
