import React from 'react'
import RedirNonUser from '../redir_non_user'

jest.mock('react-native-router-flux', () => ({
  Actions: { login: jest.fn() },
}))

jest.mock('react-native-meteor', () => ({
  composeWithTracker: c => c,
  loggingIn: jest.fn().mockReturnValue(false),
  user: jest.fn().mockReturnValueOnce(null).mockReturnValueOnce({ _id: 123 }),
}))

describe('<RedirNonUserContainer/>', () => {
  const Router = require('react-native-router-flux')
  it('should take logged out user to login', () => {
    RedirNonUser({}, jest.fn())

    expect(Router.Actions.login).toHaveBeenCalledWith({ type: 'replace' })
  })

  it('shouldn\'t take logged in user to login', () => {
    Router.Actions.login.mockClear()
    RedirNonUser({}, jest.fn())
    expect(Router.Actions.login).not.toHaveBeenCalled()
  })
})
