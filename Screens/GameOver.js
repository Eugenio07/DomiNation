import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import { createStackNavigator,} from 'react-navigation';

export default class Score extends React.Component {

  constructor(props) {
      super(props)
   }

   render() {	
    const { navigate } = this.props.navigation;

    if (this.props.navigation.state.params.winner != "Empate"){ 
    	return (
    		<View style={styles.container}>
      			<Text>Felicidades</Text>
      			<Text>El ganador es: </Text>
      			<Text>{this.props.navigation.state.params.winner}</Text>
      			<Button style={styles.scoreButton}
              		title="Volver al inicio" 
              		onPress={() =>
                		{navigate('HomeScreen')}
              		}
              	/>	
      		</View>

      	);
    }
    else{
    	return(
    		<View style={styles.container}>
      			<Text> Quedo en Empate </Text>
      			<Button style={styles.scoreButton}
              		title="Volver al inicio" 
              		onPress={() =>
                		{navigate('HomeScreen')}
              		}
              	/>	
      		</View>
    	)
    }  	
    }	
	
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  rowTeam: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    width: 200,
    justifyContent: 'center',
    height: 50,
  },

  rowButtons: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',



  },



});