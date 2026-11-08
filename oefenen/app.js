const QUESTIONS = window.__QUESTIONS || [];
const DIAGNOSES = window.__DIAGNOSES || [];
const LETTERS = "ABCDEFGHIJ";
const LS_KEY = "rad-oefententamen-v1" + (window.__iaUid ? "-" + window.__iaUid : "");
const SIZE_PRESETS = [10, 25, 50, 100];

/* ---------- taal (zelfde sleutel als interventionassistant.com) ---------- */
const T = {
  nav_practice: ["Oefenen", "Practice"], nav_progress: ["Voortgang", "Progress"],
  hero_sub: ["{n} vragen uit de radiologie-voortgangstoetsen 2013–2026 · direct uitleg · slim herhalen", "{n} questions from the Dutch radiology progress tests 2013–2026 · instant feedback · smart review"],
  level: ["Niveau", "Level"], streak: ["Dagenreeks", "Day streak"], today: ["Vandaag", "Today"],
  days: ["dagen", "days"], day: ["dag", "day"],
  start_title: ["Start een ronde", "Start a round"], start_sub: ["Kies onderwerp, toets en lengte", "Pick topic, exam and length"],
  topic: ["Onderwerp", "Topic"], exam: ["Toets", "Exam"], length: ["Aantal vragen", "Number of questions"],
  all_topics: ["Alle onderwerpen", "All topics"], all_exams: ["Alle toetsen", "All exams"], other: ["anders", "other"],
  images_only: ["Alleen vragen met beeld", "Image questions only"], start_n: ["Start {n} vragen", "Start {n} questions"],
  in_sel: ["{n} vragen in selectie · nieuwere toetsen komen vaker voor", "{n} questions in selection · newer exams appear more often"],
  dx_title: ["Diagnose van de dag", "Diagnosis of the day"], dx_sub: ["Elke dag een andere diagnose uit de toetsvragen", "A different diagnosis from the exam questions every day"],
  dx_img: ["Karakteristiek beeld", "Characteristic imaging"], dx_dd: ["Differentiaaldiagnose", "Differential diagnosis"], dx_pearl: ["Onthoud", "Remember"],
  dx_practice: ["Oefen {n} vragen hierover", "Practise {n} related questions"], dx_prev: ["Vorige", "Previous"], dx_next: ["Volgende", "Next"], dx_today: ["Vandaag", "Today"], dx_nl_only: ["Tekst in het Nederlands", "Text in Dutch"],
  daily_title: ["Dagelijkse uitdaging", "Daily challenge"], daily_sub: ["Elke dag 10 vragen, voor iedereen dezelfde", "10 questions every day, the same for everyone"],
  daily_go: ["Doe de uitdaging", "Take the challenge"], daily_done: ["Vandaag gedaan: {c}/{t}", "Done today: {c}/{t}"], daily_again: ["Nog een keer", "Again"],
  review_title: ["Slim herhalen", "Smart review"], review_sub: ["Foute vragen komen terug na 1, 3, 7, 14 en 30 dagen", "Missed questions return after 1, 3, 7, 14 and 30 days"],
  due_now: ["nu te herhalen", "due now"], in_queue: ["in herhaalschema", "in review schedule"], mastered: ["onder de knie", "mastered"],
  review_go: ["Herhaal {n} vragen", "Review {n} questions"], review_none: ["Niets te herhalen", "Nothing due"],
  goal_title: ["Dagdoel en VGT", "Daily goal and exam"], goal_sub: ["Houd het ritme vast tussen de toetsen door", "Keep the rhythm between exams"],
  goal: ["Dagdoel", "Daily goal"], next_vgt: ["Volgende VGT", "Next progress test"], days_left: ["nog {n} dagen", "{n} days to go"],
  goal_hint: ["Bij {n} vragen per dag zie je vóór de VGT de hele database {k}× terug.", "At {n} questions a day you will see the whole database {k}× before the test."],
  mastery: ["Beheersing per onderwerp", "Mastery per topic"], mastery_hint: ["Percentage van alle beschikbare vragen per onderwerp dat je juist hebt beantwoord. Per vraag telt je laatste poging; vragen die je nog niet hebt gemaakt tellen als niet juist.", "Percentage of all available questions per topic that you answered correctly. Your last attempt per question counts; questions you have not tried yet count as not correct."],
  activity: ["Activiteit", "Activity"], activity_hint: ["Beantwoorde vragen per dag, laatste 18 weken.", "Questions answered per day, last 18 weeks."],
  history: ["Eerdere rondes", "Previous rounds"], badges_title: ["Badges", "Badges"], about: ["Over deze vragen", "About these questions"],
  about_text: ["De vragen zijn na afloop door AIOS gereconstrueerd en kunnen afwijken van de echte toets. Open vragen zijn omgezet naar meerkeuze. Waar de sleutel is aangepast of de vraag is herschreven, staat dat bij de uitleg. Beelden zijn representatieve voorbeelden met bronvermelding. De vragen zelf zijn in het Nederlands.", "Questions were reconstructed by residents after each exam and may differ from the real test. Open questions were converted to multiple choice. Where the key was corrected or a question rewritten, this is noted in the explanation. Images are representative examples with attribution. The questions themselves are in Dutch."],
  storage: ["Je voortgang, XP en badges worden alleen in deze browser bewaard.", "Your progress, XP and badges are stored in this browser only."],
  reset: ["Voortgang wissen", "Reset progress"], reset_q: ["Alle voortgang, XP en badges wissen?", "Erase all progress, XP and badges?"], erase: ["Wissen", "Erase"], cancel: ["Annuleren", "Cancel"],
  prev: ["← Vorige", "← Previous"], stop: ["Stoppen", "Stop"], q_of: ["Vraag {i} van {n}", "Question {i} of {n}"], correct_n: ["{n} goed", "{n} correct"],
  combo: ["{n} op rij", "{n} in a row"], keys: ["Toets A–{L} of klik · ← vorige", "Press A–{L} or click · ← previous"],
  good: ["Goed", "Correct"], wrong_is: ["Fout, het is {L}", "Wrong, it is {L}"], next: ["Volgende →", "Next →"], to_result: ["Bekijk resultaat", "See result"],
  enter_next: ["Enter of → volgende", "Enter or → next"],
  fb_open: ["Meld een probleem met deze vraag", "Report a problem with this question"], fb_what: ["Wat klopt er niet?", "What is wrong?"],
  fb_ph: ["Beschrijf kort wat er mis is of beter kan (bijv. juiste antwoord + bron).", "Briefly describe what is wrong or could be better (e.g. correct answer + source)."],
  fb_send: ["Versturen", "Send"], fb_cancel: ["Annuleren", "Cancel"], fb_thanks: ["Bedankt! Je melding is doorgestuurd naar de beheerder.", "Thanks! Your report has been sent to the administrator."], fb_err: ["Versturen mislukt: ", "Sending failed: "],
  install: ["Zet de oefenapp op je beginscherm", "Add the practice app to your home screen"],
  install_ios: ["iPhone of iPad (Safari)", "iPhone or iPad (Safari)"],
  install_ios_steps: [["Open deze pagina in Safari.", "Tik op de deelknop (vierkant met pijl omhoog). Op iOS 26: tik eerst op ••• rechtsonder en dan op Deel.", "Scroll omlaag en kies Zet op beginscherm.", "Laat Open als webapp aan staan en tik op Voeg toe."], ["Open this page in Safari.", "Tap the share button (square with an up arrow). On iOS 26: first tap ••• at the bottom right, then Share.", "Scroll down and choose Add to Home Screen.", "Keep Open as Web App switched on and tap Add."]],
  install_android: ["Android (Chrome)", "Android (Chrome)"],
  install_android_steps: [["Open deze pagina in Chrome.", "Tik op ⋮ rechtsboven.", "Kies Toevoegen aan startscherm of App installeren en bevestig."], ["Open this page in Chrome.", "Tap ⋮ at the top right.", "Choose Add to Home screen or Install app and confirm."]],
  install_note: ["Daarna open je de oefenapp met één tik, schermvullend en zonder adresbalk. Log er de eerste keer één keer in; daarna blijf je ingelogd.", "After that the practice app opens with one tap, full screen without an address bar. Sign in once the first time; you will stay signed in."],
  install_banner: ["Tip: zet de oefenapp op je beginscherm, dan open je hem met één tik.", "Tip: add the practice app to your home screen to open it with one tap."], install_how: ["Zo werkt het", "How"], dismiss: ["Sluiten", "Dismiss"], read_more: ["Lees verder:", "Read more:"], earlier_wrong: ["eerder fout", "missed before"],
  show_answer: ["Toon antwoord", "Show answer"], knew: ["Wist ik", "Knew it"], didnt: ["Wist ik niet", "Didn't know"],
  round_done: ["Ronde klaar", "Round complete"], review_done: ["Herhaling klaar", "Review complete"], daily_done_t: ["Uitdaging klaar", "Challenge complete"],
  score: ["Score", "Score"], xp_earned: ["XP verdiend", "XP earned"], best_combo: ["Langste reeks", "Longest streak"],
  repeat_wrong: ["Herhaal deze {n} fouten", "Retry these {n} misses"], new_round: ["Nieuwe ronde ({n})", "New round ({n})"], home: ["Naar start", "Home"],
  wrong_list: ["Fout beantwoord", "Missed"], all_good: ["Alles goed!", "All correct!"], none_answered: ["Geen vragen beantwoord.", "No questions answered."],
  yours: ["jij", "you"], levelup: ["Niveau omhoog: {t}", "Level up: {t}"], new_badge: ["Nieuwe badge", "New badge"], goal_hit: ["Dagdoel gehaald! +50 XP", "Daily goal reached! +50 XP"],
  no_history: ["Nog geen rondes gespeeld.", "No rounds played yet."], round_kind: { exam: ["Ronde", "Round"], daily: ["Uitdaging", "Challenge"], wrong: ["Herhaling", "Review"] },
  answered_total: ["Beantwoord", "Answered"], accuracy: ["Goed", "Correct"]
};
const LEVELS = [
  [0, "Coassistent", "Medical student"], [150, "ANIOS", "Junior doctor"], [400, "AIOS 1", "Resident year 1"], [800, "AIOS 2", "Resident year 2"],
  [1400, "AIOS 3", "Resident year 3"], [2200, "AIOS 4", "Resident year 4"], [3300, "AIOS 5", "Resident year 5"], [4700, "Fellow", "Fellow"],
  [6500, "Radioloog", "Radiologist"], [9000, "Opleider", "Programme director"], [12500, "Sectiehoofd", "Section chief"], [17000, "Professor", "Professor"]
];
const BADGES = [
  ["first", "🩺", ["Eerste vraag", "First question"], ["Je eerste vraag beantwoord", "Answered your first question"], s => s.answered >= 1],
  ["c10", "🔥", ["Tien op rij", "Ten in a row"], ["10 vragen achter elkaar goed", "10 correct in a row"], s => s.bestCombo >= 10],
  ["c25", "⚡", ["Onstuitbaar", "Unstoppable"], ["25 vragen achter elkaar goed", "25 correct in a row"], s => s.bestCombo >= 25],
  ["perfect", "💯", ["Foutloos", "Flawless"], ["Een ronde van minstens 10 vragen zonder fout", "A round of at least 10 with no misses"], s => s.perfect >= 1],
  ["n100", "📚", ["Honderd", "Hundred"], ["100 vragen beantwoord", "100 questions answered"], s => s.answered >= 100],
  ["n500", "🗂️", ["Vijfhonderd", "Five hundred"], ["500 vragen beantwoord", "500 questions answered"], s => s.answered >= 500],
  ["n1000", "🏛️", ["Duizendpoot", "Thousand"], ["1000 vragen beantwoord", "1000 questions answered"], s => s.answered >= 1000],
  ["d3", "📅", ["Op gang", "Warming up"], ["3 dagen op rij geoefend", "Practised 3 days in a row"], s => s.bestStreak >= 3],
  ["d7", "🗓️", ["Weekritme", "Weekly rhythm"], ["7 dagen op rij geoefend", "Practised 7 days in a row"], s => s.bestStreak >= 7],
  ["d30", "🏅", ["Maandritme", "Monthly rhythm"], ["30 dagen op rij geoefend", "Practised 30 days in a row"], s => s.bestStreak >= 30],
  ["goal5", "🎯", ["Doelgericht", "On target"], ["5 keer je dagdoel gehaald", "Hit your daily goal 5 times"], s => s.goalDays >= 5],
  ["daily5", "🧩", ["Uitdager", "Challenger"], ["5 dagelijkse uitdagingen gedaan", "Completed 5 daily challenges"], s => s.dailyDone >= 5],
  ["img25", "🩻", ["Beeldkijker", "Image reader"], ["25 beeldvragen goed", "25 image questions correct"], s => s.imgCorrect >= 25],
  ["fix25", "🔁", ["Herstel", "Comeback"], ["25 eerder foute vragen alsnog goed", "25 previously missed questions fixed"], s => s.fixed >= 25],
  ["all", "🧭", ["Veelzijdig", "All-rounder"], ["In elk onderwerp een vraag goed", "A correct answer in every topic"], s => s.topicsTotal > 0 && s.topicsCorrect >= s.topicsTotal],
  ["master", "🎓", ["Specialist", "Specialist"], ["80% beheersing in een onderwerp", "80% mastery in a topic"], s => s.bestMastery >= 80],
  ["night", "🦉", ["Nachtdienst", "Night shift"], ["Geoefend tussen 0 en 5 uur", "Practised between midnight and 5 am"], s => s.night],
  ["early", "🌅", ["Vroege vogel", "Early bird"], ["Geoefend vóór 7 uur 's ochtends", "Practised before 7 am"], s => s.early]
];
const INTERVALS = [1, 3, 7, 14, 30];
const FLAG_LABEL = { corrected: ["Antwoord gecorrigeerd", "Answer corrected"], added: ["Antwoord aangevuld", "Answer added"], uncertain: ["Antwoord onzeker", "Answer uncertain"], rewritten: ["Vraag herschreven", "Question rewritten"] };
const FLAG_NOTE = { corrected: ["De antwoordsleutel uit de bron is aangepast; zie de toelichting.", "The source key was corrected; see the explanation."], added: ["De bron gaf geen antwoord; dit antwoord is aangevuld.", "The source gave no answer; this answer was added."], uncertain: ["Het antwoord uit de bron is omstreden.", "The source answer is disputed."], rewritten: ["De vraag is herschreven omdat de originele afbeelding of opties ontbraken.", "The question was rewritten because the original image or options were missing."] };
const TOPIC_COLOR = { Abdomen: "teal", Thorax: "blue", Neuro: "purple", "Hoofd-hals": "purple", MSK: "orange", Kinderradiologie: "green", Mammo: "red", Interventie: "blue", Nucleair: "teal", Cardiovasculair: "red", Fysica: "orange" };

