// @flow
import React from 'react'
import {Actions} from 'react-native-router-flux'
import AppContainer from '~/redux/App/Container'
import {
  Text,
} from 'react-native'
import {
  NavigationBar,
  Title,
  Icon,
  Button,
} from '@shoutem/ui'

export default AppContainer(({ appDispatch, title, leftButtonHandler }) => (
  <NavigationBar
    rightComponent={<Icon name="sidebar" onPress={appDispatch.showDrawer}/>}
    leftComponent={(
      <Button styleName="clear" onPress={leftButtonHandler}>
        <Text>List</Text>
      </Button>
    )}
    centerComponent={<Title>{title}</Title>}
  />
))
