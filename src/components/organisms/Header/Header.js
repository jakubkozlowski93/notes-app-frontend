import React, { useContext } from 'react'
import { Wrapper } from 'components/organisms/Header/Header.styles'
import SwitchModeButton from 'components/atoms/SwitchModeButton/SwitchModeButton'
import SearchBar from 'components/atoms/SearchBar/SearchBar'
import { AuthContext } from 'hooks/useAuth'
import styled from 'styled-components'

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  h3 {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
`

const Header = () => {
  const { login } = useContext(AuthContext)

  return (
    <Wrapper>
      <SearchBar />
      <DetailsWrapper>
        <SwitchModeButton />
        <UserInfo>
          <img alt="sss" src="https://aadimcollege.edu.np/wp-content/uploads/2020/08/default.jpg" />
          <h3>{login}</h3>
        </UserInfo>
      </DetailsWrapper>
    </Wrapper>
  )
}
export default Header
