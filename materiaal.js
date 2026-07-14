// ══════════════════════════════════════════════════════════════════
// InterventionAssistant — Gedeelde materiaallijsten
// Pas een item hier één keer aan en alle pagina's volgen.
//
// GEBRUIK OP EEN PAGINA (in het Materiaal-accordion):
//   <tbody id="mat-body"></tbody>
//   ...
//   <script>buildMateriaal('mat-body', [ ...lijst... ]);</script>
//
// EEN LIJST bevat drie soorten entries:
//   1. Canoniek item (string)         → 'angioset'
//   2. Item met override (object)     → { ref:'drain_pigtail', spec_nl:'8.5 Fr', spec_en:'8.5 Fr', aantal:'1' }
//   3. Volledig eigen item (object)   → { nl:'...', en:'...', spec_nl:'...', spec_en:'...', aantal:'1' }
//   4. Sectiekop (object)             → { section_nl:'Optioneel', section_en:'Optional' }
//
// OVERRIDE-VELDEN (allemaal optioneel; vallen terug op de canonieke waarde):
//   spec_nl / spec_en  — andere specificatie voor deze procedure
//   aantal             — ander aantal (default '1'); gebruik 'Optioneel' / 'Set' / '—' / 'Voldoende'
//   link               — pad naar materiaal-referentiepagina (maakt de naam klikbaar)
//
// TWEETALIGHEID: de renderer zet zowel data-nl/data-en als de zichtbare
// tekst gelijk, dus check_lang_sync blijft groen zonder handwerk.
// ══════════════════════════════════════════════════════════════════

