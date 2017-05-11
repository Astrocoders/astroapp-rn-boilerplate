import { connect } from 'react-redux'
import {
  HIDE_DRAWER,
  SHOW_DRAWER,
} from './actions'

export default connect(
  state => {
    return {
      appState: state.get('app').toJS(),
    }
  },
  dispatch => {
    return {
      appDispatch: {
        hideDrawer: () => dispatch({ type: HIDE_DRAWER }),
        showDrawer: () => dispatch({ type: SHOW_DRAWER }),
      },
    }
  }
)
