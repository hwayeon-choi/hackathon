import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home/Home';
import Map from '../screens/Map/Map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeIcon,HeartIcon,MapIcon,PencilSquareIcon,Cog6ToothIcon } from 'react-native-heroicons/outline';

const Tab = createBottomTabNavigator();

function WishScreen() { return <Text>wish</Text>}
function SNSScreen() { return <Text>sns</Text>}
function SettingScreen() { return <Text>settings</Text>}

const HomeTabNavigator = ({props,color}) => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor : "#6BB8D0"
      }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon : ({color})=> (
            <HomeIcon name="home" size={24} color={color}/>
          )
        }}
        />
        <Tab.Screen 
        name="Wish" 
        component={WishScreen}
        options={{
          tabBarIcon : ({color})=> (
            <HeartIcon name="home" size={24} color={color}/>
          )
        }}
        />
        <Tab.Screen 
        name="Map" 
        component={Map}
        options={{
          tabBarIcon : ({color})=> (
            <MapIcon name="home" size={24} color={color}/>
          )
        }}
        />
        <Tab.Screen 
        name="SNS" 
        component={SNSScreen}
        options={{
          tabBarIcon : ({color})=> (
            <PencilSquareIcon name="home" size={24} color={color}/>
          )
        }}
        />
        <Tab.Screen 
        name="Setting" 
        component={SettingScreen}
        options={{
          tabBarIcon : ({color})=> (
            <Cog6ToothIcon name="home" size={24} color={color}/>
          )
        }}
        />
        
    </Tab.Navigator>
  )
}

export default HomeTabNavigator