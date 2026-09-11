import { createContext, useState, type ReactNode } from 'react'

interface Toast {
	id: number
	message: string
	variant: 'success' | 'error'
}

interface ToastContextValue {
	showToast: (message: string, options?: { variant?: 'success' | 'error' }) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([])

	function showToast(message: string, options?: { variant?: 'success' | 'error' }) {
		const id = Date.now()
		setToasts((current) => [...current, { id, message, variant: options?.variant ?? 'success' }])
		setTimeout(() => {
			setToasts((current) => current.filter((t) => t.id !== id))
		}, 4000)
	}

	return (
		<ToastContext value={{ showToast }}>
			{children}
			<div className="fixed bottom-6 right-6 z-60 grid gap-2">
				{toasts.map((toast) => (
					<div
						key={toast.id}
						className="rounded-xl bg-text px-4 py-3 text-sm text-surface shadow-lg"
						style={{
							border: toast.variant === 'error' ? '1px solid #ef4444' : '1px solid #22c55e',
						}}
					>
						{toast.message}
					</div>
				))}
			</div>
		</ToastContext>
	)
}