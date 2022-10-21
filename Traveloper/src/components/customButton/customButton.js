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
    marginTop : 32,
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
    
  },
  container_MainButton : {
    backgroundColor : "#6BB8D0",
    height : 102,
    width : "100%",
    marginTop : 24,
    marginBottom : 24,
  },
  container_hashtagButton : {
    backgroundColor : "#000",
    height : 50,
    color : "#FFF",
    borderRadius : 30,
  },
  container_dateButton : {
    backgroundColor : "#000",
    height : 60,
    marginTop : 16,
    color : "#FFF",
    borderRadius : 10,
    marginBottom : 20
  },
  container_location : {
    backgroundColor : "#000",
    height : 260,
    color : "#FFF",
    borderRadius : 10,
  },
  container_dogInfo : {
    backgroundColor : "#000",
    height : 60,
    color : "#FFF",
    borderRadius : 10,
  },
  container_transportation : {
    backgroundColor : "#000",
    width : "48%",
    height : 60,
    color : "#FFF",
    borderRadius : 10,
  },
  container_fillterReset : {
    backgroundColor : "#000",
    width : 60,
    height : 60,
    color : "#FFF",
    borderRadius : 10,
    marginRight : 16,
  },
  container_fillterChoose : {
    backgroundColor : "#000",
    flex : 1,
    height : 60,
    color : "#FFF",
    borderRadius : 10,
  }
})

export default CustomButton