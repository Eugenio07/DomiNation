import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import { createStackNavigator,} from 'react-navigation';
import TeamName from './Screens/TeamName'

export default class Score extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Score</Text>

        <Button
        title="Fin" 
        onPress={() =>
          Alert.alert('Game Over')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});