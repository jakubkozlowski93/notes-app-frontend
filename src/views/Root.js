import React from 'react'
import { useAuth } from 'providers/useAuth'
import UnAuthenticatedApp from './UnauthenticatedApp/UnauthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp'

const Root = () => {
  const auth = useAuth()
  return auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}

export default Root
