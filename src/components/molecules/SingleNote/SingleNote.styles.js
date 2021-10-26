import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.notes.bodyColor};
  width: 100%;
  box-shadow: ${({ theme }) => theme.notes.boxShadow};
  color: ${({ theme }) => theme.notes.textColor};
  padding: 0px 5px 0px 0px;
  margin-bottom: 20px;
  transition: 0.3s ease-in;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 0;

  ${DeleteButton} {
    display: none;
  }
`

export const TitleWprapper = styled.div`
  display: flex;
  align-items: center;
`

export const NotesTitle = styled(Title)`
  padding: 10px 30px 0px 30px;
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.notes.textColor};
`

export const Category = styled.span`
  color: #ffffff;
  padding: 3px;
  margin-right: 10px;
  border-radius: 5px;
  background: ${({ theme, value }) => {
    if (value === 'Home') return 'green'
    if (value === 'School') return 'red'
    if (value === 'Work') return 'blue'
    return theme.colors.grey
  }};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: normal;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 10px;
  padding: 10px 30px;
  text-align: justify;
`
