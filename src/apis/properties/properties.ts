import { handleApiResponse } from '../handleResponse';
import type { AvailabilityMonth, CreatePropertyAndAddressRequest, Property, PropertyResponse, PropertyResponseWithHost } from './types'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProperties(): Promise<PropertyResponse[]> {
	const response = await fetch(`${API_BASE_URL}/property`);

	return handleApiResponse<PropertyResponse[]>(response);	
}

export async function fetchPropertyById(id: string): Promise<PropertyResponseWithHost> {
	const response = await fetch(`${API_BASE_URL}/property/${id}`)

	return handleApiResponse<PropertyResponseWithHost>(response)
}

export async function fetchPropertyAvailability(id: string): Promise<AvailabilityMonth[]> {
	const response = await fetch(`${API_BASE_URL}/property/${id}/availability`)

	return handleApiResponse<AvailabilityMonth[]>(response)
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

	return handleApiResponse<Property>(response)
}

export async function listPropertiesByHost(): Promise<PropertyResponse[]> {
	const response = await fetch(`${API_BASE_URL}/property/host/hostings`)
	return handleApiResponse<PropertyResponse[]>(response)
}

export async function fetchHostings(): Promise<PropertyResponse[]> {
	const response = await fetch(`${API_BASE_URL}/property/host/hostings`, {
		method: 'GET',
		credentials: 'include',
	})

	return handleApiResponse<PropertyResponse[]>(response)
}