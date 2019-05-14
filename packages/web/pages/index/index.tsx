import React, { useEffect } from 'react'
import { NextFunctionComponent } from 'next'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import { t, plural } from '@lingui/macro'
import Ind from '../../components/Index'
import initApollo, { gql } from '../../gql'

// import i18n from '../../utils/i18n'

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
const Index: NextFunctionComponent<{ isLogin: boolean }> = p => {
  const name = 'Fred'
  const counts = 2

  return (
    <div>
      <Ind text={'hello world'} />

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

Index.getInitialProps = async () => {
  const lng = 'en'
  const { default: messages } = await import(`./locale/${lng}/messages.json`)

  return { messages }
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
export default Index
