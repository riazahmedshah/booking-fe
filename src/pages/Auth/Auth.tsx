import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { login } from '../../apis/auth'

const authImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCOx9MyTyd8OKTc5ZqUR7H5pH7WGgcmfmhMa7sVKxzgYABrCuyjgzRcrLFgXTkbFia6wwU4D4T1uWORHyP5v9zKuMBoqtS-ZTD5aPWrMNmnkjMQlLakb_Q0ZdXdx9AbmXAKzbTFv73SXc4UrqvSfjdeVK0QxP2EwYqw5chW0T6oVN3n8QUrSfHYCcwi3rKRJja7E-x-t-o9qMAAeg-tCF5Xm1zyTuxw4CdQLK841fIalWb76kTu3vZKKQ'

export function Auth() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  function handleGoogleLogin() {
    // Placeholder for Google login logic
    navigate('/') 
    console.log('Google login clicked')
  }

  async function handleGuestLogin() {
    try {
      await login({ email: 'exmple00@gmail.com', password: '123456' })
      setIsAuthenticated(true)
      navigate('/')
	} catch (error) {
		console.error('Guest login failed', error)
	}
  }

  return (
    <main className="auth-layout">
      <section className="auth-image-pane">
        <div
          className="auth-image"
          role="img"
          aria-label="A minimalist wooden A-frame cabin in a misty evergreen forest"
          style={{ backgroundImage: `url(${authImageUrl})` }}
        />
        <div className="auth-overlay" />

        <div className="auth-image-content">
          <div className="auth-quote-wrap">
            <p className="auth-quote">
              &quot;The best journey leads back to nature.&quot;
            </p>
            <div className="auth-quote-accent" />
          </div>
        </div>
      </section>

      <section className="auth-form-pane">
        <div className="auth-card">
          <div className="auth-brand">
            <Link to="/">
              <div className="auth-brand-mark" aria-hidden="true">
                <span className="auth-brand-icon material-symbols-outlined">cottage</span>
              </div>
              <h1 className="auth-brand-name">Stayz</h1>
            </Link>
            <p className="auth-tagline">Find your next stay</p>
          </div>

          <div className="auth-actions">
            <button type="button" className="auth-button-primary" onClick={handleGoogleLogin}>
              <svg className="auth-google-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <button type="button" className="auth-button-secondary" onClick={handleGuestLogin}>
              <span className="material-symbols-outlined" aria-hidden="true">
                person_outline
              </span>
              <span>Continue as Guest</span>
            </button>
          </div>

          <p className="auth-disclaimer">
            This is a demo project. Guest and Google sign-in let you explore
            listings and functionality, but final booking is disabled.
          </p>
        </div>

        <div className="auth-mobile-brand">
          <span className="material-symbols-outlined" aria-hidden="true">
            landscape
          </span>
          <span>Stayz</span>
        </div>
      </section>
    </main>
  )
}