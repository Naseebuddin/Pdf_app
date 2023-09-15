import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from './MainStack'
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
export default function Routes() {
    const Stack = createNativeStackNavigator();
   const userData  = useSelector(state=>state.stateData.isLogin);
   console.log(userData,'router');
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
{userData  ? MainStack(Stack) : AuthStack(Stack)}
    </Stack.Navigator>
   </NavigationContainer>

  )
}