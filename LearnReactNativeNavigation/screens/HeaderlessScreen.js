import React from "react";
import { View, Text, Button } from "react-native";

function HeaderlessScreen({navigation}) {
  return(
    <View>
      <Text>Header 가 없네?</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기"/>
    </View>
  )
}

export default HeaderlessScreen;