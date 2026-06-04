import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './AppPage.css'

const FEATURES = [
  {
    icon: '⬤',
    label: 'SESSIONS GUIDÉES',
    name: 'Rééducation pas à pas',
    desc: 'Des protocoles cliniquement validés vous guident à chaque séance, avec des instructions audio et visuelles claires.',
  },
  {
    icon: '⬤',
    label: 'BIOFEEDBACK VISUEL',
    name: 'Voyez vos muscles travailler',
    desc: 'L\'application affiche en temps réel l\'activité de vos muscles périnéaux, transformant chaque contraction en données visibles.',
  },
  {
    icon: '⬤',
    label: 'IA ADAPTATIVE',
    name: 'Un programme qui évolue avec vous',
    desc: 'L\'intelligence artificielle analyse chaque séance et ajuste automatiquement votre programme pour maximiser vos progrès.',
  },
  {
    icon: '⬤',
    label: 'SUIVI & RAPPORTS',
    name: 'Progressez semaine après semaine',
    desc: 'Consultez vos statistiques, comparez vos séances et partagez vos progrès avec votre kinésithérapeute.',
  },
]

function AppPage() {
  return (
    <div className="ap">
      <Header />

      {/* ── HERO ── */}
      <section className="ap-hero">
        <div className="ap-hero__content">
          <span className="ap-eyebrow">APPLICATION MOBILE</span>
          <h1 className="ap-hero__title">
            L'application qui guide<br />votre rééducation
          </h1>
          <p className="ap-hero__sub">
            Conçue autour du même système intelligent que le Perinea One, l'app vous donne accès à vos séances guidées, votre historique et vos recommandations personnalisées — n'importe où, n'importe quand.
          </p>
          <div className="ap-hero__download">
            <a href="#" className="ap-store-btn">
              <AppleIcon />
              <span>
                <small>Télécharger sur</small>
                App Store
              </span>
            </a>
            <a href="#" className="ap-store-btn">
              <AndroidIcon />
              <span>
                <small>Disponible sur</small>
                Google Play
              </span>
            </a>
          </div>
          <p className="ap-hero__beta">Bêta iOS & Android — Accès gratuit avec Perinea One</p>
        </div>

        <div className="ap-hero__phones">
          <PhoneMockup primary />
          <PhoneMockup />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="ap-features">
        <div className="ap-features__inner">
          <span className="ap-eyebrow">FONCTIONNALITÉS</span>
          <h2 className="ap-features__title">
            Tout ce dont vous avez besoin<br />pour réussir votre rééducation
          </h2>
          <div className="ap-features__grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="ap-feat">
                <span className="ap-feat__num">0{i + 1}</span>
                <span className="ap-eyebrow" style={{ margin: '16px 0 8px' }}>{f.label}</span>
                <strong className="ap-feat__name">{f.name}</strong>
                <p className="ap-feat__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="ap-steps">
        <div className="ap-steps__inner">
          <span className="ap-eyebrow">COMMENT ÇA MARCHE</span>
          <h2>Prête en 3 étapes</h2>
          <div className="ap-steps__list">
            <div className="ap-step">
              <span className="ap-step__num">1</span>
              <div className="ap-step__body">
                <strong>Téléchargez l'application</strong>
                <p>Disponible gratuitement sur App Store et Google Play.</p>
              </div>
            </div>
            <div className="ap-step__connector" />
            <div className="ap-step">
              <span className="ap-step__num">2</span>
              <div className="ap-step__body">
                <strong>Connectez votre Perinea One</strong>
                <p>L'appairage Bluetooth se fait en quelques secondes à l'ouverture.</p>
              </div>
            </div>
            <div className="ap-step__connector" />
            <div className="ap-step">
              <span className="ap-step__num">3</span>
              <div className="ap-step__body">
                <strong>Commencez votre première séance</strong>
                <p>L'IA crée votre programme initial en 2 minutes selon votre profil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="ap-cta">
        <div className="ap-cta__inner">
          <h2>Prête à commencer votre rééducation ?</h2>
          <p>Précommandez le Perinea One et obtenez l'accès premium à l'application inclus.</p>
          <a href="/perinea-one" className="ap-cta__btn">
            Découvrir Perinea One
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function PhoneMockup({ primary }) {
  return (
    <div className={`ap-phone ${primary ? 'ap-phone--primary' : 'ap-phone--secondary'}`}>
      <div className="ap-phone__notch" />
      <div className="ap-phone__screen">
        {primary ? (
          <>
            <div className="ap-phone__topbar">
              <span>perinea</span>
              <span>09:41</span>
            </div>
            <div className="ap-phone__ring-area">
              {[56, 42, 30, 18].map((r, i) => (
                <div key={i} className="ap-phone__ring-circle" style={{ width: r * 2, height: r * 2, opacity: 0.25 + i * 0.18 }} />
              ))}
              <div className="ap-phone__ring-dot" />
            </div>
            <p className="ap-phone__session-lbl">Séance active</p>
            <p className="ap-phone__session-time">12:08</p>
            <div className="ap-phone__stats">
              <div className="ap-phone__stat"><span>84%</span><small>Force</small></div>
              <div className="ap-phone__stat-div" />
              <div className="ap-phone__stat"><span>16</span><small>Séances</small></div>
              <div className="ap-phone__stat-div" />
              <div className="ap-phone__stat"><span>4.9</span><small>Score</small></div>
            </div>
            <div className="ap-phone__btn">Pause</div>
          </>
        ) : (
          <>
            <div className="ap-phone__topbar">
              <span>Progression</span>
              <span>09:41</span>
            </div>
            <div className="ap-phone__chart">
              {[30, 55, 48, 70, 65, 82, 78].map((h, i) => (
                <div key={i} className="ap-phone__bar" style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }} />
              ))}
            </div>
            <p className="ap-phone__chart-label">7 derniers jours</p>
            <div className="ap-phone__metrics">
              <div className="ap-phone__metric">
                <span>+18%</span>
                <small>Cette semaine</small>
              </div>
              <div className="ap-phone__metric">
                <span>6/7</span>
                <small>Jours actifs</small>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function AndroidIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1.5c-.96 0-1.86.23-2.66.63L7.88.65c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 8h12a5.983 5.983 0 00-2.47-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  )
}

export default AppPage
