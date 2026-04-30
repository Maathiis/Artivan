import Link from 'next/link'
import { theme } from '@/lib/theme'

export default function Footer() {
  return (
    <footer style={{ background: theme.ink, color: theme.cream, padding: '60px 48px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ fontFamily: theme.serif, fontStyle: 'italic', fontSize: 28, marginBottom: 12 }}>
            L&apos;Atelier Mobile
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.7, maxWidth: 360 }}>
            Plateforme de livraison éco-responsable qui connecte artisans locaux et amateurs de beau. Une autre manière de consommer le mobilier et la décoration.
          </p>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 14, fontFamily: theme.mono }}>PRODUIT</div>
          <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
            {['Mobilier', 'Décoration', 'Luminaire', 'Textile'].map(c => (
              <Link key={c} href={`/catalog?category=${c}`} style={{ color: theme.cream, textDecoration: 'none', opacity: 0.8 }}>{c}</Link>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 14, fontFamily: theme.mono }}>SERVICES</div>
          <div style={{ display: 'grid', gap: 8, fontSize: 13, opacity: 0.8 }}>
            <span>Catalogue</span><span>FAQ</span><span>Conditions</span><span>Support</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.5, marginBottom: 14, fontFamily: theme.mono }}>SUIVRE</div>
          <div style={{ display: 'grid', gap: 8, fontSize: 13, opacity: 0.8 }}>
            <span>Instagram</span><span>Facebook</span><span>X</span>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 48, paddingTop: 20, borderTop: `1px solid ${theme.cream}20`,
        fontSize: 11, opacity: 0.5, display: 'flex', justifyContent: 'space-between',
      }}>
        <span>© 2026 L&apos;Atelier Mobile. Tous droits réservés.</span>
        <span style={{ fontFamily: theme.mono, letterSpacing: '0.1em' }}>FRANCE · ÉCO-LIVRAISON</span>
      </div>
    </footer>
  )
}
