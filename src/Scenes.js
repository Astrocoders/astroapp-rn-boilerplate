import React, {Component} from 'react'
import {
  Navigator,
} from 'react-native'
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux'

import Login from 'astro-app-meteor/Scenes/Login'
import Register from './Scenes/Register'
import ForgotPassword from './Scenes/ForgotPassword'
import FullLoader from './Components/FullLoader'

const LoginScene = (...props) => (
  <Login
    title="AstroApp"
    featuredImageSrc={require('~/img/icon.png')}
    {...props}
  />
)

export default Actions.create(
  <Scene key="root">
    <Scene
      key="__rootLoading"
      wrapRouter={false}
      component={FullLoader}
    />
    <Scene
      key="login"
      wrapRouter={false}
      component={LoginScene}
      initial={true}
    />
    <Scene
      key="register"
      wrapRouter={false}
      component={Register}
    />
    <Scene
      key="forgotPassword"
      wrapRouter={false}
      component={ForgotPassword}
    />
  </Scene>
)
