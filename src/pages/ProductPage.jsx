import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './ProductPage.css'

const COLORS = [
  { id: 'rose',  label: 'Rose Poudré', hex: '#c95f7b', img: '/1.png' },
  { id: 'vert',  label: 'Vert Sauge',  hex: '#9cb89c', img: '/5.png' },
  { id: 'lilas', label: 'Lilas Doux',  hex: '#c4b5d8', img: '/9.png' },
]

const PLANS = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    price: '299 €',
    desc: 'Dispositif + accès app 3 mois',
    items: ['Perinea One', 'Application iOS & Android', '3 mois d\'accès premium', 'Guide de démarrage'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '349 €',
    desc: 'Dispositif + accès app 12 mois',
    recommended: true,
    items: ['Perinea One', 'Application iOS & Android', '12 mois d\'accès premium', 'Suivi personnalisé IA', 'Support prioritaire'],
  },
]

const FEATURES = [
  {
    icon: <IconBio />,
    label: 'CAPTEURS MÉDICAUX',
    name: 'Biofeedback en temps réel',
    desc: 'Des capteurs de précision médicale intégrés mesurent l\'activité musculaire périnéale et transmettent les données à votre application en continu.',
  },
  {
    icon: <IconAI />,
    label: 'IA ADAPTATIVE',
    name: 'Protocoles personnalisés',
    desc: 'Une intelligence artificielle analyse chaque séance et adapte votre programme de rééducation à votre progression et vos besoins spécifiques.',
  },
  {
    icon: <IconChart />,
    label: 'SUIVI CLINIQUE',
    name: 'Analyse des progrès',
    desc: 'Visualisez votre progression semaine après semaine avec des indicateurs validés par des kinésithérapeutes spécialisés.',
  },
]

const SPECS = [
  { label: 'Matière', value: 'Silicone médical grade 6' },
  { label: 'Connectivité', value: 'Bluetooth 5.2' },
  { label: 'Autonomie', value: '3h de session continue' },
  { label: 'Charge', value: 'USB-C, 90 min charge complète' },
  { label: 'Application', value: 'iOS 15+ & Android 10+' },
  { label: 'Certification', value: 'Dispositif médical CE Classe IIa' },
  { label: 'Garantie', value: '2 ans' },
  { label: 'Dimensions', value: '82 × 38 × 26 mm' },
]

const FAQ = [
  {
    q: 'Est-ce que le Perinea One est remboursé par la sécurité sociale ?',
    a: 'Le Perinea One est un dispositif médical de classe IIa. Nous travaillons activement à son inscription sur la liste des produits remboursables (LPP). En attendant, certaines mutuelles peuvent couvrir tout ou partie du coût — vérifiez avec votre complémentaire santé.',
  },
  {
    q: 'Comment fonctionne le Perinea One concrètement ?',
    a: 'Vous connectez le dispositif via Bluetooth à l\'application Perinea, puis vous suivez les exercices guidés à l\'écran. Les capteurs mesurent en temps réel la force et la coordination de vos muscles périnéaux, et l\'IA ajuste l\'intensité des exercices selon vos performances.',
  },
  {
    q: 'Le dispositif est-il hygiénique et sûr ?',
    a: 'Le Perinea One est fabriqué en silicone médical de grade 6, certifié sans BPA, latex et phtalates. Il est conçu pour être facilement nettoyé avec du savon doux ou une solution désinfectante compatible silicone médical.',
  },
  {
    q: 'Ai-je besoin d\'un suivi médical pour utiliser le Perinea One ?',
    a: 'Le Perinea One peut être utilisé en autonomie, mais nous recommandons un premier bilan avec votre sage-femme ou kinésithérapeute. L\'application propose aussi des programmes validés cliniquement pour une utilisation en toute sécurité.',
  },
]

