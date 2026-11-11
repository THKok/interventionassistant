/* VGT-oefenen · toegangspoort
   Vragen staan in Supabase en worden pas opgehaald na inloggen met een goedgekeurd account.
   Vul hieronder de Project URL en de anon/publishable key in (Supabase → Project Settings → API).
   De anon key mag publiek zijn: de beveiliging zit in de Row Level Security van de database. */
const IA_SUPABASE_URL = "https://tygfjblnbuvjwzeujtjh.supabase.co";
const IA_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5Z2ZqYmxuYnV2and6ZXVqdGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwMTc2MDUsImV4cCI6MjEwOTU5MzYwNX0.o1JibnTNOMVntwraKvl0dsGLHYpblPtNoem_ub6XEL8";
const IA_ADMIN_CONTACT = ""; // optioneel: e-mailadres dat afgewezen aanvragers te zien krijgen

(function () {
  const LSK = "rad-oefententamen-v1";
  const root = document.getElementById("app");
  let sb = null, session = null, profile = null, mode = "login", busy = false, msg = null, recovery = false;
  let lang = "nl";
  try { const l = localStorage.getItem("ia-lang"); if (l === "en" || l === "nl") lang = l; } catch (e) {}
  try { const s = localStorage.getItem("ia-theme"); if (s === "dark" || s === "light") document.documentElement.dataset.theme = s; } catch (e) {}

  const S = {
    nl: {
      title: "VGT-<span>oefenen</span>", sub: "Oefenvragen voor de radiologie-voortgangstoets. Alleen toegankelijk voor aios en radiologen met een goedgekeurd account.",
      login: "Inloggen", request: "Toegang aanvragen", email: "E-mailadres", pw: "Wachtwoord", pw_new: "Kies een wachtwoord (min. 8 tekens)",
      name: "Naam", inst: "Opleidingsziekenhuis of instelling", reason: "Toelichting (bijv. aios jaar 3, opleider dr. X)",
      do_login: "Inloggen", do_request: "Aanvraag versturen", forgot: "Wachtwoord vergeten?", reset_sent: "Als er een account met dit adres bestaat, is er een e-mail met een link verstuurd. Kijk ook in je spammap.", reset_need: "Vul eerst je e-mailadres in en klik dan op Wachtwoord vergeten.", reset_fail: "Versturen lukte niet: ",
      new_pw_t: "Kies een nieuw wachtwoord", new_pw: "Nieuw wachtwoord (min. 8 tekens)", new_pw2: "Herhaal het nieuwe wachtwoord", save_pw: "Wachtwoord opslaan", pw_mismatch: "De wachtwoorden zijn niet gelijk.", pw_saved: "Je wachtwoord is gewijzigd.", link_bad: "Deze link is verlopen of al gebruikt. Vraag een nieuwe aan via Wachtwoord vergeten.",
      pending_t: "Je aanvraag is ontvangen", pending_p: "Je krijgt toegang zodra je aanvraag is goedgekeurd. Je hoeft niets te doen: log later opnieuw in of ververs deze pagina.",
      rejected_t: "Geen toegang", rejected_p: "Je aanvraag is niet goedgekeurd. Neem contact op als je denkt dat dit een vergissing is: ",
      refresh: "Opnieuw controleren", logout: "Uitloggen", loading: "Vragen laden…", err: "Er ging iets mis: ", bad_login: "E-mailadres of wachtwoord klopt niet.",
      confirm_mail: "Bevestig eerst je e-mailadres via de link in je mailbox en log daarna in.", exists: "Er bestaat al een account met dit e-mailadres. Log in.",
      requests: "Aanvragen", approve: "Goedkeuren", reject: "Afwijzen", none: "Geen openstaande aanvragen.", close: "Sluiten", approved_list: "Goedgekeurd",
      admin: "Beheer", feedback: "Meldingen", mark_done: "Afgehandeld", reopen: "Heropenen", copy_open: "Kopieer open meldingen", copied: "Gekopieerd ✓",
      key: "Juiste antwoord", show_full: "Hele vraag met uitleg", no_fb: "Geen open meldingen.", done_list: "Afgehandelde meldingen", q_missing: "Deze vraag bestaat niet meer.",
      n_req: "aanvra|ag|gen", n_fb: "melding||en",
      name_t: "Kies je naam", name_p: "Met deze naam doe je straks mee aan ranglijsten, zoals die van de dagelijkse uitdaging. Je kunt hem later altijd aanpassen via je profiel.",
      name_lbl: "Naam in ranglijsten (2–24 tekens)", anon_lbl: "Anoniem meedoen: anderen zien \u2018Anoniem\u2019 in plaats van je naam", name_save: "Opslaan en verder", name_need: "Vul een naam in van minstens 2 tekens.",
      profile: "Profiel", profile_saved: "Opgeslagen.", save: "Opslaan", account: "Account", acc_name: "Naam bij aanvraag", acc_inst: "Instelling",
      qc: "Controle", qc_ok: "Nagekeken", qc_todo: "Te controleren", qc_fix: "Aan te passen", qc_claude: "Twijfel Claude",
      qc_m_flag: "Gemarkeerd", qc_m_fix: "Aan te passen", qc_m_topic: "Per onderwerp", qc_m_ok: "Nagekeken",
      qc_hint: "Gemarkeerd = automatische signalen uit de antwoorden (lage % goed, populaire foute keuze, sterke spelers scoren slechter) en vragen waar Claude bij de uitleg twijfelde. Keur goed met ✓, of noteer wat er aan moet gebeuren.",
      qc_good: "✓ Klopt", qc_bad: "✗ Aanpassen", qc_note: "Wat moet er anders?", qc_save: "Opslaan", qc_undo: "Ongedaan maken", qc_none: "Niets in deze lijst.", qc_copy: "Kopieer aanpassingen voor Claude",
      qc_missing: "De database-uitbreiding voor controle is nog niet geïnstalleerd (08_controle.sql).", qc_topic_all: "Kies een onderwerp", qc_unrev: "nog niet nagekeken",
      f_claude: "Claude twijfelt: ", f_key: "Slechts {p}% goed (n={n}): klopt de sleutel?", f_dis: "Fout antwoord \u201e{c}\u201d vaker gekozen ({a}\u00d7) dan het juiste ({b}\u00d7)", f_disc: "Sterkere spelers scoren slechter ({a}% vs {b}%)",
      why_t: "Waarom de andere antwoorden niet kloppen",
      stats: "Statistieken", st_answers: "Antwoorden", st_users: "Deelnemers", st_q: "Vragen beantwoord", st_7d: "Laatste 7 dagen", st_min: "Minimaal aantal antwoorden", st_hard: "Moeilijkst eerst", st_easy: "Makkelijkst eerst", st_most: "Meest beantwoord", st_pct: "% goed", st_first: "1e poging", st_none: "Nog geen antwoorden met dit minimum.", st_hint: "Lage % goed + één populaire foute keuze: controleer of de sleutel klopt. Bijna 100% goed: vraag is mogelijk te makkelijk.", st_choices: "Gekozen antwoorden", st_more: "Meer tonen",
      mail_sent: "Goedgekeurd — {e} heeft een e-mail gekregen met een inloglink.", mail_fail: "Goedgekeurd, maar de e-mail aan {e} kon niet worden verstuurd: ", resend_mail: "Mail opnieuw",
      not_configured: "De koppeling met de database is nog niet ingesteld (IA_SUPABASE_URL en IA_SUPABASE_ANON_KEY in gate.js).",
      privacy: "We bewaren je naam, e-mailadres, instelling en je oefenvoortgang, alleen voor deze oefenomgeving."
    },
    en: {
      title: "VGT <span>practice</span>", sub: "Practice questions for the Dutch radiology progress test. Only for residents and radiologists with an approved account.",
      login: "Sign in", request: "Request access", email: "Email", pw: "Password", pw_new: "Choose a password (min. 8 characters)",
      name: "Name", inst: "Training hospital or institution", reason: "Note (e.g. resident year 3, programme director Dr X)",
      do_login: "Sign in", do_request: "Send request", forgot: "Forgot password?", reset_sent: "If an account with this address exists, an email with a link has been sent. Check your spam folder too.", reset_need: "Enter your email address first, then click Forgot password.", reset_fail: "Sending failed: ",
      new_pw_t: "Choose a new password", new_pw: "New password (min. 8 characters)", new_pw2: "Repeat the new password", save_pw: "Save password", pw_mismatch: "The passwords do not match.", pw_saved: "Your password has been changed.", link_bad: "This link has expired or was already used. Request a new one via Forgot password.",
      pending_t: "Your request has been received", pending_p: "You will get access once your request is approved. Sign in again later or refresh this page.",
      rejected_t: "No access", rejected_p: "Your request was not approved. Contact us if you think this is a mistake: ",
      refresh: "Check again", logout: "Sign out", loading: "Loading questions…", err: "Something went wrong: ", bad_login: "Incorrect email or password.",
      confirm_mail: "Please confirm your email address via the link in your inbox, then sign in.", exists: "An account with this email already exists. Please sign in.",
      requests: "Requests", approve: "Approve", reject: "Reject", none: "No open requests.", close: "Close", approved_list: "Approved",
      admin: "Admin", feedback: "Reports", mark_done: "Resolved", reopen: "Reopen", copy_open: "Copy open reports", copied: "Copied ✓",
      key: "Correct answer", show_full: "Full question with explanation", no_fb: "No open reports.", done_list: "Resolved reports", q_missing: "This question no longer exists.",
      n_req: "request||s", n_fb: "report||s",
      name_t: "Choose your name", name_p: "This name will be used in leaderboards, such as the daily challenge. You can always change it later in your profile.",
      name_lbl: "Leaderboard name (2–24 characters)", anon_lbl: "Take part anonymously: others see \u2018Anonymous\u2019 instead of your name", name_save: "Save and continue", name_need: "Enter a name of at least 2 characters.",
      profile: "Profile", profile_saved: "Saved.", save: "Save", account: "Account", acc_name: "Name on request", acc_inst: "Institution",
      qc: "Review", qc_ok: "Reviewed", qc_todo: "To check", qc_fix: "To fix", qc_claude: "Claude unsure",
      qc_m_flag: "Flagged", qc_m_fix: "To fix", qc_m_topic: "By topic", qc_m_ok: "Reviewed",
      qc_hint: "Flagged = automatic signals from answers (low % correct, popular wrong choice, stronger players score worse) and questions where Claude was unsure about the explanation. Approve with ✓ or note what needs to change.",
      qc_good: "✓ Correct", qc_bad: "✗ Needs fix", qc_note: "What should change?", qc_save: "Save", qc_undo: "Undo", qc_none: "Nothing in this list.", qc_copy: "Copy fixes for Claude",
      qc_missing: "The review database extension is not installed yet (08_controle.sql).", qc_topic_all: "Choose a topic", qc_unrev: "not reviewed yet",
      f_claude: "Claude unsure: ", f_key: "Only {p}% correct (n={n}): is the key right?", f_dis: "Wrong answer \u201c{c}\u201d chosen more often ({a}\u00d7) than the correct one ({b}\u00d7)", f_disc: "Stronger players score worse ({a}% vs {b}%)",
      why_t: "Why the other answers are wrong",
      stats: "Statistics", st_answers: "Answers", st_users: "Participants", st_q: "Questions answered", st_7d: "Last 7 days", st_min: "Minimum number of answers", st_hard: "Hardest first", st_easy: "Easiest first", st_most: "Most answered", st_pct: "% correct", st_first: "1st attempt", st_none: "No answers yet with this minimum.", st_hint: "Low % correct + one popular wrong choice: check the answer key. Nearly 100% correct: the question may be too easy.", st_choices: "Chosen answers", st_more: "Show more",
      mail_sent: "Approved — {e} has received an email with a sign-in link.", mail_fail: "Approved, but the email to {e} could not be sent: ", resend_mail: "Email again",
      not_configured: "The database connection has not been configured yet (IA_SUPABASE_URL and IA_SUPABASE_ANON_KEY in gate.js).",
      privacy: "We store your name, email, institution and practice progress, only for this practice environment."
    }
  };
  const t = k => S[lang][k] || S.nl[k];

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) { if (kid == null || kid === false) continue; el.append(kid.nodeType ? kid : document.createTextNode(String(kid))); }
    return el;
  }
  function nav() {
    return h("nav", { class: "ia gutter" }, h("div", { class: "nav-in" },
      h("a", { class: "logo", href: "/" }, "Intervention", h("span", { text: "Assistant" }), h("small", { text: "VGT-oefenen" })),
      h("div", { class: "nav-right" },
        session ? h("button", { class: "chip-btn", onclick: logout }, t("logout")) : null,
        h("button", { class: "chip-btn", onclick: () => { lang = lang === "nl" ? "en" : "nl"; try { localStorage.setItem("ia-lang", lang); } catch (e) {} draw(); } }, lang === "nl" ? "EN" : "NL"))));
  }
  function shell(...body) {
    root.replaceChildren(nav(),
      h("header", { class: "hero gutter" }, h("div", { class: "hero-in" }, h("h1", { html: t("title") }), h("p", { class: "sub", text: t("sub") }))),
      h("main", { class: "gate gutter" }, h("div", { class: "gate-in" }, ...body)));
  }
  const field = (id, label, type, extra) => h("label", { class: "fld" }, h("span", { text: label }), h(type === "area" ? "textarea" : "input", Object.assign({ id, name: id, type: type === "area" ? null : type, rows: type === "area" ? 3 : null }, extra || {})));
  const note = () => msg ? h("p", { class: "gmsg " + (msg.ok ? "ok" : "bad"), role: "status", text: msg.text }) : null;

  function draw() {
    if (!sb) { shell(h("div", { class: "card gcard" }, h("p", { text: t("not_configured") }))); return; }
    if (recovery && session) return drawRecovery();
    if (!session) return drawAuth();
    if (!profile) { shell(h("p", { class: "muted", text: t("loading") })); return; }
    if (profile.status === "pending") return shell(h("div", { class: "card gcard" }, h("div", { class: "stripe blue" }),
      h("h2", { text: t("pending_t") }), h("p", { text: t("pending_p") }), note(),
      h("div", { class: "row" }, h("button", { class: "btn blue", onclick: afterLogin }, t("refresh")), h("button", { class: "btn", onclick: logout }, t("logout")))));
    if (profile.status === "rejected") return shell(h("div", { class: "card gcard" }, h("div", { class: "stripe red" }),
      h("h2", { text: t("rejected_t") }), h("p", {}, IA_ADMIN_CONTACT ? [t("rejected_p"), h("a", { href: "mailto:" + IA_ADMIN_CONTACT, text: IA_ADMIN_CONTACT })] : t("rejected_p").replace(/: $/, ".")),
      h("div", { class: "row" }, h("button", { class: "btn", onclick: logout }, t("logout")))));
  }
  function drawAuth() {
    const tabs = h("div", { class: "gtabs", role: "tablist" },
      ["login", "request"].map(m => h("button", { class: "gtab" + (mode === m ? " on" : ""), role: "tab", "aria-selected": String(mode === m), onclick: () => { mode = m; msg = null; draw(); } }, t(m))));
    const form = mode === "login"
      ? h("form", { onsubmit: e => { e.preventDefault(); doLogin(); } },
          field("g-email", t("email"), "email", { autocomplete: "email", required: true }),
          field("g-pw", t("pw"), "password", { autocomplete: "current-password", required: true }),
          note(),
          h("button", { class: "btn teal wide", type: "submit", disabled: busy }, t("do_login")),
          h("button", { class: "linkbtn", type: "button", onclick: doReset }, t("forgot")))
      : h("form", { onsubmit: e => { e.preventDefault(); doRequest(); } },
          field("g-name", t("name"), "text", { autocomplete: "name", required: true, maxlength: 120 }),
          field("g-email", t("email"), "email", { autocomplete: "email", required: true }),
          field("g-inst", t("inst"), "text", { required: true, maxlength: 160 }),
          field("g-reason", t("reason"), "area", { maxlength: 1000 }),
          field("g-pw", t("pw_new"), "password", { autocomplete: "new-password", required: true, minlength: 8 }),
          note(),
          h("button", { class: "btn teal wide", type: "submit", disabled: busy }, t("do_request")),
          h("p", { class: "hint", text: t("privacy") }));
    shell(h("div", { class: "card gcard" }, h("div", { class: "stripe teal" }), tabs, form));
  }
  const val = id => (document.getElementById(id) || {}).value || "";
  function drawRecovery() {
    shell(h("div", { class: "card gcard" }, h("div", { class: "stripe teal" }), h("h2", { text: t("new_pw_t") }),
      h("form", { onsubmit: e => { e.preventDefault(); doNewPassword(); } },
        h("input", { type: "email", autocomplete: "username", value: session.user.email || "", hidden: true, readonly: true }),
        field("g-pw", t("new_pw"), "password", { autocomplete: "new-password", required: true, minlength: 8 }),
        field("g-pw2", t("new_pw2"), "password", { autocomplete: "new-password", required: true, minlength: 8 }),
        note(),
        h("button", { class: "btn teal wide", type: "submit", disabled: busy }, t("save_pw")))));
  }
  async function doNewPassword() {
    const pw = val("g-pw");
    if (pw !== val("g-pw2")) { msg = { text: t("pw_mismatch") }; draw(); return; }
    busy = true; msg = null; draw();
    const { error } = await sb.auth.updateUser({ password: pw });
    busy = false;
    if (error) { msg = { text: t("err") + error.message }; draw(); return; }
    recovery = false; history.replaceState(null, "", location.pathname);
    afterLogin().then(() => { if (!document.querySelector(".qcard,.hero-stats")) { msg = { ok: true, text: t("pw_saved") }; draw(); } });
  }

  async function doLogin() {
    busy = true; msg = null;
    const { data, error } = await sb.auth.signInWithPassword({ email: val("g-email").trim(), password: val("g-pw") });
    busy = false;
    if (error) { msg = { text: /confirm/i.test(error.message) ? t("confirm_mail") : t("bad_login") }; draw(); return; }
    session = data.session; afterLogin();
  }
  async function doRequest() {
    busy = true; msg = null;
    const { data, error } = await sb.auth.signUp({ email: val("g-email").trim(), password: val("g-pw"),
      options: { data: { name: val("g-name").trim(), institution: val("g-inst").trim(), reason: val("g-reason").trim() } } });
    busy = false;
    if (error) { msg = { text: /registered|exists/i.test(error.message) ? t("exists") : t("err") + error.message }; draw(); return; }
    if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) { mode = "login"; msg = { text: t("exists") }; draw(); return; }
    if (!data.session) { mode = "login"; msg = { ok: true, text: t("confirm_mail") }; draw(); return; }
    session = data.session; afterLogin();
  }
  async function doReset() {
    const email = val("g-email").trim();
    if (!email) { msg = { text: t("reset_need") }; draw(); const el = document.getElementById("g-email"); if (el) el.focus(); return; }
    busy = true; msg = null; draw(); document.getElementById("g-email").value = email;
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
    busy = false;
    msg = error ? { text: t("reset_fail") + error.message } : { ok: true, text: t("reset_sent") };
    draw(); const el = document.getElementById("g-email"); if (el) el.value = email;
  }
  async function logout() { if (sb) await sb.auth.signOut(); session = null; profile = null; mode = "login"; msg = null; location.reload(); }

  // weergavenaam (voor ranglijsten) opslaan via de beveiligde functie set_display_name
  async function saveName(name, anon) {
    name = (name || "").trim().replace(/\s+/g, " ");
    if (name.length < 2) throw new Error(t("name_need"));
    const { data, error } = await sb.rpc("set_display_name", { p_name: name, p_anonymous: !!anon });
    if (error) throw new Error(error.message);
    profile.display_name = data || name; profile.anonymous = !!anon;
  }
  const nameFields = (val, anon) => [
    h("label", { class: "fld" }, h("span", { text: t("name_lbl") }), h("input", { id: "dn", type: "text", maxlength: 24, autocomplete: "nickname", value: val || "" })),
    h("label", { class: "check gcheck" }, h("input", { id: "anon", type: "checkbox", checked: !!anon }), h("span", { text: t("anon_lbl") }))];
  function drawName() {
    const sugg = (profile.name || "").trim().split(/\s+/)[0] || "";
    const go = async (e) => {
      e.preventDefault(); if (busy) return; busy = true;
      const v = document.getElementById("dn").value, a = document.getElementById("anon").checked;
      try { await saveName(v, a); msg = null; busy = false; afterLogin(); }
      catch (err) { busy = false; msg = { text: err.message }; drawNameKeep(v, a); }
    };
    const drawNameKeep = (v, a) => shell(h("div", { class: "card gcard" }, h("div", { class: "stripe teal" }),
      h("h2", { text: t("name_t") }), h("p", { text: t("name_p") }),
      h("form", { onsubmit: go }, nameFields(v, a), note(), h("button", { class: "btn teal", type: "submit" }, t("name_save")))));
    drawNameKeep(sugg, false);
  }
  function openProfile() {
    if (document.querySelector(".gpage")) return;
    if (location.hash !== "#profiel") history.replaceState(null, "", "#profiel");
    const page = h("div", { class: "gpage", role: "dialog", "aria-modal": "true", "aria-label": t("profile") });
    const esc = e => { if (e.key === "Escape") close(); };
    const close = () => { page.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", esc); history.replaceState(null, "", location.pathname + location.search); };
    document.addEventListener("keydown", esc);
    let pmsg = null;
    const render = (v, a) => {
      const save = async (e) => {
        e.preventDefault();
        const nv = page.querySelector("#dn").value, na = page.querySelector("#anon").checked;
        try { await saveName(nv, na); pmsg = { ok: true, text: t("profile_saved") }; render(profile.display_name, profile.anonymous); if (window.__iaRefreshFoot) window.__iaRefreshFoot(); }
        catch (err) { pmsg = { text: err.message }; render(nv, na); }
      };
      page.replaceChildren(h("div", { class: "gpage-in" },
        h("div", { class: "row between" }, h("h2", { text: t("profile") }), h("button", { class: "btn", onclick: close }, t("close"))),
        h("section", { class: "card gcard" }, h("div", { class: "stripe teal" }), h("h2", { text: t("name_lbl").replace(/ \(.*$/, "") }), h("p", { class: "muted", text: t("name_p") }),
          h("form", { onsubmit: save }, nameFields(v, a), pmsg ? h("p", { class: "gmsg " + (pmsg.ok ? "ok" : "bad"), role: "status", text: pmsg.text }) : null,
            h("div", { class: "row" }, h("button", { class: "btn teal", type: "submit" }, t("save"))))),
        h("section", { class: "card gcard" }, h("div", { class: "stripe blue" }), h("h2", { text: t("account") }),
          h("p", { class: "gacc" }, h("b", { text: t("email") + ": " }), session.user.email),
          profile.name ? h("p", { class: "gacc" }, h("b", { text: t("acc_name") + ": " }), profile.name) : null,
          profile.institution ? h("p", { class: "gacc" }, h("b", { text: t("acc_inst") + ": " }), profile.institution) : null,
          h("div", { class: "row" }, h("button", { class: "btn", onclick: logout }, t("logout"))))));
    };
    render(profile.display_name, profile.anonymous);
    document.body.style.overflow = "hidden";
    document.body.append(page);
  }
  async function afterLogin() {
    profile = null; msg = null; draw();
    const { data, error } = await sb.from("profiles").select("*").eq("id", session.user.id).maybeSingle();
    if (error || !data) { profile = { status: "pending" }; msg = error ? { text: t("err") + error.message } : null; draw(); return; }
    profile = data;
    if (profile.status !== "approved") { draw(); return; }
    if (!profile.display_name) { drawName(); return; }
    shell(h("p", { class: "muted", text: t("loading") }));
    try {
      const ks = await sb.from("app_secrets").select("value").eq("id", "content_key").maybeSingle();
      if (ks.error || !ks.data) throw new Error(ks.error ? ks.error.message : "sleutel ontbreekt");
      const raw = Uint8Array.from(atob(ks.data.value), c => c.charCodeAt(0));
      const ckey = await crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]);
      const dec = async (url) => {
        const r = await fetch(url, { cache: "no-cache" }); if (!r.ok) throw new Error(url + " " + r.status);
        const b = new Uint8Array(await r.arrayBuffer());
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: b.slice(0, 12) }, ckey, b.slice(12));
      };
      const plain = await dec("data/vragen.bin?v=" + (window.IA_APP_VERSION || "1"));
      const json = await new Response(new Blob([plain]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
      const bundle = JSON.parse(json), qs = bundle.questions;
      window.__iaBundleDx = bundle.diagnoses || [];
      window.__iaImg = {};
      const loading = {};
      window.__iaNeedImg = (k) => {
        if (loading[k] || !bundle.img[k]) return;
        loading[k] = dec("data/img/" + bundle.img[k]).then(buf => {
          const u = URL.createObjectURL(new Blob([buf], { type: "image/webp" }));
          window.__iaImg[k] = u;
          document.querySelectorAll('img[data-ia-img="' + k + '"]').forEach(i => { i.src = u; });
        }).catch(() => { delete loading[k]; });
      };
      const key = LSK + "-" + session.user.id;
      const remote = await sb.from("progress").select("data").eq("user_id", session.user.id).maybeSingle();
      let local = null; try { local = JSON.parse(localStorage.getItem(key) || "null"); } catch (e) {}
      const rem = remote.data && remote.data.data || null;
      const merged = mergeProgress(local, rem);
      if (merged) { try { localStorage.setItem(key, JSON.stringify(merged)); } catch (e) {} }
      lastRemoteTs = rem ? rem._ts || 0 : 0;
      startApp(qs);
      if (merged && sig(merged) !== sig(rem)) window.__iaSync(merged);
    } catch (e) { msg = { text: t("err") + (e.message || e) }; shell(h("div", { class: "card gcard" }, note(), h("button", { class: "btn", onclick: afterLogin }, t("refresh")))); }
  }

  /* Voortgang synchroniseren tussen apparaten: per vraag wint het laatst gegeven antwoord,
     dagtellingen/badges/doelen worden samengevoegd. Zo overschrijft een oud tabblad nooit nieuwere voortgang. */
  function sig(p) { if (!p) return ""; const c = Object.assign({}, p); delete c._ts; return JSON.stringify(c); }
  function mergeProgress(a, b) {
    if (!a) return b ? JSON.parse(JSON.stringify(b)) : null; if (!b) return JSON.parse(JSON.stringify(a));
    const newer = (b._ts || 0) > (a._ts || 0) ? b : a, older = newer === a ? b : a;
    const m = JSON.parse(JSON.stringify(newer));
    for (const k of ["qs", "wrong", "box", "seen", "days", "daily", "goalDays", "badges", "stats"]) m[k] = m[k] || {};
    const oq = older.qs || {}, ow = older.wrong || {}, ob = older.box || {}, os = older.seen || {};
    for (const id of Object.keys(oq)) {
      const x = oq[id], y = m.qs[id];
      const tx = x.t || 0, ty = y ? (y.t || 0) : -1;
      if (!y || tx > ty || (tx === ty && (x.n || 0) > (y.n || 0))) {
        m.qs[id] = x;
        if (ow[id] != null) m.wrong[id] = ow[id]; else delete m.wrong[id];
        if (ob[id]) m.box[id] = ob[id]; else delete m.box[id];
      }
    }
    for (const id of Object.keys(ow)) if (!oq[id] && !m.qs[id] && m.wrong[id] == null) { m.wrong[id] = ow[id]; if (ob[id]) m.box[id] = ob[id]; }
    for (const id of Object.keys(os)) m.seen[id] = Math.max(m.seen[id] || 0, os[id]);
    for (const [d, n] of Object.entries(older.days || {})) m.days[d] = Math.max(m.days[d] || 0, n);
    for (const k of ["daily", "goalDays", "badges"]) for (const [d, v] of Object.entries(older[k] || {})) if (m[k][d] == null) m[k][d] = v;
    for (const [k, v] of Object.entries(older.stats || {})) m.stats[k] = typeof v === "boolean" ? (m.stats[k] || v) : Math.max(m.stats[k] || 0, v || 0);
    m.xp = Math.max(m.xp || 0, older.xp || 0);
    m.rank = Math.max(m.rank || 0, older.rank || 0);
    m.vgtBest = Object.assign({}, m.vgtBest || {}); for (const [k, v] of Object.entries(older.vgtBest || {})) m.vgtBest[k] = Math.max(m.vgtBest[k] || 0, v);
    const msum = x => x ? (x.chest ? 1e6 : 0) + (x.list || []).reduce((a, y) => a + (y.p || 0), 0) : -1;
    if (older.missions && (!m.missions || older.missions.day > m.missions.day || (older.missions.day === m.missions.day && msum(older.missions) > msum(m.missions)))) m.missions = older.missions;
    const seenH = new Set((m.history || []).map(r => JSON.stringify(r)));
    m.history = (older.history || []).filter(r => !seenH.has(JSON.stringify(r))).concat(m.history || []).slice(-40);
    m._ts = Math.max(a._ts || 0, b._ts || 0);
    return m;
  }

  let syncTimer = null, pending = null, lastRemoteTs = 0, pulling = false, lastPull = 0;
  async function fetchRemote() {
    const r = await sb.from("progress").select("data").eq("user_id", session.user.id).maybeSingle();
    if (r.error) throw r.error; return r.data && r.data.data || null;
  }
  async function pushProgress() {
    if (!pending) return; let data = pending; pending = null;
    try {
      const rem = await fetchRemote();
      if (rem && (rem._ts || 0) > lastRemoteTs) {
        data = mergeProgress(data, rem);
        if (window.__iaProgress && sig(data) !== sig(window.__iaProgress.get())) window.__iaProgress.set(data);
      }
    } catch (e) {}
    const { error } = await sb.from("progress").upsert({ user_id: session.user.id, data, updated_at: new Date().toISOString() });
    if (!error) lastRemoteTs = data._ts || 0;
  }
  async function pullProgress() {
    if (pulling || pending || !window.__iaProgress || Date.now() - lastPull < 5000) return;
    pulling = true; lastPull = Date.now();
    try {
      const rem = await fetchRemote();
      if (rem && (rem._ts || 0) > lastRemoteTs) {
        const cur = window.__iaProgress.get();
        const merged = mergeProgress(cur, rem);
        lastRemoteTs = rem._ts || 0;
        if (sig(merged) !== sig(cur)) window.__iaProgress.set(merged);
        if (sig(merged) !== sig(rem)) window.__iaSync(merged);
      }
    } catch (e) {} finally { pulling = false; }
  }
  function startApp(qs) {
    window.__QUESTIONS = qs;
    window.__DIAGNOSES = window.__iaBundleDx || [];
    window.__iaUid = session.user.id;
    window.__iaSync = p => { pending = JSON.parse(JSON.stringify(p)); clearTimeout(syncTimer); syncTimer = setTimeout(pushProgress, 2500); };
    window.addEventListener("pagehide", () => { if (pending) pushProgress(); });
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") { if (pending) pushProgress(); } else pullProgress(); });
    window.addEventListener("focus", pullProgress);
    window.addEventListener("pageshow", (e) => { if (e.persisted) pullProgress(); });
    window.__iaSite = true;
    let ansQueue = [], ansTimer = null;
    const flushAnswers = async () => { if (!ansQueue.length) return; const rows = ansQueue; ansQueue = []; const { error } = await sb.from("answers").insert(rows); if (error) console.warn("answers", error.message); };
    window.__iaAnswer = (o) => { ansQueue.push({ question_id: o.question_id, correct: o.correct, chosen: o.chosen, mode: o.mode, first_try: !!o.first }); clearTimeout(ansTimer); ansTimer = setTimeout(flushAnswers, 4000); };
    window.addEventListener("pagehide", flushAnswers);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushAnswers(); });
    window.__iaFeedback = async (o) => { const { error } = await sb.from("feedback").insert(o); if (error) throw new Error(error.message); if (profile.is_admin) refreshCounts(); };
    window.__iaFootExtra = (hh) => [
      hh("button", { class: "linkbtn", id: "ia-profile-link", title: t("profile"), onclick: () => openProfile() }, "👤 " + (profile.display_name || profile.name || session.user.email)),
      hh("span", { text: " · " }),
      profile.is_admin ? hh("button", { class: "linkbtn", id: "ia-admin-link", onclick: () => openAdmin() }, adminLabel()) : null,
      profile.is_admin ? hh("span", { text: " · " }) : null,
      hh("button", { class: "linkbtn", onclick: logout }, t("logout"))];
    const s = document.createElement("script"); s.src = "app.js?v=" + (window.IA_APP_VERSION || "1");
    s.onload = () => { if (profile.is_admin) { refreshCounts(); if (location.hash === "#beheer") openAdmin(); } if (location.hash === "#profiel") openProfile(); };
    window.__iaRefreshFoot = () => { const b = document.getElementById("ia-profile-link"); if (b) b.textContent = "👤 " + (profile.display_name || profile.name || session.user.email); };
    document.body.append(s);
  }

  /* beheer: tellers in de voettekst */
  let counts = null;
  const plural = (key, n) => { const [a, one, more] = t(key).split("|"); return n + " " + a + (n === 1 ? one : more); };
  function adminLabel() {
    if (!counts || (!counts.req && !counts.fb)) return t("admin");
    return t("admin") + " (" + [counts.fb ? plural("n_fb", counts.fb) : null, counts.req ? plural("n_req", counts.req) : null].filter(Boolean).join(", ") + ")";
  }
  async function refreshCounts() {
    const [p, f] = await Promise.all([
      sb.from("profiles").select("id", { count: "exact", head: true }).eq("status", "pending"),
      sb.from("feedback").select("id", { count: "exact", head: true }).eq("status", "open")]);
    counts = { req: p.count || 0, fb: f.count || 0 };
    const el = document.getElementById("ia-admin-link"); if (el) el.textContent = adminLabel();
  }

  /* beheerpagina (#beheer): meldingen over vragen en toegangsaanvragen. Alleen voor profiles.is_admin. */
  const FB_CAT = { key: ["Juiste antwoord klopt niet", "Answer key wrong"], unclear: ["Vraag/opties onduidelijk", "Question/options unclear"], image: ["Beeld klopt niet of ontbreekt", "Image wrong or missing"], explanation: ["Uitleg kan beter", "Explanation could be better"], other: ["Anders", "Other"] };
  const L = "ABCDEFGHIJ";
  let adminTab = "fb", adminMsg = null, stMin = 3, stSort = "hard", stLimit = 50;
  async function statsView(Q, answerOf) {
    const since = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
    const [qs, days, tot] = await Promise.all([sb.from("question_stats").select("*").limit(5000), sb.from("answer_days").select("*").order("day", { ascending: false }).limit(60), sb.from("answer_totals").select("*").maybeSingle()]);
    if (qs.error) return [h("p", { class: "gmsg bad", text: t("err") + qs.error.message })];
    const rows = qs.data || [], dd = days.data || [];
    const T = tot.data || { n: 0, users: 0, questions: 0 }, last7 = dd.filter(r => r.day >= since).reduce((a, r) => a + r.n, 0);
    const kpi = (v, l) => h("div", { class: "rstat" }, h("div", { class: "lbl", text: l }), h("div", { class: "bigfig num", text: String(v) }));
    const pct = (a, b) => b ? Math.round(100 * a / b) : null;
    let list = rows.filter(r => r.n >= stMin).map(r => Object.assign({ p: pct(r.ok, r.n), fp: pct(r.first_ok, r.first_n) }, r));
    list.sort(stSort === "hard" ? (a, b) => a.p - b.p || b.n - a.n : stSort === "easy" ? (a, b) => b.p - a.p || b.n - a.n : (a, b) => b.n - a.n);
    const ctrl = h("div", { class: "row" },
      h("label", { class: "hint" }, t("st_min") + " ", h("select", { onchange: e => { stMin = +e.target.value; rerenderAdmin(); } }, [1, 3, 5, 10, 20].map(v => h("option", { value: v, selected: v === stMin }, String(v))))),
      h("span", { class: "spacer" }),
      h("div", { class: "gtabs", style: "margin:0" }, [["hard", t("st_hard")], ["easy", t("st_easy")], ["most", t("st_most")]].map(([k, l]) => h("button", { class: "gtab" + (stSort === k ? " on" : ""), onclick: () => { stSort = k; rerenderAdmin(); } }, l))));
    const item = r => {
      const q = Q[r.question_id];
      const det = h("details", { class: "gfb-full" }, h("summary", { text: t("st_choices") }));
      det.addEventListener("toggle", async () => {
        if (!det.open || det.dataset.loaded) return; det.dataset.loaded = "1";
        const { data } = await sb.from("answer_choices").select("*").eq("question_id", r.question_id).order("n", { ascending: false });
        const tot = (data || []).reduce((a, c) => a + c.n, 0);
        det.append(h("ul", { class: "gfb-opts" }, (data || []).map(c => h("li", { class: c.is_correct ? "right" : null, text: (pct(c.n, tot)) + "% · " + c.chosen + " (" + c.n + ")" }))));
      });
      return h("div", { class: "gfb st" + (r.p < 40 ? " low" : r.p > 90 ? " high" : "") },
        h("div", { class: "gfb-top" }, h("span", { class: "gtag", text: r.p + "% " + (lang === "nl" ? "goed" : "correct") }), h("b", { text: r.question_id }),
          q ? h("span", { class: "muted", text: q.source + " · " + q.topic }) : null, h("span", { class: "spacer" }),
          h("span", { class: "hint", text: "n=" + r.n + " · " + r.users + "×👤" + (r.fp != null ? " · " + t("st_first") + " " + r.fp + "%" : "") })),
        q ? h("p", { class: "gfb-q", text: q.question }) : null,
        q ? h("p", { class: "gfb-a" }, h("span", { class: "muted", text: (lang === "nl" ? "Juiste antwoord" : "Correct answer") + ": " }), answerOf(q)) : null,
        det);
    };
    return [h("div", { class: "resgrid" }, kpi(T.n, t("st_answers")), kpi(T.users, t("st_users")), kpi(T.questions, t("st_q")), kpi(last7, t("st_7d"))),
      h("p", { class: "hint", text: t("st_hint") }), ctrl,
      list.length ? list.slice(0, stLimit).map(item) : h("p", { class: "muted", text: t("st_none") }),
      list.length > stLimit ? h("button", { class: "btn", onclick: () => { stLimit += 50; rerenderAdmin(); } }, t("st_more")) : null];
  }
  let qcMode = "flag", qcTopic = "", qcLimit = 30;
  const fill = (str, o) => str.replace(/\{(\w+)\}/g, (m, k) => o[k] != null ? o[k] : m);
  async function qcView(Q) {
    const [st, ch, ds, rv] = await Promise.all([sb.from("question_stats").select("*").limit(5000), sb.from("answer_choices").select("*").limit(20000),
      sb.from("question_disc").select("*").limit(5000), sb.from("question_review").select("*").limit(5000)]);
    if (rv.error) return [h("p", { class: "gmsg bad", text: t("qc_missing") + " (" + rv.error.message + ")" })];
    const idx = (rows) => Object.fromEntries((rows || []).map(r => [r.question_id, r]));
    const S = idx(st.data), R = idx(rv.data), D = idx(ds.data), C = {};
    for (const c of ch.data || []) (C[c.question_id] = C[c.question_id] || []).push(c);
    const flagsOf = q => {
      const f = [], s = S[q.id];
      if (q.chk) f.push(t("f_claude") + q.chk);
      if (s && s.n >= 5 && s.ok / s.n < 0.25) f.push(fill(t("f_key"), { p: Math.round(100 * s.ok / s.n), n: s.n }));
      const cs = C[q.id];
      if (cs && s && s.n >= 5) { const right = cs.filter(c => c.is_correct).reduce((a, c) => a + c.n, 0); const top = cs.filter(c => !c.is_correct).sort((a, b) => b.n - a.n)[0]; if (top && top.n > right) f.push(fill(t("f_dis"), { c: top.chosen, a: top.n, b: right })); }
      const d = D[q.id]; if (d && d.n_hi >= 3 && d.n_lo >= 3 && d.p_hi < d.p_lo - 0.1) f.push(fill(t("f_disc"), { a: Math.round(100 * d.p_hi), b: Math.round(100 * d.p_lo) }));
      return f;
    };
    const all = Object.values(Q); const N = all.length;
    const isOk = q => R[q.id] && R[q.id].status === "ok", isFix = q => R[q.id] && R[q.id].status === "fix";
    const flagged = all.filter(q => !R[q.id] && flagsOf(q).length);
    const fixes = all.filter(isFix), oks = all.filter(isOk);
    const topics = [...new Set(all.map(q => q.topic))].sort((a, b) => a.localeCompare(b, "nl"));
    const list = qcMode === "flag" ? flagged : qcMode === "fix" ? fixes : qcMode === "ok" ? oks : (qcTopic ? all.filter(q => q.topic === qcTopic && !R[q.id]) : []);
    const save = async (q, status, note) => {
      const { error } = await sb.from("question_review").upsert({ question_id: q.id, status, note: note || null, reviewed_at: new Date().toISOString() });
      if (error) adminMsg = { text: t("err") + error.message };
      rerenderAdmin();
    };
    const undo = async (q) => { await sb.from("question_review").delete().eq("question_id", q.id); rerenderAdmin(); };
    const item = q => {
      const fl = flagsOf(q), r = R[q.id], s = S[q.id];
      const noteBox = h("div", { class: "qc-note", hidden: true },
        h("textarea", { rows: 3, maxlength: 1000, placeholder: t("qc_note") }),
        h("button", { class: "btn", onclick: e => save(q, "fix", e.currentTarget.previousSibling.value.trim()) }, t("qc_save")));
      return h("div", { class: "gfb qc" + (r ? (r.status === "ok" ? " done" : " fixme") : "") },
        h("div", { class: "gfb-top" }, h("b", { text: q.id }), h("span", { class: "muted", text: q.source + " · " + q.topic }), h("span", { class: "spacer" }),
          s ? h("span", { class: "hint", text: Math.round(100 * s.ok / s.n) + "% · n=" + s.n }) : null),
        fl.map(x => h("div", { class: "qc-flag", text: "⚑ " + x })),
        h("p", { class: "gfb-q", text: q.question }),
        q.images && q.images.length ? h("p", { class: "hint", text: "🖼 " + q.images.length + "×" + (q.imageCredit ? " · " + q.imageCredit.text : "") }) : null,
        q.options ? h("ol", { class: "qc-opts", type: "A" }, q.options.map((o, i) => h("li", { class: i === q.answer ? "right" : null }, o,
          q.why && q.why[i] ? h("div", { class: "qc-why", text: q.why[i] }) : null))) : null,
        q.explanation ? h("p", { class: "qc-exp", text: q.explanation }) : null,
        r && r.note ? h("p", { class: "gfb-msg", text: r.note }) : null,
        h("div", { class: "row" },
          r ? h("button", { class: "linkbtn", onclick: () => undo(q) }, t("qc_undo")) : [
            h("button", { class: "btn teal", onclick: () => save(q, "ok") }, t("qc_good")),
            h("button", { class: "btn", onclick: e => { noteBox.hidden = false; e.currentTarget.remove(); } }, t("qc_bad"))]),
        noteBox);
    };
    const copyFix = async (btn) => {
      const txt = fixes.map(q => "## " + q.id + " (" + q.source + ", " + q.topic + ")\nVraag: " + q.question + "\n" + (q.options ? "Opties: " + q.options.map((o, i) => L[i] + ". " + o).join(" | ") + "\nHuidig antwoord: " + L[q.answer] + ". " + q.options[q.answer] + "\n" : "") + "Aanpassing: " + (R[q.id].note || "")).join("\n\n");
      try { await navigator.clipboard.writeText(txt); } catch (e) { const ta = h("textarea", {}, txt); document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
      btn.textContent = t("copied");
    };
    const kpi = (v, l) => h("div", { class: "rstat" }, h("div", { class: "lbl", text: l }), h("div", { class: "bigfig num", text: String(v) }));
    return [h("div", { class: "resgrid" }, kpi(oks.length + "/" + N, t("qc_ok")), kpi(flagged.length, t("qc_todo")), kpi(fixes.length, t("qc_fix")), kpi(all.filter(q => q.chk && !R[q.id]).length, t("qc_claude"))),
      h("p", { class: "hint", text: t("qc_hint") }),
      h("div", { class: "gtabs" }, [["flag", t("qc_m_flag") + " (" + flagged.length + ")"], ["fix", t("qc_m_fix") + " (" + fixes.length + ")"], ["topic", t("qc_m_topic")], ["ok", t("qc_m_ok") + " (" + oks.length + ")"]].map(([k, l]) =>
        h("button", { class: "gtab" + (qcMode === k ? " on" : ""), onclick: () => { qcMode = k; qcLimit = 30; rerenderAdmin(); } }, l))),
      qcMode === "topic" ? h("select", { class: "qc-sel", onchange: e => { qcTopic = e.target.value; qcLimit = 30; rerenderAdmin(); } }, h("option", { value: "" }, t("qc_topic_all")),
        topics.map(tp => h("option", { value: tp, selected: tp === qcTopic }, tp + " (" + all.filter(q => q.topic === tp && !R[q.id]).length + " " + t("qc_unrev") + ")"))) : null,
      qcMode === "fix" && fixes.length ? h("div", { class: "row" }, h("button", { class: "btn", onclick: e => copyFix(e.currentTarget) }, t("qc_copy"))) : null,
      list.length ? list.slice(0, qcLimit).map(item) : h("p", { class: "muted", text: t("qc_none") }),
      list.length > qcLimit ? h("button", { class: "btn", onclick: () => { qcLimit += 30; rerenderAdmin(); } }, t("st_more")) : null];
  }
  let rerenderAdmin = () => {};
  function openAdmin() {
    if (document.querySelector(".gpage")) return;
    if (location.hash !== "#beheer") history.replaceState(null, "", "#beheer");
    const page = h("div", { class: "gpage", role: "dialog", "aria-modal": "true", "aria-label": t("admin") });
    const esc = e => { if (e.key === "Escape") close(); };
    const close = () => { adminMsg = null; page.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", esc); history.replaceState(null, "", location.pathname + location.search); refreshCounts(); };
    document.addEventListener("keydown", esc);
    const fmt = d => new Date(d).toLocaleString(lang === "nl" ? "nl-NL" : "en-GB", { dateStyle: "medium", timeStyle: "short" });
    const Q = Object.fromEntries((window.__iaAllQ || window.__QUESTIONS || []).map(q => [q.id, q]));
    const answerOf = q => q.options ? L[q.answer] + ". " + q.options[q.answer] : (q.modelAnswer || "");
    async function load() {
      rerenderAdmin = load;
      const [pr, fb] = await Promise.all([
        sb.from("profiles").select("*").order("created_at", { ascending: false }),
        sb.from("feedback").select("*").order("created_at", { ascending: false }).limit(1000)]);
      const profs = pr.data || [], byUser = Object.fromEntries(profs.map(p => [p.id, p]));
      const pend = profs.filter(r => r.status === "pending"), ok = profs.filter(r => r.status === "approved");
      const fbs = fb.data || [], fbOpen = fbs.filter(x => x.status === "open"), fbDone = fbs.filter(x => x.status !== "open");
      counts = { req: pend.length, fb: fbOpen.length };
      const notifyApproved = async (email) => {
        const { error } = await sb.auth.signInWithOtp({ email, options: { shouldCreateUser: false, emailRedirectTo: location.origin + location.pathname } });
        adminMsg = error ? { text: t("mail_fail").replace("{e}", email) + error.message } : { ok: true, text: t("mail_sent").replace("{e}", email) };
      };
      const decide = async (id, status) => {
        const r = profs.find(x => x.id === id);
        const { error } = await sb.from("profiles").update({ status, decided_at: new Date().toISOString() }).eq("id", id);
        if (error) adminMsg = { text: t("err") + error.message };
        else if (status === "approved" && r && r.status !== "approved") await notifyApproved(r.email);
        else adminMsg = null;
        load();
      };
      const setFb = async (id, status) => { await sb.from("feedback").update({ status, handled_at: status === "done" ? new Date().toISOString() : null }).eq("id", id); load(); };
      const who = x => { const u = byUser[x.user_id]; return u ? (u.name || u.email) + (u.institution ? " · " + u.institution : "") : "?"; };
      const fbItem = x => {
        const q = Q[x.question_id];
        return h("div", { class: "gfb" + (x.status === "open" ? "" : " done") },
          h("div", { class: "gfb-top" }, h("span", { class: "gtag", text: (FB_CAT[x.category] || FB_CAT.other)[lang === "nl" ? 0 : 1] }),
            h("b", { text: x.question_id }), q ? h("span", { class: "muted", text: q.source + " · " + q.topic }) : null),
          q ? h("p", { class: "gfb-q", text: q.question }) : h("p", { class: "muted", text: t("q_missing") }),
          q ? h("p", { class: "gfb-a" }, h("span", { class: "muted", text: t("key") + ": " }), answerOf(q)) : null,
          h("blockquote", { class: "gfb-msg", text: x.message }),
          q ? h("details", { class: "gfb-full" }, h("summary", { text: t("show_full") }),
            q.options ? h("ol", { class: "gfb-opts" }, q.options.map((o, i) => h("li", { class: i === q.answer ? "right" : null, text: L[i] + ". " + o }))) : null,
            q.explanation ? h("p", { text: q.explanation }) : null) : null,
          h("div", { class: "row" }, h("span", { class: "hint", text: who(x) + " · " + fmt(x.created_at) }), h("span", { class: "spacer" }),
            h("button", { class: x.status === "open" ? "btn teal" : "btn", onclick: () => setFb(x.id, x.status === "open" ? "done" : "open") }, x.status === "open" ? "✓ " + t("mark_done") : t("reopen"))));
      };
      const copyOpen = async (btn) => {
        const txt = fbOpen.map(x => { const q = Q[x.question_id];
          return "## " + x.question_id + (q ? " (" + q.source + ", " + q.topic + ")" : "") + " — " + (FB_CAT[x.category] || FB_CAT.other)[0] + "\n" +
            (q ? "Vraag: " + q.question + "\n" + (q.options ? "Opties: " + q.options.map((o, i) => L[i] + ". " + o).join(" | ") + "\n" : "") + "Huidig antwoord: " + answerOf(q) + "\n" : "") +
            "Melding (" + who(x) + ", " + fmt(x.created_at) + "): " + x.message; }).join("\n\n");
        try { await navigator.clipboard.writeText(txt); } catch (e) { const ta = h("textarea", {}, txt); document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
        btn.textContent = t("copied"); setTimeout(() => { btn.textContent = t("copy_open"); }, 2000);
      };
      const tabs = h("div", { class: "gtabs" }, [["fb", t("feedback") + " (" + fbOpen.length + ")"], ["req", t("requests") + " (" + pend.length + ")"], ["qc", t("qc")], ["stats", t("stats")]].map(([k, l]) =>
        h("button", { class: "gtab" + (adminTab === k ? " on" : ""), onclick: () => { adminTab = k; load(); } }, l)));
      const errs = [pr.error, fb.error].filter(Boolean).map(e => h("p", { class: "gmsg bad", text: t("err") + e.message }));
      if (adminMsg) errs.push(h("p", { class: "gmsg " + (adminMsg.ok ? "ok" : "bad"), role: "status", text: adminMsg.text }));
      const body = adminTab === "stats" ? await statsView(Q, answerOf) : adminTab === "qc" ? await qcView(Q) : adminTab === "fb"
        ? [fbOpen.length ? h("div", { class: "row" }, h("button", { class: "btn", onclick: e => copyOpen(e.currentTarget) }, t("copy_open"))) : null,
           fbOpen.length ? fbOpen.map(fbItem) : h("p", { class: "muted", text: t("no_fb") }),
           fbDone.length ? h("details", { class: "gdone" }, h("summary", { text: t("done_list") + " (" + fbDone.length + ")" }), fbDone.map(fbItem)) : null]
        : [pend.length ? pend.map(r => h("div", { class: "greq" },
            h("div", {}, h("b", { text: r.name || r.email }), h("div", { class: "muted", text: r.email + " · " + (r.institution || "–") }), r.reason ? h("div", { text: r.reason }) : null,
              h("div", { class: "hint", text: fmt(r.created_at) })),
            h("div", { class: "row" }, h("button", { class: "btn teal", onclick: () => decide(r.id, "approved") }, t("approve")), h("button", { class: "btn", onclick: () => decide(r.id, "rejected") }, t("reject")))))
            : h("p", { class: "muted", text: t("none") }),
          h("details", { class: "gdone" }, h("summary", { text: t("approved_list") + " (" + ok.length + ")" }),
            ok.map(r => h("div", { class: "greq small" }, h("span", { text: (r.name || "") + " · " + r.email + " · " + (r.institution || "") }),
              r.is_admin ? null : h("span", {}, h("button", { class: "linkbtn", onclick: async () => { await notifyApproved(r.email); load(); } }, t("resend_mail")), " · ",
                h("button", { class: "linkbtn", onclick: () => decide(r.id, "rejected") }, t("reject"))))))];
      page.replaceChildren(h("div", { class: "gpage-in" },
        h("div", { class: "row between" }, h("h2", { text: t("admin") }), h("button", { class: "btn", onclick: close }, t("close"))),
        tabs, errs, body));
    }
    document.body.style.overflow = "hidden";
    document.body.append(page); load();
  }

  async function boot() {
    if (!window.supabase || /JOUW-/.test(IA_SUPABASE_URL + IA_SUPABASE_ANON_KEY)) { draw(); return; }
    const hashParams = new URLSearchParams(location.hash.slice(1));
    recovery = hashParams.get("type") === "recovery";
    if (hashParams.get("error_code")) { msg = { text: t("link_bad") }; history.replaceState(null, "", location.pathname); }
    sb = window.supabase.createClient(IA_SUPABASE_URL, IA_SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true } });
    const { data } = await sb.auth.getSession();
    session = data.session;
    sb.auth.onAuthStateChange((ev, s) => {
      if (ev === "PASSWORD_RECOVERY") { recovery = true; session = s; draw(); }
      if (ev === "SIGNED_OUT") session = null;
    });
    if (recovery && session) { draw(); return; }
    recovery = false;
    if (session) afterLogin(); else draw();
  }
  boot();
})();
