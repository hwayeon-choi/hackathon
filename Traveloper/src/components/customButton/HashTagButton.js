import { View, Text } from 'react-native'
import React from 'react'

const HashTagButton = () => {
  return (
    <View style={{
      backgroundColor : "#000",
      width : "20%",
      height : 50,
      color : "#FFF",
      borderRadius : 30,
      justifyContent :'center',
      alignItems : "center"
    }}>
      <Text 
      style={{
        color: "#fff", 
        fontWeight:"900", 
        fontSize : 16
        }}>#</Text>
    </View>
  )
}

export default HashTagButton