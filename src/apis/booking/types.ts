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