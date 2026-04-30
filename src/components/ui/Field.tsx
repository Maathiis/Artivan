import { theme } from '@/lib/theme'
import Icon, { type IconName } from './Icon'

interface FieldProps {
  label: string
  icon?: IconName
  placeholder?: string
  type?: string
}

export default function Field({ label, icon, placeholder, type = 'text' }: FieldProps) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        fontSize: 12, color: theme.muted, fontFamily: theme.mono,
        letterSpacing: '0.15em', marginBottom: 8, display: 'block',
      }}>
        {label.toUpperCase()}
      </label>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '14px 16px', background: theme.cream2, border: `1px solid ${theme.line}`,
      }}>
        {icon && <Icon name={icon} size={16} stroke={theme.muted} />}
        <input
          type={type}
          placeholder={placeholder}
          style={{
            flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
            fontSize: 15, fontFamily: theme.sans, color: theme.ink,
          }}
        />
      </div>
    </div>
  )
}
