import React from 'react'
import styled, { css } from 'styled-components'
import { Query, QueryResult } from 'react-apollo'
import { gql } from 'apollo-boost'
import { NextStaticLifecycle } from 'next'

const Div = styled.div`
  ${(_p: {}) => css``}
`

type Props = {
  text: string
}

const Index: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <Div>
      <h1>{text}</h1>
    </Div>
  )
}

export default Index
