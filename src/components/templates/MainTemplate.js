import React from 'react'
import { Wrapper } from 'components/templates/MainTemplate.styles'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
import Header from 'components/organisms/Header/Header'

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      {children}
    </Wrapper>
  )
}

export default MainTemplate
