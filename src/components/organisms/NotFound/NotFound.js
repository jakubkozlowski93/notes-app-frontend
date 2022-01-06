import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.notFound.color};
`

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>Page not found</h2>
    </Wrapper>
  )
}

export default NotFound
