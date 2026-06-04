import './Lifestyle.css'

const CARDS = [
  {
    category: 'CAPTEURS MÉDICAUX',
    name: 'Biofeedback',
    desc: "Des capteurs de précision médicale mesurent l'activité musculaire périnéale en temps réel et transmettent les données à votre smartphone.",
    icon: <IconBio />,
  },
  {
    category: 'IA ADAPTATIVE',
    name: 'Protocoles',
    desc: "Une intelligence artificielle analyse vos séances et adapte chaque protocole de rééducation à votre progression et vos besoins.",
    icon: <IconAI />,
  },
  {
    category: 'SUIVI PERSONNALISÉ',
    name: 'Analyse',
    desc: "Visualisez vos progrès semaine après semaine grâce à des rapports détaillés et des indicateurs cliniques validés par des spécialistes.",
    icon: <IconChart />,
  },
  {
    category: 'DISCRÉTION TOTALE',
    name: 'Liberté',
    desc: "Compact et silencieux, le Perinea One s'intègre discrètement dans votre quotidien — chez vous, au bureau ou en déplacement.",
    icon: <IconFreedom />,
  },
]

function Lifestyle() {
  return (
    <section className="lifestyle">
      <img src="/4.png" alt="" className="lifestyle__product-deco" aria-hidden="true" />

      <div className="lifestyle__body">
        <div className="lifestyle__text">
          <h2 className="lifestyle__title">
            Reprenez le<br />
            contrôle de<br />
            votre corps
          </h2>
          <p className="lifestyle__subtitle">
            Nous méritons toutes une rééducation<br />
            accessible, discrète et efficace.
          </p>
        </div>

        <div className="lifestyle__track">
          {CARDS.map((card, i) => (
            <article key={i} className="lifestyle__card">
              <div className="lifestyle__card-row">
                <span className="lifestyle__card-cat">{card.category}</span>
                <span className="lifestyle__card-icon-wrap" aria-hidden="true">{card.icon}</span>
              </div>
              <strong className="lifestyle__card-name">{card.name}</strong>
              <p className="lifestyle__card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IconBio() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M1 10h3l2-5 3 9 2-8 2 4h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconAI() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="4" cy="5" r="1.3" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="5" r="1.3" fill="currentColor" opacity="0.7" />
      <circle cx="4" cy="15" r="1.3" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="15" r="1.3" fill="currentColor" opacity="0.7" />
      <path
        d="M5.5 6.5L8.5 8.8M14.5 6.5L11.5 8.8M5.5 13.5L8.5 11.2M14.5 13.5L11.5 11.2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="12" width="3" height="6" rx="1" fill="currentColor" opacity="0.45" />
      <rect x="7" y="8" width="3" height="10" rx="1" fill="currentColor" opacity="0.65" />
      <rect x="12" y="4" width="3" height="14" rx="1" fill="currentColor" opacity="0.9" />
      <path
        d="M17 3L12 7l-5-2-4 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  )
}

function IconFreedom() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="6.5" y="3.5" width="7" height="13" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="13.5" r="1" fill="currentColor" opacity="0.75" />
      <line x1="8" y1="6.5" x2="12" y2="6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

export default Lifestyle
