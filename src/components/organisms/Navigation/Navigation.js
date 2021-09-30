import React from 'react'
import { Title } from 'components/atoms/Title/Title'
import { useAuth } from 'hooks/useAuth'
import { Wrapper, ElemnentNav } from 'components/organisms/Navigation/Navigations.styles'

const Navigation = () => {
  const auth = useAuth()
  return (
    <Wrapper>
      <Title>Notes App</Title>
      <ElemnentNav onClick={auth.signOut}>Logout</ElemnentNav>
    </Wrapper>
  )
}
export default Navigation
