import { Text,View, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import HashTag from "./HashTag"
import CategoryContainer from '../../components/Box/CategoryContainer'


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

      {/* 카테고리 컨테이너 : 탭 + 리스트  */}
      <CategoryContainer/>
      
    </SafeAreaView>
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
  