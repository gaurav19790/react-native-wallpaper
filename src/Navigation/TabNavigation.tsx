/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SetttingScreen, LovedScreen} from '../Screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={30} color={focused ? 'black' : 'gray'} />
          ),
        }}
        name="HomeTab"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'heart',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="heart" size={30} color={focused ? 'red' : 'gray'} />
          ),
        }}
        name="heart"
        component={LovedScreen}
      />
      <Tab.Screen
        options={{
          title: 'Setting',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="settings"
              size={30}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
        name="Settings"
        component={SetttingScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
