import React from 'react'
import { Provider } from 'react-redux'
import App, { Container, NextAppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Store } from 'redux'
import makeStore from '../store'

class MyApp extends App<{ store: Store }> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
