import styled from 'styled-components'

export const Label = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`
