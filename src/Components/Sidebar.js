// @flow
import React, {
  Component,
  PropTypes,
} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from 'react-native'
import Meteor from 'react-native-meteor'
import Moment from 'moment'
import { Actions } from 'react-native-router-flux'
import {
  Button,
  Title,
} from '@shoutem/ui'
import AppContainer from '~/redux/App/Container'

@AppContainer
class Sidebar extends Component {
  static contextTypes = {
    drawer: PropTypes.object,
  }

  currentDate() {
    return Moment().format('MM/DD/YYYY')
  }

  logout(){
    Alert.alert('Logout', 'Leave the app?', [
      {text: 'Yes', onPress: () => Meteor.logout()},
      {text: 'Nevermind'},
    ])
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Title>Astro</Title>
            <Text>{this.currentDate()}</Text>
          </View>
          <View style={{position: 'relative'}}>
            <Button
              underlayColor="#2D2D30"
              onPress={() => this.props.appDispatch.hideDrawer() && this.logout()}
            >
              <Text>Logout</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Sidebar
