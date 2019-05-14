import React, { useContext } from 'react'
import GlobalContext from '@pets-bb/web/utils/GlobalContext'

export const useGlobal = () => useContext(GlobalContext)
