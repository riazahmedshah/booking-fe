import type { PropertyImage } from '../../apis/properties/types'
import { getActiveImageUrls } from '../../utils/propertyImage'

interface PhotoGalleryProps {
  images: PropertyImage[]
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const imageUrls = getActiveImageUrls(images)

  if (imageUrls.length === 0) {
    return (
      <section className="property-gallery" aria-label="Property photo gallery">
        <div className="property-gallery-hero property-card-image-placeholder">No images available</div>
      </section>
    )
  }

  const [heroImage, ...sideImages] = imageUrls

  return (
    <section className="property-gallery" aria-label="Property photo gallery">
      <div className="property-gallery-hero">
        <img className="property-gallery-image" src={heroImage} alt="Property photo 1" />
      </div>

      <div className="property-gallery-side">
        {sideImages.slice(0, 2).map((image, index) => (
          <div className="property-gallery-item" key={image}>
            <img className="property-gallery-image" src={image} alt={`Property photo ${index + 2}`} />
          </div>
        ))}
      </div>
    </section>
  )
}