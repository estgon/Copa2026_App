/**
 * Service Worker - Copa 2026
 * Gerencia cache e funcionalidade offline
 */

const CACHE_NAME = 'estiva-go-copa-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];

/**
 * Evento: Install
 * Faz cache dos assets essenciais
 */
self.addEventListener('install', (event) => {
  console.log('Service Worker instalando...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto:', CACHE_NAME);
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((err) => {
        console.warn('Alguns assets não foram cacheados:', err);
      })
  );

  self.skipWaiting();
});

/**
 * Evento: Activate
 * Limpa caches antigos
 */
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativando...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

/**
 * Evento: Fetch
 * Estratégia: Network First, fallback para cache
 */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then((cachedResponse) => {
            return cachedResponse || new Response('Offline - Recurso não disponível', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});
