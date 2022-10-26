import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';
import Sub3 from './Sub3';

function Sub2() {
  const login = useContext(loginContext);
  return (
    <loginContext.Provider>
      <View>
        <Text>Sub2.js</Text>
        <Text>{JSON.stringify(login)}</Text>
        <Sub3 />
      </View>
    </loginContext.Provider>
  );
}

export default Sub2;