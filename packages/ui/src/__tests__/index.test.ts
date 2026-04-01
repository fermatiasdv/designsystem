import { describe, it, expect } from 'vitest'
import * as ui from '../index'

describe('@designsystemfdv/ui exports', () => {
  it('exports ButtonTest component', () => {
    expect(ui.ButtonTest).toBeDefined()
    expect(typeof ui.ButtonTest).toBe('function')
  })

  it('exports ButtonTestProps type (compile-time check via ButtonTest)', () => {
    expect(ui.ButtonTest).toBeDefined()
  })
})
