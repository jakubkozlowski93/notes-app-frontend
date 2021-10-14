import React from 'react'
import { Wrapper } from 'components/templates/MainTemplate.styles'
import Header from 'components/organisms/Header/Header'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
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
