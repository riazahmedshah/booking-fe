import type { ConfirmedBooking } from '../../apis/types'

interface BookingSummaryProps {
  booking: ConfirmedBooking
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

export function BookingSummary({ booking }: BookingSummaryProps) {
  const checkIn = dateFormatter.format(new Date(booking.checkIn))
  const checkOut = dateFormatter.format(new Date(booking.checkOut))

  return (
    <section className="booking-summary" aria-labelledby="booking-summary-title">
      <h2 id="booking-summary-title" className="booking-summary-sr-only">
        Booking Summary
      </h2>

      <div className="booking-summary-details">
        <div className="booking-summary-meta-list">
          <div className="booking-summary-meta-item">
            <span className="booking-summary-meta-icon material-symbols-outlined" aria-hidden="true">
              calendar_today
            </span>
            <span>{checkIn} – {checkOut}</span>
          </div>

          <div className="booking-summary-meta-item">
            <span className="booking-summary-meta-icon material-symbols-outlined" aria-hidden="true">
              verified
            </span>
            <span>{booking.status}</span>
          </div>
        </div>
      </div>

      <div className="booking-summary-total-row">
        <span className="booking-summary-label">Total Amount</span>
        <span className="booking-summary-total">{currencyFormatter.format(booking.totalPrice)}</span>
      </div>
    </section>
  )
}