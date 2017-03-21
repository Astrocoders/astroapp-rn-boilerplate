'use strict'

// Components
import React, {Component} from 'react'
import {
  Navigator,
  AsyncStorage,
  View,
  Text,
} from 'react-native'
import {
  Actions,
  Scene,
  Router,
} from 'react-native-router-flux'
import {
  Container,
} from 'native-base'
import Drawer from 'react-native-drawer'
import { connect } from 'react-redux'

// Components
import Scenes from './Scenes'
import Sidebar from './Components/Sidebar'

// Services
import ConnectServer from '~/Services/ConnectServer'
import AppContainer from '~/redux/App/Container'

import '~/Services/OneSignalListener'
import { IS_METEOR_APP } from '~/Services/Constants'

// Styles
import appStyles from './Styles/app'

// Initialize Meteor DDP connection
if(IS_METEOR_APP){
  ConnectServer()
}

const RouterWithRedux = connect(({ routes }) => ({ routes }))(Router)

@AppContainer
export default class RootRouter extends Component {
  render() {
    return (
      <Container>
        <Drawer
          tapToClose
          useInteractionManager
          style={{marginBottom: 20}}
          ref="menu"
          type="static"
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          acceptPan={false}
          disabled={this.props.appState.isDrawerEnabled}
          content={<Sidebar />}
          tweenEasing="easeInOutCirc"
          open={this.props.appState.isDrawerVisible}
        >
          <RouterWithRedux
            hideNavBar
            dispatch={this.props.appDispatch.hideDrawer}
            scenes={Scenes}
          />
        </Drawer>
      </Container>
    )
  }
}
