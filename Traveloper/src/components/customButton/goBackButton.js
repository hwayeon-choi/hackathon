import { View, Text } from 'react-native'
import React from 'react'

const goBackButton = () => {
  return (
    <View>
      <Pressable
        onPress={
          console.warn("뒤로가기")
        }
        >
          <MagnifyingGlassIcon color={'black'}/>
        </Pressable>
    </View>
  )
}

export default goBackButton