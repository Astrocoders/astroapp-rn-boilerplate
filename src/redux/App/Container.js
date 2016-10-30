// @flow
import { connect } from 'react-redux'
import {
  HIDE_DRAWER,
  SHOW_DRAWER,
} from './actions'

export default connect(
  function mapStateToProps({ app }){
    return {
      appState: app,
    }
  },
  function mapDispatchToProps(dispatch){
    return {
      appDispatch: {
        hideDrawer: () => dispatch({type: HIDE_DRAWER}),
        showDrawer: () => dispatch({type: SHOW_DRAWER}),
      },
    }
  }
)
