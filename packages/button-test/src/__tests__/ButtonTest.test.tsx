import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonTest } from '../ButtonTest'

describe('ButtonTest', () => {
  describe('rendering', () => {
    it('renders children correctly', () => {
      render(<ButtonTest>Click me</ButtonTest>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders as a button element', () => {
      render(<ButtonTest>Submit</ButtonTest>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('applies default className "button-test"', () => {
      render(<ButtonTest>Test</ButtonTest>)
      expect(screen.getByRole('button')).toHaveClass('button-test')
    })

    it('merges custom className with default', () => {
      render(<ButtonTest className="custom-class">Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveClass('button-test')
      expect(btn).toHaveClass('custom-class')
    })
  })

  describe('disabled state', () => {
    it('is not disabled by default', () => {
      render(<ButtonTest>Test</ButtonTest>)
      expect(screen.getByRole('button')).not.toBeDisabled()
    })

    it('is disabled when disabled prop is true', () => {
      render(<ButtonTest disabled>Test</ButtonTest>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('applies opacity 0.4 when disabled', () => {
      render(<ButtonTest disabled>Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ opacity: '0.4' })
    })

    it('applies cursor not-allowed when disabled', () => {
      render(<ButtonTest disabled>Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ cursor: 'not-allowed' })
    })
  })

  describe('variants', () => {
    it('renders primary variant by default', () => {
      render(<ButtonTest>Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ backgroundColor: '#0651d5', color: '#ffffff' })
    })

    it('renders secondary variant with correct styles', () => {
      render(<ButtonTest variant="secondary">Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ backgroundColor: '#ffffff', color: '#0651d5' })
    })

    it('renders ghost variant with correct styles', () => {
      render(<ButtonTest variant="ghost">Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ backgroundColor: '#fafafa', color: '#222222' })
    })
  })

  describe('sizes', () => {
    it('renders md size by default', () => {
      render(<ButtonTest>Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ fontSize: '16px', padding: '10px 20px' })
    })

    it('renders sm size with correct styles', () => {
      render(<ButtonTest size="sm">Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ fontSize: '14px', padding: '6px 12px' })
    })

    it('renders lg size with correct styles', () => {
      render(<ButtonTest size="lg">Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect(btn).toHaveStyle({ fontSize: '18px', padding: '14px 28px' })
    })
  })

  describe('events', () => {
    it('calls onClick when clicked', () => {
      const handleClick = vi.fn()
      render(<ButtonTest onClick={handleClick}>Click</ButtonTest>)
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn()
      render(<ButtonTest disabled onClick={handleClick}>Click</ButtonTest>)
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('style override', () => {
    it('allows custom style to override computed styles', () => {
      render(<ButtonTest style={{ backgroundColor: 'red' }}>Test</ButtonTest>)
      const btn = screen.getByRole('button')
      expect((btn as HTMLButtonElement).style.backgroundColor).toBe('red')
    })
  })

  describe('native button props', () => {
    it('forwards type prop', () => {
      render(<ButtonTest type="submit">Submit</ButtonTest>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('forwards aria-label prop', () => {
      render(<ButtonTest aria-label="close dialog">X</ButtonTest>)
      expect(screen.getByRole('button', { name: 'close dialog' })).toBeInTheDocument()
    })
  })
})
