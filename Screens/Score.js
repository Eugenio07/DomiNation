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

   }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>¡Añade los puntos!</Text>
        <Text>{this.props.navigation.state.params.name1}</Text>

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
              <Button
              title="Hacer 0" 
              onPress={() =>
                {this.setState({FirstTeamScore: 0})}
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
        <Text>{this.props.navigation.state.params.name2}</Text>

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
              <Button
              title="Hacer 0" 
              onPress={() =>
                {this.setState({SecondTeamScore: 0})}
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
        onPress={() => {

          if (this.state.FirstTeamScore > this.state.SecondTeamScore){
            navigate('GameOver',{winner: this.props.navigation.state.params.name1 })
          }
          else if (this.state.FirstTeamScore < this.state.SecondTeamScore){
            navigate('GameOver',{winner: this.props.navigation.state.params.name2 })
          }
          else{
            navigate('GameOver',{winner: 'Empate' })
          }
        } }
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