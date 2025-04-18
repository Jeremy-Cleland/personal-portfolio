import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from "vite";
import { imagetools } from 'vite-imagetools';
import { compression } from 'vite-plugin-compression2';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), 
    svgr(),
    imagetools(),
    visualizer({ 
      open: true, 
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap' // easier to understand than sunburst
    }),
    compression({
      include: [/\.(js|mjs|css|html)$/],
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginalAssets: false,
      // skip if compressed ≥ original
      skipIfLargerOrEqual: true,
    }),

    // Brotli for same files
    compression({
      include: [/\.(js|mjs|css|html)$/],
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
      compressionOptions: { level: 11 },
      deleteOriginalAssets: false,
      skipIfLargerOrEqual: true,
    }),
  ],
  build: {
    target: 'esnext', // Modern browsers only
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for large libraries
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('markdown') || id.includes('remark') || id.includes('syntax-highlighter')) return 'vendor-markdown';
            return 'vendor'; // other dependencies
          }
        }
      }
    }
  },
  server: {
    open: true,
    port: 3000
  },
  preview: {
    port: 8080
  }
});
