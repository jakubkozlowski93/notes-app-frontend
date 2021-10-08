import styled from 'styled-components'
import { device } from 'asets/breakpoints'
import { Input } from 'components/atoms/Input/Input'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  /* @media${device.desktop} {
    margin: 10px 0;
  } */

  ${Input} {
    margin: 12px 0;
  }
`
