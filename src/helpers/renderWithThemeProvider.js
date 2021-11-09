import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'asets/styles/theme'

export const renderWithThemeProvider = ({ children }) => {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>)
}
