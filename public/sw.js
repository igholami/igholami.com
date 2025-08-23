// Service Worker for Performance Optimization
const CACHE_NAME = 'igholami-website-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/profile.jpg',
  '/cv.pdf'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Handle different types of requests
  if (request.destination === 'document') {
    // HTML pages - network first, fallback to cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else if (request.destination === 'script' || request.destination === 'style') {
    // JS/CSS - cache first, fallback to network
    event.respondWith(
      caches.match(request)
        .then((response) => response || fetch(request))
    );
  } else if (request.destination === 'font') {
    // Fonts - cache first with network fallback
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) return response;
          return fetch(request).then((fetchResponse) => {
            const responseClone = fetchResponse.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
            return fetchResponse;
          });
        })
    );
  } else {
    // Other assets - network first, fallback to cache
    event.respondWith(
      fetch(request)
        .catch(() => caches.match(request))
    );
  }
});

// Background sync for offline analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Sync any pending analytics or data
  try {
    // Implementation for background sync
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}
