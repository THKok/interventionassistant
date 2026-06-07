// ═══════════════════════════════════════════
// InterventionAssistant — Gedeelde navigatie
// Pas hier de nav aan en alle pagina's volgen
// ═══════════════════════════════════════════

const NAV_ITEMS = [
  {
    label: 'Vasculair',
    items: [
      { label: 'PTA ± stent beenvaten',       url: 'vasculair/pta-beenvaten.html' },
      { label: 'rTPA acuut bedreigd been',     url: 'vasculair/rtpa-trombolyse.html', badge: 'URGENT' },
      { label: 'Port-a-cath plaatsing',        url: 'vasculair/port-a-cath.html' },
    ]
  },
  {
    label: 'Non-vasculair',
    items: [
      { label: 'Percutane nefrostomie',        url: 'non-vasculair/nefrostomie.html' },
      { label: 'Abcesdrainage',                url: 'non-vasculair/abcesdrainage.html', soon: true },
      { label: 'PTCD galwegdrainage',          url: 'non-vasculair/ptcd.html', soon: true },
    ]
  },
  {
    label: 'MDO',
    dot: '#6040a0',
    items: [
      { label: 'Shunt MDO',                    url: 'mdo/shunt-mdo.html' },
      { label: 'Vaatchirurgie MDO',            url: 'mdo/vaatchirurgie-mdo.html', soon: true },
    ]
  },
  {
    label: 'Materiaal',
    dot: '#6040a0',
    items: [
      { label: 'Overzicht materiaal',          url: 'materiaal/index.html' },
      { label: 'Angioset',                     url: 'materiaal/angioset.html' },
      { label: 'Katheters',                    url: 'materiaal/katheters.html' },
      { label: 'Draden',                       url: 'materiaal/draden.html' },
    ]
  },
  {
    label: 'Oncologie',
    disabled: true,
    items: []
  }
];

// Detecteer of we in een submap zitten
function getPrefix() {
  const parts = window.location.pathname.replace(/^\//, '').split('/');
  return parts.length >= 2 && parts[parts.length - 1] !== '' ? '../' : '';
}

function getDotClass(label) {
  if (label === 'Vasculair') return 'vasc';
  if (label === 'Non-vasculair') return 'nonvasc';
  if (label === 'MDO' || label === 'Materiaal') return 'mat';
  return 'vasc';
}

function buildNav() {
  const prefix = getPrefix();
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Logo
  const logo = `<a class="logo" href="${prefix}index.html">Intervention<span>Assistant</span></a>`;

  // Dropdown items
  const dropdowns = NAV_ITEMS.map((group, i) => {
    if (group.disabled) {
      return `<div class="nav-item">
        <button class="nav-btn" style="opacity:0.4;cursor:default">${group.label}</button>
      </div>`;
    }

    const ddId = 'dd-' + i;
    const itemsHTML = group.items.map(item => {
      const url = prefix + item.url;
      const dotColor = group.dot ? `style="background:${group.dot}"` : '';
      const dotClass = group.dot ? '' : getDotClass(group.label);

      if (item.soon) {
        return `<div class="dropdown-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotColor} style="opacity:0.3"></span>
          ${item.label}
          <span style="font-size:0.68rem;margin-left:auto">binnenkort</span>
        </div>`;
      }

      const badge = item.badge
        ? `<span class="dropdown-badge">${item.badge}</span>`
        : '';

      return `<div class="dropdown-item" onclick="window.location='${url}'">
        <span class="dropdown-dot ${dotClass}" ${dotColor}></span>
        ${item.label}${badge}
      </div>`;
    }).join('\n');

    return `<div class="nav-item">
      <button class="nav-btn" onclick="toggleDropdown('${ddId}')">${group.label} <span class="chevron">▾</span></button>
      <div class="dropdown" id="${ddId}">
        ${itemsHTML}
      </div>
    </div>`;
  }).join('\n');

  // Zoekbalk
  const search = `<div class="nav-search-wrap">
    <input class="nav-search-input" placeholder="⌕ Zoek procedure…" autocomplete="off">
    <div class="search-results"></div>
  </div>`;

  nav.innerHTML = logo + dropdowns + search;

  // Dropdown logica
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));
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

// Bouw nav zodra DOM klaar is
document.addEventListener('DOMContentLoaded', buildNav);
