import { handleApiResponse } from "../handleResponse"
import type { LoginPayload, RegisterPayload, sendOtpPayload, VerifyOtpPayload, VerifyOtpResponse } from "./types"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL




export async function sendOtp(payload: sendOtpPayload): Promise<{message: string}> {
	const response = await fetch(`${API_BASE_URL}/auth/otp`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	return handleApiResponse<{message: string}>(response)	
}

export async function verifyOtp(payload: VerifyOtpPayload): Promise<VerifyOtpResponse['data']> {
	// console.log('verifyOtp fetch starting', payload)
	const response = await fetch(`${API_BASE_URL}/auth/otp/verify`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})
	// console.log('verifyOtp fetch response', await response.json())
	// console.log('verifyOtp fetch done', response.status)

	return handleApiResponse<VerifyOtpResponse['data']>(response)
}

export async function login(payload: LoginPayload): Promise<{message: string}> {
	const response = await fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	return handleApiResponse<{message: string}>(response)
}

export async function Register(payload: RegisterPayload): Promise<{message: string}> {
	const response = await fetch(`${API_BASE_URL}/auth/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	return handleApiResponse<{message: string}>(response)
}

export async function googleLogin(code: string): Promise<{ message: string }> {
	const response = await fetch(`${API_BASE_URL}/auth/google?code=${encodeURIComponent(code)}`, {
		method: 'POST',
		credentials: 'include',
	})

	return handleApiResponse<{ message: string }>(response)
}

