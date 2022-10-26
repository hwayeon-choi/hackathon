import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';
import Sub2 from './Sub2';

function Sub1() {
  const login = useContext(loginContext);
  return (
    <loginContext.Provider>
      <View>
        <Text>Sub1.js</Text>
        <Text>{JSON.stringify(login)}</Text>
        <Sub2 />
      </View>
    </loginContext.Provider>
  );
}

export default Sub1;