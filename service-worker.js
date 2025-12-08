const CACHE_NAME = "v5-cache";
const ASSETS = ["./","./index.html","./styles.css","./manifest.json","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))));