import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import React, { useState } from 'react'

import walktogether from '../../asset/img/walktogether.jpg'
import restaurant2 from '../../asset/img/restaurant2.jpg'
import photospot from '../../asset/img/photospot.jpg'
import dog_surf2 from '../../asset/img/dog_surf2.jpg'
import dog_surf1 from '../../asset/img/dog_surf1.jpg'

const Banner = ()=> {
  const [number, setNumber] = useState(1)
  const [image, setImage] = useState(dog_surf2)

  const imageContainer = [
    dog_surf1, walktogether, restaurant2, photospot, dog_surf2
  ]


  /* 타이머 */
  setTimeout(()=>{onIncrease()}, 3500);

  const onIncrease=()=>{
    if(number<=4){ // 1부터 5까지 증가하고 
      setNumber(number+1) // 숫자
      const getImage = imageContainer[number-1]
      setImage(getImage) // 사진
    } else { // 다시 1부터 시작하는 카운터
      setNumber(1) // 숫자
      const getImage = imageContainer[number-1]
      setImage(getImage) // 사진
    }
  }
  
  return(
    <>
      <ImageBackground 
        source={image}
        style={styles.topBanner}
        onPress={onIncrease}
      >
        <View style={styles.BannerCounterContainer}>
          <Text style={styles.BannerCounterPage}>{number}</Text>
          <Text style={styles.BannerCounterTotal}>/5</Text>
        </View>

        <View style={styles.BannerTextContainer}>
          <Text style={styles.topBannerSubtitle}>남해여행</Text>
          <Text style={styles.topBannerTitle}>댕댕이와 서핑 즐기기</Text>
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  topBanner: {
    width: '100%',
    height: 283,
    justifyContent : 'space-between',
    alignItems : 'flex-end',
    flexDirection : 'row',
    paddingVertical : 24,
  },
  topBannerTitle : {
    fontSize : 20,
    fontWeight : "700",
    marginRight : 20,
    textAlign : 'right',
    color : "black"
  },
  topBannerSubtitle : {
    fontSize : 14,
    fontWeight : "700",
    color : "black",
    marginRight : 20,
    textAlign : 'right'
  },
  BannerTextContainer:{
    // justifyContent : 'flex-start'
  },
  BannerCounterPage : {
    marginLeft : 20,
    fontSize : 20,
    fontWeight : "700",
    color : "black",
  },
  BannerCounterTotal : {
    fontSize : 10,
    fontWeight : "700",
    color : "black",
  },
  BannerCounterContainer : {
    flexDirection : 'row',
    alignItems : 'flex-end'
  }
})

export default Banner;