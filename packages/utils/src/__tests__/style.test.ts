import { describe, it, expect } from 'vitest'
import { typographyStyle, token } from '../style'
import { fontFamily, fontSize, fontWeight } from '@designsystemfdv/primitives'

describe('typographyStyle', () => {
  it('returns correct fontFamily', () => {
    const style = typographyStyle('base', 'regular')
    expect(style.fontFamily).toBe(fontFamily.base)
  })

  it('returns correct fontSize for base', () => {
    const style = typographyStyle('base', 'regular')
    expect(style.fontSize).toBe(fontSize.base)
  })

  it('returns correct fontSize for sm', () => {
    const style = typographyStyle('sm', 'light')
    expect(style.fontSize).toBe(fontSize.sm)
  })

  it('returns correct fontWeight for medium', () => {
    const style = typographyStyle('base', 'medium')
    expect(style.fontWeight).toBe(fontWeight.medium)
  })

  it('returns correct fontWeight for bold', () => {
    const style = typographyStyle('xl', 'bold')
    expect(style.fontWeight).toBe(fontWeight.bold)
  })

  it('returns an object with exactly three properties', () => {
    const style = typographyStyle('md', 'semibold')
    expect(Object.keys(style)).toHaveLength(3)
  })

  it('combines different size and weight combinations', () => {
    const style = typographyStyle('xs', 'light')
    expect(style.fontSize).toBe(fontSize.xs)
    expect(style.fontWeight).toBe(fontWeight.light)
  })
})

describe('token', () => {
  it('wraps value in var()', () => {
    expect(token('--color-brand')).toBe('var(--color-brand)')
  })

  it('works with any string value', () => {
    expect(token('--spacing-md')).toBe('var(--spacing-md)')
  })

  it('returns a string', () => {
    expect(typeof token('--foo')).toBe('string')
  })
})
