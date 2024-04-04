import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import * as path from 'path'; // path modülünü doğru bir şekilde içe aktarın
import { config } from 'dotenv'

// .env dosyasını yükle
config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    'process.env': process.env
  }
})
