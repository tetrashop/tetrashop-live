import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    target: 'es2015',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  base: '/'
})
