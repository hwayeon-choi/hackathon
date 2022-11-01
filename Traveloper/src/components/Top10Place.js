import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import Top10Box from './Box/Top10Box'
import { ScrollView } from 'react-native-gesture-handler'

const Top10Place = () => {
  return (
    // <ScrollView>
    <View style={[{width : '100%', height : 480, borderRadius : 10, marginBottom : 32, justifyContent : 'space-between', alignItems : 'center'}]}>
      {/* 탑플레이스 상단 카테고리/기간 */}
      <View style={styles.Topbar}>
        {/* 카테고리 */}
        <View style={styles.TopbarCategory}><Text>카테고리 설정</Text></View>
        {/* 기간 */}
        <View style={styles.TopbarPeriod}><Text>기간</Text></View>
      </View>
      
      {/* 탑플레이스 리스트 */}

      {/* 회색 bg */}
      <ScrollView style={styles.ListBg} nestedScrollEnabled={true}>
        <Top10Box placename={"업체1"} id={1}/>
        <Top10Box placename={"업체2"} id={2}/>
        <Top10Box placename={"업체3"} id={3}/>
        <Top10Box placename={"업체4"} id={4}/>
        <Top10Box placename={"업체5"} id={5}/>
        <Top10Box placename={"업체6"} id={6}/>
        <Top10Box placename={"업체7"} id={7}/>
        <Top10Box placename={"업체8"} id={8}/>
        <Top10Box placename={"업체9"} id={9}/>
        <Top10Box placename={"업체10"} id={10}/>
      </ScrollView>

    </View>
    // </ScrollView>
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
    height : "100%",
    backgroundColor : "#d9d9d9",
    borderRadius : 10,
    paddingHorizontal : 10,
    paddingVertical : 16, 
    marginTop : 24

  },
})

export default Top10Place