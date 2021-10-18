import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SingleNews from 'components/molecules/SingleNews/SingleNews'
import axios from 'axios'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

const NewsFeed = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios('https://inshortsapi.vercel.app/news?category=all')
      .then(({ data }) => setNews(data.data))
      .then((err) => console.log(err))
  }, [])

  return (
    <Wrapper>
      {news.length ? news.map(({ title, url, imageUrl }) => <SingleNews key={title} title={title} img={imageUrl} src={url} />) : <p>Is loading...</p>}
    </Wrapper>
  )
}

export default NewsFeed
