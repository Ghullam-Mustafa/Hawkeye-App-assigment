import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.one}>
          <Image source={require('./src/assets/one.png')} />
        </View>
        <View style={styles.two}>
          <Text style={styles.text2}>Make your own private</Text>
          <Text style={styles.text3}> travel plan</Text>
        </View>
        <View style={styles.three}>
          <Text>Formulate your strategy to receive wonderful gift packs</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 101,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  one: {
    flex: 1,
    marginTop: 101,
    alignItems: 'center',
    justifyContent: 'center',

  },
  two: {
    flex: 1,
    marginTop: 45,
    alignItems: 'center',

  },
  text2: {


    alignItems: 'center',
    justifyContent: 'center',
    color: '#000', // Text color should be set in the Text component, not here
    fontFamily: 'Poppins-Normal', // Make sure 'Poppins' font is correctly installed on your device
    fontSize: 28, // Font size in device-independent pixels (dp)
    fontStyle: 'normal',
    fontWeight: '600', // Font weight should be a string
    lineHeight: 30, // You can specify line height as a number
    letterSpacing: -0.42,
  },
  text3: {


    alignItems: 'center',
    justifyContent: 'center',
    color: '#000', // Text color should be set in the Text component, not here
    fontFamily: 'Poppins', // Make sure 'Poppins' font is correctly installed on your device
    fontSize: 28, // Font size in device-independent pixels (dp)
    fontStyle: 'normal',
    fontWeight: '600', // Font weight should be a string
    lineHeight: 30, // You can specify line height as a number
    letterSpacing: -0.42,
  },
  three: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center',
  }
});
