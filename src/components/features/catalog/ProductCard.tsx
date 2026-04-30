'use client'

import { useState } from 'react'
import type { Product } from '@/types'
import { theme } from '@/lib/theme'
import { useCart } from '@/context/CartContext'
import Icon from '@/components/ui/Icon'
import ProductImage from '@/components/imagery/ProductImage'

interface ProductCardProps {
  product: Product
  onView3D: (product: Product) => void
}

export default function ProductCard({ product, onView3D }: ProductCardProps) {
  const [hover, setHover] = useState(false)
  const { addToCart } = useCart()

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: theme.cream2, position: 'relative' }}
    >
      <div style={{ aspectRatio: '1', position: 'relative', overflow: 'hidden' }}>
        <ProductImage product={product} palette="warm" />
        <div className="product-card-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 50%)',
          opacity: hover ? 1 : 0, transition: 'opacity 0.3s',
          display: 'flex', alignItems: 'flex-end', padding: 16, gap: 8,
        }}>
          <button onClick={() => onView3D(product)} style={{
            background: theme.cream, color: theme.ink, border: 'none',
            padding: '8px 14px', cursor: 'pointer', fontSize: 12,
            display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500,
          }}>
            <Icon name="cube" size={14} /> Modéliser en 3D
          </button>
        </div>
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: theme.cream, padding: '4px 10px',
          fontFamily: theme.mono, fontSize: 10, letterSpacing: '0.1em',
        }}>
          {product.category.toUpperCase()}
        </div>
      </div>
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em', marginBottom: 8 }}>
          {product.artisan.toUpperCase()}
        </div>
        <div className="product-card-line" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <h3 style={{ fontFamily: theme.serif, fontSize: 22, fontWeight: 500, margin: 0 }}>{product.name}</h3>
          <div style={{ fontFamily: theme.serif, fontSize: 20 }}>{product.price} €</div>
        </div>
        <button onClick={() => addToCart(product.id)} style={{
          background: theme.ink, color: theme.cream, border: 'none',
          padding: '12px 16px', cursor: 'pointer', fontSize: 13, width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontFamily: theme.sans,
        }}>
          <Icon name="plus" size={14} stroke={theme.cream} /> Ajouter au panier
        </button>
      </div>
    </div>
  )
}
