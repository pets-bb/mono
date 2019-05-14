import React from 'react'
import { I18n, setupI18n } from '@lingui/core'
import initApolloClient, { CreateApolloClient } from '../gql'

const apollo = initApolloClient()

apollo.writeData({
  data: {
    isLogin: true,
    isLogin1: true,
    isLogin2: true,
    isLogin3: true,
    isLogin4: true,
  },
})

export const GlobalContext = React.createContext<{
  i18n: I18n
  apollo: CreateApolloClient
}>({
  i18n: setupI18n(),
  apollo,
})

export default GlobalContext
