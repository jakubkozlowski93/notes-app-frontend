import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  transition: all 0.25s linear;

  @media ${device.medium} {
    grid-template-columns: 250px 1fr;
  }
`
