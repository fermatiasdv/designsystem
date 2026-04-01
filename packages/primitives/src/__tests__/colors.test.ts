import { describe, it, expect } from 'vitest'
import { textColor, backgroundColor, outlineColor } from '../colors'

describe('textColor', () => {
  it('has correct brand color', () => {
    expect(textColor.brand).toBe('#0651d5')
  })

  it('has correct white color', () => {
    expect(textColor.white).toBe('#ffffff')
  })

  it('has correct primary color', () => {
    expect(textColor.primary).toBe('#222222')
  })

  it('has correct error color', () => {
    expect(textColor.error).toBe('#e23939')
  })

  it('has all expected keys', () => {
    const keys = ['primary', 'black', 'secondary', 'brand', 'tertiary', 'white', 'dark', 'darkAlt', 'darkDeep', 'lightGray', 'offWhite', 'deepDark', 'warmLight', 'charcoal', 'error', 'transparent']
    keys.forEach(key => expect(textColor).toHaveProperty(key))
  })
})

describe('backgroundColor', () => {
  it('has correct brand color', () => {
    expect(backgroundColor.brand).toBe('#0651d5')
  })

  it('has correct white color', () => {
    expect(backgroundColor.white).toBe('#ffffff')
  })

  it('has correct offWhite color', () => {
    expect(backgroundColor.offWhite).toBe('#fafafa')
  })

  it('has all expected keys', () => {
    const keys = ['gray', 'white', 'offWhite', 'brand', 'brandTransparent', 'brandLight', 'whiteTransparent', 'charcoal', 'black', 'deepDark', 'dark', 'lightGray', 'errorLight']
    keys.forEach(key => expect(backgroundColor).toHaveProperty(key))
  })
})

describe('outlineColor', () => {
  it('has correct brand color', () => {
    expect(outlineColor.brand).toBe('#0651d5')
  })

  it('has correct iOS color', () => {
    expect(outlineColor.ios).toBe('#007aff')
  })

  it('has all expected keys', () => {
    const keys = ['primary', 'darkAlt', 'link', 'black', 'brand', 'white', 'deepDark', 'secondary', 'dark', 'charcoal', 'transparent', 'ios', 'darkDeep', 'offWhite']
    keys.forEach(key => expect(outlineColor).toHaveProperty(key))
  })
})
