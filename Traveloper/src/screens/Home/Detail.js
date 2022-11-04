import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { add } from 'react-native-reanimated'

const localJSON = require('../../DB/data.json')
// console.log(localJSON[0])
const regionData = localJSON.map((data)=>data.region)
const cityData = localJSON.map((data)=>data.city)
const addressData = localJSON.map((data)=>data._address)
const numberData = localJSON.map((data)=>data.call_num)
const dogData = localJSON.map((data)=>data.dog_type)
const timeData = localJSON.map((data)=>data.open_time)
const urlData = localJSON.map((data)=>data.homepage)


const Detail = ({route,navigation}) => {

  const [region, setRegion] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [dog, setDog] = useState("")
  const [time, setTime] = useState("")
  const [url, setUrl] = useState("")
  
  let selectedName = route.params.place

  useEffect(()=> {
    for(let i=0; i<localJSON.length; i++) {
      if(selectedName === localJSON[i].company_name) {
        setRegion(regionData[i])
        setCity(cityData[i])
        setAddress(addressData[i])
        setNumber(numberData[i])
        setDog(dogData[i])
        setTime(timeData[i])
        setUrl(urlData[i])
      }
    }
  })

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
        <Text style={styles.adress}>{region}, {city}</Text>
      </View>
      <View style={styles.infoBg}>
        <Text style={styles.openTime}>영업 시간 : {time}</Text>
        <Text style={styles.dogtype}>출입 가능한 견종 : {dog}</Text>
        <Text style={styles.url}>홈페이지 : {url}</Text>
        <Text style={styles.url}>전화번호 : {number}</Text>

        <View style={{marginTop : 16}}>
          <Text style={styles.detailAdress}>상세 주소 : {address}</Text>
          <View style={styles.mapView}></View>
        </View>
      </View>
    </ScrollView>
    )
  }

const styles = StyleSheet.create({
  textArea : {
    paddingVertical : 16,
    paddingHorizontal : 16,
    backgroundColor : "#000"
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
    fontSize : 18,
    color : "#fff",
    fontWeight : "900"
  },
  adress : {
    color : "#fff",
    marginTop : 8,
    fontSize : 14,
    fontWeight : "500"
  },
  infoBg : {
    backgroundColor : "#fff",
    width : "100%",
    height : 380,
    paddingVertical : 24,
    paddingHorizontal : 16,
  },
  openTime :{
    fontSize : 14,
    color : "#333",
    fontWeight : "600",
    marginBottom : 8
  },
  dogtype : {
    fontSize : 14,
    color : "#333",
    fontWeight : "600",
    marginBottom : 8
  },
  url : {
    fontSize : 14,
    color : "#333",
    fontWeight : "600",
    marginBottom : 8
  },
  detailAdress : {
    fontSize : 14,
    color : "#333",
    fontWeight : "600",
    marginBottom : 8
  },
  mapView : {
    backgroundColor : "#333",
    width : "100%",
    height : 200
  }
})

export default Detail