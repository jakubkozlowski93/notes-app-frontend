import styled from 'styled-components'

export const StatusInfo = styled.div`
  text-align: right;
  margin: 0;
  padding: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
`
