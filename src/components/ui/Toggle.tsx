'use client'

import { useState } from 'react'
import { theme } from '@/lib/theme'

interface ToggleProps {
  defaultOn?: boolean
}

export default function Toggle({ defaultOn = false }: ToggleProps) {
  const [on, setOn] = useState(defaultOn)
  return (
    <button
      onClick={() => setOn(!on)}
      style={{
        width: 44, height: 24, background: on ? theme.accent2 : theme.line,
        border: 'none', borderRadius: 999, cursor: 'pointer', position: 'relative',
        transition: 'background 0.2s', flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute', top: 2, left: on ? 22 : 2,
        width: 20, height: 20, background: '#fff', borderRadius: 999,
        transition: 'left 0.2s',
      }} />
    </button>
  )
}
