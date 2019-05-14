import React from 'react'
import { getDataFromTree } from 'react-apollo'
import { NextStaticLifecycle } from 'next'
import Head from 'next/head'
import NextApp, { NextAppContext } from 'next/app'
import { isNode } from '@pets-bb/share'

import initApollo, { CreateApolloClient } from '.'

const withApollo = (App: any) => {
  return class Apollo extends React.Component {
    private apolloClient: CreateApolloClient

    static displayName = 'withApollo(App)'

    static async getInitialProps(ctx: NextAppContext) {
      const { Component, router } = ctx

      const appProps = App.getInitialProps ? await App.getInitialProps(ctx) : {}

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo()
      if (isNode) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
          )
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error)
        } finally {
          Head.rewind()
        }
      }

      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props: any) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}

export default withApollo
