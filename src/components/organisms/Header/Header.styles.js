import styled from 'styled-components'
import { device } from 'asets/breakpoints'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  grid-row: 1/2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 30px;
  box-shadow: 0 10px 20px -7px rgb(160 44 219 / 7%);
  border-bottom: 1px solid ${({ theme }) => theme.header.borderBottom};
  background: ${({ theme }) => theme.header.background};
  transition: 0.3s ease-in;

  @media ${device.medium} {
    grid-column: 2/3;
  }

  @media ${device.large} {
    justify-content: space-between;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const MessageIconCounter = styled.span`
  position: relative;
`

export const NotificationsIconCounter = styled.span`
  position: relative;
`
export const UserLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 10px 0 20px;
  }

  h3 {
    color: darkGrey;
  }
`
export const WrapperList = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  right: 0;
  top: 59px;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  background: ${({ theme }) => theme.header.background};
  border: 1px solid ${({ theme }) => theme.header.borderBottom};
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: darkGrey;
  border-radius: 2px;
  z-index: 999;
  padding: 5px;

  ${UserLogin}:hover & {
    visibility: visible;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
`
