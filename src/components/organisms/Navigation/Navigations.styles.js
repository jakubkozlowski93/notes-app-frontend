import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'

export const Wrapper = styled.div`
  background: red;
  width: 100%;
  grid-row: 1/2;
  grid-column: 1/3;
  background: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  justify-content: space-between;

  ${Title} {
    color: ${({ theme }) => theme.colors.white};
    margin: 0px 20px;
  }
`

export const ElemnentNav = styled.h1`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xl};
  cursor: pointer;
  margin-right: 30px;
`
