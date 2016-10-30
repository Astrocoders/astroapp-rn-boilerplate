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
  Router,
  Scene,
} from 'react-native-router-flux'
import Drawer from 'react-native-drawer'
import { connect } from 'react-redux'

// Components
import Scenes from './Scenes'
import Sidebar from './Components/Sidebar'

// Services
import ConnectServer from '~/Services/ConnectServer'
import AppContainer from '~/redux/App/Container'

import '~/Services/OneSignalListener'

// Styles
import appStyles from './Styles/app'

// Initialize Meteor DDP connection
// ConnectServer()

@AppContainer
export default class RootRouter extends Component {
  render() {
    return (
      <View style={[appStyles.container, {paddingTop: 0}]}>
        <Drawer
          style={{marginBottom: 20}}
          ref="menu"
          type="static"
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          acceptPan={false}
          disabled={this.props.appState.isDrawerEnabled}
          useInteractionManager={true}
          content={<Sidebar />}
          tweenEasing="easeInOutCirc"
          open={this.props.appState.isDrawerVisible}
        >
          <Router
            hideNavBar={true}
            dispatch={this.props.appDispatch.hideDrawer}
            scenes={Scenes}
          />
        </Drawer>
      </View>
    )
  }
}
