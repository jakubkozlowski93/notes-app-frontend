import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  grid-row: 2/3;
  background: ${({ theme }) => theme.body.bodyColor};
  padding: 30px;
  transition: 0.3s ease-in;
  overflow-y: hidden;

  @media ${device.medium} {
    grid-column: 2/3;
  }
`
