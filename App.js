import React from 'react';
import { View, Text, Button} from 'react-native';
import favoriteModule from './FavoriteModule';
import LoginStatus from './LoginStatus';

function App() {
  return (
      <View>
        <LoginStatus />
        <Button
          title="getLikeOX"
          onPress={()=> favoriteModule.getLikeOX(1, 3)}>
        </Button>
        <Button
          title="postLike"
          onPress={()=> favoriteModule.postLike("like", 1, 3)}>
        </Button>
        <Button
          title="getWishlist"
          onPress={()=>favoriteModule.getWishlist(1, 3)}>
        </Button>
        <Button
          title="getPopular"
          onPress={()=>favoriteModule.getPopular()}>
        </Button>
      </View>
  );
}


export default App;