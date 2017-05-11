import Meteor from 'react-native-meteor'
import { METEOR_SERVER } from './Constants'

export default () => Meteor.connect(METEOR_SERVER)
