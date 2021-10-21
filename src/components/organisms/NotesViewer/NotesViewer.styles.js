import styled from 'styled-components'
import { Title } from 'components/atoms/Title/Title'
import { StatusInfo } from 'components/atoms/StatusInfo/StatusInfo'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`
