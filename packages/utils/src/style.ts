import type { CSSProperties } from 'react'
import { fontSize, fontWeight, fontFamily } from '@designsystemfdv/primitives'

type FontSizeKey   = keyof typeof fontSize
type FontWeightKey = keyof typeof fontWeight

/**
 * Returns inline style props for typography tokens.
 */
export function typographyStyle(
  size: FontSizeKey,
  weight: FontWeightKey,
): CSSProperties {
  return {
    fontFamily: fontFamily.base,
    fontSize:   fontSize[size],
    fontWeight: fontWeight[weight],
  }
}

/**
 * Resolves a CSS variable string from a token value.
 * Useful when components consume tokens via CSS custom properties.
 */
export function token(value: string): string {
  return `var(${value})`
}
