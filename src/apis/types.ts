// export interface PropertyImage {
//   src: string
//   alt: string
// }

export interface Category {
  id: string
  label: string
  icon: string
  active?: boolean
}

// export interface Booking {
//   id: string
//   propertyTitle: string
//   propertyThumbnail: PropertyImage
//   dates: string
//   guests: number
//   totalAmount: number
// }

export interface ApiSuccess<T> {
	success: true
	data: T
	message: string
}

export interface ApiError {
	success: false
	error: {
		code: string
		message: string
	}
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError