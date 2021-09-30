import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Icon, Title, Message } from 'components/molecules/ErrorMessage/ErrorMessage.styles'

const ErrorMessage = ({ message }) => {
  return (
    <Wrapper>
      <Icon />
      <div>
        <Title>Error</Title>
        <Message>{message}</Message>
      </div>
    </Wrapper>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage
