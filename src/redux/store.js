import { applyMiddleware, compose, createStore } from 'redux'
import { compact } from 'lodash'
import { createLogicMiddleware } from 'redux-logic'
import { AsyncStorage } from 'react-native'
import immutableTransform from 'redux-persist-transform-immutable'
import { Map } from 'immutable'
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist'

import rootReducers from './reducers'
import rootLogics from './logics'

const logicMiddleware = createLogicMiddleware(rootLogics)

const middlewares = [
  logicMiddleware,
]

const devToolsEnhancer = __DEV__ ? require('remote-redux-devtools').default : () => {}
const enhancer = compose(...compact([
  applyMiddleware(...middlewares),
  autoRehydrate(),
  __DEV__ ? devToolsEnhancer({
    realtime: true,
    stateSanitizer: state => state.toJS(),
  }) : null,
]))

const initialState = Map({})
const store = createStore(
  rootReducers,
  initialState,
  enhancer,
)

if (module.hot) {
  // Enable hot module replacement for reducers
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

persistStore(store, {
  storage: AsyncStorage,
  transforms: [immutableTransform()],
  _stateGetter: (state, key) => state.get ? state.get(key) : state[key],
  _stateSetter: (state, key, value) => state.set ? state.set(key, value) : (state[key] = value, state),
})

export default store
