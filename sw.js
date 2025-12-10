const CACHE_NAME = 'csv-portfolio-v2'; // FINAL IMPROVEMENT 3: Cache version bumped to force update
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.webmanifest',
  '/favicon.ico', // Added favicon to cache
  // PWA Enhancement: Local Font Files added for offline reliability
  '/fonts/Poppins-Regular.ttf',
  '/fonts/Poppins-Medium.ttf',
  '/fonts/Poppins-SemiBold.ttf',
  '/fonts/Poppins-Bold.ttf',
  '/fonts/Poppins-ExtraBold.ttf',
  // Removed '/fonts/Poppins-Italic.ttf' due to previous installation error
  // Include all critical assets for offline use (Corrected Names):
  '/icons/icon-72.png',
  '/icons/icon-128.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// Install event: cache all necessary assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// MODIFIED: Fetch event implements Network-First for HTML, Cache-First for assets.
self.addEventListener('fetch', event => {
  
  // Strategy for HTML/Root: Network-First (ensures fresh content)
  if (event.request.mode === 'navigate' || 
      event.request.url.includes('/index.html') || 
      event.request.url.endsWith('/')) {

    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If network success, clone response to update cache
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            return response;
          }
          // If network failed for some reason, fall back to cache
          return caches.match(event.request);
        })
        .catch(() => {
          // Network failed (e.g., offline) - serve from cache
          return caches.match(event.request);
        })
    );
  } else {
    // Strategy for Assets (CSS, Fonts, Images): Cache-First (for speed)
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          // No cache hit - fetch from network
          return fetch(event.request);
        })
    );
  }
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});