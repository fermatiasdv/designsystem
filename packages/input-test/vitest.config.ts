import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@designsystemfdv/primitives': path.resolve(__dirname, '../primitives/src/index.ts'),
      '@designsystemfdv/utils': path.resolve(__dirname, '../utils/src/index.ts'),
    },
  },
})
