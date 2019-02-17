import React, {Component} from 'react';
import { Alert, StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';
export default class App extends Component {
  constructor (){
    super()
    this.state = {
      textValue : 'Home',
    }
  }

  buttonPressed(text) {
    console.log(text)
    this.setState({
      textValue: text,
    })
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
      <Button style={styles.homeStyles} title="Home" content="Home has been clicked" onPress={() => this.buttonPressed('Home')}/>
      <Button title="Events" content="Events has been clicked" onPress={() => this.buttonPressed('Events')}/>
      <Button title="Learn" content="Learn has been clicked" onPress={() => this.buttonPressed('Learn')}/>
      <Button title="About" content="About has been clicked" onPress={() => this.buttonPressed('About')}/>
      <Button title="Contact" content="Contact has been clicked" onPress={() => this.buttonPressed('Contact')}/>
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

  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }
});
