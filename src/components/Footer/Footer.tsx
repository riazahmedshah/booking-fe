import { Link } from 'react-router-dom'

const exploreLinks = ['Properties', 'Experiences', 'Destinations', 'Careers']
const supportLinks = ['Help Center', 'Trust & Safety', 'Cancellation Options', 'Contact']
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Settings']

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-columns">
          <div>
            <Link className="site-footer-logo" to="/">
              stayz
            </Link>
            <p className="site-footer-description">
              Curating the world&apos;s most peaceful accommodations for the
              discerning traveler since 2024.
            </p>
          </div>

          <FooterLinks title="Explore" links={exploreLinks} />
          <FooterLinks title="Support" links={supportLinks} />
          <FooterLinks title="Legal" links={legalLinks} />
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copyright">
            © 2026 stayz. All rights reserved.
          </p>

          <div className="site-footer-icons" aria-label="Social links">
            <span className="material-symbols-outlined" aria-hidden="true">
              public
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              share
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">
              mail
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinksProps {
  title: string
  links: string[]
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h2 className="site-footer-heading">{title}</h2>
      <ul className="site-footer-list">
        {links.map((link) => (
          <li key={link}>
            <Link className="site-footer-link" to="/">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}