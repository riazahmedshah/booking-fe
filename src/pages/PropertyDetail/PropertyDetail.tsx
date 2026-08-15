import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPropertyById } from '../../apis/properties'
import type { PropertyDetail as PropertyDetailType } from '../../apis/types'
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

const placeholderAvatar = 'https://api.dicebear.com/9.x/initials/svg?seed=Host'
const placeholderDescription =
  'This host is committed to providing a great stay for every guest, with quick responses and thoughtful touches throughout your visit.'
const placeholderAmenities = ['Wifi', 'Kitchen', 'Free parking', 'Dedicated workspace']

export function PropertyDetail() {
  const { id = '' } = useParams()
  const [property, setProperty] = useState<PropertyDetailType | null>(null)

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

  const locationLabel = `${property.address.area}, ${property.address.city}`

  return (
    <div className="property-detail-page">
      <Header />

      <main className="property-detail-main">
        <section className="property-detail-header">
          <h1 className="property-detail-title">{property.title}</h1>
          <div className="property-detail-meta-row">
            <div className="property-detail-meta-group">
              <span className="property-detail-meta-item">
                <span className="property-detail-location-icon material-symbols-outlined" aria-hidden="true">
                  location_on
                </span>
                {locationLabel}
              </span>
              <span className="property-detail-meta-item">
                <span className="property-detail-location-icon material-symbols-outlined" aria-hidden="true">
                  group
                </span>
                {property.maxGuests} guests
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

        <PhotoGallery id={property.id} images={property.images} />

        <section className="property-detail-content-grid">
          <div className="property-detail-left-column">
            <div className="property-detail-summary">
              <h2 className="property-detail-section-title">
                Entire place hosted by {property.host.name}
              </h2>
              <p className="property-detail-capacity">{property.maxGuests} guests</p>
            </div>

            <div className="property-detail-host-card">
              <div className="property-detail-avatar-wrap">
                <img className="property-detail-avatar" src={placeholderAvatar} alt={property.host.name} />
              </div>
              <div>
                <h3 className="property-detail-host-title">{property.host.name} is your host</h3>
                <p className="property-detail-host-text">{placeholderDescription}</p>
              </div>
            </div>

            <p className="property-detail-description">{property.subTitle}</p>

            <AmenitiesList amenities={placeholderAmenities} />
          </div>

          <div className="property-detail-right-column">
            <BookingCard
              price={property.price}
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