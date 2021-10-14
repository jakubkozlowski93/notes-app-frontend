import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.header.searchWrapperColor};
  position: relative;

  &:focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.header.searchWrapperColorFocus};
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

export const SearchInput = styled.input`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  padding: 0px 0px 0px 5px;
  background: inherit;

  &:focus::placeholder {
    color: transparent;
  }
`
