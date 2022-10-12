import React,{ useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function DetailScreen({route, navigation}) {
  // route 는 객체타입의 Props  
  // console.log({route});
  // {"route": {"key": "Detail-AvO2HkaGuBUVQR1WsmijC", "name": "Detail", "params": {"id": 1}}}

  useEffect(()=> {
    navigation.setOptions({
      title : `상세정보 - ${route.params.id}`
    });
  }, [navigation, route.params.id]);

  return(
    <View style={styles.block}>
      <Text style={styles.text}>id:{route.params.id}</Text>
      <View style={styles.buttons}>
        <Button title="다음" onPress={ () => navigation.push('Detail', {id: route.params.id + 1})}/>
        <Button title="뒤로" onPress={ () => navigation.pop()}/>
        <Button title="처음" onPress={ () => navigation.popToTop()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex : 1,
    alignItems:"center",
    justifyContent : "center"
  },
  text : {
    fontSize : 48,
  },
  buttons : {
    flexDirection : "row"
  },
})

export default DetailScreen;