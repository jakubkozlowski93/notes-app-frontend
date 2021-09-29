import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Input = styled.input`
  box-sizing: border-box;
  padding: 12px 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  resize: none;
  border-radius: 15px;
  height: ${({ isTextArea }) => (isTextArea ? '200px' : null)};
  width: ${({ isTextArea }) => (isTextArea ? '250px' : null)};

  @media${device.desktop} {
    width: 300px;
  }

  &:focus {
    outline: none;
    box-shadow: -1px 2px 3px rgba(115, 124, 142, 0.3);
  }
`
