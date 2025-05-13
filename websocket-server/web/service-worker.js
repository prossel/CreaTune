// service-worker.js
const CACHE_NAME = 'CreaTune-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './images/apple.png',
  './images/banana.png',
  './images/orange.png',
  './images/strawberry.png',
  './images/pear.png',
  './images/grape.png',
  './images/watermelon.png',
  './images/cherry.png',
  './images/blueberry.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Installation du service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Récupération des ressources - stratégie "Cache First"
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retourne la réponse du cache
        if (response) {
          return response;
        }
        
        // Pas de correspondance dans le cache - on récupère depuis le réseau
        return fetch(event.request).then(
          response => {
            // Vérifie si la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone la réponse car elle est consommée par le navigateur et le cache
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // En cas d'échec de la requête réseau, on peut retourner une page par défaut
          if (event.request.url.endsWith('.html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});