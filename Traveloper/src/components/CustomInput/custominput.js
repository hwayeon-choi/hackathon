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

})

export default Custominput;