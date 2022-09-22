/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ActivityIndicator, //로딩 중인지 아닌지 판단
  ScrollView, //뷰가 넘침을 방지
} from 'react-native';
import AuthLogo from './authLogo';
import AuthForm from './authForm';

const AuthComponent = () => {
  state = {
    loading: false,
  };
  if(this.state.loading) {
    return(
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <View>
          <AuthLogo />
          <AuthForm />
        </View>
      </ScrollView>
      );
    }
  };

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#458',
    padding: 130
  }
});

export default AuthComponent;