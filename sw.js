// ══════════════════════════════════════════════════════════════════
// InterventionAssistant — Service worker (offline ondersteuning)
//
// Strategie: NETWORK-FIRST met volledige pre-cache.
//  - Mét internet: altijd de verse versie van de server; de cache wordt
//    op de achtergrond bijgewerkt. Updates komen dus gewoon door.
//  - Zónder internet: de gecachete versie wordt geserveerd. Alle 39
//    pagina's staan vooraf in de cache, dus ook pagina's die je nog
//    nooit hebt geopend werken offline.
//
// Bij een nieuwe release: verhoog CACHE_VERSION. Oude caches worden dan
// automatisch opgeruimd bij activatie.
// ══════════════════════════════════════════════════════════════════

const CACHE_VERSION = 'ia-v3';
const FONT_CACHE    = 'ia-fonts-v1';   // fonts wijzigen niet; apart van de site-cache

// Alles wat de site nodig heeft om volledig offline te werken.
const CORE = [
  '/',
  '/disclaimer.html',
  '/index.html',
  '/materiaal/angioset.html',
  '/materiaal/antistolling.html',
  '/materiaal/closure-devices.html',
  '/materiaal/draden.html',
  '/materiaal/embolisatiematerialen.html',
  '/materiaal/index.html',
  '/materiaal/sheaths-en-katheters.html',
  '/mdo/aorta-mdo.html',
  '/mdo/index.html',
  '/mdo/shunt-mdo.html',
  '/mdo/vaatchirurgie-mdo.html',
  '/mdo/visceraal-mdo.html',
  '/non-vasculair/abcesdrainage.html',
  '/non-vasculair/ablatie-schildklier.html',
  '/non-vasculair/ascitesdrainage.html',
  '/non-vasculair/biliary-stenting.html',
  '/non-vasculair/galblaasdrain.html',
  '/non-vasculair/gastrostomie.html',
  '/non-vasculair/jj-katheter.html',
  '/non-vasculair/leverbiopt.html',
  '/non-vasculair/morel-lavallee.html',
  '/non-vasculair/nefrostomie.html',
  '/non-vasculair/nierbiopt.html',
  '/non-vasculair/permanente-ascitesdrain.html',
  '/non-vasculair/ptcd.html',
  '/non-vasculair/schildkliercyste.html',
  '/non-vasculair/thoraxdrainage.html',
  '/non-vasculair/wissel-nefrodrain.html',
  '/oncologie/ablatie-lever.html',
  '/vasculair/bae.html',
  '/vasculair/evar.html',
  '/vasculair/pae.html',
  '/vasculair/picc-lijn.html',
  '/vasculair/port-a-cath.html',
  '/vasculair/pta-beenvaten.html',
  '/vasculair/rtpa-trombolyse.html',
  '/vasculair/uterusembolisatie-electief.html',
  '/vasculair/uterusembolisatie.html',
  '/style.css',
  '/nav.js',
  '/search.js',
  '/lang.js',
  '/procedures.js',
  '/materiaal.js',
  '/verslag.js',
  '/fuse.min.js',
  '/site.webmanifest',
  '/favicon.ico',
  '/favicon-16.png',
  '/favicon-32.png',
  '/favicon-48.png',
  '/favicon-192.png',
  '/favicon-512.png',
  '/apple-touch-icon.png',
  '/image/materiaal/closure-devices/Angioseal1.webp',
  '/image/materiaal/closure-devices/Angioseal2.webp',
  '/image/materiaal/closure-devices/Angioseal3.webp',
  '/image/non-vasculair/jj-katheter/JJ1.webp',
  '/image/non-vasculair/jj-katheter/JJ2.webp',
  '/image/non-vasculair/jj-katheter/JJ3.webp',
  '/image/non-vasculair/jj-katheter/JJ4.webp',
  '/image/non-vasculair/nefrostomie/Nefrostomie1.webp',
  '/image/non-vasculair/nefrostomie/Nefrostomie2.webp',
  '/image/non-vasculair/nefrostomie/Nefrostomie3.webp',
  '/image/non-vasculair/nefrostomie/Nefrostomie4.webp',
  '/image/non-vasculair/wissel-nefrodrain/gitkeep',
  '/image/non-vasculair/wissel-nefrodrain/nefrodrainwissel1.jpg',
  '/image/non-vasculair/wissel-nefrodrain/nefrodrainwissel2.jpg',
  '/image/vasculair/evar/EVAR1.webp',
  '/image/vasculair/evar/EVAR2.webp',
  '/image/vasculair/evar/EVAR3.webp',
  '/image/vasculair/evar/EVAR4.webp',
  '/image/vasculair/picc-lijn/PICCdoorlichting.jpg',
  '/image/vasculair/picc-lijn/PICCecho1.jpg',
  '/image/vasculair/picc-lijn/PICCecho2.jpg',
  '/image/vasculair/picc-lijn/PICCecho4.jpg',
  '/image/vasculair/picc-lijn/PICCecho5.jpg',
  '/image/vasculair/picc-lijn/gitkeep',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      // Per bestand cachen: één ontbrekend bestand mag de hele
      // installatie niet laten mislukken (addAll is alles-of-niets).
      .then((c) => Promise.all(
        CORE.map((url) => c.add(url).catch((err) => {
          console.warn('[sw] niet gecachet:', url, err);
        }))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_VERSION && k !== FONT_CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  // ── Google Fonts: cache-first ──────────────────────────────────
  // Externe bestanden die nooit wijzigen. Bij het eerste online bezoek
  // worden ze opgeslagen; daarna komen ze uit de cache en werkt de
  // typografie ook in vliegtuigmodus.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONT_CACHE).then(async (c) => {
        const hit = await c.match(req);
        if (hit) return hit;
        try {
          const res = await fetch(req);
          // Ook 'opaque' responses (CORS) mogen in de cache
          if (res) c.put(req, res.clone());
          return res;
        } catch {
          return hit || Response.error();
        }
      })
    );
    return;
  }

  // ── Eigen site: network-first ──────────────────────────────────
  if (url.origin !== self.location.origin) return;

  // BELANGRIJK: match op URL-pad, niet op het Request-object zelf.
  // Een navigatie-Request heeft andere mode/credentials dan de Request
  // waarmee we tijdens install hebben gecachet, waardoor caches.match(req)
  // faalt en alles terugviel op de homepage.
  const key = url.pathname === '/' ? '/' : url.pathname;

  e.respondWith(
    fetch(req)
      .then((res) => {
        // Vers van het netwerk: cache bijwerken en teruggeven
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(key, clone));
        }
        return res;
      })
      .catch(async () => {
        // Offline: zoek op pad in de cache
        const cache = await caches.open(CACHE_VERSION);

        let hit = await cache.match(key);
        if (hit) return hit;

        // Sommige servers/links serveren een map zonder /index.html
        if (key.endsWith('/')) {
          hit = await cache.match(key + 'index.html');
          if (hit) return hit;
        }

        // Extensieloze URL (bv. bij Vercel 'cleanUrls'): probeer .html
        if (!key.endsWith('/') && !key.includes('.')) {
          hit = await cache.match(key + '.html');
          if (hit) return hit;
        }

        // Laatste redmiddel: alleen voor navigaties, en alleen als de
        // pagina echt niet in de cache zit.
        if (req.mode === 'navigate') {
          return (await cache.match('/index.html')) || Response.error();
        }
        return Response.error();
      })
  );
});
