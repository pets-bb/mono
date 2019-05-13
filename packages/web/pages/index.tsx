import React, { useEffect } from 'react'
import { gql } from 'apollo-boost'
import { NextFunctionComponent } from 'next'
import styled, { css } from 'styled-components'
import { Query, Mutation } from 'react-apollo'
// import { t, plural } from '@lingui/macro'
// import '@lingui/macro'
import Index from '../components/Index'
import initApollo from '../gql'

// import { t } from '../utils/i18n'

import { useMousePosition, useI18n } from '../hooks/useI18n'

const client = initApollo()

client.writeData<{
  isLogin: boolean
}>({
  data: {
    isLogin: false,
  },
})

const H1 = styled.h1`
  color: red;
`
const X: NextFunctionComponent<{ isLogin: boolean }> = p => {
  const name = 'Fred'
  const counts = 2
  console.log(p)
  const { t, loaded } = useI18n({
    hello: 'hello1',
    hello2: 'hello2',
    hello3: 'hello3',
  })

  if (!loaded) return null

  return (
    <div>
      <Index text={'hello world'} />
      <h1>{t('hello')}</h1>
      <h1>{t('hello2')}</h1>
      <h1>{t('hello3')}</h1>

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
                    <li
                      key={book.title}
                      onClick={() => {
                        client.writeData({
                          data: {
                            isLogin: true,
                          },
                        })
                      }}
                    >
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

// X.getInitialProps = async () => {
//   const res = await client.query<{ isLogin: boolean }>({
//     query: gql`
//       {
//         isLogin @client
//       }
//     `,
//   })

//   return {
//     isLogin: res.data.isLogin,
//   }
// }
export default X
