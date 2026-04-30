import Link from 'next/link'
import { PRODUCTS } from '@/lib/data'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import ProductImage from '@/components/imagery/ProductImage'

export default function FeaturedProducts() {
  return (
    <section className="site-shell" style={{ padding: '0 48px 100px' }}>
      <div className="section-heading-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>SÉLECTION</div>
          <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 48, lineHeight: 1.05, fontWeight: 400, margin: 0 }}>Nouveautés du mois</h2>
        </div>
        <Link href="/catalog" style={{
          background: 'transparent', border: `1px solid ${theme.ink}`,
          padding: '12px 20px', cursor: 'pointer', fontSize: 13,
          display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: theme.ink,
        }}>
          Tout voir <Icon name="arrow" size={14} />
        </Link>
      </div>
      <div className="product-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {PRODUCTS.slice(0, 4).map((p) => (
          <Link key={p.id} href="/catalog" style={{ cursor: 'pointer', background: theme.cream2, textDecoration: 'none', color: 'inherit' }}>
            <div style={{ aspectRatio: '1', position: 'relative' }}>
              <ProductImage product={p} palette="warm" />
            </div>
            <div style={{ padding: '16px 20px 24px' }}>
              <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em', marginBottom: 6 }}>
                {p.artisan.toUpperCase()}
              </div>
              <div className="featured-product-line" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{ fontFamily: theme.serif, fontSize: 20, fontWeight: 500, margin: 0 }}>{p.name}</h3>
                <div style={{ fontFamily: theme.serif, fontSize: 18 }}>{p.price} €</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
