import React from 'react';
import {Button} from 'react-native';

function HomeButtons({navigation}) {
  return (
    <Button
    title="Detail 1 열기"
    onPress={() =>
      navigation.push('Detail', {
        id: 1,
      })
    }/>
  );
}


export default HomeButtons;