let lang = "nl";
try { const l = localStorage.getItem("ia-lang"); if (l === "en" || l === "nl") lang = l; } catch (e) {}
function t(key, vars) {
  const v = typeof key === "string" ? T[key] : key;
  let s = Array.isArray(v) ? (lang === "en" ? v[1] : v[0]) : String(key);
  if (vars) for (const [k, x] of Object.entries(vars)) s = s.split("{" + k + "}").join(x);
  return s;
}
function setLang(l) { lang = l; try { localStorage.setItem("ia-lang", l); } catch (e) {} document.documentElement.lang = l; rerender(); }
function initTheme() { try { const s = localStorage.getItem("ia-theme"); if (s === "dark" || s === "light") document.documentElement.dataset.theme = s; } catch (e) {} }
function isDark() { const d = document.documentElement.dataset.theme; if (d) return d === "dark"; return !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches); }
function toggleTheme() { const next = isDark() ? "light" : "dark"; document.documentElement.dataset.theme = next; try { localStorage.setItem("ia-theme", next); } catch (e) {} rerender(); }
initTheme();

/* ---------- opslag ---------- */
function blank() { return { wrong: {}, seen: {}, history: [], xp: 0, qs: {}, box: {}, days: {}, daily: {}, goal: 20, goalDays: {}, vgt: "", badges: {}, stats: { bestCombo: 0, perfect: 0, imgCorrect: 0, fixed: 0, night: false, early: false } }; }
function loadProgress() {
  const p = blank();
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) { const o = JSON.parse(raw); Object.assign(p, o); p.stats = Object.assign(blank().stats, o.stats || {}); }
  } catch (e) {}
  return p;
}
function saveProgress() { progress._ts = Date.now(); try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch (e) {} if (window.__iaSync) window.__iaSync(progress); }
let progress = loadProgress();
window.__iaProgress = {
  get: () => progress,
  set: (p) => { const n = blank(); Object.assign(n, p); n.stats = Object.assign(blank().stats, p.stats || {}); progress = n; try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch (e) {} if (!session) rerender(); }
};
let examSize = 25;
try { const v = parseInt(localStorage.getItem("rad-oefententamen-size"), 10); if (v > 0) examSize = v; } catch (e) {}
function setExamSize(n) { examSize = Math.max(1, Math.min(500, Math.round(n) || 25)); try { localStorage.setItem("rad-oefententamen-size", String(examSize)); } catch (e) {} }
const byId = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));

