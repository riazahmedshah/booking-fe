import type { Booking } from '../../apis/types'

interface BookingSummaryProps {
  booking: Booking
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function BookingSummary({ booking }: BookingSummaryProps) {
  return (
    <section className="booking-summary" aria-labelledby="booking-summary-title">
      <h2 id="booking-summary-title" className="booking-summary-sr-only">
        Booking Summary
      </h2>

      <div className="booking-summary-content">
        <div className="booking-summary-thumbnail-wrap">
          <img
            className="booking-summary-thumbnail"
            src={booking.propertyThumbnail.src}
            alt={booking.propertyThumbnail.alt}
          />
        </div>

        <div className="booking-summary-details">
          <h3 className="booking-summary-title">{booking.propertyTitle}</h3>

          <div className="booking-summary-meta-list">
            <div className="booking-summary-meta-item">
              <span className="booking-summary-meta-icon material-symbols-outlined" aria-hidden="true">
                calendar_today
              </span>
              <span>{booking.dates}</span>
            </div>

            <div className="booking-summary-meta-item">
              <span className="booking-summary-meta-icon material-symbols-outlined" aria-hidden="true">
                group
              </span>
              <span>{booking.guests} guests</span>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-summary-total-row">
        <span className="booking-summary-label">Total Amount</span>
        <span className="booking-summary-total">{currencyFormatter.format(booking.totalAmount)}</span>
      </div>
    </section>
  )
}