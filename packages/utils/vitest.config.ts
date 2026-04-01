import { defineConfig } from 'vitest/config'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  test: {
    environment: 'node',
  },
  resolve: {
    alias: {
      '@designsystemfdv/primitives': path.resolve(__dirname, '../primitives/src/index.ts'),
    },
  },
})
