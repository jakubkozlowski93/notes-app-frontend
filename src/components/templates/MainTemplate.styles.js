import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 70px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 100vh;
  overflow-y: hidden;
`
