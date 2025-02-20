import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true
  },
  preview: {
    port: 8080,
    host: true
  },
  build: {
    // Increase chunk size limit
    chunkSizeWarningLimit: 1000,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // Basic build configuration
    outDir: 'dist',
    assetsDir: 'assets',
    // Remove minify: 'terser' and use default minification
    minify: true
  },
  // Handle environment variables
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.PORT': '8080'
  }
})