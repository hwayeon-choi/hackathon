import React, { useState, useEffect, Text, View } from "react";

const LoginStatus = () => {
  const [isLogin, setLogin] = useState(false);  
  setLogin(current => !current);
  return (
    <View>
      <button onClick={setLogin}> 로그인 </button>
    </View>
  );
}

export default LoginStatus;