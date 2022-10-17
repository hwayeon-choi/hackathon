/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
        <Stack.Screen name='Home' component={HomeScreen}/>
          {/* <SafeAreaView style={styles.root}>
            <LoginScreen />
          </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor : "#F9FbFc"
  },
});

export default App;