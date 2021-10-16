import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Title } from 'components/atoms/Title/Title'

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
  background: ${({ theme }) => theme.sidebar.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  box-shadow: 20px 0px 20px -7px rgb(160 44 219 / 7%);
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;

  ${Title} {
    padding: 0;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    color: ${({ theme }) => theme.sidebar.titleColor};
    letter-spacing: 1px;
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
  margin-top: 20px;
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.sidebar.textColor};
  display: block;
  display: flex;
  padding: 10px 15px;
  cursor: pointer;
  position: relative;

  &.${'selected'} {
    border-left: 6px solid ${({ theme }) => theme.sidebar.successColor};
    background: ${({ theme }) => theme.sidebar.activeHoverColor};
  }

  &:hover {
    background: ${({ theme }) => theme.sidebar.activeHoverColor};
    transition-duration: 0.3s;
  }

  span {
    margin: 0;
    background: ${({ theme }) => theme.sidebar.warningColor};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.m};
    position: absolute;
    right: 10px;
  }
`

export const SwitchModeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.sidebar.textColor};
  font-weight: 500;
  transition-duration: 0.3s;
  position: absolute;
  bottom: 10px;
  cursor: pointer;
`
