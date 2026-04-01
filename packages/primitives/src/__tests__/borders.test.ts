import { describe, it, expect } from 'vitest'
import { border, borderRadius } from '../borders'

describe('border', () => {
  it('has transparent border', () => {
    expect(border.transparent).toBe('0.8px solid rgba(0, 0, 0, 0)')
  })

  it('has subtle border', () => {
    expect(border.subtle).toBe('0.8px solid rgb(179, 181, 182)')
  })

  it('has warmLight border', () => {
    expect(border.warmLight).toBe('0.8px solid rgb(253, 241, 224)')
  })

  it('has warmAccent border', () => {
    expect(border.warmAccent).toBe('0.8px solid rgb(254, 232, 176)')
  })

  it('has all expected keys', () => {
    const keys = ['transparent', 'subtle', 'warmLight', 'warmAccent']
    keys.forEach(key => expect(border).toHaveProperty(key))
  })
})

describe('borderRadius', () => {
  it('has none radius', () => {
    expect(borderRadius.none).toBe('0px')
  })

  it('has correct md radius', () => {
    expect(borderRadius.md).toBe('5px')
  })

  it('has correct lg radius', () => {
    expect(borderRadius.lg).toBe('8px')
  })

  it('has correct xl radius', () => {
    expect(borderRadius.xl).toBe('12px')
  })

  it('has correct 2xl radius', () => {
    expect(borderRadius['2xl']).toBe('16px')
  })

  it('has special topLeft2xl radius', () => {
    expect(borderRadius.topLeft2xl).toBe('16px 0px 0px 0px')
  })

  it('has special bottomXl radius', () => {
    expect(borderRadius.bottomXl).toBe('0px 0px 12px 12px')
  })

  it('has all expected keys', () => {
    const keys = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'topLeft2xl', 'bottomXl']
    keys.forEach(key => expect(borderRadius).toHaveProperty(key))
  })
})
