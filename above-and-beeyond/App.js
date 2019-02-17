import React, {Component} from 'react';
import { Alert, StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';
export default class App extends Component {
  constructor (){
    super()
    this.state = {
      textValue : 'Content has not been modified yet',
    }
  }

  buttonPressed(text) {
    console.log(text)
    this.setState({
      textValue: text,
    })

    if(text == 'Events'){
       this.setState({
         name: 'CUHacking 2019',
         description: 'Carleton Hackathon',
         date: 'Todays date',
        })
    }
  }

  render() {
    let pic = {
      uri: 'https://raw.githubusercontent.com/BenFranklinthe1st/above-and-beeyond/master/Above%20and%20Beyond/A%2BA.png'
    };
    return (
      <ScrollView style={styles.background}>
      <View style = {styles.title}>
      <Text style = {styles.big}>Above-and-Beeyond</Text>
      <Image source={pic} style={styles.icon}/>
      </View>
      <View style = {styles.container}>
      <View style = {styles.buttonContainer}>
      <Button style={styles.homeStyles} title="Home" content="Home has been clicked" onPress={() => this.buttonPressed('Home')}/>
      </View>
      <View style = {styles.buttonContainer}>
      <Button title="Events" content="Events has been clicked" onPress={() => this.buttonPressed('Events')}/>
      </View>
      <View style = {styles.buttonContainer}>
      <Button title="Learn" content="Learn has been clicked" onPress={() => this.buttonPressed('Learn')}/>
      </View>
      <View style = {styles.buttonContainer}>
      <Button title="About" content="About has been clicked" onPress={() => this.buttonPressed('About')}/>
      </View>
      <View style = {styles.buttonContainer}>
      <Button title="Contact" content="Contact has been clicked" onPress={() => this.buttonPressed('Contact')}/>
      </View>
      </View>
      <View style = {styles.content}>
      <Text>{this.state.textValue}</Text>
      <Text>{this.state.name}</Text>
      </View>

      </ScrollView>

    );
  }
}

//class ContentWindow extends Component {
//  render() {
//    return(
//      <Text style={styles.placeholder}>Hello, World!</Text>
//    );
//  }
//}

const styles = StyleSheet.create({

  big: {
    fontSize: 30,
  },

  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  icon: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  background: {
    backgroundColor: 'yellow',
  },

  container: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },

  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }
});
