import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import React, { useState } from 'react'

import banner6 from '../../asset/img/banner6.jpg'
import banner4 from '../../asset/img/banner4.jpg'
import banner7 from '../../asset/img/banner7.jpg'
import banner3 from '../../asset/img/banner3.jpg'
import dog_surf2 from '../../asset/img/dog_surf2.jpg'

const Banner = ()=> {
  const [number, setNumber] = useState(1)
  const [image, setImage] = useState(dog_surf2)
  const [textColor, setTextcolor] = useState("black")
  const [message, setMessage] = useState("댕댕이와 서핑 떠나기")
  const [subMessage, setSubMessage] = useState("남해여행")

  const imageContainer = [
    banner6, banner4 , banner7, banner3 ,dog_surf2
  ]

  /* 타이머 */
  setTimeout(()=>{onIncrease()}, 3000);

  const onIncrease=()=>{
    if(number===1){
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("black")
      setMessage("댕댕이와 산책하기")
      setSubMessage("생애 첫 산책")

    } else if(number===2){
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("white")
      setMessage("댕댕이와 외식하기")
      setSubMessage("견슐랭스타")


    } else if(number===3){
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("black")
      setMessage("댕댕이와 산책가기")
      setSubMessage("공원탐방기")


    } else if(number===4){
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("black")
      setMessage("댕댕이와 놀러가기")
      setSubMessage("남해여행")


    } else if(number===5){
      setNumber(1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("black")
      setMessage("댕댕이와 체험 즐기기")
      setSubMessage("익사이팅")
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
          <Text style={[styles.BannerCounterPage,{color : textColor}]}>{number}</Text>
          <Text style={[styles.BannerCounterTotal,{color : textColor}]}>/5</Text>
        </View>

        <View style={styles.BannerTextContainer}>
          <Text style={[styles.topBannerSubtitle,{color : textColor}]}>{subMessage}</Text>
          <Text style={[styles.topBannerTitle, {color : textColor}]}>{message}</Text>
        </View>
      </ImageBackground>
    </>
  )}

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