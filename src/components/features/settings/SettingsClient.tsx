'use client'

import { useState } from 'react'
import { theme } from '@/lib/theme'
import Icon, { type IconName } from '@/components/ui/Icon'
import Field from '@/components/ui/Field'
import Toggle from '@/components/ui/Toggle'

type TabId = 'profile' | 'orders' | 'address' | 'payment' | 'notif' | 'pref'

const TABS: { id: TabId; label: string; icon: IconName }[] = [
  { id: 'profile', label: 'Profil', icon: 'user' },
  { id: 'orders', label: 'Commandes', icon: 'package' },
  { id: 'address', label: 'Adresses', icon: 'mapPin' },
  { id: 'payment', label: 'Paiement', icon: 'creditCard' },
  { id: 'notif', label: 'Notifications', icon: 'bell' },
  { id: 'pref', label: 'Préférences', icon: 'settings' },
]

const ORDERS = [
  { id: '#LAM-2614', date: '30 avr. 2026', total: 203, status: 'En livraison', color: '#7a8e6a' },
  { id: '#LAM-2487', date: '12 mars 2026', total: 89, status: 'Livré', color: '#8a7a64' },
  { id: '#LAM-2301', date: '8 fév. 2026', total: 320, status: 'Livré', color: '#8a7a64' },
]

const ADDRESSES = [
  { label: 'Domicile', addr: '12 rue Esquermoise, 59000 Lille', default: true },
  { label: 'Bureau', addr: '44 av. de la Liberté, 59800 Lille', default: false },
]

const NOTIFS = [
  { label: 'Suivi de commande', desc: 'Étapes de livraison en temps réel', on: true },
  { label: 'Nouveaux artisans', desc: "Quand un atelier rejoint la plateforme", on: true },
  { label: 'Sélections du mois', desc: 'Newsletter mensuelle', on: false },
  { label: 'Promotions', desc: 'Offres spéciales, ventes privées', on: false },
]

