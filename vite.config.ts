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
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      external: [
        '@rollup/rollup-win32-x64-msvc',
        '@rollup/rollup-darwin-x64'
      ],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          animations: ['framer-motion', 'three', '@react-three/fiber']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: [
      '@rollup/rollup-win32-x64-msvc',
      '@rollup/rollup-darwin-x64'
    ]
  }
}));
