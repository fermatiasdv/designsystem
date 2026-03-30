export const boxShadow = {
  subtle:     'rgba(0, 0, 0, 0.05) 0px 8px 50px 0px',
  warmGlow:   'rgba(233, 216, 155, 0.3) 0px 4px 56px 20px',
  deepDark:   'rgba(0, 0, 0, 0.2) 0px 180px 180px 0px',
  bottomDark: 'rgba(0, 0, 0, 0.2) 0px -4px 120px 0px',
  warmSoft:   'rgba(233, 216, 155, 0.2) 0px 4px 44px 10px',
} as const

export type BoxShadow = typeof boxShadow
