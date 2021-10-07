import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  height: 90vh;
  background: ${({ theme }) => theme.colors.lightPurple};
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-row: 2/3;

  @media${device.tablet} {
    padding: 0px;
  }

  @media${device.desktop} {
    padding: 0px 40px;
  }

  @media${device.laptop} {
    padding: 0px 50px;
  }
`
