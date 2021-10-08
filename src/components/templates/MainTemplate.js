import React from 'react'
import { Wrapper } from 'components/templates/MainTemplate.styles'
import Header from 'components/organisms/Header/Header'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
import NewsFeed from 'components/organisms/NewsFeed/NewsFeed'
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      {children}
      <NewsFeed />
    </Wrapper>
  )
}

export default MainTemplate