function ProductPage() {
  const [color, setColor]   = useState('rose')
  const [plan, setPlan]     = useState('pro')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pp">
      <Header />

      {/* ── HERO ── */}
      <section className="pp-hero">
        <div className="pp-hero__left">
          <span className="pp-eyebrow">DISPOSITIF MÉDICAL</span>
          <h1 className="pp-hero__title">Perinea One</h1>
          <p className="pp-hero__sub">
            La première solution de rééducation périnéale intelligente. Guidée par l'IA, adaptée à votre corps.
          </p>
          <div className="pp-hero__badges">
            <span className="pp-badge">CE Médical</span>
            <span className="pp-badge">Silicone grade 6</span>
            <span className="pp-badge">Bluetooth 5.2</span>
          </div>
        </div>
        <div className="pp-hero__right">
          <div className="pp-hero__img-wrap">
            <img src={COLORS.find(c => c.id === color)?.img} alt="Perinea One" className="pp-hero__img" />
          </div>
        </div>
      </section>

      {/* ── PRE-ORDER ── */}
      <section className="pp-order" id="preorder">
        <div className="pp-order__inner">

          <div className="pp-order__preview">
            <div className="pp-order__preview-bg" style={{ '--color': COLORS.find(c => c.id === color)?.hex }} />
            <img src={COLORS.find(c => c.id === color)?.img} alt="Perinea One" className="pp-order__preview-img" />
          </div>

          <div className="pp-order__form">
            <h2 className="pp-order__title">Configurez votre Perinea One</h2>

            <div className="pp-order__group">
              <span className="pp-order__label">Couleur — {COLORS.find(c => c.id === color)?.label}</span>
              <div className="pp-order__colors">
                {COLORS.map(c => (
                  <button
                    key={c.id}
                    className={`pp-order__color-btn ${color === c.id ? 'pp-order__color-btn--active' : ''}`}
                    style={{ '--c': c.hex }}
                    onClick={() => setColor(c.id)}
                    aria-label={c.label}
                  />
                ))}
              </div>
            </div>

            <div className="pp-order__group">
              <span className="pp-order__label">Formule</span>
              <div className="pp-order__plans">
                {PLANS.map(p => (
                  <button
                    key={p.id}
                    className={`pp-order__plan ${plan === p.id ? 'pp-order__plan--active' : ''}`}
                    onClick={() => setPlan(p.id)}
                  >
                    <div className="pp-order__plan-top">
                      <span className="pp-order__plan-name">{p.name}</span>
                      {p.recommended && <span className="pp-order__plan-badge">Recommandé</span>}
                    </div>
                    <span className="pp-order__plan-price">{p.price}</span>
                    <span className="pp-order__plan-desc">{p.desc}</span>
                    <ul className="pp-order__plan-items">
                      {p.items.map((item, i) => (
                        <li key={i}>
                          <CheckIcon /> {item}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>

            <button className="pp-order__cta">
              Précommander — Livraison automne 2026
            </button>
            <p className="pp-order__note">
              Paiement sécurisé. Annulation gratuite avant expédition.
            </p>
          </div>

        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="pp-features">
        <div className="pp-features__inner">
          <span className="pp-eyebrow">FONCTIONNALITÉS</span>
          <h2 className="pp-features__title">Technologie médicale de précision</h2>
          <div className="pp-features__grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="pp-feature-card">
                <div className="pp-feature-card__icon">{f.icon}</div>
                <span className="pp-eyebrow" style={{ marginTop: 16 }}>{f.label}</span>
                <strong className="pp-feature-card__name">{f.name}</strong>
                <p className="pp-feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="pp-specs">
        <div className="pp-specs__inner">
          <span className="pp-eyebrow">CARACTÉRISTIQUES TECHNIQUES</span>
          <h2>Fiche technique</h2>
          <div className="pp-specs__table">
            {SPECS.map((s, i) => (
              <div key={i} className="pp-specs__row">
                <span className="pp-specs__key">{s.label}</span>
                <span className="pp-specs__val">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pp-faq">
        <div className="pp-faq__inner">
          <span className="pp-eyebrow">QUESTIONS FRÉQUENTES</span>
          <h2>Vous avez des questions ?</h2>
          <div className="pp-faq__list">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className={`pp-faq__item ${openFaq === i ? 'pp-faq__item--open' : ''}`}
              >
                <button className="pp-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="pp-faq__chevron">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="pp-faq__a">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function IconBio() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <path d="M1 10h3l2-5 3 9 2-8 2 4h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconAI() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="4" cy="5" r="1.3" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="5" r="1.3" fill="currentColor" opacity="0.7" />
      <circle cx="4" cy="15" r="1.3" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="15" r="1.3" fill="currentColor" opacity="0.7" />
      <path d="M5.5 6.5L8.5 8.8M14.5 6.5L11.5 8.8M5.5 13.5L8.5 11.2M14.5 13.5L11.5 11.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="12" width="3" height="6" rx="1" fill="currentColor" opacity="0.45" />
      <rect x="7" y="8" width="3" height="10" rx="1" fill="currentColor" opacity="0.65" />
      <rect x="12" y="4" width="3" height="14" rx="1" fill="currentColor" opacity="0.9" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ display: 'inline', marginRight: 6 }}>
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ProductPage
