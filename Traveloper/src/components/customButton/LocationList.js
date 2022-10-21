import { View, Text,Pressable,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'



export default LocationList = () => {
  
  const locationArr = ["제주","강릉","부산","여수","가평","담양","전주"]

  let localList = locationArr.map((data)=>(
    <Pressable style={styles.locationBox}>
      <ImageBackground 
      style={styles.locationThum}
      source={require('../../../asset/img/busan.jpg')}
      imageStyle={{borderRadius : 10}}
      />
      <Text style={{fontSize : 12, fontWeight : "500"}}>{data}</Text>
    </Pressable>
  ))
  return localList
}
const styles = StyleSheet.create({
  locationBox : {
    width: 88,
    height : "100%",
    marginRight :10,
    alignItems : 'center'
  },
  locationThum : {
    width : "100%",
    height : 88,
    backgroundColor : "#000",
    marginBottom :10,
    borderRadius : 10,
  }
})
