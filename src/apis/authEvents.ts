type Listener = () => void

let listeners: Listener[] = []

export function onAuthRequired(listener: Listener) {
	listeners.push(listener)
	return () => {
		listeners = listeners.filter((l) => l !== listener)
	}
}

export function emitAuthRequired() {
	listeners.forEach((listener) => listener())
}