export const textColor = {
  primary:     '#222222',
  black:       '#000000',
  secondary:   '#565a5d',
  brand:       '#0651d5',
  tertiary:    '#818487',
  white:       '#ffffff',
  dark:        '#2c3135',
  darkAlt:     '#333333',
  darkDeep:    '#1a1b1f',
  lightGray:   '#eeefef',
  offWhite:    '#fafafa',
  deepDark:    '#151719',
  warmLight:   '#fff1dd',
  charcoal:    '#23272a',
  error:       '#e23939',
  transparent: '#00000000',
} as const

export const backgroundColor = {
  gray:             '#dddddd',
  white:            '#ffffff',
  offWhite:         '#fafafa',
  brand:            '#0651d5',
  brandTransparent: '#0651d500',
  brandLight:       '#b9c3df',
  whiteTransparent: '#ffffff00',
  charcoal:         '#23272a',
  black:            '#000000',
  deepDark:         '#101213',
  dark:             '#1a1d20',
  lightGray:        '#eeefef',
  errorLight:       '#ffdede',
} as const

export const outlineColor = {
  primary:     '#222222',
  darkAlt:     '#333333',
  link:        '#0000ee',
  black:       '#000000',
  brand:       '#0651d5',
  white:       '#ffffff',
  deepDark:    '#151719',
  secondary:   '#565a5d',
  dark:        '#2c3135',
  charcoal:    '#23272a',
  transparent: '#00000000',
  ios:         '#007aff',
  darkDeep:    '#1a1b1f',
  offWhite:    '#fafafa',
} as const

export type TextColor       = typeof textColor
export type BackgroundColor = typeof backgroundColor
export type OutlineColor    = typeof outlineColor
