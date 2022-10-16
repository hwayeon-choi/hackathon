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
// import Custominput from './src/components/CustomInput/custominput';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginScreen />
      {/* <Custominput></Custominput> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor : "#F9FbFc"
  },
});

export default App;