import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Splash from './pages/splash';
import Signin from './pages/signin';
import Signup from './pages/signup';

import Home from './pages/home';

import Screen1 from './pages/screen1';
import Screen2 from './pages/screen2';
import Screen3 from './pages/screen3';
import Screen4 from './pages/screen4';
import Screen5 from './pages/screen5';
import Screen6 from './pages/screen6';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
     
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={BottomStack} />
      {/*<Stack.Screen name="Home" component={Home} />*/}

    </Stack.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();

function Top1() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Top1 Screen1" component={Screen1} />
      <TopTab.Screen name="Top1 Screen2" component={Screen2} />
    </TopTab.Navigator>
  )
}

function Top2() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Top2 Screen4" component={Screen4} />
      <TopTab.Screen name="Top2 Screen5" component={Screen5} />
      <TopTab.Screen name="Top2 Screen6" component={Screen6} />
    </TopTab.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();

function BottomStack() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Top1"
          component={Top1}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Bottom"
          component={Screen3}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat-alert" color={color} size={30} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Top2"
          component={Top2}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen>
        <BottomStack />
      </StackScreen>
    </NavigationContainer>
  );
}

export default Navigation;