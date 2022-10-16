import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";

const CustomButton = ({onPress, text, type = "Primary", bgColor, fgColor})=>{
  return (
    <Pressable 
    onPress={onPress} 
    style={[
      styles.container, 
      styles[`container_${type}`],
      bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color : fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius : 10,
    width : "100%",
    justifyContent :"center",
    alignItems : "center",
    padding : 16,
    marginBottom : 16,
    height : 56
  },
  container_Input : {
    marginBottom : 16,
  },
  container_Primary :{
    backgroundColor : "#6BB8D0",
    marginTop : 48,
  },
  container_Tertiary : {

  },
  text : {
    fontSize : 16,
    color: "white",
    fontWeight : "700",
  },
  text_Tertiary :{
    color : "gray",
    fontSize : 12
  },
  text_Register : {
    fontSize : 10,
    color : "#848484",
    
  }
})

export default CustomButton