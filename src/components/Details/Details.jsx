import deviceImg from '../../assets/device.webp'
import './Details.css'

const ANNOTATIONS = [
  {
    id: 1,
    x: '62%',
    y: '18%',
    title: 'capteurs biomédicaux',
    desc: 'Électrodes intégrées de précision médicale, conçues pour une mesure fiable de l\'activité musculaire périnéale.',
  },
  {
    id: 2,
    x: '20%',
    y: '52%',
    title: 'module de connectivité',
    desc: 'Bluetooth 5.3 basse consommation, synchronisation en temps réel avec l\'application Perinea.',
  },
]

function Details() {
  return (
    <section className="details">
      <div className="details__inner">

        <div className="details__label">
          <span className="details__eyebrow">DÉTAILS</span>
          <strong className="details__product">Perinea One</strong>
        </div>

        <div className="details__stage">
          <div className="details__product-wrap">

            {/* Product image */}
            <img
              src={deviceImg}
              alt="Perinea One"
              className="details__device-img"
            />

            {/* Annotations */}
            {ANNOTATIONS.map((a) => (
              <div
                key={a.id}
                className="details__annotation"
                style={{ left: a.x, top: a.y }}
              >
                <span className="details__annotation-dot" />
                <div className="details__annotation-card">
                  <span className="details__annotation-title">{a.title}</span>
                  <p className="details__annotation-desc">{a.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Details
