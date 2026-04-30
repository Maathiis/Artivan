'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import Field from '@/components/ui/Field'
import LifestyleImage from '@/components/imagery/LifestyleImage'

type Mode = 'login' | 'signup'

export default function AuthClient() {
  const [mode, setMode] = useState<Mode>('login')
  const router = useRouter()

  const handleSubmit = () => router.push('/')

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 'calc(100vh - 80px)' }}>
      {/* Left visual */}
      <div style={{
        background: theme.ink, color: theme.cream, padding: '60px 56px',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.cream3, marginBottom: 24 }}>
            L&apos;ATELIER MOBILE · ESPACE MEMBRE
          </div>
          <h1 style={{ fontFamily: theme.serif, fontSize: 64, lineHeight: 1, fontWeight: 400, margin: 0, fontStyle: 'italic', letterSpacing: '-0.02em' }}>
            &ldquo;Le mobilier qui<br />vous ressemble,<br />depuis l&apos;atelier.&rdquo;
          </h1>
          <p style={{ fontSize: 16, color: theme.cream3, lineHeight: 1.7, marginTop: 32, maxWidth: 420 }}>
            Connectez-vous pour suivre vos commandes, créer des collections et soutenir vos artisans préférés.
          </p>
        </div>
        <div style={{ position: 'absolute', top: 100, right: -60, width: 400, height: 400, opacity: 0.6 }}>
          <LifestyleImage palette="deep" label="ATELIER · NUIT" />
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: 32, fontSize: 12, fontFamily: theme.mono, letterSpacing: '0.15em', color: theme.cream3 }}>
          <span>· LIVRAISON ÉCO</span>
          <span>· ARTISANS LOCAUX</span>
          <span>· FRANCE</span>
        </div>
      </div>

      {/* Right form */}
      <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 540, width: '100%' }}>
        <div style={{ display: 'flex', gap: 0, marginBottom: 40, borderBottom: `1px solid ${theme.line}` }}>
          {([['login', 'Se connecter'], ['signup', 'Créer un compte']] as [Mode, string][]).map(([k, l]) => (
            <button key={k} onClick={() => setMode(k)} style={{
              background: 'transparent', border: 'none', padding: '16px 0', marginRight: 32,
              cursor: 'pointer', fontSize: 15, color: mode === k ? theme.ink : theme.muted,
              fontFamily: theme.serif, fontWeight: 500,
              borderBottom: mode === k ? `2px solid ${theme.accent}` : '2px solid transparent',
              marginBottom: -1,
            }}>
              {l}
            </button>
          ))}
        </div>

        <h2 style={{ fontFamily: theme.serif, fontSize: 40, fontWeight: 400, margin: '0 0 8px' }}>
          {mode === 'login' ? 'Bon retour parmi nous' : "Bienvenue à l'atelier"}
        </h2>
        <p style={{ fontSize: 14, color: theme.muted, margin: '0 0 32px' }}>
          {mode === 'login' ? 'Connectez-vous pour suivre vos commandes.' : 'Créez un compte pour commencer.'}
        </p>

        {mode === 'signup' && <Field label="Nom complet" icon="user" placeholder="Jeanne Dupont" />}
        <Field label="Adresse email" icon="mail" placeholder="vous@email.com" />
        <Field label="Mot de passe" icon="lock" placeholder="••••••••" type="password" />

        {mode === 'login' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, fontSize: 13 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" defaultChecked /> Se souvenir de moi
            </label>
            <button style={{ background: 'transparent', border: 'none', color: theme.accent, cursor: 'pointer', fontSize: 13 }}>
              Mot de passe oublié ?
            </button>
          </div>
        )}

        <button onClick={handleSubmit} style={{
          background: theme.ink, color: theme.cream, border: 'none',
          padding: '16px 24px', cursor: 'pointer', fontSize: 14, marginTop: 32,
          fontFamily: theme.sans, letterSpacing: '0.05em',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          {mode === 'login' ? 'Se connecter' : 'Créer le compte'}{' '}
          <Icon name="arrow" size={14} stroke={theme.cream} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '32px 0', color: theme.muted, fontSize: 11, fontFamily: theme.mono, letterSpacing: '0.2em' }}>
          <div style={{ flex: 1, height: 1, background: theme.line }} />
          OU CONTINUER AVEC
          <div style={{ flex: 1, height: 1, background: theme.line }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {['Google', 'Apple'].map(p => (
            <button key={p} style={{
              background: theme.cream, border: `1px solid ${theme.line}`,
              padding: 14, cursor: 'pointer', fontSize: 14, fontFamily: theme.sans,
            }}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
