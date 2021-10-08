import React from 'react'
import { useAuth } from 'hooks/useAuth'
import { Title } from 'components/atoms/Title/Title'
import { DashboardIcon, NotesIcon, AddNoteIcon, FAQIcon, LogoutIcon } from 'components/atoms/Icons/Icons'
import { Wrapper, NavigationWrapper, StyledLink, LogoutWrapper } from 'components/organisms/Sidebar/Sidebrar.styles'

const Sidebar = () => {
  const auth = useAuth()
  return (
    <Wrapper>
      <Title>Notes App</Title>
      <NavigationWrapper>
        <StyledLink to="/dashboard" activeClassName="selected">
          <DashboardIcon />
          Dashboard
        </StyledLink>

        <StyledLink to="/viewer" activeClassName="selected">
          <NotesIcon />
          My notes
        </StyledLink>

        <StyledLink to="/form" activeClassName="selected">
          <AddNoteIcon />
          Add new
        </StyledLink>

        <StyledLink to="/faq" activeClassName="selected">
          <FAQIcon />
          FAQ
        </StyledLink>
      </NavigationWrapper>

      <LogoutWrapper onClick={auth.signOut}>
        <LogoutIcon />
        Logout
      </LogoutWrapper>
    </Wrapper>
  )
}

export default Sidebar
