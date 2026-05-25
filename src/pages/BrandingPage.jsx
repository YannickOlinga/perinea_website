import deviceImg from '../assets/device.webp'
import './BrandingPage.css'

const COLORS = [
  {
    name: 'Violet Perinea',
    hex: '#aa3bff',
    rgb: 'RVB 170 / 59 / 255',
    desc: 'La couleur signature. Dynamique et mémorable, elle incarne l\'audace médicale et la féminité affirmée.',
    dark: false,
  },
  {
    name: 'Nuit Profonde',
    hex: '#0d0d0d',
    rgb: 'RVB 13 / 13 / 13',
    desc: 'Fond absolu. La profondeur qui met en valeur chaque élément et transmet la sophistication technique.',
    dark: true,
  },
  {
    name: 'Lilas Doux',
    hex: '#e8d4ff',
    rgb: 'RVB 232 / 212 / 255',
    desc: 'L\'accent délicat. Douceur et soin dans les interfaces secondaires et les moments de transition.',
    dark: false,
  },
  {
    name: 'Blanc Pur',
    hex: '#ffffff',
    rgb: 'RVB 255 / 255 / 255',
    desc: 'Clarté clinique. Pureté et précision médicale pour les contextes lumineux et l\'impression.',
    dark: false,
  },
]

const WEIGHTS = [
  { name: 'Léger', value: '300', sample: 'La précision au service du corps' },
  { name: 'Régulier', value: '400', sample: 'La précision au service du corps' },
  { name: 'Médium', value: '500', sample: 'La précision au service du corps' },
  { name: 'Semi-gras', value: '600', sample: 'La précision au service du corps' },
  { name: 'Gras', value: '700', sample: 'La précision au service du corps' },
]

const PHOTO_STYLES = [
  {
    level: 'NIVEAU 01',
    name: 'Clinique',
    desc: 'Fond blanc, lumière neutre et diffuse. Le dispositif seul, sans distraction. Précision et confiance médicale absolues.',
    filter: 'grayscale(0.6) contrast(1.15) brightness(1.05)',
    imgUrl: 'https://cdn.prod.website-files.com/6842cbd0245d993ef9bf60ac/689f8d90d37cd20aae5b80f7_hero-iyo-one-1.webp',
  },
  {
    level: 'NIVEAU 02',
    name: 'Naturelle',
    desc: 'Environnement authentique, lumière chaude et organique. La femme dans sa vie quotidienne, libre et confiante.',
    filter: 'saturate(1.1) brightness(0.95)',
    imgUrl: 'https://cdn.prod.website-files.com/6842cbd0245d993ef9bf60ac/68439bd3a2983055e473ea61_girl-image.webp',
  },
  {
    level: 'NIVEAU 03',
    name: 'Intime',
    desc: 'Cadrage serré, flou de profondeur accentué, tons désaturés. La sensorialité, le corps, la récupération discrète.',
    filter: 'saturate(0.4) brightness(0.75) blur(0.5px)',
    imgUrl: 'https://cdn.prod.website-files.com/6842cbd0245d993ef9bf60ac/68439bd3a2983055e473ea61_girl-image.webp',
  },
]

const VALUES = [
  {
    num: '01',
    name: 'Clarté médicale',
    desc: 'Chaque élément visuel inspire confiance et compétence. La forme suit la fonction avec rigueur clinique.',
  },
  {
    num: '02',
    name: 'Douceur humaine',
    desc: 'L\'identité accueille et réconforte. Elle s\'adresse à la femme dans sa globalité, pas uniquement à la patiente.',
  },
  {
    num: '03',
    name: 'Sobriété audacieuse',
    desc: 'Moins d\'éléments, plus d\'impact. Chaque détail a une raison d\'être. Le silence visuel amplifie le message.',
  },
  {
    num: '04',
    name: 'Cohérence totale',
    desc: 'Du dispositif à l\'application, du packaging au site web, l\'identité reste reconnaissable à chaque point de contact.',
  },
]

