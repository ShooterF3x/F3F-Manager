// 1. Nom du cache - CHANGE CE NUMÉRO à chaque mise à jour sur GitHub
const CACHE_NAME = 'f3f-manager-v6.1';

// 2. Liste des fichiers à mettre en cache pour le mode hors-ligne
// Vérifie bien que les chemins correspondent à ton GitHub
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './icon.png'
  './icon-192.png',  
  './icon-512.png'
];

// 3. Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', event => {
  // Force le SW à devenir actif immédiatement sans attendre la fermeture des onglets
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert: ' + CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

// 4. Activation : Nettoyage des anciens caches (IMPORTANT pour les mises à jour)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Si le nom du cache trouvé ne correspond pas au nouveau nom, on le supprime
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Prend le contrôle des pages immédiatement
  );
});

// 5. Stratégie de Fetch : Cache-First (Sert le cache, puis met à jour si réseau dispo)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retourne la réponse du cache si elle existe, sinon fait une requête réseau
        return response || fetch(event.request);
      })
  );
});
