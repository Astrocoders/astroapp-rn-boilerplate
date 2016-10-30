'use strict'

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 75,
    paddingRight: 75,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 23,
    height: 45,
    marginTop: 18,
    marginLeft: 20,
    marginRight: 20,
  },
  coloredButton: {
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 2,
    alignSelf: 'stretch',
    borderRadius: 23,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  buttonText: {
    fontWeight: '200',
    alignSelf: 'center',
    fontSize: 18
  },
  coloredButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 17
  }
})