const MAT = {
  // ---- Basis / steriel veld ----
  angioset:        { nl:'Angioset', en:'Angio set', spec_nl:'Standaard', spec_en:'Standard', link:'../materiaal/angioset.html' },
  steriele_tafel:  { nl:'Steriele tafel', en:'Sterile table', spec_nl:'', spec_en:'' },
  gatdoek:         { nl:'Gatdoek', en:'Fenestrated drape', spec_nl:'Afdekking patiënt', spec_en:'Patient drape' },
  echoprobe_hoes:  { nl:'Echoprobe hoes', en:'Ultrasound probe cover', spec_nl:'Steriel', spec_en:'Sterile' },
  naaldgeleider:   { nl:'Naaldgeleider', en:'Needle guide', spec_nl:'Opzetstuk echoprobe voor naaldgeleiding', spec_en:'Probe attachment for needle guidance' },

  // ---- Anesthesie ----
  lidocaine:       { nl:'Lidocaïne 1%', en:'Lidocaine 1%', spec_nl:'10 cc', spec_en:'10 cc' },
  optreknaald:     { nl:'Rode optreknaald', en:'Red drawing-up needle', spec_nl:'Voor optrekken lidocaïne', spec_en:'For drawing up lidocaine' },
  groene_naald:    { nl:'Groene naald', en:'Green needle', spec_nl:'Voor lokale anesthesie', spec_en:'For local anaesthesia' },
  verdovingsnaald: { nl:'Verdovingsnaald', en:'Injection needle', spec_nl:'21G', spec_en:'21G' },
  spuit_10:        { nl:'Spuit', en:'Syringe', spec_nl:'10 cc', spec_en:'10 cc' },

  // ---- Scherp / incisie ----
  mesje_11:        { nl:'Scalpel', en:'Scalpel', spec_nl:'Nr. 11, voor steekincisie', spec_en:'No. 11, for stab incision' },

  // ---- Punctienaalden ----
  angionaald:      { nl:'Angionaald', en:'Angio needle', spec_nl:'18G', spec_en:'18G' },
  punctienaald:    { nl:'Punctienaald', en:'Puncture needle', spec_nl:'Angionaald, 18G', spec_en:'Angio needle, 18G' },
  chiba:           { nl:'Chiba naald', en:'Chiba needle', spec_nl:'22G', spec_en:'22G' },
  neffset:         { nl:'Neffset', en:'Neff set', spec_nl:'4Fr', spec_en:'4Fr' },

  // ---- Voerdraden ----
  hydrofiele_draad:{ nl:'Hydrofiele voerdraad', en:'Hydrophilic guidewire', spec_nl:'0.035 inch Terumo', spec_en:'0.035 inch Terumo', link:'../materiaal/draden.html' },
  // NB: '0.035 inch' i.p.v. 0.035" — een " breekt het data-attribuut af
  amplatz:         { nl:'Amplatz voerdraad', en:'Amplatz guidewire', spec_nl:'0.035 inch, kort', spec_en:'0.035 inch, short', link:'../materiaal/draden.html' },
  rosen:           { nl:'Rosen voerdraad', en:'Rosen guidewire', spec_nl:'0.035 inch, stiff', spec_en:'0.035 inch, stiff', link:'../materiaal/draden.html' },
  stijve_draad:    { nl:'Stijve draad', en:'Stiff guidewire', spec_nl:'Amplatz', spec_en:'Amplatz', link:'../materiaal/draden.html' },

  // ---- Sheaths & katheters ----
  sheath_6:        { nl:'Introducersheath', en:'Introducer sheath', spec_nl:'6Fr, standaard', spec_en:'6Fr, standard', link:'../materiaal/sheaths-en-katheters.html' },
  sheath_7:        { nl:'Sheath', en:'Sheath', spec_nl:'7Fr, kort', spec_en:'7Fr, short', link:'../materiaal/sheaths-en-katheters.html' },
  cobra:           { nl:'Cobra katheter', en:'Cobra catheter', spec_nl:'4 of 5 Fr', spec_en:'4 or 5 Fr', link:'../materiaal/sheaths-en-katheters.html' },
  pigtail_kath:    { nl:'Pigtail katheter', en:'Pigtail catheter', spec_nl:'4–5 Fr', spec_en:'4–5 Fr', link:'../materiaal/sheaths-en-katheters.html' },

  // ---- Drains ----
  drain_pigtail:   { nl:'Pigtail drainagekatheter', en:'Pigtail drainage catheter', spec_nl:'8–14 Fr, op viscositeit', spec_en:'8–14 Fr, by viscosity' },
  drain_multipurpose:{ nl:'Multipurpose drain', en:'Multipurpose drain', spec_nl:'8.5 Fr, metalen stilet', spec_en:'8.5 Fr, metal stylet' },
  drain_dawson:    { nl:'Dawson-Muller drain', en:'Dawson-Muller drain', spec_nl:'8.5 Fr, bij slank pyelum', spec_en:'8.5 Fr, for narrow collecting system' },
  drain_inuit:     { nl:'In- &amp; uitwendige drain', en:'Internal-external drain', spec_nl:'8.5 Fr — tijdelijk naast stent', spec_en:'8.5 Fr — temporary alongside stent' },
  drainzak:        { nl:'Drainzak', en:'Drainage bag', spec_nl:'Met connector', spec_en:'With connector' },

  // ---- Fixatie / hechtingen ----
  hechting_teugel: { nl:'Niet-resorbeerbare hechting', en:'Non-absorbable suture', spec_nl:'Mersilene of Prolene 2-0 op rechte naald (teugelhechting)', spec_en:'Mersilene or Prolene 2-0 on straight needle (retention suture)' },
  vicryl_30:       { nl:'Vicryl 3-0', en:'Vicryl 3-0', spec_nl:'Subcutane hechting', spec_en:'Subcutaneous suture' },
  steristrips:     { nl:'Steristrips', en:'Steri-Strips', spec_nl:'Wondranden sluiten', spec_en:'Wound edge approximation' },
  drainfix:        { nl:'Drainfix pleister', en:'Drain fixation dressing', spec_nl:'Standaard', spec_en:'Standard' },
  eilandpleister:  { nl:'Eilandpleister', en:'Island dressing', spec_nl:'Steriel', spec_en:'Sterile' },

  // ---- Kweek / pathologie ----
  kweekbuis:       { nl:'Kweekbuis', en:'Culture tube', spec_nl:'Aëroob + anaëroob', spec_en:'Aerobic + anaerobic' },
  formalinepot:    { nl:'Pathologiepotje', en:'Pathology container', spec_nl:'Formaline', spec_en:'Formalin' },

  // ---- Farmaca / vloeistoffen ----
  heparine:        { nl:'Heparine', en:'Heparin', spec_nl:'5000 IE via de sheath', spec_en:'5000 IU via the sheath' },
  contrast:        { nl:'Contrastmiddel', en:'Contrast', spec_nl:'Voor angiografische series', spec_en:'For angiographic runs', aantal:'—' },
  nacl:            { nl:'NaCl 0,9%', en:'NaCl 0.9%', spec_nl:'Voor flushen', spec_en:'For flushing' },

  // ---- Embolisatie ----
  microkatheter:   { nl:'Microkatheter', en:'Microcatheter', spec_nl:'Progreat (met microvoerdraad) — voor superselectie', spec_en:'Progreat (with microguidewire) — for superselective catheterisation', link:'../materiaal/sheaths-en-katheters.html' },
  coil_pushable:   { nl:'Pushable coils', en:'Pushable coils', spec_nl:'0.035 inch, diameter op vatmaat', spec_en:'0.035 inch, diameter matched to vessel', link:'../materiaal/embolisatiematerialen.html' },
  coil_detach:     { nl:'Detachable coils', en:'Detachable coils', spec_nl:'Interlock — controleerbaar afzetbaar, herpositioneerbaar tot losmaken', spec_en:'Interlock — controlled detachment, repositionable until released', link:'../materiaal/embolisatiematerialen.html' },
  coil_micro:      { nl:'Microcoils', en:'Microcoils', spec_nl:'0.018 inch, via microkatheter', spec_en:'0.018 inch, via microcatheter', link:'../materiaal/embolisatiematerialen.html' },
  vaatplug:        { nl:'Vaatplug', en:'Vascular plug', spec_nl:'Diameter 30–50% oversized t.o.v. vat', spec_en:'Diameter oversized 30–50% relative to vessel', link:'../materiaal/embolisatiematerialen.html' },
  gelfoam:         { nl:'Gelatinespons', en:'Gelatin sponge', spec_nl:'Tijdelijke occlusie — slurry of torpedo', spec_en:'Temporary occlusion — slurry or torpedo', link:'../materiaal/embolisatiematerialen.html' },

  // ---- Sluitsystemen ----
  angioseal:       { nl:'Closure device', en:'Closure device', spec_nl:'Angio-Seal 6Fr', spec_en:'Angio-Seal 6Fr', link:'../materiaal/closure-devices.html' },
};

