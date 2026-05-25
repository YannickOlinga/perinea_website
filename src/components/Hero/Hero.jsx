import { useEffect, useRef } from 'react'
import './Hero.css'

const ARC_COUNT = 6

function Hero() {
  const heroRef = useRef(null)
  const stickyRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !stickyRef.current) return
      const scrolled = -heroRef.current.getBoundingClientRect().top
      const total = heroRef.current.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(scrolled / total, 1))
      stickyRef.current.style.setProperty('--scroll', progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__sticky" ref={stickyRef}>

        <div className="hero__content">
          <span className="hero__eyebrow">PERINEA PRÉSENTE</span>
          <h1 className="hero__title">Perinea One</h1>
          <p className="hero__subtitle">La première solution de rééducation périnéale intelligente.</p>
        </div>

        <div className="hero__arcs">
          {Array.from({ length: ARC_COUNT }).map((_, i) => (
            <div key={i} className="hero__arc" style={{ '--i': i }} />
          ))}
          <div className="hero__product" />
        </div>

      </div>
    </section>
  )
}

export default Hero
