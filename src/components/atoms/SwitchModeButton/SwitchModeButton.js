import React from 'react'
import { useDispatch } from 'react-redux'
import { Sun, Moon, StyledLabel, StyledSpan, StyledInput } from 'components/atoms/SwitchModeButton/SwitchModeButton.styles'

const SwitchModeButton = () => {
  const dispatch = useDispatch()

  return (
    <StyledLabel>
      <StyledInput type="checkbox" onChange={() => dispatch({ type: 'TOGGLE' })} />
      <StyledSpan></StyledSpan>
      <Moon />
      <Sun />
    </StyledLabel>
  )
}

export default SwitchModeButton
