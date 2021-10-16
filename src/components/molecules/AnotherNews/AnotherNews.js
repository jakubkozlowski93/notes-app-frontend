import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: white;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ImgWrapper = styled.div`
  grid-row: 1/2;
  text-align: center;
  width: 100%;
  height: 100%;

  figure {
    padding: 0;
    margin: 0;
    grid-column: 1/2;
    position: relative;
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.6s ease;
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

const ContentWrapper = styled.div``

const AnotherNews = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <figure>
          <img alt="alt" src="https://source.unsplash.com/user/erondu/" />
          <figcaption>CATEGORY</figcaption>
        </figure>
      </ImgWrapper>
      <ContentWrapper>"Warto spytać siebie: jaki wpływ na życie mojego dziecka będzie miała trójka z kartkówki"</ContentWrapper>
    </Wrapper>
  )
}

export default AnotherNews
