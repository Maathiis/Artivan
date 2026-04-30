import type { Product } from '@/types'

type Palette = 'warm' | 'cool' | 'earth' | 'sage' | 'blush' | 'deep'

const PALETTES: Record<Palette, string[]> = {
  warm:  ['#d4c4a8', '#bfa988', '#a68856', '#c19a6b', '#8a7250', '#d8c9b0'],
  cool:  ['#3d5a7a', '#5a7a8c', '#3a6b7a', '#7d96a8', '#4a6378', '#6b8599'],
  earth: ['#7a6248', '#8a6f4f', '#695540', '#9c8b73', '#5a4838', '#a89072'],
  sage:  ['#8a9c7a', '#7a8e6a', '#a3b08e', '#6f8460', '#9aa888', '#5e7350'],
  blush: ['#c79088', '#b87b72', '#a86862', '#d4a399', '#9c5a52', '#c89a92'],
  deep:  ['#2d2823', '#1f1c18', '#3a3530', '#4a4238', '#262220', '#332e29'],
}

interface ProductImageProps {
  product: Product
  palette?: Palette
  label?: boolean
  style?: React.CSSProperties
}

export default function ProductImage({ product, palette = 'warm', label = true, style }: ProductImageProps) {
  const colors = PALETTES[palette]
  const c1 = product.colorBg || colors[product.id % colors.length]
  const c2 = colors[(product.id + 2) % colors.length]
  const seed = product.id * 13

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: `linear-gradient(${135 + seed % 60}deg, ${c1} 0%, ${c2} 100%)`,
      overflow: 'hidden', ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18, mixBlendMode: 'overlay' }}>
        <defs>
          <pattern id={`stripes-${product.id}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform={`rotate(${45 + seed % 45})`}>
            <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripes-${product.id})`} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.15), transparent 60%)',
      }} />
      {label && (
        <div style={{
          position: 'absolute', bottom: 10, left: 12,
          fontFamily: 'ui-monospace, monospace', fontSize: 10,
          color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {product.category}
        </div>
      )}
    </div>
  )
}
