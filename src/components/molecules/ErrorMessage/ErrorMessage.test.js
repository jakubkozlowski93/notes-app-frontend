import React from 'react'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import { renderWithProviders } from 'helpers/renderWithProviders'

describe('Is component works correctly?', () => {
  it('Is component renders?', () => {
    renderWithProviders(<ErrorMessage />)
  })
})
