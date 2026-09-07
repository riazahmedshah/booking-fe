const MAX_FILES = 4
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024

export function validateImageFiles(files: File[]): string | null {
	if (files.length === 0) {
		return 'Please add at least one image'
	}

	if (files.length > MAX_FILES) {
		return `You can upload a maximum of ${MAX_FILES} images`
	}

	const oversizedFile = files.find((file) => file.size > MAX_FILE_SIZE_BYTES)
	if (oversizedFile) {
		return `${oversizedFile.name} exceeds the 5MB limit`
	}

	return null
}