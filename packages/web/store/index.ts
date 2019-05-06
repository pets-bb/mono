import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { isDev } from '@pets-bb/share'

import rootReducer from './rootReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose // eslint-disable-line no-undef
  }
}

const logger: Middleware = ({ getState }) => {
  console.log('[redux-logger] @@INIT', getState())
  return next => action => {
    const returnValue = next(action)
    console.log('[redux-logger]', action, '→', getState())

    return returnValue
  }
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const middleware: Middleware[] = []

if (isDev) {
  middleware.push(logger)
}

export default (initState = {}) => {
  return createStore(
    rootReducer,
    initState,
    composeEnhancers(applyMiddleware(...middleware)),
  )
}

export type InitState = {
  login: {
    isLogin: boolean
  }
}
