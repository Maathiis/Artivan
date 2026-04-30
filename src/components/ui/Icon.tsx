export type IconName =
  | 'cart' | 'user' | 'search' | 'heart' | 'cube' | 'arrow' | 'arrowLeft' | 'arrowDown'
  | 'plus' | 'minus' | 'check' | 'x' | 'leaf' | 'truck' | 'star' | 'mapPin' | 'settings'
  | 'bell' | 'package' | 'creditCard' | 'home' | 'rotate' | 'eye' | 'lock' | 'mail'
  | 'phone' | 'sparkle' | 'menu' | 'filter' | 'grid' | 'list' | 'instagram' | 'facebook' | 'twitter'

interface IconProps {
  name: IconName
  size?: number
  stroke?: string
  fill?: string
  strokeWidth?: number
}

export default function Icon({ name, size = 20, stroke = 'currentColor', fill = 'none', strokeWidth = 1.6 }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    cart: <><path d="M3 3h2l2.4 12.6a1.5 1.5 0 0 0 1.5 1.4h9.6a1.5 1.5 0 0 0 1.5-1.2L22 7H6" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    heart: <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5 9 5 10.5 6.5 12 8.5 13.5 6.5 15 5 17.5 5c4 0 5.5 4 4 7-2.5 4.5-9.5 9-9.5 9z" />,
    cube: <><path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" /><path d="M3 7l9 5 9-5M12 12v10" /></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
    arrowLeft: <><path d="M19 12H5M12 5l-7 7 7 7" /></>,
    arrowDown: <><path d="M12 5v14M5 12l7 7 7-7" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    check: <path d="m4 12 5 5L20 6" />,
    x: <><path d="M18 6 6 18M6 6l12 12" /></>,
    leaf: <path d="M11 20A7 7 0 0 1 9.8 6.4C15.5 3 22 3 22 3s0 6-3.4 12.2a7 7 0 0 1-7.6 4.8z" />,
    truck: <><path d="M1 8h13v9H1zM14 11h4l3 3v3h-7" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></>,
    star: <path d="m12 2 3 7 7 .5-5.5 4.5L18 21l-6-3.5L6 21l1.5-7L2 9.5 9 9z" />,
    mapPin: <><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
    package: <><path d="M21 16V8L12 3 3 8v8l9 5z" /><path d="M3 8l9 5 9-5M12 13v9" /></>,
    creditCard: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
    home: <><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" /></>,
    rotate: <><path d="M2 12a10 10 0 0 1 18-6M22 12a10 10 0 0 1-18 6" /><path d="M20 6v4h-4M4 18v-4h4" /></>,
    eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 1 1 8 0v4" /></>,
    mail: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="m2 7 10 7 10-7" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.4a2 2 0 0 1 2.1-.4c.9.4 1.8.6 2.7.8a2 2 0 0 1 1.7 2z" />,
    sparkle: <path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4" />,
    menu: <><path d="M3 6h18M3 12h18M3 18h18" /></>,
    filter: <path d="M3 4h18l-7 8v7l-4 2v-9z" />,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    list: <><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill={stroke} /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    twitter: <path d="M22 4.1s-2 1.2-3.1 1.5a4.4 4.4 0 0 0-7.5 4v1A10.5 10.5 0 0 1 3 6.1s-4 9 5 13a11.5 11.5 0 0 1-7 2c9 5 20 0 20-11.5 0-.3 0-.6-.1-.8.9-.9 1.6-2 2.1-3.2z" />,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}
