import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { BookingSummary } from '../../components/BookingSummary/BookingSummary'
import type { Booking } from '../../apis/types'

// Placeholder booking data until the property detail page passes selected dates and guests here.
const booking: Booking = {
  id: 'misty-forest-sanctuary-booking',
  propertyTitle: 'Misty Forest Sanctuary',
  propertyThumbnail: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM9krFlXNkAaGSZNZoBnZac6D3gQMSRdMGU0AHKtYeaklMqW8WkJdv_8cVu3bDE9gSll-8D2gQnrJb1ecj_jJvuquHSFzZRUAE8Qu9r4k3YnKfYSWYKHJLzxaCt71w5aDQinfo4xdn5HuWCz3-0_RE5p8UG_q2gO7-mY_rl0RxjH5IjsUbZAIKjfQP0J9jXizpgZD_ju1q4GNwW8hnYWjZzRKzmCZzUiTmplDxNOuol767CxyDutNEGQ',
    alt: 'A serene minimalist forest cabin nestled among towering pine trees shrouded in morning mist. Soft, diffused emerald green lighting, contemporary Scandinavian architecture with large glass windows, atmospheric and peaceful mood, ultra-high quality architectural photography.',
  },
  dates: 'Oct 12 - 17, 2024',
  guests: 2,
  totalAmount: 1945,
}

export function Payment() {
  const navigate = useNavigate()

  function handleConfirmBooking() {
    navigate('/')
  }

  return (
    <div className="payment-page">
      <Header />

      <main className="payment-main">
        <div className="payment-shell">
          <section className="payment-card">
            <div className="payment-progress" aria-hidden="true">
              <div className="payment-progress-fill" />
            </div>

            <div className="payment-card-inner">
              <div className="payment-heading">
                <span className="payment-heading-icon material-symbols-outlined" aria-hidden="true">
                  check_circle
                </span>
                <h1 className="payment-title">Final Step</h1>
                <p className="payment-subtitle">
                  Please review your stay details for the Misty Forest Sanctuary.
                </p>
              </div>

              <BookingSummary booking={booking} />

              <section className="payment-support-card" aria-labelledby="support-title">
                <div className="payment-support-icon-wrap">
                  <span className="payment-support-icon material-symbols-outlined" aria-hidden="true">
                    coffee
                  </span>
                </div>
                <h2 id="support-title" className="payment-support-title">
                  Support this project
                </h2>
                <p className="payment-support-text">
                  This is a demo - no real payment is processed. If you&apos;d like to
                  support this project, scan the code below.
                </p>

                <div className="payment-qr-wrap" aria-label="QR code placeholder">
                  <div className="payment-qr-pattern" />
                  <div className="payment-qr-overlay">
                    <span className="payment-qr-label">SCAN ME</span>
                  </div>
                </div>
              </section>

              <button type="button" className="payment-confirm-button" onClick={handleConfirmBooking}>
                Confirm Booking (Demo)
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </button>

              <p className="payment-note">
                By clicking confirm, you agree to our Demo Terms of Service.
              </p>
            </div>
          </section>

          <div className="payment-back-row">
            <button type="button" className="payment-back-button" onClick={() => navigate('/property/misty-forest-sanctuary')}>
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_back
              </span>
              Return to Property Details
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Payment