self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => clients.claim());

// No caching at all
self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
});
