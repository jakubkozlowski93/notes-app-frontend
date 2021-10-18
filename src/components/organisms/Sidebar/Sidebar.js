import React, { useContext, useState } from 'react'
import { Title } from 'components/atoms/Title/Title'
import { NotesIcon, AddNoteIcon, FAQIcon, News } from 'components/atoms/Icons/Icons'
import { Wrapper, NavigationWrapper, LogoWrapper, StyledLink, SwitchModeWrapper } from 'components/organisms/Sidebar/Sidebrar.styles'
import { Logo } from 'components/atoms/Icons/Icons'
import { NotesContext } from 'providers/NotesProviders'
import SwitchModeButton from 'components/atoms/SwitchModeButton/SwitchModeButton'

const Sidebar = () => {
  const { notes } = useContext(NotesContext)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Wrapper isOpen={isOpen}>
      <LogoWrapper>
        <Logo />
        <Title>notepad</Title>
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

        <StyledLink to="/faq" activeClassName="selected">
          <FAQIcon />
          FAQ
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
