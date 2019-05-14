import React, { useEffect, useContext } from 'react'
import { NextFunctionComponent } from 'next'
import Link from 'next/link'
import { isBrowser } from '@pets-bb/share'
import styled, { css } from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import { t } from '@lingui/macro'

import Ind from '../../components/Index'
import initApollo, { gql } from '../../gql'
import { withI18n, WithI18n } from '../../utils/i18n'
import GlobalContext from '../../utils/GlobalContext'

const H1 = styled.h1`
  color: red;
`

type Props = {} & WithI18n

const Index: NextFunctionComponent<Props> = () => {
  const name = 'Fred'
  const { i18n } = useContext(GlobalContext)

  return (
    <div>
      <Ind text={'hello world'} />
      <h2>{i18n._(t`Hello1 ${name}`)}</h2>

      <Query<{
        books: {
          title: string
          author: string
        }[]
      }>
        query={gql`
          query Books {
            books {
              title
              author
            }
          }
        `}
      >
        {({ loading, data }) => {
          return (
            <>
              {loading ? 'Loading...' : ''}
              <ul>
                {!loading &&
                  data!.books.map(book => (
                    <li key={book.title}>
                      {book.title} - {book.author}
                    </li>
                  ))}
              </ul>
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default Index
