/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//  * @format
//  * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;