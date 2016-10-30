import { 
  createStore,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(createSagaMiddleware())
)

export default store
