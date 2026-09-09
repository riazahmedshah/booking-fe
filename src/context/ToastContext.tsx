import { createContext, useState, type ReactNode } from 'react'

interface Toast {
	id: number
	message: string
}

interface ToastContextValue {
	showToast: (message: string) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([])

	function showToast(message: string) {
		const id = Date.now()
		setToasts((current) => [...current, { id, message }])
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
					>
						{toast.message}
					</div>
				))}
			</div>
		</ToastContext>
	)
}