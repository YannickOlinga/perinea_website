import { useEffect, useRef } from 'react'
import './Overview.css'

function Overview() {
  const textRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!textRef.current) return
      const rect = textRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(
        1 - rect.top / window.innerHeight,
        1
      ))
      textRef.current.style.setProperty('--reveal', progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="overview">
      <div className="overview__inner">

        <div className="overview__label">
          <span className="overview__eyebrow">APERÇU</span>
          <strong className="overview__product">Perinea One</strong>
        </div>

        <div className="overview__text" ref={textRef}>
          <p>
            Le Perinea One est une révolution dans la rééducation périnéale.
            Un dispositif médical intelligent qui s'adapte à votre corps et
            accompagne chaque étape de votre rétablissement. Il comprend vos
            besoins, ajuste ses protocoles en temps réel, et vous guide avec
            précision — sans remplacer votre kinésithérapeute, mais en
            amplifiant son travail. La différence, c'est que vous pouvez
            l'utiliser où vous voulez, quand vous voulez.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Overview
