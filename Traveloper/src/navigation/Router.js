import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import FindRoute from '../screens/Home/FindRoute';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

function WishScreen() { return <Text>wish</Text>}
function MapScreen() { return <Text>map</Text>}
function SnsScreen() { return <Text>sns</Text>}
function SettingScreen() { return <Text>settings</Text>}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeTabNavigator}
          options={{
            headerShown : false
          }}
        />
        <Stack.Screen
          name='FindRoute'
          component={FindRoute}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router