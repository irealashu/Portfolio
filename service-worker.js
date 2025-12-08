const CACHE_NAME = "v2-portfolio-cache"; 
const DYNAMIC_CACHE = "v2-dynamic-cache";

// List of core assets to pre-cache on install
const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" // Cache Google Font
];

// Installation: Pre-cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened static cache');
      return cache.addAll(urlsToCache).catch(error => {
          console.error('Failed to pre-cache:', error);
      });
    })
  );
});

// Activation: Clean up old caches (optional but good practice)
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, DYNAMIC_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch: Cache-First, then Network, with Dynamic Caching
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 1. Cache Hit: Return cached response immediately
      if (response) {
        return response;
      }

      // 2. Cache Miss: Fetch from network
      return fetch(event.request).then(
        (networkResponse) => {
          // Check if we received a valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Important: Clone the response before putting it in cache
          const responseToCache = networkResponse.clone();

          // Open dynamic cache and store the new asset
          caches.open(DYNAMIC_CACHE)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return networkResponse;
        }
      ).catch(error => {
          // Handle cases where fetch fails (e.g., completely offline)
          console.log('Fetch failed; responding with offline fallback if available.');
          // You could add logic here to return a specific offline page if needed.
      });
    })
  );
});