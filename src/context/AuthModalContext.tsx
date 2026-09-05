import { createContext, useState, type ReactNode } from 'react'

interface AuthModalContextValue {
	isOpen: boolean
	openAuthModal: () => void
	closeAuthModal: () => void
}

export const AuthModalContext = createContext<AuthModalContextValue | null>(null)

export function AuthModalProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

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