// Service Worker for TheChatFlow - Enhanced Performance Optimization
const CACHE_NAME = 'thechatflow-v2';
const STATIC_CACHE_NAME = 'thechatflow-static-v2';
const DYNAMIC_CACHE_NAME = 'thechatflow-dynamic-v2';

// Critical resources to cache immediately
const criticalResources = [
  '/',
  '/manifest.json'
];

// Static assets to cache on install
const staticAssets = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
];

// Enhanced install event - cache critical resources first
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force activation of new SW
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Caching critical resources');
        return cache.addAll(criticalResources);
      }),
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(staticAssets);
      })
    ])
  );
});

// Enhanced fetch strategy - optimized for performance
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Handle different resource types
  if (request.destination === 'document') {
    // Cache First strategy for HTML documents
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          // Serve from cache, update in background
          fetch(request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, fetchResponse.clone());
              });
            }
          });
          return response;
        }
        return fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    // Cache First for fonts
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          const responseClone = fetchResponse.clone();
          caches.open(STATIC_CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return fetchResponse;
        });
      })
    );
  } else if (request.destination === 'style' || request.destination === 'script') {
    // Stale While Revalidate for CSS/JS
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              cache.put(request, fetchResponse.clone());
            }
            return fetchResponse;
          });
          return response || fetchPromise;
        });
      })
    );
  } else {
    // Network First for other requests
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
  }
});

// Enhanced activate event - clean up old caches efficiently
self.addEventListener('activate', (event) => {
  self.clients.claim(); // Take control immediately
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheName.startsWith('thechatflow-v2') && 
              !cacheName.startsWith('thechatflow-static-v2') && 
              !cacheName.startsWith('thechatflow-dynamic-v2')) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});