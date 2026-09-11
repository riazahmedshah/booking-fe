import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../../components/Header/Header'
import { Footer } from '../../../components/Footer/Footer'
import { getCoverImageUrl } from '../../../utils/propertyImage'
import type { PropertyResponse } from '../../../apis/properties/types'
import { fetchHostings } from '../../../apis/properties/properties'
import { useToast } from '../../../hooks/useToast'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function Hostings() {
  const [hostings, setHostings] = useState<PropertyResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { showToast } = useToast()

  useEffect(() => {
    let isMounted = true

    async function loadHostings() {
      try {
        const data = await fetchHostings()
        if (isMounted) {
          setHostings(data)
          showToast('Listings loaded.', { variant: 'success' })
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An unexpected error occurred'
        showToast(message, { variant: 'error' })
        console.error('Failed to load hostings', err)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadHostings()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="home-page">
      <Header />

      <main className="property-grid-section py-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="" style={{ fontSize: '2rem', textAlign: 'left' }}>
            Your listings...
          </h1>
          <Link to="/host/create" className="btn-primary">
            Add property
          </Link>
        </div>

        {isLoading ? (
          <div className="home-loading">Loading your listings...</div>
        ) : hostings.length === 0 ? (
          <p className="text-text-variant">You haven&apos;t listed any properties yet.</p>
        ) : (
          <div className="property-grid">
            {hostings.map((property) => {
              const coverImageUrl = getCoverImageUrl(property.images)
              const displayTitle = property.title || 'Untitled draft'
              const displayLocation = property.address.area
                ? `${property.address.area}, ${property.address.city ?? ''}`
                : 'Location not set'

              return (
                <article className="property-card" key={property.id}>
                  <div className="property-card-media">
                    {coverImageUrl ? (
                      <img className="property-card-image" src={coverImageUrl} alt={displayTitle} />
                    ) : (
                      <div className="property-card-image-placeholder">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="property-card-body">
                    <div>
                      <h3 className="property-card-title">{displayTitle}</h3>
                      <p className="property-card-location">{displayLocation}</p>
                    </div>
                  </div>

                  <p className="property-card-price">
                    {property.price != null ? currencyFormatter.format(property.price) : 'Price not set'}
                    {property.price != null ? <span className="property-card-price-label"> / night</span> : null}
                  </p>
                </article>
              )
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Hostings