import { createContext, useEffect, useState, type ReactNode } from 'react'
import { getMe } from '../apis/user/user'
import type { User } from '../apis/user/types'
import { useToast } from '../hooks/useToast'

interface AuthContextValue {
	isAuthenticated: boolean
	isLoading: boolean
	user: User | null
	setIsAuthenticated: (value: boolean) => void
	setUser: (user: User | null) => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const { showToast } = useToast()

	useEffect(() => {
		let isMounted = true

		async function checkAuth() {
			try {
				const me = await getMe()
				if (isMounted) {
					setUser(me)
					setIsAuthenticated(true)
					showToast('Signed in successfully.', { variant: 'success' })
				}
			} catch (err) {
				const message = err instanceof Error ? err.message : 'An unexpected error occurred'
				showToast(message, { variant: 'error' })
				if (isMounted) {
					setUser(null)
					setIsAuthenticated(false)
				}
			} finally {
				if (isMounted) {
					setIsLoading(false)
				}
			}
		}

		void checkAuth()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext value={{ isAuthenticated, isLoading, user, setIsAuthenticated, setUser }}>
			{children}
		</AuthContext>
	)
}