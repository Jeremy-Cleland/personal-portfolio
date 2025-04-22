import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from "vite";
import { compression } from 'vite-plugin-compression2';
import svgr from "vite-plugin-svgr";
import htmlMinifier from 'vite-plugin-html-minifier-terser';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  plugins: [
    react(), 
    svgr(),
    htmlMinifier({ 
      collapseWhitespace: true, 
      removeComments: true,
      conservativeCollapse: true,
      preserveLineBreaks: true,
    }),
    visualizer({ 
      open: true, 
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap'
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      include: [/\.(js|mjs|css|html)$/],
      skipIfLargerOrEqual: true,
    }),

    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      include: [/\.(js|mjs|css|html)$/],
      compressionOptions: { level: 11 },
      skipIfLargerOrEqual: true,
    }),
    ViteImageOptimizer({
      png: { quality: 75 },
      jpeg: { quality: 75 },
      webp: { quality: 75 },
     }),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('markdown') || id.includes('remark') || id.includes('syntax-highlighter')) return 'vendor-markdown';
            return 'vendor';
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
