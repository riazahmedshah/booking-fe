import type { PropertyResponse } from '../../apis/properties/types'
import { PropertyCard } from '../PropertyCard/PropertyCard'

interface PropertyGridProps {
  properties: PropertyResponse[]
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <section className="property-grid-section" aria-label="Featured stays">
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}