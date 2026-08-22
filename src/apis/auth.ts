import type { User } from "./types"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface LoginPayload {
	email: string
	password: string
}

export async function login(payload: LoginPayload): Promise<void> {
	const response = await fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})

	if (!response.ok) {
		throw new Error(`Login failed: ${response.status}`)
	}
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