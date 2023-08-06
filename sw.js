const CACHE_NAME = 'decaux-startpage-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/favicon.ico',
    '/src/bookup.svg',
    '/src/cloudflare.svg',
    '/src/file-video2.svg',
    '/src/flyio.svg',
    '/src/habitica.svg',
    '/src/messenger.svg',
    '/src/radar.svg',
    '/src/timer.svg',
    '/fonts.css',
    '/style.css',
    'keys.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
