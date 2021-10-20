import styled from 'styled-components'
import { Button } from 'components/atoms/Button/Button'
import { SwitchModeWrapper } from 'components/organisms/Sidebar/Sidebrar.styles'
import { Logo } from 'components/atoms/Icons/Icons'

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
    background: ${({ theme }) => theme.login.buttonColor};
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: 1px;
    width: 100%;
    border-radius: 0;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  color: ${({ theme }) => theme.login.title};
  font-weight: 500;
  height: 70px;
  width: 100%;

  ${Logo} {
    margin-right: 10px;
  }
`

export const SwitchModeWrapperLogin = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.login.switchModeTextColor};
  font-weight: 500;
  transition-duration: 0.3s;
  cursor: pointer;
  margin-bottom: 10px;
  outline: none;
`
