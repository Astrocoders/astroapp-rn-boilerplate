import React, {
  Component,
} from 'react'
import {
  Text, 
  View, 
  TouchableOpacity, 
  Alert, 
  Image, 
} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import {Actions} from 'react-native-router-flux'
import Meteor from 'react-native-meteor'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Components
import TextInput from '~/Components/TextInput'
import PasswordTextInput from '~/Components/PasswordInput'
import ButtonRounded from '~/Components/ButtonRounded'

// Containers
import RedirUserContainer from '~/Containers/redir_user'

// Styles
import loginStyles from '~/Styles/login'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
    }
  }

  login(){
    const { email, password } = this.state
    Meteor.loginWithPassword(email, password, error => {
      if (error) {
        Alert.alert('Login failed', error.reason, [
          {text: 'Ok'},
        ])
        return
      }
    })
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={loginStyles.container}
        scrollEnabled={this.state.scroll}
      >
        <View
          style={{height: this.state.logoSectionHeight}}
        >
          <Image source={require('~/img/icon.png')} style={loginStyles.logo} />
          <Text style={loginStyles.subLogo}>{'AstroApp'.toUpperCase()}</Text>
        </View>
        <View style={loginStyles.body}>
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={val => this.setState({email: val})}
            keyboardType="email-address"
            autoCapitalize="none"
            style={loginStyles.inputs}
          />

        <PasswordTextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.setState({password: val})}
          style={loginStyles.inputs}
        />
        <TouchableOpacity
          onPress={Actions.forgotPassword}
          style={loginStyles.forgotPasswordContainer}
        >
          <Text>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <ButtonRounded
          onPress={() => this.login()}
          text="Sign in"
          style={loginStyles.btn}
          textStyle={loginStyles.btnText}
        />
        <ButtonRounded
          onPress={Actions.register}
          text="Register"
          style={loginStyles.btnSignUp}
          textStyle={loginStyles.btnTextSignUp}
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default (Login)
