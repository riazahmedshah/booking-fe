import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { AuthModalProvider } from './context/AuthModalContext.tsx'
import { AuthModal } from './components/AuthModal/AuthModal.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <StrictMode>
    <AuthModalProvider>
			<App />
			<AuthModal />
		</AuthModalProvider>
  </StrictMode>
  </AuthProvider>
)
