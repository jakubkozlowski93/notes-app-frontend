import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-row: 2/3;
  /* border-right: 3px solid ${({ theme }) => theme.colors.black}; */
  background: #536c7c;
`

const Sidebar = () => {
  return <Wrapper>Sidebar</Wrapper>
}

export default Sidebar
