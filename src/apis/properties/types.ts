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

export interface AvailabilityDay {
  calendarDate: string
  available: boolean
}

export interface AvailabilityMonth {
  month: number
  year: number
  days: AvailabilityDay[]
}

export interface addressPayload {
  country: string;
  state: string;
  pincode: string;
  city?: string | null;
  area: string;
  propertyId?: string;
}

export interface propertyPayload {
  title: string;
  subTitle?: string | null;
  price: number;
  maxGuests?: number | null;
}

export interface CreatePropertyAndAddressRequest {
  property: propertyPayload;
  address: addressPayload;
  images: File[];
}