import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        article: resolve(__dirname, 'article/index.html'),
      },
      external: /^lit/,
    },
  },
});
