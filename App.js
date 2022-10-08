import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './Screens/MainScreen';
import DetailScreen from './Screens/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          /* 홈 탭의 메인 콘텐츠 */
          component={MainScreen}
          options={{headerShown: false}}
        />
        {/* MainScreen의 버튼을 누르면 이동하게 되는 상세 화면 */}
        <Stack.Screen name="Detail" component={DetailScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;