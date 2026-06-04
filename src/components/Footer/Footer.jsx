import './Footer.css'

const LINKS = {
  produits: [
    { label: 'Perinea One', href: '/perinea-one' },
    { label: 'Application', href: '/app' },
    { label: 'Précommander', href: '/perinea-one#preorder' },
  ],
  marque: [
    { label: 'Identité visuelle', href: '/branding' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/confidentialite' },
    { label: 'Garantie', href: '/garantie' },
    { label: 'Retours et échanges', href: '/retours' },
  ],
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <span className="footer__logo">perinea</span>
          <p className="footer__tagline">
            La rééducation périnéale<br />réinventée.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="footer__social-link" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-label">PRODUITS</span>
            <ul className="footer__col-list">
              {LINKS.produits.map((l, i) => (
                <li key={i}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">MARQUE</span>
            <ul className="footer__col-list">
              {LINKS.marque.map((l, i) => (
                <li key={i}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">LÉGAL</span>
            <ul className="footer__col-list">
              {LINKS.legal.map((l, i) => (
                <li key={i}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <span>© 2025 Perinea. Tous droits réservés.</span>
        <span>Dispositif médical de classe IIa — CE</span>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.81a8.18 8.18 0 004.78 1.52V6.88a4.85 4.85 0 01-1.01-.19z" />
    </svg>
  )
}

export default Footer
