import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  ${Title} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
