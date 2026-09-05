export interface User {
	id: string
	firstName: string
	lastName: string
	email: string
	role: string
}

export interface sendOtpPayload {
  email: string
}

export interface LoginPayload {
  email: string
}

export interface VerifyOtpPayload {
  email: string
  otp: number
}

export interface VerifyOtpResponse {
  data: {
    userExists: boolean
    email: string
  }
  message: string
}

export interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
}