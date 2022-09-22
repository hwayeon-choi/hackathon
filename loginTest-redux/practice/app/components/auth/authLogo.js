
import React from "react";
import {View, Image} from 'react-native';

import LogoImg from '../../assets/imgs/winthiary_login_logo.png';

const LogoComponent = () => (
  <View style={{alignItems: 'center'}}>
    <Image
      source={LogoImg}
      resizeMode={'contain'}
      style={{
        width: 300,
        height: 300,
      }}
      />
  </View>
);

export default LogoComponent;