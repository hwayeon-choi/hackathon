import { View, Text } from 'react-native'
import React from 'react'
import {createbottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen';
// import {HomeIcon, HeartIcon, MapIcon,PencilSquareIcon,Cog6ToothIcon } from "react-native-heroicons/outline"
import {HomeIcon, HeartIcon, MapIcon,PencilSquareIcon,Cog6ToothIcon } from "react-native-heroicons/solid"


const Tab = createbottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.navigator>
      <Tab.Screen
      name = {"Home"}
      component = {HomeScreen}
      options={{
        topBarIcon : ({color : string}) => (
          <HomeIcon size={24} color={color}/>
        )
      }}
      />
    </Tab.navigator>
  )
}

export default HomeTabNavigator