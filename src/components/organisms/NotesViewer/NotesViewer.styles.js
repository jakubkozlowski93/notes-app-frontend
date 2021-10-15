import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo'

export const Wrapper = styled.div`
  border-radius: 15px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;
  }

  ${StatusInfo} {
    text-align: left;
    padding: 0px 15px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  ${Title} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
