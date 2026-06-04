import './Details.css'

const ANNOTATIONS = [
  {
    id: 1,
    x: '60%',
    y: '14%',
    title: 'capteurs biomédicaux',
    desc: 'Électrodes intégrées de précision médicale, conçues pour une mesure fiable de l\'activité musculaire périnéale.',
  },
  {
    id: 2,
    x: '12%',
    y: '58%',
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

            {/* Interactive 3D model — drag to rotate */}
            <model-viewer
              src="/sonde%20rose.glb"
              alt="Perinea One — modèle 3D interactif"
              camera-controls=""
              auto-rotate=""
              auto-rotate-delay="800"
              rotation-per-second="18deg"
              shadow-intensity="0.5"
              shadow-softness="1"
              exposure="1.15"
              camera-orbit="20deg 80deg 1.1m"
              min-camera-orbit="auto auto 0.2m"
              max-camera-orbit="auto auto 0.5m"
              environment-image="neutral"
              poster="/1.png"
              class="details__model-viewer"
            />

            {/* Annotation overlays */}
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
