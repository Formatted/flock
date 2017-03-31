import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  AppRegistry,
  Alert } from 'react-native';

const styles = require('./style/styles.js')
const Spinner = require('./spinner.js')

class Speed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timing: 3600000,
      timing2: 60000,
    }
  }
  // componentDidMount () {
  // }
  _slowDown = () => {
    let foo = this.state.timing2
    Alert.alert(
      'boo ' + foo,
    );
    this.setState({ timing2: foo + 1000 })
  };

  _speedUp = () => {
    let foo = this.state.timing2
    if(foo < 1001){
      foo += 1000
    }
    Alert.alert(
      'boo ' + foo,
    );
    this.setState({ timing2: foo - 1000 })
  };


    render() {

      return (
        <View>
          <Button
            title="Slow down"
            onPress={this._slowDown}
          />
          <Button
            title="Speed up"
            onPress={this._speedUp}
          />
          <View style={styles.container}>
            <Spinner timing={this.state.timing} />
            <Spinner timing={this.state.timing2} />
          </View>
        </View>
      )
    }
}

module.exports = Speed
