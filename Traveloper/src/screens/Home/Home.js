import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import CustomButton from '../../components/customButton/customButton';
import Banner from '../../components/banner';
import Donation from '../../components/donation';
import Top10Place from '../../components/Top10Place';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = (props)=> {
  
  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return(
      <ScrollView>
        <SafeAreaView style={styles.root}>
            <Banner/>
            <View style={styles.MainButtonContainer}>
              <CustomButton 
              onPress={()=> navigation.navigate('FindRoute',{id : 1})} 
              text="어디로 떠나시나요?"
              type='MainButton'/>
              <Text style={styles.DonationTitle}>후원 이렇게 했어요</Text>
              <Donation/>
              <Text style={styles.Top10Title}>Top 10 플레이스</Text>
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
  DonationTitle : {
    color:"black", fontWeight : "700"
  },
  Top10Title : {
    color:"black", 
    fontWeight : "700", 
    marginTop:24,
    marginBottom : 16
  }
})

export default Home;