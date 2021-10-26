import styled from 'styled-components'
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.errorMessage.background};
  border-left: 20px solid ${({ theme }) => theme.colors.warning};
  display: flex;
  align-items: center;
  transform: translateX(20px);

  @media ${device.large} {
    width: 60%;
  }
`

export const Icon = styled(DeleteButton)`
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.errorMessage.background};
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
