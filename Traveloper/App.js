/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



// 스크린 페이지들
import Home from './src/screens/Home/Home';
import FindRoute from './src/screens/Home/FindRoute';
import Filter from './src/components/Filter';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';
import HashTag from './src/screens/Home/HashTag';
import LoginScreen from './src/screens/LoginScreen';

function WishScreen() { return <Text>wish</Text>}
function MapScreen() { return <Text>map</Text>}
function SnsScreen() { return <Text>sns</Text>}
function SettingScreen() { return <Text>settings</Text>}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeTabNavigator> */}
      <Stack.Navigator>

        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          headerShown : false
        }}
        />

        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown : false
        }}
        />

        <Stack.Screen 
        name="FindRoute" 
        component={FindRoute}
        options={{
          headerShown : false
        }}
        />

        <Stack.Screen 
        name="Filter" 
        component={Filter}
        options={{
          headerShown : false
        }}
        />

        {/* <Stack.Screen 
        name="HashTag" 
        component={HashTag}
        options={{
          headerShown : false
        }}
        /> */}
        
      </Stack.Navigator>
  {/* </HomeTabNavigator> */}
  </NavigationContainer>
  )
}