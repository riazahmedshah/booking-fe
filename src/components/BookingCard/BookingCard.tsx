import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DayPicker, type DateRange } from 'react-day-picker'
import 'react-day-picker/style.css'
import { createBooking } from '../../apis/booking'

interface BookingCardProps {
  propertyId: string
  price: number
  maxGuests: number
  unavailableDates: Date[]
  defaultRange?: DateRange
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatDateForApi(date: Date) {
  return date.toISOString().split('T')[0]
}

function getNightCount(range?: DateRange) {
  if (!range?.from || !range?.to) {
    return 0
  }

  return Math.max(
    1,
    Math.round((range.to.getTime() - range.from.getTime()) / 86400000),
  )
}

const today = new Date()
today.setHours(0, 0, 0, 0)

export function BookingCard({
  propertyId,
  price,
  maxGuests,
  unavailableDates,
  defaultRange,
}: BookingCardProps) {
  const navigate = useNavigate()
  const [range, setRange] = useState<DateRange | undefined>(defaultRange)
  const [guests, setGuests] = useState(() => Math.min(2, maxGuests || 1))
  const [isBooking, setIsBooking] = useState(false)
  const [bookingError, setBookingError] = useState<string | null>(null)

  useEffect(() => {
    setGuests((current) => Math.min(current, maxGuests || 1))
  }, [maxGuests])

  const nights = getNightCount(range) || getNightCount(defaultRange) || 5
  const subtotal = price * nights
  const serviceFee = Math.round(subtotal * 0.144)
  const total = subtotal + serviceFee

  const defaultMonth = useMemo(
    () => defaultRange?.from ?? new Date(2024, 9, 1),
    [defaultRange],
  )

  async function handleReserve() {
    if (!range?.from || !range?.to) {
      setBookingError('Please select check-in and check-out dates')
      return
    }

    setIsBooking(true)
    setBookingError(null)

    try {
      const {idempotency_key} = await createBooking ({
        propertyId,
        totalPrice: total,
        checkIn: formatDateForApi(range.from),
        checkOut: formatDateForApi(range.to),
      })
      navigate(`/payment/${idempotency_key}`, { state: { propertyId } })
    } catch (error) {
      setBookingError('Booking failed. Please try again.')
      console.error(error)
    } finally {
      setIsBooking(false)
    }
  }

  return (
    <aside className="booking-card" aria-label="Booking summary">
      <div className="booking-card-price-row">
        <span className="booking-card-price">{formatCurrency(price)}</span>
        <span className="booking-card-per-night"> / night</span>
      </div>

      <div className="booking-calendar">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          defaultMonth={defaultMonth}
          numberOfMonths={1}
          disabled={[{ before: today }, ...unavailableDates]}
          excludeDisabled
          showOutsideDays
        />
      </div>

      <div className="booking-guest-selector">
        <div>
          <label className="booking-guest-label">Guests</label>
          <div className="booking-guest-value">{guests} guests</div>
        </div>
        <div className="booking-stepper">
          <button
            className="booking-stepper-button"
            type="button"
            onClick={() => setGuests((current) => Math.max(1, current - 1))}
            disabled={guests <= 1}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              remove
            </span>
          </button>
          <button
            className="booking-stepper-button"
            type="button"
            onClick={() => setGuests((current) => Math.min(maxGuests, current + 1))}
            disabled={guests >= maxGuests}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              add
            </span>
          </button>
        </div>
      </div>

      <button
        type="button"
        className="booking-reserve-button"
        onClick={handleReserve}
        disabled={isBooking}
      >
        {isBooking ? 'Reserving...' : 'Reserve'}
      </button>

      {bookingError ? <p className="booking-error">{bookingError}</p> : null}

      <div className="booking-breakdown">
        <div className="booking-breakdown-row">
          <span className="booking-breakdown-underline">{formatCurrency(price)} x {nights} nights</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="booking-breakdown-row">
          <span className="booking-breakdown-underline">Service fee</span>
          <span>{formatCurrency(serviceFee)}</span>
        </div>
        <hr className="booking-breakdown-divider" />
        <div className="booking-breakdown-row booking-breakdown-total">
          <span>Total</span>
          <span className="booking-breakdown-total-value">{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="booking-note">
        <span className="booking-note-icon material-symbols-outlined" aria-hidden="true">
          info
        </span>
        <span>You won&apos;t be charged yet</span>
      </div>
    </aside>
  )
}