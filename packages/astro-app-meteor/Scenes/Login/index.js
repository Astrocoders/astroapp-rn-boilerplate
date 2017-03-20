import React, {
  Component,
  PropTypes,
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
import {StyleSheet, Dimensions} from 'react-native'
import Meteor from 'react-native-meteor'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Components
import TextInput from '~/Components/TextInput'
import PasswordTextInput from '~/Components/PasswordInput'
import ButtonRounded from '~/Components/ButtonRounded'

// Containers
import RedirUserContainer from 'astro-app-meteor/Containers/RedirUser'

@RedirUserContainer
class Login extends Component {
  state = {
    email: null,
    password: null,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
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
    const {
      featuredImageSrc,
      title,
    } = this.props

    return (
      <KeyboardAwareScrollView
        style={loginStyles.container}
      >
          <View
            style={{height: this.state.logoSectionHeight}}
          >
            <Image source={featuredImageSrc} style={loginStyles.logo} />
            <Text style={loginStyles.subLogo}>{title.toUpperCase()}</Text>
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

const deviceHeight = Dimensions.get('window').height
const loginStyles = {
  background: {
    flex: 1,
    resizeMode: 'stretch'
  },
  body: {
    flex: 1,
    marginTop: deviceHeight/10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15
  },
  container: {
    backgroundColor: '#f5f5f5'
  },
  logoBackground: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent'
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginTop: 50,
  },
  subLogo: {
    alignSelf: 'center',
    fontSize: 32,
    color: '#333',
    fontFamily: 'sans-serif-light',
    marginTop: 10,
  },
  registerContainer: {
    marginTop: 10,
    alignSelf: 'center'
  },
  registerText: {
    color: '#9d9d9d',
    fontSize: 14
  },
  registerLink: {
  },
  forgotPasswordContainer: {
    alignSelf: 'center',
    marginVertical: 15
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
  },
  inputs: {
    borderBottomColor: '#333',
  },
  btn: {
    backgroundColor: 'transparent',
  },
  btnSignUp: {
    backgroundColor: 'transparent',
    borderColor: '#666',
  },
  btnTextSignUp: {
    color: '#666',
  },
  btnText: {
    color: '#333',
  },
}

export default (Login)
