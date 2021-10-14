import styled from 'styled-components'
import { FaSun, FaMoon } from 'react-icons/fa'

export const Sun = styled(FaSun)`
  color: orange;
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const Moon = styled(FaMoon)`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const StyledLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.header.switchColor};
  border-radius: 20px;
  padding: 0px 5px;
  margin-left: 10px;
`

export const StyledSpan = styled.span`
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

export const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledSpan} {
    transform: translateX(30px);
  }
`
