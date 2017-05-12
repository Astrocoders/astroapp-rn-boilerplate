import React from 'react'
import {
  AppRegistry,
  BackAndroid,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import AppRootRouter from './src'
import { Provider } from 'react-redux'
import store from '~/redux/store'

BackAndroid.addEventListener('hardwareBackPress', () => {
  Actions.pop()
  return true
})

const App = () => {
  return (
    <Provider store={store}>
      <AppRootRouter/>
    </Provider>
  )
}

AppRegistry.registerComponent('AstroApp', () => App)
