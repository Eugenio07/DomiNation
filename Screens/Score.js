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
        <Text style={styles.title}>¡Añade los puntos!</Text>
        <Text>{this.props.navigation.state.params.name1}</Text>

        <View style={styles.rowTeam}>
          <View style={styles.scoreBox}><Text style={styles.scoreText}>{this.state.FirstTeamScore}</Text></View>
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
              height='80'
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
          <Text style={styles.scoreText}>{this.state.SecondTeamScore}</Text>
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
        
        <View style={styles.buttonEnd}>
        <Button
        title="Fin" 
        containerStyle={styles.buttonEnd}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center'
  },

  rowTeam: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
    alignItems: 'center',
    marginTop: 40,
  },

  rowButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 30,



  },

  scoreButton: {
    backgroundColor:'green',
    height: 50,
  },

  title: {
    fontSize: 30,
  },
  scoreBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 22,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonEnd: {
    marginTop: 30,
   backgroundColor: 'green',
  }

});