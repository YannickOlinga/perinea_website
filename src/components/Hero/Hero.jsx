import { useEffect, useRef } from 'react'
import './Hero.css'

const ARC_COUNT = 6

const ANNOS = [
  {
    label: 'CAPTEURS MÉDICAUX',
    title: 'Biofeedback en temps réel',
    desc: 'Électrodes de précision médicale mesurant l\'activité musculaire périnéale en continu.',
    style: { right: '6vw', top: '18%' },
    cssVar: '--a1',
    side: 'right',
  },
  {
    label: 'CONNECTIVITÉ',
    title: 'Bluetooth 5.3',
    desc: 'Synchronisation instantanée avec l\'application Perinea sur iOS et Android.',
    style: { left: '6vw', top: '46%' },
    cssVar: '--a2',
    side: 'left',
  },
  {
    label: 'MATIÈRE',
    title: 'Silicone médical grade 6',
    desc: 'Certifié sans BPA, latex et phtalates. Confort optimal, hygiène irréprochable.',
    style: { right: '6vw', top: '60%' },
    cssVar: '--a3',
    side: 'right',
  },
  {
    label: 'INTELLIGENCE',
    title: 'IA Adaptative',
    desc: 'Analyse chaque séance et personnalise votre programme de rééducation.',
    style: { left: '6vw', top: '24%' },
    cssVar: '--a4',
    side: 'left',
  },
]

function Hero() {
  const heroRef = useRef(null)
  const stickyRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !stickyRef.current) return
      const scrolled = -heroRef.current.getBoundingClientRect().top
      const total = heroRef.current.offsetHeight - window.innerHeight
      const p = Math.max(0, Math.min(scrolled / total, 1))

      const el = stickyRef.current
      el.style.setProperty('--scroll', p)
      el.style.setProperty('--a1', Math.max(0, Math.min((p - 0.5) * 10, 1)))
      el.style.setProperty('--a2', Math.max(0, Math.min((p - 0.36) * 10, 1)))
      el.style.setProperty('--a3', Math.max(0, Math.min((p - 0.54) * 10, 1)))
      el.style.setProperty('--a4', Math.max(0, Math.min((p - 0.72) * 10, 1)))
      // Zoom progressif : démarre quand les infos apparaissent (18 %)
      const scale = 2 + Math.max(0, p - 0.10) * 1.2
      el.style.setProperty('--product-scale', scale)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__sticky" ref={stickyRef}>

        {/* Initial centered text */}
        <div className="hero__content">
          <span className="hero__eyebrow">PERINEA PRÉSENTE</span>
          <h1 className="hero__title">Perinea One</h1>
          <p className="hero__subtitle">La première solution de rééducation périnéale intelligente.</p>
        </div>

        {/* Concentric rings + product */}
        <div className="hero__arcs">
          {Array.from({ length: ARC_COUNT }).map((_, i) => (
            <div key={i} className="hero__arc" style={{ '--i': i }} />
          ))}
          <img src="/1.png" alt="Perinea One" className="hero__product-img" />
        </div>

        {/* Scroll-driven annotations */}
        {ANNOS.map((a, i) => (
          <div
            key={i}
            className={`hero__anno hero__anno--${a.side}`}
            style={{ ...a.style, '--an': `var(${a.cssVar}, 0)` }}
          >
            <span className="hero__anno-dot" />
            <span className="hero__anno-label">{a.label}</span>
            <strong className="hero__anno-title">{a.title}</strong>
            <p className="hero__anno-desc">{a.desc}</p>
          </div>
        ))}

        {/* Scroll hint */}
        <p className="hero__scroll-hint">↓ Défiler pour découvrir</p>

      </div>
    </section>
  )
}

export default Hero
