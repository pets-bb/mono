import NextApp, { Container, NextAppContext } from 'next/app'
import React from 'react'
import { ApolloProvider, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
// import i18next from 'i18next'
import { isBrowser } from '@pets-bb/share'
import withApollo from '../gql/witApollo'

class App extends NextApp<{ i18nMessages: { [key: string]: string } }> {
  // static async getInitialProps(_ctx: NextAppContext) {
  //   const i18Instance = i18next.createInstance()

  //   i18Instance.init({
  //     lng: 'zh',
  //     load: 'languageOnly',
  //     debug: true,
  //     interpolation: {
  //       prefix: '{',
  //       suffix: '}',
  //     },
  //     resources: {
  //       zh: {
  //         translation: {
  //           hello: 'world',
  //         },
  //       },
  //     },
  //   })

  //   return {
  //     messages: {
  //       hello: 'world',
  //     },

  //     pageProps: {},
  //   }
  // }

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
          <Component {...pageProps} t={() => ''} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(App)
