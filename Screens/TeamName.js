import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import { createStackNavigator,} from 'react-navigation';


export default class TeamName extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>TeamName</Text>
        <Button
        title="EMPEZAR" 
        onPress={() =>
          navigate('Score')}
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