import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2/3;
  background: ${({ theme }) => theme.body.bodyColor};
  padding: 0px;
`
