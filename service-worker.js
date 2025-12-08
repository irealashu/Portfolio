const CACHE_NAME = "v4-portfolio-cache";
const DYNAMIC_CACHE = "v4-dynamic-cache";

// List of core assets to pre-cache on install
const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  console.log("Installing v4 Service Worker and caching static assets...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Activating v4 Service Worker and clearing old caches...");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Serve cached response if found
      if (cachedResponse) return cachedResponse;

      // Otherwise fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          // Cache only valid responses
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === "opaque"
          ) {
            return networkResponse;
          }

          const clonedResponse = networkResponse.clone();

          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, clonedResponse);
          });

          return networkResponse;
        })
        .catch(() => {
          console.warn("Offline & no cached response found.");
        });
    })
  );
});
