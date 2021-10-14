import React, { useContext } from 'react'
import { Wrapper } from 'components/organisms/Header/Header.styles'
import SearchBar from 'components/atoms/SearchBar/SearchBar'
import { AuthContext } from 'hooks/useAuth'
import styled from 'styled-components'
import { Message, Notifications } from 'components/atoms/Icons/Icons'

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
  }

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

const Header = () => {
  const { login } = useContext(AuthContext)

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
          <img alt="sss" src="https://aadimcollege.edu.np/wp-content/uploads/2020/08/default.jpg" />
          <h3>{login}</h3>
        </UserInfo>
      </DetailsWrapper>
    </Wrapper>
  )
}
export default Header
