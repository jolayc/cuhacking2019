import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://raw.githubusercontent.com/BenFranklinthe1st/above-and-beeyond/master/Above%20and%20Beyond/A%2BA.png'
    };
    return (
      <ScrollView>
      <Image source={pic} style={{width: 100, height: 100}}/>
      <View style={{width: 1000, height: 50, backgroundColor: 'powderblue'}} />
      <Text>Above-and-Beeyond</Text>
      <Button
      onPress={() => {
      Alert.alert('You tapped the button!');
      }}
      title="Home"
      />
      <Button
      onPress={() => {
      Alert.alert('You tapped the button!');
      }}
      title="Events"
      />
      <Button
      onPress={() => {
      Alert.alert('You tapped the button!');
      }}
      title="Learn"
      />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </ScrollView>

    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <ScrollView>
      <Text>Home</Text>
      <Text>Events</Text>
      <Text>Learn</Text>
      <Text>About</Text>
      <Text>Hello {this.props.name}!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeb3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
