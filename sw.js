const CACHE_NAME = 'f3f-manager-v5.24-1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './manifest.json'
    // './icon.png'  <-- Décommente cette ligne quand tu auras mis ton image !
];

// INSTALLATION : On met en cache
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Mise en cache des fichiers');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// ACTIVATION : On nettoie les vieux caches
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Suppression vieux cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

// INTERCEPTION : On sert le cache si hors-ligne
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then((cacheRes) => {
            return cacheRes || fetch(evt.request);
        })
    );
});