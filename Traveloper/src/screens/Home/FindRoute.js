import { Text,View, StyleSheet, SafeAreaView, Pressable,ScrollView ,AsyncStorageStatic, BackHandler, Alert } from 'react-native'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Listbox from '../../components/Box/ListBox'
import CategoryBox from '../../components/Box/CategoryBox'
import CompanyName from '../../components/Box/CompanyName'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Filter from '../../components/Filter'
import HashTag from "./HashTag"


const Stack = createNativeStackNavigator();


const FindRoute = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.root}>
      {/* 검색창 + 해시태그 버튼  */}
      <View style={styles.containerOne}>
        {/* 필터검색버튼 */}
        <Pressable 
        style={styles.input} 
        onPress={()=> navigation.navigate('Filter')} 
        >
          <MagnifyingGlassIcon color={"#ccc"}/>
        </Pressable>
        {/* 해시태그버튼 */}
        <HashTag/>
      </View>

      {/* 카테고리 컨테이너  */}
      <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator = {false} 
      style={styles.categoryContainer}>
        <CategoryBox/>
        {/* <CategoryBox text={"식당"}></CategoryBox>
        <CategoryBox text={"숙소"}></CategoryBox>
        <CategoryBox text={"카페"}></CategoryBox>
        <CategoryBox text={"운동장"}></CategoryBox>
        <CategoryBox text={"산책 & 공원"}></CategoryBox> */}
      </ScrollView>
      
      {/* 업체리스트 컨테이너  */}
      <ScrollView style = {styles.listContainer}>
        <CompanyName 
        region_name={"부산광역시"}
        dog_type={"소형견"}
        place_type={"카페"} 
        />
      </ScrollView>
    </SafeAreaView>
    // {/* <FillterPopUP/> */}
  )
}

const styles = StyleSheet.create({
  root : {
    padding : 20,
    width: "100%",
    height : "100%",
    zIndex : 1,
    position : 'absolute',
  },
  containerOne : {
    flexDirection : 'row',
    height : 50,
    justifyContent : 'space-between',
    marginTop : 64,
  },
  input : {
    width : "75%",
    backgroundColor : "#F9FbFc",
    borderRadius : 30,
    borderColor : "#e0e0e0",
    borderWidth : 1,
    justifyContent : 'center',
    padding : 16
  },
  categoryContainer : {
    flexDirection : 'row',
    width : "100%",
    height : 48,
    marginTop : 16,
  },
  listContainer : {
    width : "100%",
    height : "75%",
    marginTop : 24,
  },
  hashTagContainer : {
    backgroundColor : "#000",
    width : "20%",
    height : 50,
    color : "#FFF",
    borderRadius : 30,
    justifyContent :'center',
    alignItems : "center"
  },
  hashTag : {
    color: "#fff", 
    fontWeight:"900", 
    fontSize : 16
  }
})


export default FindRoute;