import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SHOPS, PRODUCTS } from '@/lib/data'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import ShopImage from '@/components/imagery/ShopImage'
import ProductImage from '@/components/imagery/ProductImage'

export function generateStaticParams() {
  return SHOPS.map(s => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const shop = SHOPS.find(s => s.id === id)
  return { title: shop ? `${shop.name} — L'Atelier Mobile` : 'Boutique' }
}

export default async function ShopDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const shop = SHOPS.find(s => s.id === id)
  if (!shop) notFound()

  const shopProducts = PRODUCTS.filter(p => p.artisan === shop.name).concat(PRODUCTS.slice(0, 3)).slice(0, 4)

  return (
    <div>
      <Link href="/shops" style={{
        background: 'transparent', border: 'none', padding: '20px 48px',
        cursor: 'pointer', color: theme.muted, fontSize: 13,
        display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
      }}>
        <Icon name="arrowLeft" size={14} stroke={theme.muted} /> Retour aux boutiques
      </Link>

      <section style={{ padding: '20px 48px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div style={{ aspectRatio: '4/5' }}>
          <ShopImage shop={shop} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
            {shop.tag.toUpperCase()} · {shop.city.toUpperCase()}
          </div>
          <h1 style={{ fontFamily: theme.serif, fontSize: 80, lineHeight: 0.95, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
            {shop.name}
          </h1>
          <p style={{ fontSize: 17, color: theme.ink2, lineHeight: 1.7, marginTop: 28 }}>{shop.longDesc}</p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
            marginTop: 40, paddingTop: 28, borderTop: `1px solid ${theme.line}`,
          }}>
            {[
              { value: shop.productCount, label: 'PIÈCES' },
              { value: shop.founded, label: 'FONDÉE' },
              { value: shop.city, label: 'VILLE' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontFamily: theme.serif, fontSize: 32 }}>{value}</div>
                <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 48px 100px' }}>
        <h2 style={{ fontFamily: theme.serif, fontSize: 36, fontWeight: 400, margin: '0 0 24px' }}>
          Pièces de l&apos;atelier
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {shopProducts.map(p => (
            <Link key={p.id} href="/catalog" style={{ background: theme.cream2, cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ aspectRatio: '1' }}><ProductImage product={p} palette="warm" /></div>
              <div style={{ padding: '14px 18px 18px' }}>
                <h3 style={{ fontFamily: theme.serif, fontSize: 18, fontWeight: 500, margin: '0 0 4px' }}>{p.name}</h3>
                <div style={{ fontSize: 13, color: theme.muted }}>{p.price} €</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
