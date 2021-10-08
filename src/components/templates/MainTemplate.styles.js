import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 250px 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.grey};
  height: 100vh;
  overflow-y: hidden;
`
