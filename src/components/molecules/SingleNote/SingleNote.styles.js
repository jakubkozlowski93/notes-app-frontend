import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'
import { Button } from 'components/atoms/Button/Button'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  width: 100%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0px 5px 0px px;
  margin-bottom: 20px;
`

export const NotesTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 10px 30px 0px 30px;
  margin: 5px 0;
`

export const TitleWprapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 10px;
  padding: 10px 30px;
  text-align: justify;

  ${Button} {
    padding: 5px 15px;
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 20px 0px 0px 0px;
    font-weight: 500 bolder;
  }
`
