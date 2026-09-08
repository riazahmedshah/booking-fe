import type { AvailabilityMonth, CreatePropertyAndAddressRequest, Property, PropertyResponse, PropertyResponseWithHost } from './types'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProperties(): Promise<PropertyResponse[]> {
	const response = await fetch(`${API_BASE_URL}/property`);

	if (!response.ok) {
		throw new Error(`Failed to fetch properties: ${response.status}`);
	}

	return response.json();
}

export async function fetchPropertyById(id: string): Promise<PropertyResponseWithHost> {
	const response = await fetch(`${API_BASE_URL}/property/${id}`)

	if (!response.ok) {
		throw new Error(`Failed to fetch property: ${response.status}`)
	}

	return response.json()
}

export async function fetchPropertyAvailability(id: string): Promise<AvailabilityMonth[]> {
	const response = await fetch(`${API_BASE_URL}/property/${id}/availability`)

	if (!response.ok) {
		throw new Error(`Failed to fetch availability: ${response.status}`)
	}

	return response.json()
}


export async function createProperty(payload: CreatePropertyAndAddressRequest): Promise<Property> {
	const formData = new FormData()
	formData.append('property', JSON.stringify(payload.property))
	formData.append('address', JSON.stringify(payload.address))
	payload.images.forEach((file) => formData.append('images', file))

	const response = await fetch(`${API_BASE_URL}/property`, {
		method: 'POST',
		credentials: 'include',
		body: formData,
	})

	if (!response.ok) {
		throw new Error(`Property creation failed: ${response.status}`)
	}

	return response.json()
}

export async function listPropertiesByHost(): Promise<PropertyResponse[]> {
	const response = await fetch(`${API_BASE_URL}/property/host/hostings`)
	if (!response.ok) {
		throw new Error(`Failed to fetch properties by host: ${response.status}`)
	}

	return response.json()
}

export async function fetchHostings(): Promise<PropertyResponse[]> {
	const response = await fetch(`${API_BASE_URL}/property/host/hostings`, {
		method: 'GET',
		credentials: 'include',
	})

	if (!response.ok) {
		throw new Error(`Failed to fetch hostings: ${response.status}`)
	}

	return response.json()
}