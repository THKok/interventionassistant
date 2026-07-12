// ═══════════════════════════════════════════
// InterventionAssistant — Taalwisseling
// Gebruik: data-nl="Nederlandse tekst" data-en="English text"
// op elk element dat vertaald moet worden
// ═══════════════════════════════════════════

const LANG_DEFAULT = 'nl';

function getLang() {
  return localStorage.getItem('ia-lang') || LANG_DEFAULT;
}

function setLang(lang) {
  localStorage.setItem('ia-lang', lang);
  applyLang(lang);
  updateLangBtn(lang);
}

function applyLang(lang) {
  // Vertaal alle elementen met data-nl / data-en
  document.querySelectorAll('[data-nl]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang) || el.getAttribute('data-nl');
  });

  // Vertaal placeholder attributen
  document.querySelectorAll('[data-placeholder-nl]').forEach(el => {
    el.placeholder = el.getAttribute('data-placeholder-' + lang) || el.getAttribute('data-placeholder-nl');
  });

  // Zet lang attribuut op html element
  document.documentElement.lang = lang;

  // Verslag-placeholders opnieuw invulbaar maken (innerHTML is zojuist
  // overschreven vanuit het data-attribuut, dus de invulvelden zijn weg)
  if (typeof enhanceVerslagen === 'function') {
    document.querySelectorAll('.verslag').forEach(v => { delete v.dataset.enhanced; });
    enhanceVerslagen();
  }
}

function updateLangBtn(lang) {
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.textContent = lang === 'nl' ? 'EN' : 'NL';
    btn.title = lang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands';
  }
}

function toggleLang() {
  const current = getLang();
  setLang(current === 'nl' ? 'en' : 'nl');
}

// Initialiseer taal zodra DOM klaar is
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
  updateLangBtn(getLang());
});
