export interface PropertyImage {
  src: string
  alt: string
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

export interface CreateBookingPayload {
	propertyId: string
	totalPrice: number
	checkIn: string
	checkOut: string
}


export interface ConfirmedBooking {
	id: string
	userId: string
	propertyId: string
	totalPrice: number
	status: string
	checkIn: string
	checkOut: string
	createdAt: string
	updatedAt: string
}

