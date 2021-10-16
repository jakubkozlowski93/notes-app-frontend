import React, { useContext } from 'react'
import { Wrapper } from 'components/organisms/Header/Header.styles'
import SearchBar from 'components/atoms/SearchBar/SearchBar'
import { AuthContext } from 'hooks/useAuth'
import styled from 'styled-components'
import { Message, Notifications } from 'components/atoms/Icons/Icons'
import { ArrowDown, ArrowRight } from 'components/atoms/Icons/Icons'

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  height: 100%;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

const MessageIconCounter = styled.span`
  position: relative;

  &::before {
    position: absolute;
    content: '3';
    background: green;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    top: -10px;
    right: -3px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`

const NotificationsIconCounter = styled.span`
  position: relative;
  &::before {
    position: absolute;
    content: '5';
    background: fuchsia;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    top: -10px;
    right: 3px;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`

const UserLogin = styled.div`
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
    margin: 0 10px 0 30px;
  }

  h3 {
    color: darkGrey;
  }
`

const WrapperList = styled.div`
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
  font-weight: 500;
  cursor: pointer;
  color: darkGrey;
  border-radius: 2px;

  ${UserLogin}:hover & {
    visibility: visible;
  }
`

const Header = () => {
  const auth = useContext(AuthContext)

  return (
    <Wrapper>
      <SearchBar />

      <DetailsWrapper>
        <UserInfo>
          <MessageIconCounter>
            <Message />
          </MessageIconCounter>
          <NotificationsIconCounter>
            <Notifications />
          </NotificationsIconCounter>
        </UserInfo>
        <UserLogin>
          <img alt="sss" src="https://aadimcollege.edu.np/wp-content/uploads/2020/08/default.jpg" />
          <h3>{auth.login}</h3>
          <ArrowDown />
          <WrapperList>
            <p onClick={auth.signOut}>Logout</p>
            <ArrowRight />
          </WrapperList>
        </UserLogin>
      </DetailsWrapper>
    </Wrapper>
  )
}
export default Header
