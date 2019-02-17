import React, {Component} from 'react';
import { Alert, StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';

export default class App extends Component {
  state = {
    textValue: 'Content has not been modified yet',
  }

  onPress = () => {
    this.setState({
      textValue: 'Content has been modified'
    })
  }

  render() {
    let pic = {
      uri: 'https://raw.githubusercontent.com/BenFranklinthe1st/above-and-beeyond/master/Above%20and%20Beyond/A%2BA.png'
    };
    return (
      <ScrollView style={styles.background}>
      <Text style={styles.title}>Above and Beeyond</Text>
      <Image source={pic} style={styles.icon}/>
      <Button title="Home" content="Home has been clicked" onPress={this.onPress}/>
      <Button title="Events" content="Events has been clicked" onPress={this.onPress}/>
      <Button title="Learn" content="Learn has been clicked" onPress={this.onPress}/>
      <Button title="About" content="About has been clicked" onPress={this.onPress}/>
      <Button title="Contact" content="Contact has been clicked" onPress={this.onPress}/>
      <Button title="Click me" onPress={this.onPress}/>
      <Text>{this.state.textValue}</Text>
      </ScrollView>

    );
  }
}

class ContentWindow extends Component {
  render() {
    return(
      <Text style={styles.placeholder}>Hello, World!</Text>
    );
  }
}

class MyClass extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    backgroundColor: 'yellow',
  },

  placeholder: {
    fontSize: 100
  }
});
