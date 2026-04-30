'use client'

import Link from 'next/link'
import { PRODUCTS } from '@/lib/data'
import { theme } from '@/lib/theme'
import { useCart } from '@/context/CartContext'
import Icon from '@/components/ui/Icon'
import ProductImage from '@/components/imagery/ProductImage'
import OrderTracking from './OrderTracking'
import CartSummary from './CartSummary'

export default function CartClient() {
  const { cart, setQty, removeFromCart } = useCart()

  const items = cart
    .map(c => ({ ...PRODUCTS.find(p => p.id === c.id)!, qty: c.qty }))
    .filter(Boolean)

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal > 200 ? 0 : 12
  const total = subtotal + shipping

  return (
    <div style={{ padding: '60px 48px 100px' }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
          VOTRE PANIER · {items.length} ARTICLES
        </div>
        <h1 style={{ fontFamily: theme.serif, fontSize: 64, fontWeight: 400, margin: 0, lineHeight: 1 }}>
          Mon <span style={{ fontStyle: 'italic' }}>panier</span>
        </h1>
      </div>

      {items.length === 0 ? (
        <div style={{ padding: '80px 40px', textAlign: 'center', background: theme.cream2, border: `1px solid ${theme.line}` }}>
          <Icon name="cart" size={48} stroke={theme.muted} strokeWidth={1.2} />
          <h2 style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '16px 0 8px' }}>
            Votre panier est vide
          </h2>
          <p style={{ color: theme.muted, marginBottom: 24 }}>
            Découvrez nos produits artisanaux et ajoutez-les à votre panier.
          </p>
          <Link href="/catalog" style={{
            background: theme.ink, color: theme.cream, border: 'none',
            padding: '14px 24px', cursor: 'pointer', fontSize: 14, textDecoration: 'none', display: 'inline-block',
          }}>
            Découvrir nos produits
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40 }}>
          <div>
            <OrderTracking />
            <div style={{ background: theme.cream2 }}>
              <div style={{
                padding: '20px 24px', borderBottom: `1px solid ${theme.line}`,
                fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.2em', color: theme.muted,
              }}>
                ARTICLES À COMMANDER
              </div>
              {items.map(it => (
                <div key={it.id} style={{
                  display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 20,
                  padding: '20px 24px', borderBottom: `1px solid ${theme.line}`, alignItems: 'center',
                }}>
                  <div style={{ aspectRatio: '1' }}>
                    <ProductImage product={it} palette="warm" label={false} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em' }}>
                      {it.artisan.toUpperCase()}
                    </div>
                    <h4 style={{ fontFamily: theme.serif, fontSize: 20, fontWeight: 500, margin: '4px 0' }}>{it.name}</h4>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${theme.line}`, background: theme.cream }}>
                        <button onClick={() => setQty(it.id, -1)} style={{ background: 'transparent', border: 'none', padding: '6px 10px', cursor: 'pointer' }}>
                          <Icon name="minus" size={12} />
                        </button>
                        <span style={{ padding: '0 12px', fontSize: 14 }}>{it.qty}</span>
                        <button onClick={() => setQty(it.id, 1)} style={{ background: 'transparent', border: 'none', padding: '6px 10px', cursor: 'pointer' }}>
                          <Icon name="plus" size={12} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(it.id)} style={{
                        background: 'transparent', border: 'none', color: theme.muted,
                        cursor: 'pointer', fontSize: 12, textDecoration: 'underline',
                      }}>
                        Retirer
                      </button>
                    </div>
                  </div>
                  <div style={{ fontFamily: theme.serif, fontSize: 22, textAlign: 'right' }}>
                    {(it.price * it.qty).toFixed(0)} €
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      )}
    </div>
  )
}
