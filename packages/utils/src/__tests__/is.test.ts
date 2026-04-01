import { describe, it, expect } from 'vitest'
import { isString, isDefined, isBrowser } from '../is'

describe('isString', () => {
  it('returns true for a non-empty string', () => {
    expect(isString('hello')).toBe(true)
  })

  it('returns false for an empty string', () => {
    expect(isString('')).toBe(false)
  })

  it('returns false for a number', () => {
    expect(isString(42)).toBe(false)
  })

  it('returns false for null', () => {
    expect(isString(null)).toBe(false)
  })

  it('returns false for undefined', () => {
    expect(isString(undefined)).toBe(false)
  })

  it('returns false for an object', () => {
    expect(isString({})).toBe(false)
  })

  it('returns false for an array', () => {
    expect(isString([])).toBe(false)
  })

  it('returns false for boolean', () => {
    expect(isString(true)).toBe(false)
  })
})

describe('isDefined', () => {
  it('returns true for a defined string', () => {
    expect(isDefined('hello')).toBe(true)
  })

  it('returns true for a number', () => {
    expect(isDefined(0)).toBe(true)
  })

  it('returns true for false', () => {
    expect(isDefined(false)).toBe(true)
  })

  it('returns true for an empty string', () => {
    expect(isDefined('')).toBe(true)
  })

  it('returns true for an empty object', () => {
    expect(isDefined({})).toBe(true)
  })

  it('returns false for undefined', () => {
    expect(isDefined(undefined)).toBe(false)
  })

  it('returns false for null', () => {
    expect(isDefined(null)).toBe(false)
  })
})

describe('isBrowser', () => {
  it('returns a boolean', () => {
    expect(typeof isBrowser()).toBe('boolean')
  })

  it('returns false in node environment', () => {
    expect(isBrowser()).toBe(false)
  })
})