export default function SettingsClient() {
  const [tab, setTab] = useState<TabId>('profile')

  return (
    <div className="site-shell" style={{ padding: '60px 48px 100px' }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 16 }}>
          ESPACE MEMBRE
        </div>
        <h1 className="page-title" style={{ fontFamily: theme.serif, fontSize: 64, fontWeight: 400, margin: 0, lineHeight: 1 }}>
          Mon <span style={{ fontStyle: 'italic' }}>compte</span>
        </h1>
      </div>

      <div className="settings-layout" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32 }}>
        {/* Sidebar */}
        <div className="settings-sidebar">
          <div style={{ background: theme.cream2, padding: 24, marginBottom: 16, border: `1px solid ${theme.line}` }}>
            <div style={{
              width: 64, height: 64, borderRadius: 999, background: theme.accent, color: '#fff',
              display: 'grid', placeItems: 'center', fontFamily: theme.serif, fontSize: 28, marginBottom: 12,
            }}>JD</div>
            <div style={{ fontFamily: theme.serif, fontSize: 20, fontWeight: 500 }}>Jeanne Dupont</div>
            <div style={{ fontSize: 12, color: theme.muted, fontFamily: theme.mono }}>jeanne@email.com</div>
            <div style={{ marginTop: 12, padding: '8px 12px', background: theme.cream, fontSize: 11, fontFamily: theme.mono, letterSpacing: '0.15em', color: theme.accent2, display: 'inline-block' }}>
              MEMBRE DEPUIS 2025
            </div>
          </div>
          <nav className="settings-tabs" style={{ display: 'grid', gap: 2 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: tab === t.id ? theme.ink : 'transparent',
                color: tab === t.id ? theme.cream : theme.ink,
                border: 'none', padding: '14px 16px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 12,
                fontSize: 14, fontFamily: theme.sans, textAlign: 'left',
              }}>
                <Icon name={t.icon} size={16} stroke={tab === t.id ? theme.cream : theme.ink} /> {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Panel */}
        <div className="settings-panel" style={{ background: theme.cream2, padding: 36, border: `1px solid ${theme.line}` }}>
          {tab === 'profile' && (
            <div>
              <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '0 0 24px' }}>Informations personnelles</h2>
              <div className="settings-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <Field label="Prénom" placeholder="Jeanne" />
                <Field label="Nom" placeholder="Dupont" />
                <Field label="Email" icon="mail" placeholder="jeanne@email.com" />
                <Field label="Téléphone" icon="phone" placeholder="+33 6 12 34 56 78" />
              </div>
              <button style={{ background: theme.ink, color: theme.cream, border: 'none', padding: '14px 24px', cursor: 'pointer', fontSize: 14, marginTop: 24 }}>
                Enregistrer les modifications
              </button>
            </div>
          )}

          {tab === 'orders' && (
            <div>
              <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '0 0 24px' }}>Historique des commandes</h2>
              {ORDERS.map(o => (
                <div key={o.id} className="orders-row" style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: 24, padding: '20px 0', borderBottom: `1px solid ${theme.line}`, alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: theme.mono, fontSize: 13 }}>{o.id}</div>
                    <div style={{ fontSize: 12, color: theme.muted }}>{o.date}</div>
                  </div>
                  <div style={{ background: o.color, color: '#fff', fontSize: 11, padding: '4px 10px', fontFamily: theme.mono, letterSpacing: '0.1em' }}>
                    {o.status.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: theme.serif, fontSize: 18 }}>{o.total} €</div>
                  <button style={{ background: 'transparent', border: `1px solid ${theme.line}`, padding: '8px 14px', cursor: 'pointer', fontSize: 12 }}>
                    Détails
                  </button>
                </div>
              ))}
            </div>
          )}

          {tab === 'address' && (
            <div>
              <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '0 0 24px' }}>Mes adresses</h2>
              {ADDRESSES.map(a => (
                <div key={a.label} className="address-row" style={{ background: theme.cream, padding: 20, marginBottom: 12, border: `1px solid ${theme.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ fontFamily: theme.serif, fontSize: 18, fontWeight: 500 }}>{a.label}</div>
                      {a.default && <span style={{ fontSize: 10, padding: '2px 8px', background: theme.accent2, color: '#fff', fontFamily: theme.mono, letterSpacing: '0.1em' }}>PAR DÉFAUT</span>}
                    </div>
                    <div style={{ fontSize: 13, color: theme.ink2, marginTop: 4 }}>{a.addr}</div>
                  </div>
                  <button style={{ background: 'transparent', border: `1px solid ${theme.line}`, padding: '8px 14px', cursor: 'pointer', fontSize: 12 }}>Modifier</button>
                </div>
              ))}
              <button style={{ background: theme.ink, color: theme.cream, border: 'none', padding: '12px 20px', cursor: 'pointer', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="plus" size={14} stroke={theme.cream} /> Ajouter une adresse
              </button>
            </div>
          )}

          {tab === 'payment' && (
            <div>
              <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '0 0 24px' }}>Moyens de paiement</h2>
              <div style={{ background: `linear-gradient(135deg, ${theme.ink}, ${theme.ink2})`, color: theme.cream, padding: 28, marginBottom: 16, maxWidth: 400, aspectRatio: '1.6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: theme.serif, fontStyle: 'italic', fontSize: 22 }}>L&apos;Atelier Mobile</div>
                  <Icon name="creditCard" size={24} stroke={theme.cream} />
                </div>
                <div style={{ marginTop: 32, fontFamily: theme.mono, fontSize: 18, letterSpacing: '0.1em' }}>•••• •••• •••• 4242</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, fontSize: 12, fontFamily: theme.mono, opacity: 0.7, letterSpacing: '0.1em' }}>
                  <span>JEANNE DUPONT</span><span>12/28</span>
                </div>
              </div>
              <button style={{ background: theme.ink, color: theme.cream, border: 'none', padding: '12px 20px', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="plus" size={14} stroke={theme.cream} /> Ajouter une carte
              </button>
            </div>
          )}

          {tab === 'notif' && (
            <div>
              <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '0 0 24px' }}>Notifications</h2>
              {NOTIFS.map(n => (
                <div key={n.label} className="notif-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: `1px solid ${theme.line}` }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>{n.label}</div>
                    <div style={{ fontSize: 12, color: theme.muted }}>{n.desc}</div>
                  </div>
                  <Toggle defaultOn={n.on} />
                </div>
              ))}
            </div>
          )}

          {tab === 'pref' && (
            <div>
              <h2 className="section-title" style={{ fontFamily: theme.serif, fontSize: 32, fontWeight: 400, margin: '0 0 24px' }}>Préférences</h2>
              <div style={{ display: 'grid', gap: 20 }}>
                {[{ label: 'LANGUE', options: ['Français', 'English'] }, { label: 'DEVISE', options: ['Euro (€)'] }].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 12, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.15em', marginBottom: 8 }}>{s.label}</div>
                    <select style={{ padding: '12px 16px', border: `1px solid ${theme.line}`, background: theme.cream, fontSize: 14, fontFamily: theme.sans, width: '100%' }}>
                      {s.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: 20, background: theme.cream, border: `1px solid ${theme.line}` }}>
                  <div className="eco-pref-row" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Icon name="leaf" size={20} stroke={theme.accent2} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, marginBottom: 4 }}>Mode éco-responsable</div>
                      <div style={{ fontSize: 12, color: theme.ink2 }}>Privilégier les livraisons groupées même si elles prennent 1-2 jours de plus.</div>
                    </div>
                    <Toggle defaultOn={true} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
