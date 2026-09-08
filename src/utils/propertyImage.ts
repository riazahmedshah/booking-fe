import type { PropertyImage } from '../apis/properties/types'

const IMAGE_BASE_URL = import.meta.env.VITE_GOOGLE_PUBLIC_URL

export function getActiveImageUrls(images: PropertyImage[]): string[] {
	return images
		.filter((image) => image.status === 'active' && image.key)
		.map((image) => `${IMAGE_BASE_URL}${image.key}`)
}

export function getCoverImageUrl(images: PropertyImage[]): string | null {
	return getActiveImageUrls(images)[0] ?? null
}