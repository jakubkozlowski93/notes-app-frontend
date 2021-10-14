import React from 'react'
import { Wrapper, SearchInput } from 'components/atoms/SearchBar/SearchBar.styles'
import { SearchIcon } from 'components/atoms/Icons/Icons'

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <SearchInput type="text" placeholder="Search" id="search" autoComplete="off" onFocus />
    </Wrapper>
  )
}

export default SearchBar
