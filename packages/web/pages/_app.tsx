import NextApp, { Container, NextAppContext } from 'next/app'
import React from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import withApollo from '../gql/witApollo'
import { withI18n, WithI18n } from '../utils/i18n'
import GlobalContext from '../utils/GlobalContext'

import { CreateApolloClient } from '../gql'

class App extends NextApp<{ apolloClient: CreateApolloClient } & WithI18n> {
  render() {
    const { Component, pageProps, apolloClient, i18n } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Query<{
            isLogin: boolean
          }>
            query={gql`
              {
                isLogin @client
              }
            `}
          >
            {({ data }) => {
              return <pre>{JSON.stringify(data)}</pre>
            }}
          </Query>
          <div>Debug</div>
          <GlobalContext.Provider value={{ i18n }}>
            <Component {...pageProps} i18n={i18n} />
          </GlobalContext.Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(withI18n(App))
