import { Spinner } from 'native-base'
import Nothing from './Nothing'
import React from 'react'
import theme from '~/theme'
import {
  isBoolean,
} from 'lodash'

export default props => {
  if (props.isLoading || !isBoolean(props.isLoading)) {
    return <Spinner color={theme.colors.blue}/>
  }
  if (props.isNothing) {
    return <Nothing message={props.nothingMessage}/>
  }
  return props.children
}
