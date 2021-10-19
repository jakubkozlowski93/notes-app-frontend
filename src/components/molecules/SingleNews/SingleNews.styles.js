import styled from 'styled-components'

export const Wrapper = styled.div`
  background: white;
  display: grid;
  grid-template-rows: 60% 1fr;
  padding: 5px;
  box-shadow: ${({ theme }) => theme.news.boxShadow};
  background: ${({ theme }) => theme.news.background};
  transition: 0.3s ease-in;
`

export const ImgWrapper = styled.div`
  grid-row: 1/2;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    min-width: 160px;
    width: 100%;
    height: 140px;
    object-fit: cover;
    transition: all 0.9s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.news.textColor};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`
