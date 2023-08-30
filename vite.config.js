import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      // Define more aliases as needed
    },
  },  
});
