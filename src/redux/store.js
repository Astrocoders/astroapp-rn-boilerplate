import { applyMiddleware, compose, createStore } from 'redux'
import { compact } from 'lodash'
import { createLogicMiddleware } from 'redux-logic'
import { AsyncStorage } from 'react-native'
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

const devToolsEnhancer = __DEV__ ? require('remote-redux-devtools') : () => ()
const enhancer = compose(...compact([
  applyMiddleware(...middlewares),
  autoRehydrate(),
  __DEV__ ? devToolsEnhancer({ realtime: true }) : null,
]))

const store = createStore(
  rootReducers,
  enhancer,
)

if (module.hot) {
  // Enable hot module replacement for reducers
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

const persistor = persistStore(store, { storage: AsyncStorage })

export default store
