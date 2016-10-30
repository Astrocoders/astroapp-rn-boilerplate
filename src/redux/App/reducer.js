import {
  SHOW_DRAWER,
  HIDE_DRAWER,
} from './actions'
import { Map, fromJS } from 'immutable'

const initialState = Map({
  isDrawerVisible: false,
})
export default function app(state = {
  isDrawerVisible: false,
}, action = {}){
  switch(action.type){
    case SHOW_DRAWER: return { ...state, isDrawerVisible: true }
    case HIDE_DRAWER: return { ...state, isDrawerVisible: false }
    default: return state
  }
} 
