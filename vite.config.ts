import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'cleanup-stale-dev-sw',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] ?? '';
          if (url === '/sw.js' || url === '/dev-sw.js' || url.startsWith('/workbox-')) {
            res.setHeader('Content-Type', 'application/javascript');
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
            res.end(`
              self.addEventListener('install', () => self.skipWaiting());
              self.addEventListener('activate', (event) => {
                event.waitUntil(
                  caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n))))
                    .then(() => self.registration.unregister())
                    .then(() => self.clients.matchAll({ type: 'window' }))
                    .then((clients) => {
                      clients.forEach((client) => {
                        if ('navigate' in client) client.navigate(client.url);
                      });
                    })
                );
              });
            `);
            return;
          }
          if (url === '/registerSW.js' || url === '/@vite-plugin-pwa/pwa-entry-point-loaded') {
            res.setHeader('Content-Type', 'application/javascript');
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
            res.end(`
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then((regs) => {
                  regs.forEach((r) => r.unregister());
                });
              }
            `);
            return;
          }
          next();
        });
      },
    },
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['dp.jpg', 'icon.svg', 'apple-touch-icon.png'],
      manifest: {
        id: '/',
        name: 'Ashutosh Singh — Portfolio',
        short_name: 'Ashutosh',
        description: 'Cyber & Digital Risk Advisory portfolio of Ashutosh Singh, specializing in Computerized System Validation (CSV), GAMP 5, and GxP compliance.',
        theme_color: '#08090C',
        background_color: '#08090C',
        display: 'standalone',
        start_url: './',
        scope: './',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff,woff2}'],
        globIgnores: ['**/assets/aistudio/**'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  build: {
    cssCodeSplit: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: false,
  },
});
