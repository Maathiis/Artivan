'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Shop } from '@/types'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import ShopImage from '@/components/imagery/ShopImage'

interface ShopGridProps {
  shops: Shop[]
}

function ShopCard({ shop, index }: { shop: Shop; index: number }) {
  const [hover, setHover] = useState(false)
  return (
    <Link
      href={`/shops/${shop.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: 'pointer', background: theme.cream2, textDecoration: 'none', color: 'inherit',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)', transition: 'transform 0.3s',
        display: 'block',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr' }}>
        <div style={{ minHeight: 280, order: index % 2 === 0 ? 0 : 1 }}>
          <ShopImage shop={shop} />
        </div>
        <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontFamily: theme.mono, fontSize: 10, letterSpacing: '0.2em', color: theme.muted }}>
              {shop.tag.toUpperCase()}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: theme.muted, fontFamily: theme.mono }}>
              <Icon name="mapPin" size={12} stroke={theme.muted} /> {shop.city}
            </div>
          </div>
          <h3 style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 500, margin: '0 0 12px', fontStyle: 'italic' }}>
            {shop.name}
          </h3>
          <p style={{ fontSize: 13, color: theme.ink2, lineHeight: 1.6, margin: 0 }}>{shop.desc}</p>
          <div style={{
            marginTop: 20, paddingTop: 16, borderTop: `1px solid ${theme.line}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontSize: 12, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em',
          }}>
            <span>{shop.productCount} PIÈCES · DEPUIS {shop.founded}</span>
            <span style={{ color: theme.accent, display: 'flex', alignItems: 'center', gap: 6 }}>
              VOIR <Icon name="arrow" size={12} stroke={theme.accent} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ShopGrid({ shops }: ShopGridProps) {
  return (
    <section style={{ padding: '0 48px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {shops.map((shop, i) => (
          <ShopCard key={shop.id} shop={shop} index={i} />
        ))}
      </div>
    </section>
  )
}
