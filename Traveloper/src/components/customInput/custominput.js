import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Custominput = ({value, setValue, placeholder ,secureTextEntry})=>{
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#D9D9D9",
    width : "100%",
    borderRadius : 10,
    paddingHorizontal : 10,
  },
  input : {},
  findRouteInput : {
    backgroundColor : "black",
  },
  findRouteInput : {
    height:50,
    borderRadius : 30,
    borderColor : "#e0e0e0",
    borderWidth : 1,
    backgroundColor : "#FFF",
  }

})

export default Custominput;