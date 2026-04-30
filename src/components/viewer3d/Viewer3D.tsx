'use client'

import { useState, useEffect, useRef } from 'react'
import type { Product } from '@/types'
import Icon from '@/components/ui/Icon'
import { theme } from '@/lib/theme'

interface Viewer3DProps {
  product: Product
  onClose: () => void
}

const FACES = [
  { transform: 'translateZ(100px)', label: 'FACE' },
  { transform: 'rotateY(180deg) translateZ(100px)', label: 'DOS' },
  { transform: 'rotateY(90deg) translateZ(100px)', label: 'DROITE' },
  { transform: 'rotateY(-90deg) translateZ(100px)', label: 'GAUCHE' },
  { transform: 'rotateX(90deg) translateZ(100px)', label: 'HAUT' },
  { transform: 'rotateX(-90deg) translateZ(100px)', label: 'BAS' },
]

export default function Viewer3D({ product, onClose }: Viewer3DProps) {
  const [rotX, setRotX] = useState(-15)
  const [rotY, setRotY] = useState(25)
  const [auto, setAuto] = useState(true)
  const [zoom, setZoom] = useState(1)
  const dragRef = useRef<{ x: number; y: number; rotX: number; rotY: number } | null>(null)

  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => setRotY(y => y + 0.6), 30)
    return () => clearInterval(id)
  }, [auto])

  const onPointerDown = (e: React.PointerEvent) => {
    setAuto(false)
    dragRef.current = { x: e.clientX, y: e.clientY, rotX, rotY }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return
    const dx = e.clientX - dragRef.current.x
    const dy = e.clientY - dragRef.current.y
    setRotY(dragRef.current.rotY + dx * 0.5)
    setRotX(Math.max(-60, Math.min(60, dragRef.current.rotX - dy * 0.5)))
  }
  const onPointerUp = () => { dragRef.current = null }

  return (
    <div
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{
        position: 'fixed', inset: 0, background: theme.ink, zIndex: 100,
        display: 'flex', flexDirection: 'column', color: theme.cream,
      }}
    >
      {/* Header */}
      <div className="viewer-header" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 32px', borderBottom: `1px solid ${theme.cream}15`,
      }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.6, fontFamily: theme.mono, textTransform: 'uppercase' }}>
            Vue 3D · {product.artisan}
          </div>
          <div style={{ fontSize: 22, fontWeight: 500, marginTop: 4, fontFamily: theme.serif }}>{product.name}</div>
        </div>
        <button onClick={onClose} style={{
          background: 'transparent', border: `1px solid ${theme.cream}30`, color: theme.cream,
          width: 40, height: 40, cursor: 'pointer', display: 'grid', placeItems: 'center',
        }}>
          <Icon name="x" size={18} />
        </button>
      </div>

      {/* Stage */}
      <div
        onPointerDown={onPointerDown}
        style={{
          flex: 1, position: 'relative', overflow: 'hidden', cursor: 'grab',
          background: `radial-gradient(ellipse at center, ${theme.accent}10, transparent 70%)`,
        }}
      >
        <svg style={{ position: 'absolute', inset: 0, opacity: 0.15 }} width="100%" height="100%">
          <defs>
            <pattern id="grid3d" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={theme.accent} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid3d)" />
        </svg>

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', perspective: '1200px' }}>
          <div style={{
            width: 200, height: 200, position: 'relative', transformStyle: 'preserve-3d',
            transform: `scale(${zoom}) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transition: dragRef.current ? 'none' : 'transform 0.05s linear',
          }}>
            {FACES.map((f, i) => (
              <div key={i} style={{
                position: 'absolute', width: 200, height: 200,
                transform: f.transform,
                background: `linear-gradient(${135 + i * 30}deg, ${product.colorBg || theme.accent} 0%, ${theme.accent} 100%)`,
                border: `1px solid ${theme.cream}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, letterSpacing: '0.2em', fontFamily: theme.mono, color: 'rgba(255,255,255,0.7)',
              }}>
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                  <defs>
                    <pattern id={`face-${i}`} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform={`rotate(${i * 30})`}>
                      <line x1="0" y1="0" x2="0" y2="12" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#face-${i})`} />
                </svg>
                <span style={{ position: 'relative', zIndex: 1 }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="viewer-coords" style={{ position: 'absolute', left: 32, bottom: 32, fontFamily: theme.mono, fontSize: 11, opacity: 0.7 }}>
          <div>X: {Math.round(rotX)}°</div>
          <div>Y: {Math.round(rotY)}°</div>
          <div>ZOOM: {zoom.toFixed(1)}×</div>
        </div>
        <div className="viewer-help" style={{ position: 'absolute', right: 32, bottom: 32, fontFamily: theme.mono, fontSize: 11, opacity: 0.5, textAlign: 'right' }}>
          GLISSER POUR PIVOTER<br />MOLETTE POUR ZOOMER
        </div>
      </div>

      {/* Controls */}
      <div className="viewer-controls" style={{
        padding: '20px 32px', borderTop: `1px solid ${theme.cream}15`,
        display: 'flex', gap: 16, alignItems: 'center',
      }}>
        <button onClick={() => setAuto(!auto)} style={{
          background: auto ? theme.accent : 'transparent',
          color: auto ? '#fff' : theme.cream,
          border: `1px solid ${auto ? theme.accent : theme.cream + '30'}`,
          padding: '10px 18px', cursor: 'pointer', fontSize: 12,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="rotate" size={14} />
          {auto ? 'Rotation auto' : 'Auto OFF'}
        </button>
        <button onClick={() => { setRotX(-15); setRotY(25); setZoom(1) }} style={{
          background: 'transparent', color: theme.cream,
          border: `1px solid ${theme.cream}30`, padding: '10px 18px',
          cursor: 'pointer', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Réinitialiser
        </button>
        <div style={{ flex: 1, display: 'flex', gap: 12, alignItems: 'center', maxWidth: 300 }}>
          <span style={{ fontSize: 11, opacity: 0.6, fontFamily: theme.mono }}>ZOOM</span>
          <input
            type="range" min="0.5" max="2" step="0.1" value={zoom}
            onChange={e => setZoom(parseFloat(e.target.value))}
            style={{ flex: 1, accentColor: theme.accent }}
          />
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.6 }}>{product.price} €</div>
      </div>
    </div>
  )
}
