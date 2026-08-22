import { FaCheckCircle } from "react-icons/fa"

interface AmenitiesListProps {
  amenities: string[]
}

export function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <section className="amenities-section" aria-labelledby="amenities-title">
      <h2 id="amenities-title" className="amenities-title">
        What this place offers
      </h2>
      <div className="amenities-grid">
        {amenities.map((amenity) => (
          <div className="amenities-item" key={amenity}>
            <FaCheckCircle fontSize={20} strokeWidth={3} />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  )
}