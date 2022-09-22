import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import test1 from './components/dir2';
import test2 from './components/dir3';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

/*
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            - Tab Screen B
            - Tab Screen C

*/

const isLoggedIn = true;
const AppTabComponent = () => {
  return (
    <MainScreenTab.Navigator>
      <MainScreenTab.Screen name="test1" component={test1} />
      <MainScreenTab.Screen name="test2" component={test2} />
    </MainScreenTab.Navigator>
  );
};
export const RootNavigator = () => {
  return (
    <AuthStack.Navigator>
      {isLoggedIn ? (
        <AuthStack.Screen name="Main" component={AppTabComponent} />
      ) : (
        <AuthStack.Screen name="SignIn" component={SignIn} />
      )}
    </AuthStack.Navigator>
  );
};