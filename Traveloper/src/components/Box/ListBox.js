import { View, Text, StyleSheet, Pressable, ImageBackground, Toucha} from 'react-native'
import React,{useState} from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'
import Detail from '../../screens/Home/Detail'

const localJSON = require('../../DB/data.json')


const Listbox = ({name,price,navigation}) => {

  const [wishColor, setWishColor] = useState("#ddd")

  const wishButton = () => {
    if(wishColor === "#ddd") {
      setWishColor("tomato")
    } else if(wishColor === "tomato") {
      setWishColor("#ddd")
    }
  } 

  return (
    <Pressable 
    style={{
      width : "100%",
      height :233,
      backgroundColor :"#ddd",
      borderRadius :10,
      marginBottom :16,
      flexDirection :  "column-reverse",
      position : 'relative',
    }}
    onPress = {() => navigation.navigate('Detail',{place : name})}
    >
      <ImageBackground
      source={require('../../../asset/img/restaurant2.jpg')}
      style={{width: "100%", height: "100%", position:'absolute'}}
      imageStyle={{borderRadius:10}}
      />
      <HeartIcon 
        color={wishColor} 
        size={24} 
        style={{
          position :'absolute',
          top : 20,
          right :20
        }}
        onPress = {wishButton}
        >
      </HeartIcon>
      <View style={{
        height : "25%",
        width : "100%",
        backgroundColor : "#000",
        // opacity : 0.7,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'space-between',
        paddingHorizontal : 20,
      }}>
        <Text style={{color:"white", fontWeight : "800"}}>{name}</Text>
        <Text style={{color:"white"}}>{price}</Text>
      </View>
    </Pressable>
  )
}
export default Listbox