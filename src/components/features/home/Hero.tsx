import Link from 'next/link'
import { theme } from '@/lib/theme'
import Icon from '@/components/ui/Icon'
import LifestyleImage from '@/components/imagery/LifestyleImage'

export default function Hero() {
  return (
    <section style={{
      padding: '80px 48px 40px',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
    }}>
      <div>
        <div style={{ fontFamily: theme.mono, fontSize: 11, letterSpacing: '0.25em', color: theme.accent, marginBottom: 24 }}>
          ── PRINTEMPS · 2026
        </div>
        <h1 style={{
          fontFamily: theme.serif, fontSize: 88, lineHeight: 0.95,
          fontWeight: 400, margin: 0, letterSpacing: '-0.03em',
        }}>
          Le mobilier<br />
          <span style={{ fontStyle: 'italic', color: theme.accent }}>local</span>,<br />
          livré <span style={{ fontStyle: 'italic', color: theme.accent2 }}>proprement</span>.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: theme.ink2, maxWidth: 480, marginTop: 28 }}>
          Une sélection d&apos;artisans français, une logistique éco-responsable, et chez vous en quelques jours. C&apos;est tout — et c&apos;est beaucoup.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <Link href="/catalog" style={{
            background: theme.ink, color: theme.cream, border: 'none',
            padding: '16px 28px', fontFamily: theme.sans, fontSize: 14,
            letterSpacing: '0.05em', cursor: 'pointer', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            Découvrir le catalogue <Icon name="arrow" size={16} stroke={theme.cream} />
          </Link>
          <Link href="/shops" style={{
            background: 'transparent', color: theme.ink,
            border: `1px solid ${theme.ink}`, padding: '16px 28px',
            fontFamily: theme.sans, fontSize: 14, letterSpacing: '0.05em',
            cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          }}>
            Nos artisans
          </Link>
        </div>
        <div style={{ display: 'flex', gap: 48, marginTop: 56, paddingTop: 32, borderTop: `1px solid ${theme.line}` }}>
          {[
            { value: '120+', label: 'ARTISANS', color: theme.accent },
            { value: '−72%', label: 'CO₂ ÉVITÉ', color: theme.accent2 },
            { value: '4.9★', label: 'NOTE CLIENT', color: theme.accent },
          ].map(({ value, label, color }) => (
            <div key={label}>
              <div style={{ fontFamily: theme.serif, fontSize: 34, fontWeight: 500 }}>
                {value.slice(0, -1)}<span style={{ color }}>{value.slice(-1)}</span>
              </div>
              <div style={{ fontSize: 12, color: theme.muted, fontFamily: theme.mono, letterSpacing: '0.1em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', height: 580 }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%' }}>
          <LifestyleImage palette="warm" label="SALON · CHÊNE" />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '45%', border: `8px solid ${theme.cream}` }}>
          <LifestyleImage palette="sage" label="DÉTAIL · LIN" />
        </div>
        <div style={{
          position: 'absolute', top: 40, left: 0,
          background: theme.cream, padding: '12px 16px', border: `1px solid ${theme.line}`,
          fontFamily: theme.mono, fontSize: 10, letterSpacing: '0.2em',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="leaf" size={14} stroke={theme.accent2} />
          LIVRAISON ÉCO-RESPONSABLE
        </div>
      </div>
    </section>
  )
}
