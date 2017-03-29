import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  AppRegistry,
  Alert } from 'react-native';

const styles = require('./src/style/styles.js')
const Spinner = require('./src/spinner');


export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      timing: 60000,
      timing2: 6000,
    }
  }
  // componentDidMount () {
  // }
  _handleButtonPress = () => {
        let foo = this.state.timing2
    Alert.alert(
      'Button pressed!',
      'boo ' + foo,
    );
    this.setState({ timing2: foo + 1000 })
  };

  render() {

    return (
      <View>
        <Text> Blah blah blah </Text>
        <Button
          title="Press me!"
          onPress={this._handleButtonPress}
        />
        <View style={styles.container}>

            <Spinner timing={this.state.timing} />
            <Spinner timing={this.state.timing2} />

        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('flock', () => App);
