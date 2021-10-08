import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.ligthPurple};
  border-radius: 15px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2); */
  overflow-y: scroll;
  height: 80%;

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
