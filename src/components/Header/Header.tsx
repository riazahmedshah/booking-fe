import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { MdCottage } from 'react-icons/md'
import { useAuthModal } from '../../hooks/useAuthModal'

export function Header() {
  const { isAuthenticated, isLoading, user } = useAuth()
  const { openAuthModal } = useAuthModal()
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-logo" to="/" aria-label="stayz home">
          <MdCottage size={32}/>
          stayz<span className="text-secondary">.</span>
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
          {isLoading ? null : isAuthenticated ? (
            <Link
              to="#"
              aria-label="Your profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-on-primary transition-transform duration-200 active:scale-[0.98]"
            >
              {user?.firstName?.charAt(0).toUpperCase()}
            </Link>
          ) : (
            <>
              <button type="button" className="btn-primary" onClick={openAuthModal}>
                Login or Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}