import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  box-shadow: 0 10px 20px -7px rgb(160 44 219 / 7%);
  border-bottom: 1px solid ${({ theme }) => theme.header.borderBottom};
  background: ${({ theme }) => theme.header.background};
  /* background-image: ${({ theme }) => theme.header.gradient}; */
  opacity: 0.9;
`
