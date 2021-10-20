import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Wrapper, LoginWrapper } from './UnauthenticatedApp.styles'
import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button'
import styled from 'styled-components'
import SwitchModeButton from 'components/atoms/SwitchModeButton/SwitchModeButton'
import { SwitchModeWrapper } from 'components/organisms/Sidebar/Sidebrar.styles'
import { Logo } from 'components/atoms/Icons/Icons'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  color: ${({ theme }) => theme.login.title};
  font-weight: 500;
  height: 70px;
`

const UnAuthenticatedApp = () => {
  const auth = useAuth()
  const { register, handleSubmit } = useForm()

  return (
    <Wrapper>
      <LoginWrapper as="form" onSubmit={handleSubmit(auth.signIn)}>
        <TitleWrapper>
          <Logo />
          Notepad
        </TitleWrapper>
        <FormField required type="text" id="login" name="login" label="Login" {...register('login')} />
        <FormField required type="password" id="password" name="password" label="Password" {...register('password')} />

        <Button type="submit">Sign in</Button>
      </LoginWrapper>
    </Wrapper>
  )
}

export default UnAuthenticatedApp
