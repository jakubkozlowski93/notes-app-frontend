import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09); */
  padding: 0px 50px;
  box-shadow: 0 10px 20px -7px rgb(160 44 219 / 7%);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};
`
