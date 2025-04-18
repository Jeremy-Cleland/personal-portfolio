import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from "vite";
import { compression } from 'vite-plugin-compression2';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), 
    svgr(),
    htmlMinifier({ collapseWhitespace: true, removeComments: true }),
    visualizer({ 
      open: true, 
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap' // easier to understand than sunburst
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      // only compress files ≥10 KiB
      threshold: 10240,
      include: [/\.(js|mjs|css|html)$/],
      skipIfLargerOrEqual: true,
    }),

    // Brotli for same files
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      include: [/\.(js|mjs|css|html)$/],
      compressionOptions: { level: 11 },
      skipIfLargerOrEqual: true,
    }),
    viteImagemin({
      webp: {
        quality: 75
      }
    }),
    purgecss({
      content: ['./src/**/*.jsx','./public/index.html'],
      safelist: [/^bg-/, /^text-/, /^dark:/],
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
        },
        
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
