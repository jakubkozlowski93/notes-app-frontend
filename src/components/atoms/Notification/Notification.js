import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  text-align: center;
`

export const Notification = ({ text }) => {
  return <Wrapper>{text}</Wrapper>
}

Notification.propTypes = {
  text: PropTypes.string,
}
