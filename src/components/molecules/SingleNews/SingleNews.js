import React from 'react'
import { Wrapper, ImgWrapper, ContentWrapper } from 'components/molecules/SingleNews/SingleNews.styles'

const SingleNews = ({ title, img, src }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img alt={title} src={img} />
      </ImgWrapper>
      <ContentWrapper>
        <a href={src} target="_blank" rel="noreferrer">
          {title}
        </a>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SingleNews
