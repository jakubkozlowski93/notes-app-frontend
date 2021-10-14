import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  margin: 0;
  background: ${({ theme }) => theme.body.bodyColor};
`
