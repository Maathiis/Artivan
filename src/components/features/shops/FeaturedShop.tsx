import Link from 'next/link'
import type { Shop } from '@/types'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import ShopImage from '@/components/imagery/ShopImage'

interface FeaturedShopProps {
  shop: Shop
}

export default function FeaturedShop({ shop }: FeaturedShopProps) {
  return (
    <section style={{ padding: '80px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', background: theme.cream2 }}>
        <div style={{ minHeight: 540, position: 'relative' }}>
          <ShopImage shop={shop} />
          <div style={{
            position: 'absolute', top: 24, left: 24,
            background: theme.cream, padding: '8px 14px',
            fontFamily: theme.mono, fontSize: 10, letterSpacing: '0.2em',
          }}>
            BOUTIQUE EN VEDETTE
          </div>
        </div>
        <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.muted, marginBottom: 12 }}>
            {shop.tag.toUpperCase()} · {shop.city.toUpperCase()} · DEPUIS {shop.founded}
          </div>
          <h2 style={{ fontFamily: theme.serif, fontSize: 56, lineHeight: 1, fontWeight: 400, margin: 0, fontStyle: 'italic' }}>
            {shop.name}
          </h2>
          <p style={{ fontSize: 16, color: theme.ink2, lineHeight: 1.7, marginTop: 24 }}>{shop.longDesc}</p>
          <div style={{ display: 'flex', gap: 32, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${theme.line}` }}>
            <div>
              <div style={{ fontFamily: theme.serif, fontSize: 28 }}>{shop.productCount}</div>
              <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em' }}>PIÈCES EN LIGNE</div>
            </div>
            <div>
              <div style={{ fontFamily: theme.serif, fontSize: 28 }}>{2026 - shop.founded}</div>
              <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em' }}>ANNÉES D&apos;ATELIER</div>
            </div>
          </div>
          <Link href={`/shops/${shop.id}`} style={{
            background: theme.ink, color: theme.cream, border: 'none',
            padding: '16px 24px', cursor: 'pointer', fontSize: 14,
            display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 32,
            alignSelf: 'flex-start', textDecoration: 'none',
          }}>
            Visiter l&apos;atelier <Icon name="arrow" size={14} stroke={theme.cream} />
          </Link>
        </div>
      </div>
    </section>
  )
}
