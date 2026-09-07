import type { User } from "./types"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function becomeHost(): Promise<{ message: string }> {
	const response = await fetch(`${API_BASE_URL}/user/role`, {
		method: 'PATCH',
		credentials: 'include',
	})

	if (!response.ok) {
		throw new Error(`Role update failed: ${response.status}`)
	}

	return response.json()
}

export async function getMe(): Promise<User> {
	const response = await fetch(`${API_BASE_URL}/user/me`, {
		method: 'GET',
		credentials: 'include',
	})

	if (!response.ok) {
		throw new Error(`Not authenticated: ${response.status}`)
	}

	return response.json()
}