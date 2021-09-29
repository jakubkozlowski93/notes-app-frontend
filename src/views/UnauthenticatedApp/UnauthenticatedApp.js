import React from 'react'
import { useAuth } from 'providers/useAuth'
import { useForm } from 'react-hook-form'
import { Wrapper, LoginWrapper } from './UnauthenticatedApp.styles'
import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button'

const UnAuthenticatedApp = () => {
  const auth = useAuth()
  const { register, handleSubmit } = useForm()

  return (
    <Wrapper>
      <LoginWrapper as="form" onSubmit={handleSubmit(auth.signIn)}>
        <FormField required type="text" id="login" name="login" label="Login" {...register('login')} />
        <FormField required type="password" id="password" name="password" label="Password" {...register('password')} />
        <Button type="submit">Sign in</Button>
      </LoginWrapper>
    </Wrapper>
  )
}

export default UnAuthenticatedApp
