import styled from 'styled-components'
import { device } from 'asets/breakpoints'

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.header.searchBorderColor};
  padding: 0 5px;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 20px;
  background: ${({ theme }) => theme.header.searchBodyColor};
  transition: 0.3s ease-in;
  display: none;
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.header.searchInputColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  padding: 0px 0px 0px 5px;
  font-family: inherit;
  padding: 0px 10px;
  background: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.header.searchInputColor};
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`
