import React from 'react'
import styled from 'styled-components'
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo'
import { Title } from 'components/atoms/Title/Title'
import { Button } from 'components/atoms/Button/Button'

const Wrapper = styled.div`
  background: white;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px 20px 0px 20px;
`

const TitleWprapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleNews = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 450;
  margin: 0;
  padding: 0 0 15px 0;
`

const DateInfo = styled(StatusInfo)`
  margin: 0;
  padding: 0;
  text-align: center;
  display: block;
  width: 30%;
  font-size: ${({ theme }) => theme.fontSize.s};
`

const ContentWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  text-align: justify;
  line-height: 20px;

  img {
    margin-left: 30px;
    width: 160px;
    height: 140px;
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  ${Button} {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 5px 10px;
  }
`

const SingleNews = ({ title, content, date, img }) => {
  return (
    <Wrapper>
      <TitleWprapper>
        <TitleNews>{title}</TitleNews>
      </TitleWprapper>
      <ContentWrapper>
        {content}
        <img alt="ss" src={img} />
      </ContentWrapper>
      <DetailsWrapper>
        <Button>More</Button>
        <DateInfo>{date}</DateInfo>
      </DetailsWrapper>
    </Wrapper>
  )
}

export default SingleNews
