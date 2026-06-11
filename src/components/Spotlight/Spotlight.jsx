import './Spotlight.css'

const BLOCKS = [
  {
    id: 1,
    eyebrow: 'CONFORT SUR-MESURE',
    title: 'Un confort\nsur-mesure',
    img: '/a.png',
    desc: 'Perinea One est conçue dans un silicone médical de grade 6, doux et hypoallergénique. Sa forme ergonomique épouse naturellement l\'anatomie pour une utilisation confortable, sûre et parfaitement discrète.',
    bg: '#fcf8f5',
  },
  {
    id: 2,
    eyebrow: 'CAPTEURS DE PRÉCISION',
    title: 'Des capteurs\nde précision',
    img: '/b.png',
    desc: 'Des électrodes de précision médicale mesurent l\'activité musculaire périnéale en continu. Le biofeedback en temps réel guide chaque contraction et synchronise vos données avec l\'application via Bluetooth 5.3.',
    bg: '#f4eef0',
    imgLeft: true,
  },
  {
    id: 3,
    eyebrow: 'INTELLIGENCE ADAPTATIVE',
    title: 'Un coach\nintelligent',
    img: '/c.png',
    desc: 'Une IA adaptative analyse chaque séance et ajuste votre programme de rééducation séance après séance. Des exercices personnalisés, un suivi clair de vos progrès, et un accompagnement pensé pour durer.',
    bg: '#fcf8f5',
  },
]

function Spotlight() {
  return (
    <div className="spotlight">
      {BLOCKS.map((b) => (
        <section
          key={b.id}
          className={`spotlight__block${b.imgLeft ? ' spotlight__block--img-left' : ''}`}
          style={{ background: b.bg }}
        >
          <h2 className="spotlight__bigtitle">{b.title}</h2>

          <div className="spotlight__media">
            <img src={b.img} alt={b.eyebrow} className="spotlight__img" />
          </div>

          <div className="spotlight__label">
            <span className="spotlight__eyebrow">{b.eyebrow}</span>
          </div>

          <p className="spotlight__desc">{b.desc}</p>
        </section>
      ))}
    </div>
  )
}

export default Spotlight
