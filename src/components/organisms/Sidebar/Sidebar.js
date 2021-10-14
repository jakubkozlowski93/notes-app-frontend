import React, { useContext } from 'react'
import { useAuth } from 'hooks/useAuth'
import { Title } from 'components/atoms/Title/Title'
import { DashboardIcon, NotesIcon, AddNoteIcon, FAQIcon, LogoutIcon } from 'components/atoms/Icons/Icons'
import { Wrapper, NavigationWrapper, LogoWrapper, StyledLink, LogoutWrapper } from 'components/organisms/Sidebar/Sidebrar.styles'
import { Logo } from 'components/atoms/Icons/Icons'
import { NotesContext } from 'providers/NotesProviders'

const Sidebar = () => {
  const auth = useAuth()
  const { notes } = useContext(NotesContext)

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
        <Title>notepad</Title>
      </LogoWrapper>

      <NavigationWrapper>
        <StyledLink to="/dashboard" activeClassName="selected">
          <DashboardIcon />
          Dashboard
        </StyledLink>

        <StyledLink to="/viewer" activeClassName="selected">
          <NotesIcon />
          My notes
          <span>{notes.length}</span>
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
