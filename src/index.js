import React from 'react'
import ReactDOM from 'react-dom'
import Root from './views/Root'
import { GlobalStyle } from 'asets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'asets/styles/theme'
import { AuthProvider } from 'hooks/useAuth'
import { ErrorProvider } from 'hooks/useError'
import AppProviders from 'providers/AppProviders'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorProvider>
          <AppProviders>
            <AuthProvider>
              <Root />
            </AuthProvider>
          </AppProviders>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
