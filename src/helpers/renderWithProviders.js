import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'asets/styles/theme'
import NotesProviders from 'providers/NotesProviders'

export const renderWithProviders = ({ children }) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <NotesProviders> {children}</NotesProviders>
    </ThemeProvider>
  )
}
