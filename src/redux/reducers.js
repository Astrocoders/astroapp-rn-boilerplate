import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import app from './App/reducer'

export default combineReducers({
  app,
  form,
})
