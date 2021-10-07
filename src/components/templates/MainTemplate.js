import React from 'react'
import { Wrapper } from 'components/templates/MainTemplate.styles'
import Navigation from 'components/organisms/Navigation/Navigation'
import Sidebar from 'components/organisms/Sidebar/Sidebar'

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Sidebar />
      {children}
    </Wrapper>
  )
}

export default MainTemplate
