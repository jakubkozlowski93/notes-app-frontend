import React, { useEffect, useState } from 'react'
import { Wrapper } from 'components/organisms/NewsFeed/NewsFeed.styles'
import SingleNews from 'components/molecules/SingleNews/SingleNews'
import { Loader } from 'components/atoms/Loader/Loader'
import axios from 'axios'

const NewsFeed = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios('https://inshortsapi.vercel.app/news?category=all')
      .then(({ data }) => setNews(data.data))
      .then((err) => console.log(err))
  }, [])

  return news.length ? (
    <Wrapper>
      {news.map(({ title, url, imageUrl }) => (
        <SingleNews key={title} title={title} img={imageUrl} src={url} />
      ))}
    </Wrapper>
  ) : (
    <Loader />
  )
}

export default NewsFeed
