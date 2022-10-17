import React,{useLayoutEffect, useState} from "react";
import { View, Text, Image , StyleSheet, TextInput, Button, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../components/customButton/customButton";
import Custominput from "../components/customInput/custominput"

const LoginScreen = ()=> {

  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPress = () => {
    console.warn('Sign in')
  }

  const FindAccount = ()=> {
    console.warn('아이디 비밀번호 찾기')
  }

  const onSignInGoogle = ()=>{
    console.warn("Google로 로그인")
  }

  const onSignInApple = ()=>{
    console.warn("apple로 로그인")
  }

  const onRegister = ()=> {
    console.warn('회원가입하기')
  }

  return(
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>로그인</Text>
      <Text style={styles.subtitle}>아이디</Text>

      <Custominput 
      placeholder="이메일 입력" 
      value={username} 
      setValue={setUsername} 
      type="Input"
      />

      <Text style={styles.subtitle}>비밀번호</Text>

      <Custominput 
      placeholder="비밀번호" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true} 
      type="Input"
      />

      <CustomButton 
      onPress={onSignInPress} 
      text="로그인"
      />
    
      <CustomButton 
      text="아이디/비밀번호 찾기" 
      onPress={FindAccount}
      type="Tertiary" 
      />

      <CustomButton 
      onPress={onSignInGoogle} 
      text="Google"
      bgColor = "#6AA983"
      fgColor = "#fff"
      type="Tertiary" 
      />

      <CustomButton 
      onPress={onSignInApple} 
      text="Apple"
      bgColor = "#000"
      fgColor = "#fff"
      type="Tertiary" 
      />

      <CustomButton 
      onPress={onRegister} 
      text="아직 트래블로퍼의 회원이 아니신가요? 회원가입하기"
      bgColor = "transparent"
      type="Register"
      />

    </View>
  // {/* </ScrollView> */}
  )
}

const styles = StyleSheet.create({
  title : {
    fontSize : 30,
    marginTop : 56,
    fontWeight : "700",
    color : 'black'
  },
  subtitle : {
    fontSize : 14,
    fontWeight : "700",
    marginTop : 24,
    color : 'black',
    marginBottom : 10,
  },
  root : {
    flex:1,
    padding : 20,
  },
  input : {
    // marginTop : 10,
  },
  submit : {
    width: "100%",
    height : 56,
    borderRadius : 10,
    backgroundColor : "#6BB8D0",
    marginTop : 16,
    color:"white",
    alignItems :"center",
    justifyContent :"center"
  },
  submittext : {
    color : "#fff",
    fontWeight : "700",
  },
})

export default LoginScreen;