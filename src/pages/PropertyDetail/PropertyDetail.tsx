import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPropertyById } from '../../apis/properties'
import type { Property } from '../../apis/types'
import { AmenitiesList } from '../../components/AmenitiesList/AmenitiesList'
import { BookingCard } from '../../components/BookingCard/BookingCard'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { PhotoGallery } from '../../components/PhotoGallery/PhotoGallery'

const unavailableDates = [
  new Date(2024, 9, 1),
  new Date(2024, 9, 2),
  new Date(2024, 9, 3),
  new Date(2024, 9, 4),
  new Date(2024, 9, 5),
  new Date(2024, 9, 20),
  new Date(2024, 9, 21),
  new Date(2024, 9, 22),
  new Date(2024, 9, 23),
  new Date(2024, 9, 24),
  new Date(2024, 9, 25),
]

const defaultSelection = {
  from: new Date(2024, 9, 12),
  to: new Date(2024, 9, 17),
}

export function PropertyDetail() {
  const { id = '' } = useParams()
  const [property, setProperty] = useState<Property | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadProperty() {
      const nextProperty = await fetchPropertyById(id)

      if (isMounted) {
        setProperty(nextProperty)
      }
    }

    void loadProperty()

    return () => {
      isMounted = false
    }
  }, [id])

  if (!property) {
    return (
      <div className="property-detail-page">
        <Header />
        <main className="property-detail-main">
          <div className="property-detail-loading">Loading property details...</div>
        </main>
      </div>
    )
  }

  const galleryImages = property.images?.map((image) => image.src) ?? [property.image.src]
  const amenities = property.amenities ?? []
  const host = property.host

  return (
    <div className="property-detail-page">
      <Header />

      <main className="property-detail-main">
        <section className="property-detail-header">
          <h1 className="property-detail-title">{property.title}</h1>
          <div className="property-detail-meta-row">
            <div className="property-detail-meta-group">
              <span className="property-detail-meta-item property-detail-rating">
                <span className="property-detail-rating-icon material-symbols-outlined" aria-hidden="true">
                  star
                </span>
                {property.rating.toFixed(2)}
              </span>
              <span>{property.reviewsCount ?? 0} reviews</span>
              <span className="property-detail-meta-item">
                <span className="property-detail-location-icon material-symbols-outlined" aria-hidden="true">
                  location_on
                </span>
                {property.location}
              </span>
            </div>

            <div className="property-detail-actions">
              <button type="button" className="property-detail-action">
                <span className="material-symbols-outlined" aria-hidden="true">
                  share
                </span>
                <span>Share</span>
              </button>
              <button type="button" className="property-detail-action">
                <span className="material-symbols-outlined" aria-hidden="true">
                  favorite
                </span>
                <span>Save</span>
              </button>
            </div>
          </div>
        </section>

        <PhotoGallery images={galleryImages} />

        <section className="property-detail-content-grid">
          <div className="property-detail-left-column">
            <div className="property-detail-summary">
              <h2 className="property-detail-section-title">{property.capacity ?? 'Entire cabin hosted by Sarah'}</h2>
              <p className="property-detail-capacity">
                {property.guestSummary ?? '4 guests · 2 bedrooms · 3 beds · 1.5 baths'}
              </p>
            </div>

            {host ? (
              <div className="property-detail-host-card">
                <div className="property-detail-avatar-wrap">
                  <img className="property-detail-avatar" src={host.avatar.src} alt={host.avatar.alt} />
                </div>
                <div>
                  <h3 className="property-detail-host-title">{host.name} is a Superhost</h3>
                  <p className="property-detail-host-text">{host.description}</p>
                  <p className="property-detail-host-years">{host.yearsHosting}</p>
                </div>
              </div>
            ) : null}

            <p className="property-detail-description">{property.description}</p>

            {amenities.length > 0 ? <AmenitiesList amenities={amenities} /> : null}

            <button type="button" className="property-detail-amenities-button">
              Show all 42 amenities
            </button>
          </div>

          <div className="property-detail-right-column">
            <BookingCard
              price={property.price}
              rating={property.rating}
              unavailableDates={unavailableDates}
              defaultRange={defaultSelection}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PropertyDetail