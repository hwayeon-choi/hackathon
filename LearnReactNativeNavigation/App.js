import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderlessScreen from "./screens/HeaderlessScreen";

const Stack = createNativeStackNavigator();
// console.dir(Stack);

function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" 
    // screenOptions={{headerShown : false}}
    >  
      {/* initialRouteName = 기본적으로 보여줄 화면의 이름(초기화면)을 가리킨다. 설정하지 않으면 가장 상단의 화면이 보여진다 */}
      <Stack.Screen name="Home" component={HomeScreen} options={{title : '홈', 
      headerStyle : {
        backgroundColor: '#29b6f6'
      },
      headerTintColor : '#ffffff',
      headerTitleStyle : {
        fontWeight : "bold",
        fontSize : 20,
      }
      }}/>
      {/* name = 화면의 이름을 설정하는 Props. 공식문서에서 대문자로 작성할 것을 권장함*/}
      <Stack.Screen name="Detail" component={DetailScreen} 
        options={{
          headerBackVisible:false,
          headerLeft : ({onPress}) => (
            <TouchableOpacity onPress={onPress}>
              <Text>Left</Text>
            </TouchableOpacity>
          ),
          headerTitle : ({children}) => (
            <View>
              <Text>{children}</Text>
            </View>
          ),
          headerRight : ()=> (
            <View>
              <Text>Right</Text>
            </View>
          ),
        }} 
      /> 
      {/* 화살표 함수에서 바로 반환하면 중괄호를 생략할수 있지만 (a,b) => a+b; , 만약 바로 반환하는것이 객체라면 소괄호로 감싸줘야 한다 
      (a,b)=>({a+b})  */}
      <Stack.Screen name="Headerless" component={HeaderlessScreen} options={{headerShown : false}} />
    </Stack.Navigator>
  </NavigationContainer>
  ) 
}

export default App;