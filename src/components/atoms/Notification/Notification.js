import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  text-align: center;
`

export const Notification = ({ text }) => {
  return <Wrapper>{text}</Wrapper>
}
