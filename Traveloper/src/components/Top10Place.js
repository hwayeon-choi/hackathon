import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Top10Place = () => {
  return (
    <View style={[{width : '100%', height : 369, borderRadius : 10, marginBottom : 80, justifyContent : 'space-between', alignItems : 'center'}]}>
      {/* 탑플레이스 상단 카테고리/기간 */}
      <View style={styles.Topbar}>
        {/* 카테고리 */}
        <View style={styles.TopbarCategory}><Text>카테고리 설정</Text></View>
        {/* 기간 */}
        <View style={styles.TopbarPeriod}><Text>기간</Text></View>
      </View>
      
      {/* 탑플레이스 리스트 */}

      {/* 회색 bg */}
      <View style={styles.ListBg}>

        {/* 흰색 containers */}
        <View style={styles.ListContainer}>

          {/* 순위/업체사진/업체명 */}
          <View style={[{width : 163, flexDirection : "row"}]}>
            <Text>#1</Text>
            <View style={styles.ListThumnail}></View>
            <Text>업체명</Text>
          </View>

          {/* 더보기 */}
          <View >
            <View View style={styles.DetailIcons}></View>
          </View>

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Topbar : {
    width : "100%",
    height : 40,
    borderRadius : 10,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  TopbarCategory : {
    width : "65%",
    height : "100%",
    backgroundColor : "#d9d9d9",
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  TopbarPeriod : {
    width : "30%",
    height : "100%",
    backgroundColor : "#d9d9d9",
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  ListBg : {
    width : "100%",
    height : 313,
    backgroundColor : "#d9d9d9",
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    paddingHorizontal : 10,
    paddingVertical : 16, 
  },
  ListContainer : {
    width : "100%",
    height : 80,
    backgroundColor : "#fff",
    borderRadius : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : 10,
  },
  ListThumnail : {
    width : 64,
    height :64,
    backgroundColor : "black",
    borderRadius : 10,
  },
  DetailIcons : {
    width : 24,
    height :24,
    backgroundColor : "black",
    borderRadius : 10,
  }
})

export default Top10Place