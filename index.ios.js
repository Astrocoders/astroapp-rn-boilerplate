import React from 'react';
import {
  AppRegistry,
  StatusBarIOS,
} from 'react-native';
import AppRootRouter from './src/AppRootRouter';

StatusBarIOS.setStyle('light-content');

const App = () => {
  return (
    <AppRootRouter />
  );
}

AppRegistry.registerComponent('AstroApp', () => App);
