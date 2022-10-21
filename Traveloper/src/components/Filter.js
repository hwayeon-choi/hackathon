import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChevronDownIcon,ArrowPathRoundedSquareIcon } from 'react-native-heroicons/outline'

import FindRoute from '../screens/Home/FindRoute'
import { TextInput } from 'react-native-gesture-handler'
import Location from './customButton/Location'

const Stack = createNativeStackNavigator();

const Filter = ({navigation}) => {
  return (
      <NavigationContainer independent={true} >
          <View style={styles.root}>
            {/* 아래화살표 */}
            <ChevronDownIcon size={24} color={"#000"}/>
            {/* 여행날짜 선택하기 */}
            <Pressable style={styles.date}>
              <Text style={{fontSize:14,color : "#8F8F8F"}}>여행 날짜 선택하기</Text>
            </Pressable>
            {/* 여행지역 선택하기 */}
            <Pressable style={styles.location}>
              <Text style={{fontSize:16,color : "#000",fontWeight : "500"}}>어디로 떠나시나요?</Text>
              <Location/>
            </Pressable>

            {/* 강아지정보 */}
            <Text style= {{
              width :"100%",
              fontSize:16,color : "#000",
              fontWeight : "500"
              }}>강아지 정보</Text>

            <Pressable style={styles.dog}>
              <Text style={{fontSize:14,color : "#000",fontWeight : "500", marginRight:10}}>소형견</Text>
              <ChevronDownIcon color={"#000"} size={18}/>
            </Pressable>

            {/* 이동수단*/}
            <Text style= {{
              width :"100%",
              fontSize:16,color : "#000",
              fontWeight : "500", 
              marginTop : 16
              }}>이동수단</Text>

            {/* 자가용 + 대중교통 컨테이너 */}
            <View style={{
              flexDirection : 'row',
              width: "100%",
              justifyContent:'space-between'
              }}>
              
              {/* 자가용 */}
              <Pressable style={styles.car}>
                <Text style={{fontSize:14,color : "#000",fontWeight : "500", marginRight:10}}>자가용</Text>
              </Pressable>

            {/* 도보 */}
              <Pressable style={styles.walk}>
                <Text style={{fontSize:14,color : "#000",fontWeight : "500", marginRight:10}}>도보</Text>
              </Pressable>
            </View>

            {/* 결과보기 리셋 버튼 컨테이너 */}
            <View style={{
              flexDirection : 'row', 
              width: "100%", 
              justifyContent:'space-between'
              }}
              >

              {/*리셋 버튼 */}    
              <Pressable 
              style={styles.fillterReset}
              >
                <ArrowPathRoundedSquareIcon color={"#8F8F8F"}/>
              </Pressable>

              {/* 결과보기 버튼 */}
              <Pressable 
              style={styles.fillterSelect}
              onPress={()=> navigation.navigate('FindRoute')}
              >
                <Text style={{
                  fontSize:14,
                  color : "#fff",
                  fontWeight : "500", 
                  marginRight:10
                  }}
                  >결과보기
                </Text>
              </Pressable>
            </View>

          </View>
      </NavigationContainer>

    // </Tab.Screen>
  )
}

const styles = StyleSheet.create({
  root  : {
    backgroundColor : "#fff",
    width : '100%',
    height : "100%",
    borderRadius : 10,
    zIndex : 1,
    top : 32,
    padding : 20,
    alignItems : 'center',
    shadowColor : "#333",
    shadowOpacity : 0.4,
    shadowOffset : {
      width : 10,
      height : 10,
    },
    elevation : 10
  },
  date : {
    backgroundColor : "#EBEBEB",
    width : "100%",
    height : 60,
    marginTop : 16,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  location : {
    backgroundColor : "#EBEBEB",
    width : "100%",
    height : 260,
    marginTop : 16,
    borderRadius : 10,
    marginBottom : 16,
    paddingHorizontal : 16,
    paddingVertical : 24
  },
  dog : {
    backgroundColor : "#EBEBEB",
    width : "100%",
    height : 60,
    marginTop : 16,
    borderRadius : 10,
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    padding : 16
  },
  car : {
    backgroundColor : "#EBEBEB",
    width : "48%",
    height : 60,
    marginTop : 16,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 16
  },
  walk : {
    backgroundColor : "#EBEBEB",
    width : "48%",
    height : 60,
    marginTop : 16,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 16
  },
  fillterReset : {
    backgroundColor : "#EBEBEB",
    width : 60,
    height : 60,
    color : "#FFF",
    borderRadius : 10,
    marginRight : 16,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 24,
  },
  fillterSelect : {
    backgroundColor : "#000",
    flex : 1,
    height : 60,
    color : "#FFF",
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 24,

  }
})

export default Filter