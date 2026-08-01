import { Link } from 'react-router-dom'
import type { Property } from '../../apis/types'

interface PropertyCardProps {
  property: Property
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
})

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="property-card group">
      <div className="property-card-media">
        <Link
          className="property-card-media-link"
          to={`/property/${property.id}`}
          aria-label={`View ${property.title}`}
        >
          <img className="property-card-image" src={property.image.src} alt={property.image.alt} />
        </Link>

        <button type="button" className="property-card-favorite" aria-label={`Save ${property.title}`}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>

      <Link className="property-card-link" to={`/property/${property.id}`}>
        <div className="property-card-body">
          <div>
            <h3 className="property-card-title">{property.title}</h3>
            <p className="property-card-location">{property.location}</p>
            <p className="property-card-dates">{property.dates}</p>
          </div>

          <div className="property-card-rating" aria-label={`Rating ${property.rating.toFixed(2)} out of 5`}>
            <span className="property-card-star material-symbols-outlined" aria-hidden="true">
              star
            </span>
            <span>{property.rating.toFixed(2)}</span>
          </div>
        </div>

        <p className="property-card-price">
          ${priceFormatter.format(property.price)} <span className="property-card-price-label">night</span>
        </p>
      </Link>
    </article>
  )
}