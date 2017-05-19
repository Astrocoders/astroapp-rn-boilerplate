import React, {
  Component,
} from 'react'
import {
  View,
  Text,
} from 'react-native'
import {
  Button,
  Content,
  Container,
  Title,
} from 'native-base'
import AppContainer from '~/redux/App/Container'

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Title>Astro</Title>
            <Text>{this.currentDate()}</Text>
          </View>
          <View style={{position: 'relative'}}>
            <Button
              underlayColor="#2D2D30"
              onPress={() => this.props.appDispatch.hideDrawer()}
            >
              <Text>Logout</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default AppContainer(Sidebar)
