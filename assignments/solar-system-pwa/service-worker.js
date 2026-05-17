const CACHE_NAME = "solar-system-pwa-v1";

const FILES_TO_CACHE = [
  "index.html",
  "promo.html",
  "instructions.html",
  "style.css",
  "app.js",
  "data.json",
  "manifest.json"
];

// Install service worker and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Load files from cache when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});