import { View, Text } from 'react-native'
import React from 'react'

const CategoryBox = ({text,backgroundColor,color}) => {
  return (
    <View 
    style= {{
      backgroundColor :  backgroundColor ? backgroundColor :"#d9d9d9",
      width : 80,
      marginRight : 10,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center',
    }}
    >
      <Text style={{
      color : color ? color : "#000"
      }}>{text}</Text>
    </View>
  )
}

export default CategoryBox

