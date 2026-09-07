import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../components/Header/Header'
import { Footer } from '../../../components/Footer/Footer'
import { validateImageFiles } from '../../../utils/fileValidation'
import { createProperty } from '../../../apis/properties/properties'

export function CreateProperty() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [price, setPrice] = useState('')
  const [maxGuests, setMaxGuests] = useState('')

  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [area, setArea] = useState('')

  const [images, setImages] = useState<File[]>([])
  const [imageError, setImageError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    const error = validateImageFiles(files)

    if (error) {
      setImageError(error)
      setImages([])
      return
    }

    setImageError(null)
    setImages(files)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim() || !price.trim() || Number(price) <= 0 || (maxGuests && Number(maxGuests) < 1) || !country.trim() || !state.trim() || !pincode.trim() || !area.trim()) {
      setFormError('Please fill in all required fields correctly')
      return
    }

    const validationError = validateImageFiles(images)
    if (validationError) {
      setImageError(validationError)
      return
    }

    setIsSubmitting(true)
    setFormError(null)

    try {
      await createProperty({
        property: {
          title,
          subTitle: subTitle || null,
          price: Number(price),
          maxGuests: maxGuests ? Number(maxGuests) : null,
        },
        address: {
          country,
          state,
          pincode,
          city: city || null,
          area,
        },
        images,
      })

      navigate('/')
    } catch (err) {
      setFormError('Could not create property. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="home-page">
      <Header />

      <main className="property-detail-main">
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
        <h1 className="page-create-title mb-2" style={{ fontSize: '2rem', textAlign: 'left' }}>
          List your property
        </h1>
      </div>

        <form onSubmit={handleSubmit} className="mx-auto grid gap-6" style={{ maxWidth: '640px' }}>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-text" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-text" htmlFor="subTitle">Subtitle</label>
            <input
              id="subTitle"
              type="text"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="price">Price per night</label>
              <input
                id="price"
                type="number"
                min={0}
                value={price}
                 onChange={(e) => {
                    const value = e.target.value
                    if (value === '' || Number(value) >= 0) {
                      setPrice(value)
                    }
                  }}
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="maxGuests">Max guests</label>
              <input
                id="maxGuests"
                type="number"
                min={1}
                value={maxGuests}
                onChange={(e) => {
                  const value = e.target.value
                  if (value === '' || Number(value) >= 1) {
                    setMaxGuests(value)
                  }
                }}
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-text" htmlFor="area">Area</label>
            <input
              id="area"
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-text" htmlFor="images">Images (max 4, 5MB each)</label>
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none"
            />
            {imageError ? <p className="m-0 text-sm text-error">{imageError}</p> : null}
            {images.length > 0 ? (
              <p className="m-0 text-sm text-text-variant">{images.length} file(s) selected</p>
            ) : null}
          </div>

          {formError ? <p className="m-0 text-sm text-error">{formError}</p> : null}

          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Create property'}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default CreateProperty