import styled from 'styled-components'
import { Button } from 'components/atoms/Button/Button'
import { SwitchModeWrapper } from 'components/organisms/Sidebar/Sidebrar.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in;
  height: 100vh;
  background: ${({ theme }) => theme.login.bodyColor};

  ${SwitchModeWrapper} {
    color: ${({ theme }) => theme.login.title};
  }
`

export const LoginWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.login.formColor};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.login.boxShadow};
  border-bottom: 1px solid ${({ theme }) => theme.header.borderBottom};
  transition: 0.3s ease-in;
  margin-bottom: 20px;

  ${Button} {
    color: #f1f1f1;
    background: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: 1px;
    width: 100%;
    border-radius: 0;
  }
`
