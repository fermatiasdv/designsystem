import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputTest } from '../InputTest'

describe('InputTest', () => {
  describe('rendering', () => {
    it('renders an input element', () => {
      render(<InputTest />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('applies default className "input-test"', () => {
      render(<InputTest />)
      expect(screen.getByRole('textbox')).toHaveClass('input-test')
    })

    it('merges custom className with default', () => {
      render(<InputTest className="custom-class" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('input-test')
      expect(input).toHaveClass('custom-class')
    })

    it('renders label when provided', () => {
      render(<InputTest label="Email" id="email" />)
      expect(screen.getByText('Email')).toBeInTheDocument()
    })

    it('associates label with input via id', () => {
      render(<InputTest label="Email" id="email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    })

    it('does not render label when not provided', () => {
      render(<InputTest placeholder="no label" />)
      expect(screen.queryByRole('label')).not.toBeInTheDocument()
    })
  })

  describe('disabled state', () => {
    it('is not disabled by default', () => {
      render(<InputTest />)
      expect(screen.getByRole('textbox')).not.toBeDisabled()
    })

    it('is disabled when disabled prop is true', () => {
      render(<InputTest disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('applies opacity 0.4 when disabled', () => {
      render(<InputTest disabled />)
      expect(screen.getByRole('textbox')).toHaveStyle({ opacity: '0.4' })
    })

    it('applies cursor not-allowed when disabled', () => {
      render(<InputTest disabled />)
      expect(screen.getByRole('textbox')).toHaveStyle({ cursor: 'not-allowed' })
    })
  })

  describe('variants', () => {
    it('renders default variant with white background', () => {
      render(<InputTest variant="default" />)
      expect(screen.getByRole('textbox')).toHaveStyle({ backgroundColor: '#ffffff' })
    })

    it('renders error variant with errorLight background', () => {
      render(<InputTest variant="error" />)
      expect(screen.getByRole('textbox')).toHaveStyle({ backgroundColor: '#ffdede' })
    })
  })

  describe('sizes', () => {
    it('renders md size by default', () => {
      render(<InputTest />)
      expect(screen.getByRole('textbox')).toHaveStyle({ fontSize: '16px', padding: '10px 14px' })
    })

    it('renders sm size with correct styles', () => {
      render(<InputTest size="sm" />)
      expect(screen.getByRole('textbox')).toHaveStyle({ fontSize: '14px', padding: '6px 10px' })
    })

    it('renders lg size with correct styles', () => {
      render(<InputTest size="lg" />)
      expect(screen.getByRole('textbox')).toHaveStyle({ fontSize: '18px', padding: '14px 18px' })
    })
  })

  describe('events', () => {
    it('calls onChange when value changes', () => {
      const handleChange = vi.fn()
      render(<InputTest onChange={handleChange} />)
      fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } })
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('input is disabled so user cannot interact with it', () => {
      render(<InputTest disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })
  })

  describe('native input props', () => {
    it('forwards placeholder prop', () => {
      render(<InputTest placeholder="Enter email" />)
      expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument()
    })

    it('forwards type prop', () => {
      render(<InputTest type="password" />)
      expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password')
    })

    it('forwards value prop', () => {
      render(<InputTest value="test value" readOnly />)
      expect(screen.getByRole('textbox')).toHaveValue('test value')
    })
  })

  describe('style override', () => {
    it('allows custom style to override computed styles', () => {
      render(<InputTest style={{ backgroundColor: 'red' }} />)
      expect((screen.getByRole('textbox') as HTMLInputElement).style.backgroundColor).toBe('red')
    })
  })
})
