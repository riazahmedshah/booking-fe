import type { LoginPayload, RegisterPayload, sendOtpPayload, User, VerifyOtpPayload, VerifyOtpResponse } from "./types"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL




export async function sendOtp(payload: sendOtpPayload): Promise<{message: string}> {
	const response = await fetch(`${API_BASE_URL}/auth/otp`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	if (!response.ok) {
		throw new Error(`Send OTP failed: ${response.status}`)
	}

	return response.json()
}

export async function verifyOtp(payload: VerifyOtpPayload): Promise<VerifyOtpResponse> {
	const response = await fetch(`${API_BASE_URL}/auth/otp/verify`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	if (!response.ok) {
		throw new Error(`Verify OTP failed: ${response.status}`)
	}

	return response.json()
}

export async function login(payload: LoginPayload): Promise<{message: string}> {
	const response = await fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	if (!response.ok) {
		throw new Error(`Login failed: ${response.status}`)
	}

	return response.json()
}

export async function Register(payload: RegisterPayload): Promise<{message: string}> {
	const response = await fetch(`${API_BASE_URL}/auth/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	if (!response.ok) {
		throw new Error(`Register failed: ${response.status}`)
	}

	return response.json()
}

export async function getMe(): Promise<User> {
	const response = await fetch(`${API_BASE_URL}/auth/me`, {
		method: 'GET',
		credentials: 'include',
	})

	if (!response.ok) {
		throw new Error(`Not authenticated: ${response.status}`)
	}

	return response.json()
}