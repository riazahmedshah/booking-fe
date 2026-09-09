import { emitAuthRequired } from './authEvents'
import { AppError } from './erros'
import type { ApiResponse } from './types'

export async function handleApiResponse<T>(response: Response): Promise<T> {
	const json: ApiResponse<T> = await response.json()
	// console.log('Raw API response:', json)
	if (!json.success) {
		if (response.status === 401) {
			emitAuthRequired()
		}
		throw new AppError(json.error.code, json.error.message)
	}

	return json.data
}