import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';
import Sub1 from './Sub1';

const loginDefault = { login : 'true' };
const loginContext = createContext(loginDefault)

function App() {
  return (
    <loginContext.Provider value={loginDefault}>
      <View>
        <Text>App.js</Text>
        <Sub1 />
      </View>
    </loginContext.Provider>
  );
}

export default App;