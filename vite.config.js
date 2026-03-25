import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'pdf-vendor': ['@react-pdf/renderer'],
          'markdown-vendor': ['react-markdown', 'remark-gfm'],
          'icons': ['react-icons/md', 'react-icons/hi'],
          'ai-vendor': ['@google/genai'],
          'email-vendor': ['@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false
  },
  server: {
    open: true
  }
})
