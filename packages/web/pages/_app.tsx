import NextApp, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import withApollo from '../gql/witApollo'

class App extends NextApp {
  render() {
    const { Component, pageProps, apolloClient } = this.props

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
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(App)
