import { safeAreaView,View, Text, BackHandler, Alert, StyleSheet, ImageBackground, SafeAreaView, TextInput, Pressable } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import {HeartIcon} from 'react-native-heroicons/solid'
import Listbox from '../../components/Box/ListBox'
import CategoryBox from '../../components/Box/CategoryBox'
import HashTagButton from '../../components/customButton/HashTagButton'




const Stack = createNativeStackNavigator();

const FindRoute = () => {

  const navigation = useNavigation();
  // const BackHandler = BackHandler();
  const [FindRoute, setFindRoute] = useState('');

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown : false
    })
  })

  return (
    <SafeAreaView style={styles.root}>
      {/* 검색창 + 해시태그 버튼  */}
      <View style={styles.containerOne}>
        <TextInput style={styles.input}/>
          <HashTagButton/>
      </View>

      {/* 카테고리 컨테이너  */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style={styles.categoryContainer}>
        <CategoryBox text={"맛집"}></CategoryBox>
        <CategoryBox text={"숙소"}></CategoryBox>
        <CategoryBox text={"카페"}></CategoryBox>
        <CategoryBox text={"운동장"}></CategoryBox>
        <CategoryBox text={"공원"}></CategoryBox>
      </ScrollView>
      
      {/* 업체리스트 컨테이너  */}
      <ScrollView style = {styles.listContainer}>
        
        <Listbox name={"숙소1"} price={"70,800 원"}></Listbox>
        <Listbox name={"숙소2"} price={"110,800 원"}></Listbox>
        <Listbox name={"숙소3"} price={"90,800 원"}></Listbox>
        <Listbox name={"숙소4"} price={"50,800 원"}></Listbox>
        <Listbox name={"숙소5"} price={"80,800 원"}></Listbox>
        <Listbox name={"숙소6"} price={"200,800 원"}></Listbox>
        <Listbox name={"숙소7"} price={"124,800 원"}></Listbox>
      
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root : {
    padding : 20,
  },
  containerOne : {
    flexDirection : 'row',
    height : 50,
    justifyContent : 'space-between',
    marginTop : 64
  },
  input : {
    width : "75%",
    backgroundColor : "#F9FbFc",
    borderRadius : 30,
    borderColor : "#e0e0e0",
    borderWidth : 1,
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