import React, { useContext, useState } from 'react'
import { Title } from 'components/atoms/Title/Title'
import { NotesIcon, AddNoteIcon, News, HamburgerIcon, Close, Logo } from 'components/atoms/Icons/Icons'
import {
  Wrapper,
  NavigationWrapper,
  LogoWrapper,
  StyledLink,
  SwitchModeWrapper,
  HamburgerWrapper,
} from 'components/organisms/Sidebar/Sidebrar.styles'
import { NotesContext } from 'providers/NotesProviders'
import SwitchModeButton from 'components/atoms/SwitchModeButton/SwitchModeButton'

const Sidebar = () => {
  const { notes } = useContext(NotesContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  return (
    <Wrapper isOpen={isOpen} isDark={isDark}>
      <LogoWrapper>
        <Logo />
        <Title>notepad</Title>
        <HamburgerWrapper
          onClick={() => {
            setIsOpen(!isOpen)
            setIsDark(!isDark)
          }}
        >
          {!isOpen ? <HamburgerIcon /> : <Close />}
        </HamburgerWrapper>
      </LogoWrapper>

      <NavigationWrapper>
        <StyledLink to="/viewer" activeClassName="selected">
          <NotesIcon />
          My notes
          <span>{notes.length}</span>
        </StyledLink>

        <StyledLink to="/form" activeClassName="selected">
          <AddNoteIcon />
          Add new
        </StyledLink>

        <StyledLink to="/news" activeClassName="selected">
          <News />
          News Feed
        </StyledLink>
      </NavigationWrapper>

      <SwitchModeWrapper>
        Switch mode
        <SwitchModeButton />
      </SwitchModeWrapper>
    </Wrapper>
  )
}

export default Sidebar
