// @flow
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import account from './account'

const rootReducer = combineReducers({
  account,
  router
})

export default rootReducer
