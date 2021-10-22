import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bolder;
  margin: 0;
  padding: 15px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
`
