export interface PropertyImage {
  src: string
  alt: string
}

export interface PropertyHost {
  name: string
  description: string
  yearsHosting: string
  avatar: PropertyImage
}

export interface Property {
  id: string
  title: string
  location: string
  dates: string
  rating: number
  price: number
  image: PropertyImage
  images?: PropertyImage[]
  reviewsCount?: number
  description?: string
  amenities?: string[]
  host?: PropertyHost
  guestSummary?: string
  capacity?: string
}

export interface Category {
  id: string
  label: string
  icon: string
  active?: boolean
}

export interface Booking {
  id: string
  propertyTitle: string
  propertyThumbnail: PropertyImage
  dates: string
  guests: number
  totalAmount: number
}