import { View, Text, TouchableOpacity,ImageBackground } from 'react-native'
import React,{useState, useEffect} from 'react'
import { PlusIcon } from 'react-native-heroicons/outline'



const Top10Box = ({placename, id,navigation}) => {

  // console.log(id)
  const [bgColor, setBgColor] = useState("#fff")
  const [fontColor, setFontColor] = useState("#444")

  useEffect(()=> {
    if(id === 1) {
      setBgColor("#77C0D8")
      setFontColor("#fff")
    }
    else if (id === 2) {
      setBgColor("#97C5D3")
      setFontColor("#fff")
    }
    else if (id === 3) {
      setBgColor("#CFE8F0")
      setFontColor("#555")
    }
  })

  
  return (
    // 흰색 컨테이너박스
    <TouchableOpacity 
    onPress={()=> navigation.navigate ("Detail",{place : placename})}
    style={{
      width : "100%",
      height : 80,
      backgroundColor : bgColor,
      borderRadius : 10,
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
      padding : 12,
      marginBottom : 10
    }}>

          {/* 순위/업체사진/업체명 */}
          <View style={[{width : 163, flexDirection : "row", alignItems : 'center'}]}>
            <Text style={{
              color : fontColor,
              marginRight : 16,
              fontWeight : "700"
            }}>{id}</Text>
            <ImageBackground
            source={require('../../../asset/img/top10.jpg')}
            style={{width: 64, height: 64, marginRight : 16}}
            imageStyle={{borderRadius:10}}
            />
            <Text style={{
              color : fontColor,
              marginRight : 14,
              fontWeight : "700"
            }}>{placename}</Text>
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