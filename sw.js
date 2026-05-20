/**
 * Service Worker - Copa 2026
 * Gerencia cache e funcionalidade offline
 */

const CACHE_NAME = 'estiva-go-copa-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json'
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
        return cache.addAll(ASSETS_TO_CACHE)
          .catch((err) => {
            console.warn('Alguns assets não foram cacheados:', err);
            // Continua mesmo se alguns assets falharem
            return cache.addAll(ASSETS_TO_CACHE.slice(0, 5));
          });
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
  // Ignorar requisições não-GET
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache bem-sucedido
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network falhou, tenta cache
        return caches.match(event.request)
          .then((response) => {
            return response || new Response('Offline - Recurso não disponível', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});t/plain'
              })
            });
          });
      })
  );
});