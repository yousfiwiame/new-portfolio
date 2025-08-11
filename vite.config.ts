import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        '@rollup/rollup-win32-x64-msvc',
        '@rollup/rollup-darwin-x64',
        '@rollup/rollup-linux-x64-gnu',
        '@rollup/rollup-linux-x64-musl'
      ],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          animations: ['framer-motion', 'three', '@react-three/fiber']
        }
      }
    },
    target: 'esnext',
    minify: 'terser',
    sourcemap: false
  },
  optimizeDeps: {
    exclude: [
      '@rollup/rollup-win32-x64-msvc',
      '@rollup/rollup-darwin-x64'
    ]
  }
}));
