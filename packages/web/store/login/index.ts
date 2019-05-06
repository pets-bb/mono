import { createReducers } from '@pets-bb/web/utils'
import { LOGIN, LOGOUT } from './actions'

export default createReducers({
  isLogin: (s = false, action) => {
    switch (action.type) {
      case LOGIN:
        return true
      case LOGOUT:
        return false

      default:
        return s
    }
  },
})
