export const theme = {
  cream: "#f5efe4",
  cream2: "#ede4d3",
  cream3: "#e2d5be",
  ink: "#1f1a14",
  ink2: "#3d342a",
  muted: "#8a7a64",
  accent: "#b8543a",
  accent2: "#7a8e6a",
  line: "#d8cab3",
  serif: '"Fraunces", "Cormorant Garamond", Georgia, serif',
  sans: '"Inter", -apple-system, system-ui, sans-serif',
  mono: 'ui-monospace, "SF Mono", monospace',
} as const

export type Theme = typeof theme
