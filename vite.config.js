import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true,
    ...(process.env.REPLIT_DEV_DOMAIN && {
      hmr: {
        clientPort: 443,
        protocol: 'wss',
        host: process.env.REPLIT_DEV_DOMAIN
      }
    })
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  publicDir: 'public'
})
