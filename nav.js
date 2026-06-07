// ═══════════════════════════════════════════
// InterventionAssistant — Gedeelde navigatie
// Pas hier de nav aan en alle pagina's volgen
// ═══════════════════════════════════════════

const NAV_ITEMS = [
  {
    label: 'Vasculair',
    items: [
      { label: 'PTA ± stent beenvaten',   url: 'vasculair/pta-beenvaten.html' },
      { label: 'rTPA acuut bedreigd been', url: 'vasculair/rtpa-trombolyse.html', badge: 'URGENT' },
      { label: 'Port-a-cath plaatsing',   url: 'vasculair/port-a-cath.html' },
    ]
  },
  {
    label: 'Non-vasculair',
    items: [
      { label: 'Percutane nefrostomie',   url: 'non-vasculair/nefrostomie.html' },
      { label: 'Abcesdrainage',           url: 'non-vasculair/abcesdrainage.html', soon: true },
      { label: 'PTCD galwegdrainage',     url: 'non-vasculair/ptcd.html', soon: true },
    ]
  },
  {
    label: 'MDO',
    dot: '#6040a0',
    items: [
      { label: 'Shunt MDO',              url: 'mdo/shunt-mdo.html' },
      { label: 'Vaatchirurgie MDO',      url: 'mdo/vaatchirurgie-mdo.html', soon: true },
    ]
  },
  {
    label: 'Materiaal',
    dot: '#6040a0',
    items: [
      { label: 'Overzicht materiaal',    url: 'materiaal/index.html' },
      { label: 'Angioset',              url: 'materiaal/angioset.html' },
      { label: 'Katheters',             url: 'materiaal/katheters.html' },
      { label: 'Draden',                url: 'materiaal/draden.html' },
    ]
  }
  // Oncologie: wegggehaald — voeg toe als er pagina's klaar zijn
];

function getPrefix() {
  const parts = window.location.pathname.replace(/^\//, '').split('/');
  return parts.length >= 2 && parts[parts.length - 1] !== '' ? '../' : '';
}

function getDotClass(label) {
  if (label === 'Vasculair') return 'vasc';
  if (label === 'Non-vasculair') return 'nonvasc';
  return 'mat';
}

function buildNav() {
  const prefix = getPrefix();
  const nav = document.querySelector('nav');
  if (!nav) return;

  const logo = `<a class="logo" href="${prefix}index.html">Intervention<span>Assistant</span></a>`;

  // Desktop dropdowns
  const dropdowns = NAV_ITEMS.map((group, i) => {
    const ddId = 'dd-' + i;
    const dotClass = group.dot ? '' : getDotClass(group.label);
    const dotStyle = group.dot ? `style="background:${group.dot}"` : '';

    const itemsHTML = group.items.map(item => {
      const url = prefix + item.url;
      if (item.soon) {
        return `<div class="dropdown-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotStyle} style="opacity:0.3"></span>
          ${item.label}
          <span style="font-size:0.68rem;margin-left:auto">binnenkort</span>
        </div>`;
      }
      const badge = item.badge ? `<span class="dropdown-badge">${item.badge}</span>` : '';
      return `<div class="dropdown-item" onclick="window.location='${url}'">
        <span class="dropdown-dot ${dotClass}" ${dotStyle}></span>
        ${item.label}${badge}
      </div>`;
    }).join('');

    return `<div class="nav-item">
      <button class="nav-btn" onclick="toggleDropdown('${ddId}')">${group.label} <span class="chevron">▾</span></button>
      <div class="dropdown" id="${ddId}">${itemsHTML}</div>
    </div>`;
  }).join('');

  // Zoekbalk
  const search = `<div class="nav-search-wrap">
    <input class="nav-search-input" placeholder="⌕ Zoek procedure…" autocomplete="off">
    <div class="search-results"></div>
  </div>`;

  // Hamburger knop (mobiel)
  const hamburger = `<button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>`;

  // Mobiel menu — alle items als platte lijst
  const mobileItems = NAV_ITEMS.map(group => {
    const dotClass = group.dot ? '' : getDotClass(group.label);
    const dotStyle = group.dot ? `style="background:${group.dot}"` : '';

    const header = `<div class="mob-group-label">${group.label}</div>`;
    const items = group.items.map(item => {
      const url = prefix + item.url;
      if (item.soon) {
        return `<div class="mob-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotStyle} style="opacity:0.3"></span>
          ${item.label} <span style="font-size:0.68rem;margin-left:auto">binnenkort</span>
        </div>`;
      }
      const badge = item.badge ? `<span class="dropdown-badge">${item.badge}</span>` : '';
      return `<div class="mob-item" onclick="window.location='${url}';closeMobileMenu()">
        <span class="dropdown-dot ${dotClass}" ${dotStyle}></span>
        ${item.label}${badge}
      </div>`;
    }).join('');

    return header + items;
  }).join('');

  const mobileMenu = `<div class="mobile-menu" id="mobile-menu">
    <div class="mob-search-wrap">
      <input class="mob-search-input" placeholder="⌕ Zoek procedure…" autocomplete="off">
    </div>
    ${mobileItems}
  </div>`;

  nav.innerHTML = logo + `<div class="nav-links">` + dropdowns + `</div>` + search + hamburger;

  // Voeg mobiel menu in na nav
  const existing = document.getElementById('mobile-menu');
  if (existing) existing.remove();
  nav.insertAdjacentHTML('afterend', mobileMenu);

  // Sluit dropdowns bij klik buiten
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));
    }
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
      closeMobileMenu();
    }
  });
}

function toggleDropdown(id) {
  const dd = document.getElementById(id);
  const btn = dd.previousElementSibling;
  const isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));
  if (!isOpen) { dd.classList.add('open'); btn.classList.add('open'); }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.querySelector('.hamburger');
  if (menu) {
    menu.classList.toggle('open');
    ham.classList.toggle('open');
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.querySelector('.hamburger');
  if (menu) { menu.classList.remove('open'); }
  if (ham) { ham.classList.remove('open'); }
}

document.addEventListener('DOMContentLoaded', buildNav);
