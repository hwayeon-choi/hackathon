import { View, Text } from 'react-native'
import React from 'react'

const Top10Box = ({placename, id}) => {

  return (
    // 흰색 컨테이너박스
    <View style={{
      width : "100%",
      height : 80,
      backgroundColor : "#fff",
      borderRadius : 10,
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
      padding : 10,
      marginBottom : 10
    }}>

          {/* 순위/업체사진/업체명 */}
          <View style={[{width : 163, flexDirection : "row", alignItems : 'center'}]}>
            <Text style={{marginRight : 16}}>{id}</Text>
            <View style={{
              width : 64,
              height :64,
              backgroundColor : "black",
              borderRadius : 10,
              marginRight :16,
            }}></View>
            <Text>{placename}</Text>
          </View>

          {/* 더보기 */}
          <View >
            <View View style={{
              width : 24,
              height :24,
              backgroundColor : "black",
              borderRadius : 10,
            }}></View>
          </View>

        </View>
  )
}

export default Top10Box