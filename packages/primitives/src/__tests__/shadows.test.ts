import { describe, it, expect } from 'vitest'
import { boxShadow } from '../shadows'

describe('boxShadow', () => {
  it('has subtle shadow', () => {
    expect(boxShadow.subtle).toBe('rgba(0, 0, 0, 0.05) 0px 8px 50px 0px')
  })

  it('has warmGlow shadow', () => {
    expect(boxShadow.warmGlow).toBe('rgba(233, 216, 155, 0.3) 0px 4px 56px 20px')
  })

  it('has deepDark shadow', () => {
    expect(boxShadow.deepDark).toBe('rgba(0, 0, 0, 0.2) 0px 180px 180px 0px')
  })

  it('has bottomDark shadow', () => {
    expect(boxShadow.bottomDark).toBe('rgba(0, 0, 0, 0.2) 0px -4px 120px 0px')
  })

  it('has warmSoft shadow', () => {
    expect(boxShadow.warmSoft).toBe('rgba(233, 216, 155, 0.2) 0px 4px 44px 10px')
  })

  it('has all expected keys', () => {
    const keys = ['subtle', 'warmGlow', 'deepDark', 'bottomDark', 'warmSoft']
    keys.forEach(key => expect(boxShadow).toHaveProperty(key))
  })

  it('all shadows are strings', () => {
    Object.values(boxShadow).forEach(shadow => {
      expect(typeof shadow).toBe('string')
    })
  })
})
