import React from 'react'
import { Actions } from 'react-native-router-flux'
import AppContainer from '~/redux/App/Container'
import {
  Text,
} from 'react-native'
import {
  Header,
  Title,
  Left,
  Right,
  Icon,
  Body,
  Button,
} from 'native-base'

export default AppContainer(({ appDispatch, title, rightActionHandler, isNavigational }) => {
  return (
    <Header>
      <Left>
        <Button
          onPress={isNavigational ? Actions.pop : appDispatch.showDrawer}
          transparent
          >
          <Icon name={isNavigational ? 'arrow-back' : 'menu'}/>
        </Button>
      </Left>
      <Body>
        <Title>
          {title}
        </Title>
      </Body>
    </Header>
  )
})
