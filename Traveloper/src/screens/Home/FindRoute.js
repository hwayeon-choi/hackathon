import { View, StyleSheet, SafeAreaView, Pressable, AsyncStorageStatic, BackHandler, Alert } from 'react-native'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import {HeartIcon} from 'react-native-heroicons/solid'
import Listbox from '../../components/Box/ListBox'
import CategoryBox from '../../components/Box/CategoryBox'
import HashTagButton from '../../components/customButton/HashTagButton'
import CompanyName from '../../components/Box/CompanyName'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Filter from '../../components/Filter'


const Stack = createNativeStackNavigator();


const FindRoute = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.root}>
      {/* 검색창 + 해시태그 버튼  */}
      <View style={styles.containerOne}>
        {/* 필터검색버튼 */}
        <Pressable 
        style={styles.input} 
        onPress={()=> navigation.navigate('Filter')} >
          <MagnifyingGlassIcon color={"#ccc"}/>
        </Pressable>
        {/* 해시태그버튼 */}
        <HashTagButton/>
      </View>

      {/* 카테고리 컨테이너  */}
      <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator = {false} 
      style={styles.categoryContainer}>
        <CategoryBox text={"식당"} backgroundColor={"#333"} color={"#fff"}></CategoryBox>
        <CategoryBox text={"숙소"}></CategoryBox>
        <CategoryBox text={"카페"}></CategoryBox>
        <CategoryBox text={"운동장"}></CategoryBox>
        <CategoryBox text={"공원"}></CategoryBox>
      </ScrollView>
      
      {/* 업체리스트 컨테이너  */}
      <ScrollView style = {styles.listContainer}>
        <CompanyName/>
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
    position : 'absolute'
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
})


export default FindRoute;