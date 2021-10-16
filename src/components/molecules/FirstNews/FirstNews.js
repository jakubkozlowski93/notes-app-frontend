import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/atoms/Button/Button'

const Wrapper = styled.div`
  background: white;
  grid-row: 1/2;
  grid-column: 1/3;
  display: grid;
  padding: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  grid-template-columns: 1fr 1fr;
`
const ImgWrapper = styled.div`
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  flex-shrink: 1;

  figure {
    padding: 0;
    margin: 0;
    grid-column: 1/2;
    position: relative;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.6s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  figcaption {
    position: absolute;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: bolder;
    text-align: center;
    left: 0;
    right: 0;
    top: 45%;
    opacity: 0;
    transition: all 0.6s ease;
  }

  img:hover ~ figcaption {
    opacity: 1;
  }

  img:hover {
    filter: blur(1px);
  }
`

const ContentWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  grid-column: 2/3;
  flex-shrink: 1;

  span.breaking {
    font-size: ${({ theme }) => theme.fontSize.s};
    background: yellow;
    padding: 2px 4px;
    font-weight: 600;
    margin-right: 10px;
  }

  span.category {
    font-size: ${({ theme }) => theme.fontSize.s};
    background: red;
    padding: 2px 4px;
    font-weight: 600;
    color: white;
  }

  span.more {
    font-size: ${({ theme }) => theme.fontSize.s};
    background: ${({ theme }) => theme.colors.lightPurple};
    padding: 2px 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: normal;
  }

  ${Button} {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 10px 9px;
    border-radius: 2px;
  }
`

const TitleNews = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.graphite};
`

const SpanWrapper = styled.div``

const FirstNews = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <figure>
          <img alt="alt" src="https://source.unsplash.com/user/erondu/" />
          <figcaption>CATEGORY</figcaption>
        </figure>
      </ImgWrapper>
      <ContentWrapper>
        <SpanWrapper>
          <span className="breaking">BREAKING</span>
          <span className="category">POLITICS</span>
          {/* <span className="more"> Read more</span> */}
        </SpanWrapper>
        <TitleNews>Na plan przychodził "pod wpływem". Gdy umarł, jego ukochana wyskoczyła z okna</TitleNews>
        {/* <Button>Read more</Button> */}
      </ContentWrapper>
    </Wrapper>
  )
}

export default FirstNews
