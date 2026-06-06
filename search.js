// InterventionAssistant — Zoekfunctie
// Detecteert automatisch of we in een submap zitten

function initSearch() {
  if (typeof Fuse === 'undefined' || typeof PROCEDURES === 'undefined') {
    setTimeout(initSearch, 50);
    return;
  }

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

  // Detecteer submap: pad heeft meer dan 2 segmenten na de hostname
  const pathParts = window.location.pathname.replace(/^\//, '').split('/');
  const inSubdir = pathParts.length >= 2 && pathParts[pathParts.length - 1] !== '';
  const prefix = inSubdir ? '../' : '';

  function renderResults(query, container) {
    if (!query || query.length < 2) {
      container.classList.remove('open');
      container.innerHTML = '';
      return;
    }

    const results = fuse.search(query).slice(0, 6);

    if (results.length === 0) {
      container.innerHTML = `<div class="search-no-result">Geen resultaten voor "${query}"</div>`;
      container.classList.add('open');
      return;
    }

    container.innerHTML = results.map(r => {
      const p = r.item;
      const url = prefix + p.url;
      return `<a class="search-result-item" href="${url}">
        <div>
          <div class="search-result-name">${p.naam}</div>
          <div class="search-result-cat">${p.categorie} · ${p.subcategorie}</div>
        </div>
        <span class="search-result-tag ${p.tag}">${p.categorie}</span>
      </a>`;
    }).join('');

    container.classList.add('open');
  }

  // Nav zoekbalk
  const navInput = document.querySelector('.nav-search-input');
  const navResults = document.querySelector('.nav-search-wrap .search-results');

  if (navInput && navResults) {
    navInput.addEventListener('input', () => renderResults(navInput.value.trim(), navResults));
    navInput.addEventListener('focus', () => {
      if (navInput.value.trim().length >= 2) navResults.classList.add('open');
    });
  }

  // Hero zoekbalk (alleen homepage)
  const heroInput = document.querySelector('.hero-search input');
  const heroResults = document.querySelector('.hero-results');
  const heroBtn = document.querySelector('.hero-search button');

  if (heroInput && heroResults) {
    heroInput.addEventListener('input', () => renderResults(heroInput.value.trim(), heroResults));
    heroInput.addEventListener('focus', () => {
      if (heroInput.value.trim().length >= 2) heroResults.classList.add('open');
    });
    if (heroBtn) {
      heroBtn.addEventListener('click', () => renderResults(heroInput.value.trim(), heroResults));
    }
  }

  // Sluit dropdowns bij klik buiten
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search-wrap') && navResults) {
      navResults.classList.remove('open');
    }
    if (!e.target.closest('.hero-search') && heroResults) {
      heroResults.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
