import React from 'react'
import { Wrapper } from 'components/organisms/Header/Header.styles'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FaSun, FaMoon } from 'react-icons/fa'

const Sun = styled(FaSun)`
  color: orange;
  font-size: ${({ theme }) => theme.fontSize.l};
`

const Moon = styled(FaMoon)`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
`

const StyledLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.colors.graphite};
  border-radius: 20px;
  padding: 0px 5px;
`

const StyledSpan = styled.span`
  position: absolute;
  height: 20px;
  width: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;

  &::before {
  }
`

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledSpan} {
    transform: translateX(30px);
  }
`

const Header = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <StyledLabel>
        <StyledInput type="checkbox" onChange={() => dispatch({ type: 'TOGGLE' })} />
        <StyledSpan></StyledSpan>
        <Moon />
        <Sun />
      </StyledLabel>
    </Wrapper>
  )
}
export default Header
