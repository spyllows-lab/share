self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('contrato-cache').then(cache => {
      return cache.addAll([
        '/',
        '/Calculos_ContratoPF-OPAS_PWA.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
