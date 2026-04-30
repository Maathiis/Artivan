'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '@/lib/theme'
import { createClient } from '@/lib/supabase/client'
import Icon from '@/components/ui/Icon'
import Field from '@/components/ui/Field'
import LifestyleImage from '@/components/imagery/LifestyleImage'

type Mode = 'login' | 'signup'

export default function AuthClient() {
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError(translateError(error.message))
      } else {
        router.push('/')
        router.refresh()
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        setError(translateError(error.message))
      } else {
        setSuccess('Vérifiez votre boîte mail pour confirmer votre inscription.')
      }
    }

    setLoading(false)
  }

  const handleOAuth = async (provider: 'google' | 'apple') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) setError(translateError(error.message))
  }

  const switchMode = (newMode: Mode) => {
    setMode(newMode)
    setError(null)
    setSuccess(null)
  }

  return (
    <div className="auth-shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 'calc(100vh - 80px)' }}>
      {/* Left visual */}
      <div className="auth-visual" style={{
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
      <div className="auth-form" style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 540, width: '100%' }}>
        <div className="auth-tabs" style={{ display: 'flex', gap: 0, marginBottom: 40, borderBottom: `1px solid ${theme.line}` }}>
          {([['login', 'Se connecter'], ['signup', 'Créer un compte']] as [Mode, string][]).map(([k, l]) => (
            <button key={k} onClick={() => switchMode(k)} style={{
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

        <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 40, fontWeight: 400, margin: '0 0 8px' }}>
          {mode === 'login' ? 'Bon retour parmi nous' : "Bienvenue à l'atelier"}
        </h2>
        <p style={{ fontSize: 14, color: theme.muted, margin: '0 0 32px' }}>
          {mode === 'login' ? 'Connectez-vous pour suivre vos commandes.' : 'Créez un compte pour commencer.'}
        </p>

        {/* Error / Success messages */}
        {error && (
          <div style={{
            background: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b',
            padding: '14px 18px', marginBottom: 24, fontSize: 14,
            display: 'flex', alignItems: 'center', gap: 10,
            animation: 'fadeIn 0.3s ease',
          }}>
            <Icon name="x" size={16} stroke="#991b1b" />
            {error}
          </div>
        )}
        {success && (
          <div style={{
            background: '#f0fdf4', border: '1px solid #86efac', color: '#166534',
            padding: '14px 18px', marginBottom: 24, fontSize: 14,
            display: 'flex', alignItems: 'center', gap: 10,
            animation: 'fadeIn 0.3s ease',
          }}>
            <Icon name="check" size={16} stroke="#166534" />
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <Field
              label="Nom complet"
              icon="user"
              placeholder="Jeanne Dupont"
              id="auth-fullname"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
              autoComplete="name"
            />
          )}
          <Field
            label="Adresse email"
            icon="mail"
            placeholder="vous@email.com"
            type="email"
            id="auth-email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <Field
            label="Mot de passe"
            icon="lock"
            placeholder="••••••••"
            type="password"
            id="auth-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          />

          {mode === 'login' && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, fontSize: 13 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" defaultChecked /> Se souvenir de moi
              </label>
              <button type="button" style={{ background: 'transparent', border: 'none', color: theme.accent, cursor: 'pointer', fontSize: 13 }}>
                Mot de passe oublié ?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? theme.ink2 : theme.ink,
              color: theme.cream,
              border: 'none',
              padding: '16px 24px',
              cursor: loading ? 'wait' : 'pointer',
              fontSize: 14,
              marginTop: 32,
              fontFamily: theme.sans,
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              width: '100%',
              opacity: loading ? 0.7 : 1,
              transition: 'opacity 0.2s ease, background 0.2s ease',
            }}
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {mode === 'login' ? 'Se connecter' : 'Créer le compte'}{' '}
                <Icon name="arrow" size={14} stroke={theme.cream} />
              </>
            )}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '32px 0', color: theme.muted, fontSize: 11, fontFamily: theme.mono, letterSpacing: '0.2em' }}>
          <div style={{ flex: 1, height: 1, background: theme.line }} />
          OU CONTINUER AVEC
          <div style={{ flex: 1, height: 1, background: theme.line }} />
        </div>

        <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {(['google', 'apple'] as const).map(provider => (
            <button
              key={provider}
              onClick={() => handleOAuth(provider)}
              style={{
                background: theme.cream,
                border: `1px solid ${theme.line}`,
                padding: 14,
                cursor: 'pointer',
                fontSize: 14,
                fontFamily: theme.sans,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              {provider === 'google' ? <GoogleIcon /> : <AppleIcon />}
              {provider === 'google' ? 'Google' : 'Apple'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function translateError(msg: string): string {
  const map: Record<string, string> = {
    'Invalid login credentials': 'Email ou mot de passe incorrect.',
    'User already registered': 'Un compte existe déjà avec cet email.',
    'Password should be at least 6 characters': 'Le mot de passe doit contenir au moins 6 caractères.',
    'Email rate limit exceeded': 'Trop de tentatives. Réessayez dans quelques minutes.',
    'Signup requires a valid password': 'Veuillez entrer un mot de passe valide.',
  }
  return map[msg] || msg
}

function LoadingSpinner() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="40" strokeDashoffset="10" strokeLinecap="round" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M14.94 14.46c-.37.82-.55 1.19-.96 1.93-.57.98-1.38 2.2-2.38 2.21-.89.01-1.12-.58-2.33-.57-1.2.01-1.46.58-2.35.58-1 0-1.76-1.12-2.33-2.1C3.27 14.45 2.4 11.75 3.08 9.91c.48-1.3 1.33-2.18 2.31-2.18.86 0 1.4.58 2.11.58.69 0 1.11-.58 2.1-.58.87 0 1.63.47 2.14 1.19-1.87 1.03-1.57 3.72.35 4.43-.29.78-.67 1.52-1.15 2.11zM11.35 5.5c.44-.54.77-1.3.65-2.08-.7.05-1.52.49-2 1.05-.43.5-.8 1.28-.66 2.02.77.02 1.57-.42 2.01-1z"/>
    </svg>
  )
}
