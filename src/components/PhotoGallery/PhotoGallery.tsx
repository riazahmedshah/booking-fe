interface PhotoGalleryProps {
  images: string[]
  id: string
}

export function PhotoGallery({ images, id }: PhotoGalleryProps) {
  const [heroImage, ...sideImages] = images

  return (
    <section className="property-gallery" aria-label="Property photo gallery">
      <div className="property-gallery-hero">
        <img className="property-gallery-image" src={`/${id}/${heroImage}`} alt="Property photo 1" />
      </div>

      <div className="property-gallery-side">
        {sideImages.slice(0, 2).map((image, index) => (
          <div className="property-gallery-item" key={image}>
            <img className="property-gallery-image" src={`/${id}/${image}`} alt={`Property photo ${index + 2}`} />
          </div>
        ))}
      </div>
    </section>
  )
}