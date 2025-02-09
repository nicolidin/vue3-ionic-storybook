import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'playground'), // Définit 'playground' comme root
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Permet d'utiliser @/ pour importer plus facilement
    },
  },
  server: {
    port: 3000
  }
});
