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

  async function afterLogin() {
    profile = null; msg = null; draw();
    const { data, error } = await sb.from("profiles").select("*").eq("id", session.user.id).maybeSingle();
    if (error || !data) { profile = { status: "pending" }; msg = error ? { text: t("err") + error.message } : null; draw(); return; }
    profile = data;
    if (profile.status !== "approved") { draw(); return; }
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
      if (remote.data && remote.data.data && (!local || (remote.data.data._ts || 0) > (local._ts || 0))) {
        try { localStorage.setItem(key, JSON.stringify(remote.data.data)); } catch (e) {}
      }
      startApp(qs);
    } catch (e) { msg = { text: t("err") + (e.message || e) }; shell(h("div", { class: "card gcard" }, note(), h("button", { class: "btn", onclick: afterLogin }, t("refresh")))); }
  }

  let syncTimer = null, pending = null;
  async function pushProgress() {
    if (!pending) return; const data = pending; pending = null;
    await sb.from("progress").upsert({ user_id: session.user.id, data, updated_at: new Date().toISOString() });
  }
  function startApp(qs) {
    window.__QUESTIONS = qs;
    window.__iaUid = session.user.id;
    window.__iaSync = p => { pending = JSON.parse(JSON.stringify(p)); clearTimeout(syncTimer); syncTimer = setTimeout(pushProgress, 2500); };
    window.addEventListener("pagehide", () => { if (pending) pushProgress(); });
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && pending) pushProgress(); });
    window.__iaSite = true;
    window.__iaFeedback = async (o) => { const { error } = await sb.from("feedback").insert(o); if (error) throw new Error(error.message); if (profile.is_admin) refreshCounts(); };
    window.__iaFootExtra = (hh) => [
      hh("span", { text: (profile.name || session.user.email) + " · " }),
      profile.is_admin ? hh("button", { class: "linkbtn", id: "ia-admin-link", onclick: () => openAdmin() }, adminLabel()) : null,
      profile.is_admin ? hh("span", { text: " · " }) : null,
      hh("button", { class: "linkbtn", onclick: logout }, t("logout"))];
    const s = document.createElement("script"); s.src = "app.js?v=" + (window.IA_APP_VERSION || "1");
    s.onload = () => { if (profile.is_admin) { refreshCounts(); if (location.hash === "#beheer") openAdmin(); } };
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
  let adminTab = "fb", adminMsg = null;
  function openAdmin() {
    if (document.querySelector(".gpage")) return;
    if (location.hash !== "#beheer") history.replaceState(null, "", "#beheer");
    const page = h("div", { class: "gpage", role: "dialog", "aria-modal": "true", "aria-label": t("admin") });
    const esc = e => { if (e.key === "Escape") close(); };
    const close = () => { adminMsg = null; page.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", esc); history.replaceState(null, "", location.pathname + location.search); refreshCounts(); };
    document.addEventListener("keydown", esc);
    const fmt = d => new Date(d).toLocaleString(lang === "nl" ? "nl-NL" : "en-GB", { dateStyle: "medium", timeStyle: "short" });
    const Q = Object.fromEntries((window.__QUESTIONS || []).map(q => [q.id, q]));
    const answerOf = q => q.options ? L[q.answer] + ". " + q.options[q.answer] : (q.modelAnswer || "");
    async function load() {
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
      const tabs = h("div", { class: "gtabs" }, [["fb", t("feedback") + " (" + fbOpen.length + ")"], ["req", t("requests") + " (" + pend.length + ")"]].map(([k, l]) =>
        h("button", { class: "gtab" + (adminTab === k ? " on" : ""), onclick: () => { adminTab = k; load(); } }, l)));
      const errs = [pr.error, fb.error].filter(Boolean).map(e => h("p", { class: "gmsg bad", text: t("err") + e.message }));
      if (adminMsg) errs.push(h("p", { class: "gmsg " + (adminMsg.ok ? "ok" : "bad"), role: "status", text: adminMsg.text }));
      const body = adminTab === "fb"
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
