import React from 'react'
import { Wrapper } from 'components/organisms/Header/Header.styles'
import SwitchModeButton from 'components/atoms/SwitchModeButton/SwitchModeButton'
import styled from 'styled-components'
import { SearchIcon } from 'components/atoms/Icons/Icons'

const SearchWrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};
  position: relative;

  &:focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.colors.warning};
    transition: 0.4s ease;

    &::before {
      content: 'Search...';
      position: absolute;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: ${({ theme }) => theme.fontSize.s};
      top: -7px;
      left: 35px;
      font-weight: 500;
    }
  }
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  padding: 0px 0px 0px 5px;

  &:focus::placeholder {
    color: transparent;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput type="text" placeholder="Search" id="search" autoComplete="off" onFocus />
      </SearchWrapper>
      <SwitchModeButton />
    </Wrapper>
  )
}
export default Header