/* ---------- datum ---------- */
function dayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function dayNum(k) { const [y, m, d] = (k || dayKey()).split("-").map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); }
function dayKeyFromNum(n) { const d = new Date(n * 864e5); return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); }
const TODAY = () => dayNum();
for (const id of Object.keys(progress.wrong)) { if (!byId[id]) delete progress.wrong[id]; else if (!progress.box[id]) progress.box[id] = { b: 0, due: TODAY() }; }
for (const id of Object.keys(progress.box)) if (!byId[id]) delete progress.box[id];

/* ---------- helpers ---------- */
const app = document.getElementById("app");
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "text") el.textContent = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}
function mount(...kids) { app.replaceChildren(...kids.flat(Infinity).filter(k => k != null && k !== false)); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function seeded(str) { let s = 2166136261; for (const c of str) s = Math.imul(s ^ c.charCodeAt(0), 16777619); return () => { s = (s + 0x6D2B79F5) | 0; let x = s; x = Math.imul(x ^ (x >>> 15), x | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; }; }
function uniq(key) { return [...new Set(QUESTIONS.map(q => q[key]).filter(Boolean))]; }
function sources() { const first = {}; QUESTIONS.forEach((q, i) => { if (!(q.source in first)) first[q.source] = i; }); return uniq("source").sort((a, b) => first[b] - first[a]); }
function topics() { return uniq("topic").sort((a, b) => a.localeCompare(b, "nl")); }
function imgSrc(name) { const k = name.replace(/\.[a-z]+$/i, "") + ".webp"; if (window.__iaImg && window.__iaImg[k]) return window.__iaImg[k]; if (window.__iaNeedImg) window.__iaNeedImg(k); return "data:image/gif;base64,R0lGODlhAQABAAAAACw="; }
function rpUrl(term) { return "https://radiopaedia.org/search?lang=us&q=" + encodeURIComponent(term) + "&scope=articles"; }
function linksFor(q) {
  const list = (q.links || []).filter(l => l && /^https?:\/\//.test(l.url));
  for (const term of q.rp || []) list.push({ label: term, url: rpUrl(term) });
  if (!list.length) { const term = q.topic || q.question.slice(0, 60); list.push({ label: term, url: rpUrl(term) }); }
  return list;
}
function short(text, n) { n = n || 110; return text.length > n ? text.slice(0, n - 1).trimEnd() + "…" : text; }
function hasImages(q) { return (q.images || []).length > 0; }
function qYear(q) { if (q.year) return q.year; const m = /(20\d\d)/.exec(q.source || ""); return m ? Number(m[1]) : 2020; }
function qWeight(q) { return 1 + Math.max(0, Math.min(1, (qYear(q) - 2013) / 12)); }
function weightedSample(list, k, rnd) { rnd = rnd || Math.random; return list.map(q => ({ q, key: Math.pow(rnd(), 1 / qWeight(q)) })).sort((a, b) => b.key - a.key).slice(0, k).map(x => x.q); }
function color(q) { return TOPIC_COLOR[q.topic] || "blue"; }
function figures(names, labels, credit) {
  if (!names || !names.length) return null;
  return h("div", { class: "figwrap" },
    h("div", { class: "figs" + (names.length === 1 ? " single" : "") },
      names.map((n, i) => h("figure", { class: "fig" },
        h("button", { type: "button", "aria-label": "Afbeelding vergroten", onclick: () => openLightbox(imgSrc(n)) },
          h("img", { src: imgSrc(n), "data-ia-img": n.replace(/\.[a-z]+$/i, "") + ".webp", alt: labels && labels[i] ? "Afbeelding " + labels[i] : "Afbeelding bij de vraag", loading: "lazy", decoding: "async" })),
        labels && labels[i] ? h("figcaption", { text: labels[i] }) : null))),
    credit ? (credit.url ? h("a", { class: "credit", href: credit.url, target: "_blank", rel: "noopener", text: credit.text }) : h("span", { class: "credit", text: credit.text })) : null);
}
let lightboxEl = null;
function closeLightbox() { if (lightboxEl) { lightboxEl.remove(); lightboxEl = null; } }
function openLightbox(src) {
  closeLightbox();
  lightboxEl = h("div", { class: "lightbox", role: "dialog", "aria-label": "Vergrote afbeelding", onclick: closeLightbox },
    h("img", { src, alt: "Vergrote afbeelding" }), h("button", { class: "close", type: "button", "aria-label": "Sluiten", onclick: closeLightbox }, "✕"));
  document.body.append(lightboxEl);
}
function toast(msg) { const el = h("div", { class: "toast", role: "status", text: msg }); document.body.append(el); setTimeout(() => el.remove(), 2600); }
function confetti() {
  const box = h("div", { class: "confetti", "aria-hidden": "true" });
  const cols = ["#1e6db5", "#138a8a", "#b53a2f", "#6040a0", "#b36000", "#1a7a3e", "#7de8e8"];
  for (let i = 0; i < 70; i++) box.append(h("i", { style: "left:" + (Math.random() * 100) + "%;background:" + cols[i % cols.length] + ";animation-duration:" + (1.6 + Math.random() * 1.6) + "s;animation-delay:" + (Math.random() * 0.4) + "s" }));
  document.body.append(box); setTimeout(() => box.remove(), 3800);
}

/* ---------- game-logica ---------- */
function levelOf(xp) {
  let i = 0; while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1][0]) i++;
  const cur = LEVELS[i], nxt = LEVELS[i + 1];
  return { i, name: lang === "en" ? cur[2] : cur[1], to: nxt ? nxt[0] : null, pct: nxt ? Math.round(100 * (xp - cur[0]) / (nxt[0] - cur[0])) : 100 };
}
function streakInfo() {
  const days = progress.days; const today = TODAY();
  let cur = 0, d = today;
  if (!days[dayKeyFromNum(d)]) d = today - 1;
  while (days[dayKeyFromNum(d)]) { cur++; d--; }
  let best = 0, run = 0, prev = null;
  for (const k of Object.keys(days).sort()) { const n = dayNum(k); run = prev !== null && n === prev + 1 ? run + 1 : 1; best = Math.max(best, run); prev = n; }
  return { cur, best: Math.max(best, cur) };
}
function todayCount() { return progress.days[dayKey()] || 0; }
function dueIds() { const now = TODAY(); return Object.entries(progress.box).filter(([id, b]) => byId[id] && b.due <= now).map(([id]) => id); }
function topicMastery() {
  const res = {};
  for (const q of QUESTIONS) { const r = res[q.topic] || (res[q.topic] = { total: 0, ok: 0 }); r.total++; const s = progress.qs[q.id]; if (s && s.last) r.ok++; }
  return res;
}
function gameStats() {
  const s = progress.stats; const st = streakInfo(); const tm = topicMastery(); const tk = Object.keys(tm);
  return {
    answered: Object.values(progress.qs).reduce((a, x) => a + x.n, 0), bestCombo: s.bestCombo, perfect: s.perfect, imgCorrect: s.imgCorrect, fixed: s.fixed, night: s.night, early: s.early,
    bestStreak: st.best, goalDays: Object.keys(progress.goalDays).length, dailyDone: Object.keys(progress.daily).length,
    topicsTotal: tk.length, topicsCorrect: tk.filter(k => tm[k].ok > 0).length,
    bestMastery: Math.max(0, ...tk.filter(k => tm[k].total >= 20).map(k => Math.round(100 * tm[k].ok / tm[k].total)))
  };
}
function checkBadges() {
  const s = gameStats(); const fresh = [];
  for (const b of BADGES) if (!progress.badges[b[0]] && b[4](s)) { progress.badges[b[0]] = dayKey(); fresh.push(b); }
  return fresh;
}

/* ---------- state ---------- */
let session = null, view = "home", topicFilter = "", sourceFilter = "", imagesOnly = false, confirmReset = false;
const openAcc = { mastery: false, badges: false, about: false, install: false, activity: true, history: true, pmastery: true, pbadges: true };
function pool() { return QUESTIONS.filter(q => (!topicFilter || q.topic === topicFilter) && (!sourceFilter || q.source === sourceFilter) && (!imagesOnly || hasImages(q))); }
function rerender() { if (session && view === "quiz") renderQuestion(); else if (session && view === "result") renderResult(); else if (view === "progress") renderProgress(); else renderHome(); }
function goHome() { session = null; view = "home"; renderHome(); window.scrollTo(0, 0); }
function goProgress() { session = null; view = "progress"; renderProgress(); window.scrollTo(0, 0); }

/* ---------- vaste onderdelen ---------- */
function navBar() {
  const lv = levelOf(progress.xp);
  const tab = (id, label, fn) => h("button", { class: "nav-btn" + (view === id ? " on" : ""), onclick: fn }, label);
  return h("nav", { class: "ia gutter" }, h("div", { class: "nav-in" },
    h("button", { class: "logo", onclick: () => { if (view === "home") location.href = "/"; else goHome(); }, "aria-label": "Start" }, "Intervention", h("span", { text: "Assistant" }), h("small", { text: "VGT-oefenen" })),
    tab("home", t("nav_practice"), goHome),
    tab("progress", t("nav_progress"), goProgress),
    h("div", { class: "nav-right" },
      h("span", { class: "xp-mini num", title: t("level"), text: lv.name + " · " + progress.xp + " XP" }),
      h("button", { class: "chip-btn", id: "lang-btn", title: lang === "nl" ? "Switch to English" : "Schakel naar Nederlands", onclick: () => setLang(lang === "nl" ? "en" : "nl") }, lang === "nl" ? "EN" : "NL"),
      h("button", { class: "chip-btn", id: "theme-btn", "aria-label": "Licht of donker thema", onclick: toggleTheme }, isDark() ? "☀️" : "🌙"))));
}
function footer() {
  return h("footer", { class: "foot gutter" },
    window.__iaFootExtra ? h("div", { class: "row" }, window.__iaFootExtra(h)) : h("span", { text: t("storage") }),
    confirmReset
      ? h("div", { class: "confirm" }, h("span", { text: t("reset_q") }),
          h("button", { class: "btn red", onclick: () => { progress = blank(); saveProgress(); confirmReset = false; rerender(); } }, t("erase")),
          h("button", { class: "btn", onclick: () => { confirmReset = false; rerender(); } }, t("cancel")))
      : h("button", { class: "linkbtn", onclick: () => { confirmReset = true; rerender(); } }, t("reset")));
}
function heroStats() {
  const lv = levelOf(progress.xp); const st = streakInfo(); const tc = todayCount(); const goal = progress.goal || 20;
  return h("div", { class: "hero-stats" },
    h("div", { class: "hstat level" },
      h("div", { class: "lbl", text: t("level") + " " + (lv.i + 1) }),
      h("div", { class: "val" }, lv.name, " ", h("small", { class: "num", text: progress.xp + (lv.to ? " / " + lv.to : "") + " XP" })),
      h("div", { class: "bar" }, h("span", { style: "width:" + lv.pct + "%" }))),
    h("div", { class: "hstat" },
      h("div", { class: "lbl", text: t("streak") }),
      h("div", { class: "val num" }, (st.cur ? "🔥 " : "") + st.cur + " ", h("small", { text: st.cur === 1 ? t("day") : t("days") }))),
    h("div", { class: "hstat" },
      h("div", { class: "lbl", text: t("today") }),
      h("div", { class: "val num" }, tc + " ", h("small", { text: "/ " + goal })),
      h("div", { class: "bar" }, h("span", { style: "width:" + Math.min(100, Math.round(100 * tc / goal)) + "%" }))));
}
function accordion(key, dot, title, body) {
  const open = openAcc[key];
  return h("div", { class: "accordion" + (open ? " open" : ""), id: "acc-" + key },
    h("button", { class: "acc-header", "aria-expanded": open ? "true" : "false", onclick: () => { openAcc[key] = !openAcc[key]; rerender(); } },
      h("span", { class: "acc-title-wrap" }, h("span", { class: "acc-dot " + dot }), h("span", { class: "acc-title", text: title })),
      h("span", { class: "acc-chevron", text: "▾" })),
    open ? h("div", { class: "acc-body" }, body()) : null);
}
function cardHead(icon, col, title, sub) {
  return [h("div", { class: "stripe " + col }), h("div", { class: "card-head" }, h("div", { class: "icon " + col, text: icon }), h("div", null, h("div", { class: "card-title", text: title }), h("div", { class: "card-sub", text: sub })))];
}

/* ---------- start ---------- */
function renderHome() {
  view = "home"; session = null;
  const p = pool(); const examCount = Math.min(examSize, p.length);
  const count = (key, val) => QUESTIONS.filter(q => q[key] === val).length;
  const due = dueIds(); const inBox = Object.keys(progress.box).filter(id => byId[id]).length;
  const mastered = Object.values(progress.qs).filter(s => s.mastered).length;
  const today = progress.daily[dayKey()];
  const goal = progress.goal || 20; const tcp = Math.min(100, Math.round(100 * todayCount() / goal));
  const daysLeft = progress.vgt ? dayNum(progress.vgt) - TODAY() : null;

  const startCard = h("section", { class: "card" }, cardHead("📝", "blue", t("start_title"), t("start_sub")),
    h("div", { class: "card-body" },
      h("div", { class: "field" }, h("label", { class: "flabel", for: "topic", text: t("topic") }),
        h("select", { id: "topic", onchange: e => { topicFilter = e.target.value; renderHome(); } },
          h("option", { value: "", text: t("all_topics") }), topics().map(x => h("option", { value: x, selected: x === topicFilter, text: x + " (" + count("topic", x) + ")" })))),
      h("div", { class: "field" }, h("label", { class: "flabel", for: "source", text: t("exam") }),
        h("select", { id: "source", onchange: e => { sourceFilter = e.target.value; renderHome(); } },
          h("option", { value: "", text: t("all_exams") }), sources().map(x => h("option", { value: x, selected: x === sourceFilter, text: x + " (" + count("source", x) + ")" })))),
      h("div", { class: "field" }, h("span", { class: "flabel", text: t("length") }),
        h("div", { class: "seg", role: "group", "aria-label": t("length") },
          SIZE_PRESETS.map(n => h("button", { type: "button", class: n === examSize ? "on" : null, "aria-pressed": n === examSize ? "true" : "false", onclick: () => { setExamSize(n); renderHome(); } }, String(n))),
          h("input", { type: "number", id: "size-custom", min: "1", max: "500", inputmode: "numeric", class: SIZE_PRESETS.includes(examSize) ? null : "on", value: SIZE_PRESETS.includes(examSize) ? "" : examSize, placeholder: t("other"), "aria-label": t("other"),
            onchange: e => { const v = parseInt(e.target.value, 10); if (v > 0) { setExamSize(v); renderHome(); } } }))),
      h("label", { class: "check" }, h("input", { type: "checkbox", id: "imgonly", checked: imagesOnly, onchange: e => { imagesOnly = e.target.checked; renderHome(); } }), t("images_only")),
      h("div", { class: "spacer" }),
      h("button", { class: "btn teal wide pill", id: "start", disabled: !examCount, onclick: () => startSession("exam") }, t("start_n", { n: examCount })),
      h("p", { class: "hint", style: "margin:0", text: t("in_sel", { n: p.length }) })));

  const dailyCard = h("section", { class: "card" }, cardHead("🧩", "teal", t("daily_title"), t("daily_sub")),
    h("div", { class: "card-body" },
      today ? h("div", { class: "row" }, h("span", { class: "tag green", text: "✓ " + t("daily_done", { c: today.c, t: today.t }) }), h("span", { class: "spacer" }),
        h("button", { class: "btn pill", onclick: () => startSession("daily") }, t("daily_again")))
        : h("button", { class: "btn teal wide pill", id: "daily", onclick: () => startSession("daily") }, t("daily_go"))));

  const reviewCard = h("section", { class: "card" }, cardHead("🔁", "red", t("review_title"), t("review_sub")),
    h("div", { class: "card-body" },
      h("div", { class: "row", style: "gap:1.4rem" },
        h("div", null, h("div", { class: "bigfig num", text: due.length }), h("div", { class: "hint", text: t("due_now") })),
        h("div", null, h("div", { class: "bigfig num muted", text: inBox }), h("div", { class: "hint", text: t("in_queue") })),
        h("div", null, h("div", { class: "bigfig num", style: "color:var(--green)", text: mastered }), h("div", { class: "hint", text: t("mastered") }))),
      h("button", { class: "btn red wide pill", id: "repeat", disabled: !due.length, onclick: () => startSession("wrong") }, due.length ? t("review_go", { n: due.length }) : t("review_none"))));

  const goalCard = h("section", { class: "card" }, cardHead("🎯", "purple", t("goal_title"), t("goal_sub")),
    h("div", { class: "card-body" },
      h("div", { class: "row", style: "gap:1rem" },
        h("div", { class: "ring", style: "--p:" + tcp }, h("b", { class: "num", text: tcp + "%" })),
        h("div", { class: "field", style: "flex:1;min-width:9rem" }, h("span", { class: "flabel", text: t("goal") }),
          h("div", { class: "seg" }, [10, 20, 40].map(n => h("button", { type: "button", class: n === goal ? "on" : null, onclick: () => { progress.goal = n; saveProgress(); renderHome(); } }, String(n))))),
        h("div", { class: "field", style: "flex:1;min-width:11rem" }, h("label", { class: "flabel", for: "vgt", text: t("next_vgt") + (daysLeft != null && daysLeft >= 0 ? " · " + t("days_left", { n: daysLeft }) : "") }),
          h("input", { type: "date", id: "vgt", value: progress.vgt || "", onchange: e => { progress.vgt = e.target.value; saveProgress(); renderHome(); } }))),
      daysLeft != null && daysLeft > 0 ? h("p", { class: "hint", style: "margin:0", text: t("goal_hint", { n: goal, k: (Math.round(10 * goal * daysLeft / QUESTIONS.length) / 10).toString().replace(".", lang === "nl" ? "," : ".") }) }) : null));

  const dx = diagnosisCard();
  mount(navBar(),
    h("header", { class: "hero gutter" }, h("div", { class: "hero-in" },
      h("h1", null, "Oefen", h("span", { text: "tentamen" })),
      h("p", { class: "sub", text: t("hero_sub", { n: QUESTIONS.length }) }),
      heroStats())),
    h("main", { class: "main gutter" },
      h("div", { class: "grid2" }, startCard, h("div", { style: "display:flex;flex-direction:column;gap:1rem;min-width:0" }, dailyCard, reviewCard)),
      dx,
      goalCard,
      accordion("mastery", "teal", t("mastery"), masteryBlock),
      accordion("badges", "orange", t("badges_title") + " · " + Object.keys(progress.badges).length + "/" + BADGES.length, badgesBlock),
      window.__iaSite ? accordion("install", "purple", "📱 " + t("install"), installBlock) : null,
      accordion("about", "blue", t("about"), () => h("p", { style: "margin:0;font-size:0.88rem;line-height:1.6", text: t("about_text") }))),
    footer());
  const banner = installBanner(); if (banner) document.querySelector("main.main").prepend(banner);
}
function installBlock() {
  const steps = arr => h("ol", { class: "isteps" }, arr.map(x => h("li", { text: x })));
  return h("div", { class: "install" },
    h("div", { class: "igrid" },
      h("div", null, h("h4", { text: t("install_ios") }), steps(T.install_ios_steps[lang === "nl" ? 0 : 1])),
      h("div", null, h("h4", { text: t("install_android") }), steps(T.install_android_steps[lang === "nl" ? 0 : 1]))),
    h("p", { class: "hint", style: "margin:0", text: t("install_note") }));
}
function isStandalone() { try { return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; } catch (e) { return false; } }
function installBanner() {
  if (!window.__iaSite || isStandalone() || !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) return null;
  try { if (localStorage.getItem("ia-install-tip") === "x") return null; } catch (e) {}
  const el = h("div", { class: "ibanner", role: "note" },
    h("span", { text: "📱 " + t("install_banner") }),
    h("button", { class: "linkbtn", type: "button", onclick: () => { openAcc.install = true; renderHome(); const a = document.getElementById("acc-install"); if (a) a.scrollIntoView({ behavior: "smooth", block: "start" }); } }, t("install_how")),
    h("button", { class: "chip-btn", type: "button", "aria-label": t("dismiss"), onclick: () => { try { localStorage.setItem("ia-install-tip", "x"); } catch (e) {} el.remove(); } }, "✕"));
  return el;
}
function masteryBlock() {
  const tm = topicMastery();
  return h("div", null, h("p", { class: "hint", style: "margin:0 0 0.5rem", text: t("mastery_hint") }),
    Object.keys(tm).sort((a, b) => a.localeCompare(b, "nl")).map(k => {
      const r = tm[k]; const pct = Math.round(100 * r.ok / r.total); const tier = pct >= 80 ? "t4" : pct >= 50 ? "t3" : pct >= 20 ? "t2" : "t1";
      return h("div", { class: "mast" }, h("span", { style: "overflow-wrap:anywhere", text: k }),
        h("div", { class: "mbar" }, h("span", { class: tier, style: "width:" + (r.ok ? Math.max(pct, 2) : 0) + "%" })),
        h("span", { class: "num muted", style: "text-align:right", text: pct + "%" }));
    }));
}
function badgesBlock() {
  return h("div", { class: "badges" }, BADGES.map(b => {
    const got = progress.badges[b[0]];
    return h("div", { class: "badge" + (got ? "" : " locked"), title: got || "" }, h("span", { class: "b-ic", text: b[1] }),
      h("div", { style: "min-width:0" }, h("div", { class: "b-t", text: t(b[2]) }), h("div", { class: "b-d", text: t(b[3]) })));
  }));
}
function activityBlock() {
  const weeks = 18; const today = TODAY(); const dow = (new Date().getDay() + 6) % 7; const start = today - dow - (weeks - 1) * 7;
  const cells = [];
  for (let n = start; n <= today; n++) {
    const c = progress.days[dayKeyFromNum(n)] || 0; const lvl = c === 0 ? "" : c < 10 ? "l1" : c < 25 ? "l2" : c < 50 ? "l3" : "l4";
    cells.push(h("i", { class: (lvl + (n === today ? " today" : "")).trim() || null, title: dayKeyFromNum(n) + ": " + c }));
  }
  return h("div", null, h("p", { class: "hint", style: "margin:0 0 0.5rem", text: t("activity_hint") }), h("div", { class: "heat", role: "img", "aria-label": t("activity") }, cells));
}
function historyBlock() {
  if (!progress.history.length) return h("p", { class: "hint", style: "margin:0", text: t("no_history") });
  return h("div", { class: "list" }, progress.history.slice(-12).reverse().map(r =>
    h("div", { class: "li" }, h("span", { class: "tag " + (r.kind === "daily" ? "teal" : r.kind === "wrong" ? "red" : "blue"), text: t(T.round_kind[r.kind || "exam"]) }),
      h("span", { class: "grow num", text: r.date }), h("span", { class: "num", text: r.correct + "/" + r.total }),
      h("span", { class: "num muted", style: "width:3rem;text-align:right", text: Math.round(100 * r.correct / r.total) + "%" }),
      r.xp != null ? h("span", { class: "tag teal num", text: "+" + r.xp + " XP" }) : null)));
}

/* ---------- voortgang ---------- */
function renderProgress() {
  view = "progress";
  const s = gameStats(); const st = streakInfo();
  const okTotal = Object.values(progress.qs).reduce((a, x) => a + x.ok, 0);
  const pct = s.answered ? Math.round(100 * okTotal / s.answered) : 0;
  const stat = (lbl, val) => h("div", { class: "rstat" }, h("div", { class: "lbl", text: lbl }), h("div", { class: "bigfig num", text: val }));
  mount(navBar(),
    h("header", { class: "hero gutter" }, h("div", { class: "hero-in" }, h("h1", null, "Voort", h("span", { text: "gang" })), heroStats())),
    h("main", { class: "main gutter" },
      h("div", { class: "resgrid" },
        stat(t("answered_total"), s.answered), stat(t("accuracy"), pct + "%"), stat(t("best_combo"), s.bestCombo),
        stat(t("streak"), st.cur + " / " + st.best), stat("XP", progress.xp), stat(t("badges_title"), Object.keys(progress.badges).length + "/" + BADGES.length)),
      accordion("activity", "teal", t("activity"), activityBlock),
      accordion("pmastery", "blue", t("mastery"), masteryBlock),
      accordion("pbadges", "orange", t("badges_title"), badgesBlock),
      accordion("history", "purple", t("history"), historyBlock)),
    footer());
}

/* ---------- sessie ---------- */
let dxOffset = 0;
function dxOrder() {
  const order = DIAGNOSES.map((_, i) => i), rnd = seeded("dx-volgorde-v1");
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  return order;
}
function diagnosisCard() {
  if (!DIAGNOSES.length) return null;
  const order = dxOrder(), n = order.length, day = TODAY() + dxOffset;
  const d = DIAGNOSES[order[((day % n) + n) % n]];
  const qids = (d.qids || []).filter(id => byId[id]);
  const nav = (delta) => { dxOffset += delta; renderHome(); const el = document.getElementById("dx-card"); if (el) el.scrollIntoView({ block: "nearest" }); };
  return h("section", { class: "card dx", id: "dx-card" }, cardHead("🩻", "purple", t("dx_title"), dxOffset ? (dxOffset > 0 ? "+" : "") + dxOffset + " · " + t("dx_sub") : t("dx_sub")),
    h("div", { class: "card-body" },
      h("div", { class: "row" }, h("h3", { class: "dx-name", text: d.naam }), h("span", { class: "tag", text: d.rubriek }), lang === "en" ? h("span", { class: "hint", text: t("dx_nl_only") }) : null),
      h("p", { class: "dx-kern", text: d.kern }),
      h("div", { class: "dx-sec" }, h("b", { text: t("dx_img") }), h("ul", null, d.beeld.map(x => h("li", { text: x })))),
      h("p", { class: "dx-sec" }, h("b", { text: t("dx_dd") + ": " }), d.dd),
      h("p", { class: "dx-pearl" }, h("b", { text: "💡 " + t("dx_pearl") + ": " }), d.pearl),
      h("div", { class: "row" },
        qids.length ? h("button", { class: "btn purple pill", onclick: () => startSession("exam", qids) }, t("dx_practice", { n: qids.length })) : null,
        h("a", { class: "linkbtn", href: rpUrl(d.rp[0]), target: "_blank", rel: "noopener" }, "Radiopaedia ↗"),
        h("span", { class: "spacer" }),
        h("button", { class: "chip-btn", "aria-label": t("dx_prev"), onclick: () => nav(-1) }, "‹"),
        dxOffset ? h("button", { class: "chip-btn", onclick: () => { dxOffset = 0; renderHome(); } }, t("dx_today")) : null,
        h("button", { class: "chip-btn", "aria-label": t("dx_next"), onclick: () => nav(1) }, "›"))));
}
function startSession(mode, ids) {
  let queue;
  if (ids) queue = shuffle(ids);
  else if (mode === "wrong") queue = shuffle(dueIds());
  else if (mode === "daily") queue = weightedSample(QUESTIONS.filter(q => q.type === "mc"), 10, seeded("vgt-" + dayKey())).map(q => q.id);
  else queue = weightedSample(pool(), examSize).map(q => q.id);
  if (!queue.length) return renderHome();
  session = { mode, queue, idx: 0, res: [], reveal: false, combo: 0, bestCombo: 0, xp: 0, levelStart: levelOf(progress.xp).i, unlocked: [] };
  view = "quiz"; window.scrollTo(0, 0); renderQuestion();
}
function answered() { return session.res.filter(Boolean); }
function record(q, correct, extra) {
  const now = new Date(); const dk = dayKey(now); const tn = TODAY();
  const prev = progress.qs[q.id] || { n: 0, ok: 0, last: false };
  const box = progress.box[q.id];
  const wasWrong = !!box && box.b === 0;
  let gain = 0, goalHit = false;
  if (correct) { session.combo++; gain = 10 + 2 * Math.min(session.combo - 1, 5) + (wasWrong ? 5 : 0); } else session.combo = 0;
  session.bestCombo = Math.max(session.bestCombo, session.combo);
  progress.stats.bestCombo = Math.max(progress.stats.bestCombo, session.combo);
  const before = progress.days[dk] || 0; progress.days[dk] = before + 1;
  const goal = progress.goal || 20;
  if (before < goal && before + 1 >= goal && !progress.goalDays[dk]) { progress.goalDays[dk] = 1; gain += 50; goalHit = true; }
  progress.xp += gain; session.xp += gain;
  if (window.__iaAnswer) { try { window.__iaAnswer({ question_id: q.id, correct: !!correct, chosen: extra && extra.chosen != null && q.options ? String(q.options[extra.chosen]).slice(0, 300) : null, mode: session.mode, first: !prev.n }); } catch (e) {} }
  progress.qs[q.id] = { n: prev.n + 1, ok: prev.ok + (correct ? 1 : 0), last: correct, mastered: !!prev.mastered && correct, t: Date.now() };
  progress.seen[q.id] = (progress.seen[q.id] || 0) + 1;
  if (correct) {
    delete progress.wrong[q.id];
    if (box) {
      if (wasWrong) progress.stats.fixed++;
      const nb = box.b + 1;
      if (nb >= INTERVALS.length) { delete progress.box[q.id]; progress.qs[q.id].mastered = true; }
      else progress.box[q.id] = { b: nb, due: tn + INTERVALS[nb] };
    }
    if (hasImages(q)) progress.stats.imgCorrect++;
  } else {
    progress.wrong[q.id] = (progress.wrong[q.id] || 0) + 1;
    progress.box[q.id] = { b: 0, due: tn + INTERVALS[0] };
  }
  const hr = now.getHours(); if (hr < 5) progress.stats.night = true; else if (hr < 7) progress.stats.early = true;
  session.res[session.idx] = Object.assign({ id: q.id, correct, gain, combo: session.combo }, extra);
  session.reveal = false;
  const fresh = checkBadges(); session.unlocked.push(...fresh);
  saveProgress();
  const msgs = []; if (goalHit) msgs.push(t("goal_hit")); for (const b of fresh) msgs.push(b[1] + " " + t("new_badge") + ": " + t(b[2]));
  msgs.forEach((m, i) => setTimeout(() => toast(m), 60 + i * 2700));
}
function go(delta) {
  const to = session.idx + delta;
  if (to < 0) return;
  if (delta > 0 && !session.res[session.idx]) return;
  if (to >= session.queue.length) return finish();
  session.idx = to; session.reveal = false; renderQuestion(); window.scrollTo(0, 0);
}
function finish() {
  const done = answered(); const correct = done.filter(r => r.correct).length;
  if (done.length) {
    if (done.length >= 10 && correct === done.length) progress.stats.perfect++;
    if (session.mode === "daily") progress.daily[dayKey()] = { c: correct, t: done.length };
    const d = new Date();
    progress.history.push({ date: d.getDate() + "-" + (d.getMonth() + 1), correct, total: done.length, kind: session.mode, xp: session.xp });
    progress.history = progress.history.slice(-40);
    session.unlocked.push(...checkBadges());
    saveProgress();
  }
  view = "result"; renderResult();
}
function renderQuestion() {
  view = "quiz";
  const q = byId[session.queue[session.idx]];
  const n = session.queue.length; const res = session.res[session.idx] || null;
  const done = answered(); const ok = done.filter(r => r.correct).length;
  const head = h("div", { class: "qhead" },
    h("div", { class: "row" },
      h("button", { class: "btn", id: "prev", disabled: session.idx === 0, onclick: () => go(-1) }, t("prev")),
      h("span", { class: "num", style: "font-weight:700;font-size:0.86rem", text: t("q_of", { i: session.idx + 1, n }) }),
      h("span", { class: "spacer" }),
      session.combo >= 2 ? h("span", { class: "combo num", text: "🔥 " + t("combo", { n: session.combo }) }) : null,
      h("span", { class: "tag teal num", text: "+" + session.xp + " XP" }),
      h("button", { class: "btn", id: "stop", onclick: finish }, t("stop"))),
    h("div", { class: "qtrack" }, h("span", { style: "width:" + (100 * done.length / n) + "%" })));
  const col = color(q);
  const wasWrong = progress.box[q.id] && session.mode !== "wrong" && !res;
  const inner = h("div", { class: "qinner" },
    h("div", { class: "qmeta" },
      h("span", { class: "tag " + col, text: q.topic }), h("span", { class: "tag", style: "background:var(--card);color:var(--muted)", text: q.source }),
      session.mode === "daily" ? h("span", { class: "tag teal", text: t("daily_title") }) : null,
      wasWrong ? h("span", { class: "tag red", text: t("earlier_wrong") }) : null,
      h("span", { class: "spacer" }), h("span", { class: "hint num", text: t("correct_n", { n: ok }) })),
    h("p", { class: "stem", text: q.question }),
    figures(q.images, q.imageLabels, q.imageCredit));
  if (q.type === "open") renderOpen(q, inner, res); else renderMC(q, inner, res);
  mount(navBar(), h("main", { class: "main gutter" }, head, h("article", { class: "qcard" }, h("div", { class: "qbar", style: "background:var(--" + col + ")" }), inner)));
  const focus = inner.querySelector("[data-autofocus]");
  if (focus) focus.focus({ preventScroll: true });
}
function renderMC(q, el, res) {
  el.append(h("ol", { class: "opts", "aria-label": "Antwoordopties" },
    q.options.map((text, i) => {
      let cls = "opt";
      if (res) cls += i === q.answer ? " right" : (i === res.chosen ? " wrong" : " dim");
      return h("li", null, h("button", { class: cls, disabled: !!res, onclick: () => { record(q, i === q.answer, { chosen: i }); renderQuestion(); } },
        h("span", { class: "sn", text: LETTERS[i] }), h("span", { class: "txt", text })));
    })));
  if (!res) { el.append(h("p", { class: "hint", style: "margin:0", text: t("keys", { L: LETTERS[q.options.length - 1] }) })); return; }
  el.append(explain(q, res));
}
function renderOpen(q, el, res) {
  if (!res && !session.reveal) { el.append(h("div", { class: "row" }, h("button", { class: "btn blue pill", "data-autofocus": true, onclick: () => { session.reveal = true; renderQuestion(); } }, t("show_answer")))); return; }
  el.append(h("div", { class: "model", text: q.modelAnswer }));
  if (!res) { el.append(h("div", { class: "row" }, h("button", { class: "btn teal", "data-autofocus": true, onclick: () => { record(q, true, {}); renderQuestion(); } }, t("knew")), h("button", { class: "btn red", onclick: () => { record(q, false, {}); renderQuestion(); } }, t("didnt")))); return; }
  el.append(explain(q, res));
}
function linkLine(q) { return h("p", { class: "links" }, t("read_more") + " ", linksFor(q).map((l, i) => [i ? " · " : null, h("a", { href: l.url, target: "_blank", rel: "noopener", text: l.label })])); }
function explain(q, res) {
  const last = session.idx + 1 >= session.queue.length;
  const verdict = res.correct ? t("good") : (q.options ? t("wrong_is", { L: LETTERS[q.answer] }) : t("didnt"));
  return h("section", { class: "note " + (res.correct ? "ok" : "bad") },
    h("div", { class: "verdict" }, verdict, res.gain ? h("span", { class: "xpgain num", text: "+" + res.gain + " XP" }) : null, res.correct && res.combo >= 3 ? h("span", { class: "combo", text: "🔥 " + res.combo }) : null),
    q.explanation ? h("p", { class: "etext", text: q.explanation }) : null,
    q.flag ? h("p", { class: "flagnote", text: t(FLAG_LABEL[q.flag]) + ". " + t(FLAG_NOTE[q.flag]) }) : null,
    figures(q.explImages, null, q.explCredit),
    linkLine(q),
    h("div", { class: "row" }, h("button", { class: "btn blue", "data-autofocus": true, onclick: () => go(1) }, last ? t("to_result") : t("next")), h("span", { class: "hint", text: t("enter_next") }),
      window.__iaFeedback && !(session.fb && session.fb[q.id]) ? [h("span", { class: "spacer" }), h("button", { class: "linkbtn fblink", type: "button", onclick: () => { (session.fb = session.fb || {})[q.id] = "open"; if (fbDraft.id !== q.id) fbDraft = { id: q.id, cat: "key", text: "", err: "" }; renderQuestion(); const ta = document.getElementById("fb-text"); if (ta) ta.focus(); } }, "⚑ " + t("fb_open"))] : null),
    feedbackBox(q));
}
const FB_CATS = [["key", "Het juiste antwoord klopt niet", "The answer key is wrong"], ["unclear", "Vraag of antwoordopties onduidelijk", "Question or options unclear"], ["image", "Beeld klopt niet of ontbreekt", "Image wrong or missing"], ["explanation", "Uitleg kan beter", "Explanation could be better"], ["other", "Anders", "Other"]];
let fbDraft = { id: null, cat: "key", text: "", err: "" };
function feedbackBox(q) {
  const st = session.fb && session.fb[q.id];
  if (!window.__iaFeedback || !st) return null;
  if (st === "sent") return h("p", { class: "fbdone", role: "status", text: "✓ " + t("fb_thanks") });
  const sending = st === "sending";
  const send = async () => {
    if (!fbDraft.text.trim()) { const ta = document.getElementById("fb-text"); if (ta) ta.focus(); return; }
    session.fb[q.id] = "sending"; fbDraft.err = ""; renderQuestion();
    try { await window.__iaFeedback({ question_id: q.id, category: fbDraft.cat, message: fbDraft.text.trim() }); session.fb[q.id] = "sent"; fbDraft = { id: null, cat: "key", text: "", err: "" }; }
    catch (e) { session.fb[q.id] = "open"; fbDraft.err = t("fb_err") + (e.message || e); }
    if (view === "quiz" && byId[session.queue[session.idx]] === q) renderQuestion();
  };
  return h("div", { class: "fbbox" },
    h("label", { class: "flabel", for: "fb-cat", text: t("fb_what") }),
    h("select", { id: "fb-cat", disabled: sending, onchange: e => { fbDraft.cat = e.target.value; } }, FB_CATS.map(c => h("option", { value: c[0], selected: fbDraft.cat === c[0] }, lang === "nl" ? c[1] : c[2]))),
    h("textarea", { id: "fb-text", rows: 3, maxlength: 2000, disabled: sending, placeholder: t("fb_ph"), oninput: e => { fbDraft.text = e.target.value; } }, fbDraft.text),
    fbDraft.err ? h("p", { class: "hint", style: "color:var(--red);margin:0", text: fbDraft.err }) : null,
    h("div", { class: "row" },
      h("button", { class: "btn teal", type: "button", disabled: sending, onclick: send }, t("fb_send")),
      h("button", { class: "btn", type: "button", disabled: sending, onclick: () => { delete session.fb[q.id]; renderQuestion(); } }, t("fb_cancel"))));
}

/* ---------- resultaat ---------- */
function renderResult() {
  view = "result";
  const results = answered(); const total = results.length; const correct = results.filter(r => r.correct).length; const wrong = results.filter(r => !r.correct);
  const pct = total ? Math.round(100 * correct / total) : 0;
  const lv = levelOf(progress.xp); const leveled = lv.i > session.levelStart;
  const words = (session.mode === "wrong" ? t("review_done") : session.mode === "daily" ? t("daily_done_t") : t("round_done")).split(" ");
  const stat = (lbl, val, style) => h("div", { class: "rstat" }, h("div", { class: "lbl", text: lbl }), h("div", { class: "bigfig num", style, text: val }));
  mount(navBar(),
    h("header", { class: "hero gutter" }, h("div", { class: "hero-in" },
      h("h1", null, words[0] + " ", h("span", { text: words.slice(1).join(" ") })),
      h("p", { class: "sub num", text: correct + " / " + total + " · " + pct + "%" }),
      heroStats())),
    h("main", { class: "main gutter" },
      h("div", { class: "resgrid" }, stat(t("score"), pct + "%"), stat(t("xp_earned"), "+" + session.xp, "color:var(--teal)"), stat(t("best_combo"), session.bestCombo)),
      leveled ? h("div", { class: "unlock" }, h("span", { class: "b-ic", text: "⬆️" }), h("div", { class: "card-title", text: t("levelup", { t: lv.name }) })) : null,
      session.unlocked.map(b => h("div", { class: "unlock" }, h("span", { class: "b-ic", text: b[1] }), h("div", null, h("div", { class: "card-title", text: t("new_badge") + ": " + t(b[2]) }), h("div", { class: "hint", text: t(b[3]) })))),
      h("div", { class: "row" },
        wrong.length ? h("button", { class: "btn red pill", onclick: () => startSession("exam", wrong.map(r => r.id)) }, t("repeat_wrong", { n: wrong.length })) : null,
        h("button", { class: "btn teal pill", onclick: () => startSession("exam") }, t("new_round", { n: examSize })),
        h("button", { class: "btn pill", onclick: goHome }, t("home"))),
      wrong.length ? h("section", { style: "display:flex;flex-direction:column;gap:0.5rem" },
        h("div", { class: "flabel", text: t("wrong_list") }),
        wrong.map(r => {
          const q = byId[r.id];
          return h("details", { class: "rev" }, h("summary", { text: short(q.question, 150) }),
            h("div", { class: "inner" },
              q.type === "open" ? h("p", { class: "model", text: q.modelAnswer })
                : h("p", { style: "margin:0" }, h("strong", { text: LETTERS[q.answer] + ". " + q.options[q.answer] }), r.chosen != null ? h("span", { class: "muted", text: "  (" + t("yours") + ": " + LETTERS[r.chosen] + ")" }) : null),
              q.explanation ? h("p", { class: "etext", text: q.explanation }) : null,
              linkLine(q)));
        })) : h("p", { class: "muted", style: "margin:0", text: total ? t("all_good") : t("none_answered") })),
    footer());
  if (leveled || (total >= 10 && correct === total)) confetti();
  window.scrollTo(0, 0);
}

/* ---------- toetsenbord ---------- */
document.addEventListener("keydown", e => {
  if (lightboxEl) { if (e.key === "Escape" || e.key === "Enter") { e.preventDefault(); closeLightbox(); } return; }
  if (!session || view !== "quiz" || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = e.target && e.target.tagName;
  if (tag === "TEXTAREA" || tag === "SELECT" || tag === "INPUT") return;
  const q = byId[session.queue[session.idx]]; if (!q) return;
  const res = session.res[session.idx];
  if (e.key === "ArrowLeft") { e.preventDefault(); return go(-1); }
  if (res && (e.key === "ArrowRight" || (e.key === "Enter" && tag !== "BUTTON" && tag !== "A"))) { e.preventDefault(); return go(1); }
  if (res) return;
  if (q.type === "open") {
    if (!session.reveal && (e.key === " " || e.key === "Enter") && tag !== "BUTTON") { e.preventDefault(); session.reveal = true; renderQuestion(); }
    else if (session.reveal && /^[jJnNyY]$/.test(e.key)) { e.preventDefault(); record(q, /[jy]/i.test(e.key), {}); renderQuestion(); }
    return;
  }
  const k = e.key.toUpperCase();
  let i = k.length === 1 ? LETTERS.indexOf(k) : -1;
  if (i < 0 && /^[1-9]$/.test(e.key)) i = Number(e.key) - 1;
  if (i >= 0 && i < q.options.length) { e.preventDefault(); record(q, i === q.answer, { chosen: i }); renderQuestion(); }
});
document.documentElement.lang = lang;
renderHome();
