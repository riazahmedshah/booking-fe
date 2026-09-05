import { use } from 'react'
import { AuthModalContext } from '../context/AuthModalContext'

export function useAuthModal() {
	const context = use(AuthModalContext)

	if (!context) {
		throw new Error('useAuthModal must be used within AuthModalProvider')
	}

	return context
}