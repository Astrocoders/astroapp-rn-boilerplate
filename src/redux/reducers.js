import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form'
import app from './App/reducer'

export default combineReducers({
  app,
  form,
})
