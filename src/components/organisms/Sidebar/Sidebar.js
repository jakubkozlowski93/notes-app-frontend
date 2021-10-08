import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'hooks/useAuth'
import { Title } from 'components/atoms/Title/Title'
import { DashboardIcon, NotesIcon, AddNoteIcon, FAQIcon, LogoutIcon } from 'components/atoms/Icons/Icons'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`
  grid-row: 1/3;
  background: #2e353f;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;

  ${Title} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0px 0px 20px 0px;
  }
`

const NavLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  transition-duration: 0.3s;

  &:hover {
    border-left: 6px solid ${({ theme }) => theme.colors.success};
    cursor: pointer;
  }
`

const Sidebar = () => {
  const auth = useAuth()
  return (
    <Wrapper>
      <Title>Notes App</Title>
      <NavLinkWrapper>
        <DashboardIcon />
        Dashboard
      </NavLinkWrapper>

      <NavLink to="/viewer">
        <NavLinkWrapper>
          <NotesIcon />
          My notes
        </NavLinkWrapper>
      </NavLink>

      <NavLink to="/form">
        <NavLinkWrapper>
          <AddNoteIcon />
          Add notes
        </NavLinkWrapper>
      </NavLink>

      <NavLinkWrapper>
        <FAQIcon />
        FAQ
      </NavLinkWrapper>

      <NavLinkWrapper onClick={auth.signOut}>
        <LogoutIcon />
        Logout
      </NavLinkWrapper>
    </Wrapper>
  )
}

export default Sidebar
