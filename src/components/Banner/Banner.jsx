import './Banner.css'

function Banner() {
  return (
    <section className="banner">
      <img src="/Image 1.jpg" alt="" className="banner__bg" />
      <div className="banner__overlay" />

      <div className="banner__content">
        <span className="banner__eyebrow">PERINEA ONE</span>
        <h2 className="banner__title">Reprenez le contrôle,<br />en toute confiance</h2>
        <p className="banner__subtitle">
          Une rééducation périnéale intelligente, guidée et discrète — pensée pour
          s'intégrer naturellement à votre quotidien.
        </p>

        <div className="banner__actions">
          <a href="/perinea-one" className="banner__cta">Découvrir Perinea One</a>
          <span className="banner__hint">↓</span>
        </div>
      </div>
    </section>
  )
}

export default Banner
