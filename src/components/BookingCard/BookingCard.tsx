import { useMemo, useState } from 'react'
import { DayPicker, type DateRange } from 'react-day-picker'
import 'react-day-picker/style.css'

interface BookingCardProps {
  price: number
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

function getNightCount(range?: DateRange) {
  if (!range?.from || !range?.to) {
    return 0
  }

  return Math.max(
    1,
    Math.round((range.to.getTime() - range.from.getTime()) / 86400000),
  )
}

export function BookingCard({
  price,
  unavailableDates,
  defaultRange,
}: BookingCardProps) {
  const [range, setRange] = useState<DateRange | undefined>(defaultRange)
  const [guests, setGuests] = useState(2)

  const nights = getNightCount(range) || getNightCount(defaultRange) || 5
  const subtotal = price * nights
  const serviceFee = Math.round(subtotal * 0.144)
  const total = subtotal + serviceFee

  const defaultMonth = useMemo(
    () => defaultRange?.from ?? new Date(2024, 9, 1),
    [defaultRange],
  )

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
          disabled={unavailableDates}
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
          <button className="booking-stepper-button" type="button" onClick={() => setGuests((current) => Math.max(1, current - 1))}>
            <span className="material-symbols-outlined" aria-hidden="true">
              remove
            </span>
          </button>
          <button className="booking-stepper-button" type="button" onClick={() => setGuests((current) => current + 1)}>
            <span className="material-symbols-outlined" aria-hidden="true">
              add
            </span>
          </button>
        </div>
      </div>

      <button type="button" className="booking-reserve-button">
        Reserve
      </button>

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