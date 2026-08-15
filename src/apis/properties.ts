import type { Property, PropertyDetail } from './types'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProperties(): Promise<Property[]> {
	const response = await fetch(`${API_BASE_URL}/property`);

	if (!response.ok) {
		throw new Error(`Failed to fetch properties: ${response.status}`);
	}

	return response.json();
}

export async function fetchPropertyById(id: string): Promise<PropertyDetail> {
	const response = await fetch(`${API_BASE_URL}/property/${id}`)

	if (!response.ok) {
		throw new Error(`Failed to fetch property: ${response.status}`)
	}

	return response.json()
}
