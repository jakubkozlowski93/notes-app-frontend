import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  height: 95vh;
  align-items: center;
  padding: 0px 30px;
  margin: 0;
  border-right: 10px solid ${({ theme }) => theme.colors.lightGrey};
`
