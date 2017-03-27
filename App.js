import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  Alert } from 'react-native';


export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      timing: 60000,
      timing2: 6000,
    }
    this.spinValue = new Animated.Value(0)
    this.spinValue2 = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin2()
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: this.state.timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  spin2 () {
    this.spinValue2.setValue(0)
    Animated.timing(
      this.spinValue2,
      {
        toValue: 1,
        duration: this.state.timing2,
        easing: Easing.linear
      }
    ).start(() => this.spin2())
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const spin2 = this.spinValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <Text>This works!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <View style={styles.overlay}>
          <Animated.Image
            style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        </View>
        <View style={styles.overlay}>
          <Animated.Image
            style={{ width: 227, height: 200, transform: [{rotate: spin2}] }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 10,
    top: 40,
    opacity: 0.5,
  },
  down: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
  }
});
