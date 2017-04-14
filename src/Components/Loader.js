import React from 'react'
import {View, Text} from 'react-native'
import Spinner from 'react-native-spinkit'

const Loader = () => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Spinner
      size={40}
      type="9CubeGrid"
      color="#161616"
    />
  </View>
)

export default Loader