// ── Renderer ──────────────────────────────────────────────────────
// Escape voor gebruik binnen een attribuutwaarde. De zichtbare innerHTML
// blijft ruw, zodat inline HTML (bv. <a>-links in een specificatie) werkt
// én data-nl/data-en met de zichtbare tekst overeenkomen na decoding.
function attrEsc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function matCell(nl, en, extraClass) {
  const cls = extraClass ? ` class="${extraClass}"` : '';
  return `<td${cls} data-nl="${attrEsc(nl)}" data-en="${attrEsc(en)}">${nl}</td>`;
}

function buildMateriaal(bodyId, items) {
  const body = document.getElementById(bodyId);
  if (!body) return;
  let html = '';
  items.forEach(it => {
    // Sectiekop
    if (typeof it === 'object' && (it.section_nl || it.section_en)) {
      const nl = it.section_nl || it.section_en;
      const en = it.section_en || it.section_nl;
      html += `<tr class="mat-cat"><td colspan="3" data-nl="${nl}" data-en="${en}">${nl}</td></tr>`;
      return;
    }
    // Resolve base
    let base = {}, ov = {};
    if (typeof it === 'string') {
      base = MAT[it] || {};
    } else if (it.ref) {
      base = MAT[it.ref] || {};
      ov = it;
    } else {
      base = it; // volledig eigen item
    }
    const nl      = ov.nl      || base.nl      || '';
    const en      = ov.en      || base.en      || nl;
    const spec_nl = ov.spec_nl || base.spec_nl || '';
    const spec_en = ov.spec_en || base.spec_en || spec_nl;
    const aantal  = ov.aantal  || base.aantal  || '1';
    const link    = ov.link    || base.link    || '';

    // Naam-cel (optioneel klikbaar)
    let naamCell;
    if (link) {
      naamCell = `<td><a class="mat-link" href="${link}" data-nl="${attrEsc(nl)}" data-en="${attrEsc(en)}">${nl}</a></td>`;
    } else {
      naamCell = matCell(nl, en);
    }
    // Spec-cel (leeg → lege cel zonder attributen)
    const specCell = spec_nl ? matCell(spec_nl, spec_en) : '<td></td>';
    // Aantal-cel: getallen/symbolen zonder vertaling, woorden mét
    let aantalCell;
    if (/^[0-9]+$/.test(aantal) || ['—','','Set','Voldoende'].includes(aantal)) {
      // 'Set' en 'Voldoende' zijn NL; geef ze een EN-variant
      if (aantal === 'Set') aantalCell = matCell('Set','Set');
      else if (aantal === 'Voldoende') aantalCell = matCell('Voldoende','Sufficient');
      else aantalCell = `<td>${aantal}</td>`;
    } else if (aantal === 'Optioneel') {
      aantalCell = matCell('Optioneel','Optional');
    } else {
      aantalCell = `<td>${aantal}</td>`;
    }
    html += `<tr>${naamCell}${specCell}${aantalCell}</tr>`;
  });
  body.innerHTML = html;

  // Zorg dat de taal correct wordt toegepast na injectie
  const lang = (typeof localStorage !== 'undefined' && localStorage.getItem('ia-lang')) || 'nl';
  if (typeof applyLang !== 'undefined') applyLang(lang);
}
