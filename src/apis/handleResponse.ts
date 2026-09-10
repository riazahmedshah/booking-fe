import { emitAuthRequired } from './authEvents'
import { AppError } from './erros'

export async function handleApiResponse<T>(response: Response): Promise<T> {
	const json = await response.json()

	if (json?.success === true) {
		return json.data as T
	}

	if (response.status === 401) {
		emitAuthRequired()
	}

	const code = json?.error?.code ?? 'UNKNOWN_ERROR'
	const message = json?.error?.message ?? json?.message ?? 'Something went wrong'
	throw new AppError(code, message)
}