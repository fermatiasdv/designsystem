/**
 * Type guard: checks if a value is a non-empty string.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0
}

/**
 * Type guard: checks if a value is a defined, non-null value.
 */
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null
}

/**
 * Returns true if the code is running in a browser environment.
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined'
}
