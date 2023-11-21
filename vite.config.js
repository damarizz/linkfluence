import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        brand: resolve(__dirname, 'brand/index.html'),
        checkout: resolve(__dirname, 'checkout/index.html'),
        influencers: resolve(__dirname, 'influencers/index.html'),
        profile: resolve(__dirname, 'profile/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#root': resolve(__dirname)
    }
  }
})
