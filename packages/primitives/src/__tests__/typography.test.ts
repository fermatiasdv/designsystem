import { describe, it, expect } from 'vitest'
import { fontFamily, fontSize, fontWeight } from '../typography'

describe('fontFamily', () => {
  it('has base font family', () => {
    expect(fontFamily.base).toBe('Arial, sans-serif')
  })
})

describe('fontSize', () => {
  it('has correct xs size', () => {
    expect(fontSize.xs).toBe('12px')
  })

  it('has correct sm size', () => {
    expect(fontSize.sm).toBe('14px')
  })

  it('has correct base size', () => {
    expect(fontSize.base).toBe('16px')
  })

  it('has correct md size', () => {
    expect(fontSize.md).toBe('18px')
  })

  it('has correct lg size', () => {
    expect(fontSize.lg).toBe('22px')
  })

  it('has correct xl size', () => {
    expect(fontSize.xl).toBe('24px')
  })

  it('has all expected sizes', () => {
    const keys = ['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl']
    keys.forEach(key => expect(fontSize).toHaveProperty(key))
  })

  it('sizes are in ascending order', () => {
    const sizes = [fontSize.xs, fontSize.sm, fontSize.base, fontSize.md, fontSize.lg, fontSize.xl]
    const parsed = sizes.map(s => parseInt(s))
    for (let i = 1; i < parsed.length; i++) {
      expect(parsed[i]).toBeGreaterThan(parsed[i - 1])
    }
  })
})

describe('fontWeight', () => {
  it('has correct light weight', () => {
    expect(fontWeight.light).toBe(300)
  })

  it('has correct regular weight', () => {
    expect(fontWeight.regular).toBe(400)
  })

  it('has correct medium weight', () => {
    expect(fontWeight.medium).toBe(500)
  })

  it('has correct semibold weight', () => {
    expect(fontWeight.semibold).toBe(600)
  })

  it('has correct bold weight', () => {
    expect(fontWeight.bold).toBe(700)
  })

  it('weights are numeric values', () => {
    Object.values(fontWeight).forEach(w => {
      expect(typeof w).toBe('number')
    })
  })
})
