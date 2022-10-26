import React, { useState, createContext } from 'react';
import { View, Text, Button } from 'react-native';
import favoriteModule from './FavoriteModule';

const LoginStatus = () =>{
  const [isLogin, setLogin] = useState("로그인 하시겠습니까?");
  return (
    <>
      <Button title="로그인"onPress={() => {
        setLogin(!isLogin),
        console.log(isLogin ? "로그인 하시겠습니까?" : "로그인 되었습니다.")}
      } />
    </>
  )
}

function App() {
  return (
      <View>
        <LoginStatus/>

        <Button
          title="getLikeOX"
          onPress={()=> favoriteModule.getLikeOX(1, 3)}/>

        <Button
          title="postLike"
          onPress={()=> favoriteModule.postLike("like", 1, 3)}/>

        <Button
          title="getWishlist"
          onPress={()=>favoriteModule.getWishlist(1, 3)}/>

        <Button
          title="getPopular"
          onPress={()=>favoriteModule.getPopular()}/>
      </View>
  );
}


export default App;