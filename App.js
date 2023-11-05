import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
          <Text style={styles.text4}>Formulate your strategy to receive wonderful gift packs</Text>
        </View>
        <View style={styles.three}>
          {/* <Text style={styles.text4}>Formulate your strategy to receive wonderful gift packs</Text> */}
        </View>


        <TouchableOpacity style={styles.four}>
          <View style={styles.button}>
            <Image source={require('./src/assets/Arrow.png')} />
          </View>
        </TouchableOpacity>

        <View style={styles.five}>
         <Text style={styles.text5}>Nordic Vacation Sponsor</Text>
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
  }, text4: {
    paddingTop: 45,
    flex: 1,
    alignItems: 'center',
    color: '#B4B4B4', // Text color in React Native
    fontFamily: 'Poppins', // Use a valid font family if it's available on your device
    fontSize: 18, // Font size in device-independent pixels (dp)
    fontStyle: 'normal', // Font style
    fontWeight: '400', // Font weight
    lineHeight: 22, // Line height in dp (adjust as needed)
    letterSpacing: -0.27, // Letter spacing (adjust as needed)
    textAlign: 'center', // Text alignment
  },
 
  four: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0373F3',
    width: 76,
    height: 76,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  five:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text5:{
    color: '#595959',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20, 
  }
});
