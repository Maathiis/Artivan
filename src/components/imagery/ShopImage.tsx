import type { Shop } from '@/types'

interface ShopImageProps {
  shop: Shop
  style?: React.CSSProperties
}

export default function ShopImage({ shop, style }: ShopImageProps) {
  const c = shop.colorAccent || '#a68856'
  const seed = shop.id.length * 7

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: `linear-gradient(180deg, ${c}dd 0%, ${c} 60%, ${c}aa 100%)`,
      overflow: 'hidden', ...style,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
        <rect x="20" y="40" width="60" height="80" fill="rgba(0,0,0,0.25)" />
        <rect x="100" y="40" width="40" height="80" fill="rgba(0,0,0,0.25)" />
        <rect x="155" y="40" width="35" height="100" fill="rgba(0,0,0,0.30)" />
        <rect x="0" y="120" width="200" height="4" fill="rgba(0,0,0,0.4)" />
        <rect x="0" y="125" width="200" height="80" fill="rgba(255,255,255,0.06)" />
        <rect x="10" y="20" width="180" height="14" fill="rgba(0,0,0,0.5)" />
        <text x="100" y="30" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.85)" letterSpacing="0.1em">
          {shop.name.toUpperCase().slice(0, 18)}
        </text>
        <g opacity="0.12">
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1={i * 8 - 50 + seed} y1="0" x2={i * 8 + 100 - 50 + seed} y2="200" stroke="white" strokeWidth="1" />
          ))}
        </g>
      </svg>
      <div style={{
        position: 'absolute', bottom: 10, right: 12,
        fontFamily: 'ui-monospace, monospace', fontSize: 9,
        color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em',
      }}>
        FAÇADE · {shop.city.toUpperCase()}
      </div>
    </div>
  )
}
