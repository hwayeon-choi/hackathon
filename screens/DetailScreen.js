import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: `${route.params.area}`,
    });
  }, [navigation, route.params.id]);
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{route.params.area}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;