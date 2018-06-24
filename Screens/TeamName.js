import React from 'react';
import { StyleSheet, Text, View, Image, Button, AppRegistry, TextInput, Alert } from 'react-native';
import { createStackNavigator,} from 'react-navigation';


export default class TeamName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name1:' '};
    this.state = {name2:' '};
    this.score1 = 0;
    this.score2 = 0;
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Ingresa el nombre del primer equipo</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name1) => this.setState({name1})}
          value={this.state.name1}  
        />
        <Text>{this.state.name1}</Text>
        <Text>Ingresa el nombre del segundo equipo</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name2) => this.setState({name2})}
          value={this.state.name2}  
        />
        <Text>{this.state.name2}</Text>
        <Button
         title="EMPEZAR" 
         onPress={() =>
         navigate('Score',{name1 : this.state.name1, name2: this.state.name2})}
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
  blue:{
    fontSize: 20,
    color :'#0000ff'
  },
  red:{
    fontSize: 20,
    color :'#ff0000'
  }
});