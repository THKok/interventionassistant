// ══════════════════════════════════════════════════════════════════
// InterventionAssistant — Service worker (offline ondersteuning)
//
// Strategie: NETWORK-FIRST.
//  - Mét internet: altijd de verse versie van de server, en de cache
//    wordt op de achtergrond bijgewerkt. Updates komen dus gewoon door.
//  - Zónder internet: de laatst gecachete versie wordt geserveerd.
//
// Bij een nieuwe release: verhoog CACHE_VERSION zodat oude caches
// worden opgeruimd (gebeurt automatisch bij activatie).
// ══════════════════════════════════════════════════════════════════

const CACHE_VERSION = 'ia-v1';

// Kernbestanden die direct bij installatie worden gecachet,
// zodat de site ook offline werkt op pagina's die je nog niet bezocht.
const CORE = [
  '/',
  '/index.html',
  '/style.css',
  '/nav.js',
  '/search.js',
  '/lang.js',
  '/procedures.js',
  '/materiaal.js',
  '/verslag.js',
  '/fuse.min.js',
  '/favicon-32.png',
  '/site.webmanifest',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  // Alleen GET-verzoeken van de eigen site cachen
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then((res) => {
        // Vers van het netwerk: cache bijwerken en teruggeven
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
        }
        return res;
      })
      .catch(() =>
        // Offline: uit de cache, met de homepage als vangnet voor navigaties
        caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('/index.html') : undefined))
      )
  );
});
