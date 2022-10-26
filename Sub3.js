import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';

function Sub3() {
  const login = useContext(loginContext);
  return (
    <loginContext.Provider>
      <View>
        <Text>Sub3.js</Text>
        <Text>{JSON.stringify(login)}</Text>
      </View>
    </loginContext.Provider>
  );
}

export default Sub3;