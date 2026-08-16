import { createContext, useState, type ReactNode } from 'react'

interface AuthContextValue {
	isAuthenticated: boolean
	setIsAuthenticated: (value: boolean) => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	return (
		<AuthContext value={{ isAuthenticated, setIsAuthenticated }}>
			{children}
		</AuthContext>
	)
}