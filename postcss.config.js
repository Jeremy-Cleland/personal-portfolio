export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {
      preset: ['advanced', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false,
        colormin: true,
        reduceIdents: false, // Prevents breaking animations
      }]
    } : false
  },
};
