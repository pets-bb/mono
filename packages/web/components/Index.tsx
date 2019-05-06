import React from 'react'
import styled, { css } from 'styled-components'
import { DispatchProp } from 'react-redux'
import { connect } from '../utils/reduxHelpers'
import { InitState } from '../store'
import actions from '../store/login/actions'

const Div = styled.div`
  ${(_p: {}) => css``}
`

type Props = {
  text: string
} & InitState &
  DispatchProp

const Index: React.FunctionComponent<Props> = ({ login, text, dispatch }) => {
  const handleLogin = () => {
    dispatch(actions.login())
  }

  return (
    <Div onClick={handleLogin}>
      <h1>{text}</h1>
      login: {String(login.isLogin)}
    </Div>
  )
}

export default connect(Index)
