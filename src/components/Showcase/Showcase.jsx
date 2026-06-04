import './Showcase.css'

const IMAGE_URL = '/3.png'

function Showcase() {
  return (
    <section className="showcase">

      <div className="showcase__dots" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="showcase__dot" />
        ))}
      </div>

      <div className="showcase__image-wrap">
        <img
          src={IMAGE_URL}
          alt="Perinea One"
          className="showcase__image"
          loading="lazy"
        />
      </div>

      <div className="showcase__footer">
        <div className="showcase__footer-left">
          <span className="showcase__eyebrow">CONCEPTION MÉDICALE</span>
          <h2 className="showcase__title">
            Conçu sur mesure<br />
            pour une efficacité<br />
            clinique prouvée
          </h2>
        </div>
        <div className="showcase__footer-right">
          <p className="showcase__desc">
            Le Perinea One est développé avec des spécialistes en rééducation
            périnéale. Sa sonde en silicone médical souple est fabriquée
            artisanalement pour un confort optimal et une hygiène irréprochable.
            Ce niveau d'exigence garantit la précision des mesures et
            l'efficacité des protocoles de rééducation.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Showcase
