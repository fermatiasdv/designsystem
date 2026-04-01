import { describe, it, expect } from 'vitest'
import { cn } from '../cn'

describe('cn', () => {
  it('returns a single class unchanged', () => {
    expect(cn('foo')).toBe('foo')
  })

  it('merges multiple classes with a space', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('filters out undefined values', () => {
    expect(cn('foo', undefined, 'bar')).toBe('foo bar')
  })

  it('filters out null values', () => {
    expect(cn('foo', null, 'bar')).toBe('foo bar')
  })

  it('filters out false values', () => {
    expect(cn('foo', false, 'bar')).toBe('foo bar')
  })

  it('returns empty string when all values are falsy', () => {
    expect(cn(undefined, null, false)).toBe('')
  })

  it('returns empty string when called with no arguments', () => {
    expect(cn()).toBe('')
  })

  it('handles mixed truthy and falsy values', () => {
    expect(cn('a', undefined, 'b', null, false, 'c')).toBe('a b c')
  })

  it('preserves class name with spaces inside', () => {
    expect(cn('foo bar')).toBe('foo bar')
  })
})
