//
export const breakpoints = [0, 576, 768, 992, 1200]
export const container = ['100%', '100%', '100%', '100%', '1440px']
export const padding = ['1.875rem', '1.875rem']
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const color = {
  white: ['255,255,255', '240, 240, 240'],
  black: ['44, 42, 41', '48, 41, 36', '97, 92, 90', '60,60,60'],
  gray: ['197, 198, 198', '173,173,173'],
  red: ['203,51,59', '178,45,52'],
  blue: ['0,114,206', '10,84,144', '0,156,222', '229,241,255', '79,172,251'],
  green: ['11,153,0', '22,129,13'],
}

export const font = {
  size: {
    main: [14, 16], // sm, md, lg
    heading: [16, 40, 24, 21, 16, 14],
  },
  family: {
    sans: "'proxima-nova', sans-serif",
    mono: "'Inconsolata', monospace",
  },
}
