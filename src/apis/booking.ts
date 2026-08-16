import type { ConfirmedBooking, CreateBookingPayload } from "./types"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface CreateBookingResponse {
	idempotency_key: string
}

export async function createBooking(payload: CreateBookingPayload): Promise<CreateBookingResponse> {
	const response = await fetch(`${API_BASE_URL}/booking`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload),
	})
	if (!response.ok) {
		throw new Error(`Booking failed: ${response.status}`)
	}

  return response.json()
}

export async function confirmBooking(idempotencyKey: string): Promise<ConfirmedBooking> {
	const response = await fetch(`${API_BASE_URL}/booking/${idempotencyKey}/confirm`, {
		method: 'POST',
		credentials: 'include',
	})

	if (!response.ok) {
		throw new Error(`Booking confirmation failed: ${response.status}`)
	}

	return response.json()
}