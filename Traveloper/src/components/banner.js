import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import React, { useState } from 'react'

const Banner = ()=> {
  const [image, setImage] = useState(1)
  const onIncrease=()=>{
    if(image<5){ // 1에서 5까지 증가하고 다시 1부터 시작하는 카운터 완성
      setImage(image+1)
    } else {
      setImage(1)
    }
  }
  return(
    <>
      <ImageBackground 
        source={require('../../asset/img/dog_surf2.jpg')}
        style={styles.topBanner}
      >
        {/* <Bars2Icon size={20} color="#000" /> */}
        <View style={styles.BannerCounterContainer}>
          <Text style={styles.BannerCounterPage}>{image}</Text>
          <Text style={styles.BannerCounterTotal}>/ 5</Text>
        </View>

        <View style={styles.BannerTextContainer}>
          <Text style={styles.topBannerSubtitle}>남해여행</Text>
          <Text style={styles.topBannerTitle}>댕댕이와 서핑 즐기기</Text>
        </View>
      </ImageBackground>
      <Button title="다음 (임시 버튼)" onPress={onIncrease}/>
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
    color : "#000"
  },
  topBannerSubtitle : {
    fontSize : 14,
    fontWeight : "700",
    color : "#000",
    marginRight : 20,
    textAlign : 'right'
  },
  BannerCounterPage : {
    marginLeft : 20,
    fontSize : 20,
    fontWeight : "700",
    color : "#333",
  },
  BannerCounterTotal : {
    fontSize : 10,
    fontWeight : "700",
    color : "#333",
  },
  BannerCounterContainer : {
    flexDirection : 'row',
    alignItems : 'flex-end'
  }
})

export default Banner;