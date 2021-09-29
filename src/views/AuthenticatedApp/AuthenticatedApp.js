import React from 'react'
import MainTemplate from 'components/templates/MainTemplate'
import Dashboard from 'components/organisms/Dashboard/Dashboard'
import AppProviders from 'providers/AppProviders'

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <AppProviders>
        <Dashboard />
      </AppProviders>
    </MainTemplate>
  )
}

export default AuthenticatedApp
