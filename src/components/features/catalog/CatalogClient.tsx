'use client'

import { useState } from 'react'
import type { Product } from '@/types'
import { CATEGORIES } from '@/lib/data'
import { theme } from '@/lib/theme'
import { useCart } from '@/context/CartContext'
import Icon from '@/components/ui/Icon'
import ProductImage from '@/components/imagery/ProductImage'
import ProductCard from './ProductCard'
import Viewer3D from '@/components/viewer3d/Viewer3D'

interface CatalogClientProps {
  products: Product[]
}

export default function CatalogClient({ products }: CatalogClientProps) {
  const [category, setCategory] = useState('Tous')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [viewer, setViewer] = useState<Product | null>(null)
  const { addToCart } = useCart()

  const filtered = category === 'Tous' ? products : products.filter(p => p.category === category)

  return (
    <div style={{ padding: '60px 48px 100px' }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
          CATALOGUE COMPLET · {filtered.length} PIÈCES
        </div>
        <h1 style={{ fontFamily: theme.serif, fontSize: 64, lineHeight: 1, fontWeight: 400, margin: 0 }}>
          Tous les <span style={{ fontStyle: 'italic' }}>produits</span>
        </h1>
      </div>

      {/* Filter bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 0', borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}`,
        marginBottom: 40,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)} style={{
              background: category === c ? theme.ink : 'transparent',
              color: category === c ? theme.cream : theme.ink,
              border: `1px solid ${category === c ? theme.ink : theme.line}`,
              padding: '8px 16px', cursor: 'pointer', fontSize: 13, fontFamily: theme.sans,
            }}>
              {c}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em', marginRight: 8 }}>VUE</span>
          {(['grid', 'list'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              background: view === v ? theme.ink : 'transparent',
              color: view === v ? theme.cream : theme.ink,
              border: `1px solid ${theme.line}`,
              width: 36, height: 36, cursor: 'pointer', display: 'grid', placeItems: 'center',
            }}>
              <Icon name={v} size={14} />
            </button>
          ))}
        </div>
      </div>

      {view === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} onView3D={setViewer} />)}
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 16 }}>
          {filtered.map(p => (
            <div key={p.id} style={{
              display: 'grid', gridTemplateColumns: '180px 1fr auto', gap: 32,
              padding: 16, background: theme.cream2, alignItems: 'center',
            }}>
              <div style={{ aspectRatio: '1' }}><ProductImage product={p} palette="warm" label={false} /></div>
              <div>
                <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em', marginBottom: 4 }}>
                  {p.artisan.toUpperCase()} · {p.category.toUpperCase()}
                </div>
                <h3 style={{ fontFamily: theme.serif, fontSize: 24, fontWeight: 500, margin: '0 0 8px' }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: theme.ink2, margin: 0, maxWidth: 480 }}>{p.desc}</p>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                <div style={{ fontFamily: theme.serif, fontSize: 24 }}>{p.price} €</div>
                <button onClick={() => setViewer(p)} style={{
                  background: 'transparent', border: `1px solid ${theme.line}`,
                  padding: '8px 14px', cursor: 'pointer', fontSize: 12,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <Icon name="cube" size={12} /> 3D
                </button>
                <button onClick={() => addToCart(p.id)} style={{
                  background: theme.ink, color: theme.cream, border: 'none',
                  padding: '10px 16px', cursor: 'pointer', fontSize: 13,
                }}>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewer && <Viewer3D product={viewer} onClose={() => setViewer(null)} />}
    </div>
  )
}
