import { createActions, act } from '@pets-bb/web/utils/reduxHelpers'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export default createActions({
  login: () => act(LOGIN),
})
