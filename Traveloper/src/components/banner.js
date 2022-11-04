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
  const [textColor, setTextcolor] = useState("black")
  const [message, setMessage] = useState("댕댕이와 1111")

  /* 시도 1 */
  const imageContainer = [dog_surf1, walktogether, restaurant2, photospot,dog_surf2]

  /* 타이머 */
  // setTimeout(()=>{onIncrease()}, 2000);

  /* 기존 이벤트 */
  // const onIncrease=()=>{
  //   if(number<=4){ // 1부터 5까지 증가하고 
  //     setNumber(number+1) // 숫자
  //     const getImage = imageContainer[number-1]
  //     setImage(getImage) // 사진
  //     console.log(number)
  //   } else { // 다시 1부터 시작하는 카운터
  //     setNumber(1) // 숫자
  //     const getImage = imageContainer[number-1]
  //     setImage(getImage) // 사진
  //     console.log(number)
  //   }
  // }

  /* 글자색 포함 이벤트 */
  const onIncrease=()=>{
    if(number===1){ //5
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("white")
      setMessage("댕댕이와 서핑 즐기기")

    } else if(number===2){ //1
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("black")
      setMessage("댕댕이와 산책하기")


    } else if(number===3){ //2
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("white")
      setMessage("댕댕이와 외식하기")


    } else if(number===4){ //3
      setNumber(number+1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("white")
      setMessage("댕댕이와 사진찍기")


    } else if(number===5){
      setNumber(1)
      const getImage = imageContainer[number-1]
      setImage(getImage) 
      console.log(number)
      setTextcolor("black")
      setMessage("댕댕이와 서핑 즐기기")

    }
  }

  /* 글자 바꿀거 : 검정글자 기준으로 */
  // 1: 잘보임 => 검정 그대로
  // 2: 안보임 => 흰색으로
  // 3: 잘보임 => 검정 그대로
  // 4: 안보임 => 흰색으로
  // 5: 안보임 => 흰색으로

  /* too many rerender */
  // if 번호가 2번 or 4번 or 5번이면 textColor를 흰색으로 바꿔줘
  // else textColor를 검정색으로 바꿔줘
  // if(number===2){
  //   setTextcolor("white")
  // } else {
  //   setTextcolor("black")
  // }
  
  return(
    <>
      <ImageBackground source={image} style={styles.topBanner} onPress={onIncrease}
      >
        <View style={styles.BannerTextContainer}>
          <Text style={[styles.topBannerSubtitle, {color:textColor}]}>
            남해여행
          </Text>
          <Text style={[styles.topBannerTitle, {color:textColor}]}>
            {message}
          </Text>
        </View>

        <View style={styles.BannerCounterContainer}>
          {/* <Button title="<" color='gray'/> */}
          <Text style={[styles.BannerCounterPage, {color:textColor}]}>
            {number}
          </Text>
          <Text style={[styles.BannerCounterTotal, {color:textColor}]}>
            / 5
          </Text>
          {/* <Button title=">" color='gray' onPress={onIncrease}/> */}
        </View>
      </ImageBackground>

    </>
  )
}

const styles = StyleSheet.create({
  topBanner: {
    width: '100%',
    height: 283,
    justifyContent : 'flex-start',
    alignItems : 'flex-end',
    flexDirection : 'row',
    paddingVertical : 24,
  },
  topBannerTitle : {
    fontSize : 20,
    fontWeight : "700",
    marginRight : 20,
    textAlign : 'right',
    // color : {textColor}
  },
  topBannerSubtitle : {
    fontSize : 14,
    fontWeight : "700",
    // color : {textColor},
    marginRight : 20,
    textAlign : 'right'
  },
  BannerCounterPage : {
    marginLeft : 20,
    fontSize : 20,
    fontWeight : "700",
    // color : {textColor},
  },
  BannerCounterTotal : {
    fontSize : 10,
    fontWeight : "700",
    // color : {textColor},
  },
  BannerCounterContainer : {
    flexDirection : 'row',
    alignItems : 'flex-end'
  }
})

export default Banner;