import {
  SHOW_DRAWER,
  HIDE_DRAWER,
  DISABLE_DRAWER,
  ENABLE_DRAWER,
} from './actions'

export default function app(state = {
  isDrawerEnabled: true,
  isDrawerVisible: false,
}, action = {}){
  switch(action.type){
    case SHOW_DRAWER: return { ...state, isDrawerVisible: true}
    case HIDE_DRAWER: return { ...state, isDrawerVisible: false}
    case ENABLE_DRAWER: return { ...state, isDrawerEnabled: true}
    case DISABLE_DRAWER: return { ...state, isDrawerEnabled: false}
    default: return state
  }
} 
