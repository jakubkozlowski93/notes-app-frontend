import React from 'react'
import ReactDOM from 'react-dom'
import Root from './views/Root'
import { GlobalStyle } from 'asets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'asets/styles/theme'
import { AuthProvider } from 'providers/useAuth'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Root />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
