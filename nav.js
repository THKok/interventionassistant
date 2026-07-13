// ═══════════════════════════════════════════
// InterventionAssistant — Gedeelde navigatie
// Pas hier aan en alle pagina's volgen
// ═══════════════════════════════════════════

const NAV_ITEMS = [
  {
    label: 'Vasculair', label_en: 'Vascular',
    items: [
      { header: 'Arterieel', header_en: 'Arterial' },
      { label: 'EVAR', label_en: 'EVAR',  url: 'vasculair/evar.html' },
      { label: 'PTA ± stent beenvaten', label_en: 'PTA ± stent leg arteries',        url: 'vasculair/pta-beenvaten.html' },
      { label: 'rTPA acuut bedreigd been', label_en: 'rTPA acute limb ischaemia',      url: 'vasculair/rtpa-trombolyse.html', badge: 'URGENT' },
      { header: 'Embolisatie', header_en: 'Embolisation' },
      { label: 'Bronchiaalarterie embolisatie', label_en: 'Bronchial artery embolisation',  url: 'vasculair/bae.html' },
      { label: 'Prostaatembolisatie', label_en: 'Prostate embolisation (PAE)',           url: 'vasculair/pae.html' },
      { label: 'Uterusembolisatie bij fluxus', label_en: 'Uterine embolisation (PPH)',  url: 'vasculair/uterusembolisatie.html' },
      { label: 'Uterusembolisatie bij myomen/adenomyose', label_en: 'Uterine embolisation (fibroids/adenomyosis)',  url: 'vasculair/uterusembolisatie-electief.html' },
      { header: 'Veneuze toegang', header_en: 'Venous access' },
      { label: 'PICC-lijn plaatsing', label_en: 'PICC line placement',           url: 'vasculair/picc-lijn.html' },
      { label: 'Port-a-cath plaatsing', label_en: 'Port-a-cath placement',         url: 'vasculair/port-a-cath.html' },
    ]
  },
  {
    label: 'Non-vasculair', label_en: 'Non-vascular',
    items: [
      { header: 'Urogenitaal', header_en: 'Urogenital' },
      { label: 'Antegrade JJ-katheter', label_en: 'Antegrade JJ stent',    url: 'non-vasculair/jj-katheter.html' },
      { label: 'Nierbiopt', label_en: 'Renal biopsy',                url: 'non-vasculair/nierbiopt.html' },
      { label: 'Percutane nefrostomie', label_en: 'Percutaneous nephrostomy',  url: 'non-vasculair/nefrostomie.html' },
      { label: 'Wissel nefrodrain', label_en: 'Nephrostomy exchange',        url: 'non-vasculair/wissel-nefrodrain.html' },
      { header: 'Lever & galwegen', header_en: 'Liver & biliary' },
      { label: 'Galblaasdrainage (cholecystostomie)', label_en: 'Cholecystostomy', url: 'non-vasculair/galblaasdrain.html' },
      { label: 'Leverbiopt', label_en: 'Liver biopsy',                url: 'non-vasculair/leverbiopt.html' },
      { label: 'PTCD galwegdrainage', label_en: 'PTCD biliary drainage',    url: 'non-vasculair/ptcd.html' },
      { label: 'Stentplaatsing galwegen', label_en: 'Biliary stenting',         url: 'non-vasculair/biliary-stenting.html' },
      { header: 'Drainage', header_en: 'Drainage' },
      { label: 'Abcesdrainage', label_en: 'Abscess drainage',            url: 'non-vasculair/abcesdrainage.html' },
      { label: 'Ascitesdrainage', label_en: 'Ascites drainage',          url: 'non-vasculair/ascitesdrainage.html' },
      { label: 'Permanente ascitesdrain (IPC)', label_en: 'Indwelling peritoneal catheter (IPC)', url: 'non-vasculair/permanente-ascitesdrain.html' },
      { label: 'Thoraxdrainage / pleurapunctie', label_en: 'Thoracic drainage / thoracentesis', url: 'non-vasculair/thoraxdrainage.html' },
      { header: 'Overig', header_en: 'Other' },
      { label: 'Percutane gastrostomie (PRG)', label_en: 'Percutaneous gastrostomy (PRG)', url: 'non-vasculair/gastrostomie.html' },
      { label: 'Schildklierablatie (RFA)', label_en: 'Thyroid ablation (RFA)', url: 'non-vasculair/ablatie-schildklier.html' },
      { label: 'Sclerosering Morel-Lavallée', label_en: 'Morel-Lavallée sclerotherapy', url: 'non-vasculair/morel-lavallee.html' },
      { label: 'Sclerosering schildkliercyste', label_en: 'Thyroid cyst sclerotherapy', url: 'non-vasculair/schildkliercyste.html' },
    ]
  },
  {
    label: 'Oncologie', label_en: 'Oncology',
    dot: '#7b4fa6',
    items: [
      { label: 'Leverablatie (RFA/MWA)', label_en: 'Liver ablation (RFA/MWA)', url: 'oncologie/ablatie-lever.html' },
      { label: 'TACE', label_en: 'TACE',              url: 'oncologie/tace.html', soon: true },
      { label: 'Y-90 / SIRT', label_en: 'Y-90 / SIRT',       url: 'oncologie/y90.html', soon: true },
    ]
  },
  {
    label: 'MDO', label_en: 'MDT',
    dot: '#6040a0',
    items: [
      { label: 'Aorta MDO', label_en: 'Aortic MDT', url: 'mdo/aorta-mdo.html' },
      { label: 'Shunt MDO', label_en: 'Shunt MDT',         url: 'mdo/shunt-mdo.html' },
      { label: 'Vaatchirurgie MDO — Bekken/Been', label_en: 'Vascular MDT — Pelvic/Leg', url: 'mdo/vaatchirurgie-mdo.html' },
      { label: 'Visceraal MDO — Mesenteriaal', label_en: 'Visceral MDT — Mesenteric', url: 'mdo/visceraal-mdo.html' },
    ]
  },
  {
    label: 'Materiaal', label_en: 'Equipment',
    dot: '#6040a0',
    items: [
      { label: 'Overzicht materiaal', label_en: 'Equipment overview', url: 'materiaal/index.html' },
      { label: 'Antistolling bij interventies', label_en: 'Anticoagulation in interventions', url: 'materiaal/antistolling.html' },
      { label: 'Angioset', label_en: 'Angio set',            url: 'materiaal/angioset.html' },
      { label: 'Closure devices', label_en: 'Closure devices', url: 'materiaal/closure-devices.html' },
      { label: 'Draden', label_en: 'Guidewires',              url: 'materiaal/draden.html' },
      { label: 'Embolisatiematerialen', label_en: 'Embolization materials', url: 'materiaal/embolisatiematerialen.html' },
      { label: 'Sheaths & Katheters', label_en: 'Sheaths & Catheters', url: 'materiaal/sheaths-en-katheters.html' },
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

// Veilige taalbepaling (lang.js kan later laden)
function navLang() {
  try { return (typeof getLang === 'function') ? getLang() : (localStorage.getItem('ia-lang') || 'nl'); }
  catch (e) { return 'nl'; }
}

// Helper: render een tweetalig label als <span> met data-nl/data-en
function biLabel(nl, en) {
  const enText = (en || nl).replace(/"/g, '&quot;');
  const nlText = nl.replace(/"/g, '&quot;');
  return `<span data-nl="${nlText}" data-en="${enText}">${navLang() === 'en' ? (en || nl) : nl}</span>`;
}

// "binnenkort" / "coming soon" tweetalig
function biSoon() {
  return `<span data-nl="binnenkort" data-en="coming soon">${navLang() === 'en' ? 'coming soon' : 'binnenkort'}</span>`;
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
      if (item.header) {
        return `<div class="dropdown-subhead">${biLabel(item.header, item.header_en)}</div>`;
      }
      const url = prefix + item.url;
      if (item.soon) {
        return `<div class="dropdown-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotStyle} style="opacity:0.3"></span>
          ${biLabel(item.label, item.label_en)}<span style="font-size:0.68rem;margin-left:auto">${biSoon()}</span>
        </div>`;
      }
      const badge = item.badge ? `<span class="dropdown-badge">${item.badge}</span>` : '';
      return `<div class="dropdown-item" onclick="window.location='${url}'">
        <span class="dropdown-dot ${dotClass}" ${dotStyle}></span>
        ${biLabel(item.label, item.label_en)}${badge}
      </div>`;
    }).join('');

    return `<div class="nav-item">
      <button class="nav-btn" onclick="toggleDropdown('${ddId}')">${biLabel(group.label, group.label_en)} <span class="chevron">▾</span></button>
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
    onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">EN</button>
  <button id="theme-btn" class="theme-btn" onclick="toggleTheme()" title="Licht/donker" style="margin-left:0.35rem;flex-shrink:0;">🌙</button>`;

  const hamburger = `<button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>`;

  const mobileItems = NAV_ITEMS.map(group => {
    const dotClass = group.dot ? '' : getDotClass(group.label);
    const dotStyle = group.dot ? `style="background:${group.dot}"` : '';
    const header = `<div class="mob-group-label">${biLabel(group.label, group.label_en)}</div>`;
    const items = group.items.map(item => {
      if (item.header) {
        return `<div class="mob-subhead">${biLabel(item.header, item.header_en)}</div>`;
      }
      const url = prefix + item.url;
      if (item.soon) {
        return `<div class="mob-item" style="color:var(--muted);cursor:default">
          <span class="dropdown-dot ${dotClass}" ${dotStyle} style="opacity:0.3"></span>
          ${biLabel(item.label, item.label_en)}<span style="font-size:0.68rem;margin-left:auto">${biSoon()}</span>
        </div>`;
      }
      const badge = item.badge ? `<span class="dropdown-badge">${item.badge}</span>` : '';
      return `<div class="mob-item" onclick="window.location='${url}';closeMobileMenu()">
        <span class="dropdown-dot ${dotClass}" ${dotStyle}></span>
        ${biLabel(item.label, item.label_en)}${badge}
      </div>`;
    }).join('');
    return header + items;
  }).join('');

  const mobileMenu = `<div class="mobile-menu" id="mobile-menu">
    <div class="mob-search-wrap">
      <input class="mob-search-input" placeholder="⌕ Zoek procedure…" data-placeholder-nl="⌕ Zoek procedure…" data-placeholder-en="⌕ Search procedure…" autocomplete="off">
    </div>
    ${mobileItems}
  </div>`;

  nav.innerHTML = logo + `<div class="nav-links">` + dropdowns + `</div>` + search + hamburger;

  const existing = document.getElementById('mobile-menu');
  if (existing) existing.remove();
  nav.insertAdjacentHTML('afterend', mobileMenu);

  // Pas direct de juiste taal toe op de zojuist gebouwde nav (timing-onafhankelijk)
  if (typeof applyLang === 'function') {
    applyLang(navLang());
    if (typeof updateLangBtn === 'function') updateLangBtn(navLang());
  }

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

// ═══════════════════════════════════════════
// Donkere modus
// ═══════════════════════════════════════════
function initTheme() {
  const saved = localStorage.getItem('ia-theme');
  const theme = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
}
function toggleTheme() {
  const cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('ia-theme', next);
  updateThemeBtn();
}
function updateThemeBtn() {
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙';
}
initTheme();
document.addEventListener('DOMContentLoaded', updateThemeBtn);

// ═══════════════════════════════════════════
// Service worker — offline ondersteuning (PWA)
// ═══════════════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      // Controleer bij elke paginalading op een nieuwe versie
      reg.update().catch(() => {});
    }).catch(() => {});
  });

  // Zodra een nieuwe service worker het overneemt: één keer herladen,
  // zodat de verse bestanden meteen actief zijn.
  let herladen = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (herladen) return;
    herladen = true;
    window.location.reload();
  });
}
