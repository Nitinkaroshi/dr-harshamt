import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        host: true,
        hmr: {
            protocol: 'ws',
            host: 'localhost',
            port: 3000,
            clientPort: 3000
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                }
            }
        }
    },
    preview: {
        port: 4173,
        open: true
    }
})

