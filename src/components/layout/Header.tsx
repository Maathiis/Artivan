'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { theme } from '@/lib/theme'
import { useCart } from '@/context/CartContext'
import Icon from '@/components/ui/Icon'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/catalog', label: 'Catalogue' },
  { href: '/shops', label: 'Boutiques' },
]

export default function Header() {
  const pathname = usePathname()
  const { cartCount } = useCart()

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: `${theme.cream}f0`, backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${theme.line}`,
      padding: '18px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link href="/" style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit',
      }}>
        <div style={{
          width: 32, height: 32, background: theme.ink,
          display: 'grid', placeItems: 'center',
          color: theme.cream, fontFamily: theme.serif, fontStyle: 'italic', fontSize: 18,
        }}>
          L
        </div>
        <div>
          <div style={{ fontFamily: theme.serif, fontSize: 18, fontWeight: 500, lineHeight: 1 }}>
            L&apos;Atelier Mobile
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', color: theme.muted, fontFamily: theme.mono, marginTop: 2 }}>
            EST. 2024 · LIVRAISON ÉCO
          </div>
        </div>
      </Link>

      <nav style={{ display: 'flex', gap: 32 }}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: theme.sans, fontSize: 14,
            color: pathname === href ? theme.accent : theme.ink,
            padding: '8px 0', position: 'relative', textDecoration: 'none',
            borderBottom: pathname === href ? `1px solid ${theme.accent}` : '1px solid transparent',
          }}>
            {label}
          </Link>
        ))}
      </nav>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Link href="/cart" style={{
          background: 'transparent', border: `1px solid ${theme.line}`,
          width: 40, height: 40, cursor: 'pointer', position: 'relative',
          display: 'grid', placeItems: 'center', color: theme.ink, textDecoration: 'none',
        }}>
          <Icon name="cart" size={18} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -6,
              background: theme.accent, color: '#fff',
              fontSize: 10, fontWeight: 600,
              width: 18, height: 18, borderRadius: 999,
              display: 'grid', placeItems: 'center',
            }}>
              {cartCount}
            </span>
          )}
        </Link>
        <Link href="/settings" style={{
          background: 'transparent', border: `1px solid ${theme.line}`,
          width: 40, height: 40, cursor: 'pointer', color: theme.ink,
          display: 'grid', placeItems: 'center', textDecoration: 'none',
        }}>
          <Icon name="user" size={18} />
        </Link>
      </div>
    </header>
  )
}
