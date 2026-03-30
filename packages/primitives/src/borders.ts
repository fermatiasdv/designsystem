export const border = {
  transparent: '0.8px solid rgba(0, 0, 0, 0)',
  subtle:      '0.8px solid rgb(179, 181, 182)',
  warmLight:   '0.8px solid rgb(253, 241, 224)',
  warmAccent:  '0.8px solid rgb(254, 232, 176)',
} as const

export const borderRadius = {
  none:       '0px',
  xs:         '3px',
  sm:         '4px',
  md:         '5px',
  lg:         '8px',
  xl:         '12px',
  '2xl':      '16px',
  '3xl':      '24px',
  topLeft2xl: '16px 0px 0px 0px',
  bottomXl:   '0px 0px 12px 12px',
} as const

export type Border       = typeof border
export type BorderRadius = typeof borderRadius
