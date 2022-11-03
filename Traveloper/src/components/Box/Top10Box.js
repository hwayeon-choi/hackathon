import { View, Text, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { PlusIcon } from 'react-native-heroicons/outline'



const Top10Box = ({placename, id}) => {

  return (
    // 흰색 컨테이너박스
    <TouchableOpacity style={{
      width : "100%",
      height : 80,
      backgroundColor : "#fff",
      borderRadius : 10,
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
      padding : 12,
      marginBottom : 10
    }}>

          {/* 순위/업체사진/업체명 */}
          <View style={[{width : 163, flexDirection : "row", alignItems : 'center'}]}>
            <Text style={{marginRight : 16}}>{id}</Text>
            <ImageBackground
            source={require('../../../asset/img/restaurant.jpg')}
            style={{width: 64, height: 64, marginRight : 16}}
            imageStyle={{borderRadius:10}}
            />
            <Text>{placename}</Text>
          </View>

          {/* 더보기 */}
          <View >
            <TouchableOpacity>
              <PlusIcon size={20} color={"#aaa"}/>
            </TouchableOpacity>
          </View>

        </TouchableOpacity>
  )
}

export default Top10Box