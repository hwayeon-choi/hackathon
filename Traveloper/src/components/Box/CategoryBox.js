import { View, Text } from 'react-native'
import React from 'react'

const CategoryBox = ({text}) => {
  return (
    <View 
    style= {{
      backgroundColor : "#d9d9d9",
      width : 80,
      marginRight : 10,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center',
    }}
    >
      <Text>{text}</Text>
    </View>
  )
}

export default CategoryBox

