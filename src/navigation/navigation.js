import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import Thirdscreen from '../screens/ThirdScreen/Thirdscreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';

export default function Navigation() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{
        headerShown: false, // This will hide the header for all screens in this stack
      }} 
       >
        <Stack.Screen name="first" component={FirstScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
        <Stack.Screen name="third" component={Thirdscreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})