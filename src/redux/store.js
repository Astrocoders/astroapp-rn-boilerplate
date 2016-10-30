import { 
  createStore,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(
    createSagaMiddleware(),
    createLogger({
      predicate: () => __DEV__,
    })
  )
)

export default store
