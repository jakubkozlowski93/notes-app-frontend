import React from 'react'
import ReactDOM from 'react-dom'
import Root from './views/Root'
import { GlobalStyle } from 'asets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'asets/styles/theme'
import { AuthProvider } from 'hooks/useAuth'
import { ErrorProvider } from 'hooks/useError'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorProvider>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </ErrorProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
