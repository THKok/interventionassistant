// ═══════════════════════════════════════════
// InterventionAssistant — Gedeelde navigatie
// Pas hier aan en alle pagina's volgen
// ═══════════════════════════════════════════

const NAV_ITEMS = [
  {
    label: 'Vasculair',
    items: [
      { label: 'PTA ± stent beenvaten',        url: 'vasculair/pta-beenvaten.html' },
      { label: 'rTPA acuut bedreigd been',      url: 'vasculair/rtpa-trombolyse.html', badge: 'URGENT' },
      { label: 'Port-a-cath plaatsing',         url: 'vasculair/port-a-cath.html' },
      { label: 'PICC-lijn plaatsing',           url: 'vasculair/picc-lijn.html' },
      { label: 'Uterusembolisatie bij fluxus',  url: 'vasculair/uterusembolisatie.html' },
      { label: 'Prostaatembolisatie',           url: 'vasculair/pae.html' },
      { label: 'Bronchiaalarterie embolisatie',  url: 'vasculair/bae.html' },
    ]
  },
  {
    label: 'Non-vasculair',
    items: [
      { label: 'Percutane nefrostomie',  url: 'non-vasculair/nefrostomie.html' },
      { label: 'Wissel nefrodrain',        url: 'non-vasculair/wissel-nefrodrain.html' },
      { label: 'PTCD galwegdrainage',    url: 'non-vasculair/ptcd.html' },
      { label: 'Ascitesdrainage',          url: 'non-vasculair/ascitesdrainage.html' },
      { label: 'Nierbiopt',                url: 'non-vasculair/nierbiopt.html' },
      { label: 'Antegrade JJ-katheter',    url: 'non-vasculair/jj-katheter.html' },
      { label: 'Percutane gastrostomie (PRG)', url: 'non-vasculair/gastrostomie.html' },
      { label: 'Abcesdrainage',            url: 'non-vasculair/abcesdrainage.html' },
      { label: 'Thoraxdrainage / pleurapunctie', url: 'non-vasculair/thoraxdrainage.html' },
      { label: 'Biliary stenting',         url: 'non-vasculair/biliary-stenting.html' },
      { label: 'Sclerosering Morel-Lavallée', url: 'non-vasculair/morel-lavallee.html' },
      { label: 'Sclerosering schildkliercyste', url: 'non-vasculair/schildkliercyste.html' },
      { label: 'Schildklierablatie (RFA)', url: 'non-vasculair/ablatie-schildklier.html' },
    ]
  },
  {
    label: 'Oncologie',
    dot: '#7b4fa6',
    items: [
      { label: 'Leverablatie (RFA/MWA)', url: 'oncologie/ablatie-lever.html' },
      { label: 'TACE',              url: 'oncologie/tace.html', soon: true },
      { label: 'Y-90 / SIRT',       url: 'oncologie/y90.html', soon: true },
    ]
  },
  {
    label: 'MDO',
    dot: '#6040a0',
    items: [
      { label: 'Shunt MDO',         url: 'mdo/shunt-mdo.html' },
      { label: 'Vaatchirurgie MDO — Bekken/Been', url: 'mdo/vaatchirurgie-mdo.html' },
      { label: 'Aorta MDO — AAA', url: 'mdo/aorta-mdo.html' },
      { label: 'Visceraal MDO — Mesenteriaal', url: 'mdo/visceraal-mdo.html' },
    ]
  },
  {
    label: 'Materiaal',
    dot: '#6040a0',
    items: [
      { label: 'Overzicht materiaal', url: 'materiaal/index.html' },
      { label: 'Angioset',            url: 'materiaal/angioset.html' },
      { label: 'Katheters',           url: 'materiaal/katheters.html' },
      { label: 'Draden',              url: 'materiaal/draden.html' },
    ]
  }
];

function getPrefix() {
  const parts = window.location.pathname.replace(/^\//, '').split('/');
  return parts.length >= 2 && parts[parts.length - 1] !== '' ? '../' : '';
}

function getDotClass(label) {
  if (label === 'Vasculair') return 'vasc';
  if (label === 'Non-vasculair') return 'nonvasc';
  if (label === 'Oncologie') return 'onco';
  return 'mat';
}

function buildNav() {
  const prefix = getPrefix();
  const nav = document.querySelector('nav');
  if (!nav) return;

  const logo = `<a class="logo" href="${prefix}index.html">Intervention<span>Assistant</span></a>`;

  const dropdowns = NAV_ITEMS.map((group, i) => {
    const ddId = 'dd-' + i;
    const dotClass = group.dot ? '' : getDotClass(group.label);
    const dotStyle = group.dot ? `style="background:${group.dot}"` : '';

    const itemsHTML = group.items.map(item => {
      const url = prefix + item.url;
      if (item.soon) {
        return `<div class="dropdown-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotStyle} style="opacity:0.3"></span>
          ${item.label}<span style="font-size:0.68rem;margin-left:auto">binnenkort</span>
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

  const search = `<div class="nav-search-wrap">
    <input class="nav-search-input"
      placeholder="⌕ Zoek procedure…"
      data-placeholder-nl="⌕ Zoek procedure…"
      data-placeholder-en="⌕ Search procedure…"
      autocomplete="off">
    <div class="search-results"></div>
  </div>
  <button id="lang-btn" onclick="toggleLang()" title="Switch to English"
    style="background:none;border:1.5px solid var(--border);border-radius:5px;
    padding:0.28rem 0.6rem;font-size:0.72rem;font-weight:700;color:var(--muted);
    cursor:pointer;font-family:'Nunito',sans-serif;margin-left:0.35rem;
    flex-shrink:0;transition:all 0.12s;"
    onmouseover="this.style.borderColor='var(--blue)';this.style.color='var(--blue)'"
    onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">EN</button>`;

  const hamburger = `<button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>`;

  const mobileItems = NAV_ITEMS.map(group => {
    const dotClass = group.dot ? '' : getDotClass(group.label);
    const dotStyle = group.dot ? `style="background:${group.dot}"` : '';
    const header = `<div class="mob-group-label">${group.label}</div>`;
    const items = group.items.map(item => {
      const url = prefix + item.url;
      if (item.soon) {
        return `<div class="mob-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotStyle} style="opacity:0.3"></span>
          ${item.label}<span style="font-size:0.68rem;margin-left:auto">binnenkort</span>
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

  const existing = document.getElementById('mobile-menu');
  if (existing) existing.remove();
  nav.insertAdjacentHTML('afterend', mobileMenu);

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
  const dd = document.getElementById(id), btn = dd.previousElementSibling, isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));
  if (!isOpen) { dd.classList.add('open'); btn.classList.add('open'); }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.querySelector('.hamburger');
  if (menu) { menu.classList.toggle('open'); ham.classList.toggle('open'); }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.querySelector('.hamburger');
  if (menu) menu.classList.remove('open');
  if (ham) ham.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', buildNav);
// lang.js wordt apart geladen en initialiseert na buildNav

// Vercel Web Analytics
(function() {
  var s = document.createElement('script');
  s.defer = true;
  s.src = '/_vercel/insights/script.js';
  document.head.appendChild(s);
})();
