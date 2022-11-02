import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HashTag from '../../screens/Home/HashTag';

const Stack = createNativeStackNavigator();


const HashTagButton = ({navigation}) => {
  return (
    <Pressable 
    style={styles.hashTagContainer}
    onPress = {()=> navigation.navigate('HashTag')}
    >
      <Text style={styles.hashTag}>#</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  hashTagContainer : {
    backgroundColor : "#000",
    width : "20%",
    height : 50,
    color : "#FFF",
    borderRadius : 30,
    justifyContent :'center',
    alignItems : "center"
  },
  hashTag : {
    color: "#fff", 
    fontWeight:"900", 
    fontSize : 16
  }
})

export default HashTagButton