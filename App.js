import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  AppRegistry,
  Alert } from 'react-native';

const styles = require('./src/style/styles.js')
const Speed = require('./src/speed')


export default class App extends React.Component {

  render() {

    return (
      <View>
        <Text> asdasd </Text>
        <Speed />
        <View style={styles.down}>
          <Text> asdasd </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('flock', () => App);
