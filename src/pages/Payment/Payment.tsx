import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { BookingSummary } from '../../components/BookingSummary/BookingSummary'
import type { ConfirmedBooking } from '../../apis/types'
import { confirmBooking } from '../../apis/booking'

const TIMEOUT_SECONDS = 60

export function Payment() {
  const { key = '' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const propertyId = (location.state as { propertyId?: string } | null)?.propertyId

  const [secondsLeft, setSecondsLeft] = useState(TIMEOUT_SECONDS)
  const [isConfirming, setIsConfirming] = useState(false)
  const [confirmError, setConfirmError] = useState<string | null>(null)
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null)

  useEffect(() => {
    if (confirmedBooking) return

    if (secondsLeft <= 0) {
      navigate(propertyId ? `/property/${propertyId}` : '/')
      return
    }

    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft, confirmedBooking, navigate, propertyId])

  async function handleConfirmBooking() {
    setIsConfirming(true)
    setConfirmError(null)

    try {
      const booking = await confirmBooking(key)
      setConfirmedBooking(booking)
    } catch (error) {
      setConfirmError('Could not confirm booking. Please try again.')
      console.error(error)
    } finally {
      setIsConfirming(false)
    }
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
              {confirmedBooking ? (
                <>
                  <div className="payment-heading">
                    <span className="payment-heading-icon material-symbols-outlined" aria-hidden="true">
                      check_circle
                    </span>
                    <h1 className="payment-title">Booking confirmed</h1>
                    <p className="payment-subtitle">Your stay is booked. Here are the details.</p>
                  </div>

                  <BookingSummary booking={confirmedBooking} />
                </>
              ) : (
                <>
                  <div className="payment-heading">
                    <span className="payment-heading-icon material-symbols-outlined" aria-hidden="true">
                      schedule
                    </span>
                    <h1 className="payment-title">Final Step</h1>
                    <p className="payment-subtitle">
                      Confirm within {secondsLeft}s or this reservation will be released.
                    </p>
                  </div>

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

                  {confirmError ? <p className="booking-error">{confirmError}</p> : null}

                  <button
                    type="button"
                    className="payment-confirm-button"
                    onClick={handleConfirmBooking}
                    disabled={isConfirming}
                  >
                    {isConfirming ? 'Confirming...' : 'Confirm Booking (Demo)'}
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </button>

                  <p className="payment-note">
                    By clicking confirm, you agree to our Demo Terms of Service.
                  </p>
                </>
              )}
            </div>
          </section>

          <div className="payment-back-row">
            <button
              type="button"
              className="payment-back-button"
              onClick={() => navigate(propertyId ? `/property/${propertyId}` : '/')}
            >
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