import React from 'react'
import {
  AppRegistry,
  StatusBarIOS,
} from 'react-native'
import AppRootRouter from './src/AppRootRouter'
import { Provider } from 'react-redux'
import store from '/redux/store'

StatusBarIOS.setStyle('light-content')

const App = () => {
  return (
    <Provider store={store}>
      <AppRootRouter />
    </Provider>
  )
}

AppRegistry.registerComponent('AstroApp', () => App)
