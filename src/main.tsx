import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { AuthModalProvider } from './context/AuthModalContext.tsx'
import { AuthModal } from './components/AuthModal/AuthModal.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastProvider } from './context/ToastContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ToastProvider>
  <AuthProvider>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthModalProvider>
			<App />
			<AuthModal />
		</AuthModalProvider>
  </GoogleOAuthProvider>
  </AuthProvider>
  </ToastProvider>
)
