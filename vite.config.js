import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for static hosting
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
