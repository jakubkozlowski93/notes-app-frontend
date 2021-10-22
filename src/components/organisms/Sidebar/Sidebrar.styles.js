import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Title } from 'components/atoms/Title/Title'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.sidebar.backgroundColor};

  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  z-index: 999;

  @media ${device.medium} {
    position: static;
    transform: none;
    grid-row: 1/3;
    grid-column: 1/2;
  }
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${Title} {
    padding: 0;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    color: ${({ theme }) => theme.sidebar.titleColor};
    letter-spacing: 1px;
    margin-left: 10px;
  }
`

export const HamburgerWrapper = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  background: red;
  top: 0;
  right: -60px;
  background: ${({ theme }) => theme.sidebar.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border-bottom-right-radius: 5px;

  @media ${device.medium} {
    display: none;
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
