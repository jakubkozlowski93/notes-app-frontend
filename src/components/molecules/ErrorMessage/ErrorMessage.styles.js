import styled from 'styled-components'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: 0 auto;
  width: 40%;
  padding: 10px 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
  border-left: 20px solid ${({ theme }) => theme.colors.warning};
  display: flex;
  align-items: center;
  transform: translateX(20px);
`

export const Icon = styled(DeleteButton)`
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.warning};
  border: 2px solid ${({ theme }) => theme.colors.warning};
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: auto;
  margin-right: 20px;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export const Message = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.l};
`
