import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from './MainStack'
import AuthStack from './AuthStack';
export default function Routes() {
    const Stack = createNativeStackNavigator();
    const isLogin = false;
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
{isLogin ? MainStack(Stack) : AuthStack(Stack)}
    </Stack.Navigator>
   </NavigationContainer>

  )
}