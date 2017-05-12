import { Actions } from 'react-native-router-flux'
import Loader from '~/Components/Loader'
import Meteor, {
  composeWithTracker,
} from 'react-native-meteor'

function composer(props, onData) {
  const loggingIn = Meteor.loggingIn()
  const user = Meteor.user()
  if (!loggingIn && user) {
    Actions.dashboard({ type: 'replace' })

    return
  }

  onData(null, {
    loggingIn,
  })
}

export default composeWithTracker(composer, Loader, Loader)
