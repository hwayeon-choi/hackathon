import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import FindRoute from './FindRoute'
import { useLayoutEffect } from 'react'

const Stack =  createNativeStackNavigator();

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="FindRoute" component={FindRoute}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen