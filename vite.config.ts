import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // Add target to ensure compatibility
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          antd: ['antd'],
          katex: ['katex', 'react-katex'],
          // Route-based chunks
          home: ['./src/components/home/HomePage.tsx', './src/components/home/HeroSection.tsx'],
          publications: ['./src/components/PublicationsSection.tsx', './src/components/PublicationPage.tsx'],
          awards: ['./src/components/AwardsSection.tsx'],
          projects: ['./src/components/MiniProjectsSection.tsx'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable minification (uses esbuild by default)
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'antd'],
    // Force esbuild target
    esbuildOptions: {
      target: 'es2020'
    }
  },
  // Ensure compatibility
  esbuild: {
    target: 'es2020'
  }
})
