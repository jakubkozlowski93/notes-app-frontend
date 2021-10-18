import React, { useEffect } from 'react'
import styled from 'styled-components'
import FirstNews from 'components/molecules/FirstNews/FirstNews'
import AnotherNews from 'components/molecules/AnotherNews/AnotherNews'
import axios from 'axios'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  height: 90vh;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`

const NewsFeed = () => {
  // const [news, setNews] = useState([])

  useEffect(() => {
    axios('https://inshortsapi.vercel.app/news?category=politics')
    // .then(({ data }) => setNews(data.data))
    // .then((err) => console.log(err))
  }, [])

  return (
    <Wrapper>
      {/* {news.length ? (
        news.map(({ title, content, date, imageUrl }) => <SingleNews key={title} title={title} content={content} date={date} img={imageUrl} />)
      ) : (
        <p>Is loading...</p>
      )} */}
      <FirstNews />
      <AnotherNews />
      <AnotherNews />
      <AnotherNews />
      <AnotherNews />
    </Wrapper>
  )
}

export default NewsFeed
