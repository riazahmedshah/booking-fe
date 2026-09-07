import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface HostRouteProps {
  children: ReactNode
}

export function HostRoute({ children }: HostRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth()

  if (isLoading) {
    return <div className="home-loading">Checking access...</div>
  }

  if (!isAuthenticated || user?.role !== 'host') {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}