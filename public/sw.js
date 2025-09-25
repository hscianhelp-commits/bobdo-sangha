const CACHE_NAME = 'bobdo-offline-v3';
const urlsToCache = [
  '/',
  '/about',
  '/emergency', 
  '/find-donor',
  '/become-donor',
  '/become-volunteer',
  '/donation',
  '/community',
  '/hospitals',
  '/training',
  '/certificate',
  '/notices',
  '/contact',
  '/manifest.json',
  '/images/bobdo-logo.png',
  '/images/bobdo-icon.png', 
  '/images/emergency-icon.png',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - Enhanced for full offline support
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // If not in cache, try to fetch from network
        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response for caching
          const responseToCache = response.clone();
          
          // Cache successful responses
          caches.open(CACHE_NAME)
            .then((cache) => {
              // Cache all GET requests for offline access
              if (event.request.method === 'GET') {
                cache.put(event.request, responseToCache);
              }
            });

          return response;
        }).catch(() => {
          // Enhanced offline fallback strategy
          if (event.request.destination === 'document') {
            // For navigation requests, serve the main app
            return caches.match('/').then(response => {
              if (response) return response;
              return caches.match('/index.html');
            });
          }
          
          // For images, try to serve a placeholder or cached version
          if (event.request.destination === 'image') {
            return caches.match('/images/bobdo-logo.png');
          }
          
          // For other resources, return cached version if available
          return caches.match(event.request);
        });
      }
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});