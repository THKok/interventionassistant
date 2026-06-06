// ═══════════════════════════════════════════
// InterventionAssistant — Procedure Data
// Voeg hier nieuwe procedures toe voor zoekfunctie
// ═══════════════════════════════════════════

const PROCEDURES = [
  {
    naam: "PTA ± stentplaatsing beenvaten",
    categorie: "Vasculair",
    subcategorie: "Perifeer arterieel",
    tag: "vasc",
    url: "vasculair/pta-beenvaten.html",
    trefwoorden: ["PTA", "angioplastiek", "stent", "beenvaten", "femoropopliteaal", "cruraal", "claudicatio", "ischemie", "Fontaine", "DEB", "nitinol", "Glidewire", "Angioseal"]
  },
  {
    naam: "PTA ± stent iliacale vaten",
    categorie: "Vasculair",
    subcategorie: "Iliacaal",
    tag: "vasc",
    url: "vasculair/pta-beenvaten.html",
    trefwoorden: ["PTA", "iliacaal", "aorta", "CIA", "EIA", "stent", "Kissing stent"]
  },
  {
    naam: "PTA viscerale vaten",
    categorie: "Vasculair",
    subcategorie: "Visceraal",
    tag: "vasc",
    url: "vasculair/pta-beenvaten.html",
    trefwoorden: ["visceraal", "truncus", "SMA", "renaal", "mesenterisch"]
  },
  {
    naam: "Percutane nefrostomie",
    categorie: "Non-vasculair",
    subcategorie: "Urologie",
    tag: "nonvasc",
    url: "non-vasculair/nefrostomie.html",
    trefwoorden: ["nefrostomie", "nier", "hydronefrose", "obstructie", "urolithiasis", "drain", "Amplatz", "Cook Flexima", "pigtail", "ureter"]
  },
  {
    naam: "Abcesdrainage",
    categorie: "Non-vasculair",
    subcategorie: "Drainage",
    tag: "nonvasc",
    url: "non-vasculair/nefrostomie.html",
    trefwoorden: ["abces", "drainage", "drain", "infectie", "collectie", "percutaan"]
  },
  {
    naam: "PTCD galwegdrainage",
    categorie: "Non-vasculair",
    subcategorie: "Galwegen",
    tag: "nonvasc",
    url: "non-vasculair/nefrostomie.html",
    trefwoorden: ["PTCD", "galweg", "cholangio", "icterus", "biliaire", "drainage"]
  },
  {
    naam: "rTPA opstarten — acuut bedreigd been",
    categorie: "Trombolyse",
    subcategorie: "Acuut arterieel",
    tag: "urgent",
    url: "trombolyse/rtpa-trombolyse.html",
    trefwoorden: ["trombolyse", "rTPA", "alteplase", "acuut", "bedreigd been", "Rutherford", "CDT", "McNamara", "heparine", "fibrinogeen", "occlusie"]
  },
  {
    naam: "CDT diep veneuze trombose",
    categorie: "Trombolyse",
    subcategorie: "Veneus",
    tag: "urgent",
    url: "trombolyse/rtpa-trombolyse.html",
    trefwoorden: ["DVT", "trombolyse", "veneus", "CDT", "ilio-femorale trombose"]
  },
  {
    naam: "Mechanische trombectomie",
    categorie: "Trombolyse",
    subcategorie: "Arterieel",
    tag: "urgent",
    url: "trombolyse/rtpa-trombolyse.html",
    trefwoorden: ["trombectomie", "mechanisch", "Penumbra", "AngioJet", "trombus"]
  }
];
