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

// export interface Property {
//   id: string
//   title: string
//   subtitle: string
//   location?: string
//   dates?: string
//   rating?: number
//   price: number
//   image?: PropertyImage
//   images?: PropertyImage[]
//   imageUrls: string[]
//   reviewsCount?: number
//   description?: string
//   amenities?: string[]
//   host?: PropertyHost
//   guestSummary?: string
//   capacity?: string
// }

export interface Property {
	id: string;
	title: string;
	subTitle: string;
	price: number;
	hostId: string;
	maxGuests: number;
	imageUrls: string[];
	createdAt: string;
	updatedAt: string;
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