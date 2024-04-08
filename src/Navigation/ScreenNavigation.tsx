/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import {FullScreen, ScrollScreen} from '../Screens';
const Stack = createNativeStackNavigator();
const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="ScrollScreen" component={ScrollScreen} />
        <Stack.Screen name="FullScreen" component={FullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
