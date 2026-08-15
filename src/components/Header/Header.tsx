import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-logo" to="/" aria-label="stayz home">
          <span className="material-symbols-outlined text-primary site-logo-icon">cottage</span>
          stayz
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link className="site-nav-link site-nav-link-active" to="/" aria-current="page">
            Properties
          </Link>
          <Link className="site-nav-link" to="/">
            Experiences
          </Link>
          <Link className="site-nav-link" to="/">
            About
          </Link>
        </nav>

        <div className="site-header-actions">
          <Link className="btn-ghost" to="/auth">
            Login
          </Link>
          <button type="button" className="btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}