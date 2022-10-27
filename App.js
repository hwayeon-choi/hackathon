import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';

const loginState = true
const LoginContext = createContext(loginDefault)

function App() {
  return (
    <loginContext.Provider value={loginState}>
      <View>
        <Text>App.js</Text>
        <Sub1 />
      </View>
    </loginContext.Provider>
  );
}

function Sub1() {
  const login = useContext(loginContext);
  return (
      <View>
        <Text>Sub1.js</Text>
        <Text>{JSON.stringify(login)}</Text>
        <Sub2 />
      </View>
  );
}

function Sub2() {
  const login = useContext(loginContext);
  return (
      <View>
        <Text>Sub2.js</Text>
        <Text>{JSON.stringify(login)}</Text>
        <Sub3 />
      </View>
  );
}

function Sub3() {
  const login = useContext(loginContext);
  return (
      <View>
        <Text>Sub3.js</Text>
        <Text>{JSON.stringify(login)}</Text>
      </View>
  );
}

export default App;