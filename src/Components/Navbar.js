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
    leftComponent={(
      <Button onPress={appDispatch.showDrawer}>
        <Icon name="sidebar"/>
      </Button>
    )}
    rightComponent={leftButtonHandler ? (
      <Button styleName="clear" onPress={leftButtonHandler}>
        <Text>List</Text>
      </Button>
    ) : null}
    centerComponent={<Title>{title}</Title>}
  />
))
