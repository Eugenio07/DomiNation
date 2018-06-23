import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createStackNavigator,} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import TeamName from './Screens/TeamName'
import Score from './Screens/Score'


const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  TeamName: { screen: TeamName },
  Score: { screen: Score },
});

const AppNavigation = () => (
  <AppNavigator  />
);

export default class App extends React.Component {
  render() {
    return (
        <AppNavigation/>
    );
  }
}

