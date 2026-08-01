interface PhotoGalleryProps {
  images: string[]
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [heroImage, ...restImages] = images

  return (
    <section className="property-gallery" aria-label="Property photo gallery">
      <div className="property-gallery-hero">
        <img className="property-gallery-image" src={heroImage} alt="Property photo 1" />
      </div>
      {restImages.slice(0, 4).map((image, index) => (
        <div className="property-gallery-item" key={image}>
          <img className="property-gallery-image" src={image} alt={`Property photo ${index + 2}`} />
        </div>
      ))}
    </section>
  )
}