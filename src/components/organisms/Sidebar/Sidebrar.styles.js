import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Title } from 'components/atoms/Title/Title'

export const Wrapper = styled.div`
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

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  transition-duration: 0.3s;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  display: flex;
  padding: 10px 0px;
  cursor: pointer;

  &.${'selected'} {
    border-left: 6px solid ${({ theme }) => theme.colors.success};
  }
`

export const LogoutWrapper = styled.div`
  align-items: center;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  transition-duration: 0.3s;
  position: absolute;
  bottom: 10px;
  cursor: pointer;
`
