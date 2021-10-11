import React from 'react'
import { GlobalStyle } from 'asets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'hooks/useAuth'
import { ErrorProvider } from 'hooks/useError'
import NotesProviders from 'providers/NotesProviders'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from 'asets/styles/theme'

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorProvider>
          <NotesProviders>
            <AuthProvider>{children}</AuthProvider>
          </NotesProviders>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  )
}

export default AppProviders
