import React from 'react';
import { Button, } from "react-native";
import { useNavigation, } from "@react-navigation/native";

function HomeButtons() {
  const navigation = useNavigation();
  return (
    <>
      <Button title="강원"
        onPress={()=>
          navigation.push('Detail', {area:"강원"})
        }/>
      <Button title="경기/서울/인천"
        onPress={()=>
          navigation.push('Detail', {area:"경기/서울/인천"})
        }/>
      <Button title="경남/부산/울산"
        onPress={()=>
          navigation.push('Detail', {area:"경남/부산/울산"})
        }/>
      <Button title="경북/대구"
        onPress={()=>
          navigation.push('Detail', {area:"경북/대구"})
        }/>
      <Button title="전남/광주"
        onPress={()=>
          navigation.push('Detail', {area:"전남/광주"})
        }/>
      <Button title="전북"
        onPress={()=>
          navigation.push('Detail', {area:"전북"})
        }/>
      <Button title="제주"
        onPress={()=>
          navigation.push('Detail', {area:"제주"})
        }/>
      <Button title="충남/대전/세종"
        onPress={()=>
          navigation.push('Detail', {area:"충남/대전/세종"})
        }/>
      <Button title="충북"
        onPress={()=>
          navigation.push('Detail', {area:"충북"})
        }/>
    </>
  );
}
export default HomeButtons;