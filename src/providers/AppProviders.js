import React from 'react'
import { GlobalStyle } from 'asets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'hooks/useAuth'
import { ErrorProvider } from 'hooks/useError'
import NotesProviders from 'providers/NotesProviders'
import { BrowserRouter as Router } from 'react-router-dom'
import { lightTheme, darkTheme } from 'asets/styles/theme'
import { useSelector } from 'react-redux'

const AppProviders = ({ children }) => {
  const theme = useSelector((state) => state)

  return (
    <Router>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
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
