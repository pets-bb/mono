import React from 'react'
import styled, { css } from 'styled-components'
import { t } from '@lingui/macro'
import { NextFunctionComponent } from 'next'
// import i18n from '../../utils/i18n'

const Div = styled.div`
  ${(_p: {}) => css`
    color: red;
  `}
`

type Props = {}

const Users: NextFunctionComponent<Props> = _props => {
  console.log(_props)
  return <Div>This is Users page.</Div>
}

Users.getInitialProps = async () => {
  console.log('log Users')

  return {
    x: 1,
    y: 2,
  }
}

export default Users
