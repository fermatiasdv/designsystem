import type { CSSProperties, InputHTMLAttributes } from 'react'
import { textColor, backgroundColor, borderRadius, border } from '@designsystemfdv/primitives'
import { fontSize, fontFamily } from '@designsystemfdv/primitives'
import { cn } from '@designsystemfdv/utils'

export type InputVariant = 'default' | 'error'
export type InputSize    = 'sm' | 'md' | 'lg'

export interface InputTestProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant
  size?:    InputSize
  label?:   string
}

const variantStyles: Record<InputVariant, CSSProperties> = {
  default: {
    border:          border.subtle,
    backgroundColor: backgroundColor.white,
    color:           textColor.primary,
  },
  error: {
    border:          '0.8px solid #e23939',
    backgroundColor: backgroundColor.errorLight,
    color:           textColor.error,
  },
}

const sizeStyles: Record<InputSize, CSSProperties> = {
  sm: {
    fontSize: fontSize.sm,
    padding:  '6px 10px',
    borderRadius: borderRadius.md,
  },
  md: {
    fontSize: fontSize.base,
    padding:  '10px 14px',
    borderRadius: borderRadius.lg,
  },
  lg: {
    fontSize: fontSize.md,
    padding:  '14px 18px',
    borderRadius: borderRadius.xl,
  },
}

const baseStyle: CSSProperties = {
  fontFamily:  fontFamily.base,
  display:     'block',
  width:       '100%',
  outline:     'none',
  boxSizing:   'border-box',
  transition:  'border-color 0.15s ease',
}

const disabledStyle: CSSProperties = {
  opacity:    0.4,
  cursor:     'not-allowed',
  backgroundColor: backgroundColor.offWhite,
}

export function InputTest({
  variant   = 'default',
  size      = 'md',
  disabled  = false,
  label,
  className,
  style,
  id,
  ...rest
}: InputTestProps) {
  const computedStyle: CSSProperties = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(disabled ? disabledStyle : {}),
    ...style,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label
          htmlFor={id}
          style={{ fontSize: fontSize.sm, color: textColor.secondary, fontFamily: fontFamily.base }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn('input-test', className)}
        style={computedStyle}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}
