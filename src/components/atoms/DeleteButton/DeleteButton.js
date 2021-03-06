import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  justify-content: center;
  align-items: 100%;
  font-weight: bold;
  cursor: pointer;
  color: inherit;
`

const DeleteButton = (props) => {
  return <StyledButton {...props}>X</StyledButton>
}

export default DeleteButton
