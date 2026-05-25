import { useState } from 'react'
import './Features.css'

const FEATURES = [
  {
    label: 'Suivi intelligent',
    icon: <IconTracking />,
    desc: 'Analysez vos progrès en temps réel grâce à des capteurs de précision médicale intégrés directement dans le dispositif.',
  },
  {
    label: 'Rééducation guidée',
    icon: <IconGuided />,
    desc: 'Des protocoles adaptés à votre corps vous guident étape par étape, ajustant l\'intensité selon vos performances du jour.',
  },
  {
    label: 'Protocoles IA',
    icon: <IconAI />,
    desc: 'Une intelligence artificielle analyse vos séances et personnalise chaque exercice pour maximiser votre récupération.',
  },
]

function Features() {
  const [active, setActive] = useState(1)

  return (
    <section className="features">
      <div className="features__inner">
        {FEATURES.map((f, i) => (
          <button
            key={i}
            className={`features__tab ${i === active ? 'features__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            <div className="features__tab-header">
              <span className="features__tab-icon">{f.icon}</span>
              <span className="features__tab-label">{f.label}</span>
            </div>
            {i === active && (
              <div className="features__tab-body">
                <p>{f.desc}</p>
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

function IconTracking() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.9" />
      <circle cx="10" cy="4"  r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="16" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="4"  cy="10" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="16" cy="10" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function IconGuided() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="5"  cy="5"  r="1.2" fill="currentColor" opacity="0.4" />
      <circle cx="10" cy="5"  r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="15" cy="5"  r="1.2" fill="currentColor" opacity="0.4" />
      <circle cx="5"  cy="10" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="1"   />
      <circle cx="15" cy="10" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="5"  cy="15" r="1.2" fill="currentColor" opacity="0.4" />
      <circle cx="10" cy="15" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="15" cy="15" r="1.2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function IconAI() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="5"  cy="5"  r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="15" cy="5"  r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="5"  cy="15" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="15" cy="15" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="10" r="1.8" fill="currentColor" opacity="0.9" />
      <circle cx="10" cy="5"  r="1.2" fill="currentColor" opacity="0.3" />
      <circle cx="10" cy="15" r="1.2" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export default Features
