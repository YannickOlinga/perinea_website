import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__logo">perinea</span>

        <div className="header__actions">
          <a href="/branding" className="header__branding-link">Identité</a>
          <button className="header__cta">Précommande</button>

          <button className="header__icon-btn" aria-label="Menu">
            <GridIcon />
          </button>

          <div className="header__divider" />

          <button className="header__icon-btn header__cart-btn" aria-label="Panier">
            <CartIcon />
            <span className="header__cart-badge">0</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="3" r="1.5" fill="currentColor" />
      <circle cx="9" cy="3" r="1.5" fill="currentColor" />
      <circle cx="15" cy="3" r="1.5" fill="currentColor" />
      <circle cx="3" cy="9" r="1.5" fill="currentColor" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <circle cx="3" cy="15" r="1.5" fill="currentColor" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M16 10a4 4 0 01-8 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Header
