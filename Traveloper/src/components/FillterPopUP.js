import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();



const FillterPopUP = () => {
  return (
    <NavigationContainer independent={true}>
        <View style={styles.root}>
          <Text>FillterPopUP</Text>
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
    opacity : 0.3,
    zIndex : 1,
    top : 52,
    // flex : 1,
    // position : 'absolute'
  }
})

export default FillterPopUP