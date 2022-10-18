/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon,HeartIcon,MapIcon,PencilSquareIcon,Cog6ToothIcon } from 'react-native-heroicons/outline';

import HomeScreen from './src/screens/Home/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { color } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function SignInScreen() { return <LoginScreen/>}
function MainScreen() { return <HomeScreen/>}
function WishScreen() { return <Text>wish</Text>}
function MapScreen() { return <Text>map</Text>}
function SnsScreen() { return <Text>sns</Text>}
function SettingScreen() { return <Text>settings</Text>}



const App = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen 
          name="Home" 
          component={MainScreen}
          options = {{
            tabBarIcon : ()=> {return <HomeIcon size={24} color={"#000"} />},
            tabBarShowLabel : true,
            tabBarActiveTintColor : "#6BB8D0",
          }}
          />
          <Tab.Screen 
          name="Wish" 
          component={WishScreen}
          options = {{
            tabBarIcon : ()=> {return <HeartIcon size={24} color={"black"}/>},
            tabBarShowLabel : true,
            tabBarActiveTintColor : "#6BB8D0"
          }}
          initialParams 
          />
          <Tab.Screen 
          name="Map" 
          component={MapScreen}
          options = {{
            tabBarIcon : ()=> {return <MapIcon size={24} color={"black"}/>},
            tabBarShowLabel : true,
            tabBarActiveTintColor : "#6BB8D0"
          }}
          />
          <Tab.Screen 
          name="SNS" 
          component={SnsScreen}
          options = {{
            tabBarIcon : ()=> {return <PencilSquareIcon size={24} color={"black"}/>},
            tabBarShowLabel : true,
            tabBarActiveTintColor : "#6BB8D0"
          }}
          />
          <Tab.Screen 
          name="Settings" 
          component={SettingScreen}
          options = {{
            tabBarIcon : ()=> {return <Cog6ToothIcon size={24} color={"black"}/>},
            tabBarShowLabel : true,
            tabBarActiveTintColor : "#6BB8D0"
          }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;
    
    // const styles = StyleSheet.create({
    //   root : {
    //     flex : 1,
    //     backgroundColor : "#F9FbFc"
    //   },
    // });
    
    
    
    
    
    
    
    // <Stack.Navigator>
    //   {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
    //   <Stack.Screen name='Home' component={HomeScreen}/>
    //     {/* <SafeAreaView style={styles.root}>
    //       <LoginScreen />
    //     </SafeAreaView> */}
    // </Stack.Navigator>