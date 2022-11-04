import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native'
import React from 'react'

const localJSON = require('../../DB/data.json')
// const 

const Detail = ({route,navigation}) => {

  let selectedName = route.params.place
  return (
    <ScrollView>
      {/* 상단 이미지  */}
      <ImageBackground 
        source={require('../../../asset/img/restaurant2.jpg')}
        style={styles.topBanner}
      >
      </ImageBackground>
      
      {/* 업체명 */}
      <View style={styles.textArea}>
        <Text style={styles.title}>{selectedName}</Text>
        <Text style={styles.adress}>reigon, city</Text>
      </View>
    </ScrollView>
    )
  }

const styles = StyleSheet.create({
  textArea : {
    paddingTop : 24,
    paddingHorizontal : 16
  },
  topBanner: {
    width: '100%',
    height: 283,
    justifyContent : 'space-between',
    alignItems : 'flex-end',
    flexDirection : 'row',
    paddingVertical : 24,
  },
  title : {
    fontSize : 20,
    color : "#000",
    fontWeight : "900"
  },
  adress : {
    marginTop : 8,
    fontSize : 16,
    fontWeight : "500"
  }
})

export default Detail


// {
//   "place_detail_id": 1,
//   "region": "서울특별시",
//   "city": "영등포구",
//   "place_type": "식당",
//   "company_name": "예가원",
//   "call_num": "",
//   "_address": "",
//   "open_time": "매일 10:00~22:00",
//   "homepage": "http://www.yegawon.co.kr/",
//   "parking": "N",
//   "wifi": "N",
//   "reservation": "\r",
//   "dog_type": "소형견"
// },