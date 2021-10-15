import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SingleNews from 'components/molecules/SingleNews/SingleNews'
import { Title } from 'components/atoms/Title/Title'
import axios from 'axios'

const Wrapper = styled.div`
  overflow-y: scroll;
  background: ${({ theme }) => theme.body.bodyColor};

  ::-webkit-scrollbar {
    display: none;
  }
`

const NewsFeed = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios('https://inshortsapi.vercel.app/news?category=politics')
      .then(({ data }) => setNews(data.data))
      .then((err) => console.log(err))
  }, [])

  return (
    <Wrapper>
      {news.length ? (
        news.map(({ title, content, date, imageUrl }) => <SingleNews key={title} title={title} content={content} date={date} img={imageUrl} />)
      ) : (
        <p>Is loading...</p>
      )}
    </Wrapper>
  )
}

export default NewsFeed
