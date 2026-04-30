type Palette = 'warm' | 'cool' | 'earth' | 'sage' | 'blush' | 'deep' | 'cream'

const PALETTES: Record<Palette, string[]> = {
  warm:  ['#c4a87a', '#a68856', '#8a6f4f', '#d8c9b0'],
  cool:  ['#5a7a8c', '#3d5a7a', '#7d96a8', '#a8bccb'],
  earth: ['#7a6248', '#5a4838', '#a89072', '#8a6f4f'],
  sage:  ['#8a9c7a', '#5e7350', '#a3b08e', '#c9d3b8'],
  blush: ['#c79088', '#a86862', '#d4a399', '#e8c4be'],
  deep:  ['#2d2823', '#1f1c18', '#4a4238', '#3a3530'],
  cream: ['#e8dcc4', '#d8c9b0', '#c4b08c', '#b8a07a'],
}

interface LifestyleImageProps {
  palette?: Palette
  label?: string
  style?: React.CSSProperties
}

export default function LifestyleImage({ palette = 'warm', label = 'INTÉRIEUR', style }: LifestyleImageProps) {
  const colors = PALETTES[palette]
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: `linear-gradient(160deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
      overflow: 'hidden', ...style,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
        <rect x="0" y="180" width="400" height="120" fill={colors[3]} opacity="0.6" />
        <rect x="40" y="120" width="80" height="60" rx="4" fill="rgba(0,0,0,0.25)" />
        <rect x="160" y="100" width="30" height="80" fill="rgba(0,0,0,0.3)" />
        <circle cx="280" cy="140" r="22" fill="rgba(0,0,0,0.25)" />
        <rect x="320" y="80" width="50" height="100" rx="2" fill="rgba(0,0,0,0.3)" />
        <g opacity="0.1">
          {Array.from({ length: 40 }).map((_, i) => (
            <line key={i} x1={i * 12} y1="0" x2={i * 12 + 80} y2="300" stroke="white" strokeWidth="1" />
          ))}
        </g>
      </svg>
      <div style={{
        position: 'absolute', top: 14, left: 16,
        fontFamily: 'ui-monospace, monospace', fontSize: 10,
        color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em',
      }}>
        {label}
      </div>
    </div>
  )
}
