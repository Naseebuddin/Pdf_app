import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from './MainStack'
export default function Routes() {
    const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
{MainStack(Stack)}
    </Stack.Navigator>
   </NavigationContainer>

  )
}