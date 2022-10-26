import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';

const loginDefault = { login : 'true' };
const loginContext = createContext(loginDefault)

function App() {
  return (
    <loginContext.Provider value={{ login : 'false'}}>
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
    <loginContext.Provider value={{ login : 'false'}}>
      <View>
        <Text>Sub1.js</Text>
        <Text>{JSON.stringify(login)}</Text>
        <Sub2 />
      </View>
    </loginContext.Provider>
  );
}

function Sub2() {
  const login = useContext(loginContext);
  return (
    <loginContext.Provider value={{ login : 'false'}}>
      <View>
        <Text>Sub2.js</Text>
        <Text>{JSON.stringify(login)}</Text>
        <Sub3 />
      </View>
    </loginContext.Provider>
  );
}

function Sub3() {
  const login = useContext(loginContext);
  return (
    <loginContext.Provider value={{ login : 'false'}}>
      <View>
        <Text>Sub3.js</Text>
        <Text>{JSON.stringify(login)}</Text>
      </View>
    </loginContext.Provider>
  );
}

export default App;