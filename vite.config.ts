import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { cloudflare } from '@cloudflare/vite-plugin';
import { reactComponentTagger } from 'react-component-tagger';

export default defineConfig({
  base: '/heyboss_fix/',
  plugins: [react(), reactComponentTagger() as PluginOption, cloudflare()],
  server: {
    proxy: {
      '/api': 'http://localhost:8787', // ajuste a porta se necessário
    },
  },
  build: {
    chunkSizeWarningLimit: 10240,
    rollupOptions: {
      external: ['stripe'],
      output: {
        globals: {
          stripe: 'Stripe'
        }
      }
    }
  }
});

