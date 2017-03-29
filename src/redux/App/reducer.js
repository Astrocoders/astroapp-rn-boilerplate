import { Map } from 'immutable'
import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  DISABLE_DRAWER,
  ENABLE_DRAWER,
} from './actions'

const initialState = Map({
  isDrawerEnabled: true,
  isDrawerVisible: false,
})
export default function app(state = initialState, action = {}){
  switch(action.type){
    case SHOW_DRAWER: return state.set('isDrawerVisible', true)
    case HIDE_DRAWER: return state.set('isDrawerVisible', false)
    case ENABLE_DRAWER: return state.set('isDrawerEnabled', true)
    case DISABLE_DRAWER: return state.set('isDrawerEnabled', false)
    default: return state
  }
} 
