import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/customButton/customButton';
import Custominput from '../components/customInput/custominput';
import {UserIcon,Bars2Icon} from "react-native-heroicons/outline"
import Banner from '../components/banner';
import Donation from '../components/donation';
import Top10Place from '../components/Top10Place';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const HomeScreen = ()=> {
  
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  const onStartPlan = () => {
    console.warn("어디로떠나시나요?")
  }


  return(
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Banner/>
        <View style={styles.MainButtonContainer}>

          <CustomButton onPress={onStartPlan} text="어디로 떠나시나요?"type='MainButton'/>
          
          <Text style={[{color:"black", fontWeight : "700"}]}>후원 이렇게 했어요</Text>
          <Donation/>
          <Text style={[{color:"black", fontWeight : "700", marginTop:24,marginBottom : 16}]}>Top 10 플레이스</Text>
          <Top10Place></Top10Place>
        </View>
      </SafeAreaView>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  root : {
    flex : 1,
    alignItems : 'center',
  },
  MainButtonContainer : {
    paddingHorizontal : 20,
    width : "100%",
  },
})

export default HomeScreen;