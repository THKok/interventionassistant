// ══════════════════════════════════════════════════════════════════
// InterventionAssistant — Verslag-interactie (gedeeld)
//
// 1. Maakt [placeholders] in elk standaardverslag klikbaar en invulbaar
//    (Tab/Enter springt naar het volgende veld).
// 2. copyVerslag() kopieert de ÍNGEVULDE tekst; niet-ingevulde velden
//    blijven als [placeholder] staan.
// 3. Voegt automatisch een ↺-resetknop toe naast de kopieerknop.
// 4. Werkt samen met lang.js: na een taalwissel wordt opnieuw
//    ge-enhanced (ingevulde waarden vervallen dan, want de tekst wisselt).
// ══════════════════════════════════════════════════════════════════

function enhanceVerslagen() {
  document.querySelectorAll('.verslag').forEach(el => {
    if (el.dataset.enhanced === '1') return;
    // Vervang [xxx] door invulbare spans (verslag-body is platte tekst).
    // Geneste haken zoals [optionele zin met [veld] erin] blijven buiten
    // beschouwing: alleen de binnenste [velden] worden invulbaar.
    el.innerHTML = el.innerHTML.replace(/\[([^\][\n]{1,80})\]/g, (m, inner) =>
      `<span class="ph" contenteditable="true" spellcheck="false" tabindex="0" data-orig="${inner.replace(/"/g,'&quot;')}">[${inner}]</span>`
    );
    el.dataset.enhanced = '1';

    el.querySelectorAll('.ph').forEach(ph => {
      ph.addEventListener('focus', () => {
        // Selecteer de volledige inhoud zodat typen direct vervangt
        const r = document.createRange(); r.selectNodeContents(ph);
        const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      });
      ph.addEventListener('input', () => {
        const filled = ph.textContent.trim() !== '' &&
                       ph.textContent.trim() !== '[' + ph.dataset.orig + ']';
        ph.classList.toggle('filled', filled);
      });
      ph.addEventListener('blur', () => {
        if (ph.textContent.trim() === '') {
          ph.textContent = '[' + ph.dataset.orig + ']';
          ph.classList.remove('filled');
        }
      });
      ph.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === 'Tab') {
          e.preventDefault();
          const all = [...el.querySelectorAll('.ph')];
          const i = all.indexOf(ph);
          const next = e.shiftKey ? all[i - 1] : all[i + 1];
          if (next) next.focus();
          else ph.blur();
        }
      });
    });

    // Hint + resetknop (eenmalig, dynamisch — pagina's blijven ongewijzigd)
    const wrap = el.closest('.verslag-wrap');
    if (wrap && !wrap.querySelector('.verslag-hint')) {
      const curLang = (typeof localStorage !== 'undefined' && localStorage.getItem('ia-lang')) || 'nl';
      const hint = document.createElement('div');
      hint.className = 'verslag-hint';
      hint.setAttribute('data-nl', 'Tip: klik op een [veld] om in te vullen — Tab springt naar het volgende veld');
      hint.setAttribute('data-en', 'Tip: click a [field] to fill it in — Tab jumps to the next field');
      hint.textContent = curLang === 'en'
        ? 'Tip: click a [field] to fill it in — Tab jumps to the next field'
        : 'Tip: klik op een [veld] om in te vullen — Tab springt naar het volgende veld';
      wrap.insertBefore(hint, el);
    }
    const copyBtn = wrap ? wrap.querySelector('.copy-btn') : null;
    if (copyBtn && !wrap.querySelector('.reset-btn')) {
      const rb = document.createElement('button');
      rb.className = 'reset-btn';
      rb.title = 'Leeg alle velden';
      rb.innerHTML = '↺';
      rb.onclick = () => resetVerslag(el.id);
      copyBtn.after(rb);
    }
  });
}

function resetVerslag(verslagId) {
  const el = document.getElementById(verslagId);
  if (!el) return;
  el.querySelectorAll('.ph').forEach(ph => {
    ph.textContent = '[' + ph.dataset.orig + ']';
    ph.classList.remove('filled');
  });
}

function copyVerslag(verslagId, btnId) {
  const el = document.getElementById(verslagId);
  if (!el) return;
  // textContent van de live DOM = tekst mét ingevulde waarden;
  // de regeleinden staan als echte \n in de brontekst (pre-wrap)
  const text = el.textContent;
  const lang = (typeof localStorage !== 'undefined' && localStorage.getItem('ia-lang')) || 'nl';
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.innerHTML = lang === 'en' ? '✓ Copied' : '✓ Gekopieerd';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '⎘ <span data-nl="Kopieer" data-en="Copy">' +
        (lang === 'en' ? 'Copy' : 'Kopieer') + '</span>';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// Entrypoint: lang.js roept enhanceVerslagen() aan vanuit applyLang(),
// dat op elke pagina bij DOMContentLoaded én bij elke taalwissel draait.
// Een eigen listener hier zou dubbel werk betekenen (applyLang reset de
// innerHTML en zou de eerste enhancement direct weer wissen).
