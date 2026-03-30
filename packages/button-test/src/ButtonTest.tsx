import type { CSSProperties, ButtonHTMLAttributes } from 'react'
import { textColor, backgroundColor, borderRadius, border } from '@repo/primitives'
import { fontSize, fontWeight, fontFamily } from '@repo/primitives'
import { cn } from '@repo/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize    = 'sm' | 'md' | 'lg'

export interface ButtonTestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?:    ButtonSize
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: backgroundColor.brand,
    color:           textColor.white,
    border:          border.transparent,
  },
  secondary: {
    backgroundColor: backgroundColor.white,
    color:           textColor.brand,
    border:          border.subtle,
  },
  ghost: {
    backgroundColor: backgroundColor.offWhite,
    color:           textColor.primary,
    border:          border.transparent,
  },
}

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    fontSize:       fontSize.sm,
    padding:        '6px 12px',
    borderRadius:   borderRadius.md,
  },
  md: {
    fontSize:       fontSize.base,
    padding:        '10px 20px',
    borderRadius:   borderRadius.lg,
  },
  lg: {
    fontSize:       fontSize.md,
    padding:        '14px 28px',
    borderRadius:   borderRadius.xl,
  },
}

const baseStyle: CSSProperties = {
  fontFamily:  fontFamily.base,
  fontWeight:  fontWeight.medium,
  cursor:      'pointer',
  display:     'inline-flex',
  alignItems:  'center',
  justifyContent: 'center',
  transition:  'opacity 0.15s ease',
  outline:     'none',
}

const disabledStyle: CSSProperties = {
  opacity: 0.4,
  cursor:  'not-allowed',
}

export function ButtonTest({
  variant  = 'primary',
  size     = 'md',
  disabled = false,
  className,
  style,
  children,
  ...rest
}: ButtonTestProps) {
  const computedStyle: CSSProperties = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(disabled ? disabledStyle : {}),
    ...style,
  }

  return (
    <button
      className={cn('button-test', className)}
      style={computedStyle}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
