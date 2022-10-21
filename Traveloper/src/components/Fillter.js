import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();



const Fillter = () => {
  return (
    <NavigationContainer independent={true}>
        <View style={styles.root}>
          
        </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root  : {
    backgroundColor : "black",
    width : '100%',
    height : "100%",
    borderRadius : 10,
    opacity : 0.7,
    zIndex : 12,
    top : 52,
    // flex : 1,
    // position : 'absolute'
  }
})

export default Fillter