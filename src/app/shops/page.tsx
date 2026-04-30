import { SHOPS } from '@/lib/data'
import { theme } from '@/lib/theme'
import FeaturedShop from '@/components/features/shops/FeaturedShop'
import ShopGrid from '@/components/features/shops/ShopGrid'
import Newsletter from '@/components/features/shops/Newsletter'

export const metadata = { title: "Boutiques — L'Atelier Mobile" }

export default function ShopsPage() {
  return (
    <div>
      <section className="site-shell" style={{ padding: '80px 48px 60px', textAlign: 'center', borderBottom: `1px solid ${theme.line}` }}>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 24 }}>
          NOS PARTENAIRES · {SHOPS.length} ATELIERS
        </div>
        <h1 className="page-title" style={{ fontFamily: theme.serif, fontSize: 96, lineHeight: 0.95, fontWeight: 400, margin: 0, letterSpacing: '-0.03em' }}>
          Les <span style={{ fontStyle: 'italic', color: theme.accent }}>artisans</span><br />
          qui font L&apos;Atelier
        </h1>
        <p style={{ fontSize: 17, color: theme.ink2, lineHeight: 1.6, maxWidth: 620, margin: '32px auto 0' }}>
          Chaque pièce de notre catalogue sort d&apos;un atelier réel, tenu par un être humain. Voici celles et ceux qui les façonnent — leurs histoires, leurs gestes, leurs villes.
        </p>
      </section>

      <FeaturedShop shop={SHOPS[0]} />
      <ShopGrid shops={SHOPS.slice(1)} />
      <Newsletter />
    </div>
  )
}
