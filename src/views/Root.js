import React from 'react'
import { useAuth } from 'hooks/useAuth'
import UnAuthenticatedApp from './UnauthenticatedApp/UnauthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp'
import { useError } from 'hooks/useError'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'

const Root = () => {
  const auth = useAuth()
  const { error } = useError()
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  )
}

export default Root
