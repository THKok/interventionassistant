// ═══════════════════════════════════════════
// InterventionAssistant — Zoekfunctie
// Gebaseerd op Fuse.js (fuzzy search)
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // Fuse.js configuratie
  const fuse = new Fuse(PROCEDURES, {
    keys: [
      { name: 'naam', weight: 0.5 },
      { name: 'trefwoorden', weight: 0.4 },
      { name: 'subcategorie', weight: 0.1 }
    ],
    threshold: 0.35,
    includeScore: true,
    minMatchCharLength: 2
  });

  // ── Mobiel hamburger menu ──
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // ── Zoek in navigatiebalk ──
  const navInput = document.querySelector('.nav-search-input');
  const navResults = document.querySelector('.search-results');

  if (navInput && navResults) {
    navInput.addEventListener('input', () => {
      const q = navInput.value.trim();
      renderResults(q, navResults);
    });

    navInput.addEventListener('focus', () => {
      if (navInput.value.trim().length >= 2) navResults.classList.add('open');
    });

    document.addEventListener('click', (e) => {
      if (!navInput.contains(e.target) && !navResults.contains(e.target)) {
        navResults.classList.remove('open');
      }
    });
  }

  // ── Zoek in hero ──
  const heroInput = document.querySelector('.hero-search-bar input');
  const heroResults = document.querySelector('.hero-results');
  const heroButton = document.querySelector('.hero-search-bar button');

  if (heroInput && heroResults) {
    heroInput.addEventListener('input', () => {
      const q = heroInput.value.trim();
      renderResults(q, heroResults);
    });

    heroInput.addEventListener('focus', () => {
      if (heroInput.value.trim().length >= 2) heroResults.classList.add('open');
    });

    if (heroButton) {
      heroButton.addEventListener('click', () => {
        const q = heroInput.value.trim();
        if (q.length >= 2) renderResults(q, heroResults);
      });
    }

    document.addEventListener('click', (e) => {
      if (!heroInput.closest('.hero-search-bar').contains(e.target)) {
        heroResults.classList.remove('open');
      }
    });
  }

  // ── Resultaten renderen ──
  function renderResults(query, container) {
    if (query.length < 2) {
      container.classList.remove('open');
      container.innerHTML = '';
      return;
    }

    const results = fuse.search(query).slice(0, 6);

    if (results.length === 0) {
      container.innerHTML = '<div class="search-no-result">Geen procedures gevonden voor "' + query + '"</div>';
      container.classList.add('open');
      return;
    }

    container.innerHTML = results.map(r => {
      const p = r.item;
      return `
        <a class="search-result-item" href="${p.url}">
          <div>
            <div class="search-result-name">${p.naam}</div>
            <div class="search-result-cat">${p.categorie} · ${p.subcategorie}</div>
          </div>
          <span class="search-result-tag ${p.tag}">${p.categorie}</span>
        </a>
      `;
    }).join('');

    container.classList.add('open');
  }

  // ── Tabs ──
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      const parent = tab.closest('.proc-page') || tab.closest('.main-content');
      if (!parent) return;

      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = parent.querySelector('#' + target);
      if (panel) panel.classList.add('active');
    });
  });

});
