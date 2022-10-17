import { View, Text } from 'react-native'
import React from 'react'
import {createbottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen';

const Tab = createbottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.navigator>
      <Tab.Screen
      name = {"Home"}
      component = {HomeScreen}
      />
    </Tab.navigator>
  )
}

export default HomeTabNavigator