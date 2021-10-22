import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.large} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.extraLarge} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.twoExtraLarge} {
    grid-template-columns: repeat(4, 1fr);
  }
`
