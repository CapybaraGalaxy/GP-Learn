const CACHE_NAME = 'gp-learn-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './fallback.html',
  './Apps/pomodoro.html',
  './assets/js/lucide.min.js',
  './Media/consejos.html',
  './Media/preset-editor.html',
  './favicon-light.png', // Tu PNG para tema claro
  './favicon-dark.png'   // Tu PNG para tema oscuro
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then((res) => {
        if (res) return res;
        if (event.request.mode === 'navigate') {
          return caches.match('./fallback.html');
        }
      })
    )
  );
});