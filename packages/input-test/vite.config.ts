import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'InputTest',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react_jsx_runtime',
        },
      },
    },
  },
})
