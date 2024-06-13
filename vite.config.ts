import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), basicSsl()],
    build: {
      outDir: './dist'
    },
    server: {
      port: 3005,
    },
    base: 'tma-chat',
  }
});
