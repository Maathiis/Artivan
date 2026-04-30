import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'

interface CartSummaryProps {
  subtotal: number
  shipping: number
  total: number
}

export default function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  return (
    <div>
      <div style={{ background: theme.ink, color: theme.cream, padding: 32, position: 'sticky', top: 100 }}>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.2em', color: theme.cream3, marginBottom: 16 }}>
          RÉCAPITULATIF
        </div>
        <div style={{ display: 'grid', gap: 12, fontSize: 14, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Sous-total</span><span>{subtotal.toFixed(0)} €</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Livraison éco</span>
            <span>{shipping === 0
              ? <span style={{ color: theme.accent2 }}>Offerte</span>
              : `${shipping} €`
            }</span>
          </div>
          {shipping > 0 && (
            <div style={{ fontSize: 11, color: theme.cream3 }}>
              Plus que {(200 - subtotal).toFixed(0)} € pour la livraison offerte.
            </div>
          )}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: 16, borderTop: `1px solid ${theme.cream}30`,
          fontFamily: theme.serif, fontSize: 28, marginBottom: 24,
        }}>
          <span>Total</span><span>{total.toFixed(0)} €</span>
        </div>
        <button style={{
          width: '100%', background: theme.accent, color: '#fff', border: 'none',
          padding: 16, cursor: 'pointer', fontSize: 14, fontFamily: theme.sans,
          letterSpacing: '0.05em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          Passer la commande <Icon name="arrow" size={14} stroke="#fff" />
        </button>
        <div style={{ display: 'flex', gap: 8, marginTop: 16, fontSize: 11, color: theme.cream3, fontFamily: theme.mono, letterSpacing: '0.1em' }}>
          <Icon name="lock" size={12} stroke={theme.cream3} /> PAIEMENT SÉCURISÉ
        </div>
      </div>
      <div style={{ background: theme.cream2, padding: 24, marginTop: 16, border: `1px solid ${theme.line}` }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <Icon name="leaf" size={20} stroke={theme.accent2} />
          <div>
            <div style={{ fontWeight: 500, marginBottom: 4 }}>Livraison éco-responsable</div>
            <div style={{ fontSize: 12, color: theme.ink2, lineHeight: 1.5 }}>
              Tournée mutualisée par des transporteurs locaux. −72% de CO₂ vs. transport classique.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
