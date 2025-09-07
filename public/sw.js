// Service Worker for TheChatFlow - Enhanced Performance Optimization with Long Cache TTL
const CACHE_NAME = 'thechatflow-v3';
const STATIC_CACHE_NAME = 'thechatflow-static-v3';
const DYNAMIC_CACHE_NAME = 'thechatflow-dynamic-v3';
const CACHE_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

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

// Enhanced fetch strategy with aggressive caching for performance
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Add cache headers to responses to simulate server-side caching
  const addCacheHeaders = (response, maxAge = CACHE_DURATION) => {
    const headers = new Headers(response.headers);
    headers.set('Cache-Control', `public, max-age=${Math.floor(maxAge / 1000)}, immutable`);
    headers.set('Expires', new Date(Date.now() + maxAge).toUTCString());
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: headers
    });
  };
  
  // Handle JS/CSS assets with long-term caching
  if (url.pathname.includes('/assets/') && (url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))) {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            // Check cache freshness (1 year)
            const cacheDate = response.headers.get('date');
            if (cacheDate && Date.now() - new Date(cacheDate).getTime() < CACHE_DURATION) {
              return response;
            }
          }
          
          // Fetch and cache with long TTL
          return fetch(request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              const responseWithHeaders = addCacheHeaders(fetchResponse.clone(), CACHE_DURATION);
              cache.put(request, responseWithHeaders.clone());
              return responseWithHeaders;
            }
            return fetchResponse;
          }).catch(() => response);
        });
      })
    );
  }
  // Handle images with medium-term caching
  else if (request.destination === 'image' || url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              const responseWithHeaders = addCacheHeaders(fetchResponse.clone(), 30 * 24 * 60 * 60 * 1000); // 30 days
              cache.put(request, responseWithHeaders.clone());
              return responseWithHeaders;
            }
            return fetchResponse;
          });
        });
      })
    );
  }
  // Handle fonts with long-term caching
  else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              const responseWithHeaders = addCacheHeaders(fetchResponse.clone(), CACHE_DURATION);
              cache.put(request, responseWithHeaders.clone());
              return responseWithHeaders;
            }
            return fetchResponse;
          });
        });
      })
    );
  }
  // Handle HTML documents with shorter caching
  else if (request.destination === 'document') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              const responseWithHeaders = addCacheHeaders(fetchResponse.clone(), 24 * 60 * 60 * 1000); // 1 day
              cache.put(request, responseWithHeaders.clone());
              return responseWithHeaders;
            }
            return fetchResponse;
          });
          
          return response || fetchPromise;
        });
      })
    );
  }
  // Default: Network first with caching fallback
  else {
    event.respondWith(
      fetch(request).then((fetchResponse) => {
        if (fetchResponse.ok) {
          const responseClone = fetchResponse.clone();
          caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return fetchResponse;
      }).catch(() => {
        return caches.match(request);
      })
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
          if (!cacheName.startsWith('thechatflow-v3') && 
              !cacheName.startsWith('thechatflow-static-v3') && 
              !cacheName.startsWith('thechatflow-dynamic-v3')) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Notify clients that cache has been updated
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'CACHE_UPDATED' });
        });
      });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.command === 'skipWaiting') {
    self.skipWaiting();
  }
});