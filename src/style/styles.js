const React = require('react-native')
const {StyleSheet} = React

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
