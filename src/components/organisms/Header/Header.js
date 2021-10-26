import React, { useContext, useEffect, useState } from 'react'
import {
  Wrapper,
  DetailsWrapper,
  UserInfo,
  MessageIconCounter,
  NotificationsIconCounter,
  UserLogin,
  WrapperList,
  StyledLink,
} from 'components/organisms/Header/Header.styles'
import SearchBar from 'components/atoms/SearchBar/SearchBar'
import { AuthContext } from 'hooks/useAuth'
import { Message, Notifications } from 'components/atoms/Icons/Icons'
import { ArrowDown, ArrowRight } from 'components/atoms/Icons/Icons'

const Header = () => {
  const auth = useContext(AuthContext)
  const [login, setLogin] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await localStorage.getItem('login')
      setLogin(response)
    }
    fetchData()
  }, [login])

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
          <h3>{login}</h3>
          <ArrowDown />
          <WrapperList>
            <StyledLink to="/">
              <p onClick={auth.signOut}>Logout</p>
            </StyledLink>

            <ArrowRight />
          </WrapperList>
        </UserLogin>
      </DetailsWrapper>
    </Wrapper>
  )
}
export default Header
