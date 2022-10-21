import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LocationList from './LocationList'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'



const Location = () => {
  return (
    <View>
      <TextInput 
      placeholder='지역, 주소 입력'
      style={{
        width: "100%",
        height : 50,
        backgroundColor : "#d9d9d9",
        marginVertical : 16,
        borderRadius : 10,
        paddingHorizontal : 16
      }}
      />
        {/* <MagnifyingGlassIcon color={"#ccc"}/> */}
      
      <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator = {false}
      style={{
        width: "100%",
        height : "60%",
        flexDirection : 'row'
      }}>
        <LocationList/>
      </ScrollView>
    </View>
  )
}

export default Location