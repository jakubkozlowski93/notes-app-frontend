import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  cursor: pointer;
  margin: 15px 0;
  transition: background-color 0.3s;
`
