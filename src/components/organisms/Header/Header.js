import React, { useState } from 'react'
import { Wrapper } from 'components/organisms/Header/Header.styles'
import { useDispatch, useSelector } from 'react-redux'
import { add, subtract } from 'redux/store'

const Header = ({}) => {
  const dispatch = useDispatch()
  const score = useSelector((state) => state)

  return (
    <Wrapper>
      <button onClick={() => dispatch({ type: 'ADD' })}>ADD</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT' })}>SUBTRACT</button>
      {score}
    </Wrapper>
  )
}
export default Header
