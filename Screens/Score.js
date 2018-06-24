import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import { createStackNavigator,} from 'react-navigation';


export default class Score extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
         FirstTeamScore: 0,
         SecondTeamScore: 0,
      };
      this.increase10First = this.increase10First.bind(this);
      this.increase10Second = this.increase10Second.bind(this);

   }

   increase10First(){
    
  }

  increase10Second(){
    this.setState({SecondTeamScore: this.state.SecondTeamScore +10});
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>¡Añade los puntos!</Text>
        <Text>Equipo Numero Uno</Text>

        <View style={styles.rowTeam}>
          <Text>{this.state.FirstTeamScore}</Text>
          <View>
            <View style={styles.rowButtons}>
              <Button style={styles.scoreButton}
              title="+1"
              onPress={() =>
                {this.setState({FirstTeamScore: this.state.FirstTeamScore + 1})}
              }
              />

              <Button style={styles.scoreButton}
              title="+5" 
              color='black'
              backgroundColor='black'
              width='500px'
              onPress={() =>
                {this.setState({FirstTeamScore: this.state.FirstTeamScore + 5})}
              }
              />
              <Button style={styles.scoreButton}
              title="+10" 
              onPress={() =>
                {this.setState({FirstTeamScore: this.state.FirstTeamScore + 10})}
              }
              />
            </View>


            <View style={styles.rowButtons}>
              <Button style={styles.scoreButton}
              title="-1" 
              onPress={() =>
                {this.setState({FirstTeamScore: this.state.FirstTeamScore - 1})}
              }
              />

              <Button style={styles.scoreButton}
              title="-5" 
              onPress={() =>
                {this.setState({FirstTeamScore: this.state.FirstTeamScore - 5})}
              }
              />
              <Button style={styles.scoreButton}
              title="-10" 
              onPress={() =>
                {this.setState({FirstTeamScore: this.state.FirstTeamScore - 10})}
              }
              />
            </View>
          </View> 
        </View>
        <Text>Equipo Numero Dos</Text>

        <View style={styles.rowTeam}>
          <Text>{this.state.SecondTeamScore}</Text>
          <View>
            <View style={styles.rowButtons}>
              <Button style={styles.scoreButton}
              title="+1" 
              onPress={() =>
                {this.setState({SecondTeamScore: this.state.SecondTeamScore + 1})}
              }
              />

              <Button style={styles.scoreButton}
              title="+5" 
              onPress={() =>
                {this.setState({SecondTeamScore: this.state.SecondTeamScore + 5})}
              }
              />
       
              <Button
              title="+10" 
              onPress={() =>
                {this.setState({SecondTeamScore: this.state.SecondTeamScore + 10})}
              }
              />
            </View>

            <View style={styles.rowButtons}>
              <Button style={styles.scoreButton}
              title="-1" 
              onPress={() =>
                {this.setState({SecondTeamScore: this.state.SecondTeamScore - 1})}
              }
              />

              <Button style={styles.scoreButton}
              title="-5" 
              onPress={() =>
                {this.setState({SecondTeamScore: this.state.SecondTeamScore - 5})}
              }
              />
       
              <Button style={styles.scoreButton}
              title="-10" 
              onPress={() =>
                {this.setState({SecondTeamScore: this.state.SecondTeamScore - 10})}
              }
              />
            </View>
          </View>
        </View>
        
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
    justifyContent: 'center',
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