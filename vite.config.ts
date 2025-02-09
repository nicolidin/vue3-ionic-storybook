import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

export default defineConfig({
   plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ion-'), // ✅ Treat all `ion-*` as Web Components
        },
      },
    }),
  ],
   css: {
     preprocessorOptions: {
       scss: {
         additionalData: (() => {
           // Chemin du fichier main.scss dans le projet hôte
           const hostMainScss = path.resolve(process.cwd(), 'src/styles/main.scss');

           // Vérifie si le fichier existe dans le projet hôte
           if (fs.existsSync(hostMainScss)) {
             console.log('ℹ️ Utilisation du main.scss du projet hôte');
             return `@import "src/styles/main.scss";`;
           } else {
             console.log('ℹ️ Utilisation du main.scss de la bibliothèque');
             return `@import "@/styles/main.scss";`;
           }
         })(),
       },
     },
   },
  optimizeDeps: {
    include: ['@ionic/vue', '@ionic/core'],
  },
  resolve: {
    extensions: [".mdx", ".mjs", ".js", ".ts", ".vue"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs'], // ✅ Ensure JavaScript files are served with correct MIME type
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LidinAppKit',
      fileName: (format) => `lidin-app-kit.${format}.js`,
    },
  },
});
