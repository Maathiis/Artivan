import { theme } from '@/lib/theme'
import Icon, { type IconName } from './Icon'

interface FieldProps {
  label: string
  icon?: IconName
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  autoComplete?: string
  id?: string
}

export default function Field({ label, icon, placeholder, type = 'text', value, onChange, required, autoComplete, id }: FieldProps) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={id} style={{
        fontSize: 12, color: theme.muted, fontFamily: theme.mono,
        letterSpacing: '0.15em', marginBottom: 8, display: 'block',
      }}>
        {label.toUpperCase()}
      </label>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '14px 16px', background: theme.cream2, border: `1px solid ${theme.line}`,
        transition: 'border-color 0.2s ease',
      }}>
        {icon && <Icon name={icon} size={16} stroke={theme.muted} />}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          style={{
            flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
            fontSize: 15, fontFamily: theme.sans, color: theme.ink,
          }}
        />
      </div>
    </div>
  )
}
