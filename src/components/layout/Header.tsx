'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { theme } from '@/lib/theme'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import Icon from '@/components/ui/Icon'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/catalog', label: 'Catalogue' },
  { href: '/shops', label: 'Boutiques' },
]

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { cartCount } = useCart()
  const { user, loading, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="app-header" style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: `${theme.cream}f0`, backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${theme.line}`,
      padding: '18px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link href="/" className="app-brand" style={{
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
          <div className="app-brand-subtitle" style={{ fontSize: 9, letterSpacing: '0.2em', color: theme.muted, fontFamily: theme.mono, marginTop: 2 }}>
            EST. 2024 · LIVRAISON ÉCO
          </div>
        </div>
      </Link>

      <nav className="app-nav" style={{ display: 'flex', gap: 32 }}>
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

      <div className="app-header-actions" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
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

        {!loading && user ? (
          /* Authenticated: show user menu */
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link href="/settings" style={{
              background: 'transparent', border: `1px solid ${theme.line}`,
              height: 40, cursor: 'pointer', color: theme.ink,
              display: 'flex', alignItems: 'center', gap: 8,
              textDecoration: 'none', padding: '0 14px',
              fontSize: 13, fontFamily: theme.sans,
            }}>
              <Icon name="user" size={16} />
              <span style={{ maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.user_metadata?.full_name || user.email?.split('@')[0] || 'Mon compte'}
              </span>
            </Link>
            <button
              onClick={handleSignOut}
              style={{
                background: 'transparent', border: `1px solid ${theme.line}`,
                width: 40, height: 40, cursor: 'pointer', color: theme.muted,
                display: 'grid', placeItems: 'center',
              }}
              title="Se déconnecter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        ) : (
          /* Not authenticated: show login button */
          <Link href="/auth" style={{
            background: pathname === '/auth' ? theme.ink : 'transparent',
            border: `1px solid ${pathname === '/auth' ? theme.ink : theme.line}`,
            height: 40, cursor: 'pointer',
            color: pathname === '/auth' ? theme.cream : theme.ink,
            display: 'flex', alignItems: 'center', gap: 8,
            textDecoration: 'none', padding: '0 16px',
            fontSize: 13, fontFamily: theme.sans,
            letterSpacing: '0.02em',
          }}>
            <Icon name="user" size={16} />
            Connexion
          </Link>
        )}
      </div>
    </header>
  )
}
