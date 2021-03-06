import { t } from '@lingui/macro'
import Ind from '@pets-bb/web/components/Index'
import { gql } from '@pets-bb/web/gql'
import { useGlobal } from '@pets-bb/web/hooks'
import { NextFunctionComponent } from 'next'
import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'

const H1 = styled.h1`
  color: red;
`

type Props = {}

const Index: NextFunctionComponent<Props> = () => {
  const name = 'Fred'

  const { i18n } = useGlobal()

  return (
    <div>
      <Ind text={'hello world'} />
      <h2>{i18n._(t`Hello1 ${name}`)}</h2>
    </div>
  )
}

export default Index
