import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeButtons from '../Components/HomeButtons';


const Tab = createBottomTabNavigator(); // create navigator 메소드는 호출하는 위치에 있어야 한다

function HomeScreen() {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 30 }}>지역</Text>
      <HomeButtons/>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
}

function CommunityScreen() {
  return (
    <View>
      <Text>Community</Text>
    </View>
  );
}

function MypageScreen() {
  return (
    <View>
      <Text>Mypage</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
      tabBarActiveTintColor: '#fb8c00',
      tabBarShowLabel: true,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: '홈',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{
        title: '찜',
        tabBarIcon: ({color, size}) => (
          <Icon name="favorite" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{
        title: '지도',
        tabBarIcon: ({color, size}) => (
          <Icon name="map" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Community"
        component={CommunityScreen}
        options={{
          title: '커뮤니티',
          tabBarIcon: ({color, size}) => (
            <Icon name="group" color={color} size={size} />
          ),
        }}
      />
    <Tab.Screen
      name="Mypage"
        component={MypageScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />    
      
     </Tab.Navigator>
  );
}

export default MainScreen;