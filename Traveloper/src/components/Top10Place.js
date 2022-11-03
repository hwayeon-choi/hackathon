import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Top10Box from './Box/Top10Box'
import { ScrollView } from 'react-native-gesture-handler'

const Top10Place = () => {

  const localJSON = require("../DB/data.json")
  const placeData = localJSON.map((data)=> data.company_name )
  
  const randomPlace = ()=>{
    place = placeData[Math.floor(Math.random() * placeData.length)]
    return place
  }
  // console.log(randomPlace())
  const top10Place =[] 

  top10Place.push()
  for(let i=0; i<10; i++){
    top10Place[i] = randomPlace()
  }
  console.log(top10Place)

  return (
    <View style={styles.container}>
      {/* 탑플레이스 상단 카테고리/기간 */}
      <View style={styles.Topbar}>
        {/* 카테고리 */}
        <TouchableOpacity style={styles.TopbarCategory}>
          <Text>카테고리 설정</Text>
        </TouchableOpacity>
        {/* 기간 */}
        <TouchableOpacity style={styles.TopbarPeriod}>
          <Text>기간</Text>
        </TouchableOpacity>
      </View>
      {/* 탑플레이스 리스트 */}
      <ScrollView style={styles.ListBg} nestedScrollEnabled={true}>

        {top10Place.map((data,index)=> {
          console.log(data)
          console.log(index)
          return (
            <Top10Box placename={data} id={index + 1} key={index+1}/>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width : '100%', 
    height : 520, 
    borderRadius : 10, 
    marginBottom : 32, 
    justifyContent : 'space-between', 
    alignItems : 'center'
  },
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
    paddingVertical : 8, 
    marginTop : 24
  },
})

export default Top10Place