export const fontFamily = {
  base: 'Arial, sans-serif',
} as const

export const fontSize = {
  xs:   '12px',
  sm:   '14px',
  base: '16px',
  md:   '18px',
  lg:   '22px',
  xl:   '24px',
  '2xl': '28px',
  '3xl': '36px',
  '4xl': '40px',
  '5xl': '44px',
  '6xl': '50px',
  '7xl': '64px',
  '8xl': '80px',
} as const

export const fontWeight = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const

export type FontFamily  = typeof fontFamily
export type FontSize    = typeof fontSize
export type FontWeight  = typeof fontWeight
