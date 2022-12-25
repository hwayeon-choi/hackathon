import { Text,View, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MagnifyingGlassIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';
import HashTag from "./HashTag"
import CategoryContainer from '../../components/Box/CategoryContainer'
import Filter from '../../components/Filter';
import goBackButton from '../../components/customButton/goBackButton';
import CustomButton from '../../components/customButton/customButton';


const Stack = createNativeStackNavigator();


const FindRoute = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.root}>
      <Pressable
      onPress={()=>navigation.navigate('Home')}
      style={styles.goBack} 
      >
        <ArrowLeftIcon color={'black'} size={24}/>
      </Pressable>
      {/* 검색창 + 해시태그 버튼  */}
      <View style={styles.containerOne}>
        {/* 필터검색버튼, 해시태그 버튼*/}
        <Filter/>     
        <HashTag/>
      </View>

      {/* 카테고리 컨테이너 : 탭 + 리스트  */}
      <CategoryContainer navigation={navigation}/>
      
    </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    root : {
      padding : 20,
      width: "100%",
      height : "100%",
      // zIndex : 1,
      // position : 'absolute',
    },
    containerOne : {
      flexDirection : 'row',
      width : "100%",
      height : 50,
      justifyContent : 'center',
      marginTop : 32,
    },
    goBack : {
      // backgroundColor : "#333",
      width : 24

    }
    // input : {
    //   width : "75%",
    //   backgroundColor : "#F9FbFc",
    //   borderRadius : 30,
    //   borderColor : "#e0e0e0",
    //   borderWidth : 1,
    //   justifyContent : 'center',
    //   padding : 16
    // },
  })
  
  
  export default FindRoute;
  