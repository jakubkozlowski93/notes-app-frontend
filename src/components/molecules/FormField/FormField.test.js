import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from 'helpers/renderWithProviders'
import FormField from 'components/molecules/FormField/FormField'
import '@testing-library/jest-dom'

describe('FormField', () => {
  it('Is component renders', () => {
    renderWithProviders(<FormField />)
  })
})
