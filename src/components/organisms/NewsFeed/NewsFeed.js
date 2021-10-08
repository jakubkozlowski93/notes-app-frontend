import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SingleNews from 'components/molecules/SingleNews/SingleNews'
import { Title } from 'components/atoms/Title/Title'
import axios from 'axios'

const Wrapper = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  height: 80%;
  margin: 40px;
  background: ${({ theme }) => theme.colors.ligthPurple};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

const NewsFeed = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios('https://inshortsapi.vercel.app/news?category=politics')
      .then(({ data }) => setNews(data.data))
      .then((err) => console.err)
  }, [])

  return (
    <Wrapper>
      <Title>News feed</Title>

      {news.map(({ title, content, date, imageUrl }) => (
        <SingleNews key={title} title={title} content={content} date={date} img={imageUrl} />
      ))}
    </Wrapper>
  )
}

export default NewsFeed
