const CACHE_NAME = "trendingpulse-v2";
const BASE = "/trendingpulse/";

const STATIC_ASSETS = [
  BASE,
  BASE + "index.html",
  BASE + "icon-192.png",
  BASE + "icon-512.png",
  BASE + "manifest.json",
];

// Install: pre-cache shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for static, network-first for navigation
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // For navigation requests, serve index.html (SPA)
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match(BASE + "index.html").then(
        (cached) => cached || fetch(event.request)
      )
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(event.request).then(
      (cached) => cached || fetch(event.request).then((response) => {
        if (response.ok && url.pathname.startsWith(BASE)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
    )
  );
});