function BrandingPage() {
  return (
    <div className="bp">

      {/* ── NAV ── */}
      <nav className="bp-nav">
        <a href="/" className="bp-nav__logo">perinea</a>
        <span className="bp-nav__badge">IDENTITÉ VISUELLE 2025</span>
      </nav>

      {/* ── HERO ── */}
      <section className="bp-hero">
        <div className="bp-hero__rings" aria-hidden="true">
          {[300, 480, 660, 840, 1020].map((s, i) => (
            <div key={i} className="bp-hero__ring" style={{ width: s, height: s }} />
          ))}
        </div>
        <div className="bp-hero__content">
          <span className="bp-hero__eyebrow">PERINEA — IDENTITÉ DE MARQUE</span>
          <h1 className="bp-hero__title">
            FORMA<br />NOVA
          </h1>
          <p className="bp-hero__tagline">
            Une identité au service du corps féminin
          </p>
        </div>
        <div className="bp-hero__device">
          <img src={deviceImg} alt="Perinea One" />
        </div>
        <div className="bp-hero__scroll" aria-hidden="true">↓</div>
      </section>

      {/* ── MANIFESTE ── */}
      <section className="bp-intro">
        <div className="bp-intro__inner">
          <div className="bp-intro__left">
            <span className="bp-label">MANIFESTE</span>
            <h2 className="bp-intro__concept">FORMA<br />NOVA</h2>
          </div>
          <div className="bp-intro__right">
            <p>
              Perinea réinvente la rééducation périnéale en unissant la précision médicale à une esthétique contemporaine. Notre identité visuelle traduit cette dualité fondatrice : force et douceur, science et humanité, innovation et intimité.
            </p>
            <p>
              Conçue pour inspirer confiance et transmettre l'ambition thérapeutique, l'identité Perinea accompagne chaque point de contact avec cohérence et caractère — du dispositif physique à l'expérience numérique.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bp-divider" />

      {/* ── LE SYMBOLE ── */}
      <section className="bp-symbol">
        <div className="bp-symbol__header">
          <span className="bp-label">LE SYMBOLE</span>
          <h2>Le logo Perinea</h2>
          <p>
            Le symbole Perinea est composé d'arcs concentriques qui évoquent les couches musculaires du périnée vues en coupe. Sa géométrie précise symbolise la maîtrise et l'expertise clinique, tandis que la dynamique de ses lignes suggère le mouvement et la progression vers le rétablissement.
          </p>
        </div>

        <div className="bp-symbol__hero">
          <LogoMark size={160} />
        </div>

        <div className="bp-symbol__variants">
          <div className="bp-symbol__variant bp-symbol__variant--dark">
            <div className="bp-symbol__variant-display">
              <LogoWithWordmark color="#ffffff" />
            </div>
            <div className="bp-symbol__variant-meta">
              <span className="bp-label">SUR FOND SOMBRE</span>
              <p>Usage principal. Le blanc sur fond noir exprime la précision et la modernité technique.</p>
            </div>
          </div>
          <div className="bp-symbol__variant bp-symbol__variant--light">
            <div className="bp-symbol__variant-display">
              <LogoWithWordmark color="#0d0d0d" />
            </div>
            <div className="bp-symbol__variant-meta">
              <span className="bp-label">SUR FOND CLAIR</span>
              <p>Contextes lumineux, impression médicale, packaging. Clarté et professionnalisme.</p>
            </div>
          </div>
          <div className="bp-symbol__variant bp-symbol__variant--violet">
            <div className="bp-symbol__variant-display">
              <LogoWithWordmark color="#ffffff" accent />
            </div>
            <div className="bp-symbol__variant-meta">
              <span className="bp-label">VERSION ACCENT</span>
              <p>Communications de marque, digital, événementiel. Le violet signature au premier plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bp-divider" />

      {/* ── COULEUR ── */}
      <section className="bp-palette">
        <div className="bp-palette__header">
          <span className="bp-label">LA COULEUR</span>
          <h2>"Le Violet Perinea"</h2>
          <p>
            Le violet a été choisi pour son équilibre unique entre innovation médicale et sensibilité humaine. Ni froid comme le bleu clinique conventionnel, ni convenu comme le rose de façade, il marque une nouvelle ère pour la santé au féminin — courageuse, précise, et pleinement assumée.
          </p>
        </div>
        <div className="bp-palette__track">
          {COLORS.map((c, i) => (
            <div
              key={i}
              className={`bp-palette__swatch ${c.dark ? 'bp-palette__swatch--bordered' : ''}`}
              style={{ '--color': c.hex }}
            >
              <div className="bp-palette__swatch-fill" />
              <div className="bp-palette__swatch-meta">
                <span className="bp-palette__swatch-name">{c.name}</span>
                <span className="bp-palette__swatch-hex">{c.hex}</span>
                <span className="bp-palette__swatch-rgb">{c.rgb}</span>
                <p className="bp-palette__swatch-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bp-divider" />

      {/* ── TYPOGRAPHIE ── */}
      <section className="bp-type">
        <div className="bp-type__header">
          <span className="bp-label">LA TYPOGRAPHIE</span>
          <h2>Perinea Sans</h2>
          <p>
            Geométrique et humaniste, la typographie Perinea associe la lisibilité clinique d'une police de système à la chaleur d'une écriture contemporaine. Cinq graisses structurent une hiérarchie claire de l'interface au titre.
          </p>
        </div>
        <div className="bp-type__display">
          <div className="bp-type__alpha">
            <div className="bp-type__alpha-row">ABCDEFGHIJKLM</div>
            <div className="bp-type__alpha-row">NOPQRSTUVWXYZ</div>
            <div className="bp-type__alpha-row bp-type__alpha-row--lower">abcdefghijklmnopqrstuvwxyz</div>
            <div className="bp-type__alpha-row bp-type__alpha-row--nums">0123456789</div>
          </div>
        </div>
        <div className="bp-type__weights">
          {WEIGHTS.map((w, i) => (
            <div key={i} className="bp-type__row">
              <span className="bp-type__row-meta">{w.name} — {w.value}</span>
              <span className="bp-type__row-sample" style={{ fontWeight: w.value }}>{w.sample}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bp-divider" />

      {/* ── LANGAGE VISUEL ── */}
      <section className="bp-photo">
        <div className="bp-photo__header">
          <span className="bp-label">LE LANGAGE VISUEL</span>
          <h2>Niveaux de traitement photographique</h2>
          <p>
            L'identité visuelle Perinea se décline en trois niveaux d'expression photographique, du plus documentaire au plus émotionnel. Chaque niveau sert un objectif de communication précis.
          </p>
        </div>
        <div className="bp-photo__panels">
          {PHOTO_STYLES.map((s, i) => (
            <div key={i} className="bp-photo__panel">
              <div className="bp-photo__panel-img">
                <img src={s.imgUrl} alt={s.name} style={{ filter: s.filter }} loading="lazy" />
                <div className="bp-photo__panel-overlay" />
              </div>
              <div className="bp-photo__panel-body">
                <span className="bp-label">{s.level}</span>
                <strong className="bp-photo__panel-name">{s.name}</strong>
                <p className="bp-photo__panel-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bp-divider" />

      {/* ── IDENTITÉ EN ACTION ── */}
      <section className="bp-action">
        <div className="bp-action__header">
          <span className="bp-label">L'IDENTITÉ EN ACTION</span>
          <h2>Le dispositif & l'application</h2>
        </div>
        <div className="bp-action__split">
          <div className="bp-action__panel bp-action__panel--device">
            <div className="bp-action__panel-visual">
              <img src={deviceImg} alt="Perinea One" className="bp-action__device-img" />
            </div>
            <div className="bp-action__panel-caption">
              <span className="bp-label">DISPOSITIF MÉDICAL</span>
              <strong>Perinea One</strong>
              <p>Sonde en silicone médical souple. Capteurs de biofeedback intégrés. Connexion Bluetooth.</p>
            </div>
          </div>
          <div className="bp-action__panel bp-action__panel--app">
            <div className="bp-action__panel-visual">
              <AppMockup />
            </div>
            <div className="bp-action__panel-caption">
              <span className="bp-label">APPLICATION MOBILE</span>
              <strong>Perinea App</strong>
              <p>Interface épurée, protocoles guidés, suivi des séances, progression en temps réel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bp-divider" />

      {/* ── PRINCIPES ── */}
      <section className="bp-values">
        <div className="bp-values__header">
          <span className="bp-label">LES PRINCIPES</span>
          <h2>Quatre piliers de l'identité</h2>
        </div>
        <div className="bp-values__grid">
          {VALUES.map((v, i) => (
            <div key={i} className="bp-values__card">
              <span className="bp-values__num">{v.num}</span>
              <strong className="bp-values__name">{v.name}</strong>
              <p className="bp-values__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bp-footer">
        <div className="bp-footer__brand">
          <LogoMark size={40} />
          <span className="bp-footer__wordmark">PERINEA</span>
        </div>
        <p className="bp-footer__sub">Identité visuelle — Perinea © 2025</p>
        <a href="/" className="bp-footer__back">← Retour au site</a>
      </footer>

    </div>
  )
}

/* ── SVG Components ── */

function LogoMark({ size = 80 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className="bp-logomark"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="0.8" opacity="0.28" />
      <circle cx="40" cy="40" r="27" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="40" cy="40" r="19" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
      <circle cx="40" cy="40" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
      <circle cx="40" cy="40" r="4" fill="currentColor" />
    </svg>
  )
}

function LogoWithWordmark({ color = '#ffffff', accent = false }) {
  return (
    <div className="bp-logowrap" style={{ color }}>
      <svg width="48" height="48" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke={accent ? '#aa3bff' : 'currentColor'} strokeWidth="0.8" opacity="0.3" />
        <circle cx="40" cy="40" r="27" stroke={accent ? '#aa3bff' : 'currentColor'} strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="40" r="19" stroke={accent ? '#aa3bff' : 'currentColor'} strokeWidth="1.2" opacity="0.7" />
        <circle cx="40" cy="40" r="11" stroke={accent ? '#aa3bff' : 'currentColor'} strokeWidth="1.5" opacity="0.88" />
        <circle cx="40" cy="40" r="4" fill={accent ? '#aa3bff' : 'currentColor'} />
      </svg>
      <span className="bp-logowrap__text" style={{ color: accent ? '#aa3bff' : color }}>perinea</span>
    </div>
  )
}

function AppMockup() {
  return (
    <div className="bp-app">
      <div className="bp-app__frame">
        <div className="bp-app__notch" />
        <div className="bp-app__screen">
          <div className="bp-app__topbar">
            <span>perinea</span>
            <span className="bp-app__topbar-time">09:41</span>
          </div>
          <div className="bp-app__ring-area">
            <div className="bp-app__ring">
              {[60, 46, 32, 20].map((r, i) => (
                <div
                  key={i}
                  className="bp-app__ring-circle"
                  style={{ width: r * 2, height: r * 2, opacity: 0.3 + i * 0.15 }}
                />
              ))}
              <div className="bp-app__ring-dot" />
            </div>
            <p className="bp-app__session-label">Séance en cours</p>
            <p className="bp-app__session-time">08:42</p>
          </div>
          <div className="bp-app__stats">
            <div className="bp-app__stat">
              <span className="bp-app__stat-val">78%</span>
              <span className="bp-app__stat-key">Progression</span>
            </div>
            <div className="bp-app__stat-divider" />
            <div className="bp-app__stat">
              <span className="bp-app__stat-val">12</span>
              <span className="bp-app__stat-key">Séances</span>
            </div>
            <div className="bp-app__stat-divider" />
            <div className="bp-app__stat">
              <span className="bp-app__stat-val">4.8</span>
              <span className="bp-app__stat-key">Score</span>
            </div>
          </div>
          <div className="bp-app__cta">Démarrer</div>
        </div>
      </div>
    </div>
  )
}

export default BrandingPage
