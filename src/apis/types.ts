export interface PropertyImage {
  src: string
  alt: string
}

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

export interface PropertyHost {
	id: string
	name: string
}

export interface PropertyAddress {
	country: string
	state: string
	pincode: string
	city: string
	area: string
}

export interface PropertyDetail {
	id: string
	title: string
	subTitle: string
	price: number
	maxGuests: number
	images: string[]
	host: PropertyHost
	address: PropertyAddress
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