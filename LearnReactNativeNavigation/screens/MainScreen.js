import React from "react";
import { Text, View, Button} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


function HomeScreen({navigation}) {
  return (
    <View>
      <Button title="Detail 1 열기" onPress={()=>navigation.push('Detail', {id: 1})}/>
    </View>
  )
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

function NotificationScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

function MessageScreen() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  )
}

function MainScreen() {
  return(
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        tabBarShowLabel : false,
      }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({color}) => 
              <Icon name="home" color={color} size={24} />,
          }}
        />
        <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
            tabBarIcon : ({color}) =>
              <Icon name="search" color={color} size={24} />
          }} 
          />
        <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{
            tabBarIcon : ({color}) => 
            <Icon name="notifications" color={color} size={24} />,
          }}
          />
        <Tab.Screen 
        name="Message" 
        component={MessageScreen} 
        options={{
            tabBarIcon : ({color}) =>
            <Icon name="message" color={color} size={24} />,
          }}
          />
      </Tab.Navigator>
  )
}

export default MainScreen;