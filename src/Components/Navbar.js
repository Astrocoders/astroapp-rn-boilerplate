// @flow
import React from 'react'
import {Actions} from 'react-native-router-flux'
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
} from 'native-base'

export default AppContainer(function Navbar({ appDispatch, title, rightActionHandler }){
  return (
    <Container>
      <Header>
        <Left>
          <Button
            onPress={appDispatch.showDrawer}
            transparent
          >
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          <Title>
            {title}
          </Title>
        </Body>
      </Header>
    </Container>
  )
})
