import NextApp, { Container, NextAppContext } from 'next/app'
import React from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { setupI18n } from '@lingui/core'
import withApollo from '../gql/witApollo'
import { withI18n, WithI18n } from '../utils/i18n'
import GlobalContext from '../utils/GlobalContext'
import { CreateApolloClient } from '../gql'

class App extends NextApp<{ apolloClient: CreateApolloClient } & WithI18n> {
  static contextType = GlobalContext

  render() {
    const { Component, pageProps, apolloClient, i18n } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Query<{}>
            query={gql`
              {
                isLogin @client
                isLogin2 @client
                isLogin3 @client
                isLogin4 @client
              }
            `}
          >
            {({ data }) => {
              console.log(data)
              return null
            }}
          </Query>

          <GlobalContext.Provider
            value={{
              ...this.context,
              i18n,
            }}
          >
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(withI18n(App))
