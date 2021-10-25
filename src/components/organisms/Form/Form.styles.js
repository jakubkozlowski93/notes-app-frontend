import styled from 'styled-components'
import { Button } from 'components/atoms/Button/Button'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  /* height: 100%; */

  @media ${device.large} {
    width: 80%;
  }

  @media ${device.extraLarge} {
    width: 60%;
  }

  ${Button} {
    width: 100%;
    border-radius: 2px;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 10px;

  label {
    margin-right: 5px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  input {
    cursor: pointer;
  }

  input:checked {
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const RadioLabel = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
`
