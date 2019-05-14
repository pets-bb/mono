import React from 'react'
import { I18n, setupI18n } from '@lingui/core'

export const GlobalContext = React.createContext<{
  i18n: I18n
}>({
  i18n: setupI18n(),
})

export default GlobalContext
