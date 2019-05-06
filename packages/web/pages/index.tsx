import React from 'react'
import styled, { css } from 'styled-components'

const Div = styled.div`
  ${(_p: {}) => css`
    color: blue;
  `}
`

type Props = {}

const App: React.FunctionComponent<Props> = _props => {
  return <Div>Hello Pets BB!</Div>
}

export default App
