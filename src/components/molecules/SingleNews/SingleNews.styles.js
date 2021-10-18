import styled from 'styled-components'

export const Wrapper = styled.div`
  background: white;
  display: grid;
  grid-template-rows: 60% 1fr;
  padding: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const ImgWrapper = styled.div`
  grid-row: 1/2;
  text-align: center;
  width: 100%;
  height: 100%;

  img {
    min-width: 160px;
    width: 100%;
    height: 140px;
    object-fit: cover;
    transition: all 0.6s ease;
    position: re;

    &:hover {
      filter: blur(1px);
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
    color: ${({ theme }) => theme.colors.graphite};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`
