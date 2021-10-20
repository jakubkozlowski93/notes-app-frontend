import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { useForm } from 'react-hook-form'
import { Wrapper, LoginWrapper, TitleWrapper, SwitchModeWrapperLogin } from './UnauthenticatedApp.styles'
import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button'
import SwitchModeButton from 'components/atoms/SwitchModeButton/SwitchModeButton'
import { Logo } from 'components/atoms/Icons/Icons'

const UnAuthenticatedApp = () => {
  const auth = useAuth()
  const { register, handleSubmit } = useForm()

  return (
    <Wrapper>
      <SwitchModeWrapperLogin>
        Switch mode
        <SwitchModeButton />
      </SwitchModeWrapperLogin>
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
