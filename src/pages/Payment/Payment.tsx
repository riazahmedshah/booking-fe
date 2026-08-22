import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { BookingSummary } from '../../components/BookingSummary/BookingSummary'
import type { ConfirmedBooking } from '../../apis/types'
import { confirmBooking } from '../../apis/booking'
import { FaCheckCircle } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight, FiClock } from 'react-icons/fi'
import { SiBuymeacoffee } from 'react-icons/si'

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
                    <FaCheckCircle fontSize={24} />
                    <h1 className="payment-title">Booking confirmed</h1>
                    <p className="payment-subtitle">Your stay is booked. Here are the details.</p>
                  </div>

                  <BookingSummary booking={confirmedBooking} />
                </>
              ) : (
                <>
                  <div className="payment-heading">
                    <FiClock  className="payment-heading-icon" fontSize={24}   />
                    <h1 className="payment-title">Final Step</h1>
                    <p className="payment-subtitle">
                      Confirm the payment within {secondsLeft}s
                    </p>
                  </div>

                  <section className="payment-support-card" aria-labelledby="support-title">
                    <div className="payment-support-icon-wrap">
                      <SiBuymeacoffee fontSize={32} />
                    </div>
                    <h2 id="support-title" className="payment-support-title">
                      Want to Support
                    </h2>
                    <p className="payment-support-text">
                      If you like this project and you&apos;d like to
                      support me, scan the code below.
                    </p>

                    <div className="payment-qr-wrap" aria-label="Support this project via UPI">
                    <img src="/upi-qr/image.png" alt="UPI QR code" className="h-full w-full object-contain" />
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
                    <FiArrowRight fontSize={20} strokeWidth={3} />
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
              <FiArrowLeft fontSize={20} strokeWidth={3} />
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