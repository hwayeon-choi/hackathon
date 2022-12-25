import { View, Text } from 'react-native'
import React,{useLayoutEffect} from 'react'

const Map = ({navigation}) => {
  
  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
    
  },[])

  return (
    <View>
      <Text>지도지도</Text>
    </View>
  )
}

export default Map