import React from 'react';
import { View, StyleSheet, Button, Alert } from "react-native";
import { useNavigation, } from "@react-navigation/native";

function HomeButtons() {
  const navigation = useNavigation();
  return (
    <>
      <Button 
        title="강원" 
        onPress={()=> 
          /* console.log("강원") */
          navigation.push('Detail', {id:1})
        }/>
      <Button 
        title="경기/서울/인천"
        onPress={()=> 
          console.log("경기/서울/인천")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="경남/부산/울산"
        onPress={()=> 
          console.log("경남/부산/울산")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="경북/대구"
        onPress={()=> 
          console.log("경북/대구")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="전남/광주"
        onPress={()=> 
          console.log("전남/광주")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="전북"
        onPress={()=> 
          console.log("전북")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="제주"
        onPress={()=> 
          console.log("제주")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="충남/대전/세종"
        onPress={()=> 
          console.log("충남/대전/세종")
          /* navigation.push('Detail', {id:1}) */
        }/>
      <Button title="충북"
        onPress={()=> 
          console.log("충북")
          /* navigation.push('Detail', {id:1}) */
        }/>
    </>
  );
}
export default HomeButtons;