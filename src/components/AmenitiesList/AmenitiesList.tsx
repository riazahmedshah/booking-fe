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
            <span className="amenities-icon material-symbols-outlined" aria-hidden="true">
              check_circle
            </span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  )
}