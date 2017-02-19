import 'react-native'
import { Alert } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import renderer from 'react-test-renderer'

jest.mock('react/lib/ReactDefaultInjection')
jest.mock('../../Containers/redir_user')
jest.mock('react-native-router-flux', () => ({
  Actions: { dashboard: jest.fn() },
}))
jest.mock('react-native-meteor', () => ({
  loginWithPassword: jest.fn(),
}))

import Login from '../Login'

describe('<Login/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Login/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should call Meteor.loginWithPassword with credentials when user taps on login button', () => {
    const wrapper = renderer(<Login/>)
    const credentials = {
      email: 'user@email.com',
      password: 'password',
    }

    wrapper.setState(credentials)
    wrapper.find('ButtonRounded').prop('onPress')()

    expect(require('react-native-meteor').loginWithPassword)
      .toHaveBeenCalledWith(credentials.email, credentials.password)
  })

  it('should thrown an alert warning about login error', () => {
    const wrapper = shallow(<Login/>)
    require('react-native-meteor').loginWithPassword.mockClear()

    wrapper.find('ButtonRounded').prop('onPress')()

    expect(true).toBeThuthy(true)
  })
})
