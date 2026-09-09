import { createContext, useEffect, useState, type ReactNode } from 'react'
import { onAuthRequired } from '../apis/authEvents'

interface AuthModalContextValue {
	isOpen: boolean
	openAuthModal: () => void
	closeAuthModal: () => void
}

export const AuthModalContext = createContext<AuthModalContextValue | null>(null)

export function AuthModalProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		return onAuthRequired(() => setIsOpen(true))
	}, [])
	return (
		<AuthModalContext
			value={{
				isOpen,
				openAuthModal: () => setIsOpen(true),
				closeAuthModal: () => setIsOpen(false),
			}}
		>
			{children}
		</AuthModalContext>
	)
}