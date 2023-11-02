import React, { Component } from 'react';
import { Text, View, StyleSheet , Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <>
      <View style={styles.container}>
        <Image source={require('./src/assets/one.png')} />
      </View>
      <View>
        
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
