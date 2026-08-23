const CACHE = 'huma-bank-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  // Réseau prioritaire (données bancaires toujours fraîches), pas de cache agressif
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
