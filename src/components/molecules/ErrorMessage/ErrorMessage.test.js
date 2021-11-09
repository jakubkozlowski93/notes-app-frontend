import React from 'react'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider'

describe('Is component works correctly?', () => {
  it('Is component renders?', () => {
    renderWithThemeProvider(<ErrorMessage />)
  })
})
