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

/* const HowOX = () => {
  
  return(
    <>
    <Button
    title="getLikeOX"
    onPress={()=> favoriteModule.getLikeOX(1, 3),}/>
    <Text>{LikeOX}</Text>
    </>
  ) */
/*   const getLikeOX = (userId, placeId) => {
    fetch(`http://${localhost}:${port}/likeOX?userId=${userId}&placeId=${placeId}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    setLikeOX(data)
  } */


const App = () => {
  const localhost = "172.30.1.95"
  const port = "3000"
  const [LikeOX, setLikeOX] = useState();
  useCallback(async () => {
    const result = await fetch(`http://${localhost}:${port}/likeOX?userId=${userId}&placeId=${placeId}`);
    const data = await result.json();
    if (result.ok) {
      setLikeOX(data);
    }
  });
  useEffect(() => {
    setLikeOX();
  }, []);
  return (
      <View>
        <LoginStatus/>

        {/* <Button
          title="getLikeOX"
          onPress={()=> getLikeOX(1, 3)}/> */}

        <Text>{LikeOX}</Text>

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