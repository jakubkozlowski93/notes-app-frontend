import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  justify-content: center;
  align-items: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`

export const DeleteButton = (props) => <StyledButton {...props}>X</StyledButton>
